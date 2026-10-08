<template>
  <div>
    <vxe-button @click="handleScrollLeft(200)">滚动x=200</vxe-button>
    <vxe-button @click="handleScrollLeft(500)">滚动x=500</vxe-button>
    <vxe-button @click="handleScrollTop(100)">滚动y=100</vxe-button>
    <vxe-button @click="handleScrollTop(400)">滚动y=400</vxe-button>
    <vxe-button @click="handleScroll(800, 800)">滚动x=800y=800</vxe-button>

    <vxe-scrollbar ref="scrollbarRef" height="400">
      <div v-for="item in 40" :key="item" class="my-scrollbar-item">
        <div>{{ item }}这是一段很长的内容这是一段很长的内容这是一段很长的内容这是一段很长的内容这是一段很长的内容这是一段很长的内容这是一段很长的内容这是一段很长的内容这是一段很长的内容这是一段很长的内容这是一段很长的内容这是一段很长的内容这是一段很长的内容这是一段很长的内容这是一段很长的内容这是一段很长的内容这是一段很长的内容这是一段很长的内容这是一段很长的内容这是一段很长的内容这是一段很长的内容这是一段很长的内容这是一段很长的内容这是一段很长的内容这是一段很长的内容这是一段很长的内容这是一段很长的内容这是一段很长的内容这是一段很长的内容这是一段很长的内容这是一段很长的内容这是一段很长的内容这是一段很长的内容这是一段很长的内容这是一段很长的内容这是一段很长的内容这是一段很长的内容这是一段很长的内容这是一段很长的内容这是一段很长的内容这是一段很长的内容这是一段很长的内容这是一段很长的内容这是一段很长的内容这是一段很长的内容这是一段很长的内容这是一段很长的内容</div>
      </div>
    </vxe-scrollbar>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import type { VxeScrollbarInstance } from 'vxe-pc-ui'

const scrollbarRef = ref<VxeScrollbarInstance>()

const handleScrollTop = (top: number) => {
  const $scrollbar = scrollbarRef.value
  if ($scrollbar) {
    $scrollbar.scrollTo({
      top
    })
  }
}

const handleScrollLeft = (left: number) => {
  const $scrollbar = scrollbarRef.value
  if ($scrollbar) {
    $scrollbar.scrollTo({
      left
    })
  }
}

const handleScroll = (left: number, top: number) => {
  const $scrollbar = scrollbarRef.value
  if ($scrollbar) {
    $scrollbar.scrollTo({
      left,
      top
    })
  }
}
</script>

<style lang="scss" scoped>
.my-scrollbar-item {
  margin: 10px 0;
  line-height: 30px;
  width: 6000px;
}
</style>
