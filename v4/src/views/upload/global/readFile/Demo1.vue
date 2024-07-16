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

<script lang="ts" setup>
import { VxeUI } from 'vxe-pc-ui'

const readFile1Event = () => {
  VxeUI.readFile().then(({ file }) => {
    console.log(file)
  })
}

const readFile21Event = () => {
  VxeUI.readFile({
    multiple: true
  }).then(({ files }) => {
    console.log(files)
  })
}
</script>
