<template>
  <div>
    <vxe-form
      v-bind="formOptions"
      @submit="submitEvent"
      @reset="resetEvent">
    </vxe-form>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { VxeUI, VxeFormProps, VxeFormItemPropTypes } from 'vxe-pc-ui'

interface FormDataVO {
  name: string
  nickname: string
  role: string
  sex: string
  age: string
  date: string
}

export default Vue.extend({
  data () {
    const sexItemRender: VxeFormItemPropTypes.ItemRender = {
      name: 'VxeSelect',
      options: [
        { label: '女', value: 'Women' },
        { label: '男', value: 'Man' }
      ],
      changeToSubmit: true
    }

    const formOptions: VxeFormProps<FormDataVO> = {
      vertical: false,
      titleColon: true,
      data: {
        name: '',
        nickname: '',
        role: '',
        sex: '',
        age: '',
        date: ''
      },
      rules: {
        name: [
          { required: true, message: '请输入名称' }
        ],
        sex: [
          { required: true, message: '请选择性别' }
        ],
        role: [
          { required: true, message: '请选择性别' }
        ],
        age: [
          { required: true, message: '请输入年龄' }
        ],
        remark: [
          { required: true, message: '请输入年龄' }
        ]
      },
      items: [
        { field: 'name', title: '名称', span: 24, itemRender: { name: 'VxeInput' } },
        { field: 'sex', title: '性别', span: 12, itemRender: sexItemRender },
        { field: 'role', title: '角色', span: 12, itemRender: { name: 'VxeInput' } },
        { field: 'age', title: '年龄', span: 12, itemRender: { name: 'VxeInput' } },
        { field: 'date', title: '日期', span: 12, itemRender: { name: 'VxeDatePicker', changeToSubmit: true } },
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
      formOptions,
      sexItemRender
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
