<template>
  <div>
    <vxe-tabs v-model="activeTab" height="200">
      <vxe-tab-pane title="页签1" name="1">
        <vxe-form ref="formRef1" :data="formData" v-bind="formOptions1"></vxe-form>
      </vxe-tab-pane>
      <vxe-tab-pane title="页签2" name="2">
        <vxe-form ref="formRef2" :data="formData" v-bind="formOptions2"></vxe-form>
      </vxe-tab-pane>
      <vxe-tab-pane title="页签3" name="3">
        <vxe-form ref="formRef3" :data="formData" v-bind="formOptions3"></vxe-form>
      </vxe-tab-pane>
    </vxe-tabs>

    <div style="text-align: center;">
      <vxe-button>取消</vxe-button>
      <vxe-button status="primary" @click="submitEvent">提交</vxe-button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive, nextTick } from 'vue'
import { VxeUI, VxeFormProps, VxeFormInstance, VxeFormItemPropTypes } from 'vxe-pc-ui'

interface FormDataVO {
  name: string
  nickname: string
  sex: string
  age: string
  address: string
}

const formRef1 = ref<VxeFormInstance<FormDataVO>>()
const formRef2 = ref<VxeFormInstance<FormDataVO>>()
const formRef3 = ref<VxeFormInstance<FormDataVO>>()

const activeTab = ref('1')

const formData = reactive<FormDataVO>({
  name: 'test1',
  nickname: '',
  sex: '',
  age: '',
  address: ''
})

const sexItemRender = reactive<VxeFormItemPropTypes.ItemRender>({
  name: 'VxeSelect',
  options: [
    { label: '女', value: 'Women' },
    { label: '男', value: 'Man' }
  ]
})

const formOptions1 = reactive<VxeFormProps<FormDataVO>>({
  rules: {
    name: [
      { required: true, content: '必须填写' }
    ],
    nickname: [
      { required: true, content: '必须填写' }
    ]
  },
  items: [
    { field: 'name', title: '名称', span: 24, itemRender: { name: 'VxeInput' } },
    { field: 'nickname', title: '昵称', span: 24, itemRender: { name: 'VxeInput' } }
  ]
})

const formOptions2 = reactive<VxeFormProps<FormDataVO>>({
  rules: {
    sex: [
      { required: true, content: '必须填写' }
    ],
    age: [
      { required: true, content: '必须填写' }
    ]
  },
  items: [
    { field: 'sex', title: '性别', span: 24, itemRender: { name: 'VxeInput' } },
    { field: 'age', title: '年龄', span: 24, itemRender: sexItemRender }
  ]
})

const formOptions3 = reactive<VxeFormProps<FormDataVO>>({
  rules: {
    address: [
      { required: true, content: '必须填写' }
    ]
  },
  items: [
    { field: 'address', title: '地址', span: 24, itemRender: { name: 'VxeTextarea' } }
  ]
})

const submitEvent = async () => {
  activeTab.value = '1'
  await nextTick()
  const $form1 = formRef1.value
  if ($form1) {
    const errMap = await $form1.validate()
    if (errMap) {
      return
    }
  }

  activeTab.value = '2'
  await nextTick()
  const $form2 = formRef2.value
  if ($form2) {
    const errMap = await $form2.validate()
    if (errMap) {
      return
    }
  }

  activeTab.value = '3'
  await nextTick()
  const $form3 = formRef3.value
  if ($form3) {
    const errMap = await $form3.validate()
    if (errMap) {
      return
    }
  }

  VxeUI.modal.message({ content: '保存成功', status: 'success' })
}
</script>
