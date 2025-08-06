<template>
  <div>
    <p>
      <vxe-button @click="loadList(1000)">加载1k条</vxe-button>
      <vxe-button @click="loadList(10000)">加载1w条</vxe-button>
      <vxe-button @click="loadList(100000)">加载10w条</vxe-button>
      <vxe-button @click="loadList(300000)">加载30w条</vxe-button>
      <vxe-button @click="loadList(500000)">加载50w条</vxe-button>
    </p>
    <vxe-select ref="selectRef" v-model="val1" v-bind="selectOptions"></vxe-select>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { VxeUI, VxeSelectProps, VxeSelectInstance } from 'vxe-pc-ui'

interface OptVO {
  value: string
  label: string
}

export default Vue.extend({
  data () {
    const selectOptions: VxeSelectProps = {
      loading: false,
      clearable: true,
      filterable: true
    }

    return {
      val1: null,
      selectOptions
    }
  },
  methods: {
    loadList (size: number) {
      const list: OptVO[] = []
      this.selectOptions.loading = true
      for (let i = 0; i < size; i++) {
        list.push({
          value: `${i}`,
          label: `选项 ${i}`
        })
      }
      setTimeout(() => {
        const $select = this.$refs.selectRef as VxeSelectInstance
        if ($select) {
          const startTime = Date.now()
          $select.reloadData(list).then(() => {
            VxeUI.modal.message({
              content: `加载时间 ${Date.now() - startTime} 毫秒`,
              status: 'success'
            })
          })
        }
        this.selectOptions.loading = false
      }, 300)
    }
  },
  created () {
    this.loadList(50)
  }
})
</script>
