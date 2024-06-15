<template>
  <div>
    <vxe-tip status="primary" title="全局格式化">将单元格的格式化函数注册成全局可复用</vxe-tip>
    <vxe-tip status="success">
      <div>调用方式： VxeUI.formats.add(code, options)</div>
    </vxe-tip>

    <vxe-table
      :tree-config="{childrenField: 'list'}"
      :row-config="{isCurrent: true, isHover: true}"
      :column-config="{resizable: true, isCurrent: true}"
      :data="tableData">
      <vxe-column field="name" :title="$t('api.title.prop')" min-width="280" tree-node></vxe-column>
      <vxe-column field="desc" :title="$t('api.title.desc')" min-width="200"></vxe-column>
      <vxe-column field="type" :title="$t('api.title.type')" min-width="140"></vxe-column>
      <vxe-column field="enum" :title="$t('api.title.enum')" min-width="150"></vxe-column>
      <vxe-column field="defVal" :title="$t('api.title.defVal')" min-width="160"></vxe-column>
    </vxe-table>

  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const tableData = ref([
  {
    name: 'add(code, options)',
    desc: '添加一个',
    type: '',
    enum: '',
    defVal: 'code: string, options: { cellFormatMethod }',
    list: [
      {
        name: 'cellFormatMethod',
        desc: '格式化方法',
        type: '',
        enum: '',
        defVal: '({ cellValue, row, column }) => string | number',
        list: []
      }
    ]
  },
  {
    name: 'mixin(opts)',
    desc: '添加多个',
    type: '',
    enum: '',
    defVal: 'opts: { [code: string]: { cellFormatMethod } }',
    list: []
  },
  {
    name: 'delete(code)',
    desc: '删除',
    type: '',
    enum: '',
    defVal: 'code: string',
    list: []
  }
])
</script>
