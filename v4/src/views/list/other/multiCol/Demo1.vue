<template>
  <div>
    <div>
      <vxe-button @click="loadList(200, 2)">2格</vxe-button>
      <vxe-button @click="loadList(200, 3)">3格</vxe-button>
      <vxe-button @click="loadList(200, 4)">4格</vxe-button>
      <vxe-button @click="loadList(200, 5)">5格</vxe-button>
    </div>

    <vxe-list class="my-list" v-bind="listOptions">
      <template #default="{ items }">
        <div class="my-list-wrapper" :class="`col-${chunkSize}`">
          <div v-for="(row, i) in items" :key="i" class="my-list-item">
            <div v-for="(item, j) in row.colList" :key="j" class="my-list-img">
              <vxe-image :src="item.imgUrl" height="100%" width="100%"></vxe-image>
            </div>
          </div>
        </div>
      </template>
    </vxe-list>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'
import { VxeListProps } from 'vxe-pc-ui'
import XEUtils from 'xe-utils'

interface ImgVO {
  id: number
  imgUrl: string
}

interface RowVO {
  colList: ImgVO[]
}

const chunkSize = ref(3)

const listOptions = reactive<VxeListProps<RowVO>>({
  height: 600,
  loading: false,
  virtualYConfig: {
    enabled: true,
    gt: 0
  },
  data: []
})

const loadList = (nSize: number = 3, cSize = 3) => {
  chunkSize.value = cSize
  listOptions.loading = true
  setTimeout(() => {
    const mockList: ImgVO[] = []
    for (let i = 0; i < nSize; i++) {
      mockList.push({
        id: i,
        imgUrl: i % 5 ? 'https://vxeui.com/resource/avatarImg/avatar3.jpeg' : i % 3 ? 'https://vxeui.com/resource/avatarImg/avatar4.jpeg' : 'https://vxeui.com/resource/avatarImg/avatar13.jpeg'
      })
    }
    listOptions.data = XEUtils.chunk(mockList, chunkSize.value).map(list => {
      return {
        colList: list
      }
    })
    listOptions.loading = false
  }, 200)
}

loadList(200)
</script>

<style lang="scss" scoped>
.my-list-wrapper {
  &.col-2 {
    .my-list-img {
      width: 50%;
    }
  }
  &.col-3 {
    .my-list-img {
      width: 33.33%;
    }
  }
  &.col-4 {
    .my-list-img {
      width: 25%;
    }
  }
  &.col-5 {
    .my-list-img {
      width: 20%;
    }
  }
}
.my-list-item {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.my-list-img {
  padding: 10px;
}
</style>
