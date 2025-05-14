<template>
  <div>
    <vxe-form
      title-width="120"
      :data="formData">
      <vxe-form-item title="名称" field="name" span="24" :item-render="nameItemRender"></vxe-form-item>
      <vxe-form-item title="输入框" field="role" span="24" :item-render="roleItemRender"></vxe-form-item>
      <vxe-form-item align="center" span="24">
        <template #default>
          <vxe-button type="reset">重置</vxe-button>
          <vxe-button type="submit" status="primary">提交</vxe-button>
        </template>
      </vxe-form-item>
    </vxe-form>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { VxeFormItemPropTypes } from 'vxe-pc-ui'

interface FormDataVO {
  name: string
  nickname: string
  sex: string
  role: string
  address: string
}

export default Vue.extend({
  data () {
    const formData: FormDataVO = {
      name: 'test1',
      nickname: 'Testing',
      role: '',
      sex: '',
      address: ''
    }

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

    return {
      formData,
      nameItemRender,
      roleItemRender
    }
  }
})
</script>
