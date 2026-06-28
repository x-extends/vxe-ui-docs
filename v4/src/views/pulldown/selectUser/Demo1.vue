<template>
  <div>
    <vxe-pulldown v-model="showPull" trigger="click" :options="pullOptions" show-popup-shadow>
      <template #default>
        <vxe-button mode="text">选择人员</vxe-button>
        <vxe-icon name="arrow-down"></vxe-icon>
      </template>

      <template #dropdown>
        <div class="dropdown-body-wrapper">
          <div v-for="item in pullOptions" :key="item.value" class="dropdown-body-item" @click="selectEvent(item)">
            <div class="dropdown-item-img">
              <vxe-image :src="item.imgUrl" width="40" height="40" :show-preview="false"></vxe-image>
            </div>
            <div class="dropdown-item-wrapper">
              <div class="dropdown-body-label">{{ item.label }}</div>
              <div class="dropdown-body-label">投票：{{ item.count }}</div>
            </div>
          </div>
        </div>
      </template>
    </vxe-pulldown>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { VxeUI } from 'vxe-pc-ui'

interface ItemVO {
  label: string
  value: string
  count: number
  imgUrl: string
}

const showPull = ref(false)
const pullOptions = ref<ItemVO[]>([
  { label: '小明', value: '1', count: 998, imgUrl: 'https://vxeui.com/resource/avatarImg/avatar3.jpeg' },
  { label: '张三', value: '2', count: 1035, imgUrl: 'https://vxeui.com/resource/avatarImg/avatar6.jpeg' },
  { label: '老徐', value: '3', count: 4856, imgUrl: 'https://vxeui.com/resource/avatarImg/avatar9.jpeg' },
  { label: '李四', value: '4', count: 1025, imgUrl: 'https://vxeui.com/resource/avatarImg/avatar14.jpeg' },
  { label: '老六', value: '5', count: 1436, imgUrl: 'https://vxeui.com/resource/avatarImg/avatar1.jpeg' },
  { label: '小东', value: '6', count: 4756, imgUrl: 'https://vxeui.com/resource/avatarImg/avatar17.jpeg' }
])

const selectEvent = (item: ItemVO) => {
  VxeUI.modal.message({
    content: `点击了${item.value}`,
    status: 'success'
  })
  showPull.value = false
}
</script>

<style lang="scss" scoped>
.dropdown-body-wrapper {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 600px;
  padding: 8px;
  overflow: auto;
}
.dropdown-body-item {
  display: flex;
  flex-direction: row;
  width: 25%;
  cursor: pointer;
  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
}
.dropdown-item-img {
  padding: 10px;
}
.dropdown-item-wrapper {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  overflow: hidden;
  justify-content: center;
}
.dropdown-body-label {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}
</style>
