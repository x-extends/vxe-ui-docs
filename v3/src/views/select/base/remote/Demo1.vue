<template>
  <div>
    <vxe-select v-model="val1" placeholder="可搜索" :remote-config="remoteConfig" clearable filterable remote>
      <vxe-option v-for="item in opts1" :key="item.value" :value="item.value" :label="item.label"></vxe-option>
    </vxe-select>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { VxeSelectPropTypes } from 'vxe-pc-ui'
import XEUtils from 'xe-utils'

// 模拟后端接口
const getApiList = (quert: any) => {
  let idKey = 1
  return new Promise<{
    value: number
    label: string
  }[]>(resolve => {
    setTimeout(() => {
      const list = XEUtils.range(0, XEUtils.random(1, 10)).map(() => {
        return {
          value: idKey++,
          label: `选项${idKey}_${quert.searchValue}`
        }
      })
      resolve(list)
    }, 200)
  })
}

export default Vue.extend({
  data () {
    const opts1: VxeSelectPropTypes.Options = []

    const remoteConfig: VxeSelectPropTypes.RemoteConfig = {}

    return {
      val1: null,
      opts1,
      remoteConfig
    }
  },
  created () {
    this.remoteConfig = {
      queryMethod: async ({ searchValue }) => {
        const list = await getApiList({ searchValue })
        this.opts1 = list
      }
    }
  }
})
</script>
