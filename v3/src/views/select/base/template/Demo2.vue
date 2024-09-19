<template>
  <div>
    <vxe-select v-model="val1" placeholder="自定义头部和底部" multiple clearable>
      <template #default>
        <vxe-option value="1" label="选项1"></vxe-option>
        <vxe-option value="2" label="选项2"></vxe-option>
        <vxe-option value="3" label="选项3"></vxe-option>
        <vxe-option value="4" label="选项4"></vxe-option>
        <vxe-option value="5" label="选项5"></vxe-option>
        <vxe-option value="6" label="选项6"></vxe-option>
        <vxe-option value="7" label="选项7"></vxe-option>
        <vxe-option value="8" label="选项8"></vxe-option>
      </template>

      <template #header>
        <vxe-button mode="text" status="primary">按钮1</vxe-button>
        <vxe-button mode="text" status="error">按钮2</vxe-button>
      </template>

      <template #option="{ option }">
        <div>-- {{ option.label }} --</div>
      </template>

      <template #footer>
        <vxe-button mode="text" status="primary">新增</vxe-button>
        <vxe-button mode="text" status="error">更多</vxe-button>
        <span>已选 {{ val1.length }} 条</span>
      </template>
    </vxe-select>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data () {
    return {
      val1: []
    }
  }
})
</script>
