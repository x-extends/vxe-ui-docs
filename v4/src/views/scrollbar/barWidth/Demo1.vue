<template>
  <div>
    滚动条宽度：<vxe-slider v-model="yConfig.width" immediate show-tooltip></vxe-slider>
    边距：<vxe-switch v-model="isPadding"></vxe-switch>

    <vxe-scrollbar height="300" :padding="isPadding" :y-config="yConfig">
      <div v-for="item in 20" :key="item" class="my-scrollbar-item">
        <div>{{ item }}这是一段很长的内容这是一段很长的内容这是一段很长的内容这是一段很长的内容这是一段很长的内容这是一段很长的内容这是一段很长的内容这是一段很长的内容这是一段很长的内容这是一段很长的内容这是一段很长的内容这是一段很长的内容这是一段很长的内容这是一段很长的内容这是一段很长的内容这是一段很长的内容这是一段很长的内容这是一段很长的内容这是一段很长的内容这是一段很长的内容这是一段很长的内容这是一段很长的内容这是一段很长的内容这是一段很长的内容这是一段很长的内容这是一段很长的内容这是一段很长的内容这是一段很长的内容这是一段很长的内容这是一段很长的内容这是一段很长的内容这是一段很长的内容这是一段很长的内容这是一段很长的内容这是一段很长的内容这是一段很长的内容这是一段很长的内容这是一段很长的内容这是一段很长的内容这是一段很长的内容这是一段很长的内容这是一段很长的内容这是一段很长的内容这是一段很长的内容这是一段很长的内容这是一段很长的内容这是一段很长的内容</div>
      </div>
    </vxe-scrollbar>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'
import type { VxeScrollbarPropTypes } from 'vxe-pc-ui'

const yConfig = reactive<VxeScrollbarPropTypes.YConfig>({
  width: 6
})

const isPadding = ref(false)
</script>

<style lang="scss" scoped>
.my-scrollbar-item {
  margin: 10px 0;
  line-height: 30px;
  width: 6000px;
}
</style>
