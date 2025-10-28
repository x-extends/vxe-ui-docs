<template>
  <div>
    <vxe-splitter height="300" border resize>
      <vxe-splitter-panel>
        <vxe-splitter border vertical>
          <vxe-splitter-panel height="100">
            <template #default>
              <div style="height: 100%;background-color: #f3e1e1;">顶部</div>
            </template>
          </vxe-splitter-panel>
          <vxe-splitter-panel>
            <template #default>
              <div style="height: 100%;background-color: #d8d8f9;">底部</div>
            </template>
          </vxe-splitter-panel>
        </vxe-splitter>
      </vxe-splitter-panel>
      <vxe-splitter-panel width="200">
        <template #default>
          <div style="height: 100%;background-color: #f3d0ec;">右侧</div>
        </template>
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
