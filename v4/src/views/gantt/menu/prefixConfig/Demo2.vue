<template>
  <div>
    <vxe-gantt v-bind="ganttOptions" v-on="ganttEvents"></vxe-gantt>
  </div>
</template>

<script lang="tsx" setup>
import { reactive } from 'vue'
import { VxeUI } from 'vxe-pc-ui'
import type { VxeGanttProps, VxeGanttListeners } from 'vxe-gantt'

interface RowVO {
  id: number
  title: string
  start: string
  end: string
  progress: number
}

const ganttOptions = reactive<VxeGanttProps<RowVO>>({
  border: true,
  showFooter: true,
  rowConfig: {
    isCurrent: true
  },
  columnConfig: {
    resizable: true
  },
  taskBarConfig: {
    showProgress: true,
    showContent: true
  },
  taskViewConfig: {
    tableStyle: {
      width: 480
    }
  },
  columns: [
    { field: 'title', title: '任务名称' },
    { field: 'start', title: '开始时间', width: 100 },
    { field: 'end', title: '结束时间', width: 100 }
  ],
  data: [
    { id: 10001, title: 'A项目', start: '2024-03-01', end: '2024-03-04', progress: 3 },
    { id: 10002, title: '城市道路修理进度', start: '2024-03-03', end: '2024-03-08', progress: 10 },
    { id: 10003, title: 'B大工程', start: '2024-03-03', end: '2024-03-11', progress: 90 },
    { id: 10004, title: '超级大工程', start: '2024-03-05', end: '2024-03-11', progress: 15 },
    { id: 10005, title: '地球净化项目', start: '2024-03-08', end: '2024-03-15', progress: 100 },
    { id: 10006, title: '一个小目标项目', start: '2024-03-10', end: '2024-03-21', progress: 5 },
    { id: 10007, title: '某某计划', start: '2024-03-15', end: '2024-03-24', progress: 70 },
    { id: 10008, title: '某某科技项目', start: '2024-03-20', end: '2024-03-29', progress: 50 },
    { id: 10009, title: '地铁建设工程', start: '2024-03-19', end: '2024-03-20', progress: 5 },
    { id: 10010, title: '铁路修建计划', start: '2024-03-12', end: '2024-03-20', progress: 10 }
  ],
  menuConfig: {
    header: {
      options: [
        [
          {
            code: 'custom1',
            name: '自定义前缀图标',
            prefixConfig: {
              icon () {
                return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" style="width: 14px;height: 14px;">
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                  <g id="SVGRepo_iconCarrier">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8ZM9.25 3.75C9.25 4.44036 8.69036 5 8 5C7.30964 5 6.75 4.44036 6.75 3.75C6.75 3.05964 7.30964 2.5 8 2.5C8.69036 2.5 9.25 3.05964 9.25 3.75ZM12 8H9.41901L11.2047 13H9.081L8 9.97321L6.91901 13H4.79528L6.581 8H4V6H12V8Z" fill="currentColor"></path>
                  </g>
                </svg>
              }
            }
          },
          { code: 'custom2', name: '自定义前缀内容', prefixConfig: { content: 'Ctrl+S' } }
        ]
      ]
    },
    body: {
      options: [
        [
          {
            code: 'custom3',
            name: '自定义前缀图标',
            prefixConfig: {
              icon () {
                return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" style="width: 14px;height: 14px;">
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                  <g id="SVGRepo_iconCarrier">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8ZM9.25 3.75C9.25 4.44036 8.69036 5 8 5C7.30964 5 6.75 4.44036 6.75 3.75C6.75 3.05964 7.30964 2.5 8 2.5C8.69036 2.5 9.25 3.05964 9.25 3.75ZM12 8H9.41901L11.2047 13H9.081L8 9.97321L6.91901 13H4.79528L6.581 8H4V6H12V8Z" fill="currentColor"></path>
                  </g>
                </svg>
              }
            }
          },
          { code: 'custom4', name: '自定义前缀内容', prefixConfig: { content: 'Ctrl+S' } }
        ],
        [
          {
            code: 'custom5',
            name: '二级菜单',
            children: [
              {
                code: 'custom6',
                name: '自定义前缀图标',
                prefixConfig: {
                  icon () {
                    return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" style="width: 14px;height: 14px;">
                      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                      <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                      <g id="SVGRepo_iconCarrier">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8ZM9.25 3.75C9.25 4.44036 8.69036 5 8 5C7.30964 5 6.75 4.44036 6.75 3.75C6.75 3.05964 7.30964 2.5 8 2.5C8.69036 2.5 9.25 3.05964 9.25 3.75ZM12 8H9.41901L11.2047 13H9.081L8 9.97321L6.91901 13H4.79528L6.581 8H4V6H12V8Z" fill="currentColor"></path>
                      </g>
                    </svg>
                  }
                }
              },
              { code: 'custom7', name: '自定义前缀内容', prefixConfig: { content: 'Ctrl+S' } }
            ]
          }
        ]
      ]
    },
    footer: {
      options: [
        [
          {
            code: 'custom8',
            name: '前缀图标',
            prefixConfig: {
              icon () {
                return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" style="width: 14px;height: 14px;">
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                  <g id="SVGRepo_iconCarrier">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8ZM9.25 3.75C9.25 4.44036 8.69036 5 8 5C7.30964 5 6.75 4.44036 6.75 3.75C6.75 3.05964 7.30964 2.5 8 2.5C8.69036 2.5 9.25 3.05964 9.25 3.75ZM12 8H9.41901L11.2047 13H9.081L8 9.97321L6.91901 13H4.79528L6.581 8H4V6H12V8Z" fill="currentColor"></path>
                  </g>
                </svg>
              }
            }
          },
          { code: 'custom9', name: '前缀内容', prefixConfig: { content: 'Ctrl+S' } }
        ]
      ]
    }
  },
  footerData: [
    { title: '合计', start: 111, end: 222 }
  ]
})

const ganttEvents: VxeGanttListeners<RowVO> = {
  menuClick ({ menu }) {
    VxeUI.modal.alert(`点击了 ${menu.name} 选项`)
  }
}
</script>
