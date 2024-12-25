<template>
  <div>
    <vxe-calendar v-model="val" v-on="calendarEvents"></vxe-calendar>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { VxeCalendarListeners } from 'vxe-pc-ui'

const val = ref('')

const calendarEvents: VxeCalendarListeners = {
  change ({ value }) {
    console.log('change', value)
  },
  viewChange ({ viewType }) {
    console.log('view-change', viewType)
  }
}
</script>
