<template>
  <div>
    <vxe-select v-model="val1" v-bind="selectOptions"></vxe-select>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { VxeSelectProps } from 'vxe-pc-ui'
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
    const selectOptions: VxeSelectProps = {
      clearable: true,
      filterable: true,
      remote: true,
      placeholder: '远程搜索',
      options: [],
      remoteConfig: {
        async queryMethod ({ searchValue }) {
          const list = await getApiList({ searchValue })
          selectOptions.options = list
        }
      }
    }

    return {
      val1: null,
      selectOptions
    }
  }
})
</script>
