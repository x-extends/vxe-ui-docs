<template>
  <div>
    <vxe-button content="点击弹出" @click="showPopup = true"></vxe-button>
    <vxe-modal id="modalStore1" v-model="showPopup" title="标题1" :width="600" :height="400" show-maximize show-minimize resize storage>
      <div>记忆功能，会在首次打开恢复最后一次操作的状态</div>
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
