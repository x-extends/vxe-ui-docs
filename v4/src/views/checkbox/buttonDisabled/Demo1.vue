<template>
  <div>
    <vxe-checkbox-group v-model="val1" disabled>
      <vxe-checkbox-button label="1" content="按钮1"></vxe-checkbox-button>
      <vxe-checkbox-button label="2" content="按钮2"></vxe-checkbox-button>
      <vxe-checkbox-button label="3" content="按钮3"></vxe-checkbox-button>
    </vxe-checkbox-group>
    <br>
    <vxe-checkbox-group v-model="val2" status="primary" disabled>
      <vxe-checkbox-button label="1" content="按钮1"></vxe-checkbox-button>
      <vxe-checkbox-button label="2" content="按钮2"></vxe-checkbox-button>
      <vxe-checkbox-button label="3" content="按钮3"></vxe-checkbox-button>
    </vxe-checkbox-group>
    <br>
    <vxe-checkbox-group v-model="val3" status="success" disabled>
      <vxe-checkbox-button label="1" content="按钮1"></vxe-checkbox-button>
      <vxe-checkbox-button label="2" content="按钮2"></vxe-checkbox-button>
      <vxe-checkbox-button label="3" content="按钮3"></vxe-checkbox-button>
    </vxe-checkbox-group>
    <br>
    <vxe-checkbox-group v-model="val4" status="info" disabled>
      <vxe-checkbox-button label="1" content="按钮1"></vxe-checkbox-button>
      <vxe-checkbox-button label="2" content="按钮2"></vxe-checkbox-button>
      <vxe-checkbox-button label="3" content="按钮3"></vxe-checkbox-button>
    </vxe-checkbox-group>
    <br>
    <vxe-checkbox-group v-model="val5" status="warning" disabled>
      <vxe-checkbox-button label="1" content="按钮1"></vxe-checkbox-button>
      <vxe-checkbox-button label="2" content="按钮2"></vxe-checkbox-button>
      <vxe-checkbox-button label="3" content="按钮3"></vxe-checkbox-button>
    </vxe-checkbox-group>
    <br>
    <vxe-checkbox-group v-model="val6" status="error" disabled>
      <vxe-checkbox-button label="1" content="按钮1"></vxe-checkbox-button>
      <vxe-checkbox-button label="2" content="按钮2"></vxe-checkbox-button>
      <vxe-checkbox-button label="3" content="按钮3"></vxe-checkbox-button>
    </vxe-checkbox-group>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const val1 = ref(['1'])
const val2 = ref(['2'])
const val3 = ref(['3'])
const val4 = ref(['1'])
const val5 = ref(['2'])
const val6 = ref(['3'])
</script>
