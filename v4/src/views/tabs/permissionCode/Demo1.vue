<template>
  <div>
    <vxe-tabs v-model="selectTab" padding>
      <vxe-tab-pane title="标题1" name="1" permission-code="xxx">
        <template #default>内容1</template>
      </vxe-tab-pane>
      <vxe-tab-pane title="标题2" name="2" permission-code="xxx">
        <template #default>内容2</template>
      </vxe-tab-pane>
      <vxe-tab-pane title="标题3" name="3" permission-code="xxx">
        <template #default>内容3</template>
      </vxe-tab-pane>
    </vxe-tabs>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const selectTab = ref('1')
</script>
