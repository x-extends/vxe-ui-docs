<template>
  <div>
    <p>
      <vxe-upload v-model="imgList1" mode="image" tip-text="自定义提示语"></vxe-upload>
    </p>
    <p>
      <vxe-upload v-model="imgList2" mode="image" multiple>
        <template #tip>
          <span>自定义插槽提示语</span>
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
      { name: 'fj573.jpeg', url: 'https://vxeui.com/resource/img/fj573.jpeg' },
      { name: 'fj562.png', url: 'https://vxeui.com/resource/img/fj562.png' },
      { name: 'fj187.jpg', url: 'https://vxeui.com/resource/img/fj187.jpg' }
    ]
    const imgList2 = [
      { name: 'fj573.jpeg', url: 'https://vxeui.com/resource/img/fj573.jpeg' },
      { name: 'fj562.png', url: 'https://vxeui.com/resource/img/fj562.png' },
      { name: 'fj187.jpg', url: 'https://vxeui.com/resource/img/fj187.jpg' }
    ]

    return {
      imgList1,
      imgList2
    }
  }
})
</script>
