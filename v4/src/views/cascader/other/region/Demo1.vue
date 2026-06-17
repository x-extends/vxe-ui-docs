<template>
  <div>
    <vxe-cascader v-model="val1" :options="treeList" :option-props="{value: 'id', label: 'name'}" filterable clearable></vxe-cascader>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { VxeCascaderPropTypes } from 'vxe-pc-ui'
import XEUtils from 'xe-utils'

const val1 = ref(1202)
const treeList = ref<VxeCascaderPropTypes.Options>([])

const loadList = () => {
  fetch('https://vxeui.com/resource/json/provinces_list.json').then(res => res.json()).then((data) => {
    treeList.value = XEUtils.toArrayTree(data, { key: 'id', parentKey: 'parentId' })
  })
}

loadList()
</script>
