<template>
  <div>
    <vxe-upload v-model="imgList" mode="image">
      <template #default>
        <vxe-button status="error">自定义插槽的按钮</vxe-button>
      </template>
    </vxe-upload>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data () {
    const imgList = [
      { name: 'fj577.jpg', url: 'https://vxeui.com/resource/img/fj577.jpg' }
    ]
    return {
      imgList
    }
  }
})
</script>
