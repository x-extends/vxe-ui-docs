<template>
  <div>
    <vxe-gantt ref="ganttRef" v-bind="ganttOptions" v-on="ganttEvents"></vxe-gantt>

    <vxe-modal
      resize
      destroy-on-close
      show-footer
      show-confirm-button
      show-cancel-button
      v-model="showEditPopup"
      title="编辑任务"
      width="680"
      height="620"
      :confirm-closable="false"
      @confirm="confirmEvent">
      <vxe-form ref="formRef" v-bind="formOptions"></vxe-form>
    </vxe-modal>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'
import { VxeGanttProps, VxeGanttInstance, VxeGanttListeners } from 'vxe-gantt'
import { VxeUI, VxeFormProps, VxeFormInstance, VxeFormItemPropTypes, VxeUploadProps } from 'vxe-pc-ui'
import { VxeColumnPropTypes } from 'vxe-table'
import XEUtils from 'xe-utils'
import axios from 'axios'

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

const showEditPopup = ref(false)
const selectRow = ref<RowVO | null>(null)

const ganttRef = ref<VxeGanttInstance<RowVO>>()
const formRef = ref<VxeFormInstance<RowVO>>()

const imgListCellRender: VxeColumnPropTypes.CellRender = reactive({
  name: 'VxeImage',
  props: {
    width: 36,
    height: 36
  }
})

const ganttOptions = reactive<VxeGanttProps<RowVO>>({
  border: true,
  taskConfig: {
    titleField: 'name',
    startField: 'startDate',
    endField: 'endDate',
    progressField: 'progress'
  },
  taskBarConfig: {
    showProgress: true,
    showContent: true,
    barStyle: {
      bgColor: '#f56565',
      completedBgColor: '#65c16f'
    }
  },
  taskViewConfig: {
    tableStyle: {
      width: 380
    }
  },
  columns: [
    { field: 'name', title: '任务名称', minWidth: 160 },
    { field: 'startDate', title: '开始时间', width: 100 },
    { field: 'endDate', title: '结束时间', width: 100 },
    { field: 'progress', title: '进度', width: 60 },
    { field: 'responsibleBy', title: '负责人', width: 140 },
    { field: 'description', title: '备注', width: 200 },
    { field: 'createBy', title: '创建人', width: 160 },
    { field: 'imgList', title: '图片', width: 160, cellRender: imgListCellRender },
    { field: 'updateBy', title: '最后更新人', width: 180 },
    { field: 'createDate', title: '创建时间', width: 140 },
    { field: 'updateDate', title: '更新时间', width: 140 }
  ],
  data: [
    { id: 10001, name: 'A项目', startDate: '2024-03-01', endDate: '2024-03-04', progress: 3, responsibleBy: '张三', description: '', createBy: '小明', updateBy: '小陈', createDate: '2024-03-01', updateDate: '2024-03-02', imgList: ['https://vxeui.com/resource/img/bq475.gif'], fileList: [{ name: 'fj577.jpg', url: 'https://vxeui.com/resource/img/fj577.jpg', size: 6054 }] },
    { id: 10002, name: '城市道路修理进度', startDate: '2024-03-03', endDate: '2024-03-08', progress: 10, responsibleBy: '小徐', description: '', createBy: '小徐', updateBy: '小徐', createDate: '2024-03-01', updateDate: '2024-03-02', imgList: ['https://vxeui.com/resource/img/bq673.gif'], fileList: [] },
    { id: 10003, name: 'B大工程', startDate: '2024-03-03', endDate: '2024-03-11', progress: 90, responsibleBy: '李四', description: '不备注', createBy: '李四', updateBy: '老黄', createDate: '2024-03-01', updateDate: '2024-03-02', imgList: [], fileList: [{ name: 'bq987.gif', url: 'https://vxeui.com/resource/img/bq987.gif', size: 6054 }] },
    { id: 10004, name: '超级大工程', startDate: '2024-03-05', endDate: '2024-03-11', progress: 15, responsibleBy: '小陈', description: '', createBy: '小红', updateBy: '小陈', createDate: '2024-03-01', updateDate: '2024-03-02', imgList: ['https://vxeui.com/resource/img/fj577.jpg'], fileList: [] },
    { id: 10005, name: '地球净化项目', startDate: '2024-03-08', endDate: '2024-03-15', progress: 100, responsibleBy: '小李', description: '备注描述', createBy: '小李', updateBy: '小李', createDate: '2024-03-01', updateDate: '2024-03-02', imgList: [], fileList: [] },
    { id: 10006, name: '一个小目标项目', startDate: '2024-03-10', endDate: '2024-03-21', progress: 5, responsibleBy: '老六', description: '任务备注备注备注', createBy: '小陈', updateBy: '王五', createDate: '2024-03-01', updateDate: '2024-03-02', imgList: ['https://vxeui.com/resource/img/fj124.jpeg'], fileList: [{ name: 'fj586.pn', url: 'https://vxeui.com/resource/img/fj586.png', size: 75064 }] },
    { id: 10007, name: '某某计划', startDate: '2024-03-15', endDate: '2024-03-24', progress: 70, responsibleBy: '小红', description: '', createBy: '张三', updateBy: '小红', createDate: '2024-03-01', updateDate: '2024-03-02', imgList: ['https://vxeui.com/resource/img/fj581.jpeg'], fileList: [] },
    { id: 10008, name: '某某科技项目', startDate: '2024-03-20', endDate: '2024-03-29', progress: 50, responsibleBy: '王五', description: '', createBy: '小明', updateBy: '小徐', createDate: '2024-03-01', updateDate: '2024-03-02', imgList: ['https://vxeui.com/resource/img/fj586.png'], fileList: [{ name: 'fj843.jpg', url: 'https://vxeui.com/resource/img/fj843.jpg', size: 10240 }] },
    { id: 10009, name: '地铁建设工程', startDate: '2024-03-19', endDate: '2024-03-20', progress: 5, responsibleBy: '老黄', description: '备注信息备注信息', createBy: '李四', updateBy: '小明', createDate: '2024-03-01', updateDate: '2024-03-02', imgList: [], fileList: [] },
    { id: 10010, name: '铁路修建计划', startDate: '2024-03-12', endDate: '2024-03-20', progress: 10, responsibleBy: '小明', description: '', createBy: '王五', updateBy: '老黄', createDate: '2024-03-01', updateDate: '2024-03-02', imgList: ['https://vxeui.com/resource/img/fj843.jpg'], fileList: [] }
  ]
})

