import React from 'react'
import { View } from '@tarojs/components'
import './QuestionItem.scss'

const QuestionItem = (props) => {
    const { content, gmtCreate, viewDetails } = props
    return (
        <View className="questionItem" onClick={viewDetails}>
            <View className="questionItem-title">问题：{content}</View>
            <View className="questionItem-time">发布时间：{gmtCreate}</View>
        </View>
    )
}
export default QuestionItem
