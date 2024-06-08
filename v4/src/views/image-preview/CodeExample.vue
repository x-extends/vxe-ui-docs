<template>
  <div>
    <CodeLight path="image-preview/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="图片预览"></vxe-tip>
      </template>

      <template #preview>
        <img :src="`${appStore.siteBaseUrl}resource/ui/image-preview.gif`">
      </template>

      <template #describe>
        <pre>
          <pre-code>
            | ArrowUp ↑ | 放大图片 |
            | Shift + ArrowUp ↑ | 向上移动图片 |
            | ArrowDown ↓ | 缩小图片 |
            | Shift + ArrowDown ↑ | 向下移动图片 |
            | ArrowLeft ← | 切换上一张图片 |
            | Shift + ArrowLeft ↑ | 向左移动图片 |
            | ArrowRight → | 切换下一张图片 |
            | Shift + ArrowRight ↑ | 向右移动图片 |
            | Ctrl + P | 打印图片 |
            | Ctrl + R | 顺时针旋转图片 |
            | Ctrl + Shift + R | 逆时针旋转图片 |
            | Esc | 关闭图片预览 |
          </pre-code>
        </pre>
      </template>
    </CodeLight>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { useAppStore } from '@/store/app'

const appStore = useAppStore()
</script>
