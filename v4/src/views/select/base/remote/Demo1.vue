<template>
  <div>
    <vxe-select v-model="val1" placeholder="可搜索" :remote-config="remoteConfig" clearable filterable remote>
      <vxe-option v-for="item in opts1" :key="item.value" :value="item.value" :label="item.label"></vxe-option>
    </vxe-select>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { VxeSelectPropTypes } from 'vxe-pc-ui'
import XEUtils from 'xe-utils'

const val1 = ref()
const opts1 = ref<VxeSelectPropTypes.Options>([])

let idKey = 1

const remoteConfig: VxeSelectPropTypes.RemoteConfig = {
  queryMethod: ({ searchValue }) => {
    return new Promise(resolve => {
      setTimeout(() => {
        const list = XEUtils.range(0, XEUtils.random(1, 10)).map(() => {
          return {
            value: idKey++,
            label: `选项${idKey}_${searchValue}`
          }
        })
        opts1.value = list
        resolve()
      }, 200)
    })
  }
}
</script>
