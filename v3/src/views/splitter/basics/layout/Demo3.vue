<template>
  <div>
    <vxe-splitter height="300" border vertical>
      <vxe-splitter-panel height="100">
        <template #default>
          <div style="height: 100%;background-color: #f3d0ec;">顶部</div>
        </template>
      </vxe-splitter-panel>
      <vxe-splitter-panel>
        <vxe-splitter border>
          <vxe-splitter-panel width="100">
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
      </vxe-splitter-panel>
    </vxe-splitter>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data () {
    return {
    }
  }
})
</script>
