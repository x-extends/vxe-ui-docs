<template>
  <div>
    <vxe-button content="打开窗口" @click="openEvent"></vxe-button>
    <vxe-button content="关闭窗口" @click="closeEvent"></vxe-button>

    <vxe-modal
      ref="modalRef"
      :width="600"
      :height="400"
      :mask="false"
      :lock-view="false"
      resize
      show-maximize
      show-minimize>
      <template #default>
        <div>手动调用窗口方法</div>
        <div>
          <vxe-button content="还原" @click="revertEvent"></vxe-button>
          <vxe-button content="最小化" @click="minEvent"></vxe-button>
          <vxe-button content="最大化" @click="maxEvent"></vxe-button>
        </div>
      </template>
    </vxe-modal>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { VxeModalInstance } from 'vxe-pc-ui'

const modalRef = ref<VxeModalInstance>()

const openEvent = () => {
  const $modal = modalRef.value
  if ($modal) {
    $modal.open()
  }
}

const closeEvent = () => {
  const $modal = modalRef.value
  if ($modal) {
    $modal.close()
  }
}

const revertEvent = () => {
  const $modal = modalRef.value
  if ($modal) {
    $modal.revert()
  }
}

const maxEvent = () => {
  const $modal = modalRef.value
  if ($modal) {
    $modal.maximize()
  }
}

const minEvent = () => {
  const $modal = modalRef.value
  if ($modal) {
    $modal.minimize()
  }
}
</script>
