<template>
  <div>
    <vxe-tabs v-model="selectTab" :height="140" padding>
      <vxe-tab-pane title="标题1" name="1">
        <div>内容1</div>
        <div>内容1</div>
        <div>内容1</div>
        <div>内容1</div>
        <div>内容1</div>
        <div>内容1</div>
      </vxe-tab-pane>
      <vxe-tab-pane title="标题2" name="2" preload>
        <div>无需激活页签，默认也会被预加载出来</div>
        <div>内容2</div>
        <div>内容2</div>
        <div>内容2</div>
        <div>内容2</div>
        <div>内容2</div>
      </vxe-tab-pane>
      <vxe-tab-pane title="标题3" name="3">
        <div>默认不会被加载，只有激活页签后才会被加载出来</div>
        <div>内容3</div>
        <div>内容3</div>
        <div>内容3</div>
        <div>内容3</div>
        <div>内容3</div>
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
