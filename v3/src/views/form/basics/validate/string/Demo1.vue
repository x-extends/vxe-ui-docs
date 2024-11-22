<template>
  <div>
    <vxe-form
      ref="formRef"
      :data="formData"
      :rules="formRules"
      @submit="submitEvent"
      @reset="resetEvent">
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
      <vxe-form-item align="center" span="24" :item-render="{}">
        <template #default>
          <vxe-button type="submit" status="primary" content="提交"></vxe-button>
          <vxe-button type="reset" content="重置"></vxe-button>
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
    const formData: FormDataVO = {
      name: '',
      nickname: '',
      role: ''
    }

    const formRules: VxeFormPropTypes.Rules<FormDataVO> = {
      role: [
        { required: true, message: '必须填写' }
      ]
    }

    return {
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
    submitEvent () {
      VxeUI.modal.message({ content: '保存成功', status: 'success' })
    },
    resetEvent () {
      VxeUI.modal.message({ content: '重置事件', status: 'info' })
    }
  }
})
</script>
