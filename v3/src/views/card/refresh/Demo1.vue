<template>
  <div>
    <p>
      <vxe-card title="标题" :loading="loading" :height="200" :width="300">
        <template #extra>
          <vxe-button mode="text" icon="vxe-icon-refresh" :loading="loading" @click="loadList()"></vxe-button>
        </template>

        <template #default>
          <div>内容1</div>
          <div>内容2</div>
          <div>内容3</div>
        </template>
      </vxe-card>
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
  methods: {
    loadList () {
      this.loading = true
      setTimeout(() => {
        this.loading = false
      }, 3000)
    }
  },
  created () {
    this.loadList()
  }
})
</script>
