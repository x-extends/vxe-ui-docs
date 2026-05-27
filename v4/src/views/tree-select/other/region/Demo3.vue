<template>
  <div>
    <vxe-tree-select v-model="val1" :options="treeList" :treeConfig="treeConfig" :option-props="{value: 'id', label: 'name'}" show-full-label filterable clearable></vxe-tree-select>
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
