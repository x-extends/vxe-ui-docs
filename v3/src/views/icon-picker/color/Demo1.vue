<template>
  <div>
    <vxe-icon-picker v-model="val1" :icons="iconList" clearable></vxe-icon-picker>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data () {
    return {
      val1: '',
      iconList: [
        'home my-icon-red', 'company my-icon-blue', 'comment my-icon-orange', 'setting my-icon-green', 'send', 'envelope', 'envelope-open', 'bell', 'search', 'print', 'pc', 'goods', 'chart-line', 'edit', 'delete', 'save', 'sunny', 'rmb', 'usd', 'user'
      ]
    }
  }
})
</script>

<style lang="scss">
.my-icon-red {
  color: red;
}
.my-icon-blue {
  color: blue;
}
.my-icon-orange {
  color: orange;
}
.my-icon-green {
  color: green;
}
</style>
