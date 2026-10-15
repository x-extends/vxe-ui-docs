<template>
  <div>
    轨道背景色：<vxe-color-picker v-model="trackBgColor" :colors="colorList" show-eye-dropper clearable></vxe-color-picker>
    滑块背景色：<vxe-color-picker v-model="thumbBgColor" :colors="colorList" show-eye-dropper></vxe-color-picker>

    <vxe-gantt
      v-bind="ganttOptions"
      :style="{
        '--vxe-ui-scrollbar-track-background-color': trackBgColor,
        '--vxe-ui-scrollbar-thumb-background-color': thumbBgColor,
        '--vxe-ui-scrollbar-thumb-hover-background-color': thumbHoverBgColor,
        '--vxe-ui-scrollbar-thumb-active-background-color': thumbActiveBgColor
      }"
    ></vxe-gantt>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { VxeUI, VxeGanttProps } from 'vxe-gantt'

interface RowVO {
  id: number
  title: string
  start: string
  end: string
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
      height: 400,
      taskBarConfig: {
        showProgress: true,
        showContent: true
      },
      taskViewConfig: {
        tableStyle: {
          width: 480
        }
      },
      useScrollbar: true,
      columns: [
        { type: 'seq', field: 'seq', width: 70 },
        { field: 'title', title: '任务名称', minWidth: 300 },
        { field: 'start', title: '开始时间', width: 100 },
        { field: 'end', title: '结束时间', width: 100 },
        { field: 'responsibleBy', title: '负责人', width: 140 },
        { field: 'description', title: '备注', width: 200 },
        { field: 'createBy', title: '创建人', width: 160 },
        { field: 'updateBy', title: '最后更新人', width: 180 },
        { field: 'createDate', title: '创建时间', width: 140 },
        { field: 'updateDate', title: '更新时间', width: 140 }
      ],
      data: [
        { id: 10001, title: '任务R790', start: '2024-03-01', end: '2024-03-04', progress: 3, responsibleBy: '张三', description: '', createBy: '小明', updateBy: '小陈', createDate: '2024-03-01', updateDate: '2024-03-02', imgList: ['https://vxeui.com/resource/img/bq475.gif'], fileList: [{ name: 'fj577.jpg', url: 'https://vxeui.com/resource/img/fj577.jpg', size: 6054 }] },
        { id: 10002, title: '任务C30456572349', start: '2024-03-03', end: '2024-03-08', progress: 10, responsibleBy: '小徐', description: '', createBy: '小徐', updateBy: '小徐', createDate: '2024-03-01', updateDate: '2024-03-02', imgList: ['https://vxeui.com/resource/img/bq673.gif'], fileList: [] },
        { id: 10003, title: '任务E563', start: '2024-03-03', end: '2024-03-11', progress: 90, responsibleBy: '李四', description: '不备注', createBy: '李四', updateBy: '老黄', createDate: '2024-03-01', updateDate: '2024-03-02', imgList: [], fileList: [{ name: 'bq987.gif', url: 'https://vxeui.com/resource/img/bq987.gif', size: 6054 }] },
        { id: 10004, title: '任务P687', start: '2024-03-05', end: '2024-03-11', progress: 15, responsibleBy: '小陈', description: '', createBy: '小红', updateBy: '小陈', createDate: '2024-03-01', updateDate: '2024-03-02', imgList: ['https://vxeui.com/resource/img/fj577.jpg'], fileList: [] },
        { id: 10005, title: '任务L8412430903', start: '2024-03-08', end: '2024-03-15', progress: 100, responsibleBy: '小李', description: '备注描述', createBy: '小李', updateBy: '小李', createDate: '2024-03-01', updateDate: '2024-03-02', imgList: [], fileList: [] },
        { id: 10006, title: '任务B567', start: '2024-03-10', end: '2024-03-21', progress: 5, responsibleBy: '老六', description: '任务备注备注备注', createBy: '小陈', updateBy: '王五', createDate: '2024-03-01', updateDate: '2024-03-02', imgList: ['https://vxeui.com/resource/img/fj124.jpeg'], fileList: [{ name: 'fj586.pn', url: 'https://vxeui.com/resource/img/fj586.png', size: 75064 }] },
        { id: 10007, title: '任务V513802134450', start: '2024-03-15', end: '2024-03-24', progress: 70, responsibleBy: '小红', description: '', createBy: '张三', updateBy: '小红', createDate: '2024-03-01', updateDate: '2024-03-02', imgList: ['https://vxeui.com/resource/img/fj581.jpeg'], fileList: [] },
        { id: 10008, title: '任务G110', start: '2024-03-20', end: '2024-03-29', progress: 50, responsibleBy: '王五', description: '', createBy: '小明', updateBy: '小徐', createDate: '2024-03-01', updateDate: '2024-03-02', imgList: ['https://vxeui.com/resource/img/fj586.png'], fileList: [{ name: 'fj843.jpg', url: 'https://vxeui.com/resource/img/fj843.jpg', size: 10240 }] },
        { id: 10009, title: '任务I802', start: '2024-03-19', end: '2024-03-20', progress: 5, responsibleBy: '老黄', description: '备注信息备注信息', createBy: '李四', updateBy: '小明', createDate: '2024-03-01', updateDate: '2024-03-02', imgList: [], fileList: [] },
        { id: 10010, title: '任务K778', start: '2024-03-12', end: '2024-03-20', progress: 10, responsibleBy: '小明', description: '', createBy: '王五', updateBy: '老黄', createDate: '2024-03-01', updateDate: '2024-03-02', imgList: ['https://vxeui.com/resource/img/fj843.jpg'], fileList: [] }
      ]
    }

    const trackBgColor = 'transparent'
    const thumbBgColor = '#00BFFF'

    const colorList = [
      '#DC143C', '#FF1493', '#FF00FF', '#9932CC', '#6A5ACD',
      '#0000FF', '#00008B', '#778899', '#1E90FF', '#00BFFF',
      '#5F9EA0', '#00FFFF', '#008080', '#7FFFAA', '#3CB371',
      '#8FBC8F', '#008000', '#7CFC00', '#556B2F', '#FFFFE0',
      '#FFFF00', '#808000', '#EEE8AA', '#FFD700', '#FFA500',
      '#FF4500', '#FA8072', '#FF0000', '#800000', '#C0C0C0'
    ]

    return {
      ganttOptions,
      trackBgColor,
      thumbBgColor,
      colorList
    }
  },
  computed: {
    thumbHoverBgColor () {
      return VxeUI.color.darken(this.thumbBgColor, 5)
    },
    thumbActiveBgColor () {
      return VxeUI.color.darken(this.thumbBgColor, 10)
    }
  }
})
</script>
