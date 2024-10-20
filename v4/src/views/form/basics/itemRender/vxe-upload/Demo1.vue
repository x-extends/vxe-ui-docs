<template>
  <div>
    <vxe-form
      title-width="120"
      :data="formData">
      <vxe-form-item title="名称" field="name" span="24" :item-render="{ name: 'VxeInput' }"></vxe-form-item>
      <vxe-form-item title="上传附件" field="fileList1" span="24" :item-render="fileList1Render"></vxe-form-item>
      <vxe-form-item title="上传附件多选" field="fileList2" span="24" :item-render="fileList2ItemRender"></vxe-form-item>
      <vxe-form-item title="上传图片" field="imgList1" span="24" :item-render="imgList1Render"></vxe-form-item>
      <vxe-form-item title="上传图片多选" field="imgList2" span="24" :item-render="imgList2ItemRender"></vxe-form-item>
      <vxe-form-item default="center" span="24">
        <template #default>
          <vxe-button type="reset">重置</vxe-button>
          <vxe-button type="submit" status="primary">提交</vxe-button>
        </template>
      </vxe-form-item>
    </vxe-form>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'
import { VxeUploadPropTypes, VxeFormItemPropTypes, VxeUploadProps } from 'vxe-pc-ui'
import axios from 'axios'

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

const fileList1Render = reactive<VxeFormItemPropTypes.ItemRender<FormDataVO, VxeUploadProps>>({
  name: 'VxeUpload',
  props: {
    uploadMethod ({ file }) {
      const formData = new FormData()
      formData.append('file', file)
      return axios.post('/api/pub/upload/single', formData).then((res) => {
        // { url: ''}
        return {
          ...res.data
        }
      })
    }
  }
})

const fileList2ItemRender = reactive<VxeFormItemPropTypes.ItemRender<FormDataVO, VxeUploadProps>>({
  name: 'VxeUpload',
  props: {
    multiple: true,
    uploadMethod ({ file }) {
      const formData = new FormData()
      formData.append('file', file)
      return axios.post('/api/pub/upload/single', formData).then((res) => {
        // { url: ''}
        return {
          ...res.data
        }
      })
    }
  }
})

const imgList1Render = reactive<VxeFormItemPropTypes.ItemRender<FormDataVO, VxeUploadProps>>({
  name: 'VxeUpload',
  props: {
    mode: 'image',
    uploadMethod ({ file }) {
      const formData = new FormData()
      formData.append('file', file)
      return axios.post('/api/pub/upload/single', formData).then((res) => {
        // { url: ''}
        return {
          ...res.data
        }
      })
    }
  }
})

const imgList2ItemRender = reactive<VxeFormItemPropTypes.ItemRender<FormDataVO, VxeUploadProps>>({
  name: 'VxeUpload',
  props: {
    mode: 'image',
    multiple: true,
    uploadMethod ({ file }) {
      const formData = new FormData()
      formData.append('file', file)
      return axios.post('/api/pub/upload/single', formData).then((res) => {
        // { url: ''}
        return {
          ...res.data
        }
      })
    }
  }
})
</script>
