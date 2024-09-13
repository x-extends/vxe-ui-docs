<template>
  <div>
    <vxe-form
      title-width="120"
      :data="formData">
      <vxe-form-item title="名称" field="name" span="24" :item-render="{}">
        <template #default>
          <vxe-input v-model="formData.name"></vxe-input>
        </template>
      </vxe-form-item>
      <vxe-form-item title="下拉框" field="sex" span="24" :item-render="{}">
        <template #default>
          <vxe-select v-model="formData.sex" :options="sexOptions"></vxe-select>
        </template>
      </vxe-form-item>
      <vxe-form-item title="下拉框多选" field="sexList" span="24" :item-render="{}">
        <template #default>
          <vxe-select v-model="formData.sexList" :options="sexOptions" multiple></vxe-select>
        </template>
      </vxe-form-item>
      <vxe-form-item title="下拉框分组" field="type" span="24" :item-render="{}">
        <template #default>
          <vxe-select v-model="formData.type" :optionGroups="typeOptions"></vxe-select>
        </template>
      </vxe-form-item>
      <vxe-form-item title="下拉框分组多选" field="typeList" span="24" :item-render="{}">
        <template #default>
          <vxe-select v-model="formData.typeList" :optionGroups="typeOptions" multiple></vxe-select>
        </template>
      </vxe-form-item>
      <vxe-form-item align="center" span="24">
        <template #default>
          <vxe-button type="reset">重置</vxe-button>
          <vxe-button type="submit" status="primary">提交</vxe-button>
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

    const formData: FormDataVO = {
      name: 'test1',
      nickname: 'Testing',
      sex: '',
      sexList: [],
      type: '',
      typeList: []
    }

    return {
      sexOptions,
      typeOptions,
      formData
    }
  }
})
</script>
