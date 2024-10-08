<template>
  <div>
    <vxe-form v-bind="formOptions" >
      <template #action>
        <el-button native-type="reset">重置</el-button>
        <el-button native-type="submit" type="primary">提交</el-button>
      </template>
    </vxe-form>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { VxeFormProps, VxeFormItemPropTypes } from 'vxe-pc-ui'

interface FormDataVO {
  name: string
  role: string
}

export default Vue.extend({
  data () {
    const restaurants = [
      { value: 'Designer', name: 'Designer' },
      { value: 'Develop', name: 'Develop' },
      { value: 'Test', name: 'Test' },
      { value: 'PM', name: 'PM' }
    ]

    const roleEditRender: VxeFormItemPropTypes.ItemRender = {
      name: 'ElAutocomplete',
      props: {
        fetchSuggestions (queryString: any, cb: (params: any) => void) {
          const results = queryString ? restaurants.filter(item => (item.name.toLowerCase().indexOf(queryString.toLowerCase()) === 0)) : restaurants
          // 模拟后端接口
          setTimeout(() => {
            cb(results)
          }, 500 * Math.random())
        }
      }
    }

    const formOptions: VxeFormProps<FormDataVO> = {
      titleWidth: 120,
      data: {
        name: 'test1',
        role: ''
      },
      items: [
        { field: 'name', title: '名称', span: 24, itemRender: { name: 'ElInput' } },
        { field: 'nickname', title: '自动补全输入', span: 24, itemRender: roleEditRender },
        { align: 'center', span: 24, slots: { default: 'action' } }
      ]
    }

    return {
      formOptions,
      restaurants,
      roleEditRender
    }
  }
})
</script>
