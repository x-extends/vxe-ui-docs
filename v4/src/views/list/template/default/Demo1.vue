<template>
  <div>
    <vxe-list v-bind="listOptions">
      <template #default="{ items }">
        <div class="my-list-wrapper">
          <div class="my-list-item" v-for="(row, i) in items" :key="i">
            <div class="my-list-img">
              <vxe-image :src="row.imgUrl" width="50" circle></vxe-image>
            </div>
            <div class="my-list-describe">
              <div class="my-list-title">标题： {{ row.label }}</div>
              <div>描述： {{ row.describe }}</div>
            </div>
          </div>
        </div>
      </template>
    </vxe-list>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, reactive } from 'vue'
import { VxeListProps } from 'vxe-pc-ui'

interface RowVO {
  id: number
  label: string
  describe: string
  imgUrl: string
}

const listOptions = reactive<VxeListProps>({
  height: 600,
  loading: false,
  virtualYConfig: {
    enabled: true
  },
  data: []
})

// 模拟后台
const mockList: RowVO[] = []
const getList = (size: number) => {
  return new Promise<RowVO[]>(resolve => {
    setTimeout(() => {
      if (size > mockList.length) {
        for (let i = mockList.length; i < size; i++) {
          mockList.push({
            id: i,
            label: `标题：${i}`,
            describe: `说明 ${i}`,
            imgUrl: i % 5 ? 'https://vxeui.com/resource/avatarImg/avatar11.jpeg' : i % 3 ? 'https://vxeui.com/resource/avatarImg/avatar8.jpeg' : 'https://vxeui.com/resource/avatarImg/avatar2.jpeg'
          })
        }
      }
      resolve(mockList.slice(0, size))
    }, 100)
  })
}

const loadList = async (size: number) => {
  listOptions.loading = true
  listOptions.data = await getList(size)
  listOptions.loading = false
}

onMounted(async () => {
  loadList(200)
})
</script>

<style lang="scss" scoped>
.my-list-item {
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 60px;
}
.my-list-describe {
  padding-left: 8px;
}
.my-list-title {
  font-weight: bold;
}
</style>
