import React, { useState, useEffect } from 'react'
import { View, Button } from '@tarojs/components'
import WageItem from './WageItem/WageItem'
import './index.scss'

const WageList = () => {
    const [wageList, setWageList] = useState([])
    useEffect(() => {
        setWageList([
            {
                site: '江干区',
                time: '2020-03-14',
                money: '200',
                key: 0,
            },
            {
                site: '江干区',
                time: '2020-03-14',
                money: '200',
                key: 1,
            },
            {
                site: '江干区',
                time: '2020-03-14',
                money: '200',
                key: 2,
            },
        ])
    }, [])
    return (
        <View className="wageList">
            {wageList.map((item) => (
                <WageItem
                    site={item.site}
                    time={item.time}
                    money={item.money}
                />
            ))}
            <Button className="wageList-save">工资结算</Button>
        </View>
    )
}
export default WageList
