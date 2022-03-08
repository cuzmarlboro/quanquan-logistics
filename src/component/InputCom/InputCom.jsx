import React from 'react'
import { View, Input } from '@tarojs/components'
import './InputCom.scss'

const InputCom = (props) => {
    const { label, placeholder, value, onInput, type, disabled } = props

    return (
        <View className="inputCom">
            <View className="label">{label}</View>
            <Input
                placeholder={placeholder}
                value={value}
                type={type}
                placeholderClass="input-ph"
                className="input"
                disabled={disabled}
                onInput={(e) => {
                    onInput(e)
                }}
            />
        </View>
    )
}
export default InputCom
