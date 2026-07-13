<template>
  <div>
    <vxe-form>
      <vxe-form-item>
        <vxe-input v-model="userName" size="xlarge" placeholder="用户名"></vxe-input>
      </vxe-form-item>
      <vxe-form-item>
        <vxe-password-input v-model="val1" size="xlarge" placeholder="特大尺寸"></vxe-password-input>
      </vxe-form-item>
    </vxe-form>

    <vxe-form>
      <vxe-form-item>
        <vxe-input v-model="userName" size="large" placeholder="用户名"></vxe-input>
      </vxe-form-item>
      <vxe-form-item>
        <vxe-password-input v-model="val2" size="large" placeholder="大型尺寸"></vxe-password-input>
      </vxe-form-item>
    </vxe-form>

    <vxe-form>
      <vxe-form-item>
        <vxe-input v-model="userName" placeholder="用户名"></vxe-input>
      </vxe-form-item>
      <vxe-form-item>
        <vxe-password-input v-model="val3" placeholder="默认尺寸"></vxe-password-input>
      </vxe-form-item>
    </vxe-form>

    <vxe-form>
      <vxe-form-item>
        <vxe-input v-model="userName" size="medium" placeholder="用户名"></vxe-input>
      </vxe-form-item>
      <vxe-form-item>
        <vxe-password-input v-model="val4" size="medium" placeholder="中等尺寸"></vxe-password-input>
      </vxe-form-item>
    </vxe-form>

    <vxe-form>
      <vxe-form-item>
        <vxe-input v-model="userName" size="small" placeholder="用户名"></vxe-input>
      </vxe-form-item>
      <vxe-form-item>
        <vxe-password-input v-model="val5" size="small" placeholder="小型尺寸"></vxe-password-input>
      </vxe-form-item>
    </vxe-form>

    <vxe-form>
      <vxe-form-item>
        <vxe-input v-model="userName" size="mini" placeholder="用户名"></vxe-input>
      </vxe-form-item>
      <vxe-form-item>
        <vxe-password-input v-model="val6" size="mini" placeholder="超小尺寸"></vxe-password-input>
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
      val1: '',
      val2: '',
      val3: '',
      val4: '',
      val5: '',
      val6: ''
    }
  }
})
</script>
