<template>
  <div v-if="currOption" class="my-filter-input">
    <vxe-input mode="text" v-model="currOption.data" placeholder="支持回车筛选" @keyup="keyupEvent" @input="changeOptionEvent"></vxe-input>
  </div>
</template>

<script lang="ts" setup>
import { watch, PropType, ref } from 'vue'
import type { VxeGlobalRendererHandles, VxeInputEvents } from 'vxe-pc-ui'
import type { VxeTableDefines } from 'vxe-table'

const props = defineProps({
  renderParams: {
    type: Object as PropType<VxeGlobalRendererHandles.RenderTableFilterParams>,
    default: () => ({})
  }
})

const currOption = ref<VxeTableDefines.FilterOption>()

const load = () => {
  const { renderParams } = props
  if (renderParams) {
    const { column } = renderParams
    const option = column.filters[0]
    currOption.value = option
  }
}

const changeOptionEvent = () => {
  const { renderParams } = props
  const option = currOption.value
  if (renderParams && option) {
    const { $table } = renderParams
    const checked = !!option.data
    $table.updateFilterOptionStatus(option, checked)
  }
}

const keyupEvent: VxeInputEvents.Keyup = ({ $event }) => {
  const { renderParams } = props
  if (renderParams) {
    const { $table } = renderParams
    if ($event.key === 'Enter') {
      $table.saveFilterPanel()
    }
  }
}

watch(() => {
  const { column } = props.renderParams || {}
  return column
}, load)

load()
</script>

<style scoped>
.my-filter-input {
  padding: 10px;
}
</style>
