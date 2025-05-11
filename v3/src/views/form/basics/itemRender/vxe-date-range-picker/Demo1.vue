<template>
  <div>
    <vxe-form
      title-width="120"
      :data="formData">
      <vxe-form-item title="名称" field="name" span="24" :item-render="{ name: 'VxeInput' }"></vxe-form-item>
      <vxe-form-item title="字符串格式" field="selectDate" span="24" :item-render="{ name: 'VxeDateRangePicker' }"></vxe-form-item>
      <vxe-form-item title="数组格式" field="dates" span="24" :item-render="{ name: 'VxeDateRangePicker' }"></vxe-form-item>
      <vxe-form-item title="2个字段格式" field="startAndEnd" span="24" :item-render="{ name: 'VxeDateRangePicker', startField: 'startDate', endField: 'endDate' }"></vxe-form-item>
      <vxe-form-item align="center" span="24">
        <template #default>
          <vxe-button type="reset">重置</vxe-button>
          <vxe-button type="submit" status="primary">提交</vxe-button>
        </template>
      </vxe-form-item>
    </vxe-form>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

interface FormDataVO {
  name: string
  nickname: string
  sex: string
  selectDate: string
  dates: string[]
  startDate: string
  endDate: string
  address: string
}

export default Vue.extend({
  data () {
    const formData: FormDataVO = {
      name: 'test1',
      nickname: 'Testing',
      sex: '',
      selectDate: '2025-05-10,2025-05-15',
      dates: ['2025-05-02', '2025-05-08'],
      endDate: '2025-05-20',
      startDate: '2025-06-01',
      address: ''
    }

    return {
      formData
    }
  }
})
</script>
