<template>
  <div>
    <vxe-split height="300" border vertical>
      <vxe-split-item>
        <div style="height: 100%;background-color: #d8d8f9;">顶部</div>
      </vxe-split-item>
      <vxe-split-item>
        <vxe-split border>
          <vxe-split-item>
            <div style="height: 100%;background-color: #f3e1e1;">左侧</div>
          </vxe-split-item>
          <vxe-split-item>
            <div style="height: 100%;background-color: #d8d8f9;">右侧</div>
          </vxe-split-item>
        </vxe-split>
      </vxe-split-item>
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
