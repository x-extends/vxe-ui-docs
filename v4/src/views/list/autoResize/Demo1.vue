<template>
  <div>
    <vxe-button @click="height = 200">设置200</vxe-button>
    <vxe-button @click="height = 400">设置400</vxe-button>
    <vxe-button @click="height = 600">设置600</vxe-button>
    <vxe-list :height="height" class="my-list" :loading="loading" :data="list" :virtual-y-config="{enabled: true}" auto-resize>
      <template #default="{ items }">
        <div class="my-list-item" v-for="(item, index) in items" :key="index">
          <span>自定义内容 {{ item.label }}</span>
        </div>
      </template>
    </vxe-list>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'

interface ItemVO {
  id: number
  label: string
}

const loading = ref(false)
const list = ref<ItemVO[]>([])
const height = ref(200)

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

const loadList = async (size: number) => {
  loading.value = true
  list.value = await getList(size)
  loading.value = false
}

onMounted(() => {
  loadList(500)
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
