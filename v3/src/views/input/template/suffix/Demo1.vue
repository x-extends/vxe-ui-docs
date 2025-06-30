<template>
  <div>
    <div>
      <vxe-input v-model="val1">
        <template #suffix>
          <span>Http://</span>
        </template>
      </vxe-input>
    </div>

    <div>
      <vxe-input v-model="val2">
        <template #suffix>
          <vxe-switch v-model="val3"></vxe-switch>
        </template>
      </vxe-input>
    </div>

    <div>
    <vxe-input v-model="val4">
      <template #suffix>
        <vxe-button statys="primary">搜索</vxe-button>
      </template>
    </vxe-input>
    </div>

    <div>
      <vxe-input v-model="val5">
        <template #suffix>
          <vxe-icon name="add-user"></vxe-icon>
        </template>
      </vxe-input>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data () {
    return {
      val1: '',
      val2: '',
      val3: false,
      val4: '',
      val5: ''
    }
  }
})
</script>
