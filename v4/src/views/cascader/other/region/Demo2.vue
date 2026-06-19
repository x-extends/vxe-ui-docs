<template>
  <div>
    <vxe-cascader
      multiple
      show-checkbox
      filterable
      clearable
      show-checked-button
      show-clear-button
      show-total-button
      show-close-button
      v-model="val1"
      :options="treeList"
      :option-props="{value: 'id', label: 'name'}">
    </vxe-cascader>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { VxeCascaderPropTypes } from 'vxe-pc-ui'
import XEUtils from 'xe-utils'

const val1 = ref([1202])
const treeList = ref<VxeCascaderPropTypes.Options>([])

const loadList = () => {
  fetch('https://vxeui.com/resource/json/provinces_list.json').then(res => res.json()).then((data) => {
    treeList.value = XEUtils.toArrayTree(data, { key: 'id', parentKey: 'parentId' })
  })
}

loadList()
</script>
