<template>
  <div>
    <vxe-split v-bind="splitOptions">
      <template #leftContent>
        <div style="height: 600px;background-color: #f3e1e1;">左侧</div>
      </template>
      <template #rightContent>
        <div style="height: 400px;background-color: #d8d8f9;">右侧</div>
      </template>
    </vxe-split>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { VxeSplitProps } from 'vxe-pc-ui'

export default Vue.extend({
  data () {
    const splitOptions: VxeSplitProps = {
      height: 300,
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
