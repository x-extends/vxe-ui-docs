<template>
  <div>
    <div>
      <vxe-input v-model="val1">
        <template #prefix>
          <span>Http://</span>
        </template>
      </vxe-input>
    </div>

    <div>
      <vxe-input v-model="val2">
        <template #prefix>
          <vxe-switch v-model="val3"></vxe-switch>
        </template>
      </vxe-input>
    </div>

    <div>
    <vxe-input v-model="val4">
      <template #prefix>
        <vxe-button statys="primary">搜索</vxe-button>
      </template>
    </vxe-input>
    </div>

    <div>
      <vxe-input v-model="val5">
        <template #prefix>
          <vxe-icon name="add-user"></vxe-icon>
        </template>
      </vxe-input>
    </div>

    <div>
      <vxe-input v-model="val6">
        <template #prefix>
          <span>￥</span>
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
      val5: '',
      val6: ''
    }
  }
})
</script>
