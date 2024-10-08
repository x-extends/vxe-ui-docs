<template>
  <div>
    <vxe-form
      title-width="120"
      :data="formData">
      <vxe-form-item title="名称" field="name" span="24" :item-render="{}">
        <template #default>
          <el-input v-model="formData.name"></el-input>
        </template>
      </vxe-form-item>
      <vxe-form-item title="下拉框" field="sex" span="24" :item-render="{}">
        <template #default>
          <el-select v-model="formData.sex">
            <el-option v-for="(item, index) in sexOptions" :key="index" :label="item.label" :value="item.value"></el-option>
          </el-select>
        </template>
      </vxe-form-item>
      <vxe-form-item title="下拉框多选" field="sexList" span="24" :item-render="{}">
        <template #default>
          <el-select v-model="formData.sexList" multiple>
            <el-option v-for="(item, index) in sexOptions" :key="index" :label="item.label" :value="item.value"></el-option>
          </el-select>
        </template>
      </vxe-form-item>
      <vxe-form-item title="下拉框分组" field="type" span="24" :item-render="{}">
        <template #default>
          <el-select v-model="formData.type">
            <el-option-group v-for="(item, i) in typeOptions" :key="i" :label="item.label">
              <el-option v-for="(child, j) in item.options" :key="j" :label="child.label" :value="child.value"></el-option>
            </el-option-group>
          </el-select>
        </template>
      </vxe-form-item>
      <vxe-form-item title="下拉框分组多选" field="typeList" span="24" :item-render="{}">
        <template #default>
          <el-select v-model="formData.typeList" multiple>
            <el-option-group v-for="(item, i) in typeOptions" :key="i" :label="item.label">
              <el-option v-for="(child, j) in item.options" :key="j" :label="child.label" :value="child.value"></el-option>
            </el-option-group>
          </el-select>
        </template>
      </vxe-form-item>
      <vxe-form-item align="center" span="24">
        <template #default>
          <el-button native-type="reset">重置</el-button>
          <el-button native-type="submit" type="primary">提交</el-button>
        </template>
      </vxe-form-item>
    </vxe-form>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

interface FormDataVO {
  name: string
  nickname: string
  sex: string
  sexList: string[]
  type: string
  typeList: string[]
}

export default Vue.extend({
  data () {
    const formData: FormDataVO = {
      name: 'test1',
      nickname: 'Testing',
      sex: '',
      sexList: [],
      type: '',
      typeList: []
    }

    const sexOptions = [
      { label: '女', value: 'Women' },
      { label: '男', value: 'Man' }
    ]

    const typeOptions = [
      {
        label: '分类1',
        options: [
          { label: '苹果', value: '1-1' },
          { label: '雪梨', value: '1-2' }
        ]
      },
      {
        label: '分类2',
        options: [
          { label: '草莓', value: '2-1' },
          { label: '猕猴桃', value: '2-2' }
        ]
      }
    ]

    return {
      formData,
      sexOptions,
      typeOptions
    }
  }
})
</script>
