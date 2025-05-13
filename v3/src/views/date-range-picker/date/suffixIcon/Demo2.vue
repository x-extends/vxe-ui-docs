<template>
  <div>
    <vxe-date-range-picker :start-value.sync="startDate" :end-value.sync="endDate" clearable>
      <template #suffix>
        <vxe-icon name="lock-fill" status="error"></vxe-icon>
      </template>
    </vxe-date-range-picker>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data () {
    return {
      startDate: '',
      endDate: ''
    }
  }
})
</script>
