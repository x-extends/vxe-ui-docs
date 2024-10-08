<template>
  <div>
    <vxe-form v-bind="formOptions" >
      <template #name="{ data }">
        <el-input v-model="data.name"></el-input>
      </template>

      <template #num="{ data }">
        <el-rate v-model="data.num"></el-rate>
      </template>

      <template #action>
        <el-button native-type="reset">重置</el-button>
        <el-button native-type="submit" type="primary">提交</el-button>
      </template>
    </vxe-form>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { VxeFormProps } from 'vxe-pc-ui'

interface FormDataVO {
  name: string
  num: number
}

export default Vue.extend({
  data () {
    const formOptions: VxeFormProps<FormDataVO> = {
      titleWidth: 120,
      data: {
        name: 'test1',
        num: 4
      },
      items: [
        { field: 'name', title: '名称', span: 24, itemRender: { }, slots: { default: 'name' } },
        { field: 'num', title: '评分', span: 24, itemRender: { }, slots: { default: 'num' } },
        { align: 'center', span: 24, slots: { default: 'action' } }
      ]
    }

    return {
      formOptions
    }
  }
})
</script>
