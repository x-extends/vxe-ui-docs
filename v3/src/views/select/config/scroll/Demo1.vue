<template>
  <div>
    <p>
      <vxe-button @click="loadData(1000)">加载1千条</vxe-button>
      <vxe-button @click="loadData(10000)">加载1万条</vxe-button>
      <vxe-button @click="loadData(100000)">加载10万条</vxe-button>
      <vxe-button @click="loadData(300000)">加载30万条</vxe-button>
    </p>
    <vxe-select v-model="val1" v-bind="selectOptions"></vxe-select>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { VxeUI, VxeSelectProps } from 'vxe-pc-ui'

interface OptVO {
  value: string
  label: string
}

export default Vue.extend({
  data () {
    const selectOptions: VxeSelectProps = {
      loading: false,
      clearable: true,
      filterable: true,
      options: []
    }

    return {
      val1: null,
      selectOptions
    }
  },
  methods: {
    loadData (size: number) {
      const list: OptVO[] = []
      this.selectOptions.loading = true
      for (let i = 0; i < size; i++) {
        list.push({
          value: `${i}`,
          label: `选项 ${i}`
        })
      }
      setTimeout(() => {
        const startTime = Date.now()
        this.selectOptions.options = list
        this.selectOptions.loading = false
        this.$nextTick(() => {
          VxeUI.modal.message({
            content: `加载时间 ${Date.now() - startTime} 毫秒`,
            status: 'success'
          })
        })
      }, 300)
    }
  },
  created () {
    this.loadData(50)
  }
})
</script>
