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
import { VxeUI, VxeFormProps } from 'vxe-pc-ui'

interface FormDataVO {
  name: string
  nickname: string
  role: string
}

export default Vue.extend({
  data () {
    const formOptions: VxeFormProps<FormDataVO> = {
      data: {
        name: '',
        nickname: '',
        role: ''
      },
      rules: {
        name: [
          { required: true, content: '必须填写' },
          {
            validator ({ itemValue }) {
              if (itemValue && (itemValue.length < 3 || itemValue.length > 50)) {
                return new Error('名称长度在 3 到 50 个字符之间')
              }
            }
          }
        ],
        role: [
          {
            validator ({ itemValue }) {
              // 模拟服务端校验
              return new Promise((resolve, reject) => {
                setTimeout(() => {
                  if (itemValue && !['Develop', 'Test', 'PM'].includes(itemValue)) {
                    reject(new Error('角色不正确'))
                  } else {
                    resolve()
                  }
                }, 100)
              })
            }
          }
        ]
      },
      items: [
        { field: 'name', title: '名称', span: 12, itemRender: { name: 'VxeInput' } },
        { field: 'role', title: '角色', span: 12, itemRender: { name: 'VxeInput' } },
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
