<template>
  <div>
    <vxe-gantt v-bind="ganttOptions">
      <template #user_default="{ row }">
        <div>处理人：{{ row.createBy }}</div>
        <div>开始时间：{{ row.start }}</div>
        <div>结束时间：{{ row.end }}</div>
      </template>

      <template #task-bar="{ row }">
        <div class="custom-task-bar" :style="{ backgroundColor: row.bgColor }">
          <div class="custom-task-bar-img">
            <vxe-image :src="row.imgUrl" width="60" height="60"></vxe-image>
          </div>
          <div>
            <div>{{ row.title }}</div>
            <div>开始日期：{{ row.start }}</div>
            <div>结束日期：{{ row.end }}</div>
            <div>进度：{{ row.progress }}%</div>
          </div>
        </div>
      </template>

      <template #task-bar-tooltip="{ row }">
        <div>
          <div>任务名称：{{ row.title }}</div>
          <div>开始时间：{{ row.start }}</div>
          <div>结束时间：{{ row.end }}</div>
          <div>进度：{{ row.progress }}%</div>
        </div>
      </template>
    </vxe-gantt>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
import { VxeGanttProps } from 'vxe-gantt'

interface RowVO {
  id: number
  title: string
  productImg: string
  start: string
  end: string
  progress: number
  imgUrl: string
  bgColor: string
  createBy: string
}

const ganttOptions = reactive<VxeGanttProps<RowVO>>({
  border: true,
  height: 600,
  cellConfig: {
    height: 100
  },
  taskViewConfig: {
    tableStyle: {
      width: 380
    },
    showNowLine: true,
    scales: [
      { type: 'month' },
      {
        type: 'day',
        headerCellStyle ({ dateObj }) {
          // 周日高亮
          if (dateObj.e === 0) {
            return {
              backgroundColor: '#f8e4e4'
            }
          }
        }
      },
      {
        type: 'date',
        headerCellStyle ({ dateObj }) {
          // 周日高亮
          if (dateObj.e === 0) {
            return {
              backgroundColor: '#f8e4e4'
            }
          }
        }
      }
    ],
    viewStyle: {
      cellStyle ({ dateObj }) {
        // 周日高亮
        if (dateObj.e === 0) {
          return {
            backgroundColor: '#f8e4e4'
          }
        }
      }
    }
  },
  taskBarConfig: {
    showTooltip: true,
    barStyle: {
      round: true
    }
  },
  columns: [
    { field: 'title', title: '任务名称', width: 140 },
    {
      field: 'productImg',
      title: '图片',
      width: 100,
      cellRender: {
        name: 'VxeImage',
        props: {
          width: 80,
          height: 80
        }
      }
    },
    { field: 'createBy', title: '负责人', width: 200, slots: { default: 'user_default' } }
  ],
  data: [
    { id: 10002, title: '任务C309', start: '2024-03-03', end: '2024-03-10', progress: 20, createBy: '小王', bgColor: '#c1c452', productImg: 'https://vxeui.com/resource/img/bq475.gif', imgUrl: 'https://vxeui.com/resource/productImg/product9.png' },
    { id: 10004, title: '任务P687', start: '2024-03-05', end: '2024-03-12', progress: 15, createBy: '张三', bgColor: '#fd9393', productImg: 'https://vxeui.com/resource/img/673.gif', imgUrl: 'https://vxeui.com/resource/productImg/product8.png' },
    { id: 10006, title: '任务B567', start: '2024-03-10', end: '2024-03-21', progress: 25, createBy: '老六', bgColor: '#92c1f1', productImg: 'https://vxeui.com/resource/img/546.gif', imgUrl: 'https://vxeui.com/resource/productImg/product1.png' },
    { id: 10007, title: '任务V510', start: '2024-03-15', end: '2024-03-24', progress: 70, createBy: '李四', bgColor: '#fad06c', productImg: 'https://vxeui.com/resource/img/bq987.gif', imgUrl: 'https://vxeui.com/resource/productImg/product3.png' },
    { id: 10008, title: '任务G110', start: '2024-03-20', end: '2024-04-05', progress: 50, createBy: '小东', bgColor: '#e78dd2', productImg: 'https://vxeui.com/resource/img/bq673.gif', imgUrl: 'https://vxeui.com/resource/productImg/product11.png' },
    { id: 10009, title: '任务I802', start: '2024-03-22', end: '2024-03-29', progress: 50, createBy: '王五', bgColor: '#8be1e6', productImg: 'https://vxeui.com/resource/img/673.gif', imgUrl: 'https://vxeui.com/resource/productImg/product7.png' },
    { id: 10010, title: '任务E425', start: '2024-03-28', end: '2024-04-04', progress: 50, createBy: '小明', bgColor: '#78e6d1', productImg: 'https://vxeui.com/resource/img/bq546.gif', imgUrl: 'https://vxeui.com/resource/productImg/product5.png' }
  ]
})
</script>

<style lang="scss" scoped>
.custom-task-bar {
  display: flex;
  flex-direction: row;
  padding: 8px 16px;
  width: 100%;
  font-size: 12px;
}
.custom-task-bar-img {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 70px;
  height: 70px;
}
</style>
