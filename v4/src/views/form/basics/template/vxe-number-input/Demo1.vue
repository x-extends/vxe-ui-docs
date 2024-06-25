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
      <vxe-form-item title="数值" field="num" span="24">
        <template #default>
          <vxe-number-input v-model="formData.num" type="number"></vxe-number-input>
        </template>
      </vxe-form-item>
      <vxe-form-item title="整数" field="integer" span="24" :item-render="{}">
        <template #default>
          <vxe-number-input v-model="formData.integer" type="integer"></vxe-number-input>
        </template>
      </vxe-form-item>
      <vxe-form-item title="小数" field="float" span="24" :item-render="{}">
        <template #default>
          <vxe-number-input v-model="formData.float" type="float"></vxe-number-input>
        </template>
      </vxe-form-item>
      <vxe-form-item align="center" span="24">
        <template #active>
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
  num: number | null
  float: number | null
  integer: number | null
}

const formData = ref<FormDataVO>({
  name: 'test1',
  nickname: 'Testing',
  num: null,
  integer: null,
  float: null
})
</script>
