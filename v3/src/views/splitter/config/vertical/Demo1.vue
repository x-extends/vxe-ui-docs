<template>
  <div>
    <vxe-split v-bind="splitOptions">
      <template #topContent>
        <div style="height: 200px;background-color: #f3e1e1;">顶部</div>
      </template>
      <template #bottomContent>
        <div style="height: 400px;background-color: #d8d8f9;">底部</div>
      </template>
    </vxe-split>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { VxeSplitterProps } from 'vxe-pc-ui'

export default Vue.extend({
  data () {
    const splitOptions: VxeSplitterProps = {
      height: 300,
      border: true,
      vertical: true,
      items: [
        { slots: { default: 'topContent' } },
        { slots: { default: 'bottomContent' } }
      ]
    }

    return {
      splitOptions
    }
  }
})
</script>
