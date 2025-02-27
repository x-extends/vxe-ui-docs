<template>
  <div>
    <vxe-button content="点击弹出" @click="showPopup = true"></vxe-button>

    <vxe-modal v-model="showPopup" v-bind="modalOptions">
      <template #default>
        <vxe-form v-bind="formOptions" v-on="formEvents"></vxe-form>
      </template>
    </vxe-modal>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'
import { VxeModalProps, VxeFormProps, VxeFormItemPropTypes, VxeFormListeners } from 'vxe-pc-ui'

interface FormDataVO {
  name: string
  role: string
  sex: string
  age: string
  address: string
}

const showPopup = ref(false)
const modalOptions = reactive<VxeModalProps>({
  title: '在弹窗中使用表单',
  width: 800,
  height: 400,
  escClosable: true,
  resize: true,
  showMaximize: true
})

const sexItemRender = reactive<VxeFormItemPropTypes.ItemRender>({
  name: 'VxeSelect',
  options: [
    { label: '女', value: 'Women' },
    { label: '男', value: 'Man' }
  ]
})

const formOptions = reactive<VxeFormProps<FormDataVO>>({
  data: {
    name: '',
    role: '',
    sex: '',
    age: '',
    address: ''
  },
  rules: {
    name: [
      { required: true, message: '名称必填' }
    ],
    role: [
      { required: true, message: '角色必填' }
    ],
    sex: [
      { required: true, message: '性别必选' }
    ],
    age: [
      { required: true, message: '年龄必填' },
      { type: 'number', min: 18, max: 46, message: '年龄范围18~46' }
    ]
  },
  items: [
    { field: 'name', title: '名称', span: 24, itemRender: { name: 'VxeInput' } },
    { field: 'role', title: '角色', span: 24, itemRender: { name: 'VxeInput' } },
    { field: 'sex', title: '性别', span: 12, itemRender: sexItemRender },
    { field: 'age', title: '年龄', span: 12, itemRender: { name: 'VxeNumberInput', props: { type: 'integer' } } },
    { field: 'address', title: '地址', span: 24, itemRender: { name: 'VxeTextarea' } },
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

const formEvents: VxeFormListeners<FormDataVO> = {
  submit () {
    console.log('保存成功', JSON.stringify(formOptions.data))
  },
  reset () {
    console.log('重置事件')
  }
}
</script>
