<template>
  <div>
    <vxe-select v-model="val1" placeholder="远程搜索" :options="opts1" :remote-config="remoteConfig" clearable filterable remote></vxe-select>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { VxeSelectPropTypes } from 'vxe-pc-ui'
import XEUtils from 'xe-utils'

export default Vue.extend({
  data () {
    const opts1: VxeSelectPropTypes.Options = []

    const remoteConfig: VxeSelectPropTypes.RemoteConfig = {}

    return {
      val1: null,
      opts1,
      idKey: 1,
      remoteConfig
    }
  },
  created () {
    this.remoteConfig = {
      queryMethod: ({ searchValue }) => {
        return new Promise(resolve => {
          setTimeout(() => {
            const list = XEUtils.range(0, XEUtils.random(1, 10)).map(() => {
              return {
                value: this.idKey++,
                label: `选项${this.idKey}_${searchValue}`
              }
            })
            this.opts1 = list
            resolve()
          }, 200)
        })
      }
    }
  }
})
</script>
