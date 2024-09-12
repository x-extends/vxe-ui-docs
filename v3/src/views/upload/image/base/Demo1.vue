<template>
  <div>
    <p>
      <vxe-upload v-model="imgList1" mode="image"></vxe-upload>
    </p>
    <p>
      <vxe-upload v-model="imgList2" mode="image">
        <template #default>
          <vxe-button>自定义插槽的按钮</vxe-button>
        </template>
      </vxe-upload>
    </p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data () {
    const imgList1 = [
      { name: 'fj577.jpg', url: 'https://vxeui.com/resource/img/fj577.jpg' },
      { name: 'fj581.jpeg', url: 'https://vxeui.com/resource/img/fj581.jpeg' }
    ]
    const imgList2 = [
      { name: 'fj577.jpg', url: 'https://vxeui.com/resource/img/fj577.jpg' },
      { name: 'fj581.jpeg', url: 'https://vxeui.com/resource/img/fj581.jpeg' }
    ]

    return {
      imgList1,
      imgList2
    }
  }
})
</script>
