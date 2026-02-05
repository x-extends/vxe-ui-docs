<template>
  <div>
    <div>
      <vxe-input v-model="val1">
        <template #suffix>
          <span>Http://</span>
        </template>
      </vxe-input>
    </div>

    <div>
      <vxe-input v-model="val2">
        <template #suffix>
          <vxe-switch v-model="val3"></vxe-switch>
        </template>
      </vxe-input>
    </div>

    <div>
    <vxe-input v-model="val4">
      <template #suffix>
        <vxe-button statys="primary">搜索</vxe-button>
      </template>
    </vxe-input>
    </div>

    <div>
      <vxe-input v-model="val5">
        <template #suffix>
          <vxe-icon name="add-user"></vxe-icon>
        </template>
      </vxe-input>
    </div>

    <div>
      <vxe-input v-model="val6">
        <template #suffix>
          <span>KG</span>
        </template>
      </vxe-input>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const val1 = ref('')
const val2 = ref('')
const val3 = ref(false)
const val4 = ref('')
const val5 = ref('')
const val6 = ref('')
</script>
