<template>
  <div>
    <vxe-form v-bind="formOptions"></vxe-form>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { VxeFormProps, VxeFormItemPropTypes } from 'vxe-pc-ui'

interface FormDataVO {
  name: string
  nickname: string
  sex: string
  imgList: string[]
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
        imgList: [
          'https://vxeui.com/resource/img/fj577.jpg',
          'https://vxeui.com/resource/img/fj581.jpeg',
          'https://vxeui.com/resource/img/fj573.jpeg',
          'https://vxeui.com/resource/img/fj562.png'
        ]
      },
      items: [
        { field: 'name', title: '名称', span: 24, itemRender: { name: 'VxeInput' } },
        { field: 'imgList', title: '查看图片组', span: 24, itemRender: { name: 'VxeImageGroup', props: { imageStyle: { width: 100, height: 100 } } } },
        { align: 'center', span: 24, itemRender: actionItemRender }
      ]
    }

    return {
      formOptions
    }
  }
})
</script>
