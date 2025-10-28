<template>
  <div>
    <vxe-split>
      <vxe-splitter-panel width="20%">
        <template #default>
          <div style="background-color: #f3e1e1;">左</div>
        </template>
      </vxe-splitter-panel>
      <vxe-splitter-panel>
        <template #default>
          <div style="background-color: #e2f9d8;">中</div>
        </template>
      </vxe-splitter-panel>
      <vxe-splitter-panel width="30%">
        <template #default>
          <div style="background-color: #d8d8f9;">右</div>
        </template>
      </vxe-splitter-panel>
    </vxe-splitter>
  </div>
</template>

<script lang="ts" setup>
</script>
