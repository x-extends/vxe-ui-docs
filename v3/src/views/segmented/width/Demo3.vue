<template>
  <div>
    <vxe-segmented v-model="val1" :options="optList" width="100%"></vxe-segmented>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data () {
    const val1 = '1'
    const optList = [
      { label: '选项1', value: '1', width: '30%' },
      { label: '选项2', value: '2', width: '5%' },
      { label: '选项3', value: '3', width: '10%' },
      { label: '选项4', value: '4', width: '15%' },
      { label: '选项5', value: '5', width: '30%' },
      { label: '选项6', value: '6', width: '5%' },
      { label: '选项7', value: '7', width: '5%' }
    ]

    return {
      val1,
      optList
    }
  }
})
</script>
