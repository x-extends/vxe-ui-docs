<template>
  <div>
    <vxe-button status="success" @click="showItemEvent('sex')">显示sex</vxe-button>
    <vxe-button status="info" @click="hideItemEvent('sex')">隐藏sex</vxe-button>
    <vxe-button status="success" @click="showItemEvent('age')">显示age</vxe-button>
    <vxe-button status="info" @click="hideItemEvent('age')">隐藏age</vxe-button>

    <vxe-form ref="formRef" v-bind="formOptions" v-on="formEvents"></vxe-form>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'
import { VxeUI, VxeFormInstance, VxeFormProps, VxeFormListeners } from 'vxe-pc-ui'

interface FormDataVO {
  name: string
  nickname: string
  sex: string
  age: string
  address: string
}

const formRef = ref<VxeFormInstance<FormDataVO>>()

const formOptions = reactive<VxeFormProps<FormDataVO>>({
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
})

const showItemEvent = (field: string) => {
  const $form = formRef.value
  if ($form) {
    $form.showItem(field)
  }
}

const hideItemEvent = (field: string) => {
  const $form = formRef.value
  if ($form) {
    $form.hideItem(field)
  }
}

const formEvents: VxeFormListeners<FormDataVO> = {
  submit () {
    VxeUI.modal.message({ content: '保存成功', status: 'success' })
  },
  reset () {
    VxeUI.modal.message({ content: '重置事件', status: 'info' })
  }
}
</script>
