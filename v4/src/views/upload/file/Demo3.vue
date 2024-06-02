<template>
  <div>
    <p>
      <vxe-upload v-model="fileList1" multiple hint-text="自定义提示语"></vxe-upload>
    </p>
    <p>
      <vxe-upload v-model="fileList2" multiple>
        <template #hint>
          <span>自定义插槽提示语</span>
        </template>
      </vxe-upload>
    </p>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const fileList1 = ref([
  { name: 'fj573.jpeg', url: 'https://vxeui.com/resource/img/fj573.jpeg' },
  { name: 'fj562.png', url: 'https://vxeui.com/resource/img/fj562.png' },
  { name: 'fj187.jpg', url: 'https://vxeui.com/resource/img/fj187.jpg' }
])
const fileList2 = ref([
  { name: 'fj573.jpeg', url: 'https://vxeui.com/resource/img/fj573.jpeg' },
  { name: 'fj562.png', url: 'https://vxeui.com/resource/img/fj562.png' },
  { name: 'fj187.jpg', url: 'https://vxeui.com/resource/img/fj187.jpg' }
])
</script>
