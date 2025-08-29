<template>
  <div>
    <vxe-form
      border
      vertical
      title-background
      vertical-align="center"
      title-width="100"
      :data="formData">
      <vxe-form-item title="名称" field="name" span="12"></vxe-form-item>
      <vxe-form-item title="昵称" field="nickname" span="12"></vxe-form-item>
      <vxe-form-item title="性别" field="sex" span="12"></vxe-form-item>
      <vxe-form-item title="年龄" field="age" span="12"></vxe-form-item>
    </vxe-form>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

interface FormDataVO {
  name: string
  nickname: string
  sex: string
  age: string
}

export default Vue.extend({
  data () {
    const formData: FormDataVO = {
      name: 'test1',
      nickname: 'Testing',
      sex: '女',
      age: '22'
    }

    return {
      border: true,
      titleBackground: false,
      formData
    }
  }
})
</script>
