<template>
  <div>
    <vxe-button content="左侧打开" @click="showDrawer1 = true"></vxe-button>
    <vxe-drawer v-model="showDrawer1" position="left" resize>
      <template #default>
        <div>右侧边缘点击拖拽调整宽度</div>
      </template>
    </vxe-drawer>

    <vxe-button content="右侧打开" @click="showDrawer2 = true"></vxe-button>
    <vxe-drawer v-model="showDrawer2" position="right" resize>
      <template #default>
        <div>左侧边缘点击拖拽调整宽度</div>
      </template>
    </vxe-drawer>

    <vxe-button content="顶部打开" @click="showDrawer3 = true"></vxe-button>
    <vxe-drawer v-model="showDrawer3" position="top" resize>
      <template #default>
        <div>底部边缘点击拖拽调整宽度</div>
      </template>
    </vxe-drawer>

    <vxe-button content="底部打开" @click="showDrawer4 = true"></vxe-button>
    <vxe-drawer v-model="showDrawer4" position="bottom" resize>
      <template #default>
        <div>顶部边缘点击拖拽调整宽度</div>
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
