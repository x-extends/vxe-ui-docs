<template>
  <div>
    <p>
      <vxe-card title="标题" :loading="loading" :height="200" :width="300"></vxe-card>
    </p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data () {
    return {
      loading: false
    }
  },
  created () {
    this.loading = true
    setTimeout(() => {
      this.loading = false
    }, 3000)
  }
})
</script>
