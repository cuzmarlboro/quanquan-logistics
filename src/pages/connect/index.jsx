import React from 'react'
import { View, Image } from '@tarojs/components'
import WechatIMG510 from 'assets//img/WechatIMG510.jpeg'
import './index.scss'

const Connect = () => {
    return (
        <View className="connect">
            <Image src={WechatIMG510} className="connect-img" />
        </View>
    )
}
export default Connect
