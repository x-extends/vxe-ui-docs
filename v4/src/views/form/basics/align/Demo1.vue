<template>
  <div>
    <vxe-form
      border
      :data="formData">
      <vxe-form-item title="名称" field="name" span="24">
        <template #default>
          <span>{{ formData.name }}</span>
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
}

const formData = ref<FormDataVO>({
  name: 'test1',
  nickname: 'Testing',
  sex: '',
  age: ''
})
</script>
