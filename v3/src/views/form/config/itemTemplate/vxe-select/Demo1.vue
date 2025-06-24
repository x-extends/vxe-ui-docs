<template>
  <div>
    <vxe-form v-bind="formOptions" >
      <template #name="{ data }">
        <vxe-input v-model="data.name"></vxe-input>
      </template>

      <template #sex="{ data }">
        <vxe-select v-model="data.sex" :options="sexOptions"></vxe-select>
      </template>

      <template #sexList="{ data }">
        <vxe-select v-model="data.sexList" :options="sexOptions" multiple></vxe-select>
      </template>

      <template #type="{ data }">
        <vxe-select v-model="data.type" :optionGroups="typeOptions"></vxe-select>
      </template>

      <template #typeList="{ data }">
        <vxe-select v-model="data.typeList" :optionGroups="typeOptions" multiple></vxe-select>
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
  sex: string
  sexList: string[]
  type: string
  typeList: string[]
}

export default Vue.extend({
  data () {
    const sexOptions = [
      { label: '女', value: 'Women' },
      { label: '男', value: 'Man' }
    ]

    const typeOptions = [
      {
        label: '分类1',
        value: '1',
        options: [
          { label: '苹果', value: '1-1' },
          { label: '雪梨', value: '1-2' }
        ]
      },
      {
        label: '分类2',
        value: '2',
        options: [
          { label: '草莓', value: '2-1' },
          { label: '猕猴桃', value: '2-2' }
        ]
      }
    ]

    const formOptions: VxeFormProps<FormDataVO> = {
      titleWidth: 120,
      data: {
        name: 'test1',
        sex: '',
        sexList: [],
        type: '',
        typeList: []
      },
      items: [
        { field: 'name', title: '名称', span: 24, itemRender: { }, slots: { default: 'name' } },
        { field: 'sex', title: '下拉框', span: 24, itemRender: { }, slots: { default: 'sex' } },
        { field: 'sexList', title: '下拉框多选', span: 24, itemRender: { }, slots: { default: 'sexList' } },
        { field: 'type', title: '下拉框分组', span: 24, itemRender: { }, slots: { default: 'type' } },
        { field: 'typeList', title: '下拉框分组多选', span: 24, itemRender: { }, slots: { default: 'typeList' } },
        { align: 'center', span: 24, slots: { default: 'action' } }
      ]
    }

    return {
      sexOptions,
      typeOptions,
      formOptions
    }
  }
})
</script>
