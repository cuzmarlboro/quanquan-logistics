import React, { useEffect, useState } from 'react'
import Taro from '@tarojs/taro'

import { View, Button, Icon, Input } from '@tarojs/components'
import InputCom from 'component/InputCom/InputCom'
import PickerCom from 'component/PickerCom/PickerCom'
import request from 'service/request'
import successToast from 'util/successToast'

import './index.scss'

const taskForm = () => {
    const [data, setData] = useState({
        taskStart: '',
        taskEnd: '',
        taskTime: '',
        taskWeight: '',
        taskInfo: '',
        taskCost: '',
        taskStatus: '',
        taskCode: '',
    }) // 表单数据
    const [idType, setIdType] = useState(0) // 身份
    const [taskDetail, setTaskDetail] = useState({}) // 任务详情

    useEffect(() => {
        Taro.getStorage({
            key: 'type',
            success: function (res) {
                setIdType(res.data)
                console.log('res.data', res.data)
            },
        })
        const { handleType } = Taro.Current.router.params
        if (handleType === 'edit') {
            const item = JSON.parse(Taro.Current.router.params.item)
            const newData = {
                taskStart: item.taskStart,
                taskEnd: item.taskEnd,
                taskTime: item.taskTime,
                taskWeight: item.taskWeight,
                taskInfo: item.taskInfo,
                taskCost: item.taskCost,
                taskStatus: item.taskStatus,
                taskCode: item.taskCode,
            }
            console.log(newData)
            setData(newData)
            setTaskDetail(item)
        }
    }, [])
    const onInput = (event, type) => {
        let newData = { ...data }
        newData[type] = event.detail.value
        setData(newData)
    }
    // 新增 or 编辑
    const saveTask = () => {
        const { handleType } = Taro.Current.router.params
        if (handleType === 'edit' && taskDetail.taskStatus === 1) {
            Taro.showToast({
                title: '任务已被接收，无法重新编辑',
                icon: 'none',
            })
            return false
        }
        const url = handleType === 'edit' ? 'task/edit' : 'task/add'
        const text = handleType === 'edit' ? '任务编辑成功' : '任务派发成功'
        const params =
            handleType === 'edit'
                ? { ...data, taskCode: taskDetail.taskCode }
                : data
        request(url, params).then((res) => {
            if (res.code === 200) {
                successToast(text, () => {
                    Taro.reLaunch({
                        url: `/pages/setTask/index`,
                    })
                })
            }
        })
    }
    // 接收任务
    const acceptTask = () => {
        if (taskDetail.taskStatus === 1) {
            Taro.showToast({
                title: '您已接收该任务',
                icon: 'success',
            })
        } else {
            request(`task/accept?taskCode=${taskDetail.taskCode}`).then(
                (res) => {
                    if (res.code === 200) {
                        successToast('任务接收成功', () => {
                            Taro.reLaunch({
                                url: `/pages/setTask/index`,
                            })
                        })
                    }
                }
            )
        }
    }
    return (
        <View className="taskForm">
            {idType === 0 && (
                <View className="taskForm-tips">
                    <Icon size="14" type="info" className="taskForm-info" />
                    请您仔细填写任务信息，任务信息越全面，快递员工作更方便
                </View>
            )}
            <View className="taskForm-title">任务信息</View>
            <InputCom
                label="起始地"
                placeholder="请输入起始地"
                disabled={idType}
                value={data.taskStart}
                onInput={(e) => {
                    onInput(e, 'taskStart')
                }}
            />
            <InputCom
                label="目的地"
                placeholder="请输入目的地"
                value={data.taskEnd}
                disabled={idType}
                onInput={(e) => {
                    onInput(e, 'taskEnd')
                }}
            />
            <PickerCom
                label="送货时间"
                placeholder="请选择送货时间"
                disabled={idType}
                date={data.taskTime}
                onInput={(e) => {
                    onInput(e, 'taskTime')
                }}
            />
            <InputCom
                label="货物重量"
                placeholder="请输入货物重量"
                type="number"
                disabled={idType}
                value={data.taskWeight}
                onInput={(e) => {
                    onInput(e, 'taskWeight')
                }}
            />
            <InputCom
                label="货物信息"
                placeholder="请输入货物信息"
                value={data.taskInfo}
                disabled={idType}
                onInput={(e) => {
                    onInput(e, 'taskInfo')
                }}
            />
            <InputCom
                label="运费金额"
                placeholder="请输入运费金额"
                value={data.taskCost}
                disabled={idType}
                onInput={(e) => {
                    onInput(e, 'taskCost')
                }}
            />
            {idType === 0 ? (
                <Button
                    className="taskForm-save"
                    onClick={() => {
                        saveTask('add')
                    }}
                >
                    保存
                </Button>
            ) : (
                <Button
                    className="taskForm-save"
                    onClick={() => {
                        acceptTask()
                    }}
                >
                    接收任务
                </Button>
            )}
            {data.taskStatus === 1 && (
                <Button
                    className="taskForm-save"
                    onClick={() => {
                        Taro.navigateTo({
                            url: `/pages/qrCode/index?taskCode=${data.taskCode}`,
                        })
                    }}
                >
                    交接码
                </Button>
            )}
        </View>
    )
}
export default taskForm
