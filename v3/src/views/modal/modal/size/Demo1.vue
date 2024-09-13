<template>
  <div>
    <vxe-button content="默认尺寸" @click="val1 = true"></vxe-button>
      <vxe-modal v-model="val1" :width="600" :height="400" show-footer show-confirm-button>
        <template #default>
          <div>默认尺寸</div>
        </template>
      </vxe-modal>

      <vxe-button content="中等尺寸" @click="val2 = true" size="medium"></vxe-button>
      <vxe-modal v-model="val2" :width="600" :height="400" size="medium" show-footer show-confirm-button>
        <template #default>
          <div>中等尺寸</div>
        </template>
      </vxe-modal>

      <vxe-button content="小型尺寸" @click="val3 = true" size="small"></vxe-button>
      <vxe-modal v-model="val3" :width="600" :height="400" size="small" show-footer show-confirm-button>
        <template #default>
          <div>小型尺寸</div>
        </template>
      </vxe-modal>

      <vxe-button content="超小尺寸" @click="val4 = true" size="mini"></vxe-button>
      <vxe-modal v-model="val4" :width="600" :height="400" size="mini" show-footer show-confirm-button>
        <template #default>
          <div>超小尺寸</div>
        </template>
      </vxe-modal>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data () {
    return {
      val1: false,
      val2: false,
      val3: false,
      val4: false
    }
  }
})
</script>
