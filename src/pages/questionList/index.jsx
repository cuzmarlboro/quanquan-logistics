import React, { useState } from 'react'
import { View } from '@tarojs/components'
import QuestionItem from './QuestionItem/QuestionItem'
import Taro from '@tarojs/taro'
import './index.scss'

const QuestionList = () => {
    const [qtList, setQtList] = useState([
        {
            title: '在中国，沿海港口建设重点围绕煤炭、集装箱',
            time: '2022/3/7',
            key: 0,
        },
        {
            title: '在中国，沿海港口建设重点围绕煤炭、集装箱',
            time: '2022/3/7',
            key: 1,
        },
        {
            title: '在中国，沿海港口建设重点围绕煤炭、集装箱',
            time: '2022/3/7',
            key: 2,
        },
    ])
    const viewDetails = () => {
        Taro.navigateTo({
            url: `/pages/questionDetail/index`,
        })
    }
    return (
        <View className="questionList">
            {qtList.map((item) => (
                <QuestionItem
                    text={item.title}
                    key={item.key}
                    time={item.time}
                    viewDetails={viewDetails}
                />
            ))}
        </View>
    )
}
export default QuestionList
