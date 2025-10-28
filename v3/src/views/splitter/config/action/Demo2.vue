<template>
  <div>
    <vxe-button @click="hidePanel">隐藏顶部</vxe-button>
    <vxe-button @click="showPanel">显示顶部</vxe-button>

    <vxe-split ref="splitterRef" v-bind="splitOptions">
      <template #topContent>
        <div style="height: 100%;background-color: #f3e1e1;">顶部</div>
      </template>
      <template #bottomContent>
        <div style="height: 600px;background-color: #d8d8f9;">底部</div>
      </template>
    </vxe-split>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { VxeSplitterProps, VxeSplitterInstance } from 'vxe-pc-ui'

export default Vue.extend({
  data () {
    const splitOptions: VxeSplitterProps = {
      height: 300,
      border: true,
      vertical: true,
      actionConfig: {
        showPrevButton: true,
        showNextButton: true
      },
      items: [
        { name: '1', width: 100, slots: { default: 'topContent' } },
        { name: '2', slots: { default: 'bottomContent' } }
      ]
    }

    return {
      splitOptions
    }
  },
  methods: {
    showPanel () {
      const $splitterRef = this.$refs.splitterRef as VxeSplitterInstance
      if ($splitterRef) {
        $splitterRef.setItemExpand('1', true)
      }
    },
    hidePanel () {
      const $splitterRef = this.$refs.splitterRef as VxeSplitterInstance
      if ($splitterRef) {
        $splitterRef.setItemExpand('1', false)
      }
    }
  }
})
</script>
