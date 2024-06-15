<template>
  <div>
    <div class="row-wrapper">
      <vxe-button status="primary" @click="clickEvent">获取json</vxe-button>
      <vxe-list-design ref="listDesignRef" :height="800" show-mobile />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { VxeListDesignInstance } from 'vxe-pc-ui'

const listDesignRef = ref<VxeListDesignInstance>()

const clickEvent = () => {
  const $listDesign = listDesignRef.value
  if ($listDesign) {
    console.log($listDesign.getConfig())
  }
}
</script>
