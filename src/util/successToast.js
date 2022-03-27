import Taro from '@tarojs/taro'
const successToast = (title, success) => {
    Taro.showToast({
        title,
        icon: 'success',
        success: success()
    })
}
export default successToast