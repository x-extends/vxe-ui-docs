<template>
  <div>
    <vxe-row gutter="10">
      <vxe-col width="100">
        <div class="mybg">宽度100</div>
      </vxe-col>
      <vxe-col>
        <div class="mybg">内容1</div>
      </vxe-col>
      <vxe-col>
        <div class="mybg">内容2</div>
      </vxe-col>
    </vxe-row>

    <vxe-row gutter="10">
      <vxe-col width="100">
        <vxe-input placeholder="自动铺满"></vxe-input>
      </vxe-col>
      <vxe-col>
        <vxe-input placeholder="默认"></vxe-input>
      </vxe-col>
      <vxe-col>
        <vxe-input placeholder="默认"></vxe-input>
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
