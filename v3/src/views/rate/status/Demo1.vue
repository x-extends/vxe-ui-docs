<template>
  <div>
    <div>
      <vxe-rate v-model="val1"></vxe-rate>
    </div>
    <div>
      <vxe-rate v-model="val2" status="primary"></vxe-rate>
    </div>
    <div>
      <vxe-rate v-model="val3" status="success"></vxe-rate>
    </div>
    <div>
      <vxe-rate v-model="val4" status="info"></vxe-rate>
    </div>
    <div>
      <vxe-rate v-model="val5" status="warning"></vxe-rate>
    </div>
    <div>
      <vxe-rate v-model="val6" status="error"></vxe-rate>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data () {
    return {
      val1: null,
      val2: 1,
      val3: 2,
      val4: 3,
      val5: 4,
      val6: 5
    }
  }
})
</script>
