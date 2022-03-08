import React from 'react'

import HrCom from 'component/HrCom/index'
import { View, Text } from '@tarojs/components'

import './TaskItem.scss'

const TaskItem = (props) => {
    const { start, end, time, money, hiddenDel, addTask } = props
    return (
        <View className="taskItem">
            <View className="taskItem-site">
                <Text>{start}</Text>
                <View className="taskItem-interval">至</View>
                <Text>{end}</Text>
            </View>
            <View className="taskItem-time">时间：{time}</View>
            <View className="taskItem-money">配送费：¥{money}元</View>
            <HrCom width="78.6668vw" />
            <View className="handleList">
                {hiddenDel && <View className="handleItem redBtn">删除</View>}
                <View className="handleItem blueBtn" onClick={addTask}>
                    查看详情
                </View>
            </View>
        </View>
    )
}
export default TaskItem
