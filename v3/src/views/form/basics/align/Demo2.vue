<template>
  <div>
    <vxe-form
      align="center"
      :data="formData">
      <vxe-form-item title="名称" field="name" span="24">
        <template #default>
          <span>{{ formData.name }}</span>
        </template>
      </vxe-form-item>
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
      sex: '',
      age: ''
    }

    return {
      formData
    }
  }
})
</script>
