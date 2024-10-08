<template>
  <div>
    <vxe-form v-bind="formOptions" >
      <template #action>
        <el-button native-type="reset">重置</el-button>
        <el-button native-type="submit" type="primary">提交</el-button>
      </template>
    </vxe-form>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { VxeFormProps, VxeFormItemPropTypes } from 'vxe-pc-ui'

interface FormDataVO {
  name: string
  hobbiesList: string[]
}

export default Vue.extend({
  data () {
    const hobbies1ItemRender: VxeFormItemPropTypes.ItemRender = {
      name: 'ElCheckboxGroup',
      options: [
        { label: '爬山', value: '1' },
        { label: '干架', value: '2' },
        { label: '干饭', value: '3' },
        { label: '游泳', value: '4' },
        { label: '跑步', value: '5' }
      ]
    }

    const formOptions: VxeFormProps<FormDataVO> = {
      titleWidth: 120,
      data: {
        name: 'test1',
        hobbiesList: []
      },
      items: [
        { field: 'name', title: '名称', span: 24, itemRender: { name: 'ElInput' } },
        { field: 'hobbiesList', title: '复选框', span: 24, itemRender: hobbies1ItemRender },
        { align: 'center', span: 24, slots: { default: 'action' } }
      ]
    }

    return {
      formOptions,
      hobbies1ItemRender
    }
  }
})
</script>
