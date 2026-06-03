<template>
  <div>
    <vxe-button status="success" @click="showItemEvent('sex')">显示sex</vxe-button>
    <vxe-button status="info" @click="hideItemEvent('sex')">隐藏sex</vxe-button>
    <vxe-button status="success" @click="showItemEvent('age')">显示age</vxe-button>
    <vxe-button status="info" @click="hideItemEvent('age')">隐藏age</vxe-button>

    <vxe-form
      ref="formRef"
      v-bind="formOptions"
      @submit="submitEvent"
      @reset="resetEvent">
    </vxe-form>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { VxeUI, VxeFormInstance, VxeFormProps } from 'vxe-pc-ui'

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
      data: {
        name: 'test1',
        nickname: 'Testing',
        sex: '',
        age: '',
        address: ''
      },
      items: [
        { field: 'name', title: '名称', span: 24, visible: true, itemRender: { name: 'VxeInput' } },
        { field: 'sex', title: '性别', span: 12, visible: true, itemRender: { name: 'VxeInput' } },
        { field: 'age', title: '年龄', span: 12, visible: true, itemRender: { name: 'VxeInput' } },
        { field: 'address', title: '地址', span: 24, visible: true, itemRender: { name: 'VxeTextarea' } },
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
    showItemEvent (field: string) {
      const $form = this.$refs.formRef as VxeFormInstance<FormDataVO>
      if ($form) {
        $form.showItem(field)
      }
    },
    hideItemEvent (field: string) {
      const $form = this.$refs.formRef as VxeFormInstance<FormDataVO>
      if ($form) {
        $form.hideItem(field)
      }
    },
    submitEvent () {
      VxeUI.modal.message({ content: '保存成功', status: 'success' })
    },
    resetEvent () {
      VxeUI.modal.message({ content: '重置事件', status: 'info' })
    }
  }
})
</script>
