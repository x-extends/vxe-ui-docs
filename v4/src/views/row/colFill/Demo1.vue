<template>
  <div>
    <vxe-row gutter="10">
      <vxe-col width="100">
        <div class="mybg">宽度100</div>
      </vxe-col>
      <vxe-col fill>
        <div class="mybg">铺满剩余宽度</div>
      </vxe-col>
      <vxe-col width="200">
        <div class="mybg">宽度200</div>
      </vxe-col>
    </vxe-row>

    <vxe-row gutter="10">
      <vxe-col width="100">
        <vxe-input placeholder="自动铺满"></vxe-input>
      </vxe-col>
      <vxe-col fill>
        <vxe-input placeholder="默认"></vxe-input>
      </vxe-col>
      <vxe-col width="200">
        <vxe-input placeholder="自动铺满"></vxe-input>
      </vxe-col>
    </vxe-row>
  </div>
</template>

<style lang="scss" scoped>
.mybg {
  line-height: 30px;
  text-align: center;
  color: #ffffff;
  background-color: #409eff;
}
</style>
