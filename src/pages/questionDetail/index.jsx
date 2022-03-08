import React from 'react'
import { View, Icon, Button } from '@tarojs/components'
import './index.scss'

const QuestionDetail = () => {
    return (
        <View className="questionDetail">
            <View className="detail-title">
                在中国，沿海港口建设重点围绕煤炭、集装箱
            </View>
            <View className="detail-time">2020-03-28 18:42</View>
            <View className="detail-text">
                这是一段很长的文本内容这是一段很长的文本内容这是一段很长的文本内容这是一段很长的文本内容这是一段很长的文本内容这是一段很长的文本内容这是一段很长的文本内容这是一段很长的文本内容
            </View>
            <View className="detail-deep">
                重要程度：
                <Icon size="20" type="warn" className="deep-icon" />
                紧急
            </View>
            <View className="detail-deep">
                重要程度：
                <Icon size="20" type="info" className="deep-icon" />
                中等
            </View>
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
            <Button
                className="detail-btn"
                // onClick={() => {
                //     saveTask('add')
                // }}
            >
                已解决
            </Button>
        </View>
    )
}
export default QuestionDetail
