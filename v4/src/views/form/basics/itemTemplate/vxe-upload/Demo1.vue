<template>
  <div>
    <vxe-form
      title-width="120"
      :data="formData">
      <vxe-form-item title="名称" field="name" span="24" :item-render="{}">
        <template #default>
          <vxe-input v-model="formData.name"></vxe-input>
        </template>
      </vxe-form-item>
      <vxe-form-item title="上传附件" field="fileList1" span="24" :item-render="{}">
        <template #default>
          <vxe-upload v-model="formData.fileList1" multiple></vxe-upload>
        </template>
      </vxe-form-item>
      <vxe-form-item title="上传附件多选" field="fileList2" span="24" :item-render="{}">
        <template #default>
          <vxe-upload v-model="formData.fileList2" multiple></vxe-upload>
        </template>
      </vxe-form-item>
      <vxe-form-item title="上传图片" field="imgList1" span="24" :item-render="{}">
        <template #default>
          <vxe-upload v-model="formData.imgList1" mode="image"></vxe-upload>
        </template>
      </vxe-form-item>
      <vxe-form-item title="上传图片多选" field="imgList2" span="24" :item-render="{}">
        <template #default>
          <vxe-upload v-model="formData.imgList2" mode="image" multiple></vxe-upload>
        </template>
      </vxe-form-item>
      <vxe-form-item default="center" span="24">
        <template #active>
          <vxe-button type="reset">重置</vxe-button>
          <vxe-button type="submit" status="primary">提交</vxe-button>
        </template>
      </vxe-form-item>
    </vxe-form>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { VxeUploadPropTypes } from 'vxe-pc-ui'

interface FormDataVO {
  name: string
  nickname: string
  sex: string
  fileList1: VxeUploadPropTypes.ModelValue
  fileList2: VxeUploadPropTypes.ModelValue
  imgList1: VxeUploadPropTypes.ModelValue
  imgList2: VxeUploadPropTypes.ModelValue
}

const formData = ref<FormDataVO>({
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
})
</script>
