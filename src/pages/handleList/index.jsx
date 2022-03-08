import React, { useEffect, useState } from 'react'
import Taro from '@tarojs/taro'

import './index.scss'
import ic_sources_management from 'assets/img/ic_sources_management.png'
import ic_truck_management from 'assets/img/ic_truck_management.png'
import ic_port_orange from 'assets/img/ic_port_orange.png'

import { View, Input, Image } from '@tarojs/components'
import HandleItem from './HandleItem/HandleItem'

function HandleList() {
    const [handleData, setHandleData] = useState([])

    useEffect(() => {
        Taro.getStorage({
            key: 'type',
            success: function (res) {
                console.log('-------', res.data)
                if (res.data === 0) {
                    setHandleData([
                        {
                            img: ic_sources_management,
                            text: '派发任务',
                            url: '/pages/setTask/index',
                            key: 0,
                        },
                        {
                            img: ic_truck_management,
                            text: '问题总结',
                            url: '/pages/questionList/index',
                            key: 1,
                        },
                    ])
                } else {
                    setHandleData([
                        {
                            img: ic_sources_management,
                            text: '任务查询',
                            url: '/pages/setTask/index',
                            key: 0,
                        },
                        {
                            img: ic_truck_management,
                            text: '问题上传',
                            url: '/pages/questionUpload/index',
                            key: 1,
                        },
                        {
                            img: ic_port_orange,
                            text: '工资结算',
                            url: '/pages/wageList/index',
                            key: 2,
                        },
                    ])
                }
            },
        })
    }, [])
    return (
        <View className="HandleList">
            {handleData.map((item) => (
                <HandleItem
                    img={item.img}
                    text={item.text}
                    key={item.key}
                    url={item.url}
                />
            ))}
        </View>
    )
}
export default HandleList
