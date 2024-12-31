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
      <div>手动调用窗口方法</div>
      <div>
        <vxe-button content="还原" @click="revertEvent"></vxe-button>
        <vxe-button content="最小化" @click="minEvent"></vxe-button>
        <vxe-button content="最大化" @click="maxEvent"></vxe-button>
      </div>
    </vxe-modal>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { VxeModalInstance } from 'vxe-pc-ui'

export default Vue.extend({
  data () {
    return {
      showPopup: false
    }
  },
  methods: {
    openEvent () {
      const $modal = this.$refs.modalRef as VxeModalInstance
      if ($modal) {
        $modal.open()
      }
    },
    closeEvent () {
      const $modal = this.$refs.modalRef as VxeModalInstance
      if ($modal) {
        $modal.close()
      }
    },
    revertEvent () {
      const $modal = this.$refs.modalRef as VxeModalInstance
      if ($modal) {
        $modal.revert()
      }
    },
    maxEvent () {
      const $modal = this.$refs.modalRef as VxeModalInstance
      if ($modal) {
        $modal.maximize()
      }
    },
    minEvent () {
      const $modal = this.$refs.modalRef as VxeModalInstance
      if ($modal) {
        $modal.minimize()
      }
    }
  }
})
</script>
