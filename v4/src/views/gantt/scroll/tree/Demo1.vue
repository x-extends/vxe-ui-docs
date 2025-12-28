<template>
  <div>
    <vxe-select v-model="rowSize" :options="dataOptions" @change="changeRowSizeEvent"></vxe-select>

    <vxe-gantt v-bind="ganttOptions"></vxe-gantt>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive, onMounted } from 'vue'
import { VxeGanttProps } from 'vxe-gantt'

interface RowVO {
  id: number
  parentId: number | null
  title: string
  start: string
  end: string
  progress: number
}

const rowSize = ref(500)
const dataOptions = ref([
  { label: '加载 3 行', value: 3 },
  { label: '加载 20 行', value: 20 },
  { label: '加载 100 行', value: 100 },
  { label: '加载 500 行', value: 500 },
  { label: '加载 1000 行', value: 1000 },
  { label: '加载 5000 行', value: 5000 },
  { label: '加载 10000 行', value: 10000 }
])

const ganttOptions = reactive<VxeGanttProps<RowVO>>({
  border: true,
  showOverflow: true,
  showHeaderOverflow: true,
  showFooterOverflow: true,
  height: 600,
  treeConfig: {
    transform: true,
    rowField: 'id',
    parentField: 'parentId'
  },
  taskBarConfig: {
    showProgress: true,
    showContent: true,
    barStyle: {
      round: true,
      bgColor: '#fca60b',
      completedBgColor: '#65c16f'
    }
  },
  taskViewConfig: {
    tableStyle: {
      width: 480
    }
  },
  virtualYConfig: {
    gt: 0,
    enabled: true
  },
  columns: [
    { type: 'seq', width: 70 },
    { field: 'title', title: '任务名称', treeNode: true },
    { field: 'start', title: '开始时间', width: 100 },
    { field: 'end', title: '结束时间', width: 100 }
  ],
  data: []
})

const loadTreeData = (nodeSize: number) => {
  ganttOptions.loading = true
  setTimeout(() => {
    const cacheList: RowVO[] = []
    let idCounter = 1000000

    const rootCount = Math.floor(nodeSize / 2)
    const roots: RowVO[] = []
    for (let i = 0; i < rootCount; i++) {
      const rootNode: RowVO = {
        id: idCounter++,
        parentId: null,
        title: `任务计划${i + 1}`,
        start: i % 3 ? '2024-03-03' : i % 2 ? '2024-03-10' : '2024-03-22',
        end: i % 3 ? '2024-03-11' : i % 2 ? '2024-03-19' : '2024-04-04',
        progress: i % 2 ? 50 : 30
      }
      roots.push(rootNode)
      cacheList.push(rootNode)
    }

    let generatedCount = rootCount
    const secondLevelNodes: RowVO[] = []
    const secondLevelCount = Math.min(
      Math.floor(Math.random() * (nodeSize - generatedCount)) + 1,
      nodeSize - generatedCount
    )
    for (let i = 0; i < secondLevelCount; i++) {
      const parent = roots[Math.floor(Math.random() * roots.length)]
      const node: RowVO = {
        id: idCounter++,
        parentId: parent.id,
        title: `任务计划${i + 1}`,
        start: i % 3 ? '2024-03-05' : i % 2 ? '2024-03-8' : '2024-03-17',
        end: i % 3 ? '2024-03-09' : i % 2 ? '2024-03-18' : '2024-03-27',
        progress: i % 2 ? 50 : 30
      }
      secondLevelNodes.push(node)
      cacheList.push(node)
      generatedCount++
    }

    if (generatedCount < nodeSize) {
      const thirdLevelCount = nodeSize - generatedCount
      for (let i = 0; i < thirdLevelCount; i++) {
        let parent
        if (secondLevelNodes.length > 0) {
          parent = secondLevelNodes[Math.floor(Math.random() * secondLevelNodes.length)]
        } else {
          parent = roots[Math.floor(Math.random() * roots.length)]
        }
        const node: RowVO = {
          id: idCounter++,
          parentId: parent.id,
          title: `任务计划${i + 1}`,
          start: i % 3 ? '2024-04-03' : i % 2 ? '2024-04-08' : '2024-04-14',
          end: i % 3 ? '2024-04-07' : i % 2 ? '2024-04-15' : '2024-04-22',
          progress: i % 2 ? 50 : 30
        }
        cacheList.push(node)
        generatedCount++
      }
    }

    ganttOptions.data = cacheList
    ganttOptions.loading = false
  }, 150)
}

const changeRowSizeEvent = () => {
  loadTreeData(rowSize.value)
}

onMounted(() => {
  loadTreeData(rowSize.value)
})
</script>
