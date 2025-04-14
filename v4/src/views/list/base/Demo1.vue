<template>
  <div>
    <p>
      <vxe-button @click="loadData(10)">加载10条</vxe-button>
      <vxe-button @click="loadData(500)">加载500条</vxe-button>
      <vxe-button @click="loadData(10000)">加载1w条</vxe-button>
      <vxe-button @click="loadData(100000)">加载10w条</vxe-button>
      <vxe-button @click="loadData(250000)">加载25w条</vxe-button>
    </p>

    <vxe-list height="600" class="my-list" :loading="loading" :data="list" :virtual-y-config="{enabled: true}">
      <template #default="{ items }">
        <div class="my-list-item" v-for="(item, index) in items" :key="index">
          <span>自定义内容 {{ item.label }}</span>
        </div>
      </template>
    </vxe-list>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, nextTick } from 'vue'
import { VxeUI } from 'vxe-pc-ui'

interface ItemVO {
  id: number
  label: string
}

const loading = ref(false)
const list = ref<ItemVO[]>([])

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

const loadData = async (size: number) => {
  loading.value = true
  list.value = await getList(size)
  loading.value = false
  const startTime = Date.now()
  await nextTick()
  await VxeUI.modal.message({
    content: `渲染 ${size} 行，用时 ${Date.now() - startTime}毫秒`,
    status: 'info'
  })
}

onMounted(async () => {
  loadData(200)
})
</script>

<style lang="scss" scoped>
.my-list {
  border: 1px solid #e8eaec;
}
.my-list .my-list-item {
  height: 28px;
  padding-left: 15px;
}
</style>
