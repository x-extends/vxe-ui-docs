<template>
  <div>
    <div>
      <vxe-button @click="validEvent">校验变动数据</vxe-button>
      <vxe-button @click="fullValidEvent">校验全量数据</vxe-button>
    </div>

    <vxe-table
      border
      show-overflow
      keep-source
      height="300"
      ref="tableRef"
      :data="tableData"
      :edit-rules="validRules"
      :edit-config="{trigger: 'click', mode: 'row', showStatus: true}">
      <vxe-column type="checkbox" width="60"></vxe-column>
      <vxe-column type="seq" width="70"></vxe-column>
      <vxe-column field="name" title="Name" :edit-render="{name: 'VxeInput'}"></vxe-column>
      <vxe-column field="roleList" title="Role" :edit-render="roleListEditRender"></vxe-column>
      <vxe-column field="sex" title="Sex" :edit-render="{name: 'VxeInput'}"></vxe-column>
      <vxe-column field="age" title="Age" :edit-render="{name: 'VxeInput'}"></vxe-column>
      <vxe-column field="date" title="Date" :edit-render="{name: 'VxeInput'}"></vxe-column>
    </vxe-table>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { VxeSelectProps } from 'vxe-pc-ui'
import { VxeUI, VxeTableInstance, VxeTablePropTypes, VxeColumnPropTypes } from 'vxe-table'

interface RowVO {
  id: number
  name: string
  roleList: string[]
  sex: string
  age: number
  address: string
}

export default Vue.extend({
  data () {
    const tableData: RowVO[] = [
      { id: 10001, name: 'Test1', roleList: ['develop'], sex: '0', age: 28, address: 'test abc' },
      { id: 10002, name: '', roleList: ['develop', 'test'], sex: '1', age: 22, address: 'Guangzhou' },
      { id: 10003, name: 'Test3', roleList: ['pm'], sex: '', age: 32, address: 'Shanghai' },
      { id: 10004, name: 'Test4', roleList: ['develop'], sex: '', age: 23, address: 'test abc' },
      { id: 10005, name: '', roleList: [], sex: '1', age: 30, address: 'Shanghai' },
      { id: 10006, name: 'Test6', roleList: ['pm'], sex: '1', age: 21, address: 'test abc' }
    ]

    const validRules: VxeTablePropTypes.EditRules<RowVO> = {
      roleList: [
        { required: true, type: 'array', message: '至少选一个' }
      ]
    }

    const roleListEditRender: VxeColumnPropTypes.EditRender<RowVO, VxeSelectProps> = {
      name: 'VxeSelect',
      props: {
        multiple: true
      },
      options: [
        { label: 'Develop', value: 'develop' },
        { label: 'Test', value: 'test' },
        { label: 'PM', value: 'pm' }
      ]
    }

    return {
      tableData,
      validRules,
      roleListEditRender
    }
  },
  methods: {
    async validEvent () {
      const $table = this.$refs.tableRef as VxeTableInstance<RowVO>
      if ($table) {
        const errMap = await $table.validate()
        if (errMap) {
          VxeUI.modal.message({ status: 'error', content: '校验不通过！' })
        } else {
          VxeUI.modal.message({ status: 'success', content: '校验成功！' })
        }
      }
    },
    async fullValidEvent () {
      const $table = this.$refs.tableRef as VxeTableInstance<RowVO>
      if ($table) {
        const errMap = await $table.validate(true)
        if (errMap) {
          VxeUI.modal.message({ status: 'error', content: '校验不通过！' })
        } else {
          VxeUI.modal.message({ status: 'success', content: '校验成功！' })
        }
      }
    }
  }
})
</script>
