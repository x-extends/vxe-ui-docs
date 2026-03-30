<template>
  <div>
    <div>
      <vxe-button @click="scrollColEvent('attr1')">定位 Attr1 列</vxe-button>
      <vxe-button @click="scrollColEvent('attr6')">定位 Attr6 列</vxe-button>
      <vxe-button @click="scrollColEvent('attr11')">定位 Attr11 列</vxe-button>
    </div>
    <div>
      <vxe-button @click="scrollTaskViewEvent(ganttOptions.data[3])">定位项目4任务视图</vxe-button>
      <vxe-button @click="scrollTaskViewEvent(ganttOptions.data[49])">定位项目50任务视图</vxe-button>
      <vxe-button @click="scrollTaskViewEvent(ganttOptions.data[105])">定位项目106任务视图</vxe-button>
    </div>
    <div>
      <vxe-button @click="scrollStartRowEvent()">定位首行</vxe-button>
      <vxe-button @click="scrollEndRowEvent()">定位末行</vxe-button>
      <vxe-button @click="scrollRowEvent(ganttOptions.data[3])">定位第4行</vxe-button>
      <vxe-button @click="scrollRowEvent(ganttOptions.data[49])">定位第50行</vxe-button>
      <vxe-button @click="scrollRowEvent(ganttOptions.data[105])">定位第106行</vxe-button>
    </div>
    <vxe-gantt ref="ganttRef" v-bind="ganttOptions"></vxe-gantt>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import type { VxeGanttInstance, VxeGanttProps } from 'vxe-gantt'

interface RowVO {
  id: number
  title: string
  start: string
  end: string
  progress: number
  attr1: string
  attr2: string
  attr3: string
  attr4: string
  attr5: string
  attr6: string
  attr7: string
  attr8: string
  attr9: string
  attr10: string
  attr11: string
  attr12: string
  attr13: string
  attr14: string
}

export default Vue.extend({
  data () {
    const ganttOptions: VxeGanttProps<RowVO> & { data: RowVO[] } = {
      border: true,
      showOverflow: true,
      height: 500,
      taskViewConfig: {
        tableStyle: {
          width: 500
        }
      },
      virtualXConfig: {
        enabled: true,
        gt: 0
      },
      virtualYConfig: {
        enabled: true,
        gt: 0
      },
      columns: [
        {
          title: '基本信息',
          fixed: 'left',
          children: [
            { type: 'seq', width: 60, fixed: 'left' },
            { field: 'title', title: 'Title', width: 100, fixed: 'left' }
          ]
        },
        {
          title: '更多信息',
          children: [
            { field: 'progress', title: 'Progress', width: 100 },
            {
              title: '详细信息',
              children: [
                { field: 'attr1', title: 'Attr1', width: 120 },
                { field: 'attr2', title: 'Attr2', width: 140 },
                { field: 'attr3', title: 'Attr3', width: 80 },
                { field: 'attr4', title: 'Attr4', width: 70 },
                { field: 'attr5', title: 'Attr5', width: 100 },
                { field: 'attr6', title: 'Attr6', width: 90 },
                { field: 'attr7', title: 'Attr7', width: 160 },
                { field: 'attr8', title: 'Attr8', width: 80 },
                { field: 'attr9', title: 'Attr9', width: 70 },
                { field: 'attr10', title: 'Attr10', width: 100 },
                { field: 'age', title: 'Age', width: 90 }
              ]
            }
          ]
        },
        { field: 'attr11', title: 'Attr11', width: 100 },
        { field: 'attr12', title: 'Attr12', width: 120 },
        {
          title: '分组2',
          children: [

            { field: 'attr13', title: 'Attr13', width: 100 },
            { field: 'attr14', title: 'Attr14', width: 80 }
          ]
        },
        {
          title: '额外信息',
          fixed: 'right',
          children: [
            { field: 'start', title: 'Start Date', fixed: 'right', width: 100 },
            { field: 'end', title: 'End Date', fixed: 'right', width: 100 }
          ]
        }
      ],
      data: []
    }

    return {
      ganttOptions
    }
  },
  created () {
    // 模拟后端接口
    setTimeout(() => {
      const list: RowVO[] = []
      for (let i = 0; i < 200; i++) {
        list.push(
          {
            id: 10000 + i,
            title: '项目' + (i + 1),
            start: i % 2 ? '2024-03-04' : i % 3 ? '2024-03-18' : i % 4 ? '2024-03-12' : i % 5 ? '2024-03-04' : '2024-03-08',
            end: i % 2 ? '2024-03-10' : i % 3 ? '2024-03-25' : i % 4 ? '2024-04-02' : i % 5 ? '2024-03-12' : '2024-03-18',
            progress: i % 3 ? 100 : 80,
            attr1: '',
            attr2: '',
            attr3: '',
            attr4: '',
            attr5: '',
            attr6: '',
            attr7: '',
            attr8: '',
            attr9: '',
            attr10: '',
            attr11: '',
            attr12: '',
            attr13: '',
            attr14: ''
          }
        )
      }
      this.ganttOptions.data = list
    }, 100)
  },
  methods: {
    scrollColEvent (field: string) {
      const $gantt = this.$refs.ganttRef as VxeGanttInstance<RowVO>
      if ($gantt) {
        $gantt.scrollToColumn(field)
      }
    },
    scrollStartRowEvent () {
      const $gantt = this.$refs.ganttRef as VxeGanttInstance<RowVO>
      if ($gantt) {
        $gantt.scrollToStartRow()
      }
    },
    scrollEndRowEvent () {
      const $gantt = this.$refs.ganttRef as VxeGanttInstance<RowVO>
      if ($gantt) {
        $gantt.scrollToEndRow()
      }
    },
    scrollRowEvent (row: RowVO) {
      const $gantt = this.$refs.ganttRef as VxeGanttInstance<RowVO>
      if ($gantt) {
        $gantt.scrollToRow(row)
      }
    },
    scrollTaskViewEvent (row: RowVO) {
      const $gantt = this.$refs.ganttRef as VxeGanttInstance<RowVO>
      if ($gantt) {
        $gantt.scrollToTaskView(row)
      }
    }
  }
})
</script>
