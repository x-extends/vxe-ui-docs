<template>
  <div>
    <vxe-form
      ref="formRef"
      custom-layout
      :data="formData"
      @submit="submitEvent"
      @reset="resetEvent">
      <div>
        <div style="color: red;">自定义内容</div>
        <vxe-form-item title="名称" field="name" span="24" :item-render="{}">
          <template #default="params">
            <vxe-input v-model="formData.name" @change="changeEvent(params)"></vxe-input>
          </template>
        </vxe-form-item>
      </div>
      <div style="height: 100px;">
        <vxe-form-item title="性别" field="sex" span="12" :item-render="{}">
          <template #default="params">
            <vxe-input v-model="formData.sex" @change="changeEvent(params)"></vxe-input>
          </template>
        </vxe-form-item>
        <div style="color: red;">自定义内容</div>
      </div>
      <vxe-form-item title="年龄" field="age" span="12" :item-render="{}">
        <template #default="params">
          <vxe-input v-model="formData.age" @change="changeEvent(params)"></vxe-input>
        </template>
      </vxe-form-item>
      <div style="width: 100%">
        <vxe-button type="submit" status="primary" content="提交"></vxe-button>
        <vxe-button type="reset" content="重置"></vxe-button>
      </div>
    </vxe-form>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { VxeUI, VxeFormInstance, VxeFormEvents } from 'vxe-pc-ui'

interface FormDataVO {
  name: string
  nickname: string
  sex: string
  age: string
}

const formRef = ref<VxeFormInstance<FormDataVO>>()

const formData = ref<FormDataVO>({
  name: 'test1',
  nickname: 'Testing',
  sex: '',
  age: ''
})

const changeEvent = (params: any) => {
  const $form = formRef.value
  if ($form) {
    $form.updateStatus(params)
  }
}

const submitEvent: VxeFormEvents.Submit = () => {
  VxeUI.modal.message({ content: '保存成功', status: 'success' })
}

const resetEvent: VxeFormEvents.Reset = () => {
  VxeUI.modal.message({ content: '重置事件', status: 'info' })
}
</script>
