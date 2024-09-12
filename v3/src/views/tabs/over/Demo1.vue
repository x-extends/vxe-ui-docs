<template>
  <div>
    <vxe-tabs v-model="selectTab" :options="tabList"></vxe-tabs>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { VxeTabsPropTypes } from 'vxe-pc-ui'

export default Vue.extend({
  data () {
    const tabList: VxeTabsPropTypes.Options = [
      { name: '1', title: '标题1标题1标题1' },
      { name: '2', title: '标题2' },
      { name: '3', title: '标题3标题3标题3' },
      { name: '4', title: '标题4标题4' },
      { name: '5', title: '标题5标题5标题5' },
      { name: '6', title: '标题6标题6标题6标题6标题6标题6' },
      { name: '7', title: '标题7标题7标题7' },
      { name: '8', title: '标题8标题8' },
      { name: '9', title: '标题9标题9标题9' },
      { name: '10', title: '标题10标题10标题10标题10' },
      { name: '11', title: '标题11标题11标题11' },
      { name: '12', title: '标题12标' },
      { name: '13', title: '标题13标题13标题13' },
      { name: '14', title: '标题14标题14' },
      { name: '15', title: '标题15标题15标题15' },
      { name: '16', title: '标题16标题16标题16标题16' }
    ]

    return {
      selectTab: '1',
      tabList
    }
  }
})
</script>
