<template>
  <div>
    <el-button type="primary" @click="toggleReadonly">切换只读</el-button>

    <vxe-form
      title-colon
      title-width="120"
      title-align="right"
      :readonly="isReadonly"
      :data="formData"
      :rules="formRules"
    >
      <vxe-form-group span="24">
        <vxe-form-item title="名称" field="name" span="12" :item-render="{}">
          <template #default="{ readonly }">
            <span v-if="readonly">查看模式：{{ formData.name }}</span>
            <el-input v-else v-model="formData.name"></el-input>
          </template>
        </vxe-form-item>
        <vxe-form-item title="数字" field="num" span="8" :item-render="{}">
          <template #default="{ readonly }">
            <span v-if="readonly">查看模式：{{ formData.num }}</span>
            <el-input v-else v-model="formData.num"></el-input>
          </template>
        </vxe-form-item>
      </vxe-form-group>
      <vxe-form-item title="文本域" field="address" span="24" :item-render="{}">
        <template #default="{ readonly }">
          <span v-if="readonly">查看模式：{{ formData.address }}</span>
          <el-input v-else v-model="formData.address" type="textarea"></el-input>
        </template>
      </vxe-form-item>
      <vxe-form-item align="center" span="24">
        <template #default="{ readonly }">
          <el-button v-if="!readonly" native-type="reset">重置</el-button>
          <el-button v-if="!readonly" native-type="submit" type="primary">提交</el-button>
        </template>
      </vxe-form-item>
    </vxe-form>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { VxeFormPropTypes } from 'vxe-pc-ui'

interface FormDataVO {
  name: string
  nickname: string
  num: number
  float: number
  integer: number
  amount: number
  address: string
}

const isReadonly = ref(false)
const formData = ref<FormDataVO>({
  name: 'test1',
  nickname: 'Testing',
  num: 4236985.3,
  integer: 100000,
  float: 31200.33,
  amount: 100000,
  address: '广东省深圳市'
})

const formRules = ref<VxeFormPropTypes.Rules>({
  num: [
    { required: true, message: '必填' }
  ]
})

const toggleReadonly = () => {
  isReadonly.value = !isReadonly.value
}
</script>
