<template>
  <div>
    <vxe-pulldown v-model="showPull">
      <template #default>
        <vxe-button mode="text" icon="vxe-icon-arrow-down" @click="toggleEvent">下拉菜单</vxe-button>
      </template>
      <template #dropdown>
        <div>
          <vxe-link class="my-dropdown-link" @click="clickEvent(1)">菜单1</vxe-link>
          <vxe-link class="my-dropdown-link" @click="clickEvent(2)">菜单2</vxe-link>
          <vxe-link class="my-dropdown-link" @click="clickEvent(3)">菜单3</vxe-link>
          <vxe-link class="my-dropdown-link" @click="clickEvent(4)">菜单4</vxe-link>
          <vxe-link class="my-dropdown-link" @click="clickEvent(5)">菜单5</vxe-link>
        </div>
      </template>
    </vxe-pulldown>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const showPull = ref(false)

const toggleEvent = () => {
  showPull.value = !showPull.value
}

const clickEvent = (num: number) => {
  showPull.value = false
  console.log(num)
}
</script>

<style lang="scss" scoped>
.my-dropdown-link {
  display: block;
  text-align: center;
  line-height: 28px;
}
</style>
