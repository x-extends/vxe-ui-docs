<template>
  <div>
    垂直布局：<vxe-switch v-model="vertical"></vxe-switch>
    显示图标：<vxe-switch v-model="validConfig.showErrorIcon"></vxe-switch>

    <vxe-form
      title-colon
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
      <vxe-form-item title="角色" field="role" span="12" :item-render="{}">
        <template #default="params">
          <vxe-input v-model="formData.role" @change="changeEvent(params)"></vxe-input>
        </template>
      </vxe-form-item>
      <vxe-form-item title="年龄" field="age" span="12" :item-render="{}">
        <template #default="params">
          <vxe-input v-model="formData.age" @change="changeEvent(params)"></vxe-input>
        </template>
      </vxe-form-item>
      <vxe-form-item title="备注" field="remark" span="12" :item-render="{}">
        <template #default="params">
          <vxe-input v-model="formData.remark" @change="changeEvent(params)"></vxe-input>
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
  sex: string
  age: string
  remark: string
}

export default Vue.extend({
  data () {
    const vertical = false

    const formData: FormDataVO = {
      name: '',
      nickname: '',
      role: '',
      sex: '',
      age: '',
      remark: ''
    }

    const formRules: VxeFormPropTypes.Rules<FormDataVO> = {
      name: [
        { required: true, message: '请输入名称' }
      ],
      sex: [
        { required: true, message: '请选择性别' }
      ],
      role: [
        { required: true, message: '请选择性别' }
      ],
      age: [
        { required: true, message: '请输入年龄' }
      ],
      remark: [
        { required: true, message: '请输入年龄' }
      ]
    }

    const validConfig: VxeFormPropTypes.ValidConfig = {
      showErrorIcon: true,
      showErrorMessage: false
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
