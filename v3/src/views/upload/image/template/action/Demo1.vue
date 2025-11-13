<template>
  <div>
    <vxe-upload
      multiple
      show-progress
      mode="image"
      v-model="imgList">
      <template #action>
        <vxe-button mode="text" icon="vxe-icon-edit" status="primary"></vxe-button>
        <vxe-button mode="text" icon="vxe-icon-question-circle" status="error"></vxe-button>
      </template>
    </vxe-upload>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data () {
    const imgList = [
      { name: 'fj577.jpg', url: 'https://vxeui.com/resource/img/fj577.jpg' },
      { name: 'fj581.jpeg', url: 'https://vxeui.com/resource/img/fj581.jpeg' }
    ]
    return {
      imgList
    }
  }
})
</script>
