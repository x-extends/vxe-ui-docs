<template>
  <div>
    <vxe-image src="https://vxeui.com/resource/img/fj577.jpg" :get-thumbnail-url-method="getThumbnailUrlMethod" :width="100"></vxe-image>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  methods: {
    getThumbnailUrlMethod ({ url }) {
      // 返回对应预览图片的链接
      return `${url}?w=100&h=100`
    }
  }
})
</script>
