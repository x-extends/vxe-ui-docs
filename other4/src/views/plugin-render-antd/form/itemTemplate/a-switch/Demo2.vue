<template>
  <div>
    <vxe-form
      title-width="120"
      :data="formData">
      <vxe-form-item title="名称" field="name" span="24" :item-render="{}">
        <template #default>
          <s-input v-model="formData.name"></s-input>
        </template>
      </vxe-form-item>
      <vxe-form-item title="开关" field="flag" span="24" :item-render="{}">
        <template #default="{ data }">
          <s-switch v-model="data.flag"></s-switch>
        </template>
      </vxe-form-item>
      <vxe-form-item align="center" span="24">
        <template #default>
          <a-button html-type="reset">重置</a-button>
          <a-button html-type="submit" type="primary">提交</a-button>
        </template>
      </vxe-form-item>
    </vxe-form>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

interface FormDataVO {
  name: string
  flag: boolean
}

const formData = ref<FormDataVO>({
  name: 'test1',
  flag: false
})
</script>
