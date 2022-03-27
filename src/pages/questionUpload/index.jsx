import React, { useState } from 'react'
import { View, Textarea, Checkbox, Button } from '@tarojs/components'
import request from 'service/request'
import successToast from 'util/successToast'
import Taro from '@tarojs/taro'
import './index.scss'

const QuestionUpload = () => {
    const [content, setContent] = useState('')
    const [feedbackType, setFeedbackType] = useState('') // 012 普通一般重要
    const textareaChange = (event) => {
        const { value } = event.detail
        setContent(value)
    }
    const checkboxChange = (value) => {
        setFeedbackType(value)
    }
    const questionAdd = () => {
        const data = { content, feedbackType }
        request('feedback/add', data).then((res) => {
            if (res.code === 200) {
                successToast('提交成功', () => {
                    Taro.navigateBack({ delta: 1 })
                })
            }
        })
        console.log(content, feedbackType)
    }
    return (
        <View className="questionUpload">
            <View className="questionUpload-label">问题或建议</View>
            <Textarea
                className="questionUpload-textarea"
                placeholder="请输入你的宝贵问题或建议"
                value={content}
                onInput={(e) => {
                    textareaChange(e)
                }}
            />
            <View className="questionUpload-label">紧急程度</View>
            <Checkbox
                className="questionUpload-checkbox"
                checked={feedbackType === '2'}
                onClick={() => {
                    checkboxChange('2')
                }}
            >
                重要
            </Checkbox>
            <Checkbox
                className="questionUpload-checkbox"
                checked={feedbackType === '1'}
                onClick={() => {
                    checkboxChange('1')
                }}
            >
                一般
            </Checkbox>
            <Checkbox
                className="questionUpload-checkbox"
                checked={feedbackType === '0'}
                onClick={() => {
                    checkboxChange('0')
                }}
            >
                普通
            </Checkbox>
            <Button className="questionUpload-save" onClick={questionAdd}>
                提交
            </Button>
        </View>
    )
}
export default QuestionUpload
