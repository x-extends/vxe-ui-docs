<template>
  <div>
    <vxe-upload v-model="imgList" mode="image">
      <template #name="{ option }">
        <span style="color: red;">{{ option.name }}</span>
      </template>
    </vxe-upload>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const imgList = ref([
  { name: 'fj577.jpg', url: 'https://vxeui.com/resource/img/fj577.jpg' }
])
</script>
