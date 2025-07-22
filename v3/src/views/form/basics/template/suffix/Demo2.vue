<template>
  <div>
    <vxe-form vertical :data="formData" >
      <vxe-form-item title="名称" field="name" span="24" :item-render="{}">
        <template #suffix>
          <vxe-button mode="text" status="primary" icon="vxe-icon-add-user"></vxe-button>
        </template>
        <template #default>
          <vxe-input v-model="formData.name"></vxe-input>
        </template>
      </vxe-form-item>
      <vxe-form-item title="性别" field="sex" span="24" :item-render="{}">
        <template #suffix>
          <vxe-button mode="text" status="error" icon="vxe-icon-delete-fill"></vxe-button>
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

<script lang="ts">
import Vue from 'vue'

interface FormDataVO {
  name: string
  nickname: string
  sex: string
  age: string
  isEnableName: boolean
  isEnableSex: boolean
}

export default Vue.extend({
  data () {
    const formData: FormDataVO = {
      name: 'test1',
      nickname: 'Testing',
      sex: '',
      age: '',
      isEnableName: false,
      isEnableSex: false
    }

    return {
      formData
    }
  }
})
</script>
