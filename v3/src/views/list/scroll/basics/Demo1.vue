<template>
  <div>
    <p>
      <vxe-button @click="loadList(10)">加载10条</vxe-button>
      <vxe-button @click="loadList(500)">加载500条</vxe-button>
      <vxe-button @click="loadList(10000)">加载1w条</vxe-button>
      <vxe-button @click="loadList(100000)">加载10w条</vxe-button>
      <vxe-button @click="loadList(250000)">加载25w条</vxe-button>
    </p>

    <vxe-list v-bind="listOptions"></vxe-list>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { VxeUI, VxeListProps } from 'vxe-pc-ui'

interface RowVO {
  id: number
  label: string
}

// 模拟后台
const mockList: RowVO[] = []
const getList = (size: number) => {
  return new Promise<RowVO[]>(resolve => {
    setTimeout(() => {
      if (size > mockList.length) {
        for (let i = mockList.length; i < size; i++) {
          mockList.push({
            id: i,
            label: `row_${i}`
          })
        }
      }
      resolve(mockList.slice(0, size))
    }, 100)
  })
}

export default Vue.extend({
  data () {
    const listOptions: VxeListProps<RowVO> = {
      height: 400,
      loading: false,
      rowConfig: {
        contentField: 'label'
      },
      virtualYConfig: {
        enabled: true,
        gt: 0
      },
      data: []
    }

    return {
      listOptions
    }
  },
  created () {
    this.loadList(200)
  },
  methods: {
    async loadList (size: number) {
      this.listOptions.loading = true
      this.listOptions.data = await getList(size)
      this.listOptions.loading = false
      const startTime = Date.now()
      await this.$nextTick()
      await VxeUI.modal.message({
        content: `渲染 ${size} 行，用时 ${Date.now() - startTime}毫秒`,
        status: 'info'
      })
    }
  }
})
</script>
