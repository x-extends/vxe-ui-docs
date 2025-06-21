<template>
  <div>
    <vxe-button status="primary" @click="saveEvent">校验</vxe-button>
    <vxe-grid ref="gridRef" v-bind="gridOptions"></vxe-grid>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'
import { VxeUI } from 'vxe-pc-ui'
import type { VxeGridProps, VxeGridInstance } from 'vxe-table'

interface RowVO {
  id: number
  mobile: string
  email: string
  idCard: string
  ipAddress: string
  url: string
  plateNumber: string
}

const gridRef = ref<VxeGridInstance>()

const gridOptions = reactive<VxeGridProps<RowVO>>({
  border: true,
  showOverflow: true,
  keepSource: true,
  editConfig: {
    trigger: 'click',
    mode: 'row',
    showStatus: true
  },
  editRules: {
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
  columns: [
    { field: 'mobile', title: '手机号', editRender: { name: 'VxeInput' } },
    { field: 'email', title: '邮箱', editRender: { name: 'VxeInput' } },
    { field: 'idCard', title: '身份证号码', editRender: { name: 'VxeInput' } },
    { field: 'ipAddress', title: 'IP 地址', editRender: { name: 'VxeInput' } },
    { field: 'url', title: 'URL', editRender: { name: 'VxeInput' } },
    { field: 'plateNumber', title: '车牌号码', editRender: { name: 'VxeInput' } }
  ],
  data: [
    { id: 10001, mobile: '', email: '', idCard: '', ipAddress: '', url: '', plateNumber: '' },
    { id: 10002, mobile: '13600000003', email: '456@163.com', idCard: '111111191211111111', ipAddress: '192.168.0.2', url: 'https://vxetable.cn', plateNumber: '粤A99999' },
    { id: 10003, mobile: '13600000002', email: 'abc@163.com', idCard: '111111191311111511', ipAddress: '192.168.0.3', url: 'https://vxeui.com', plateNumber: '京A99999' }
  ]
})

const saveEvent = async () => {
  const $grid = gridRef.value
  if ($grid) {
    const errMap = await $grid.validate(true)
    if (errMap) {
      VxeUI.modal.message({
        content: '请将必填项填写正确',
        status: 'error'
      })
    } else {
      VxeUI.modal.message({
        content: '校验完成',
        status: 'success'
      })
    }
  }
}
</script>
