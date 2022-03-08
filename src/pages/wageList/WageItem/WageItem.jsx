import React from 'react'
import { View, Button } from '@tarojs/components'
import './WageItem.scss'

const WageItem = (props) => {
    const { site, time, money } = props
    return (
        <View className="wageItem">
            <View className="wageItem-site">地址：{site}</View>
            <View className="wageItem-time">时间：{time}</View>
            <View className="wageItem-money">金额：{money}</View>
        </View>
    )
}
export default WageItem
