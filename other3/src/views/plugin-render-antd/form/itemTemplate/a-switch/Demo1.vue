<template>
  <div>
    <vxe-form
      title-width="120"
      :data="formData">
      <vxe-form-item title="名称" field="name" span="24" :item-render="{ name: 'AInput' }"></vxe-form-item>
      <vxe-form-item title="开关" field="flag" span="24" :item-render="{ name: 'ASwitch' }"></vxe-form-item>
      <vxe-form-item align="center" span="24">
        <template #default>
          <a-button html-type="reset">重置</a-button>
          <a-button html-type="submit" type="primary">提交</a-button>
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
    const formData:FormDataVO = {
      name: 'test1',
      flag: false
    }

    return {
      formData
    }
  }
})
</script>
