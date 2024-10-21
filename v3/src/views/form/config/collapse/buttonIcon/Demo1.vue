<template>
  <div>
    <vxe-form
      v-bind="formOptions"
      @submit="submitEvent">
    </vxe-form>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { VxeUI, VxeFormProps } from 'vxe-pc-ui'

interface FormDataVO {
  name: string
  role: string
  nickname: string
  sex: string
  age: string
  num: string
  createDate: string
  updateDate: string
}

export default Vue.extend({
  data () {
    const formOptions: VxeFormProps<FormDataVO> = {
      titleWidth: 100,
      titleColon: true,
      titleAlign: 'right',
      collapseConfig: {
        foldButtonText: '关闭',
        unfoldButtonText: '更多',
        foldIcon: 'vxe-icon-funnel',
        unfoldIcon: 'vxe-icon-error-circle'
      },
      data: {
        name: 'test1',
        role: '',
        nickname: 'Testing',
        sex: '',
        age: '',
        num: '',
        createDate: '',
        updateDate: ''
      },
      items: [
        { field: 'name', title: '名称', span: 12, itemRender: { name: 'VxeInput' } },
        { field: 'nickname', title: '昵称', span: 12, itemRender: { name: 'VxeInput' } },
        { field: 'role', title: '角色', span: 12, folding: true, itemRender: { name: 'VxeInput' } },
        { field: 'sex', title: '性别', span: 12, folding: true, itemRender: { name: 'VxeInput' } },
        { field: 'age', title: '年龄', span: 12, folding: true, itemRender: { name: 'VxeInput' } },
        { field: 'num', title: '大小', span: 12, folding: true, itemRender: { name: 'VxeInput' } },
        { field: 'createDate', title: '创建时间', span: 12, folding: true, itemRender: { name: 'VxeInput' } },
        { field: 'updateDate', title: '更新时间', span: 12, folding: true, itemRender: { name: 'VxeInput' } },
        {
          align: 'center',
          span: 24,
          collapseNode: true,
          itemRender: {
            name: 'VxeButtonGroup',
            options: [
              { type: 'submit', content: '搜索', status: 'primary' },
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
    }
  }
})
</script>
