import React, { useEffect, useState } from 'react'
import Taro from '@tarojs/taro'
import { View, Input, Image } from '@tarojs/components'
import ic_wechat from 'assets/img/ic_wechat.png'
import LoginButton from 'component/LoginButton/index'
import successToast from 'util/successToast'
import request from 'service/request'
import './index.scss'

const login = () => {
    const [type, setType] = useState(null)
    const [phone, setPhone] = useState('')
    const [password, setPassword] = useState('')
    useEffect(() => {
        Taro.getStorage({
            key: 'type',
            success: function (res) {
                setType(res.data)
            },
        })
    }, [])
    const toHomt = () => {
        request('public/login', {
            phone,
            password,
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
    const onInputPhone = (e) => {
        setPhone(e.detail.value)
    }
    const onInputPassword = (e) => {
        setPassword(e.detail.value)
    }
    return (
        <View className="login">
            {type === 0 && (
                <View>
                    <View className="login-title">手机号登录</View>
                    <View className="login-tips">
                        为方便取得联系，请输入您的常用手机号码
                    </View>
                    <View className="login-tips">
                        未注册的手机号验证后自动创建账户
                    </View>
                    <View className="login-tips phone-tips"> 手机号码</View>
                    <Input
                        placeholder="请输入手机号码"
                        placeholderClass="input-placeholder"
                        value={phone}
                        onInput={(e) => {
                            onInputPhone(e)
                        }}
                    />
                    <View className="hr" />
                    <View className="login-tips password-tips"> 登录密码</View>
                    <Input
                        placeholder="请输入登录密码"
                        password={true}
                        placeholderClass="input-placeholder"
                        value={password}
                        onInput={(e) => {
                            onInputPassword(e)
                        }}
                    />
                    <View className="hr" />
                </View>
            )}
            <View className="buttons">
                {type === 0 && (
                    <LoginButton
                        test={'登录'}
                        color="#4D85FF"
                        click={() => {
                            toHomt()
                        }}
                    />
                )}
                {type === 1 && (
                    <LoginButton click={wxLogin}>
                        <Image src={ic_wechat} className="logoImage" />
                        微信用户一键登录
                    </LoginButton>
                )}
            </View>
        </View>
    )
}
export default login
