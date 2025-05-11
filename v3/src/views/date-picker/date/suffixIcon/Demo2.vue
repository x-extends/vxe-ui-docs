<template>
  <div>
    <vxe-date-picker v-model="val1" clearable>
      <template #suffix>
        <vxe-icon name="lock-fill" status="error"></vxe-icon>
      </template>
    </vxe-date-picker>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data () {
    return {
      val1: ''
    }
  }
})
</script>
