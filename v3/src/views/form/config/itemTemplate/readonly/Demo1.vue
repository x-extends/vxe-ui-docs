<template>
  <div>
    <vxe-button status="primary" @click="toggleReadonly">切换只读</vxe-button>
    <vxe-button status="success" @click="toggleBorder">显示边框</vxe-button>
    <vxe-button status="success" @click="toggleBackground">显示背景</vxe-button>

    <vxe-form ref="formRef" v-bind="formOptions">
      <template #nameDefault="{ data, item, readonly }">
        <vxe-input v-model="data[item.field]" :readonly="readonly"></vxe-input>
      </template>

      <template #numDefault="{ data, item, readonly }">
        <vxe-number-input v-model="data[item.field]" :readonly="readonly"></vxe-number-input>
      </template>

      <template #amountDefault="{ data, item, readonly }">
        <vxe-number-input v-model="data[item.field]" type="amount" :readonly="readonly"></vxe-number-input>
      </template>

      <template #addressDefault="{ data, item, readonly }">
        <vxe-textarea v-model="data[item.field]" :readonly="readonly"></vxe-textarea>
      </template>

      <template #action="{ readonly }">
        <vxe-button v-if="!readonly" type="reset">重置</vxe-button>
        <vxe-button v-if="!readonly" type="submit" status="primary">提交</vxe-button>
      </template>
    </vxe-form>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
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

export default Vue.extend({
  data () {
    const formOptions: VxeFormProps<FormDataVO> = {
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
        { field: 'name', title: '名称', span: 24, itemRender: {}, slots: { default: 'nameDefault' } },
        {
          span: 24,
          children: [
            { field: 'num', title: '数字', span: 12, itemRender: {}, slots: { default: 'numDefault' } },
            { field: 'amount', title: '金额', span: 12, itemRender: {}, slots: { default: 'amountDefault' } }
          ]
        },
        { field: 'address', title: '文本域', span: 24, itemRender: {}, slots: { default: 'addressDefault' } },
        { align: 'center', span: 24, slots: { default: 'action' } }
      ],
      rules: {
        num: [
          { required: true, message: '必填' }
        ]
      }
    }

    return {
      formOptions
    }
  },
  methods: {
    toggleReadonly () {
      this.formOptions.readonly = !this.formOptions.readonly
    },
    toggleBorder () {
      this.formOptions.border = !this.formOptions.border
    },
    toggleBackground () {
      this.formOptions.titleBackground = !this.formOptions.titleBackground
    }
  }
})
</script>
