<template>
  <div>
    <vxe-form border title-background :title-width="100" :data="formData">
      <vxe-form-item title="名称" field="name" span="12"></vxe-form-item>
      <vxe-form-item title="性别" field="sex" span="12" formatter="formatSex"></vxe-form-item>
      <vxe-form-item title="银行卡" field="bankCard" span="12" formatter="formatBankcard"></vxe-form-item>
      <vxe-form-item title="日期" field="date" span="12" formatter="formatDate"></vxe-form-item>
      <vxe-form-item title="金额" field="amount" span="12" formatter="formatAmount"></vxe-form-item>
    </vxe-form>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

interface FormDataVO {
  name: string
  nickname: string
  bankCard: string
  sex: string
  date: string
  amount: number
  age: string
}

const formData = ref<FormDataVO>({
  name: 'test1',
  nickname: 'Testing',
  bankCard: '6222525675674564',
  sex: '1',
  date: '2022-10-24T08:14:18.000Z',
  amount: 10000000,
  age: '54'
})
</script>
