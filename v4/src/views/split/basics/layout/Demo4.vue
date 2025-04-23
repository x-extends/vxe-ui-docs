<template>
  <div>
    <vxe-split height="300" border vertical>
      <vxe-split-pane>
        <vxe-split border>
          <vxe-split-pane width="100">
            <div style="height: 100%;background-color: #f3e1e1;">左侧</div>
          </vxe-split-pane>
          <vxe-split-pane>
            <div style="height: 100%;background-color: #e2f9d8;">中</div>
          </vxe-split-pane>
          <vxe-split-pane width="140">
            <div style="height: 100%;background-color: #d8d8f9;">右侧</div>
          </vxe-split-pane>
        </vxe-split>
      </vxe-split-pane>
      <vxe-split-pane height="100">
        <div style="height: 100%;background-color: #f3d0ec;">底部</div>
      </vxe-split-pane>
    </vxe-split>
  </div>
</template>

<script lang="ts" setup>
</script>
