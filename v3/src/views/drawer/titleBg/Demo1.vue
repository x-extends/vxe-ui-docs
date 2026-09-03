<template>
  <div>
    <vxe-button content="点击弹出" @click="showPopup = true"></vxe-button>
    <vxe-drawer v-model="showPopup" :show-title-background="isTitleBg">
      <template #default>
        <div>是否显示标题背景<vxe-switch v-model="isTitleBg"></vxe-switch></div>
      </template>
    </vxe-drawer>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data () {
    return {
      showPopup: false,
      isTitleBg: true
    }
  }
})
</script>
