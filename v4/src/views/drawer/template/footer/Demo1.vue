<template>
  <div>
    <vxe-drawer v-model="showPopup" title="标题" :width="600" show-footer>
      <template #title>
        <div style="background: turquoise">标题</div>
      </template>
      <template #default>
        <div style="height:1600px;background: beige">内容区</div>
      </template>
      <template #footer>
        <div style="background: burlywood">底部区</div>
      </template>
    </vxe-drawer>
    <vxe-button content="自定义插槽模板" @click="openEvent"></vxe-button>
  </div>
</template>

<script lang="tsx" setup>
import { ref } from 'vue'

const showPopup = ref(false)

const openEvent = () => {
  showPopup.value = true
}
</script>
