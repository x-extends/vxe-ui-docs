<template>
  <div>
    <vxe-form v-bind="formOptions" >
      <template #name="{ data }">
        <el-input v-model="data.name"></el-input>
      </template>

      <template #sex="{ data }">
        <el-select v-model="data.sex">
          <el-option v-for="(item, index) in sexOptions" :key="index" :label="item.label" :value="item.value"></el-option>
        </el-select>
      </template>

      <template #sexList="{ data }">
        <el-select v-model="data.sexList" multiple>
          <el-option v-for="(item, index) in sexOptions" :key="index" :label="item.label" :value="item.value"></el-option>
        </el-select>
      </template>

      <template #type="{ data }">
        <el-select v-model="data.type">
          <el-option-group v-for="(item, i) in typeOptions" :key="i" :label="item.label">
            <el-option v-for="(child, j) in item.options" :key="j" :label="child.label" :value="child.value"></el-option>
          </el-option-group>
        </el-select>
      </template>

      <template #typeList="{ data }">
        <el-select v-model="data.typeList" multiple>
          <el-option-group v-for="(item, i) in typeOptions" :key="i" :label="item.label">
            <el-option v-for="(child, j) in item.options" :key="j" :label="child.label" :value="child.value"></el-option>
          </el-option-group>
        </el-select>
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
  sex: string
  sexList: string[]
  type: string
  typeList: string[]
}

export default Vue.extend({
  data () {
    const sexOptions = [
      { label: '女', value: 'Women' },
      { label: '男', value: 'Man' }
    ]

    const typeOptions = [
      {
        label: '分类1',
        value: '1',
        options: [
          { label: '跑步', value: '1-1' },
          { label: '游泳', value: '1-2' }
        ]
      },
      {
        label: '分类2',
        value: '2',
        options: [
          { label: '爬山', value: '2-1' },
          { label: '徒步', value: '2-2' }
        ]
      }
    ]

    const formOptions: VxeFormProps<FormDataVO> = {
      titleWidth: 120,
      data: {
        name: 'test1',
        sex: '',
        sexList: [],
        type: '',
        typeList: []
      },
      rules: {
        sex: [
          { required: true, content: '请输入' }
        ],
        sexList: [
          { required: true, type: 'array', content: '请输入' }
        ],
        type: [
          { required: true, content: '请输入' }
        ],
        typeList: [
          { required: true, type: 'array', content: '请输入' }
        ]
      },
      items: [
        { field: 'name', title: '名称', span: 24, itemRender: { }, slots: { default: 'name' } },
        { field: 'sex', title: '下拉框', span: 24, itemRender: { }, slots: { default: 'sex' } },
        { field: 'sexList', title: '下拉框多选', span: 24, itemRender: { }, slots: { default: 'sexList' } },
        { field: 'type', title: '下拉框分组', span: 24, itemRender: { }, slots: { default: 'type' } },
        { field: 'typeList', title: '下拉框分组多选', span: 24, itemRender: { }, slots: { default: 'typeList' } },
        { align: 'center', span: 24, slots: { default: 'action' } }
      ]
    }

    return {
      formOptions,
      sexOptions,
      typeOptions
    }
  }
})
</script>
