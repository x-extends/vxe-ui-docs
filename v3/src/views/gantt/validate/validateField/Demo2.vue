<template>
  <div>
    <vxe-button status="primary" @click="batchValidField('name')">校验一整列 role</vxe-button>

    <vxe-gantt ref="ganttRef" v-bind="ganttOptions">
      <template #action="{ row }">
        <vxe-button mode="text" status="primary" @click="validField(row)">校验 name</vxe-button>
        <vxe-button mode="text" status="primary" @click="validMultiFiled(row)">校验 name,progress</vxe-button>
      </template>
    </vxe-gantt>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { VxeUI } from 'vxe-pc-ui'
import { VxeGanttProps, VxeGanttInstance } from 'vxe-gantt'

interface RowVO {
  id: number
  name: string
  startDate: string
  endDate: string
  progress: number
  responsibleBy: string
  description: string
  imgList: string[]
  fileList: {
    name: string
    size: number
    url: string
  }[]
  createBy: string
  updateBy: string
  createDate: string
  updateDate: string
}

export default Vue.extend({
  data () {
    const ganttOptions: VxeGanttProps<RowVO> = {
      border: true,
      showOverflow: true,
      keepSource: true,
      height: 300,
      editConfig: {
        trigger: 'click',
        mode: 'cell',
        showStatus: true
      },
      validConfig: {
        msgMode: 'full'
      },
      editRules: {
        name: [
          { required: true, message: '必须填写' }
        ],
        startDate: [
          { required: true, message: '必须填写' }
        ],
        endDate: [
          { required: true, message: '必须填写' }
        ],
        progress: [
          { required: true, message: '必须填写' }
        ]
      },
      taskBarConfig: {
        showProgress: true,
        showContent: true
      },
      taskConfig: {
        titleField: 'name',
        startField: 'startDate',
        endField: 'endDate',
        progressField: 'progress'
      },
      taskViewConfig: {
        tableStyle: {
          width: 380
        }
      },
      columns: [
        { field: 'name', title: '任务名称', minWidth: 160, editRender: { name: 'VxeInput' } },
        { field: 'startDate', title: '开始时间', width: 140, editRender: { name: 'VxeDatePicker' } },
        { field: 'endDate', title: '结束时间', width: 140, editRender: { name: 'VxeDatePicker' } },
        { field: 'progress', title: '进度', width: 110, editRender: { name: 'VxeNumberInput', props: { type: 'integer', min: 0, max: 100 } } },
        { field: 'responsibleBy', title: '负责人', width: 140, editRender: { name: 'VxeInput' } },
        { field: 'description', title: '备注', width: 200, editRender: { name: 'VxeInput' } },
        { field: 'createBy', title: '创建人', width: 160 },
        { field: 'updateBy', title: '最后更新人', width: 180 },
        { field: 'createDate', title: '创建时间', width: 140 },
        { field: 'updateDate', title: '更新时间', width: 140 }
      ],
      data: [
        { id: 10001, name: '', startDate: '2024-03-01', endDate: '2024-03-04', progress: 3, responsibleBy: '张三', description: '', createBy: '小明', updateBy: '小陈', createDate: '2024-03-01', updateDate: '2024-03-02', imgList: ['https://vxeui.com/resource/img/bq475.gif'], fileList: [{ name: 'fj577.jpg', url: 'https://vxeui.com/resource/img/fj577.jpg', size: 6054 }] },
        { id: 10002, name: '城市道路修理进度', startDate: '2024-03-03', endDate: '2024-03-08', progress: 10, responsibleBy: '小徐', description: '', createBy: '小徐', updateBy: '小徐', createDate: '2024-03-01', updateDate: '2024-03-02', imgList: ['https://vxeui.com/resource/img/bq673.gif'], fileList: [] },
        { id: 10003, name: '', startDate: '2024-03-03', endDate: '2024-03-11', progress: 90, responsibleBy: '李四', description: '不备注', createBy: '李四', updateBy: '老黄', createDate: '2024-03-01', updateDate: '2024-03-02', imgList: [], fileList: [{ name: 'bq987.gif', url: 'https://vxeui.com/resource/img/bq987.gif', size: 6054 }] },
        { id: 10004, name: '超级大工程', startDate: '2024-03-05', endDate: '2024-03-11', progress: 15, responsibleBy: '小陈', description: '', createBy: '小红', updateBy: '小陈', createDate: '2024-03-01', updateDate: '2024-03-02', imgList: ['https://vxeui.com/resource/img/fj577.jpg'], fileList: [] },
        { id: 10005, name: '地球净化项目', startDate: '2024-03-08', endDate: '2024-03-15', progress: 100, responsibleBy: '小李', description: '备注描述', createBy: '小李', updateBy: '小李', createDate: '2024-03-01', updateDate: '2024-03-02', imgList: [], fileList: [] },
        { id: 10006, name: '一个小目标项目', startDate: '2024-03-10', endDate: '2024-03-21', progress: 5, responsibleBy: '老六', description: '任务备注备注备注', createBy: '小陈', updateBy: '王五', createDate: '2024-03-01', updateDate: '2024-03-02', imgList: ['https://vxeui.com/resource/img/fj124.jpeg'], fileList: [{ name: 'fj586.pn', url: 'https://vxeui.com/resource/img/fj586.png', size: 75064 }] },
        { id: 10007, name: '某某计划', startDate: '2024-03-15', endDate: '2024-03-24', progress: 70, responsibleBy: '小红', description: '', createBy: '张三', updateBy: '小红', createDate: '2024-03-01', updateDate: '2024-03-02', imgList: ['https://vxeui.com/resource/img/fj581.jpeg'], fileList: [] },
        { id: 10008, name: '某某科技项目', startDate: '2024-03-20', endDate: '2024-03-29', progress: 50, responsibleBy: '王五', description: '', createBy: '小明', updateBy: '小徐', createDate: '2024-03-01', updateDate: '2024-03-02', imgList: ['https://vxeui.com/resource/img/fj586.png'], fileList: [{ name: 'fj843.jpg', url: 'https://vxeui.com/resource/img/fj843.jpg', size: 10240 }] },
        { id: 10009, name: '地铁建设工程', startDate: '2024-03-19', endDate: '2024-03-20', progress: 5, responsibleBy: '老黄', description: '备注信息备注信息', createBy: '李四', updateBy: '小明', createDate: '2024-03-01', updateDate: '2024-03-02', imgList: [], fileList: [] },
        { id: 10010, name: '铁路修建计划', startDate: '2024-03-12', endDate: '2024-03-20', progress: 10, responsibleBy: '小明', description: '', createBy: '王五', updateBy: '老黄', createDate: '2024-03-01', updateDate: '2024-03-02', imgList: ['https://vxeui.com/resource/img/fj843.jpg'], fileList: [] }
      ]
    }

    return {
      ganttOptions
    }
  },
  methods: {
    async validField (row: RowVO) {
      const $gantt = this.$refs.ganttRef as VxeGanttInstance<RowVO>
      if ($gantt) {
        const errMap = await $gantt.fullValidateField(row, 'name')
        if (errMap) {
          VxeUI.modal.message({ status: 'error', content: '校验不通过！' })
        } else {
          VxeUI.modal.message({ status: 'success', content: '校验成功！' })
        }
      }
    },
    async validMultiFiled (row: RowVO) {
      const $gantt = this.$refs.ganttRef as VxeGanttInstance<RowVO>
      if ($gantt) {
        const errMap = await $gantt.fullValidateField(row, ['name', 'progress'])
        if (errMap) {
          VxeUI.modal.message({ status: 'error', content: '校验不通过！' })
        } else {
          VxeUI.modal.message({ status: 'success', content: '校验成功！' })
        }
      }
    },
    async  batchValidField (field: string) {
      const $gantt = this.$refs.ganttRef as VxeGanttInstance<RowVO>
      if ($gantt) {
        const data = $gantt.getFullData()
        const errMap = await $gantt.fullValidateField(data, field)
        if (errMap) {
          VxeUI.modal.message({ status: 'error', content: '校验不通过！' })
        } else {
          VxeUI.modal.message({ status: 'success', content: '校验成功！' })
        }
      }
    }
  }
})
</script>
