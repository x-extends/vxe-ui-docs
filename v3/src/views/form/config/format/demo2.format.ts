import { VxeUI } from 'vxe-pc-ui'
import XEUtils from 'xe-utils'

// 式化日期，默认 yyyy-MM-dd HH:mm:ss
VxeUI.formats.add('formatDate', {
  formItemFormatMethod ({ itemValue }, format?: string) {
    return XEUtils.toDateString(itemValue, format || 'yyyy-MM-dd HH:mm:ss')
  }
})

// 四舍五入金额，每隔3位逗号分隔，默认2位数
VxeUI.formats.add('formatAmount', {
  formItemFormatMethod ({ itemValue }, digits = 2) {
    return XEUtils.commafy(XEUtils.toNumber(itemValue), { digits })
  }
})

// 格式化银行卡，默认每4位空格隔开
VxeUI.formats.add('formatBankcard', {
  formItemFormatMethod ({ itemValue }) {
    return XEUtils.commafy(XEUtils.toValueString(itemValue), { spaceNumber: 4, separator: ' ' })
  }
})

// 格式化性别
VxeUI.formats.add('formatSex', {
  formItemFormatMethod ({ itemValue }) {
    return itemValue ? (itemValue === '1' ? '男' : '女') : ''
  }
})
