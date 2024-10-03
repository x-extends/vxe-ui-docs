<template>
  <div>
    <vxe-table
      border
      :edit-config="{mode: 'row', trigger: 'click'}"
      :data="tableData">
      <vxe-column type="seq" width="60"></vxe-column>
      <vxe-column field="name" title="Name" min-width="200"></vxe-column>
      <vxe-column field="userName" title="下拉列表" width="200" :edit-render="{autoFocus: 'input'}">
        <template #edit="{ row }">
          <UserSelectPulldown v-model="row.userName" />
        </template>
        <template #default="{ row }">
          <vxe-icon name="user"></vxe-icon>
          <span>{{ row.userName }}</span>
        </template>
      </vxe-column>
      <vxe-column field="role" title="下拉表格" width="200" :edit-render="{autoFocus: 'input'}">
        <template #edit="{ row }">
          <RoleSelectPulldown v-model="row.role" />
        </template>
        <template #default="{ row }">
          <span>{{ row.role }}</span>
        </template>
      </vxe-column>
    </vxe-table>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import UserSelectPulldown from './UserSelectPulldown.vue'
import RoleSelectPulldown from './RoleSelectPulldown.vue'

interface RowVO {
  id: number
  name: string
  role: string
  userName: string
}

export default Vue.extend({
  components: {
    UserSelectPulldown,
    RoleSelectPulldown
  },
  data () {
    const tableData: RowVO[] = [
      { id: 10001, name: 'Test1', role: 'Develop', userName: 'test6' },
      { id: 10002, name: 'Test2', role: 'Test', userName: 'test1' },
      { id: 10003, name: 'Test3', role: 'PM', userName: 'test5' }
    ]

    return {
      tableData
    }
  }
})
</script>
