<template>
  <div>
    <vxe-input v-model="val1" placeholder="禁用日期" type="date" :disabled-method="disabledDateMethod"></vxe-input>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { VxeInputPropTypes } from 'vxe-pc-ui'

const val1 = ref('')

const disabledDateMethod: VxeInputPropTypes.DisabledMethod = (params) => {
  const { date } = params
  const dd = date.getDate()
  return dd > 15
}
</script>
