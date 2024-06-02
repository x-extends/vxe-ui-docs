<template>
  <div>
    <p>
      <vxe-button class="my-color1">自定义按钮颜色</vxe-button>
      <vxe-button mode="text" class="my-color1">自定义文本按钮颜色</vxe-button>
    </p>
    <p>
      <vxe-button class="my-color2">自定义按钮颜色</vxe-button>
      <vxe-button mode="text" class="my-color2">自定义文本按钮颜色</vxe-button>
    </p>
  </div>
</template>

<script lang="ts" setup>
</script>

<style lang="scss" scoped>
.vxe-button.my-color1 {
  color: #fff;
  background-color: #1a1adb;
  &:hover,
  &:focus {
    color: #fff;
    background-color: #3e3ee5;
  }
  &:active {
    color: #fff;
    background-color: #2b2bc3;
  }
}

.vxe-button.my-color2 {
  color: #fff;
  background-color: #49cda2;
  &:hover,
  &:focus {
    color: #fff;
    background-color: #20bb89;
  }
  &:active {
    color: #fff;
    background-color: #3cdda9;
  }
}
</style>
