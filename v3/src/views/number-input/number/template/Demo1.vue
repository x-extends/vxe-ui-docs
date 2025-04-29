<template>
  <div>
    <vxe-number-input v-model="val1" placeholder="自定义前缀图标">
      <template #prefix>
        <vxe-icon name="usd" status="success"></vxe-icon>
      </template>
    </vxe-number-input>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data () {
    return {
      val1: null
    }
  }
})
</script>
