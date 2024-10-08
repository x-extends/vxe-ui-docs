<template>
  <div>
    <vxe-form
      title-width="120"
      :data="formData">
      <vxe-form-item title="名称" field="name" span="24" :item-render="{ name: 'ElInput' }"></vxe-form-item>
      <vxe-form-item title="开关" field="flag" span="24" :item-render="{ name: 'ElSwitch' }"></vxe-form-item>
      <vxe-form-item align="center" span="24">
        <template #default>
          <el-button native-type="reset">重置</el-button>
          <el-button native-type="submit" type="primary">提交</el-button>
        </template>
      </vxe-form-item>
    </vxe-form>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

interface FormDataVO {
  name: string
  flag: boolean
}

export default Vue.extend({
  data () {
    const formData: FormDataVO = {
      name: 'test1',
      flag: false
    }

    return {
      formData
    }
  }
})
</script>
