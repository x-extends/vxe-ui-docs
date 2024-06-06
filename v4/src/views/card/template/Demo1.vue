<template>
  <div>
    <p>
      <vxe-card title="标题" :height="200">
        <template #title>
          <div class="bg1">标题</div>
        </template>
        <template #extra>
          <div class="bg3">右上角</div>
        </template>
        <template #left>
          <div class="bg3">内容左侧区1</div>
          <div class="bg3">内容左侧区2</div>
          <div class="bg3">内容左侧区3</div>
          <div class="bg3">内容左侧区4</div>
          <div class="bg3">内容左侧区5</div>
          <div class="bg3">内容左侧区6</div>
        </template>
        <template #default>
          <div class="bg3">内容区1</div>
          <div class="bg3">内容区2</div>
          <div class="bg3">内容区3</div>
          <div class="bg3">内容区4</div>
          <div class="bg3">内容区5</div>
          <div class="bg3">内容区6</div>
          <div class="bg3">内容区7</div>
        </template>
        <template #right>
          <div class="bg3">内容右侧区1</div>
          <div class="bg3">内容右侧区2</div>
          <div class="bg3">内容右侧区3</div>
          <div class="bg3">内容右侧区4</div>
          <div class="bg3">内容右侧区5</div>
          <div class="bg3">内容右侧区6</div>
          <div class="bg3">内容右侧区7</div>
          <div class="bg3">内容右侧区8</div>
        </template>
        <template #footer>
          <div class="bg4">底部区</div>
        </template>
      </vxe-card>
    </p>
  </div>
</template>

<script lang="ts" setup>
</script>

<style lang="scss" scoped>
.page-wrapper {
  position: relative;
  height: 100px;
  margin: 20px 0;
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
