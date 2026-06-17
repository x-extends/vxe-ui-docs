<template>
  <div>
    <vxe-tree-select
      v-model="val1"
      :tree-config="treeConfig"
      :options="treeList"
      :option-props="{label: 'title', value: 'id'}">
    </vxe-tree-select>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'
import { VxeTreeSelectPropTypes } from 'vxe-pc-ui'

interface NodeVO {
  title: string
  id: string
  children?: NodeVO[]
}

const val1 = ref('321')

const treeConfig = reactive<VxeTreeSelectPropTypes.TreeConfig>({
})

const treeList = ref<NodeVO[]>([
  { title: '节点2', id: '2' },
  {
    title: '节点3',
    id: '3',
    children: [
      { title: '节点3-1', id: '31' },
      {
        title: '节点3-2',
        id: '32',
        children: [
          { title: '节点3-2-1', id: '321' },
          { title: '节点3-2-2', id: '322' }
        ]
      },
      {
        title: '节点3-3',
        id: '33',
        children: [
          { title: '节点3-3-1', id: '331' },
          { title: '节点3-3-2', id: '332' },
          { title: '节点3-3-3', id: '333' },
          { title: '节点3-3-4', id: '334' },
          { title: '节点3-3-5', id: '335' },
          { title: '节点3-3-6', id: '336' },
          { title: '节点3-3-7', id: '337' },
          { title: '节点3-3-8', id: '338' },
          { title: '节点3-3-9', id: '339' }
        ]
      },
      { title: '节点3-4', id: '34' }
    ]
  },
  {
    title: '节点4',
    id: '4',
    children: [
      {
        title: '节点4-1',
        id: '41',
        children: [
          { title: '节点4-1-1', id: '411' },
          { title: '节点4-1-2', id: '412' }
        ]
      },
      { title: '节点4-2', id: '42' },
      {
        title: '节点4-3',
        id: '43',
        children: [
          { title: '节点4-3-1', id: '431' },
          { title: '节点4-3-2', id: '432' }
        ]
      },
      { title: '节点4-4', id: '44' },
      { title: '节点4-5', id: '45' },
      { title: '节点4-6', id: '46' },
      { title: '节点4-7', id: '47' },
      { title: '节点4-8', id: '48' },
      { title: '节点4-9', id: '49' }
    ]
  },
  { title: '节点5', id: '5' },
  { title: '节点6', id: '6' },
  { title: '节点7', id: '7' },
  { title: '节点8', id: '8' },
  {
    title: '节点9',
    id: '9',
    children: [
      { title: '节点9-1', id: '91' },
      { title: '节点9-2', id: '92' },
      { title: '节点9-3', id: '93' },
      { title: '节点9-4', id: '94' },
      { title: '节点9-5', id: '95' },
      { title: '节点9-6', id: '96' },
      { title: '节点9-7', id: '97' },
      { title: '节点9-8', id: '98' },
      { title: '节点9-9', id: '99' }
    ]
  },
  { title: '节点10', id: '10' }
])
</script>
