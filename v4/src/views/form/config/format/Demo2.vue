<template>
  <div>
    <vxe-form v-bind="formOptions"></vxe-form>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
import { VxeFormProps } from 'vxe-pc-ui'

interface FormDataVO {
  name: string
  nickname: string
  bankCard: string
  sex: string
  date: string
  amount: number
  age: string
}

const formOptions = reactive<VxeFormProps<FormDataVO>>({
  border: true,
  titleWidth: 100,
  titleBackground: true,
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
    { field: 'sex', title: '性别', span: 12, formatter: 'formatSex' },
    { field: 'bankCard', title: '银行卡', span: 12, formatter: 'formatBankcard' },
    { field: 'date', title: '日期', span: 12, formatter: 'formatDate' },
    { field: 'amount', title: '金额', span: 12, formatter: 'formatAmount' }
  ]
})
</script>
