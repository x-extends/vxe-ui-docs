<template>
  <div>
    <div>
      <vxe-radio-group v-model="align">
        <vxe-radio-button label="left" content="居左"></vxe-radio-button>
        <vxe-radio-button label="center" content="居中"></vxe-radio-button>
        <vxe-radio-button label="right" content="居右"></vxe-radio-button>
      </vxe-radio-group>
    </div>

    <vxe-number-input v-model="val1" type="amount" :align="align"></vxe-number-input>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data () {
    return {
      val1: 123,
      align: 'left'
    }
  }
})
</script>
