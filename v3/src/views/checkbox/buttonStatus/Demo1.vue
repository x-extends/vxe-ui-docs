<template>
  <div>
    <vxe-checkbox-group v-model="val1">
      <vxe-checkbox-button label="1" content="按钮1"></vxe-checkbox-button>
      <vxe-checkbox-button label="2" content="按钮2"></vxe-checkbox-button>
      <vxe-checkbox-button label="3" content="按钮3"></vxe-checkbox-button>
    </vxe-checkbox-group>
    <br>
    <vxe-checkbox-group v-model="val2" status="primary">
      <vxe-checkbox-button label="1" content="按钮1"></vxe-checkbox-button>
      <vxe-checkbox-button label="2" content="按钮2"></vxe-checkbox-button>
      <vxe-checkbox-button label="3" content="按钮3"></vxe-checkbox-button>
    </vxe-checkbox-group>
    <br>
    <vxe-checkbox-group v-model="val3" status="success">
      <vxe-checkbox-button label="1" content="按钮1"></vxe-checkbox-button>
      <vxe-checkbox-button label="2" content="按钮2"></vxe-checkbox-button>
      <vxe-checkbox-button label="3" content="按钮3"></vxe-checkbox-button>
    </vxe-checkbox-group>
    <br>
    <vxe-checkbox-group v-model="val4" status="info">
      <vxe-checkbox-button label="1" content="按钮1"></vxe-checkbox-button>
      <vxe-checkbox-button label="2" content="按钮2"></vxe-checkbox-button>
      <vxe-checkbox-button label="3" content="按钮3"></vxe-checkbox-button>
    </vxe-checkbox-group>
    <br>
    <vxe-checkbox-group v-model="val5" status="warning">
      <vxe-checkbox-button label="1" content="按钮1"></vxe-checkbox-button>
      <vxe-checkbox-button label="2" content="按钮2"></vxe-checkbox-button>
      <vxe-checkbox-button label="3" content="按钮3"></vxe-checkbox-button>
    </vxe-checkbox-group>
    <br>
    <vxe-checkbox-group v-model="val6" status="error">
      <vxe-checkbox-button label="1" content="按钮1"></vxe-checkbox-button>
      <vxe-checkbox-button label="2" content="按钮2"></vxe-checkbox-button>
      <vxe-checkbox-button label="3" content="按钮3"></vxe-checkbox-button>
    </vxe-checkbox-group>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data () {
    return {
      val1: ['1'],
      val2: ['2'],
      val3: ['3'],
      val4: ['1'],
      val5: ['2'],
      val6: ['3']
    }
  }
})
</script>
