<template>
  <div>
    <div>
      <vxe-switch v-model="isReadonly"></vxe-switch>
    </div>

    <vxe-number-input v-model="val1" placeholder="设置四舍五入" type="float" digits="2" rounding-mode="round" :readonly="isReadonly"></vxe-number-input>
    <br>
    <vxe-number-input v-model="val2" type="float" digits="2" rounding-mode="round" :readonly="isReadonly"></vxe-number-input>
    <br>
    <vxe-number-input v-model="val3" type="float" digits="2" rounding-mode="round" :readonly="isReadonly"></vxe-number-input>
    <br>
    <vxe-number-input v-model="val4" type="float" digits="2" rounding-mode="round" :readonly="isReadonly"></vxe-number-input>
    <br>
    <vxe-number-input v-model="val5" type="float" digits="2" rounding-mode="round" :readonly="isReadonly"></vxe-number-input>
    <br>
    <vxe-number-input v-model="val6" type="float" digits="2" rounding-mode="round" :readonly="isReadonly"></vxe-number-input>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data () {
    const isReadonly = false

    return {
      isReadonly,
      val1: 3.154,
      val2: 3.155,
      val3: 3.156,
      val4: -3.154,
      val5: -3.155,
      val6: -3.156
    }
  }
})
</script>
