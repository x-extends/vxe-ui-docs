<template>
  <div>
    <vxe-splitter>
      <vxe-splitter-panel>
        <template #default>
          <div style="background-color: #f3e1e1;">左侧</div>
        </template>
      </vxe-splitter-panel>
      <vxe-splitter-panel>
        <template #default>
          <div style="background-color: #d8d8f9;">右侧</div>
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
