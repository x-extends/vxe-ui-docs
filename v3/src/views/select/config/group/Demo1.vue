<template>
  <div>
    <vxe-select v-model="val1" placeholder="分组配置式" :option-groups="opts1"></vxe-select>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data () {
    const opts1 = [
      {
        label: '组1',
        options: [
          { label: '1-1', value: '11' },
          { label: '1-2', value: '10' }
        ]
      },
      {
        label: '组2',
        options: [
          { label: '2-1', value: '21' },
          { label: '2-2', value: '22' }
        ]
      }
    ]

    return {
      val1: null,
      opts1
    }
  }
})
</script>
