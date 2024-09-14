<template>
  <div>
    <p>
      <vxe-button content="点击弹出" @click="openEvent"></vxe-button>
    </p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { VxeUI } from 'vxe-pc-ui'

export default Vue.extend({
  methods: {
    openEvent  () {
      VxeUI.drawer.open({
        id: 'myUniqueAlert',
        title: '标题2',
        content: '同一时刻只会弹出一个',
        mask: false,
        lockView: false,
        width: 600
      })
    }
  }
})
</script>
