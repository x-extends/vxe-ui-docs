<template>
  <div>
    <vxe-button content="左侧打开" @click="showDrawer1 = true"></vxe-button>
    <vxe-drawer v-model="showDrawer1" position="left">
      <template #default>
        <div>内容1</div>
      </template>
    </vxe-drawer>

    <vxe-button content="右侧打开" @click="showDrawer2 = true"></vxe-button>
    <vxe-drawer v-model="showDrawer2" position="right">
      <template #default>
        <div>内容1</div>
      </template>
    </vxe-drawer>

    <vxe-button content="顶部打开" @click="showDrawer3 = true"></vxe-button>
    <vxe-drawer v-model="showDrawer3" position="top">
      <template #default>
        <div>内容1</div>
      </template>
    </vxe-drawer>

    <vxe-button content="底部打开" @click="showDrawer4 = true"></vxe-button>
    <vxe-drawer v-model="showDrawer4" position="bottom">
      <template #default>
        <div>内容1</div>
      </template>
    </vxe-drawer>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data () {
    return {
      showDrawer1: false,
      showDrawer2: false,
      showDrawer3: false,
      showDrawer4: false
    }
  }
})
</script>
