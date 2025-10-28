<template>
  <div>
    <vxe-splitter height="300" border>
      <vxe-splitter-panel>
        <template #default>
          <div style="height: 100%;background-color: #f3e1e1;">左侧</div>
        </template>
      </vxe-splitter-panel>
      <vxe-splitter-panel>
        <template #default>
          <div style="height: 100%;background-color: #d8d8f9;">右侧</div>
        </template>
      </vxe-splitter-panel>
    </vxe-splitter>
  </div>
</template>

<script lang="ts" setup>
</script>
