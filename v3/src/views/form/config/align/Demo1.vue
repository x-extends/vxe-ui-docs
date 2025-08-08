<template>
  <div>
    <vxe-form v-bind="formOptions"></vxe-form>
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
}

export default Vue.extend({
  data () {
    const formOptions: VxeFormProps<FormDataVO> = {
      border: true,
      align: 'left',
      data: {
        name: 'test1',
        nickname: 'Testing',
        sex: 'Woman',
        age: '20'
      },
      items: [
        { field: 'name', title: '名称', span: 24 },
        { field: 'sex', title: '性别', span: 12 },
        { field: 'age', title: '年龄', span: 12 }
      ]
    }

    return {
      formOptions
    }
  }
})
</script>
