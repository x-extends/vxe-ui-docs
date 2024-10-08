<template>
  <div>
    <vxe-form v-bind="formOptions" >
      <template #action>
        <a-button html-type="reset">重置</a-button>
        <a-button html-type="submit" type="primary">提交</a-button>
      </template>
    </vxe-form>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { VxeFormProps } from 'vxe-pc-ui'

interface FormDataVO {
  name: string
  flag: boolean
}

export default Vue.extend({
  data () {
    const formOptions: VxeFormProps<FormDataVO> = {
      titleWidth: 120,
      data: {
        name: 'test1',
        flag: false
      },
      items: [
        { field: 'name', title: '名称', span: 24, itemRender: { name: 'AInput' } },
        { field: 'flag', title: '开关', span: 24, itemRender: { name: 'ASwitch' } },
        { align: 'center', span: 24, slots: { default: 'action' } }
      ]
    }

    return {
      formOptions
    }
  }
})
</script>
