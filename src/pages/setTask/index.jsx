import React, { useState, useEffect } from 'react'
import Taro from '@tarojs/taro'
import request from 'service/request'

import { View, Button, Image } from '@tarojs/components'
import TaskItem from './TaskItem/TaskItem'

import plus_sign from 'assets/icon/plus_sign.svg'
import './index.scss'

export default function SetTask() {
    const [taskList, setTaskList] = useState([])
    const [type, setType] = useState(0)
    useEffect(() => {
        const getType = async () => {
            await Taro.getStorage({
                key: 'type',
                success: (res) => {
                    setType(res.data)
                    updateList(res.data)
                },
            })
        }
        getType()
    }, [])

    // 刷新列表
    const updateList = (type) => {
        console.log(type)
        const queryUrl = type === 0 ? 'task/query' : 'task/user/query'
        request(queryUrl, {
            pageIndex: 1,
            pageSize: 10,
        }).then((res) => {
            setTaskList(res.data)
        })
    }
    // 查看详情 or 添加任务
    const addTask = (handleType, index) => {
        console.log(handleType, index)
        const baseUrl = `/pages/taskForm/index?handleType=${handleType}`
        const url =
            handleType === 'edit'
                ? `${baseUrl}&item=${JSON.stringify(taskList[index])}`
                : baseUrl
        Taro.navigateTo({ url })
    }
    // 删除任务
    const delTask = (taskCode) => {
        request(`task/delete?taskCode=${taskCode}`).then((res) => {
            if (res.code === 200) {
                updateList()
            }
            if (res.code === 6001) {
                Taro.showToast({
                    title: res.msg,
                    icon: 'none',
                })
            }
        })
    }
    return (
        <View className="setTask">
            {type === 0 && (
                <Button
                    className="setTask-add"
                    onClick={() => {
                        addTask('add')
                    }}
                >
                    <Image src={plus_sign} className="plus_sign" />
                    添加任务
                </Button>
            )}
            {taskList.map((item, index) => (
                <TaskItem
                    taskStart={item.taskStart}
                    taskEnd={item.taskEnd}
                    taskTime={item.taskTime}
                    taskCost={item.taskCost}
                    taskCode={item.taskCode}
                    taskStatus={item.taskStatus}
                    key={item.taskCode}
                    index={index}
                    hiddenDel={type === 0}
                    addTask={addTask}
                    delTask={delTask}
                />
            ))}
        </View>
    )
}