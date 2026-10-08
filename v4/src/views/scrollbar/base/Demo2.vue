<template>
  <div>
    <vxe-scrollbar height="300">
      <div v-for="item in 20" :key="item" class="my-scrollbar-item">
        <div>内容 {{ item }}</div>
      </div>
    </vxe-scrollbar>
  </div>
</template>

<script lang="ts" setup>
</script>

<style lang="scss" scoped>
.my-scrollbar-item {
  margin: 10px 0;
  line-height: 30px;
  text-align: center;
}
</style>
