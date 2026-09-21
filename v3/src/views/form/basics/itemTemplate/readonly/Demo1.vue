<template>
  <div>
    <vxe-button status="primary" @click="toggleReadonly">切换只读</vxe-button>

    <vxe-form
      title-colon
      title-width="120"
      title-align="right"
      :readonly="isReadonly"
      :data="formData"
      :rules="formRules"
    >
      <vxe-form-item title="名称" field="name" span="24" :item-render="{}">
        <template #default="{ readonly }">
          <span v-if="readonly">查看模式：{{ formData.name }}</span>
          <vxe-input v-model="formData.name"></vxe-input>
        </template>
      </vxe-form-item>
      <vxe-form-group span="24">
        <vxe-form-item title="数字" field="num" span="8" :item-render="{}">
          <template #default="{ readonly }">
            <vxe-number-input v-model="formData.num" :readonly="readonly"></vxe-number-input>
          </template>
        </vxe-form-item>
        <vxe-form-item title="金额" field="amount" span="8" :item-render="{}">
          <template #default="{ readonly }">
            <vxe-number-input v-model="formData.amount" type="amount" :readonly="readonly"></vxe-number-input>
          </template>
        </vxe-form-item>
      </vxe-form-group>
      <vxe-form-item title="文本域" field="address" span="24" :item-render="{}">
        <template #default="{ readonly }">
          <vxe-textarea v-model="formData.address" :readonly="readonly"></vxe-textarea>
        </template>
      </vxe-form-item>
      <vxe-form-item align="center" span="24">
        <template #default>
          <vxe-button v-if="!isReadonly" type="reset">重置</vxe-button>
          <vxe-button v-if="!isReadonly" type="submit" status="primary">提交</vxe-button>
        </template>
      </vxe-form-item>
    </vxe-form>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { VxeFormPropTypes } from 'vxe-pc-ui'

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
    const formData: FormDataVO = {
      name: 'test1',
      nickname: 'Testing',
      num: 4236985.3,
      integer: 100000,
      float: 31200.33,
      amount: 100000,
      address: '广东省深圳市'
    }

    const formRules: VxeFormPropTypes.Rules = {
      num: [
        { required: true, message: '必填' }
      ]
    }

    const isReadonly = false

    return {
      formData,
      formRules,
      isReadonly
    }
  },
  methods: {
    toggleReadonly () {
      this.isReadonly = !this.isReadonly
    }
  }
})
</script>
