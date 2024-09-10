<template>
  <VxeLayoutContainer>
    <RouterView />
    <vxe-loading :model-value="appStore.pageLoading"></vxe-loading>
  </VxeLayoutContainer>
</template>

<script lang="ts" setup>
import { useAppStore } from '@/store/app'

const appStore = useAppStore()
</script>
