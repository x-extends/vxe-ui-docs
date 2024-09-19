<template>
  <div>
    <vxe-select v-model="val1" placeholder="禁用选项" :options="opts1"></vxe-select>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data () {
    const opts1 = [
      { label: '1111', value: '1', disabled: true },
      { label: '2222', value: '2', disabled: false },
      { label: '3333', value: '3', disabled: false },
      { label: '4444', value: '4', disabled: false },
      { label: '5555', value: '5', disabled: true },
      { label: '6666', value: '6', disabled: true },
      { label: '7777', value: '7', disabled: false },
      { label: '8888', value: '8', disabled: false },
      { label: '9999', value: '9', disabled: false },
      { label: '1010', value: '10', disabled: false },
      { label: '1111', value: '11', disabled: false }
    ]

    return {
      val1: null,
      opts1
    }
  }
})
</script>
