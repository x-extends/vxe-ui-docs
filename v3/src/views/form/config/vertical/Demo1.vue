<template>
  <div>
    <vxe-radio-group v-model="formOptions.vertical">
      <vxe-radio-button :label="false" content="上下布局"></vxe-radio-button>
      <vxe-radio-button :label="true" content="左右布局"></vxe-radio-button>
    </vxe-radio-group>

    <vxe-form
      v-bind="formOptions"
      @submit="submitEvent"
      @reset="resetEvent">
    </vxe-form>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { VxeUI, VxeFormProps } from 'vxe-pc-ui'

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
      vertical: true,
      data: {
        name: 'test1',
        nickname: '',
        sex: '',
        age: '',
        address: ''
      },
      items: [
        { field: 'name', title: '名称', span: 24, itemRender: { name: 'VxeInput' } },
        { field: 'sex', title: '性别', span: 24, itemRender: { name: 'VxeInput' } },
        { field: 'age', title: '年龄', span: 24, itemRender: { name: 'VxeInput' } },
        { field: 'address', title: '地址', span: 24, itemRender: { name: 'VxeTextarea' } },
        {
          align: 'center',
          span: 24,
          itemRender: {
            name: 'VxeButtonGroup',
            options: [
              { type: 'submit', content: '提交', status: 'primary' },
              { type: 'reset', content: '重置' }
            ]
          }
        }
      ]
    }

    return {
      formOptions
    }
  },
  methods: {
    submitEvent () {
      VxeUI.modal.message({ content: '保存成功', status: 'success' })
    },
    resetEvent () {
      VxeUI.modal.message({ content: '重置事件', status: 'info' })
    }
  }
})
</script>
