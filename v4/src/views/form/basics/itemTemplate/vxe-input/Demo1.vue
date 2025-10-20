<template>
  <div>
    <vxe-form
      title-width="120"
      :data="formData">
      <vxe-form-item title="名称" field="name" span="24" :item-render="{}">
        <template #default>
          <vxe-input v-model="formData.name"></vxe-input>
        </template>
      </vxe-form-item>
      <vxe-form-item title="输入框" field="role" span="24" :item-render="{}">
        <template #default="{ item }">
          <vxe-input v-model="formData.role" placeholder="输入内容" clearable @input="roleInput($event, item)"></vxe-input>
        </template>
      </vxe-form-item>
      <vxe-form-item align="center" span="24">
        <template #default>
          <vxe-button type="reset">重置</vxe-button>
          <vxe-button type="submit" status="primary">提交</vxe-button>
        </template>
      </vxe-form-item>
    </vxe-form>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

interface FormDataVO {
  name: string
  nickname: string
  sex: string
  role: string
  address: string
}

const formData = ref<FormDataVO>({
  name: 'test1',
  nickname: 'Testing',
  role: '',
  sex: '',
  address: ''
})

const roleInput = (eventParams, item) => {
  console.log('input', item.field, eventParams.value)
}
</script>
