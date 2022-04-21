import React, { useEffect } from 'react'
import Taro from '@tarojs/taro'
import { View, Icon, Button } from '@tarojs/components'
import './index.scss'

const IconPage = () => {
    useEffect(() => {
        Taro.showLoading({
            title: '正在返回中...',
            mask: true,
            success: () => {
                Taro.redirectTo({
                    url: '/pages/handleList/index',
                })
            },
        })
    }, [])
    return (
        <View className="iconPage">
            <Icon className="iconPage-icon" size="60" type="success" />
            <View className="iconPage-text">交接完成</View>
        </View>
    )
}
export default IconPage
