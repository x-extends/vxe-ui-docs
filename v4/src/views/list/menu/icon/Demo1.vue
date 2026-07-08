<template>
  <div>
    <vxe-list v-bind="listOptions" v-on="listEvents"></vxe-list>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
import { VxeUI, VxeListProps, VxeListListeners } from 'vxe-pc-ui'

interface RowVO {
  id: string
  label: string
}

const listOptions = reactive<VxeListProps<RowVO>>({
  height: 400,
  rowConfig: {
    keyField: 'id',
    isHover: true,
    isCurrent: true
  },
  menuConfig: {
    options: [
      [
        { code: '1', name: '新增' },
        { code: '2', name: '删除', prefixIcon: 'vxe-icon-delete-fill' },
        {
          code: '3',
          name: '审批',
          children: [
            { code: '4', name: '通过', prefixIcon: 'vxe-icon-check' },
            { code: '5', name: '不通过', prefixIcon: 'vxe-icon-close' }
          ]
        },
        { code: '6', name: '查看', prefixIcon: 'vxe-icon-link' }
      ],
      [
        {
          code: '11',
          name: '更多操作',
          children: [
            { code: '13', name: '编辑', prefixIcon: 'vxe-icon-feedback' },
            { code: '14', name: '取消' }
          ]
        },
        { code: '10', name: '驳回', prefixIcon: 'vxe-icon-undo' }
      ]
    ]
  },
  data: [
    { id: '10001', label: '数据10001' },
    { id: '10002', label: '数据10002' },
    { id: '10003', label: '数据10003' },
    { id: '10004', label: '数据10004' },
    { id: '10005', label: '数据10005' },
    { id: '10006', label: '数据10006' },
    { id: '10007', label: '数据10007' },
    { id: '10008', label: '数据10008' },
    { id: '10009', label: '数据10009' },
    { id: '10010', label: '数据10010' },
    { id: '10011', label: '数据10011' },
    { id: '10012', label: '数据10012' },
    { id: '10013', label: '数据10013' },
    { id: '10014', label: '数据10014' },
    { id: '10015', label: '数据10015' },
    { id: '10016', label: '数据10016' },
    { id: '10017', label: '数据10017' },
    { id: '10018', label: '数据10018' },
    { id: '10019', label: '数据10019' },
    { id: '10020', label: '数据10020' },
    { id: '10021', label: '数据10021' },
    { id: '10022', label: '数据10022' },
    { id: '10023', label: '数据10023' },
    { id: '10024', label: '数据10024' },
    { id: '10025', label: '数据10025' },
    { id: '10026', label: '数据10026' },
    { id: '10027', label: '数据10027' },
    { id: '10028', label: '数据10028' },
    { id: '10029', label: '数据10029' },
    { id: '10030', label: '数据10030' }
  ]
})

const listEvents: VxeListListeners<RowVO> = {
  menuClick ({ row, menu }) {
    VxeUI.modal.message({
      content: `点击了${row.label} - code=${menu.code}`,
      status: 'success'
    })
  }
}
</script>
