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

// 模拟后端接口
const getApiList = (quert: any) => {
  const allList = [
    { value: 1001, label: 'table' },
    { value: 1002, label: 'grid' },
    { value: 1003, label: 'button' },
    { value: 1004, label: 'toolbar' },
    { value: 1005, label: 'tooltip' },
    { value: 1006, label: 'pager' },
    { value: 1007, label: 'print' },
    { value: 1008, label: 'export' },
    { value: 1009, label: 'import' },
    { value: 1010, label: 'select' },
    { value: 1012, label: 'checkbox' },
    { value: 1013, label: 'group' }
  ]

  return new Promise<{
    value: number
    label: string
  }[]>(resolve => {
    setTimeout(() => {
      const list = allList.filter(item => item.label.toLowerCase().indexOf(`${quert.searchValue}`.toLowerCase()) > -1)
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
