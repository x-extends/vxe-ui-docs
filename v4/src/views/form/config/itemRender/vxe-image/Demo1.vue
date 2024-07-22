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
  imgUrl: string
}

const formOptions = reactive<VxeFormProps<FormDataVO>>({
  titleWidth: 120,
  data: {
    name: 'test1',
    nickname: 'Testing',
    imgUrl: 'https://vxeui.com/resource/img/fj562.png'
  },
  items: [
    { field: 'name', title: '名称', span: 24, itemRender: { name: 'VxeInput' } },
    { field: 'imgUrl', title: '查看图片', span: 24, itemRender: { name: 'VxeImage', props: { width: 100, height: 100 } } },
    { align: 'center', span: 24, slots: { default: 'active' } }
  ]
})
</script>
