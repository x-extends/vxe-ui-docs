<template>
  <div>
    <vxe-grid v-bind="gridOptions"></vxe-grid>
  </div>
</template>

<script lang="tsx" setup>
import { reactive } from 'vue'
import { VxeUI } from 'vxe-pc-ui'
import type { VxeGridProps } from 'vxe-table'

interface RowVO {
  id: number
  name: string
  role: string
  sex: string
  age: number
  num: number
  imgUrl: string
  address: string
}

const gridOptions = reactive<VxeGridProps<RowVO>>({
  border: true,
  showOverflow: true,
  columns: [
    { type: 'seq', width: 70 },
    {
      field: 'imgUrl',
      title: 'imgUrl',
      slots: {
        default ({ row }) {
          return <vxe-image src={row.imgUrl} width="36" height="30"></vxe-image>
        }
      }
    },
    {
      field: 'name',
      title: 'Name',
      slots: {
        default ({ row }) {
          return <vxe-button mode="text" onClick={ () => openDetail(row) }>点击{ row.name }</vxe-button>
        }
      }
    },
    {
      title: 'Group1',
      children: [
        {
          field: 'sex',
          title: 'Sex',
          slots: {
            default: ({ row }) => {
              return <span>{ formatSex(row) }</span>
            }
          }
        },
        { field: 'num', title: 'Number' },
        { field: 'age', title: 'Age' }
      ]
    },
    {
      field: 'address',
      title: 'Address',
      width: 200,
      slots: {
        default ({ row }) {
          return <div>
            <vxe-image src="https://vxeui.com/resource/img/546.gif" width="36" height="30"></vxe-image>
            <span>{ row.address }</span>
            <vxe-image src="https://n.sinaimg.cn/sinacn17/w120h120/20180314/89fc-fyscsmv5911424.gif" width="36" height="30"></vxe-image>
          </div>
        }
      }
    }
  ],
  data: [
    { id: 10001, name: 'Test1', role: 'Develop', sex: '0', age: 28, num: 234, imgUrl: 'https://vxeui.com/resource/img/fj577.jpg', address: 'test abc' },
    { id: 10002, name: 'Test2', role: 'Test', sex: '1', age: 22, num: 34, imgUrl: 'https://vxeui.com/resource/img/fj581.jpeg', address: 'Guangzhou' },
    { id: 10003, name: 'Test3', role: 'PM', sex: '0', age: 32, num: 12, imgUrl: 'https://vxeui.com/resource/img/fj581.jpeg', address: 'Shanghai' }
  ]
})

const formatSex = (row: RowVO) => {
  return row.sex === '1' ? '男' : '女'
}

const openDetail = (row: RowVO) => {
  VxeUI.modal.message({
    status: 'success',
    content: `点击了${row.name}`
  })
}
</script>
