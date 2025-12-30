<template>
  <div>
    <vxe-form>
      <vxe-form-item>
        <vxe-input v-model="userName" placeholder="用户名"></vxe-input>
      </vxe-form-item>
      <vxe-form-item>
        <vxe-password-input v-model="val1" placeholder="可清除" clearable></vxe-password-input>
      </vxe-form-item>
    </vxe-form>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data () {
    return {
      userName: '',
      val1: ''
    }
  }
})
</script>
