<template>
  <div>
    <vxe-tabs v-model="activeTab" height="200">
      <vxe-tab-pane title="页签1" name="1">
        <vxe-form ref="formRef1" :data="formData" :rules="formRules1">
          <vxe-form-item title="名称" field="name" span="24" :item-render="{}">
            <template #default="params">
              <vxe-input v-model="formData.name" @change="changeEvent1(params)"></vxe-input>
            </template>
          </vxe-form-item>
          <vxe-form-item title="昵称" field="nickname" span="24" :item-render="{}">
            <template #default="params">
              <vxe-input v-model="formData.nickname" @change="changeEvent1(params)"></vxe-input>
            </template>
          </vxe-form-item>
        </vxe-form>
      </vxe-tab-pane>

      <vxe-tab-pane title="页签2" name="2">
        <vxe-form ref="formRef2" :data="formData" :rules="formRules2">
          <vxe-form-item title="性别" field="sex" span="24" :item-render="{}">
            <template #default="params">
              <vxe-select v-model="formData.sex" :options="sexOptions" @change="changeEvent2(params)"></vxe-select>
            </template>
          </vxe-form-item>
          <vxe-form-item title="年龄" field="age" span="24" :item-render="{}">
            <template #default="params">
              <vxe-input v-model="formData.age" @change="changeEvent2(params)"></vxe-input>
            </template>
          </vxe-form-item>
        </vxe-form>
      </vxe-tab-pane>

      <vxe-tab-pane title="页签3" name="3">
        <vxe-form ref="formRef3" :data="formData" :rules="formRules3">
          <vxe-form-item title="地址" field="address" span="24" :item-render="{}">
            <template #default="params">
              <vxe-textarea v-model="formData.age" @change="changeEvent3(params)"></vxe-textarea>
            </template>
          </vxe-form-item>
        </vxe-form>
      </vxe-tab-pane>
    </vxe-tabs>

    <div style="text-align: center;">
      <vxe-button>取消</vxe-button>
      <vxe-button status="primary" @click="submitEvent">提交</vxe-button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { VxeUI, VxeFormPropTypes, VxeFormInstance } from 'vxe-pc-ui'

interface FormDataVO {
  name: string
  nickname: string
  sex: string
  age: string
  address: string
}

export default Vue.extend({
  data () {
    const formData: FormDataVO = {
      name: 'test1',
      nickname: '',
      sex: '',
      age: '',
      address: ''
    }

    const sexOptions = [
      { label: '女', value: 'Women' },
      { label: '男', value: 'Man' }
    ]

    const formRules1: VxeFormPropTypes.Rules = {
      name: [
        { required: true, content: '必须填写' }
      ],
      nickname: [
        { required: true, content: '必须填写' }
      ]
    }

    const formRules2: VxeFormPropTypes.Rules = {
      sex: [
        { required: true, content: '必须填写' }
      ],
      age: [
        { required: true, content: '必须填写' }
      ]
    }

    const formRules3: VxeFormPropTypes.Rules = {
      address: [
        { required: true, content: '必须填写' }
      ]
    }

    return {
      activeTab: '1',
      formData,
      sexOptions,
      formRules1,
      formRules2,
      formRules3
    }
  },
  methods: {
    changeEvent1 (params: any) {
      const $form1 = this.$refs.formRef1 as VxeFormInstance<FormDataVO>
      if ($form1) {
        $form1.updateStatus(params)
      }
    },
    changeEvent2 (params: any) {
      const $form2 = this.$refs.formRef2 as VxeFormInstance<FormDataVO>
      if ($form2) {
        $form2.updateStatus(params)
      }
    },
    changeEvent3 (params: any) {
      const $form3 = this.$refs.formRef3 as VxeFormInstance<FormDataVO>
      if ($form3) {
        $form3.updateStatus(params)
      }
    },
    async submitEvent () {
      this.activeTab = '1'
      await this.$nextTick()
      const $form1 = this.$refs.formRef1 as VxeFormInstance<FormDataVO>
      if ($form1) {
        const errMap = await $form1.validate()
        if (errMap) {
          return
        }
      }

      this.activeTab = '2'
      await this.$nextTick()
      const $form2 = this.$refs.formRef2 as VxeFormInstance<FormDataVO>
      if ($form2) {
        const errMap = await $form2.validate()
        if (errMap) {
          return
        }
      }

      this.activeTab = '3'
      await this.$nextTick()
      const $form3 = this.$refs.formRef3 as VxeFormInstance<FormDataVO>
      if ($form3) {
        const errMap = await $form3.validate()
        if (errMap) {
          return
        }
      }

      VxeUI.modal.message({ content: '保存成功', status: 'success' })
    }
  }
})
</script>
