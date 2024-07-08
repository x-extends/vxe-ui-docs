<template>
  <div>
    <vxe-form
      title-width="120"
      :data="formData">
      <vxe-form-item title="名称" field="name" span="24" :item-render="{ name: 'ElInput' }"></vxe-form-item>
      <vxe-form-item title="评分" field="num" span="24" :item-render="{ name: 'ElRate' }"></vxe-form-item>
      <vxe-form-item align="center" span="24">
        <template #default>
          <el-button native-type="reset">重置</el-button>
          <el-button native-type="submit" type="primary">提交</el-button>
        </template>
      </vxe-form-item>
    </vxe-form>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

interface FormDataVO {
  name: string
  num: number
}

const formData = ref<FormDataVO>({
  name: 'test1',
  num: 4
})
</script>
