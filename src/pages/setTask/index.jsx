import React, { useState, useEffect } from 'react'
import Taro from '@tarojs/taro'

import { View, Button, Image } from '@tarojs/components'
import TaskItem from './TaskItem/TaskItem'

import plus_sign from 'assets/icon/plus_sign.svg'
import './index.scss'

export default function SetTask() {
    const [taskList, setTaskList] = useState([])
    const [type, setType] = useState(0)
    useEffect(() => {
        Taro.getStorage({
            key: 'type',
            success: function (res) {
                setType(res.data)
            },
        })
        setTaskList([
            {
                start: '江干区',
                end: '余杭区',
                time: '2022/3/7 上午3:56:58',
                money: '100',
                key: '0',
            },
            {
                start: '江干区',
                end: '余杭区',
                time: '2022/3/7 上午3:56:58',
                money: '100',
                key: '1',
            },
            {
                start: '江干区',
                end: '余杭区',
                time: '2022/3/7 上午3:56:58',
                money: '100',
                key: '2',
            },
            {
                start: '江干区',
                end: '余杭区',
                time: '2022/3/7 上午3:56:58',
                money: '100',
                key: '3',
            },
        ])
    }, [])
    const addTask = (type) => {
        Taro.navigateTo({
            url: `/pages/taskForm/index?type=${type}`,
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
            {taskList.map((item) => (
                <TaskItem
                    start={item.start}
                    end={item.end}
                    time={item.time}
                    money={item.money}
                    key={item.key}
                    hiddenDel={type === 0}
                    addTask={addTask}
                />
            ))}
        </View>
    )
}
