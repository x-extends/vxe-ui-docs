<template>
  <div>
    <vxe-upload v-model="fileList">
      <template #option="{ option }">
        <span style="color: red;">整行自定义：{{ option.name }}</span>
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
