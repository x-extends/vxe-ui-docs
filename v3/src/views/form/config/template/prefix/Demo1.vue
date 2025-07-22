<template>
  <div>
    <vxe-form v-bind="formOptions">
      <template #namePrefix>
        <vxe-checkbox v-model="formOptions.data.isEnableName"></vxe-checkbox>
      </template>

      <template #sexPrefix>
        <vxe-checkbox v-model="formOptions.data.isEnableSex"></vxe-checkbox>
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
    const formOptions: VxeFormProps<FormDataVO> & { data: FormDataVO } = {
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
        { field: 'name', title: '名称', span: 24, slots: { prefix: 'namePrefix' } },
        { field: 'sex', title: '性别', span: 24, slots: { prefix: 'sexPrefix' } },
        { field: 'age', title: '年龄', span: 24 }
      ]
    }

    return {
      formOptions
    }
  }
})
</script>
