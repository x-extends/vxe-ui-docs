<template>
  <div>
    <vxe-form v-bind="formOptions" >
      <template #action>
        <vxe-button type="reset">重置</vxe-button>
        <vxe-button type="submit" status="primary">提交</vxe-button>
      </template>
    </vxe-form>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
import { VxeFormProps } from 'vxe-pc-ui'

interface FormDataVO {
  mobile: string
  email: string
  idCard: string
  ipAddress: string
  url: string
  plateNumber: string
}

const formOptions = reactive<VxeFormProps<FormDataVO>>({
  titleWidth: 120,
  data: {
    mobile: '',
    email: '',
    idCard: '',
    ipAddress: '',
    url: '',
    plateNumber: ''
  },
  rules: {
    mobile: [
      { required: true, validator: 'MOBILE_NUMBER' }
    ],
    email: [
      { required: true, validator: 'EMAIL_ADDRESS' }
    ],
    idCard: [
      { required: true, validator: 'IDENTITY_CARD' }
    ],
    ipAddress: [
      { required: true, validator: 'IP_ADDRESS' }
    ],
    url: [
      { required: true, validator: 'URL' }
    ],
    plateNumber: [
      { required: true, validator: 'PLATE_NUMBER' }
    ]
  },
  items: [
    { field: 'mobile', title: '手机号', span: 12, itemRender: { name: 'VxeInput' } },
    { field: 'email', title: '邮箱', span: 12, itemRender: { name: 'VxeInput' } },
    { field: 'idCard', title: '身份证号码', span: 12, itemRender: { name: 'VxeInput' } },
    { field: 'ipAddress', title: 'IP 地址', span: 12, itemRender: { name: 'VxeInput' } },
    { field: 'url', title: 'URL', span: 24, itemRender: { name: 'VxeInput' } },
    { field: 'plateNumber', title: '车牌号码', span: 12, itemRender: { name: 'VxeInput' } },
    { align: 'center', span: 24, slots: { default: 'action' } }
  ]
})
</script>
