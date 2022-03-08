// import { Component } from 'react'
import { View, Image } from '@tarojs/components'
import logo_bluebird from 'assets/img/logo_bluebird.png'
import LoginButton from 'component/LoginButton/index'
import Taro from '@tarojs/taro'
import './index.scss'

const Index = () => {
    const toLoginPage = (type) => {
        Taro.setStorage({
            key: 'type',
            data: type,
        })
        Taro.navigateTo({
            url: `/pages/login/index`,
        })
    }
    return (
        <View className="index">
            <Image className="logoImage" src={logo_bluebird} />
            <View className="buttons">
                <LoginButton
                    test={'管理员登录'}
                    click={() => {
                        toLoginPage(0)
                    }}
                />
                <LoginButton
                    test={'员工登录'}
                    click={() => {
                        toLoginPage(1)
                    }}
                />
            </View>
        </View>
    )
}
export default Index
