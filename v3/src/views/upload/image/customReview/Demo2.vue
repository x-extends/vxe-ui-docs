<template>
  <div>
    <vxe-upload v-model="imgList" mode="image" :preview-method="previewMethod"></vxe-upload>

    <vxe-modal v-model="showPopup" title="预览" width="400" height="440" resize>
      <template #default>
        <img v-if="selectImg" :src="selectImg" style="width: 100%;height: 100%;" />
      </template>
    </vxe-modal>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data () {
    const imgList = [
      { name: 'avatar1.jpg', url: 'https://vxeui.com/resource/avatarImg/avatar1.jpeg' }
    ]
    const showPopup = false
    const selectImg = ''

    return {
      imgList,
      showPopup,
      selectImg
    }
  },
  methods: {
    previewMethod ({ option }) {
      return new Promise<void>((resolve) => {
        this.showPopup = true
        this.selectImg = option.url
        resolve()
      })
    }
  }
})
</script>
