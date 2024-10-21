<template>
  <div>
    <vxe-form
      title-colon
      ref="formRef"
      title-width="100"
      title-align="right"
      :collapse-config="{ foldButtonText: '关闭', unfoldButtonText: '更多', foldIcon: 'vxe-icon-funnel', unfoldIcon: 'vxe-icon-error-circle' }"
      :data="formData"
      @submit="submitEvent">
      <vxe-form-item title="名称" field="name" span="12" :item-render="{}">
        <template #default="params">
          <vxe-input v-model="formData.name" @change="changeEvent(params)"></vxe-input>
        </template>
      </vxe-form-item>
      <vxe-form-item title="昵称" field="nickname" span="12" :item-render="{}">
        <template #default="params">
          <vxe-input v-model="formData.nickname" @change="changeEvent(params)"></vxe-input>
        </template>
      </vxe-form-item>
      <vxe-form-item title="角色" field="role" span="12" folding :item-render="{}">
        <template #default="params">
          <vxe-input v-model="formData.role" @change="changeEvent(params)"></vxe-input>
        </template>
      </vxe-form-item>
      <vxe-form-item title="性别" field="sex" span="12" folding :item-render="{}">
        <template #default="params">
          <vxe-input v-model="formData.sex" @change="changeEvent(params)"></vxe-input>
        </template>
      </vxe-form-item>
      <vxe-form-item title="年龄" field="age" span="12" folding :item-render="{}">
        <template #default="params">
          <vxe-input v-model="formData.age" @change="changeEvent(params)"></vxe-input>
        </template>
      </vxe-form-item>
      <vxe-form-item title="大小" field="num" span="12" folding :item-render="{}">
        <template #default="params">
          <vxe-input v-model="formData.num" @change="changeEvent(params)"></vxe-input>
        </template>
      </vxe-form-item>
      <vxe-form-item title="创建时间" field="createDate" span="12" folding :item-render="{}">
        <template #default="params">
          <vxe-input v-model="formData.createDate" @change="changeEvent(params)"></vxe-input>
        </template>
      </vxe-form-item>
      <vxe-form-item title="更新时间" field="updateDate" span="12" folding :item-render="{}">
        <template #default="params">
          <vxe-input v-model="formData.updateDate" @change="changeEvent(params)"></vxe-input>
        </template>
      </vxe-form-item>
      <vxe-form-item align="center" span="24" collapse-node :item-render="{}">
        <template #default>
          <vxe-button type="submit" status="primary" content="搜索"></vxe-button>
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
  role: string
  nickname: string
  sex: string
  age: string
  num: string
  createDate: string
  updateDate: string
}

export default Vue.extend({
  data () {
    const formData: FormDataVO = {
      name: 'test1',
      role: '',
      nickname: 'Testing',
      sex: '',
      age: '',
      num: '',
      createDate: '',
      updateDate: ''
    }

    return {
      formData
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
    }
  }
})
</script>
