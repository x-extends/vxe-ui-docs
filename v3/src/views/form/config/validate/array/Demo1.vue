<template>
  <div>
    <vxe-form
      v-bind="formOptions"
      @submit="submitEvent"
      @reset="resetEvent">
    </vxe-form>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { VxeUI, VxeFormProps, VxeFormItemPropTypes, VxeSelectProps } from 'vxe-pc-ui'

interface FormDataVO {
  name: string
  nickname: string
  roleList: string[]
}

export default Vue.extend({
  data () {
    const roleListItemRender: VxeFormItemPropTypes.ItemRender<FormDataVO, VxeSelectProps> = {
      name: 'VxeSelect',
      props: {
        multiple: true
      },
      options: [
        { label: 'Develop', value: 'develop' },
        { label: 'Test', value: 'test' },
        { label: 'PM', value: 'pm' }
      ]
    }

    const formOptions: VxeFormProps<FormDataVO> = {
      data: {
        name: 'test1',
        nickname: 'Testing',
        roleList: []
      },
      rules: {
        roleList: [
          { required: true, type: 'array', message: '至少选一个' }
        ]
      },
      items: [
        { field: 'name', title: '名称', span: 12, itemRender: { name: 'VxeInput' } },
        { field: 'roleList', title: '角色', span: 12, itemRender: roleListItemRender },
        {
          align: 'center',
          span: 24,
          itemRender: {
            name: 'VxeButtonGroup',
            options: [
              { type: 'submit', content: '提交', status: 'primary' },
              { type: 'reset', content: '重置' }
            ]
          }
        }
      ]
    }

    return {
      formOptions,
      roleListItemRender
    }
  },
  methods: {
    submitEvent () {
      VxeUI.modal.message({ content: '保存成功', status: 'success' })
    },
    resetEvent () {
      VxeUI.modal.message({ content: '重置事件', status: 'info' })
    }
  }
})
</script>
