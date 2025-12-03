<template>
  <div>
    <vxe-checkbox-group v-model="valGroup1" :options="btnOptions"></vxe-checkbox-group>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data () {
    const valGroup1: string[] = []

    const btnOptions = [
      { value: '1', label: '按钮1' },
      { value: '2', label: '按钮2' },
      { value: '3', label: '按钮3' },
      { value: '4', label: '按钮4' }
    ]

    return {
      valGroup1,
      btnOptions
    }
  }
})
</script>
