<template>
  <div>
    <vxe-button status="primary" @click="submitEvent">校验</vxe-button>
    <vxe-button @click="resetEvent">重置</vxe-button>
    <vxe-form
      ref="formRef"
      :data="formData"
      :rules="formRules">
      <vxe-form-item title="名称" field="name" span="12" :item-render="{}">
        <template #default="params">
          <vxe-input v-model="formData.name" @change="changeEvent(params)"></vxe-input>
        </template>
      </vxe-form-item>
      <vxe-form-item title="角色" field="role" span="12" :item-render="{}">
        <template #default="params">
          <vxe-input v-model="formData.role" @change="changeEvent(params)"></vxe-input>
        </template>
      </vxe-form-item>
    </vxe-form>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { VxeUI, VxeFormInstance, VxeFormPropTypes, VxeFormEvents } from 'vxe-pc-ui'

interface FormDataVO {
  name: string
  nickname: string
  role: string
}

const formRef = ref<VxeFormInstance<FormDataVO>>()

const formData = ref<FormDataVO>({
  name: '',
  nickname: '',
  role: ''
})

const formRules = ref<VxeFormPropTypes.Rules<FormDataVO>>({
  name: [
    { required: true, message: '必须填写' }
  ],
  role: [
    { required: true, message: '必须填写' }
  ]
})

const changeEvent = (params: any) => {
  const $form = formRef.value
  if ($form) {
    $form.updateStatus(params)
  }
}

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
