<template>
  <div>
    <vxe-pulldown v-model="showPull" show-popup-shadow>
      <template #default>
        <vxe-input v-model="searchName" placeholder="可搜索的下拉框" @focus="focusEvent" @keyup="keyupEvent"></vxe-input>
      </template>
      <template #dropdown>
        <div class="dropdown-select">
          <div class="list-item1" v-for="item in list" :key="item.value" @click="selectEvent(item)">
            <i class="vxe-icon-user-fill"></i>
            <span>{{ item.label }}</span>
            <vxe-tag v-if="item.isOnline" class="is-online" status="success">在线</vxe-tag>
          </div>
        </div>
      </template>
    </vxe-pulldown>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

interface ItemVO {
  label: string
  value: string
  isOnline: boolean
}

const mockData: ItemVO[] = [
  { label: '选项1', value: '1', isOnline: false },
  { label: '选项2', value: '2', isOnline: true },
  { label: '选项3', value: '3', isOnline: true },
  { label: '选项4', value: '4', isOnline: false },
  { label: '选项5', value: '5', isOnline: true },
  { label: '选项6', value: '6', isOnline: false },
  { label: '选项7', value: '7', isOnline: false },
  { label: '选项8', value: '8', isOnline: true },
  { label: '选项9', value: '9', isOnline: false },
  { label: '选项10', value: '10', isOnline: true },
  { label: '选项11', value: '11', isOnline: false },
  { label: '选项12', value: '12', isOnline: false }
]

const showPull = ref(false)
const searchName = ref('')
const list = ref<ItemVO[]>(mockData)

const focusEvent = () => {
  showPull.value = true
}

const keyupEvent = () => {
  list.value = searchName.value ? mockData.filter((item) => item.label.indexOf(searchName.value) > -1) : mockData
}

const selectEvent = (item: ItemVO) => {
  searchName.value = item.label
  showPull.value = false
  list.value = mockData
}
</script>

<style lang="scss" scoped>
.dropdown-select {
  height: 200px;
  overflow: auto;
  border-radius: 4px;
  border: 1px solid #dcdfe6;
}
.list-item1 {
  position: relative;
  padding: 6px 4px;
  cursor: pointer;
  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
  .is-online {
    position: absolute;
    top: 0;
    font-size: 12px;
  }
}
</style>
