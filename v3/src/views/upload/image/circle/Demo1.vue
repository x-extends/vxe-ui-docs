<template>
  <div>
    <p>
      <vxe-upload v-model="imgList1" mode="image" :image-config="{width: 200, height: 200, circle: true}"></vxe-upload>
    </p>
    <p>
      <vxe-upload v-model="imgList1" mode="image" :show-button-text="false" :image-config="{width: 60, height: 60, circle: true}"></vxe-upload>
    </p>
    <p>
      <vxe-upload v-model="imgList1" mode="image" size="mini" :show-button-text="false" :image-config="{width: 30, height: 30, circle: true}"></vxe-upload>
    </p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data () {
    const imgList1 = [
      { name: 'avatar1.jpg', url: 'https://vxeui.com/resource/avatarImg/avatar1.jpeg' }
    ]

    return {
      imgList1
    }
  }
})
</script>
