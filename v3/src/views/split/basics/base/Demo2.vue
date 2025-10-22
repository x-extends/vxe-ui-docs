<template>
  <div>
    <vxe-split>
      <vxe-split-pane width="20%">
        <template #default>
          <div style="background-color: #f3e1e1;">左</div>
        </template>
      </vxe-split-pane>
      <vxe-split-pane>
        <template #default>
          <div style="background-color: #e2f9d8;">中</div>
        </template>
      </vxe-split-pane>
      <vxe-split-pane width="30%">
        <template #default>
          <div style="background-color: #d8d8f9;">右</div>
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
