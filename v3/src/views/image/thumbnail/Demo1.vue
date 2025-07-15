<template>
  <div>
    <vxe-image :src="imgUrl" :get-thumbnail-url-method="getThumbnailUrlMethod" :width="100"></vxe-image>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data () {
    const imgUrl = 'https://vxeui.com/resource/img/fj577.jpg'

    return {
      imgUrl
    }
  },
  methods: {
    getThumbnailUrlMethod ({ url }) {
      // 返回对应预览图片的链接
      return url ? `${url}?w=100&h=100` : url
    }
  }
})
</script>
