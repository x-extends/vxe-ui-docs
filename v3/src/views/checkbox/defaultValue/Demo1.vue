<template>
  <div>
    <vxe-checkbox-group v-model="val1" :options="btnOptions" :default-config="defaultConfig"></vxe-checkbox-group>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { VxeCheckboxGroupPropTypes } from 'vxe-pc-ui'

export default Vue.extend({
  data () {
    const val1: string[] | null = null

    const defaultConfig: VxeCheckboxGroupPropTypes.DefaultConfig = {
      selectMode: 'first'
    }

    const btnOptions = [
      { value: '1', label: '按钮1' },
      { value: '2', label: '按钮2' },
      { value: '3', label: '按钮3' },
      { value: '4', label: '按钮4' }
    ]

    return {
      val1,
      btnOptions,
      defaultConfig
    }
  }
})
</script>
