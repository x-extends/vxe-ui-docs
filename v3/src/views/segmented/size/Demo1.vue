<template>
  <div>
    <p>
      <vxe-segmented v-model="val1" :options="optList"></vxe-segmented>
    </p>
    <p>
      <vxe-segmented v-model="val2" :options="optList" size="medium"></vxe-segmented>
    </p>
    <p>
      <vxe-segmented v-model="val3" :options="optList" size="small"></vxe-segmented>
    </p>
    <p>
      <vxe-segmented v-model="val4" :options="optList" size="mini"></vxe-segmented>
    </p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data () {
    const val1 = '1'
    const val2 = '2'
    const val3 = '3'
    const val4 = '4'

    const optList = [
      { label: '选项1', value: '1' },
      { label: '选项2', value: '2' },
      { label: '选项3', value: '3' },
      { label: '选项4', value: '4' },
      { label: '选项5', value: '5' },
      { label: '选项6', value: '6' },
      { label: '选项7', value: '7' }
    ]

    return {
      val1,
      val2,
      val3,
      val4,
      optList
    }
  }
})
</script>
