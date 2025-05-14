<template>
  <div>
    <vxe-form v-bind="formOptions" >
      <template #action>
        <vxe-button type="reset">重置</vxe-button>
        <vxe-button type="submit" status="primary">提交</vxe-button>
      </template>
    </vxe-form>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { VxeFormProps, VxeFormItemPropTypes } from 'vxe-pc-ui'

interface FormDataVO {
  name: string
  nickname: string
  sex: string
  role: string
  address: string
}

export default Vue.extend({
  data () {
    const nameItemRender: VxeFormItemPropTypes.ItemRender<FormDataVO> = {
      name: 'VxeInput'
    }

    const roleItemRender: VxeFormItemPropTypes.ItemRender<FormDataVO> = {
      name: 'VxeInput',
      props: {
        clearable: true
      },
      events: {
        input (itemParams, eventParams) {
          const { item } = itemParams
          console.log('input', item.field, eventParams.value)
        }
      }
    }

    const formOptions: VxeFormProps<FormDataVO> = {
      titleWidth: 120,
      data: {
        name: 'test1',
        nickname: 'Testing',
        role: '',
        sex: '',
        address: ''
      },
      items: [
        { field: 'name', title: '名称', span: 24, itemRender: nameItemRender },
        { field: 'role', title: '输入框', span: 24, itemRender: roleItemRender },
        { align: 'center', span: 24, slots: { default: 'action' } }
      ]
    }

    return {
      formOptions
    }
  }
})
</script>
