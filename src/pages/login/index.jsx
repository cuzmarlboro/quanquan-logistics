import React, { useEffect } from 'react'
import Taro from '@tarojs/taro'
import { View, Input, Image } from '@tarojs/components'
import ic_wechat from 'assets/img/ic_wechat.png'
import LoginButton from 'component/LoginButton/index'
import successToast from 'util/successToast'
import request from 'service/request'
import './index.scss'

const login = () => {
    const toHomt = () => {
        request('public/login', {
            phone: '17857342199',
            password: '123456',
        }).then((res) => {
            if (res.code === 200) {
                successToast('登录成功', () => {
                    Taro.reLaunch({
                        url: `/pages/handleList/index`,
                    })
                })
            }
        })
    }
    const wxLogin = () => {
        Taro.login().then((res) => {
            request('public/wx/login', {
                code: res.code,
            }).then((res) => {
                if (res.code === 200) {
                    successToast('登录成功', () => {
                        Taro.reLaunch({
                            url: `/pages/handleList/index`,
                        })
                    })
                }
            })
        })
    }
    return (
        <View className="login">
            <View className="login-title">手机号登录</View>
            <View className="login-tips">
                为方便取得联系，请输入您的常用手机号码
            </View>
            <View className="login-tips">未注册的手机号验证后自动创建账户</View>
            <View className="login-tips phone-tips"> 手机号码</View>
            <Input
                placeholder="请输入手机号码"
                placeholderClass="input-placeholder"
            />
            <View className="hr" />
            <View className="login-tips password-tips"> 登录密码</View>
            <Input
                placeholder="请输入登录密码"
                password={true}
                placeholderClass="input-placeholder"
            />
            <View className="hr" />
            <View className="buttons">
                <LoginButton
                    test={'登录'}
                    color="#4D85FF"
                    click={() => {
                        toHomt()
                    }}
                />
                <LoginButton click={wxLogin}>
                    <Image src={ic_wechat} className="logoImage" />
                    微信用户一键登录
                </LoginButton>
            </View>
        </View>
    )
}
export default login
