<template>
  <div>
    <vxe-checkbox-group v-model="val1">
      <vxe-checkbox-button label="1" content="按钮1"></vxe-checkbox-button>
      <vxe-checkbox-button label="2" content="按钮2"></vxe-checkbox-button>
      <vxe-checkbox-button label="3" content="按钮3"></vxe-checkbox-button>
    </vxe-checkbox-group>
    <vxe-checkbox-group v-model="val2" size="medium">
      <vxe-checkbox-button label="1" content="按钮1"></vxe-checkbox-button>
      <vxe-checkbox-button label="2" content="按钮2"></vxe-checkbox-button>
      <vxe-checkbox-button label="3" content="按钮3"></vxe-checkbox-button>
    </vxe-checkbox-group>
    <vxe-checkbox-group v-model="val3" size="small">
      <vxe-checkbox-button label="1" content="按钮1"></vxe-checkbox-button>
      <vxe-checkbox-button label="2" content="按钮2"></vxe-checkbox-button>
      <vxe-checkbox-button label="3" content="按钮3"></vxe-checkbox-button>
    </vxe-checkbox-group>
    <vxe-checkbox-group v-model="val4" size="mini">
      <vxe-checkbox-button label="1" content="按钮1"></vxe-checkbox-button>
      <vxe-checkbox-button label="2" content="按钮2"></vxe-checkbox-button>
      <vxe-checkbox-button label="3" content="按钮3"></vxe-checkbox-button>
    </vxe-checkbox-group>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data () {
    return {
      val1: [],
      val2: ['2'],
      val3: [],
      val4: ['1']
    }
  }
})
</script>
