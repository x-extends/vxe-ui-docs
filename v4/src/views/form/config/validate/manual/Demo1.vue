<template>
  <div>
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
  remark: string
  address: string
}

const formRef = ref<VxeFormInstance<FormDataVO>>()

const formOptions = reactive<VxeFormProps<FormDataVO>>({
  data: {
    name: '',
    nickname: '',
    role: '',
    remark: '',
    address: ''
  },
  rules: {
    name: [
      { required: true, message: '必须填写' }
    ],
    role: [
      { required: true, message: '必须填写' }
    ],
    remark: [
      { required: true, message: '必须填写' }
    ],
    address: [
      { required: true, message: '必须填写' }
    ]
  },
  items: [
    { field: 'name', title: '名称', span: 12, itemRender: { name: 'VxeInput' } },
    { field: 'role', title: '角色', span: 12, itemRender: { name: 'VxeInput' } },
    {
      title: '分组',
      span: 24,
      vertical: true,
      children: [
        { field: 'remark', title: '备注', span: 12, itemRender: { name: 'VxeInput' } },
        { field: 'address', title: '地址', span: 12, itemRender: { name: 'VxeTextarea' } }
      ]
    }
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
