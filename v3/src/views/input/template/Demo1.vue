<template>
  <div>
    <vxe-input v-model="val1" placeholder="自定义前缀模板">
      <template #prefix>
        <span>Http://</span>
      </template>
    </vxe-input>
    <vxe-input v-model="val2" placeholder="自定义后缀模板">
      <template #suffix>
        <vxe-switch v-model="val3"></vxe-switch>
      </template>
    </vxe-input>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data () {
    return {
      val1: '',
      val2: '',
      val3: false
    }
  }
})
</script>
