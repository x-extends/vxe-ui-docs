<template>
  <div>
    <vxe-scrollbar height="400">
      <div v-for="item in 20" :key="item" class="my-scrollbar-item">
        <div>内容 {{ item }}</div>
      </div>
    </vxe-scrollbar>
  </div>
</template>

<style lang="scss" scoped>
.my-scrollbar-item {
  margin: 10px 0;
  line-height: 30px;
  text-align: center;
  color: #ffffff;
  background-color: #409eff;
}
</style>
