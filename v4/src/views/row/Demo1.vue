<template>
  <div>
    <div class="row-wrapper">
      <vxe-row :gutter="10">
        <vxe-col span="8">
          <div class="mybg">平分1</div>
        </vxe-col>
        <vxe-col span="8">
          <div class="mybg">平分1</div>
        </vxe-col>
        <vxe-col span="8">
          <div class="mybg">平分1</div>
        </vxe-col>
      </vxe-row>
    </div>
  </div>
</template>

<script lang="ts" setup>
</script>

<style lang="scss" scoped>
.row-wrapper {
  margin: 10px 0;
}
.mybg {
  color: #ffffff;
  background-color: #409eff;
}
</style>
