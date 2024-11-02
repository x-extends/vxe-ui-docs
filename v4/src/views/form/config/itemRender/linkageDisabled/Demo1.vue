<template>
  <div>
    <vxe-form v-bind="formOptions" ></vxe-form>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
import { VxeFormProps, VxeFormItemPropTypes, VxeSelectProps, VxeDatePickerProps } from 'vxe-pc-ui'
import XEUtils from 'xe-utils'

interface FormDataVO {
  name: string
  nickname: string
  sex: string
  role: string
  startTime: string
  endTime: string
}

const sexItemRender = reactive<VxeFormItemPropTypes.ItemRender>({
  name: 'VxeSelect',
  options: [
    { label: '女', value: 'Women' },
    { label: '男', value: 'Man' }
  ],
  events: {
    change ({ data }) {
      const isDisabled = data.sex !== 'Women'
      roleItemRender.props.disabled = isDisabled
    }
  }
})

const roleItemRender = reactive<VxeFormItemPropTypes.ItemRender<FormDataVO, VxeSelectProps> & { props: VxeSelectProps }>({
  name: 'VxeSelect',
  props: {
    disabled: true
  },
  options: [
    { label: 'Develop', value: '1' },
    { label: 'PM', value: '2' },
    { label: 'Testing', value: '3' },
    { label: 'Designer', value: '4' }
  ]
})

const startTimeItemRender = reactive<VxeFormItemPropTypes.ItemRender<FormDataVO, VxeDatePickerProps>>({
  name: 'VxeDatePicker',
  props: {
    disabledMethod ({ date }) {
      const endTime = formOptions.data.endTime
      if (endTime) {
        const eDate = XEUtils.toStringDate(endTime)
        return date >= eDate
      }
      return false
    }
  }
})

const endTimeItemRender = reactive<VxeFormItemPropTypes.ItemRender<FormDataVO, VxeDatePickerProps>>({
  name: 'VxeDatePicker',
  props: {
    disabledMethod ({ date }) {
      const startTime = formOptions.data.startTime
      if (startTime) {
        const sDate = XEUtils.toStringDate(startTime)
        return date <= sDate
      }
      return false
    }
  }
})

const actionItemRender = reactive<VxeFormItemPropTypes.ItemRender>({
  name: 'VxeButtonGroup',
  options: [
    { content: '重置', type: 'reset' },
    { content: '提交', type: 'submit', status: 'primary' }
  ]
})

const formOptions = reactive<VxeFormProps<FormDataVO> & { data: FormDataVO }>({
  titleWidth: 120,
  titleAlign: 'right',
  data: {
    name: 'test1',
    nickname: '',
    sex: '',
    role: '',
    startTime: '',
    endTime: ''
  },
  items: [
    { field: 'name', title: 'Name', span: 24, itemRender: { name: 'VxeInput' } },
    { field: 'sex', title: 'Sex', span: 12, itemRender: sexItemRender },
    { field: 'role', title: 'Role', span: 12, itemRender: roleItemRender },
    { field: 'startTime', title: 'Start time', span: 12, itemRender: startTimeItemRender },
    { field: 'endTime', title: 'End time', span: 12, itemRender: endTimeItemRender },
    { align: 'center', span: 24, itemRender: actionItemRender }
  ]
})
</script>
