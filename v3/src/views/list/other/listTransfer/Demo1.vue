<template>
  <div>
    <vxe-button status="success" @click="resultEvent1">获取数据1</vxe-button>
    <vxe-button status="success" @click="resultEvent2">获取数据2</vxe-button>
    <div class="my-list-transfer">
      <div class="my-list-transfer-left">
        <vxe-list ref="listRef1" v-bind="listOptions1"></vxe-list>
      </div>
      <div class="my-list-transfer-handle">
        <vxe-button class="my-list-transfer-btn" status="primary" icon="vxe-icon-arrow-double-right" style="width: 100%;" @click="addEvent"></vxe-button>
        <vxe-button class="my-list-transfer-btn" status="error" icon="vxe-icon-arrow-double-left" style="width: 100%;" @click="delEvent"></vxe-button>
      </div>
      <div class="my-list-transfer-right">
        <vxe-list ref="listRef2" v-bind="listOptions2"></vxe-list>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { VxeUI, VxeListProps, VxeListInstance } from 'vxe-pc-ui'

interface RowVO {
  id: string
  label: string
}

export default Vue.extend({
  data () {
    const listOptions1: VxeListProps<RowVO> = {
      height: '100%',
      showCheckbox: true,
      rowConfig: {
        keyField: 'id'
      },
      dragConfig: {
        isCrossListDrag: true
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
    }

    const listOptions2: VxeListProps<RowVO> = {
      height: '100%',
      showCheckbox: true,
      rowConfig: {
        keyField: 'id'
      },
      dragConfig: {
        isCrossListDrag: true
      },
      data: []
    }

    return {
      listOptions1,
      listOptions2
    }
  },
  methods: {
    addEvent () {
      const $list1 = this.$refs.listRef1 as VxeListInstance<RowVO>
      const $list2 = this.$refs.listRef2 as VxeListInstance<RowVO>
      if ($list1 && $list2) {
        const selectRecords = $list1.getCheckboxRecords()
        if (selectRecords.length) {
          $list1.clearCheckboxRow()
          $list1.remove(selectRecords)
          $list2.insertAt(selectRecords, -1)
        } else {
          VxeUI.modal.message({
            content: '请勾选左侧数据',
            status: 'warning'
          })
        }
      }
    },
    delEvent () {
      const $list1 = this.$refs.listRef1 as VxeListInstance<RowVO>
      const $list2 = this.$refs.listRef2 as VxeListInstance<RowVO>
      if ($list1 && $list2) {
        const selectRecords = $list2.getCheckboxRecords()
        if (selectRecords.length) {
          $list2.clearCheckboxRow()
          $list2.remove(selectRecords)
          $list1.insertAt(selectRecords, -1)
        } else {
          VxeUI.modal.message({
            content: '请勾选右侧数据',
            status: 'warning'
          })
        }
      }
    },
    resultEvent1 () {
      const $list1 = this.$refs.listRef1 as VxeListInstance<RowVO>
      if ($list1) {
        const { insertRecords, removeRecords } = $list1.getRecordset()
        const listData = $list1.getFullData()
        VxeUI.modal.message({
          content: `新增：${insertRecords.length} 删除：${removeRecords.length} 现有：${listData.length}`,
          status: 'success'
        })
      }
    },
    resultEvent2 () {
      const $list2 = this.$refs.listRef2 as VxeListInstance<RowVO>
      if ($list2) {
        const { insertRecords, removeRecords } = $list2.getRecordset()
        const listData = $list2.getFullData()
        VxeUI.modal.message({
          content: `新增：${insertRecords.length} 删除：${removeRecords.length} 现有：${listData.length}`,
          status: 'success'
        })
      }
    }
  }
})
</script>

<style lang="scss" scoped>
.my-list-transfer {
  display: flex;
  height: 400px;
  overflow: hidden;
}
.my-list-transfer-handle {
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-shrink: 0;
  padding: 0 5px;
  width: 50px;
}
.my-list-transfer-btn {
  margin: 2px 0;
}
.my-list-transfer-left,
.my-list-transfer-right {
  width: 50%;
  padding: 8px;
  border-radius: 4px;
  border: 1px solid #999999;
  overflow: hidden;
}
</style>
