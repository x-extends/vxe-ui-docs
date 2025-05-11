<template>
  <div>
    <vxe-form v-bind="formOptions"></vxe-form>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
import { VxeFormProps } from 'vxe-pc-ui'
import XEUtils from 'xe-utils'

interface FormDataVO {
  name: string
  nickname: string
  bankCard: string
  sex: string
  date: string
  amount: number
  age: string
}

const sexList = [
  { label: '女', value: '0' },
  { label: '男', value: '1' }
]

const formOptions = reactive<VxeFormProps<FormDataVO>>({
  border: true,
  titleWidth: 100,
  data: {
    name: 'test1',
    nickname: 'Testing',
    bankCard: '6222525675674564',
    sex: '1',
    date: '2022-10-24T08:14:18.000Z',
    amount: 10000000,
    age: '54'
  },
  items: [
    { field: 'name', title: '名称', span: 12 },
    {
      field: 'sex',
      title: '性别',
      span: 12,
      formatter ({ itemValue }) {
        const item = sexList.find(item => item.value === itemValue)
        return item ? item.label : itemValue
      }
    },
    {
      field: 'bankCard',
      title: '银行卡',
      span: 12,
      formatter ({ itemValue }) {
        return XEUtils.commafy(XEUtils.toValueString(itemValue), { spaceNumber: 4, separator: ' ' })
      }
    },
    {
      field: 'date',
      title: '日期',
      span: 12,
      formatter ({ itemValue }) {
        return XEUtils.toDateString(itemValue, 'yyyy-MM-dd')
      }
    },
    {
      field: 'amount',
      title: '金额',
      span: 12,
      formatter ({ itemValue }) {
        return XEUtils.commafy(XEUtils.toNumber(itemValue), { digits: 2 })
      }
    }
  ]
})
</script>
