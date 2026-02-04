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

<script lang="ts">
import Vue from 'vue'
import { VxeFormProps, VxeFormItemPropTypes } from 'vxe-pc-ui'

interface FormDataVO {
  name: string
  nickname: string
  sex: string
  sexList: string[]
  type: string
  typeList: string[]
}

export default Vue.extend({
  data () {
    const sexItemRender: VxeFormItemPropTypes.ItemRender = {
      name: 'select',
      options: [
        { label: '女', value: 'Women' },
        { label: '男', value: 'Man' }
      ]
    }

    const typeItemRender: VxeFormItemPropTypes.ItemRender = {
      name: 'select',
      optionGroups: [
        {
          label: '分类1',
          options: [
            { label: '跑步', value: '1-1' },
            { label: '游泳', value: '1-2' }
          ]
        },
        {
          label: '分类2',
          options: [
            { label: '爬山', value: '2-1' },
            { label: '徒步', value: '2-2' }
          ]
        }
      ]
    }

    const formOptions: VxeFormProps<FormDataVO> = {
      titleWidth: 120,
      data: {
        name: 'test1',
        nickname: 'Testing',
        sex: '',
        sexList: [],
        type: '',
        typeList: []
      },
      items: [
        { field: 'name', title: '名称', span: 24, itemRender: { name: 'input' } },
        { field: 'sex', title: '下拉框', span: 24, itemRender: sexItemRender },
        { field: 'type', title: '下拉框分组', span: 24, itemRender: typeItemRender },
        { align: 'center', span: 24, slots: { default: 'action' } }
      ]
    }

    return {
      sexItemRender,
      typeItemRender,
      formOptions
    }
  }
})
</script>
