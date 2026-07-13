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

<script lang="ts" setup>
import { ref } from 'vue'

const userName = ref('')
const val1 = ref('')
const val2 = ref('')
const val3 = ref('')
const val4 = ref('')
const val5 = ref('')
const val6 = ref('')
</script>
