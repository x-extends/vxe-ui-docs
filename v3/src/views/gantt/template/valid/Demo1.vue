<template>
  <div>
    <vxe-gantt ref="ganttRef" v-bind="ganttOptions">
      <template #toolbarButtons>
        <vxe-button status="primary" @click="validEvent">校验</vxe-button>
      </template>

      <template #title_valid="{ content }">
        <span style="color: blue;">
          <vxe-icon name="warning-circle-fill"></vxe-icon>
          <span>错误：{{ content }}</span>
        </span>
      </template>
    </vxe-gantt>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import type { VxeGanttProps, VxeGanttInstance } from 'vxe-gantt'

interface RowVO {
  id: number
  title: string
  start: string
  end: string
  progress: number
}

export default Vue.extend({
  data () {
    const ganttOptions: VxeGanttProps<RowVO> = {
      border: true,
      showOverflow: true,
      editConfig: {
        mode: 'cell',
        trigger: 'click'
      },
      editRules: {
        title: [
          { required: true, message: '必须填写' }
        ]
      },
      toolbarConfig: {
        slots: {
          buttons: 'toolbarButtons'
        }
      },
      taskBarConfig: {
        showProgress: true,
        showContent: true
      },
      columns: [
        { type: 'seq', width: 60 },
        { field: 'title', title: '任务名称', minWidth: 160, editRender: { name: 'input' }, slots: { valid: 'title_valid' } },
        { field: 'start', title: '开始时间', width: 100 },
        { field: 'end', title: '结束时间', width: 100 }
      ],
      data: [
        { id: 10002, title: '城市道路修理进度', start: '2024-03-03', end: '2024-03-08', progress: 10 },
        { id: 10004, title: '', start: '2024-03-05', end: '2024-03-11', progress: 15 },
        { id: 10006, title: '一个小目标项目', start: '2024-03-10', end: '2024-03-21', progress: 5 },
        { id: 10007, title: '某某计划', start: '2024-03-15', end: '2024-03-24', progress: 70 },
        { id: 10008, title: '某某科技项目', start: '2024-03-20', end: '2024-03-29', progress: 50 }
      ]
    }

    return {
      ganttOptions
    }
  },
  methods: {
    validEvent () {
      const $gantt = this.$refs.ganttRef as VxeGanttInstance<RowVO>
      if ($gantt) {
        $gantt.validate(true)
      }
    }
  }
})
</script>
