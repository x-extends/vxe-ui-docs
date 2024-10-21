<template>
  <div>
    <vxe-form v-bind="formOptions"></vxe-form>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { VxeFormProps, VxeUploadPropTypes, VxeFormItemPropTypes, VxeUploadProps } from 'vxe-pc-ui'
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

export default Vue.extend({
  data () {
    const fileList1ItemRender: VxeFormItemPropTypes.ItemRender<FormDataVO, VxeUploadProps> = {
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
    }

    const fileList2ItemRender: VxeFormItemPropTypes.ItemRender<FormDataVO, VxeUploadProps> = {
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
    }

    const imgList1ItemRender: VxeFormItemPropTypes.ItemRender<FormDataVO, VxeUploadProps> = {
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
    }

    const imgList2ItemRender: VxeFormItemPropTypes.ItemRender<FormDataVO, VxeUploadProps> = {
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
    }

    const actionItemRender: VxeFormItemPropTypes.ItemRender = {
      name: 'VxeButtonGroup',
      options: [
        { content: '重置', type: 'reset' },
        { content: '提交', type: 'submit', status: 'primary' }
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
        { field: 'fileList1', title: '上传附件', span: 24, itemRender: fileList1ItemRender },
        { field: 'fileList2', title: '上传附件多选', span: 24, itemRender: fileList2ItemRender },
        { field: 'imgList1', title: '上传图片', span: 24, itemRender: imgList1ItemRender },
        { field: 'imgList2', title: '上传图片多选', span: 24, itemRender: imgList2ItemRender },
        { align: 'center', span: 24, itemRender: actionItemRender }
      ]
    }

    return {
      formOptions,
      fileList1ItemRender,
      fileList2ItemRender,
      imgList1ItemRender,
      imgList2ItemRender
    }
  }
})
</script>
