<template>
  <div>
    <div style="height: 200px;position: relative;">
      <vxe-loading v-model="loading">
        <template #default>
          <span>
            <img src="https://vxeui.com/resource/img/546.gif"/>
            <div>请稍后...</div>
          </span>
        </template>
      </vxe-loading>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data () {
    return {
      loading: true
    }
  }
})
</script>
