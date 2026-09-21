<template>
  <div>
    <vxe-button status="primary" @click="toggleReadonly">切换只读</vxe-button>
    <vxe-button status="success" @click="toggleBorder">显示边框</vxe-button>
    <vxe-button status="success" @click="toggleBackground">显示背景</vxe-button>

    <vxe-form ref="formRef" v-bind="formOptions">
      <template #name_default="{ data, item, readonly }">
        <span v-if="readonly">查看模式：{{ data[item.field] }}</span>
        <vxe-input v-else v-model="data[item.field]"></vxe-input>
      </template>

      <template #num_default="{ data, item, readonly }">
        <vxe-number-input v-model="data[item.field]" :readonly="readonly"></vxe-number-input>
      </template>

      <template #amount_default="{ data, item, readonly }">
        <vxe-number-input v-model="data[item.field]" type="amount" :readonly="readonly"></vxe-number-input>
      </template>

      <template #address_default="{ data, item, readonly }">
        <vxe-textarea v-model="data[item.field]" :readonly="readonly"></vxe-textarea>
      </template>

      <template #action="{ readonly }">
        <vxe-button v-if="!readonly" type="reset">重置</vxe-button>
        <vxe-button v-if="!readonly" type="submit" status="primary">提交</vxe-button>
      </template>
    </vxe-form>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
import { VxeFormProps } from 'vxe-pc-ui'

interface FormDataVO {
  name: string
  nickname: string
  num: number
  float: number
  integer: number
  amount: number
  address: string
}

const formOptions = reactive<VxeFormProps<FormDataVO>>({
  border: false,
  readonly: false,
  titleWidth: 140,
  titleColon: true,
  titleBackground: false,
  titleAlign: 'right',
  data: {
    name: 'test1',
    nickname: 'Testing',
    num: 4236985.3,
    integer: 100000,
    float: 31200.33,
    amount: 100000,
    address: '广东省深圳市'
  },
  items: [
    { field: 'name', title: '名称', span: 24, itemRender: {}, slots: { default: 'name_default' } },
    {
      span: 24,
      children: [
        { field: 'num', title: '数字', span: 12, itemRender: {}, slots: { default: 'num_default' } },
        { field: 'amount', title: '金额', span: 12, itemRender: {}, slots: { default: 'amount_default' } }
      ]
    },
    { field: 'address', title: '文本域', span: 24, itemRender: {}, slots: { default: 'address_default' } },
    { align: 'center', span: 24, slots: { default: 'action' } }
  ],
  rules: {
    num: [
      { required: true, message: '必填' }
    ]
  }
})

const toggleReadonly = () => {
  formOptions.readonly = !formOptions.readonly
}

const toggleBorder = () => {
  formOptions.border = !formOptions.border
}

const toggleBackground = () => {
  formOptions.titleBackground = !formOptions.titleBackground
}
</script>
