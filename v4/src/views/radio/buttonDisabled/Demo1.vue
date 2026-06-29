<template>
  <div>
    <vxe-radio-group v-model="val1" disabled>
      <vxe-radio-button checked-value="1" content="按钮1"></vxe-radio-button>
      <vxe-radio-button checked-value="2" content="按钮2"></vxe-radio-button>
      <vxe-radio-button checked-value="3" content="按钮3"></vxe-radio-button>
    </vxe-radio-group>
    <br>
    <vxe-radio-group v-model="val2" status="primary" disabled>
      <vxe-radio-button checked-value="1" content="按钮1"></vxe-radio-button>
      <vxe-radio-button checked-value="2" content="按钮2"></vxe-radio-button>
      <vxe-radio-button checked-value="3" content="按钮3"></vxe-radio-button>
    </vxe-radio-group>
    <br>
    <vxe-radio-group v-model="val3" status="success" disabled>
      <vxe-radio-button checked-value="1" content="按钮1"></vxe-radio-button>
      <vxe-radio-button checked-value="2" content="按钮2"></vxe-radio-button>
      <vxe-radio-button checked-value="3" content="按钮3"></vxe-radio-button>
    </vxe-radio-group>
    <br>
    <vxe-radio-group v-model="val4" status="info" disabled>
      <vxe-radio-button checked-value="1" content="按钮1"></vxe-radio-button>
      <vxe-radio-button checked-value="2" content="按钮2"></vxe-radio-button>
      <vxe-radio-button checked-value="3" content="按钮3"></vxe-radio-button>
    </vxe-radio-group>
    <br>
    <vxe-radio-group v-model="val5" status="warning" disabled>
      <vxe-radio-button checked-value="1" content="按钮1"></vxe-radio-button>
      <vxe-radio-button checked-value="2" content="按钮2"></vxe-radio-button>
      <vxe-radio-button checked-value="3" content="按钮3"></vxe-radio-button>
    </vxe-radio-group>
    <br>
    <vxe-radio-group v-model="val6" status="error" disabled>
      <vxe-radio-button checked-value="1" content="按钮1"></vxe-radio-button>
      <vxe-radio-button checked-value="2" content="按钮2"></vxe-radio-button>
      <vxe-radio-button checked-value="3" content="按钮3"></vxe-radio-button>
    </vxe-radio-group>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const val1 = ref('1')
const val2 = ref('2')
const val3 = ref('3')
const val4 = ref('1')
const val5 = ref('2')
const val6 = ref('3')
</script>
