<template>
  <div>
    <vxe-button content="点击弹出" @click="showPopup = true"></vxe-button>
    <vxe-modal v-model="showPopup" title="标题1" :width="1000" :height="800" :padding="false" show-zoom resize>
      <iframe src="https://vxeui.com/iframe/iframe1.html" style="display: block;width: 100%;height: 100%;border: 0;"></iframe>
    </vxe-modal>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const showPopup = ref(false)
</script>
