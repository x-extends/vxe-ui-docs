<template>
  <div>
    <vxe-switch v-model="formOptions.vertical"></vxe-switch>
    <vxe-button status="primary" @click="submitEvent">校验</vxe-button>
    <vxe-button @click="resetEvent">重置</vxe-button>

    <vxe-form ref="formRef" v-bind="formOptions"></vxe-form>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'
import { VxeUI, VxeFormInstance, VxeFormProps } from 'vxe-pc-ui'

interface FormDataVO {
  name: string
  nickname: string
  role: string
}

const formRef = ref<VxeFormInstance<FormDataVO>>()

const formOptions = reactive<VxeFormProps<FormDataVO>>({
  border: true,
  vertical: true,
  titleBackground: true,
  data: {
    name: '',
    nickname: '',
    role: ''
  },
  rules: {
    name: [
      { required: true, message: '必须填写' }
    ],
    role: [
      { required: true, message: '必须填写' }
    ]
  },
  items: [
    { field: 'name', title: '名称', span: 12, itemRender: { name: 'VxeInput' } },
    { field: 'role', title: '角色', span: 12, itemRender: { name: 'VxeInput' } }
  ]
})

const submitEvent = async () => {
  const $form = formRef.value
  if ($form) {
    const errMaps = await $form.validate()
    if (!errMaps) {
      VxeUI.modal.message({ content: '验证成功', status: 'success' })
    }
  }
}

const resetEvent = () => {
  const $form = formRef.value
  if ($form) {
    $form.reset()
    VxeUI.modal.message({ content: '重置事件', status: 'info' })
  }
}
</script>
