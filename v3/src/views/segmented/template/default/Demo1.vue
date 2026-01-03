<template>
  <div>
    <vxe-segmented v-model="val1" :options="optList">
      <template #default="{ option }">
        <div style="padding: 8px;">
          <div>
            <vxe-icon :name="option.iconName"></vxe-icon>
          </div>
          <div>{{ option.label }}</div>
        </div>
      </template>
    </vxe-segmented>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data () {
    const val1 = '1'
    const optList = [
      { label: '选项1', value: '1', iconName: 'home' },
      { label: '选项2', value: '2', iconName: 'bell-fill' },
      { label: '选项3', value: '3', iconName: 'company' },
      { label: '选项4', value: '4', iconName: 'goods-fill' },
      { label: '选项5', value: '5', iconName: 'location-fill' },
      { label: '选项6', value: '6', iconName: 'platform' },
      { label: '选项7', value: '7', iconName: 'user-fill' }
    ]

    return {
      val1,
      optList
    }
  }
})
</script>
