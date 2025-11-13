<template>
  <div>
    <p>
      <vxe-upload v-model="fileList1"></vxe-upload>
    </p>
    <p>
      <vxe-upload v-model="fileList2">
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
    const fileList1 = [
      { name: 'fj577.jpg', url: 'https://vxeui.com/resource/img/fj577.jpg' }
    ]

    const fileList2 = [
      { name: 'fj577.jpg', url: 'https://vxeui.com/resource/img/fj577.jpg' }
    ]
    return {
      fileList1,
      fileList2
    }
  }
})
</script>
