<template>
  <div>
    <vxe-button status="success" @click="sexVisible = true">显示sex</vxe-button>
    <vxe-button status="info" @click="sexVisible = false">隐藏sex</vxe-button>
    <vxe-button status="success" @click="ageVisible = true">显示sex</vxe-button>
    <vxe-button status="info" @click="ageVisible = false">隐藏sex</vxe-button>

    <vxe-form
      ref="formRef"
      :data="formData"
      @submit="submitEvent"
      @reset="resetEvent">
      <vxe-form-item title="名称" field="name" span="24" :item-render="{}">
        <template #default="params">
          <vxe-input v-model="formData.name" @change="changeEvent(params)"></vxe-input>
        </template>
      </vxe-form-item>
      <vxe-form-item title="性别" field="sex" span="12" :visible="sexVisible" :item-render="{}">
        <template #default="params">
          <vxe-input v-model="formData.sex" @change="changeEvent(params)"></vxe-input>
        </template>
      </vxe-form-item>
      <vxe-form-item title="年龄" field="age" span="12" :visible="ageVisible" :item-render="{}">
        <template #default="params">
          <vxe-input v-model="formData.age" @change="changeEvent(params)"></vxe-input>
        </template>
      </vxe-form-item>
      <vxe-form-item title="地址" field="address" span="24" :item-render="{}">
        <template #default="params">
          <vxe-textarea v-model="formData.address" @change="changeEvent(params)"></vxe-textarea>
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
import { VxeUI, VxeFormInstance } from 'vxe-pc-ui'

interface FormDataVO {
  name: string
  nickname: string
  sex: string
  age: string
  address: string
}

export default Vue.extend({
  data () {
    const sexVisible = true
    const ageVisible = true

    const formData: FormDataVO = {
      name: 'test1',
      nickname: 'Testing',
      sex: '',
      age: '',
      address: ''
    }

    return {
      formData,
      sexVisible,
      ageVisible
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
