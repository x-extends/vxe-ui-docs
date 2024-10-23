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
      <vxe-form-item title="富文本" field="remark" span="24" :item-render="{}">
        <template #default="{ data }">
          <wang-editor v-model="data.remark"></wang-editor>
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

<script lang="ts">
import Vue from 'vue'

interface FormDataVO {
  name: string
  remark: string
}

export default Vue.extend({
  data () {
    const formData: FormDataVO = {
      name: 'test1',
      remark: ''
    }

    return {
      formData
    }
  }
})
</script>
