<template>
  <div>
    <vxe-split height="300" border>
      <vxe-split-pane width="200">
        <template #default>
          <div style="height: 100%;background-color: #f3d0ec;">左侧</div>
        </template>
      </vxe-split-pane>
      <vxe-split-pane>
        <vxe-split border vertical>
          <vxe-split-pane height="100">
            <template #default>
              <div style="height: 100%;background-color: #f3e1e1;">顶部</div>
            </template>
          </vxe-split-pane>
          <vxe-split-pane>
            <template #default>
              <div style="height: 100%;background-color: #e2f9d8;">中</div>
            </template>
          </vxe-split-pane>
          <vxe-split-pane height="140">
            <template #default>
              <div style="height: 100%;background-color: #d8d8f9;">底部</div>
            </template>
          </vxe-split-pane>
        </vxe-split>
      </vxe-split-pane>
    </vxe-split>
  </div>
</template>

<script lang="ts" setup>
</script>
