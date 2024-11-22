<template>
  <div>
    <vxe-radio-group v-model="validConfig.theme">
      <vxe-radio-button label="normal" content="简化"></vxe-radio-button>
      <vxe-radio-button label="beautify" content="高亮"></vxe-radio-button>
    </vxe-radio-group>

    <vxe-form
      ref="formRef"
      :data="formData"
      :rules="formRules"
      :valid-config="validConfig"
      @submit="submitEvent"
      @reset="resetEvent">
      <vxe-form-item title="名称" field="name" span="24" :item-render="{}">
        <template #default="params">
          <vxe-input v-model="formData.name" @change="changeEvent(params)"></vxe-input>
        </template>
      </vxe-form-item>
      <vxe-form-item title="性别" field="sex" span="12" :item-render="{}">
        <template #default="params">
          <vxe-input v-model="formData.sex" @change="changeEvent(params)"></vxe-input>
        </template>
      </vxe-form-item>
      <vxe-form-item title="年龄" field="age" span="12" :item-render="{}">
        <template #default="params">
          <vxe-input v-model="formData.age" @change="changeEvent(params)"></vxe-input>
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
import { ref, reactive } from 'vue'
import { VxeUI, VxeFormInstance, VxeFormPropTypes, VxeFormEvents } from 'vxe-pc-ui'

interface FormDataVO {
  name: string
  nickname: string
  sex: string
  age: string
}

const formRef = ref<VxeFormInstance<FormDataVO>>()

const formData = ref<FormDataVO>({
  name: '',
  nickname: '',
  sex: '',
  age: ''
})

const formRules = ref<VxeFormPropTypes.Rules<FormDataVO>>({
  name: [
    { required: true, message: '请输入名称' }
  ],
  sex: [
    { required: true, message: '请选择性别' }
  ],
  age: [
    { required: true, message: '请输入年龄' }
  ]
})

const validConfig = reactive({
  theme: 'beautify'
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
