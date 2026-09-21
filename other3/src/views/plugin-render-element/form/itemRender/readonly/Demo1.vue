<template>
  <div>
    <el-button type="primary" @click="toggleReadonly">切换只读</el-button>
    <el-button @click="toggleBorder">显示边框</el-button>
    <el-button @click="toggleBackground">显示背景</el-button>

    <vxe-form ref="formRef" v-bind="formOptions">
      <template #nameDefault="{ data, item, readonly }">
        <span v-if="readonly">查看模式：{{ data[item.field] }}</span>
        <el-input v-else v-model="data[item.field]"></el-input>
      </template>

      <template #numDefault="{ data, item, readonly }">
        <span v-if="readonly">查看模式：{{ data[item.field] }}</span>
        <el-input-number v-else v-model="data[item.field]"></el-input-number>
      </template>

      <template #addressDefault="{ data, item,readonly }">
        <span v-if="readonly">查看模式：{{ data[item.field] }}</span>
        <el-input v-else v-model="data[item.field]" type="textarea"></el-input>
      </template>

      <template #action="{ readonly }">
        <el-button v-if="!readonly" native-type="reset">重置</el-button>
        <el-button v-if="!readonly" native-type="submit" type="primary">提交</el-button>
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
        {
          span: 24,
          children: [
            { field: 'name', title: '名称', span: 12, itemRender: {}, slots: { default: 'nameDefault' } },
            { field: 'num', title: '数字', span: 12, itemRender: {}, slots: { default: 'numDefault' } }
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
