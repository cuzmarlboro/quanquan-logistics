import React from 'react'
import { View, Picker } from '@tarojs/components'
import './PickerCom.scss'

const PickerCom = (props) => {
    const { label, placeholder, date, onInput, disabled } = props

    return (
        <View className="pickerCom">
            <View className="label">{label}</View>
            <Picker mode="date" onChange={onInput} disabled={disabled}>
                {date === '' ? (
                    <View className="picker placeholder">{placeholder}</View>
                ) : (
                    <View className="picker">{date}</View>
                )}
            </Picker>
        </View>
    )
}
export default PickerCom
