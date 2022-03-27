/**
 * 请求方法封装
*/
import Taro from '@tarojs/taro'
import { devBaseURL } from './config.js'


const getToken = () => {
    return Taro.getStorage({ key: 'token', }).then(res => res.data).catch(res => res.data)
}

const request = async (url, data, mt) => {
    const method = mt || "POST"
    const token = await getToken()
    const header = token ? { 'content-type': 'application/json', 'token': token } : { 'content-type': 'application/json' }
    console.log('-----------', method)
    console.log('-----------', header)
    console.log('-----------', data)
    return Taro.request({
        url: `${devBaseURL}${url}`,
        data,
        header,
        method,
    }).then(
        async (res) => {
            console.log('----------res.data', res.data)
            if (url === 'public/wx/login' || url === 'public/login') {
                Taro.setStorage({
                    key: 'token',
                    data: res.data.data,
                })
            }
            // 登录失效
            if (res.data.code === 6000) {
                Taro.clearStorage().then(res => {
                    Taro.reLaunch({
                        url: '/pages/index/index'
                    })
                })
            }
            return res.data
        }
    )
}

export default request