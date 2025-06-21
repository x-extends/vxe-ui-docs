<template>
  <div>
    <vxe-button status="primary" @click="saveEvent">校验</vxe-button>
    <vxe-table
      border
      keep-source
      show-overflow
      ref="tableRef"
      :edit-config="editConfig"
      :edit-rules="editRules"
      :data="tableData">
      <vxe-column field="mobile" title="Number" :edit-render="mobileEditRender"></vxe-column>
      <vxe-column field="email" title="邮箱" :edit-render="emailEditRender"></vxe-column>
      <vxe-column field="idCard" title="身份证号码" :edit-render="idCardEditRender"></vxe-column>
      <vxe-column field="ipAddress" title="IP 地址" :edit-render="ipAddressEditRender"></vxe-column>
      <vxe-column field="url" title="URL" :edit-render="urlEditRender"></vxe-column>
      <vxe-column field="plateNumber" title="车牌号码" :edit-render="plateNumberEditRender"></vxe-column>
    </vxe-table>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { VxeUI } from 'vxe-pc-ui'
import type { VxeTablePropTypes, VxeTableInstance } from 'vxe-table'

interface RowVO {
  id: number
  mobile: string
  email: string
  idCard: string
  ipAddress: string
  url: string
  plateNumber: string
}

export default Vue.extend({
  data () {
    const editConfig: VxeTablePropTypes.EditConfig = {
      trigger: 'click',
      mode: 'row',
      showStatus: true
    }

    const editRules: VxeTablePropTypes.EditRules = {
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
    }

    const mobileEditRender = {
      name: 'VxeInput'
    }

    const emailEditRender = {
      name: 'VxeInput'
    }

    const idCardEditRender = {
      name: 'VxeInput'
    }

    const ipAddressEditRender = {
      name: 'VxeInput'
    }

    const urlEditRender = {
      name: 'VxeInput'
    }

    const plateNumberEditRender = {
      name: 'VxeInput'
    }

    const tableData: RowVO[] = [
      { id: 10001, mobile: '', email: '', idCard: '', ipAddress: '', url: '', plateNumber: '' },
      { id: 10002, mobile: '13600000003', email: '456@163.com', idCard: '111111191211111111', ipAddress: '192.168.0.2', url: 'https://vxetable.cn', plateNumber: '粤A99999' },
      { id: 10003, mobile: '13600000002', email: 'abc@163.com', idCard: '111111191311111511', ipAddress: '192.168.0.3', url: 'https://vxeui.com', plateNumber: '京A99999' },
      { id: 10004, mobile: '13600000004', email: '2536@163.com', idCard: '111111125363581511', ipAddress: '192.168.0.4', url: 'https://vxeui.com', plateNumber: '京A99999' }
    ]

    return {
      editConfig,
      editRules,
      mobileEditRender,
      emailEditRender,
      idCardEditRender,
      ipAddressEditRender,
      urlEditRender,
      plateNumberEditRender,
      tableData
    }
  },
  methods: {
    async saveEvent () {
      const $table = this.$refs.tableRef as VxeTableInstance
      if ($table) {
        const errMap = await $table.validate(true)
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
  }
})
</script>
