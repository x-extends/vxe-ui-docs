<template>
  <div>
    <vxe-date-picker v-model="val1" type="time" placeholder="默认尺寸"></vxe-date-picker>
    <vxe-date-picker v-model="val2" type="time" placeholder="中等尺寸" size="medium"></vxe-date-picker>
    <vxe-date-picker v-model="val3" type="time" placeholder="小型尺寸" size="small"></vxe-date-picker>
    <vxe-date-picker v-model="val4" type="time" placeholder="超小尺寸" size="mini"></vxe-date-picker>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data () {
    return {
      val1: '',
      val2: '',
      val3: '',
      val4: ''
    }
  }
})
</script>
