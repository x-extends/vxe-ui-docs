<template>
  <div>
    <vxe-form
      ref="formRef"
      :data="formData"
      :rules="formRules"
      @submit="submitEvent"
      @reset="resetEvent">
      <vxe-form-item title="名称" field="name" span="12" :item-render="{}">
        <template #default="params">
          <vxe-input v-model="formData.name" @change="changeEvent(params)"></vxe-input>
        </template>
      </vxe-form-item>
      <vxe-form-item title="年龄" field="age" span="12" :item-render="{}">
        <template #default="params">
          <vxe-number-input v-model="formData.age" @change="changeEvent(params)"></vxe-number-input>
        </template>
      </vxe-form-item>
      <vxe-form-item align="center" span="24" :item-render="{}">
        <template #default>
          <vxe-button type="submit" status="primary" content="提交"></vxe-button>
          <vxe-button type="reset" content="重置"></vxe-button>
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
  age: number
}

const formRef = ref<VxeFormInstance<FormDataVO>>()

const formData = ref<FormDataVO>({
  name: '',
  nickname: '',
  age: 16
})

const formRules = ref<VxeFormPropTypes.Rules<FormDataVO>>({
  age: [
    { required: true, type: 'number', min: 18, max: 28, message: '数值范围18~28' }
  ]
})

const changeEvent = (params: any) => {
  const $form = formRef.value
  if ($form) {
    $form.updateStatus(params)
  }
}

const submitEvent: VxeFormEvents.Submit = () => {
  VxeUI.modal.message({ content: '保存成功', status: 'success' })
}

const resetEvent: VxeFormEvents.Reset = () => {
  VxeUI.modal.message({ content: '重置事件', status: 'info' })
}
</script>
