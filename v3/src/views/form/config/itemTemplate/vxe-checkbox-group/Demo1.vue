<template>
  <div>
    <vxe-form v-bind="formOptions" >
      <template #name="{ data }">
        <vxe-input v-model="data.name"></vxe-input>
      </template>

      <template #hobbiesList="{ data }">
        <vxe-checkbox-group v-model="data.hobbiesList" :options="hobbiesListOptions"></vxe-checkbox-group>
      </template>

      <template #action>
        <vxe-button type="reset">重置</vxe-button>
        <vxe-button type="submit" status="primary">提交</vxe-button>
      </template>
    </vxe-form>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { VxeFormProps } from 'vxe-pc-ui'

interface FormDataVO {
  name: string
  nickname: string
  hobbiesList: string[]
  address: string
}

export default Vue.extend({
  data () {
    const hobbiesListOptions = [
      { label: '爬山', value: '1' },
      { label: '干架', value: '2' },
      { label: '干饭', value: '3' },
      { label: '游泳', value: '4' },
      { label: '跑步', value: '5' }
    ]

    const formOptions: VxeFormProps<FormDataVO> = {
      titleWidth: 120,
      data: {
        name: 'test1',
        nickname: 'Testing',
        hobbiesList: ['3'],
        address: ''
      },
      items: [
        { field: 'name', title: '名称', span: 24, itemRender: { }, slots: { default: 'name' } },
        { field: 'hobbiesList', title: '复选框', span: 24, itemRender: { }, slots: { default: 'hobbiesList' } },
        { align: 'center', span: 24, slots: { default: 'action' } }
      ]
    }

    return {
      hobbiesListOptions,
      formOptions
    }
  }
})
</script>
