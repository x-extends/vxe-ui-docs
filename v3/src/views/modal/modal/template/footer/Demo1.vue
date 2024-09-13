<template>
  <div>
    <vxe-modal v-model="showPopup" title="标题" :width="600" :height="400" show-footer>
      <template #title>
        <div style="background: turquoise">标题</div>
      </template>
      <template #default>
        <div style="height:1600px;background: beige">内容区</div>
      </template>
      <template #footer>
        <div style="background: burlywood">底部区</div>
      </template>
    </vxe-modal>
    <vxe-button content="自定义插槽模板" @click="openEvent"></vxe-button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data () {
    return {
      showPopup: false
    }
  },
  methods: {
    openEvent () {
      this.showPopup = true
    }
  }
})
</script>
