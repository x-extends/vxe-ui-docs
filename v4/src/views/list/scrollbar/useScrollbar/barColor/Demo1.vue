<template>
  <div>
    轨道背景色：<vxe-color-picker v-model="trackBgColor" :colors="colorList" show-eye-dropper clearable></vxe-color-picker>
    滑块背景色：<vxe-color-picker v-model="thumbBgColor" :colors="colorList" show-eye-dropper></vxe-color-picker>

    <vxe-list
      v-bind="listOptions"
      :style="{
        '--vxe-ui-scrollbar-track-background-color': trackBgColor,
        '--vxe-ui-scrollbar-thumb-background-color': thumbBgColor,
        '--vxe-ui-scrollbar-thumb-hover-background-color': thumbHoverBgColor,
        '--vxe-ui-scrollbar-thumb-active-background-color': thumbActiveBgColor
      }"
    >
      <template #default="{ items }">
        <div class="my-list-wrapper">
          <div v-for="(row, i) in items" :key="i" class="my-list-item">
            <div>{{ row.label }}</div>
          </div>
        </div>
      </template>
    </vxe-list>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive, computed } from 'vue'
import { VxeUI, VxeListProps } from 'vxe-pc-ui'

interface RowVO {
  id: string
  label: string
}

const listOptions = reactive<VxeListProps<RowVO>>({
  height: 400,
  useScrollbar: true,
  rowConfig: {
    contentField: 'label'
  },
  virtualYConfig: {
    enabled: true
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

const trackBgColor = ref('transparent')
const thumbBgColor = ref('#00BFFF')
const thumbHoverBgColor = computed(() => VxeUI.color.darken(thumbBgColor.value, 5))
const thumbActiveBgColor = computed(() => VxeUI.color.darken(thumbBgColor.value, 10))

const colorList = ref([
  '#DC143C', '#FF1493', '#FF00FF', '#9932CC', '#6A5ACD',
  '#0000FF', '#00008B', '#778899', '#1E90FF', '#00BFFF',
  '#5F9EA0', '#00FFFF', '#008080', '#7FFFAA', '#3CB371',
  '#8FBC8F', '#008000', '#7CFC00', '#556B2F', '#FFFFE0',
  '#FFFF00', '#808000', '#EEE8AA', '#FFD700', '#FFA500',
  '#FF4500', '#FA8072', '#FF0000', '#800000', '#C0C0C0'
])
</script>

<style lang="scss" scoped>
.my-list-item {
  width: 4000px;
}
</style>