const imgListItemRender = reactive<VxeFormItemPropTypes.ItemRender<RowVO, VxeUploadProps>>({
  name: 'VxeUpload',
  props: {
    mode: 'image',
    multiple: true,
    urlMode: true,
    moreConfig: {
      maxCount: 2
    },
    uploadMethod ({ file }) {
      const formData = new FormData()
      formData.append('file', file)
      return axios.post('/publicapi/api/pub/upload/single', formData).then((res) => {
        // { url: ''}
        return {
          ...res.data
        }
      })
    }
  }
})

const fileListItemRender = reactive<VxeFormItemPropTypes.ItemRender<RowVO, VxeUploadProps>>({
  name: 'VxeUpload',
  props: {
    multiple: true,
    moreConfig: {
      maxCount: 2
    },
    uploadMethod ({ file }) {
      const formData = new FormData()
      formData.append('file', file)
      return axios.post('/publicapi/api/pub/upload/single', formData).then((res) => {
        // { url: ''}
        return {
          ...res.data
        }
      })
    }
  }
})

const formOptions = reactive<VxeFormProps>({
  titleWidth: 'auto',
  titleAlign: 'right',
  titleColon: true,
  data: {
    name: '',
    startDate: '',
    endDate: '',
    progress: 0,
    responsibleBy: '',
    description: '',
    imgList: [],
    fileList: []
  },
  rules: {
    name: [
      { required: true, message: '任务名称必填' }
    ],
    startDate: [
      { required: true, message: '开始时间必填' }
    ],
    endDate: [
      { required: true, message: '结束时间必填' }
    ],
    progress: [
      { required: true, message: '进度必填' }
    ],
    responsibleBy: [
      { required: true, message: '进度必填' }
    ]
  },
  items: [
    { field: 'name', title: '任务名称', span: 24, itemRender: { name: 'VxeInput' } },
    { field: 'startDate', title: '开始时间', span: 12, itemRender: { name: 'VxeDatePicker' } },
    { field: 'endDate', title: '结束时间', span: 12, itemRender: { name: 'VxeDatePicker' } },
    { field: 'progress', title: '进度', span: 12, itemRender: { name: 'VxeNumberInput', props: { type: 'integer', min: 0, max: 100 } } },
    { field: 'responsibleBy', title: '负责人', span: 12, itemRender: { name: 'VxeInput' } },
    { field: 'description', title: '备注', span: 24, itemRender: { name: 'VxeInput' } },
    { field: 'imgList', title: '图片', span: 24, itemRender: imgListItemRender },
    { field: 'fileList', title: '附件', span: 24, itemRender: fileListItemRender }
  ]
})

const ganttEvents: VxeGanttListeners<RowVO> = {
  taskBarClick ({ row }) {
    XEUtils.destructuring(formOptions.data, row)
    selectRow.value = row
    showEditPopup.value = true
  }
}

const confirmEvent = async () => {
  const $form = formRef.value
  if ($form) {
    const errMap = await $form.validate()
    if (!errMap) {
      const $gantt = ganttRef.value
      const row = selectRow.value
      if (row) {
        row.name = formOptions.data.name
        row.startDate = formOptions.data.startDate
        row.endDate = formOptions.data.endDate
        row.progress = formOptions.data.progress
      }
      showEditPopup.value = false
      VxeUI.modal.message({ content: '保存成功', status: 'success' })
      if ($gantt) {
      // 修改任务时间后刷新视图
        $gantt.refreshTaskView()
      }
    }
  }
}
</script>
