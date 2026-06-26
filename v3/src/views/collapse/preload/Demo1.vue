<template>
  <div>
    <vxe-collapse>
      <vxe-collapse-pane title="标题1" name="1">
        <template #default>
          {{ myCollapse1 }}这是一段内容内容1这是一段内容内容1这是一段内容内容1这是一段内容内容1这是一段内容内容1这是一段内容内容1这是一段内容内容1这是一段内容内容1这是一段内容内容1这是一段内容内容1这是一段内容内容1这是一段内容内容1这是一段内容内容1这是一段内容内容1这是一段内容内容1这是一段内容内容1这是一段内容内容1这是一段内容内容1这是一段内容内容1这是一段内容内容1这是一段内容内容1
        </template>
      </vxe-collapse-pane>
      <vxe-collapse-pane title="标题2" name="2">
        <template #default>
          {{ myCollapse2 }}这是一段内容内容2这是一段内容内容2
        </template>
      </vxe-collapse-pane>
      <vxe-collapse-pane title="标题3（预加载）" name="3" preload>
        <template #default>
          {{ myCollapse3 }}这是一段内容内容3这是一段内容内容3这是一段内容内容3这是一段内容内容3这是一段内容内容3这是一段内容内容3
        </template>
      </vxe-collapse-pane>
      <vxe-collapse-pane title="标题4" name="4">
        <template #default>
          {{ myCollapse4 }}这是一段内容内容4这是一段内容内容4这是一段内容内容4这是一段内容内容4这是一段内容内容4这是一段内容内容4这是一段内容内容4这是一段内容内容4这是一段内容内容4这是一段内容内容4这是一段内容内容4这是一段内容内容4这是一段内容内容4这是一段内容内容4
        </template>
      </vxe-collapse-pane>
      <vxe-collapse-pane title="标题5" name="5">
        <template #default>
          {{ myCollapse5 }}这是一段内容内容5这是一段内容内容5这是一段内容内容5这是一段内容内容5这是一段内容内容5这是一段内容内容5这是一段内容内容5这是一段内容内容5这是一段内容内容5
        </template>
      </vxe-collapse-pane>
    </vxe-collapse>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data () {
    return {}
  },
  computed: {
    myCollapse1 () {
      console.log('加载面板1')
      return '加载面板1'
    },
    myCollapse2 () {
      console.log('加载面板2')
      return '加载面板2'
    },
    myCollapse3 () {
      console.log('加载面板3')
      return '加载面板3'
    },
    myCollapse4 () {
      console.log('加载面板4')
      return '加载面板4'
    },
    myCollapse5 () {
      console.log('加载面板5')
      return '加载面板5'
    }
  }
})
</script>
