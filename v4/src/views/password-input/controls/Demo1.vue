<template>
  <div>
    <vxe-form>
      <vxe-form-item>
        <vxe-input v-model="userName" placeholder="用户名"></vxe-input>
      </vxe-form-item>
      <vxe-form-item>
        <vxe-password-input v-model="val1" placeholder="隐藏控制按钮" :controls="false"></vxe-password-input>
      </vxe-form-item>
    </vxe-form>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const userName = ref('')
const val1 = ref('')
</script>
