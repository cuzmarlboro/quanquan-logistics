import React from 'react'
import { View, Button, Checkbox } from '@tarojs/components'
import './WageItem.scss'

const WageItem = (props) => {
    const {
        taskStart,
        taskEnd,
        taskCost,
        handleChecked,
        gmtModified,
        taskCode,
    } = props
    return (
        <View className="wageItem">
            <Checkbox
                className="wageItem-checkbox"
                onClick={() => {
                    handleChecked(taskCode)
                }}
            />
            <View className="wageItem-content">
                <View className="item-site">
                    地址：{taskStart}-{taskEnd}
                </View>
                <View className="item-time">时间：{gmtModified}</View>
                <View className="item-money">金额：{taskCost}</View>
            </View>
        </View>
    )
}
export default WageItem
