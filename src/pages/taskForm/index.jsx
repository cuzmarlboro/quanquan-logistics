import React, { useEffect, useState } from 'react'
import Taro from '@tarojs/taro'

import { View, Button, Icon, Input } from '@tarojs/components'
import InputCom from 'component/InputCom/InputCom'
import PickerCom from 'component/PickerCom/PickerCom'

import './index.scss'

const taskForm = () => {
    const [date, setDate] = useState('')
    const [idType, setIdType] = useState(0)
    useEffect(() => {
        const { type } = Taro.Current.router.params
        Taro.getStorage({
            key: 'type',
            success: function (res) {
                setIdType(res.data)
            },
        })
        console.log(type)
    }, [])
    const onInput = (event, type) => {
        console.log(event, type)
        switch (type) {
            case 'time':
                setDate(event.detail.value)
        }
    }
    const saveTask = () => {
        Taro.showToast({
            title: '保存成功',
            icon: 'success',
            duration: 2000,
            complete: () => {
                Taro.reLaunch({
                    url: `/pages/setTask/index`,
                })
            },
        })
    }
    const acceptTask = () => {
        console.log('acceptTask')
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
                value=""
                onInput={(e) => {
                    onInput(e, 'start')
                }}
            />
            <InputCom
                label="目的地"
                placeholder="请输入目的地"
                value=""
                disabled={idType}
                onInput={(e) => {
                    onInput(e, 'end')
                }}
            />
            <PickerCom
                label="送货时间"
                placeholder="请选择送货时间"
                value=""
                disabled={idType}
                // date="2016-09-01"
                date={date}
                onInput={(e) => {
                    onInput(e, 'time')
                }}
            />
            <InputCom
                label="货物重量"
                placeholder="请输入货物重量"
                type="number"
                disabled={idType}
                value=""
                onInput={(e) => {
                    onInput(e, 'weight')
                }}
            />
            <InputCom
                label="货物信息"
                placeholder="请输入货物信息"
                value=""
                disabled={idType}
                onInput={(e) => {
                    onInput(e, 'weight')
                }}
            />
            <InputCom
                label="运费金额"
                placeholder="请输入运费金额"
                value=""
                disabled={idType}
                onInput={(e) => {
                    onInput(e, 'weight')
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
                    接任务
                </Button>
            )}
        </View>
    )
}
export default taskForm
