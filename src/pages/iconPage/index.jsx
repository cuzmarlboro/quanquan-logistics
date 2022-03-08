import React from 'react'
import { View, Icon } from '@tarojs/components'
import './index.scss'

const IconPage = () => {
    return (
        <View className="iconPage">
            <Icon className="iconPage-icon" size="60" type="success" />
            <View className="iconPage-text">交接完成</View>
        </View>
    )
}
export default IconPage
