<template>
  <div>
    <vxe-pulldown v-model="showPull" popup-class-name="dropdown-popup-tmpl">
      <template #default>
        <vxe-button mode="text" icon="vxe-icon-arrow-down" @click="toggleEvent">下拉菜单</vxe-button>
      </template>

      <template #header>
        <div>头部</div>
      </template>

      <template #dropdown>
        <div class="dropdown-body-tmpl">
          <div>内容1</div>
          <div>内容2</div>
          <div>内容3</div>
          <div>内容4</div>
          <div>内容5</div>
          <div>内容6</div>
          <div>内容7</div>
          <div>内容8</div>
        </div>
      </template>

      <template #footer>
        <div>尾部</div>
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

const hideEvent = () => {
  showPull.value = false
}
</script>

<style lang="scss">
.dropdown-popup-tmpl {
  background-color: #fff;
  box-shadow: 0 0 6px 2px rgba(0, 0, 0, 0.1);
}
.dropdown-body-tmpl {
  height: 120px;
  width: 240px;
  overflow: auto;
}
</style>
