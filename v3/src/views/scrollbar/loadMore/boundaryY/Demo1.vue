<template>
  <div>
    <vxe-scrollbar height="300" :loading="loading" :y-config="yConfig" @scroll-boundary="scrollBoundaryEvent">
      <div v-for="item in myList" :key="item.id" class="my-scrollbar-item">
        <div>{{ item.name }} 这是一段很长的内容这是一段很长的内容这是一段很长的内容这是一段很长的内容这是一段很长的内容这是一段很长的内容这是一段很长的内容这是一段很长的内容这是一段很长的内容这是一段很长的内容这是一段很长的内容这是一段很长的内容这是一段很长的内容这是一段很长的内容这是一段很长的内容这是一段很长的内容这是一段很长的内容这是一段很长的内容这是一段很长的内容这是一段很长的内容这是一段很长的内容这是一段很长的内容这是一段很长的内容这是一段很长的内容这是一段很长的内容这是一段很长的内容这是一段很长的内容这是一段很长的内容这是一段很长的内容这是一段很长的内容这是一段很长的内容这是一段很长的内容这是一段很长的内容这是一段很长的内容这是一段很长的内容这是一段很长的内容这是一段很长的内容这是一段很长的内容这是一段很长的内容这是一段很长的内容这是一段很长的内容这是一段很长的内容这是一段很长的内容这是一段很长的内容这是一段很长的内容这是一段很长的内容这是一段很长的内容</div>
      </div>
    </vxe-scrollbar>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { VxeScrollbarPropTypes, VxeScrollbarDefines } from 'vxe-pc-ui'

interface RowVO {
  id: number
  name: string
}

let rowKey = 1000000

export default Vue.extend({
  data () {
    const loading = false
    const myList: RowVO[] = []

    const yConfig: VxeScrollbarPropTypes.YConfig = {
      threshold: 40
    }

    return {
      yConfig,
      loading,
      myList
    }
  },
  created () {
    this.loadList(20)
  },
  methods: {
    loadList (size: number) {
      if (this.loading) {
        return
      }
      // 模拟后端接口
      this.loading = true
      setTimeout(() => {
        const dataList: RowVO[] = []
        for (let i = 0; i < size; i++) {
          rowKey++
          dataList.push({
            id: rowKey,
            name: 'Test' + rowKey
          })
        }
        this.myList = [...this.myList, ...dataList]
        this.loading = false
      }, 300)
    },
    scrollBoundaryEvent (eventParams: VxeScrollbarDefines.ScrollEventParams) {
      console.log(`direction：${eventParams.direction} isTop：${eventParams.isTop} isBottom：${eventParams.isBottom} isLeft：${eventParams.isLeft} isRight：${eventParams.isRight}`)
      switch (eventParams.direction) {
        case 'top':
          console.log('触发顶部阈值范围')
          break
        case 'bottom':
          console.log('触发底部阈值范围')
          this.loadList(20)
          break
        case 'left':
          console.log('触发左侧阈值范围')
          break
        case 'right':
          console.log('触发右侧阈值范围')
          break
      }
    }
  }
})
</script>

<style lang="scss" scoped>
.my-scrollbar-item {
  margin: 10px 0;
  line-height: 30px;
  width: 6000px;
}
</style>
