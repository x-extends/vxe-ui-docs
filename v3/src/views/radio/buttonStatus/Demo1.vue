<template>
  <div>
    <vxe-radio-group v-model="val1">
      <vxe-radio-button checked-value="1" content="按钮1"></vxe-radio-button>
      <vxe-radio-button checked-value="2" content="按钮2"></vxe-radio-button>
      <vxe-radio-button checked-value="3" content="按钮3"></vxe-radio-button>
    </vxe-radio-group>
    <br>
    <vxe-radio-group v-model="val2" status="primary">
      <vxe-radio-button checked-value="1" content="按钮1"></vxe-radio-button>
      <vxe-radio-button checked-value="2" content="按钮2"></vxe-radio-button>
      <vxe-radio-button checked-value="3" content="按钮3"></vxe-radio-button>
    </vxe-radio-group>
    <br>
    <vxe-radio-group v-model="val3" status="success">
      <vxe-radio-button checked-value="1" content="按钮1"></vxe-radio-button>
      <vxe-radio-button checked-value="2" content="按钮2"></vxe-radio-button>
      <vxe-radio-button checked-value="3" content="按钮3"></vxe-radio-button>
    </vxe-radio-group>
    <br>
    <vxe-radio-group v-model="val4" status="info">
      <vxe-radio-button checked-value="1" content="按钮1"></vxe-radio-button>
      <vxe-radio-button checked-value="2" content="按钮2"></vxe-radio-button>
      <vxe-radio-button checked-value="3" content="按钮3"></vxe-radio-button>
    </vxe-radio-group>
    <br>
    <vxe-radio-group v-model="val5" status="warning">
      <vxe-radio-button checked-value="1" content="按钮1"></vxe-radio-button>
      <vxe-radio-button checked-value="2" content="按钮2"></vxe-radio-button>
      <vxe-radio-button checked-value="3" content="按钮3"></vxe-radio-button>
    </vxe-radio-group>
    <br>
    <vxe-radio-group v-model="val6" status="error">
      <vxe-radio-button checked-value="1" content="按钮1"></vxe-radio-button>
      <vxe-radio-button checked-value="2" content="按钮2"></vxe-radio-button>
      <vxe-radio-button checked-value="3" content="按钮3"></vxe-radio-button>
    </vxe-radio-group>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data () {
    return {
      val1: '1',
      val2: '2',
      val3: '3',
      val4: '1',
      val5: '2',
      val6: '3'
    }
  }
})
</script>
