<template>
  <div>
    <vxe-collapse v-model="vals" padding>
      <vxe-collapse-pane title="标题1" name="1">
        <template #default>
          这是一段内容内容1这是一段内容内容1这是一段内容内容1这是一段内容内容1这是一段内容内容1这是一段内容内容1这是一段内容内容1这是一段内容内容1这是一段内容内容1这是一段内容内容1这是一段内容内容1这是一段内容内容1这是一段内容内容1这是一段内容内容1这是一段内容内容1这是一段内容内容1这是一段内容内容1这是一段内容内容1这是一段内容内容1这是一段内容内容1这是一段内容内容1
        </template>
      </vxe-collapse-pane>
      <vxe-collapse-pane title="标题2" name="2">
        <template #default>
          这是一段内容内容2这是一段内容内容2
        </template>
      </vxe-collapse-pane>
      <vxe-collapse-pane title="标题3" name="3">
        <template #default>
          这是一段内容内容3这是一段内容内容3这是一段内容内容3这是一段内容内容3这是一段内容内容3这是一段内容内容3
        </template>
      </vxe-collapse-pane>
      <vxe-collapse-pane title="标题4" name="4">
        <template #default>
          这是一段内容内容4这是一段内容内容4这是一段内容内容4这是一段内容内容4这是一段内容内容4这是一段内容内容4这是一段内容内容4这是一段内容内容4这是一段内容内容4这是一段内容内容4这是一段内容内容4这是一段内容内容4这是一段内容内容4这是一段内容内容4
        </template>
      </vxe-collapse-pane>
      <vxe-collapse-pane title="标题5" name="5">
        <template #default>
          这是一段内容内容5这是一段内容内容5这是一段内容内容5这是一段内容内容5这是一段内容内容5这是一段内容内容5这是一段内容内容5这是一段内容内容5这是一段内容内容5
        </template>
      </vxe-collapse-pane>
    </vxe-collapse>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data () {
    return {
      vals: []
    }
  }
})
</script>
