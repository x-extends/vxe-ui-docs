<template>
  <div>
    <vxe-form ref="formRef" v-bind="formOptions" >
      <template #active>
        <vxe-button status="primary" content="提交" @click="submitEvent"></vxe-button>
      </template>
    </vxe-form>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import { VxeUI, VxeFormInstance, VxeFormProps } from 'vxe-pc-ui'

interface FormDataVO {
  name: string
  nickname: string
  sex: string
  age: string
}

const formRef = ref<VxeFormInstance<FormDataVO>>()

const formOptions = reactive<VxeFormProps<FormDataVO>>({
  preventSubmit: true,
  data: {
    name: 'test1',
    nickname: 'Testing',
    sex: '',
    age: ''
  },
  rules: {
    name: [
      { required: true, message: '请输入名称' },
      { min: 3, max: 5, message: '长度在 3 到 5 个字符' }
    ],
    sex: [
      { required: true, message: '请选择性别' }
    ],
    age: [
      { required: true, message: '请输入年龄' },
      {
        validator ({ itemValue }) {
          // 自定义校验
          if (Number(itemValue) > 35 || Number(itemValue) < 18) {
            return new Error('年龄在 18 ~ 35 之间')
          }
        }
      }
    ]
  },
  items: [
    { field: 'name', title: '名称', span: 24, itemRender: { name: 'VxeInput' } },
    { field: 'sex', title: '性别', span: 12, itemRender: { name: 'VxeInput' } },
    { field: 'age', title: '年龄', span: 12, itemRender: { name: 'VxeInput' } },
    { align: 'center', span: 24, slots: { default: 'active' } }
  ]
})

const submitEvent = async () => {
  const $form = formRef.value
  if ($form) {
    const errMap = await $form.validate()
    if (!errMap) {
      VxeUI.modal.message({ content: '保存成功', status: 'success' })
    }
  }
}
</script>
