<template>
  <div>
    <vxe-upload v-model="fileList">
      <template #default>
        <vxe-button status="error">自定义插槽的按钮</vxe-button>
      </template>
    </vxe-upload>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const fileList = ref([
  { name: 'fj577.jpg', url: 'https://vxeui.com/resource/img/fj577.jpg' }
])
</script>
