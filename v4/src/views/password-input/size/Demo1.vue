<template>
  <div>
    <vxe-form>
      <vxe-form-item>
        <vxe-input v-model="name1" size="xlarge" placeholder="用户名"></vxe-input>
      </vxe-form-item>
      <vxe-form-item>
        <vxe-password-input v-model="pawd1" size="xlarge" placeholder="特大尺寸"></vxe-password-input>
      </vxe-form-item>
    </vxe-form>

    <vxe-form>
      <vxe-form-item>
        <vxe-input v-model="name2" size="large" placeholder="用户名"></vxe-input>
      </vxe-form-item>
      <vxe-form-item>
        <vxe-password-input v-model="pawd2" size="large" placeholder="大型尺寸"></vxe-password-input>
      </vxe-form-item>
    </vxe-form>

    <vxe-form>
      <vxe-form-item>
        <vxe-input v-model="name3" placeholder="用户名"></vxe-input>
      </vxe-form-item>
      <vxe-form-item>
        <vxe-password-input v-model="pawd3" placeholder="默认尺寸"></vxe-password-input>
      </vxe-form-item>
    </vxe-form>

    <vxe-form>
      <vxe-form-item>
        <vxe-input v-model="name4" size="medium" placeholder="用户名"></vxe-input>
      </vxe-form-item>
      <vxe-form-item>
        <vxe-password-input v-model="pawd4" size="medium" placeholder="中等尺寸"></vxe-password-input>
      </vxe-form-item>
    </vxe-form>

    <vxe-form>
      <vxe-form-item>
        <vxe-input v-model="name5" size="small" placeholder="用户名"></vxe-input>
      </vxe-form-item>
      <vxe-form-item>
        <vxe-password-input v-model="pawd5" size="small" placeholder="小型尺寸"></vxe-password-input>
      </vxe-form-item>
    </vxe-form>

    <vxe-form>
      <vxe-form-item>
        <vxe-input v-model="name6" size="mini" placeholder="用户名"></vxe-input>
      </vxe-form-item>
      <vxe-form-item>
        <vxe-password-input v-model="pawd6" size="mini" placeholder="超小尺寸"></vxe-password-input>
      </vxe-form-item>
    </vxe-form>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const name1 = ref('test1')
const pawd1 = ref('abc123456')

const name2 = ref('test2')
const pawd2 = ref('abc123456')

const name3 = ref('test3')
const pawd3 = ref('abc123456')

const name4 = ref('test4')
const pawd4 = ref('abc123456')

const name5 = ref('test5')
const pawd5 = ref('abc123456')

const name6 = ref('test6')
const pawd6 = ref('abc123456')
</script>
