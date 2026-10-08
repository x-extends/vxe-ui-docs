<template>
  <div>
    <vxe-scrollbar height="300" :loading="loading">
      <div v-for="item in myList" :key="item.id" class="my-scrollbar-item">
        <div>{{ item }}这是一段很长的内容</div>
      </div>
    </vxe-scrollbar>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

interface RowVO {
  id: number
  name: string
}

const loading = ref(false)
const myList = ref<RowVO[]>([])

let rowKey = 1000000

const loadList = (size: number) => {
  if (loading.value) {
    return
  }
  // 模拟后端接口
  loading.value = true
  setTimeout(() => {
    const dataList: RowVO[] = []
    for (let i = 0; i < size; i++) {
      rowKey++
      dataList.push({
        id: rowKey,
        name: 'Test' + rowKey
      })
    }
    myList.value = [...myList.value, ...dataList]
    loading.value = false
  }, 3000)
}

loadList(20)
</script>

<style lang="scss" scoped>
.my-scrollbar-item {
  margin: 10px 0;
  line-height: 30px;
}
</style>
