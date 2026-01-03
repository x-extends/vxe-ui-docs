<template>
  <div>
    <div class="page-wrapper">
      <vxe-layout-container>
        <vxe-layout-aside class="bg2" :loading="loading" :collapsed="!showLeftAside">
          <vxe-button mode="text" status="error" @click="openLoading">点击加载中</vxe-button>
          <div style="height: 400px">菜单</div>
          <div style="height: 400px">菜单</div>
        </vxe-layout-aside>

        <vxe-layout-container vertical>
          <vxe-layout-header fixed class="bg1">
            <div style="height: 50px">头部</div>
          </vxe-layout-header>

          <vxe-layout-body class="bg3" show-backtop>
            <vxe-button mode="text" status="error" @click="toggleLeftAside">点击展开/收起左侧</vxe-button>
            <div style="height: 400px">内容</div>
            <div style="height: 400px">内容</div>
          </vxe-layout-body>

          <vxe-layout-footer class="bg4">
            <div style="height: 30px">底部</div>
          </vxe-layout-footer>
        </vxe-layout-container>
      </vxe-layout-container>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const loading = ref(false)
const showLeftAside = ref(true)

const toggleLeftAside = () => {
  showLeftAside.value = !showLeftAside.value
}

const openLoading = () => {
  loading.value = true
  setTimeout(() => {
    loading.value = false
  }, 3000)
}
</script>

<style lang="scss" scoped>
.page-wrapper {
  height: 300px;
}
.bg1 {
  background-color: #a6c9ed;
}
.bg2 {
  background-color: #c0dcf7;
}
.bg3 {
  background-color: #dfedfb;
}
.bg4 {
  background-color: #a6c9ed;
}
</style>
