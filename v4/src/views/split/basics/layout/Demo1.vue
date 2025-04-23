<template>
  <div>
    <vxe-split height="300" border>
      <vxe-split-pane>
        <vxe-split border vertical>
          <vxe-split-pane height="100">
            <div style="height: 100%;background-color: #f3e1e1;">顶部</div>
          </vxe-split-pane>
          <vxe-split-pane>
            <div style="height: 100%;background-color: #d8d8f9;">底部</div>
          </vxe-split-pane>
        </vxe-split>
      </vxe-split-pane>
      <vxe-split-pane width="200">
        <div style="height: 100%;background-color: #f3d0ec;">右侧</div>
      </vxe-split-pane>
    </vxe-split>
  </div>
</template>

<script lang="ts" setup>
</script>
