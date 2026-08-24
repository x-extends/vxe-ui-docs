<template>
  <div>
    <vxe-button status="primary" @click="handleResetEvent">手动重置</vxe-button>
    <vxe-form ref="formRef" v-bind="formOptions" v-on="formEvents"></vxe-form>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'
import { VxeUI, VxeFormInstance, VxeFormProps, VxeFormListeners, VxeFormItemPropTypes } from 'vxe-pc-ui'

interface FormDataVO {
  name: string
  nickname: string
  sex: string
  age: string
  startDate: string
  endDate: string
}

const formRef = ref<VxeFormInstance<FormDataVO>>()

const sexListItemRender = reactive<VxeFormItemPropTypes.ItemRender>({
  name: 'VxeSelect',
  props: {
    multiple: true
  },
  options: [
    { label: '女', value: 'Women' },
    { label: '男', value: 'Man' }
  ]
})

const formOptions = reactive<VxeFormProps<FormDataVO>>({
  data: {
    name: 'test1',
    nickname: 'Testing',
    sex: '',
    age: '',
    startDate: '2026-08-20',
    endDate: '2026-08-20'
  },
  items: [
    { field: 'name', title: '名称', span: 24, itemRender: { name: 'VxeInput' }, resetValue: 'test1' },
    { field: 'sex', title: '性别', span: 12, itemRender: sexListItemRender },
    { field: 'age', title: '年龄', span: 12, itemRender: { name: 'VxeInput' } },
    {
      field: '_startAndEnd',
      title: '日期范围',
      span: 24,
      resetValue ({ currentField }) {
        if (currentField === 'startDate') {
          return '2026-08-20'
        }
        if (currentField === 'endDate') {
          return '2026-08-20'
        }
        return ''
      },
      itemRender: {
        name: 'VxeDateRangePicker',
        startField: 'startDate',
        endField: 'endDate'
      }
    },
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
    VxeUI.modal.message({ content: '保存成功', status: 'success' })
  },
  reset () {
    VxeUI.modal.message({ content: '重置事件', status: 'info' })
  }
}

const handleResetEvent = () => {
  const $form = formRef.value
  if ($form) {
    $form.reset()
  }
}
</script>
