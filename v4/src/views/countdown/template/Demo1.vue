<template>
  <div>
    <vxe-countdown v-model="val1">
      <template #default="{ diffConf }">
        <span class="my-countdown">
          <span>还剩余：</span>
          <span class="my-countdown-num">{{ diffConf.HH }}</span>
          <span>时</span>
          <span class="my-countdown-num">{{ diffConf.mm }}</span>
          <span>分</span>
          <span class="my-countdown-num">{{ diffConf.ss }}</span>
          <span>秒</span>
          <span>，完成状态：{{ diffConf.done }}</span>
        </span>
      </template>
    </vxe-countdown>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const val1 = ref(30000)
</script>

<style lang="scss" scoped>
.my-countdown-num {
  padding: 0 6px;
  margin: 0 2px;
  font-size: 20px;
  line-height: 30px;
  background-color: #f4f4f4;
}
</style>
