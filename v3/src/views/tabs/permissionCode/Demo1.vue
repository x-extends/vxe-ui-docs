<template>
  <div>
    <vxe-tabs v-model="selectTab" padding>
      <vxe-tab-pane title="标题1" name="1" permission-code="xxx">内容1</vxe-tab-pane>
      <vxe-tab-pane title="标题2" name="2" permission-code="xxx">内容2</vxe-tab-pane>
      <vxe-tab-pane title="标题3" name="3" permission-code="xxx">内容3</vxe-tab-pane>
    </vxe-tabs>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data () {
    return {
      selectTab: '1'
    }
  }
})
</script>
