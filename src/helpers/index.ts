import { Dimensions, Platform } from 'react-native'

const { width, height } = Dimensions.get('window')
const isAndroid = Platform.OS == 'android'

export const WIDTH_SCREEN = width
export const HEIGHT_SCREEN = height
export const IS_ANDROID = isAndroid