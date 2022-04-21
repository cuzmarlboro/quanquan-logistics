import Taro from '@tarojs/taro'
const errorToast = (title) => {
    Taro.showToast({
        title,
        icon: 'none',
        // success: error()
    })
}
export default errorToast