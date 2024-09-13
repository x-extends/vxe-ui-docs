<template>
  <div>
    <vxe-form
      vertical
      ref="formRef"
      :data="formData"
      :rules="formRules">
      <vxe-form-item title="名称" field="name" span="24" :item-render="{}">
        <template #default="params">
          <vxe-input v-model="formData.name" @change="changeEvent(params)"></vxe-input>
        </template>
      </vxe-form-item>
      <vxe-form-item title="性别" field="sex" span="12" :item-render="{}">
        <template #default="params">
          <vxe-input v-model="formData.sex" @change="changeEvent(params)"></vxe-input>
        </template>
      </vxe-form-item>
      <vxe-form-item title="年龄" field="age" span="12" :item-render="{}">
        <template #default="params">
          <vxe-input v-model="formData.age" @change="changeEvent(params)"></vxe-input>
        </template>
      </vxe-form-item>
      <vxe-form-item align="center" span="24" :item-render="{}">
        <template #default>
          <vxe-button status="primary" content="手动提交" @click="submitEvent"></vxe-button>
        </template>
      </vxe-form-item>
    </vxe-form>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { VxeUI, VxeFormInstance, VxeFormPropTypes } from 'vxe-pc-ui'

interface FormDataVO {
  name: string
  nickname: string
  sex: string
  age: string
}

export default Vue.extend({
  data () {
    const formData: FormDataVO = {
      name: 'test1',
      nickname: 'Testing',
      sex: '',
      age: ''
    }

    const formRules: VxeFormPropTypes.Rules<FormDataVO> = {
      name: [
        { required: true, message: '请输入名称' },
        { min: 3, max: 5, message: '长度在 3 到 5 个字符' }
      ],
      sex: [
        { required: true, message: '请选择性别' }
      ],
      age: [
        { required: true, message: '请输入年龄' },
        {
          validator ({ itemValue }) {
            // 自定义校验
            if (Number(itemValue) > 35 || Number(itemValue) < 18) {
              return new Error('年龄在 18 ~ 35 之间')
            }
          }
        }
      ]
    }
    return {
      formData,
      formRules
    }
  },
  methods: {
    changeEvent  (params: any) {
      const $form = this.$refs.formRef as VxeFormInstance
      if ($form) {
        $form.updateStatus(params)
      }
    },
    async submitEvent () {
      const $form = this.$refs.formRef as VxeFormInstance
      if ($form) {
        const errMap = await $form.validate()
        if (!errMap) {
          VxeUI.modal.message({ content: '保存成功', status: 'success' })
        }
      }
    }
  }
})
</script>
