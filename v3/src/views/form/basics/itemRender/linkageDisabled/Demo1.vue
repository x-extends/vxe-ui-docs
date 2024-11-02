<template>
  <div>
    <vxe-form
      title-width="120"
      title-align="right"
      :data="formData">
      <vxe-form-item title="Name" field="name" span="24" :item-render="{ name: 'VxeInput' }"></vxe-form-item>
      <vxe-form-item title="Sex" field="sex" span="12" :item-render="sexItemRender"></vxe-form-item>
      <vxe-form-item title="Role" field="role" span="12" :item-render="roleItemRender"></vxe-form-item>
      <vxe-form-item title="Start time" field="startTime" span="12" :item-render="startTimeItemRender"></vxe-form-item>
      <vxe-form-item title="End time" field="endTime" span="12" :item-render="endTimeItemRender"></vxe-form-item>
      <vxe-form-item align="center" span="24" :item-render="actionItemRender"></vxe-form-item>
    </vxe-form>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { VxeFormItemPropTypes, VxeSelectProps, VxeDatePickerProps } from 'vxe-pc-ui'
import XEUtils from 'xe-utils'

interface FormDataVO {
  name: string
  nickname: string
  sex: string
  role: string
  startTime: string
  endTime: string
}

export default Vue.extend({
  data () {
    const sexItemRender: VxeFormItemPropTypes.ItemRender = {
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
    }

    const roleItemRender: VxeFormItemPropTypes.ItemRender<FormDataVO, VxeSelectProps> & { props: VxeSelectProps } = {
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
    }

    const startTimeItemRender: VxeFormItemPropTypes.ItemRender<FormDataVO, VxeDatePickerProps> = {
      name: 'VxeDatePicker',
      props: {
        disabledMethod ({ date }) {
          const endTime = formData.endTime
          if (endTime) {
            const eDate = XEUtils.toStringDate(endTime)
            return date >= eDate
          }
          return false
        }
      }
    }

    const endTimeItemRender: VxeFormItemPropTypes.ItemRender<FormDataVO, VxeDatePickerProps> = {
      name: 'VxeDatePicker',
      props: {
        disabledMethod ({ date }) {
          const startTime = formData.startTime
          if (startTime) {
            const sDate = XEUtils.toStringDate(startTime)
            return date <= sDate
          }
          return false
        }
      }
    }

    const actionItemRender: VxeFormItemPropTypes.ItemRender = {
      name: 'VxeButtonGroup',
      options: [
        { content: '重置', type: 'reset' },
        { content: '提交', type: 'submit', status: 'primary' }
      ]
    }

    const formData: FormDataVO = {
      name: 'test1',
      nickname: '',
      sex: '',
      role: '',
      startTime: '',
      endTime: ''
    }

    return {
      sexItemRender,
      roleItemRender,
      startTimeItemRender,
      endTimeItemRender,
      actionItemRender,
      formData
    }
  }
})
</script>
