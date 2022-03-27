import React, { useEffect, useState } from 'react'
import { View, Image } from '@tarojs/components'
import Taro from '@tarojs/taro'
import request from 'service/request'
import './index.scss'

const IconPage = () => {
    const [imgUrl, setImgUrl] = useState('')
    useEffect(() => {
        const { taskCode } = Taro.Current.router.params
        request(`task/qr/code?taskCode=${taskCode}`).then((res) => {
            if (res.code === 200) {
                setImgUrl(res.data)
            }
        })
    }, [])
    // 0 未结算 1 已结算 2 已完成
    useEffect(() => {
        const { taskCode } = Taro.Current.router.params
        const timer = setInterval(() => {
            request(`task/get/status?taskCode=${taskCode}`).then((res) => {
                if (res.code === 200) {
                    console.log('5秒调一次接口看任务状态')
                    if (res.data === 2) {
                        Taro.navigateTo({
                            url: `/pages/iconPage/index`,
                        })
                    }
                }
            })
        }, 10000)
        return () => {
            clearInterval(timer)
        }
    }, [])
    return (
        <View className="iconPage">
            交接码
            <Image src={imgUrl} />
        </View>
    )
}
export default IconPage
