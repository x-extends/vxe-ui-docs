<template>
  <div>
    <vxe-form v-bind="formOptions"></vxe-form>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { VxeFormProps, VxeUploadPropTypes, VxeFormItemPropTypes } from 'vxe-pc-ui'

interface FormDataVO {
  name: string
  nickname: string
  sex: string
  fileList1: VxeUploadPropTypes.ModelValue
  fileList2: VxeUploadPropTypes.ModelValue
  imgList1: VxeUploadPropTypes.ModelValue
  imgList2: VxeUploadPropTypes.ModelValue
}

export default Vue.extend({
  data () {
    const actionItemRender: VxeFormItemPropTypes.ItemRender = {
      name: 'VxeButtonGroup',
      options: [
        { content: '重置', type: 'reset' },
        { content: '保存', type: 'submit', status: 'primary', icon: 'vxe-icon-save' }
      ]
    }

    const formOptions: VxeFormProps<FormDataVO> = {
      titleWidth: 120,
      data: {
        name: 'test1',
        nickname: 'Testing',
        sex: '',
        fileList1: [],
        fileList2: [
          { name: 'fj562.png', url: 'https://vxeui.com/resource/img/fj562.png' }
        ],
        imgList1: [],
        imgList2: [
          { name: 'fj562.png', url: 'https://vxeui.com/resource/img/fj562.png' }
        ]
      },
      items: [
        { field: 'name', title: '名称', span: 24, itemRender: { name: 'VxeInput' } },
        { field: 'fileList1', title: '上传附件', span: 24, itemRender: { name: 'VxeUpload' } },
        { field: 'fileList2', title: '上传附件多选', span: 24, itemRender: { name: 'VxeUpload', props: { multiple: true } } },
        { field: 'imgList1', title: '上传图片', span: 24, itemRender: { name: 'VxeUpload', props: { mode: 'image' } } },
        { field: 'imgList2', title: '上传图片多选', span: 24, itemRender: { name: 'VxeUpload', props: { mode: 'image', multiple: true } } },
        { align: 'center', span: 24, itemRender: actionItemRender }
      ]
    }

    return {
      actionItemRender,
      formOptions
    }
  }
})
</script>
