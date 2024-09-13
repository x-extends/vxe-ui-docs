<template>
  <div>
    <vxe-form v-bind="formOptions" >
      <template #name="{ data }">
        <vxe-input v-model="data.name"></vxe-input>
      </template>

      <template #fileList1="{ data }">
        <vxe-upload v-model="data.fileList1"></vxe-upload>
      </template>

      <template #fileList2="{ data }">
        <vxe-upload v-model="data.fileList2" multiple></vxe-upload>
      </template>

      <template #imgList1="{ data }">
        <vxe-upload v-model="data.imgList1" mode="image"></vxe-upload>
      </template>

      <template #imgList2="{ data }">
        <vxe-upload v-model="data.imgList2" mode="image" multiple></vxe-upload>
      </template>

      <template #action>
        <vxe-button type="reset">重置</vxe-button>
        <vxe-button type="submit" status="primary">提交</vxe-button>
      </template>
    </vxe-form>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { VxeFormProps, VxeUploadPropTypes } from 'vxe-pc-ui'

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
        { field: 'name', title: '名称', span: 24, itemRender: { }, slots: { default: 'name' } },
        { field: 'fileList1', title: '上传附件', span: 24, itemRender: { }, slots: { default: 'fileList1' } },
        { field: 'fileList2', title: '上传附件多选', span: 24, itemRender: { }, slots: { default: 'fileList2' } },
        { field: 'imgList1', title: '上传图片', span: 24, itemRender: { }, slots: { default: 'imgList1' } },
        { field: 'imgList2', title: '上传图片多选', span: 24, itemRender: { }, slots: { default: 'imgList2' } },
        { align: 'center', span: 24, slots: { default: 'action' } }
      ]
    }

    return {
      formOptions
    }
  }
})
</script>
