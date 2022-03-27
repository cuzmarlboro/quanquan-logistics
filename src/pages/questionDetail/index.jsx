import React, { useEffect, useState } from 'react'
import { View, Icon, Button } from '@tarojs/components'
import Taro from '@tarojs/taro'
import request from 'service/request'
import successToast from 'util/successToast'
import './index.scss'

const QuestionDetail = () => {
    const [details, setDetails] = useState({
        content: '',
        gmtCreate: '',
        feedbackType: '',
    })
    useEffect(() => {
        Taro.getStorage({
            key: 'details',
            success: function (res) {
                setDetails(res.data)
            },
        })
    }, [])
    const finish = () => {
        const url = `feedback/finish?feedbackCode=${details.feedbackCode}`
        request(url).then((res) => {
            if (res.code === 200) {
                successToast('处理成功', () => {
                    Taro.navigateBack({ delta: 1 })
                })
            }
        })
    }
    return (
        <View className="questionDetail">
            <View className="detail-title">
                {details.content.substring(0, 10)}
            </View>
            <View className="detail-time">{details.gmtCreate}</View>
            <View className="detail-text">{details.content}</View>
            {details.feedbackType === 2 && (
                <View className="detail-deep">
                    重要程度：
                    <Icon size="20" type="warn" className="deep-icon" />
                    紧急
                </View>
            )}
            {details.feedbackType === 1 && (
                <View className="detail-deep">
                    重要程度：
                    <Icon size="20" type="info" className="deep-icon" />
                    中等
                </View>
            )}
            {details.feedbackType === 0 && (
                <View className="detail-deep">
                    重要程度：
                    <Icon
                        size="20"
                        type="warn"
                        className="deep-icon"
                        color="#C9C9C9"
                    />
                    普通
                </View>
            )}
            <Button
                className="detail-btn"
                onClick={() => {
                    finish()
                }}
            >
                已解决
            </Button>
        </View>
    )
}
export default QuestionDetail
