<template>
  <div>
    <vxe-upload v-model="imgList" mode="image" :more-config="moreConfig" readonly></vxe-upload>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'
import { VxeUploadPropTypes } from 'vxe-pc-ui'

const imgList = ref([
  { name: 'fj577.jpg', url: 'https://vxeui.com/resource/img/fj577.jpg' },
  { name: 'fj581.jpeg', url: 'https://vxeui.com/resource/img/fj581.jpeg' }
])

const moreConfig = reactive<VxeUploadPropTypes.MoreConfig>({
  maxCount: 1
})
</script>
