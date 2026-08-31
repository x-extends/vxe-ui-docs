<template>
  <div>
    <vxe-form>
      <vxe-form-item>
        <vxe-input v-model="userName" placeholder="用户名" float-content="手机号或邮箱" clearable></vxe-input>
      </vxe-form-item>
      <vxe-form-item>
        <vxe-password-input v-model="val1" placeholder="密码" float-content="6-12为字母或数字" clearable></vxe-password-input>
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
