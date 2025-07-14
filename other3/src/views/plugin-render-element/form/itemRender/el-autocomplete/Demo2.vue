<template>
  <div>
    <vxe-form v-bind="formOptions" >
      <template #name="{ data }">
        <el-input v-model="data.name"></el-input>
      </template>

      <template #role="{ data }">
        <el-autocomplete v-model="data.role" :fetch-suggestions="fetchSuggestions"></el-autocomplete>
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

    const formOptions: VxeFormProps<FormDataVO> = {
      titleWidth: 120,
      data: {
        name: 'test1',
        role: ''
      },
      rules: {
        role: [
          { required: true, content: '请输入' }
        ]
      },
      items: [
        { field: 'name', title: '名称', span: 24, itemRender: { }, slots: { default: 'name' } },
        { field: 'role', title: '自动补全输入', span: 24, itemRender: { }, slots: { default: 'role' } },
        { align: 'center', span: 24, slots: { default: 'action' } }
      ]
    }

    return {
      formOptions,
      restaurants
    }
  },
  methods: {
    fetchSuggestions (queryString: any, cb: (params: any) => void) {
      const results = queryString ? this.restaurants.filter(item => (item.name.toLowerCase().indexOf(queryString.toLowerCase()) === 0)) : this.restaurants
      // 模拟后端接口
      setTimeout(() => {
        cb(results)
      }, 500 * Math.random())
    }
  }
})
</script>
