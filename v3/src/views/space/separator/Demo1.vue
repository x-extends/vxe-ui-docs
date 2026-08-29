<template>
  <div>
    <vxe-switch v-model="isVertical"></vxe-switch>

    <vxe-space separator="🔥" :vertical="isVertical">
      <vxe-button>按钮1</vxe-button>
      <vxe-button>按钮2</vxe-button>
      <vxe-button>按钮3</vxe-button>
    </vxe-space>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data () {
    return {
      isVertical: false
    }
  }
})
</script>
