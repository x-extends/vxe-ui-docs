<template>
  <div>
    <p>
      <vxe-button content="确认提示框" @click="confirmEvent"></vxe-button>
    </p>
  </div>
</template>

<script lang="tsx" setup>
import { VxeUI } from 'vxe-pc-ui'

const confirmEvent = () => {
  VxeUI.modal.confirm('您确定要删除吗？').then(type => {
    console.log(`操作类型 ${type}`)
  })
}
</script>
