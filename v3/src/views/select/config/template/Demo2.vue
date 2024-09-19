<template>
  <div>
    <vxe-select v-model="val1" placeholder="自定义插槽模板" :options="opts1" multiple clearable>
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
    const opts1 = [
      { label: '1111', value: '1' },
      { label: '2222', value: '2' },
      { label: '3333', value: '3' },
      { label: '4444', value: '4' },
      { label: '5555', value: '5' },
      { label: '6666', value: '6' },
      { label: '7777', value: '7' },
      { label: '8888', value: '8' }
    ]

    return {
      val1: [],
      opts1
    }
  }
})
</script>
