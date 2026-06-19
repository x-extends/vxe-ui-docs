<template>
  <div>
    <vxe-tree-select
      show-radio
      filterable
      clearable
      show-checked-button
      show-clear-button
      show-total-button
      show-close-button
      show-expand-button
      show-full-label
      v-model="val1"
      :options="treeList"
      :treeConfig="treeConfig"
      :option-props="{value: 'id', label: 'name'}">
    </vxe-tree-select>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'
import { VxeTreeSelectPropTypes } from 'vxe-pc-ui'
import XEUtils from 'xe-utils'

const val1 = ref(1202)
const treeList = ref<VxeTreeSelectPropTypes.Options>([])

const treeConfig = reactive<VxeTreeSelectPropTypes.TreeConfig>({
  trigger: 'node',
  radioConfig: {
    checkMode: 'last'
  }
})

const loadList = () => {
  fetch('https://vxeui.com/resource/json/provinces_list.json').then(res => res.json()).then((data) => {
    treeList.value = XEUtils.toArrayTree(data, { key: 'id', parentKey: 'parentId' })
  })
}

loadList()
</script>
