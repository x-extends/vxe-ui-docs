<template>
  <div>
    <vxe-switch v-model="vertical"></vxe-switch>
    <vxe-button status="primary" @click="submitEvent">校验</vxe-button>
    <vxe-button @click="resetEvent">重置</vxe-button>

    <vxe-form
      border
      title-background
      ref="formRef"
      :vertical="vertical"
      :data="formData"
      :rules="formRules">
      <vxe-form-item title="名称" field="name" span="12" :item-render="{}">
        <template #default="params">
          <vxe-input v-model="formData.name" @change="changeEvent(params)"></vxe-input>
        </template>
      </vxe-form-item>
      <vxe-form-item title="角色" field="role" span="12" :item-render="{}">
        <template #default="params">
          <vxe-input v-model="formData.role" @change="changeEvent(params)"></vxe-input>
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
  role: string
}

export default Vue.extend({
  data () {
    const vertical = true

    const formData: FormDataVO = {
      name: '',
      nickname: '',
      role: ''
    }

    const formRules: VxeFormPropTypes.Rules<FormDataVO> = {
      name: [
        { required: true, message: '必须填写' }
      ],
      role: [
        { required: true, message: '必须填写' }
      ]
    }

    return {
      vertical,
      formData,
      formRules
    }
  },
  methods: {
    changeEvent (params: any) {
      const $form = this.$refs.formRef as VxeFormInstance<FormDataVO>
      if ($form) {
        $form.updateStatus(params)
      }
    },
    async submitEvent () {
      const $form = this.$refs.formRef as VxeFormInstance<FormDataVO>
      if ($form) {
        const errMaps = await $form.validate()
        if (!errMaps) {
          VxeUI.modal.message({ content: '验证成功', status: 'success' })
        }
      }
    },
    resetEvent () {
      const $form = this.$refs.formRef as VxeFormInstance<FormDataVO>
      if ($form) {
        $form.reset()
        VxeUI.modal.message({ content: '重置事件', status: 'info' })
      }
    }
  }
})
</script>
