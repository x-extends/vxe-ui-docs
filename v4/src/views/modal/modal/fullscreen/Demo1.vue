<template>
  <div>
    <vxe-button content="首次全屏" @click="showPopup1 = true"></vxe-button>
    <vxe-modal v-model="showPopup1" fullscreen show-zoom>
      <div>全屏展示</div>
    </vxe-modal>

    <vxe-button content="每次全屏" @click="showPopup2 = true"></vxe-button>
    <vxe-modal v-model="showPopup2" fullscreen show-zoom remember>
      <div>全屏展示</div>
    </vxe-modal>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const showPopup1 = ref(false)
const showPopup2 = ref(false)
</script>
