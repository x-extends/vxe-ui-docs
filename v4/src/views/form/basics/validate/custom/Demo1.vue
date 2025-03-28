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
      <vxe-form-item title="角色" field="role" span="12" :item-render="{}">
        <template #default="params">
          <vxe-input v-model="formData.role" @change="changeEvent(params)"></vxe-input>
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
