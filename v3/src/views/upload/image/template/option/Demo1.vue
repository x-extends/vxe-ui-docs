<template>
  <div>
    <vxe-upload v-model="imgList" mode="image">
      <template #option="{ option }">
        <img :src="option.url" style="width: 100px;height: 100px;">
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
