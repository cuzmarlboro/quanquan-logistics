import React from 'react'

import HrCom from 'component/HrCom/index'
import { View, Text } from '@tarojs/components'

import './TaskItem.scss'

const TaskItem = (props) => {
    const {
        taskStart,
        taskEnd,
        taskTime,
        taskCost,
        index,
        hiddenDel,
        addTask,
        delTask,
        taskCode,
        taskStatus,
    } = props
    return (
        <View className="taskItem">
            <View className="taskItem-site">
                <Text>{taskStart}</Text>
                <View className="taskItem-interval">至</View>
                <Text>{taskEnd}</Text>
            </View>
            <View className="taskItem-time">时间：{taskTime}</View>
            <View className="taskItem-money">配送费：¥{taskCost}元</View>
            <HrCom width="78.6668vw" />
            <View className="handleList">
                {hiddenDel && (
                    <View
                        className="handleItem redBtn"
                        onClick={() => {
                            delTask(taskCode)
                        }}
                    >
                        删除
                    </View>
                )}
                <View
                    className="handleItem blueBtn"
                    onClick={() => {
                        addTask('edit', index)
                    }}
                >
                    查看详情
                </View>
                {taskStatus === 1 && (
                    <View className="handleItem greyBtn">已被接收</View>
                )}
            </View>
        </View>
    )
}
export default TaskItem
