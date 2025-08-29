<template>
  <div>
    <vxe-form v-bind="formOptions"></vxe-form>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { VxeFormItemPropTypes, VxeFormProps } from 'vxe-pc-ui'

interface FormDataVO {
  name: string
  nickname: string
  sex: string
  age: string
  address: string
}

export default Vue.extend({
  data () {
    const sexItemRender: VxeFormItemPropTypes.ItemRender = {
      name: 'VxeSelect',
      options: [
        { label: '女', value: 'Women' },
        { label: '男', value: 'Man' }
      ]
    }

    const formOptions: VxeFormProps<FormDataVO> = {
      border: true,
      vertical: true,
      verticalAlign: 'center',
      titleWidth: 100,
      data: {
        name: 'test1',
        nickname: '',
        sex: '',
        age: '',
        address: ''
      },
      items: [
        { field: 'name', title: '名称', span: 12, itemRender: { name: 'VxeInput' } },
        { field: 'nickname', title: '昵称', span: 12, itemRender: { name: 'VxeInput' } },
        { field: 'sex', title: '性别', span: 12, itemRender: sexItemRender },
        { field: 'age', title: '年龄', span: 12, itemRender: { name: 'VxeInput' } },
        { field: 'address', title: '地址', span: 24, itemRender: { name: 'VxeTextarea' } }
      ]
    }

    return {
      formOptions
    }
  }
})
</script>
