<template>
  <div>
    <vxe-button @click="height = 200">设置200</vxe-button>
    <vxe-button @click="height = 400">设置400</vxe-button>
    <vxe-button @click="height = 600">设置600</vxe-button>
    <div class="list-wrapper" :class="`h-${height}`">
      <vxe-list height="100%" class="my-list" :loading="loading" :data="list" :virtual-y-config="{enabled: true}" auto-resize>
        <template #default="{ items }">
          <div class="my-list-item" v-for="(item, index) in items" :key="index">
            <span>自定义内容 {{ item.label }}</span>
          </div>
        </template>
      </vxe-list>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

interface ItemVO {
  id: number
  label: string
}

// 模拟后台
const mockList: ItemVO[] = []
const getList = (size: number) => {
  return new Promise<ItemVO[]>(resolve => {
    setTimeout(() => {
      if (size > mockList.length) {
        for (let index = mockList.length; index < size; index++) {
          mockList.push({
            id: index,
            label: `row_${index}`
          })
        }
      }
      resolve(mockList.slice(0, size))
    }, 100)
  })
}

export default Vue.extend({
  data () {
    const list: ItemVO[] = []

    return {
      loading: false,
      height: 200,
      list
    }
  },
  methods: {
    async loadData (size: number) {
      this.loading = true
      this.list = await getList(size)
      this.loading = false
    }

  },
  mounted () {
    this.loadData(200)
  }
})
</script>

<style lang="scss" scoped>
.list-wrapper {
  height: 300px;
  overflow: hidden;
  &.h-200 {
    height: 200px;
  }
  &.h-400 {
    height: 400px;
  }
  &.h-600 {
    height: 600px;
  }
}
.my-list {
  border: 1px solid #e8eaec;
}
.my-list .my-list-item {
  height: 28px;
  padding-left: 15px;
}
</style>
