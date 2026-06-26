<template>
  <div>
    <vxe-button content="点击弹出1" @click="showPopup1 = true"></vxe-button>
    <vxe-drawer
      show-footer
      show-cancel-button
      show-confirm-button
      v-model="showPopup1"
      :width="600">
      <template #default>
        <div>{{ myConten1 }}显示内容</div>
      </template>
    </vxe-drawer>

    <vxe-button content="点击弹出2（预加载）" @click="showPopup2 = true"></vxe-button>
    <vxe-drawer
      show-footer
      show-cancel-button
      show-confirm-button
      preload
      v-model="showPopup2"
      :width="600">
      <template #default>
        <div>{{ myConten2 }}显示内容</div>
      </template>
    </vxe-drawer>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data () {
    return {
      showPopup1: false,
      showPopup2: false
    }
  },
  computed: {
    myConten1 () {
      console.log('加载弹窗内容1')
      return '加载弹窗内容1'
    },
    myConten2 () {
      console.log('加载弹窗内容2')
      return '加载弹窗内容2'
    }
  }
})
</script>
