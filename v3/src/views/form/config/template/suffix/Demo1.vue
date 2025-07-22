<template>
  <div>
    <vxe-form v-bind="formOptions">
      <template #nameSuffix>
        <vxe-button mode="text" status="primary" icon="vxe-icon-add-user"></vxe-button>
      </template>

      <template #sexSuffix>
        <vxe-button mode="text" status="error" icon="vxe-icon-delete-fill"></vxe-button>
      </template>
    </vxe-form>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { VxeFormProps } from 'vxe-pc-ui'

interface FormDataVO {
  name: string
  nickname: string
  sex: string
  age: string
  isEnableName: boolean
  isEnableSex: boolean
}

export default Vue.extend({
  data () {
    const formOptions: VxeFormProps<FormDataVO> = {
      border: true,
      titleBackground: true,
      titleWidth: 80,
      data: {
        name: 'test1',
        nickname: 'Testing',
        sex: '女',
        age: '18',
        isEnableName: false,
        isEnableSex: false
      },
      items: [
        { field: 'name', title: '名称', span: 24, slots: { extra: 'nameSuffix' } },
        { field: 'sex', title: '性别', span: 12, slots: { suffix: 'sexSuffix' } },
        { field: 'age', title: '年龄', span: 12 }
      ]
    }

    return {
      formOptions
    }
  }
})
</script>
