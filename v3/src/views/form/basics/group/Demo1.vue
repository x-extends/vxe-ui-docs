<template>
  <div>
    <vxe-form
      ref="formRef"
      :data="formData"
      @submit="submitEvent"
      @reset="resetEvent">
      <vxe-form-group span="24" title="基础信息" :title-prefix="{icon: 'vxe-icon-user', iconStatus: 'primary'}" title-bold vertical>
        <vxe-form-item title="名称" field="name" span="8" :item-render="{}">
          <template #default="params">
            <vxe-input v-model="formData.name" @change="changeEvent(params)"></vxe-input>
          </template>
        </vxe-form-item>
        <vxe-form-item title="昵称" field="nickname" span="8" :item-render="{}">
          <template #default="params">
            <vxe-input v-model="formData.nickname" @change="changeEvent(params)"></vxe-input>
          </template>
        </vxe-form-item>
        <vxe-form-item title="性别" field="sex" span="8" :item-render="{}">
          <template #default="params">
            <vxe-input v-model="formData.sex" @change="changeEvent(params)"></vxe-input>
          </template>
        </vxe-form-item>
        <vxe-form-item title="年龄" field="age" span="8" :item-render="{}">
          <template #default="params">
            <vxe-number-input v-model="formData.age" @change="changeEvent(params)"></vxe-number-input>
          </template>
        </vxe-form-item>
      </vxe-form-group>
      <vxe-form-group span="24" title="隐私信息" :title-prefix="{icon: 'vxe-icon-lock', iconStatus: 'primary'}" title-bold vertical>
        <vxe-form-item title="生日" field="birthday" span="8" :item-render="{}">
          <template #default="params">
            <vxe-date-picker v-model="formData.birthday" @change="changeEvent(params)"></vxe-date-picker>
          </template>
        </vxe-form-item>
        <vxe-form-item title="身份证" field="identityCard" span="8" :item-render="{}">
          <template #default="params">
            <vxe-input v-model="formData.identityCard" @change="changeEvent(params)"></vxe-input>
          </template>
        </vxe-form-item>
        <vxe-form-item title="健康状态" field="health" span="8" :item-render="{}">
          <template #default="params">
            <vxe-input v-model="formData.health" @change="changeEvent(params)"></vxe-input>
          </template>
        </vxe-form-item>
      </vxe-form-group>
      <vxe-form-group span="24" title="其他信息" :title-prefix="{icon: 'vxe-icon-edit', iconStatus: 'primary'}" title-bold vertical>
        <vxe-form-item title="描述" field="describe" span="24" :item-render="{}">
          <template #default="params">
            <vxe-textarea v-model="formData.describe" @change="changeEvent(params)"></vxe-textarea>
          </template>
        </vxe-form-item>
        <vxe-form-item title="地址" field="address" span="24" :item-render="{}">
          <template #default="params">
            <vxe-textarea v-model="formData.address" @change="changeEvent(params)"></vxe-textarea>
          </template>
        </vxe-form-item>
      </vxe-form-group>
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
import { VxeUI, VxeFormInstance } from 'vxe-pc-ui'

interface FormDataVO {
  name: string
  nickname: string
  sex: string
  age: number
  birthday: string
  identityCard: string
  health: string
  describe: string
  address: string
}

export default Vue.extend({
  data () {
    const formData: FormDataVO = {
      name: '',
      nickname: '',
      sex: '0',
      age: 22,
      birthday: '',
      identityCard: '',
      health: '',
      describe: '',
      address: ''
    }

    return {
      formData
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
