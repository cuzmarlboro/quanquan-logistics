import React, { useState, useEffect } from 'react'
import { View } from '@tarojs/components'
import QuestionItem from './QuestionItem/QuestionItem'
import Taro from '@tarojs/taro'
import request from 'service/request'
import './index.scss'

const QuestionList = () => {
    const [qtList, setQtList] = useState([])
    // 请求问题列表
    useEffect(() => {
        request('feedback/query', {
            pageIndex: 1,
            pageSize: 10,
        }).then((res) => {
            if (res.code === 200) {
                setQtList(res.data)
                console.log('请求问题列表', res)
            }
        })
    }, [])
    const viewDetails = (item) => {
        Taro.setStorage({
            key: 'details',
            data: item,
            success: () => {
                Taro.navigateTo({
                    url: `/pages/questionDetail/index`,
                })
            },
        })
    }
    return (
        <View className="questionList">
            {qtList.map((item) => (
                <QuestionItem
                    content={item.content}
                    key={item.id}
                    gmtCreate={item.gmtCreate}
                    viewDetails={() => {
                        viewDetails(item)
                    }}
                />
            ))}
        </View>
    )
}
export default QuestionList
