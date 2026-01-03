<template>
  <div>
    <vxe-segmented v-model="val1" :options="optList"></vxe-segmented>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data () {
    const val1 = '1'
    const optList = [
      { label: '选项1', value: '1', icon: 'vxe-icon-home' },
      { label: '选项2', value: '2', icon: 'vxe-icon-bell-fill' },
      { label: '选项3', value: '3', icon: 'vxe-icon-chat-fill' },
      { label: '选项4', value: '4', icon: 'vxe-icon-cloud-upload' },
      { label: '选项5', value: '5', icon: 'vxe-icon-envelope-fill' },
      { label: '选项6', value: '6', icon: 'vxe-icon-flag-fill' },
      { label: '选项7', value: '7', icon: 'vxe-icon-location-fill' }
    ]

    return {
      val1,
      optList
    }
  }
})
</script>
