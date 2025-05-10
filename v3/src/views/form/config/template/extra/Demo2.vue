<template>
  <div>
    <vxe-form v-bind="formOptions"></vxe-form>
  </div>
</template>

<script lang="tsx">
import Vue from 'vue'
import { VxeFormProps } from 'vxe-pc-ui'

interface FormDataVO {
  name: string
  nickname: string
  sex: string
  age: string
  address: string
}

export default Vue.extend({
  data () {
    const formOptions: VxeFormProps<FormDataVO> = {
      border: true,
      vertical: true,
      titleBackground: true,
      data: {
        name: 'test1',
        nickname: 'Testing',
        sex: '男',
        age: '46',
        address: 'shanghai'
      },
      items: [
        { field: 'name', title: '名称', span: 24 },
        {
          field: 'sex',
          title: '性别',
          span: 12,
          slots: {
            extra () {
              return <vxe-button mode="text" status="primary">新增</vxe-button>
            }
          }
        },
        {
          field: 'age',
          title: '年龄',
          span: 12,
          slots: {
            extra () {
              return <vxe-button mode="text" statys="error">删除</vxe-button>
            }
          }
        }
      ]
    }

    return {
      formOptions
    }
  }
})
</script>
