<template>
  <div>
    <vxe-form v-bind="formOptions">
      <template #active>
        <vxe-button type="reset">重置</vxe-button>
        <vxe-button type="submit" status="primary">提交</vxe-button>
      </template>
    </vxe-form>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
import { VxeFormProps } from 'vxe-pc-ui'

interface FormDataVO {
  name: string
  nickname: string
  sex: string
  imgList: string[]
}

const formOptions = reactive<VxeFormProps<FormDataVO>>({
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
    { align: 'center', span: 24, slots: { default: 'active' } }
  ]
})
</script>
