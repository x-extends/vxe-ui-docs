<template>
  <div>
    <p>
      <vxe-card title="标题" :loading="loading" :height="200" :width="300">
        <template #extra>
          <vxe-button mode="text" icon="vxe-icon-refresh" @click="loadData()"></vxe-button>
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

<script lang="ts" setup>
import { ref } from 'vue'

const loading = ref(false)

const loadData = () => {
  loading.value = true
  setTimeout(() => {
    loading.value = false
  }, 500)
}

loadData()
</script>
