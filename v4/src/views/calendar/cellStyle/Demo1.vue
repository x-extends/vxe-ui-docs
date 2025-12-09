<template>
  <div>
    <vxe-calendar v-model="val" :cell-style="cellStyle"></vxe-calendar>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { VxeCalendarPropTypes } from 'vxe-pc-ui'

const val = ref('')

const cellStyle: VxeCalendarPropTypes.CellStyle = (params) => {
  const { date, viewType } = params
  if (viewType === 'date' || viewType === 'day') {
    if (date.getDate() === 15) {
      return {
        backgroundColor: '#cbf4d0'
      }
    }
    if (date.getDate() === 20) {
      return {
        backgroundColor: '#f4cbf3'
      }
    }
  }
}
</script>
