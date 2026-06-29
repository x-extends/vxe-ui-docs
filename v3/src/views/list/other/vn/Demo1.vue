<template>
  <div>
    <p>
      <vxe-button @click="loadList(10)">加载10条</vxe-button>
      <vxe-button @click="loadList(500)">加载500条</vxe-button>
      <vxe-button @click="loadList(10000)">加载1w条</vxe-button>
      <vxe-button @click="loadList(100000)">加载10w条</vxe-button>
      <vxe-button @click="loadList(250000)">加载25w条</vxe-button>
    </p>

    <vxe-list class="my-list" v-bind="listOptions">
      <template #default="{ items }">
        <div class="my-list-wrapper">
          <div class="my-list-item" v-for="(row, i) in items" :key="i">
            <div class="my-list-img">
              <vxe-image :src="row.imgUrl" width="50" circle></vxe-image>
            </div>
            <div class="my-list-describe">
              <div class="my-list-title">{{ row.label }}</div>
              <div>{{ row.describe }}</div>
            </div>
          </div>
        </div>
      </template>
    </vxe-list>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { VxeUI, VxeListProps } from 'vxe-pc-ui'

interface RowVO {
  id: number
  label: string
  describe: string
  imgUrl: string
}

export default Vue.extend({
  data () {
    const listOptions: VxeListProps<RowVO> = {
      height: 600,
      loading: false,
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
    loadList (size: number) {
      this.listOptions.loading = true
      setTimeout(() => {
        const mockList: RowVO[] = []
        for (let i = 0; i < size; i++) {
          mockList.push({
            id: i,
            label: `标题标题标题：${i}`,
            describe: `描述描述描述描述描述描述描述描述描述 ${i}`,
            imgUrl: i % 5 ? 'https://vxeui.com/resource/avatarImg/avatar7.jpeg' : i % 3 ? 'https://vxeui.com/resource/avatarImg/avatar3.jpeg' : 'https://vxeui.com/resource/avatarImg/avatar5.jpeg'
          })
        }
        this.listOptions.data = mockList
        this.listOptions.loading = false

        const startTime = Date.now()
        this.$nextTick().then(() => {
          VxeUI.modal.message({
            content: `渲染 ${size} 行，用时 ${Date.now() - startTime}毫秒`,
            status: 'info'
          })
        })
      }, 100)
    }
  }
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
