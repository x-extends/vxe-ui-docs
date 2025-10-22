<template>
  <div>
    <vxe-split height="300">
      <vxe-split-pane>
        <template #default>
          <div style="height: 600px;background-color: #f3e1e1;">左侧</div>
        </template>
      </vxe-split-pane>
      <vxe-split-pane>
        <template #default>
          <div style="height: 400px;background-color: #d8d8f9;">右侧</div>
        </template>
      </vxe-split-pane>
    </vxe-split>
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
