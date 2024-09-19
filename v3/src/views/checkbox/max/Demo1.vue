<template>
  <div>
    <p>
      <vxe-checkbox-group v-model="valGroup1" :max="2">
        <vxe-checkbox label="1" content="HTML"></vxe-checkbox>
        <vxe-checkbox label="2" content="CSS"></vxe-checkbox>
        <vxe-checkbox label="3" content="Javascript"></vxe-checkbox>
        <vxe-checkbox label="4" content="SASS"></vxe-checkbox>
        <vxe-checkbox label="5" content="LESS"></vxe-checkbox>
      </vxe-checkbox-group>
    </p>
    <p>
      <vxe-checkbox-group v-model="valGroup2" :max="2" disabled>
        <vxe-checkbox label="1" content="HTML"></vxe-checkbox>
        <vxe-checkbox label="2" content="CSS"></vxe-checkbox>
        <vxe-checkbox label="3" content="Javascript"></vxe-checkbox>
        <vxe-checkbox label="4" content="SASS"></vxe-checkbox>
        <vxe-checkbox label="5" content="LESS"></vxe-checkbox>
      </vxe-checkbox-group>
    </p>
    <p>
      <vxe-checkbox-group v-model="valGroup3" :max="2">
        <vxe-checkbox label="1" content="HTML"></vxe-checkbox>
        <vxe-checkbox label="2" content="CSS" disabled></vxe-checkbox>
        <vxe-checkbox label="3" content="Javascript"></vxe-checkbox>
        <vxe-checkbox label="4" content="SASS" disabled></vxe-checkbox>
        <vxe-checkbox label="5" content="LESS"></vxe-checkbox>
      </vxe-checkbox-group>
    </p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data () {
    const valGroup1: string[] = []
    const valGroup2 = ['2', '4']
    const valGroup3 = ['2']

    return {
      valGroup1,
      valGroup2,
      valGroup3
    }
  }
})
</script>
