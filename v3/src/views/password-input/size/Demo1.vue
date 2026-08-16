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

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data () {
    return {
      name1: 'test1',
      pawd1: 'abc123456',
      name2: 'test2',
      pawd2: 'abc123456',
      name3: 'test3',
      pawd3: 'abc123456',
      name4: 'test4',
      pawd4: 'abc123456',
      name5: 'test5',
      pawd5: 'abc123456',
      name6: 'test6',
      pawd6: 'abc123456'
    }
  }
})
</script>
