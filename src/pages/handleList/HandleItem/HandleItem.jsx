import React, { useEffect, useState } from 'react'
import Taro from '@tarojs/taro'

import { View, Text, Image } from '@tarojs/components'

import right_triangle from 'assets/icon/right_triangle.svg'
import './HandleItem.scss'

function HandleItem(props) {
    const { img, text, url } = props
    const toPage = () => {
        Taro.navigateTo({ url: url })
    }
    return (
        <View className="handleItem" onClick={toPage}>
            <Image src={img} className="handleItem-img" />
            <Text>{text}</Text>
            <Image src={right_triangle} className="handleItem-svg" />
        </View>
    )
}
export default HandleItem
