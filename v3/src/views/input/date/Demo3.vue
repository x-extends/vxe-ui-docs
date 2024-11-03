<template>
  <div>
    <vxe-input v-model="val1" placeholder="禁用日期" type="date" :disabled-method="disabledDateMethod"></vxe-input>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { VxeInputPropTypes } from 'vxe-pc-ui'

export default Vue.extend({
  data () {
    const disabledDateMethod: VxeInputPropTypes.DisabledMethod = (params) => {
      const { date } = params
      const dd = date.getDate()
      return dd > 15
    }

    return {
      val1: '',
      disabledDateMethod
    }
  }
})
</script>
