<template>
  <div>
    垂直布局：<vxe-switch v-model="vertical"></vxe-switch>
    显示提示：<vxe-switch v-model="validConfig.showErrorMessage"></vxe-switch>
    样式：<vxe-radio-group v-model="validConfig.theme">
      <vxe-radio-button checked-value="normal" content="简化"></vxe-radio-button>
      <vxe-radio-button checked-value="beautify" content="高亮"></vxe-radio-button>
    </vxe-radio-group>

    <vxe-form
      border
      title-background
      ref="formRef"
      :vertical="vertical"
      :data="formData"
      :rules="formRules"
      :valid-config="validConfig"
      @submit="submitEvent"
      @reset="resetEvent">
      <vxe-form-item title="名称" field="name" span="24" :item-render="{}">
        <template #default="params">
          <vxe-input v-model="formData.name" @change="changeEvent(params)"></vxe-input>
        </template>
      </vxe-form-item>
      <vxe-form-item title="性别" field="sex" span="12" :item-render="{}">
        <template #default="params">
          <vxe-select v-model="formData.sex" :options="sexOptions" @change="changeEvent(params)"></vxe-select>
        </template>
      </vxe-form-item>
      <vxe-form-item title="年龄" field="age" span="12" :item-render="{}">
        <template #default="params">
          <vxe-input v-model="formData.age" @change="changeEvent(params)"></vxe-input>
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
  sex: string
  age: string
}

export default Vue.extend({
  data () {
    const vertical = true

    const formData: FormDataVO = {
      name: '',
      nickname: '',
      sex: '',
      age: ''
    }

    const formRules: VxeFormPropTypes.Rules<FormDataVO> = {
      name: [
        { required: true, message: '请输入名称' }
      ],
      sex: [
        { required: true, message: '请选择性别' }
      ],
      age: [
        { required: true, message: '请输入年龄' }
      ]
    }

    const validConfig: VxeFormPropTypes.ValidConfig = {
      theme: 'beautify',
      showErrorMessage: true
    }

    const sexOptions = [
      { label: '女', value: 'Women' },
      { label: '男', value: 'Man' }
    ]

    return {
      vertical,
      formData,
      formRules,
      validConfig,
      sexOptions
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
