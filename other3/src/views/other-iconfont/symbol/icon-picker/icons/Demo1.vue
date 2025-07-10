<template>
  <div>
    <vxe-icon-picker v-model="val1" :icons="iconList" clearable></vxe-icon-picker>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { VxeIconPickerPropTypes } from 'vxe-pc-ui'

export default Vue.extend({
  data () {
    const val1 = 'mytest-customer-outline'
    const iconList: VxeIconPickerPropTypes.Icons = [
      { icon: 'mytest-assets-2', iconRender: { name: 'MytestIconfontSymbol' } },
      { icon: 'mytest-carrier-management-outline', iconRender: { name: 'MytestIconfontSymbol' } },
      { icon: 'mytest-assets', iconRender: { name: 'MytestIconfontSymbol' } },
      { icon: 'mytest-switch', iconRender: { name: 'MytestIconfontSymbol' } },
      { icon: 'mytest-camera', iconRender: { name: 'MytestIconfontSymbol' } },
      { icon: 'mytest-Clear', iconRender: { name: 'MytestIconfontSymbol' } },
      { icon: 'mytest-closure', iconRender: { name: 'MytestIconfontSymbol' } },
      { icon: 'mytest-link', iconRender: { name: 'MytestIconfontSymbol' } },
      { icon: 'mytest-ransmission', iconRender: { name: 'MytestIconfontSymbol' } },
      { icon: 'mytest-calendar', iconRender: { name: 'MytestIconfontSymbol' } },
      { icon: 'mytest-customer-outline', iconRender: { name: 'MytestIconfontSymbol' } },
      { icon: 'mytest-search', iconRender: { name: 'MytestIconfontSymbol' } },
      { icon: 'mytest-Telephone', iconRender: { name: 'MytestIconfontSymbol' } }
    ]

    return {
      val1,
      iconList
    }
  }
})
</script>
