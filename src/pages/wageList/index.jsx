import React, { useState, useEffect } from 'react'
import { View, Button } from '@tarojs/components'
import Taro, { internal_safe_get } from '@tarojs/taro'
import request from 'service/request'
import WageItem from './WageItem/WageItem'
import './index.scss'

const WageList = () => {
    const [wageList, setWageList] = useState([])
    const [taskCodeList, setTaskCodeList] = useState([])
    useEffect(() => {
        getWageList()
    }, [])
    const handleChecked = (taskCode) => {
        const newTaskCodeList = [...taskCodeList]
        const index = newTaskCodeList.indexOf(taskCode)
        if (index >= 0) {
            newTaskCodeList.splice(index, 1)
        } else {
            newTaskCodeList.push(taskCode)
        }
        setTaskCodeList(newTaskCodeList)
    }
    const getWageList = () => {
        request('settle/query', {
            pageIndex: 1,
            pageSize: 10,
        }).then((res) => {
            if (res.code === 200) {
                setWageList(res.data)
                console.log('工资列表', res)
            }
        })
    }
    const cost = () => {
        const params = { taskCodeList }
        request('settle/cost', params).then((res) => {
            if (res.code === 200) {
                // setWageList(res.data)
                getWageList()
            }
        })
    }
    return (
        <View className="wageList">
            {wageList.map((item) => (
                <WageItem
                    taskStart={item.taskStart}
                    taskEnd={item.taskEnd}
                    taskCode={item.taskCode}
                    taskCost={item.taskCost}
                    gmtModified={item.gmtModified}
                    key={item.taskCode}
                    handleChecked={handleChecked}
                />
            ))}
            <Button className="wageList-save" onClick={cost}>
                工资结算
            </Button>
        </View>
    )
}
export default WageList
