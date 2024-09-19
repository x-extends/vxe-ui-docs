<template>
  <div>
    <vxe-checkbox-group v-model="valGroup1">
      <vxe-checkbox label="1" content="HTML"></vxe-checkbox>
      <vxe-checkbox label="2" content="CSS"></vxe-checkbox>
      <vxe-checkbox label="3" content="Javascript"></vxe-checkbox>
      <vxe-checkbox label="4" content="SASS"></vxe-checkbox>
      <vxe-checkbox label="5" content="LESS"></vxe-checkbox>
    </vxe-checkbox-group>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data () {
    const valGroup1: string[] = []

    return {
      valGroup1
    }
  }
})
</script>
