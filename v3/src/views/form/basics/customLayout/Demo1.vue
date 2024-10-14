<template>
  <div>
    <vxe-form
      ref="formRef"
      custom-layout
      :data="formData"
      :rules="formRules"
      @submit="submitEvent"
      @reset="resetEvent">
      <div style="width: 100%">
        <div style="color: red;">自定义内容</div>
        <vxe-form-item title="名称" field="name" span="24" :item-render="{}">
          <template #default="params">
            <vxe-input v-model="formData.name" @change="changeEvent(params)"></vxe-input>
          </template>
        </vxe-form-item>
      </div>
      <div style="width: 100%;height: 100px;padding-left: 30px;">
        <vxe-form-item title="性别" field="sex" span="12" :item-render="{}">
          <template #default="params">
            <vxe-input v-model="formData.sex" @change="changeEvent(params)"></vxe-input>
          </template>
        </vxe-form-item>
        <div style="color: red;">自定义内容</div>
        <vxe-form-item title="角色" field="role" span="12" :item-render="{}">
          <template #default="params">
            <vxe-input v-model="formData.role" @change="changeEvent(params)"></vxe-input>
          </template>
        </vxe-form-item>
        <vxe-form-item title="年龄" field="age" span="12" :item-render="{}">
          <template #default="params">
            <vxe-number-input v-model="formData.age" @change="changeEvent(params)"></vxe-number-input>
          </template>
        </vxe-form-item>
      </div>
      <div style="width: 100%">
        <vxe-button type="submit" status="primary" content="提交"></vxe-button>
        <vxe-button type="reset" content="重置"></vxe-button>
      </div>
    </vxe-form>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { VxeUI, VxeFormPropTypes, VxeFormInstance } from 'vxe-pc-ui'

interface FormDataVO {
  name: string
  nickname: string
  role: string
  sex: string
  age: number
}

export default Vue.extend({
  data () {
    const formData: FormDataVO = {
      name: 'test1',
      nickname: 'Testing',
      role: '',
      sex: '',
      age: 18
    }

    const formRules: VxeFormPropTypes.Rules<FormDataVO> = {
      name: [
        { required: true, message: '请输入名称' },
        { min: 3, max: 5, message: '长度在 3 到 5 个字符' }
      ],
      role: [
        { required: true, message: '请输入' }
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
    submitEvent () {
      VxeUI.modal.message({ content: '保存成功', status: 'success' })
    },
    resetEvent () {
      VxeUI.modal.message({ content: '重置事件', status: 'info' })
    }
  }
})
</script>
