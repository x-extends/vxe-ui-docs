<template>
  <div>
    <vxe-split v-bind="splitOptions">
      <template #leftContent>
        <div style="background-color: #f3e1e1;">左侧</div>
      </template>
      <template #rightContent>
        <div style="background-color: #d8d8f9;">右侧</div>
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
      items: [
        { slots: { default: 'leftContent' } },
        { slots: { default: 'rightContent' } }
      ]
    }

    return {
      splitOptions
    }
  }
})
</script>
