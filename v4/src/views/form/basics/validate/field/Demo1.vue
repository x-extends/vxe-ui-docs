<template>
  <div>
    <vxe-form
      :data="formData"
      :rules="formRules"
      @submit="submitEvent"
      @reset="resetEvent">
      <vxe-form-item title="名称" field="name" span="24" :item-render="{ name: 'VxeInput' }"></vxe-form-item>
      <vxe-form-item title="2个字段格式" field="_startAndEnd" span="24" :item-render="{ name: 'VxeDateRangePicker', startField: 'startDate', endField: 'endDate' }"></vxe-form-item>
      <vxe-form-item align="center" span="24">
        <template #default>
          <vxe-button type="reset">重置</vxe-button>
          <vxe-button type="submit" status="primary">提交</vxe-button>
        </template>
      </vxe-form-item>
    </vxe-form>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { VxeUI, VxeFormPropTypes, VxeFormEvents } from 'vxe-pc-ui'

interface FormDataVO {
  name: string
  startDate: string
  endDate: string
}

const formData = ref<FormDataVO>({
  name: 'test1',
  startDate: '',
  endDate: ''
})

const formRules = ref<VxeFormPropTypes.Rules<FormDataVO>>({
  _startAndEnd: [
    { to: 'startDate', required: true, message: '请选择开始时间' },
    { to: 'endDate', required: true, message: '请选择结束时间' }
  ]
})

const submitEvent: VxeFormEvents.Submit = () => {
  VxeUI.modal.message({ content: '保存成功', status: 'success' })
}

const resetEvent: VxeFormEvents.Reset = () => {
  VxeUI.modal.message({ content: '重置事件', status: 'info' })
}
</script>
