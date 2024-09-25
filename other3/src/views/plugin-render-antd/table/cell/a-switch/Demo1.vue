<template>
  <div>
    <vxe-table
      border
      show-overflow
      keep-source
      :edit-config="{ trigger: 'click', mode: 'row'}"
      :data="tableData">
      <vxe-column type="checkbox" width="60"></vxe-column>
      <vxe-column type="seq" title="Number" width="80"></vxe-column>
      <vxe-column title="Name" field="name" min-width="140"></vxe-column>
      <vxe-column title="开关" field="flag" width="200" :cell-render="{ name: 'ASwitch' }"></vxe-column>
    </vxe-table>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

interface RowVO {
  id: number
  name: string
  flag: boolean
}

export default Vue.extend({
  data () {
    const tableData: RowVO[] = [
      { id: 10001, name: 'Test1', flag: true },
      { id: 10002, name: 'Test2', flag: false }
    ]

    return {
      tableData
    }
  }
})
</script>
