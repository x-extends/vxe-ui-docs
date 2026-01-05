<template>
  <div>
    <vxe-tabs v-model="selectTab" type="round-card" :height="140" padding>
      <vxe-tab-pane title="标题1" name="1">
        <template #default>
          <div>内容1</div>
          <div>内容1</div>
          <div>内容1</div>
          <div>内容1</div>
          <div>内容1</div>
          <div>内容1</div>
        </template>
      </vxe-tab-pane>
      <vxe-tab-pane title="标题2" name="2">
        <template #default>
          <div>内容2</div>
          <div>内容2</div>
          <div>内容2</div>
          <div>内容2</div>
          <div>内容2</div>
          <div>内容2</div>
        </template>
      </vxe-tab-pane>
      <vxe-tab-pane title="标题3" name="3">
        <template #default>
          <div>内容3</div>
          <div>内容3</div>
          <div>内容3</div>
          <div>内容3</div>
          <div>内容3</div>
          <div>内容3</div>
        </template>
      </vxe-tab-pane>
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
