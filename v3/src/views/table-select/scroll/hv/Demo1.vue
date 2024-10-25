<template>
  <div>
    <p>
      <vxe-button @click="loadDataAndColumns(100, 50)">100行50列</vxe-button>
      <vxe-button @click="loadDataAndColumns(1000, 80)">1k行80列</vxe-button>
      <vxe-button @click="loadDataAndColumns(5000, 100)">5k行100列</vxe-button>
      <vxe-button @click="loadDataAndColumns(10000, 150)">1w行150列</vxe-button>
      <vxe-button @click="loadDataAndColumns(30000, 200)">3w行200列</vxe-button>
    </p>
    <p>
      <vxe-button @click="loadDataAndColumns(50, 50)">50行100列</vxe-button>
      <vxe-button @click="loadDataAndColumns(80, 1000)">80行1k列</vxe-button>
      <vxe-button @click="loadDataAndColumns(100, 5000)">100行5k列</vxe-button>
      <vxe-button @click="loadDataAndColumns(150, 10000)">200行1w列</vxe-button>
      <vxe-button @click="loadDataAndColumns(200, 30000)">200行3w列</vxe-button>
    </p>
    <vxe-table-select v-model="val1" :loading="loading" :columns="columnList" :options="tableData" :popup-config="popupConfig" :option-props="{value: 'id', label: 'name'}"></vxe-table-select>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive, onMounted, nextTick } from 'vue'
import { VxeUI, VxeTableSelectPropTypes } from 'vxe-pc-ui'

interface RowVO {
  id: number
  name: string
  [key: string]: string | number
}

const val1 = ref()
const loading = ref(false)

const columnList = ref<VxeTableSelectPropTypes.Columns>([])
const tableData = ref<RowVO[]>([])

const popupConfig = reactive<VxeTableSelectPropTypes.PopupConfig>({
  width: 500,
  height: 400
})

// 模拟行与列数据
const loadDataAndColumns = (rowSize: number, colSize: number) => {
  loading.value = true
  setTimeout(() => {
    const colList: VxeTableSelectPropTypes.Columns = []
    for (let i = 0; i < colSize; i++) {
      colList.push({
        field: `col${i}`,
        title: `标题${i}`,
        width: 160
      })
    }
    const dataList: RowVO[] = []
    for (let i = 0; i < rowSize; i++) {
      const item: RowVO = {
        id: 10000 + i,
        name: `Name ${i}`
      }
      for (let j = 0; j < colList.length; j++) {
        item[`col${j}`] = `值_${i}_${j}`
      }
      dataList.push(item)
    }
    const startTime = Date.now()
    columnList.value = colList
    tableData.value = dataList
    nextTick(() => {
      VxeUI.modal.message({
        content: `加载时间 ${Date.now() - startTime} 毫秒`,
        status: 'success'
      })
      loading.value = false
    })
  }, 350)
}

onMounted(() => {
  loadDataAndColumns(50, 50)
})
</script>
