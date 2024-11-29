<template>
  <div>
    <vxe-tabs v-model="activeTab" height="200">
      <vxe-tab-pane title="页签1" name="1">
        <vxe-form ref="formRef1" :data="formData" v-bind="formOptions1"></vxe-form>
      </vxe-tab-pane>
      <vxe-tab-pane title="页签2" name="2">
        <vxe-form ref="formRef2" :data="formData" v-bind="formOptions2"></vxe-form>
      </vxe-tab-pane>
      <vxe-tab-pane title="页签3" name="3">
        <vxe-form ref="formRef3" :data="formData" v-bind="formOptions3"></vxe-form>
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
import { VxeUI, VxeFormProps, VxeFormInstance, VxeFormItemPropTypes } from 'vxe-pc-ui'

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

    const sexItemRender: VxeFormItemPropTypes.ItemRender = {
      name: 'VxeSelect',
      options: [
        { label: '女', value: 'Women' },
        { label: '男', value: 'Man' }
      ]
    }

    const formOptions1: VxeFormProps<FormDataVO> = {
      rules: {
        name: [
          { required: true, content: '必须填写' }
        ],
        nickname: [
          { required: true, content: '必须填写' }
        ]
      },
      items: [
        { field: 'name', title: '名称', span: 24, itemRender: { name: 'VxeInput' } },
        { field: 'nickname', title: '昵称', span: 24, itemRender: { name: 'VxeInput' } }
      ]
    }

    const formOptions2: VxeFormProps<FormDataVO> = {
      rules: {
        sex: [
          { required: true, content: '必须填写' }
        ],
        age: [
          { required: true, content: '必须填写' }
        ]
      },
      items: [
        { field: 'sex', title: '性别', span: 24, itemRender: sexItemRender },
        { field: 'age', title: '年龄', span: 24, itemRender: { name: 'VxeInput' } }
      ]
    }

    const formOptions3: VxeFormProps<FormDataVO> = {
      rules: {
        address: [
          { required: true, content: '必须填写' }
        ]
      },
      items: [
        { field: 'address', title: '地址', span: 24, itemRender: { name: 'VxeTextarea' } }
      ]
    }

    return {
      activeTab: '1',
      formData,
      formOptions1,
      formOptions2,
      formOptions3,
      sexItemRender
    }
  },
  methods: {
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
