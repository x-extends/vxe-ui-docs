<template>
  <div>
    <vxe-button content="点击弹出" @click="showPopup = true"></vxe-button>
    <vxe-modal v-model="showPopup" :width="600" :height="400" :border="isBorder">
      <template #default>
        <div>是否显示边框<vxe-switch v-model="isBorder"></vxe-switch></div>
      </template>
    </vxe-modal>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data () {
    return {
      showPopup: false,
      isBorder: false
    }
  }
})
</script>
