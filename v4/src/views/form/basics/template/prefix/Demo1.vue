<template>
  <div>
    <vxe-form :data="formData" title-width="80">
      <vxe-form-item title="名称" field="name" span="24" :item-render="{}">
        <template #prefix>
          <vxe-checkbox v-model="formData.isEnableName"></vxe-checkbox>
        </template>
        <template #default>
          <vxe-input v-model="formData.name"></vxe-input>
        </template>
      </vxe-form-item>
      <vxe-form-item title="性别" field="sex" span="24" :item-render="{}">
        <template #prefix>
          <vxe-checkbox v-model="formData.isEnableSex"></vxe-checkbox>
        </template>
        <template #default>
          <vxe-input v-model="formData.sex"></vxe-input>
        </template>
      </vxe-form-item>
      <vxe-form-item title="年龄" field="age" span="24" :item-render="{}">
        <template #default>
          <vxe-input v-model="formData.age"></vxe-input>
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
  age: string
  isEnableName: boolean
  isEnableSex: boolean
}

const formData = ref<FormDataVO>({
  name: 'test1',
  nickname: 'Testing',
  sex: '',
  age: '',
  isEnableName: false,
  isEnableSex: false
})
</script>
