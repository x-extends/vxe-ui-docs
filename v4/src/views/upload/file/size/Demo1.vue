<template>
  <div>
    <p>
      <vxe-upload v-model="fileList1"></vxe-upload>
    </p>
    <p>
      <vxe-upload v-model="fileList2" size="medium"></vxe-upload>
    </p>
    <p>
      <vxe-upload v-model="fileList3" size="small"></vxe-upload>
    </p>
    <p>
      <vxe-upload v-model="fileList4" size="mini"></vxe-upload>
    </p>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const fileList1 = ref([
  { name: 'fj577.jpg', url: 'https://vxeui.com/resource/img/fj577.jpg' },
  { name: 'fj581.jpeg', url: 'https://vxeui.com/resource/img/fj581.jpeg' }
])

const fileList2 = ref([
  { name: 'fj577.jpg', url: 'https://vxeui.com/resource/img/fj577.jpg' },
  { name: 'fj581.jpeg', url: 'https://vxeui.com/resource/img/fj581.jpeg' }
])

const fileList3 = ref([
  { name: 'fj577.jpg', url: 'https://vxeui.com/resource/img/fj577.jpg' },
  { name: 'fj581.jpeg', url: 'https://vxeui.com/resource/img/fj581.jpeg' }
])

const fileList4 = ref([
  { name: 'fj577.jpg', url: 'https://vxeui.com/resource/img/fj577.jpg' },
  { name: 'fj581.jpeg', url: 'https://vxeui.com/resource/img/fj581.jpeg' }
])
</script>
