import React from 'react'
import { View, Textarea, Checkbox, Button } from '@tarojs/components'
import './index.scss'

const QuestionUpload = () => {
    return (
        <View className="questionUpload">
            <View className="questionUpload-label">问题或建议</View>
            <Textarea
                className="questionUpload-textarea"
                placeholder="请输入你的宝贵问题或建议"
            />
            <View className="questionUpload-label">紧急程度</View>
            <Checkbox value="选中" className="questionUpload-checkbox">
                重要
            </Checkbox>
            <Checkbox value="选中" className="questionUpload-checkbox">
                一般
            </Checkbox>
            <Checkbox value="选中" className="questionUpload-checkbox">
                普通
            </Checkbox>
            <Button className="questionUpload-save">提交</Button>
        </View>
    )
}
export default QuestionUpload
