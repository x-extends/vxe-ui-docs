<template>
  <VxeLayoutContainer vertical>
    <VxeLayoutHeader>
      <PageHeader />
    </VxeLayoutHeader>
    <VxeLayoutContainer>
      <VxeLayoutAside class="layout-aside">
        <PageAside />
      </VxeLayoutAside>
      <VxeLayoutContainer class="layout-content-container" vertical>
        <VxeLayoutBody class="layout-body">
          <RouterView />
        </VxeLayoutBody>
        <VxeLayoutFooter>
          <PageFooter></PageFooter>
        </VxeLayoutFooter>
      </VxeLayoutContainer>
    </VxeLayoutContainer>
  </VxeLayoutContainer>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import PageHeader from '@/components/PageHeader.vue'
import PageAside from '@/components/PageAside.vue'
import PageFooter from '@/components/PageFooter.vue'
</script>

<style lang="scss" scoped>
.layout-content-container {
  min-width: 1200px;
  box-shadow: inset 0 4px 8px rgba(0, 0, 0, 0.12);
}
.layout-body {
  padding: 16px 300px 16px 16px;
}
.layout-aside {
  overflow-y: scroll;
}
</style>
