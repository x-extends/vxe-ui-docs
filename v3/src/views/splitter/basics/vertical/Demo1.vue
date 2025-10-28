<template>
  <div>
    <vxe-splitter height="300" border vertical>
      <vxe-splitter-panel>
        <template #default>
          <div style="height: 200px;background-color: #f3e1e1;">顶部</div>
        </template>
      </vxe-splitter-panel>
      <vxe-splitter-panel>
        <template #default>
          <div style="height: 400px;background-color: #d8d8f9;">底部</div>
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
