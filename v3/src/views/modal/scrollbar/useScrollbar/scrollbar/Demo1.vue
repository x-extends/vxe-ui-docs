<template>
  <div>
    <vxe-button content="点击弹出" @click="showPopup = true"></vxe-button>
    <vxe-modal v-model="showPopup" :width="600" :height="400" resize use-scrollbar>
      <template #default>
        <div style="width: 1000px;height: 300px;">内容11111内容11111内容11111内容11111内容11111内容11111内容11111内容11111</div>
        <div style="width: 1000px;height: 300px;">内容11111内容11111内容11111内容11111内容11111内容11111内容11111内容11111</div>
        <div style="width: 1000px;height: 300px;">内容11111内容11111内容11111内容11111内容11111内容11111内容11111内容11111</div>
        <div style="width: 1000px;height: 300px;">内容11111内容11111内容11111内容11111内容11111内容11111内容11111内容11111</div>
        <div style="width: 1000px;height: 300px;">内容11111内容11111内容11111内容11111内容11111内容11111内容11111内容11111</div>
        <div style="width: 1000px;height: 300px;">内容11111内容11111内容11111内容11111内容11111内容11111内容11111内容11111</div>
        <div style="width: 1000px;height: 300px;">内容11111内容11111内容11111内容11111内容11111内容11111内容11111内容11111</div>
        <div style="width: 1000px;height: 300px;">内容11111内容11111内容11111内容11111内容11111内容11111内容11111内容11111</div>
      </template>
    </vxe-modal>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data () {
    return {
      showPopup: false
    }
  }
})
</script>
