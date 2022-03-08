import React from 'react'
import { View } from '@tarojs/components'
import './QuestionItem.scss'

const QuestionItem = (props) => {
    const { title, time, viewDetails } = props
    return (
        <View className="questionItem" onClick={viewDetails}>
            <View className="questionItem-title">问题：{title}</View>
            <View className="questionItem-time">发布时间：{time}</View>
        </View>
    )
}
export default QuestionItem
