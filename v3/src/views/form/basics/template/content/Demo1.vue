<template>
  <div>
    <vxe-form
      ref="formRef"
      title-bold
      :data="formData"
      @submit="submitEvent"
      @reset="resetEvent">
      <vxe-form-item title="名称" field="name" span="24" :item-render="{}">
        <template #default>
          <vxe-input v-model="formData.name"></vxe-input>
        </template>
      </vxe-form-item>
      <vxe-form-item title="性别" field="sex" span="24" :item-render="{}">
        <template #default>
          <vxe-input v-model="formData.sex" style="width: 40%;"></vxe-input>
          <vxe-checkbox v-model="formData.isEnable"></vxe-checkbox>
          <vxe-input v-model="formData.age" style="width: 40%;"></vxe-input>
        </template>
      </vxe-form-item>
      <vxe-form-item title="图片" field="age" span="24" :item-render="{}">
        <template #default>
          <vxe-image :src="formData.imgUrl" :height="200"></vxe-image>
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
  isEnable: boolean
  imgUrl: string
}

export default Vue.extend({
  data () {
    const formData: FormDataVO = {
      name: 'test1',
      nickname: 'Testing',
      sex: '',
      age: '',
      isEnable: true,
      imgUrl: 'https://vxeui.com/resource/img/fj577.jpg'
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
    },
    resetEvent () {
      VxeUI.modal.message({ content: '重置事件', status: 'info' })
    }
  }
})
</script>
