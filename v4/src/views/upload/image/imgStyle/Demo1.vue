<template>
  <div>
    <p>
      <vxe-upload v-model="imgList1" mode="image" :image-config="{width: 200, height: 200}"></vxe-upload>
    </p>
    <p>
      <vxe-upload v-model="imgList1" mode="image" :show-button-text="false" :image-config="{width: 60, height: 60}"></vxe-upload>
    </p>
    <p>
      <vxe-upload v-model="imgList1" mode="image" size="mini" :show-button-text="false" :image-config="{width: 30, height: 30}"></vxe-upload>
    </p>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const imgList1 = ref([
  { name: 'avatar1.jpg', url: 'https://vxeui.com/resource/avatarImg/avatar1.jpeg' }
])
</script>
