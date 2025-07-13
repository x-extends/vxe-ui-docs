<template>
  <div>
    <vxe-tree-select v-model="val1" v-bind="treeSelectOptions"></vxe-tree-select>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'
import { VxeTreeSelectProps } from 'vxe-pc-ui'

interface NodeVO {
  name: string
  id: string
  parentId?: string | null
}

const val1 = ref()
const treeSelectOptions = reactive<VxeTreeSelectProps<NodeVO>>({
  multiple: true,
  filterable: true,
  showTotalButoon: true,
  showCheckedButoon: true,
  showClearButton: true,
  showExpandButton: true,
  optionProps: {
    label: 'name',
    value: 'id'
  },
  treeConfig: {
    transform: true,
    keyField: 'id',
    parentField: 'parentId',
    checkboxConfig: {
      showIcon: true
    }
  },
  options: []
})

const loadList = () => {
  treeSelectOptions.loading = true
  fetch('/resource/json/provinces_list.json').then(res => res.json()).then((data: NodeVO[]) => {
    treeSelectOptions.loading = false
    treeSelectOptions.options = data
  })
}

loadList()
</script>
