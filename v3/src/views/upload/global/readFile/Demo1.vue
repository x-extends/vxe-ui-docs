<template>
  <div>
    <p>
      <vxe-button @click="readFile1Event">读取文件</vxe-button>
    </p>
    <p>
      <vxe-button @click="readFile21Event">读取多文件</vxe-button>
    </p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { VxeUI } from 'vxe-pc-ui'

export default Vue.extend({
  methods: {
    readFile1Event () {
      VxeUI.readFile().then(({ file }) => {
        console.log(file)
      })
    },
    readFile21Event () {
      VxeUI.readFile({
        multiple: true
      }).then(({ files }) => {
        console.log(files)
      })
    }
  }
})
</script>
