<template>
  <div>
    <vxe-form :data="formData1">
      <vxe-form-item title="名称" field="name" :item-render="{}">
        <template #default="{ data }">
          <vxe-input v-model="data.name" placeholder="请输入名称" clearable></vxe-input>
        </template>
      </vxe-form-item>
      <vxe-form-item title="性别" field="sex" :item-render="{}">
        <template #default="{ data }">
          <vxe-select v-model="data.sex" placeholder="请选择性别" clearable>
            <vxe-option value="1" label="女"></vxe-option>
            <vxe-option value="2" label="男"></vxe-option>
          </vxe-select>
        </template>
      </vxe-form-item>
      <vxe-form-item>
        <template #default>
          <vxe-button type="submit" status="primary" content="默认尺寸"></vxe-button>
        </template>
      </vxe-form-item>
    </vxe-form>

    <vxe-form :data="formData2" size="medium">
      <vxe-form-item title="名称" field="name" :item-render="{}">
        <template #default="{ data }">
          <vxe-input v-model="data.name" placeholder="请输入名称" clearable></vxe-input>
        </template>
      </vxe-form-item>
      <vxe-form-item title="性别" field="sex" :item-render="{}">
        <template #default="{ data }">
          <vxe-select v-model="data.sex" placeholder="请选择性别" clearable>
            <vxe-option value="1" label="女"></vxe-option>
            <vxe-option value="2" label="男"></vxe-option>
          </vxe-select>
        </template>
      </vxe-form-item>
      <vxe-form-item>
        <template #default>
          <vxe-button type="submit" status="primary" content="中等尺寸"></vxe-button>
        </template>
      </vxe-form-item>
    </vxe-form>

    <vxe-form :data="formData3" size="small">
      <vxe-form-item title="名称" field="name" :item-render="{}">
        <template #default="{ data }">
          <vxe-input v-model="data.name" placeholder="请输入名称" clearable></vxe-input>
        </template>
      </vxe-form-item>
      <vxe-form-item title="性别" field="sex" :item-render="{}">
        <template #default="{ data }">
          <vxe-select v-model="data.sex" placeholder="请选择性别" clearable>
            <vxe-option value="1" label="女"></vxe-option>
            <vxe-option value="2" label="男"></vxe-option>
          </vxe-select>
        </template>
      </vxe-form-item>
      <vxe-form-item>
        <template #default>
          <vxe-button type="submit" status="primary" content="小型尺寸"></vxe-button>
        </template>
      </vxe-form-item>
    </vxe-form>

    <vxe-form :data="formData4" size="mini">
      <vxe-form-item title="名称" field="name" :item-render="{}">
        <template #default="{ data }">
          <vxe-input v-model="data.name" placeholder="请输入名称" clearable></vxe-input>
        </template>
      </vxe-form-item>
      <vxe-form-item title="性别" field="sex" :item-render="{}">
        <template #default="{ data }">
          <vxe-select v-model="data.sex" placeholder="请选择性别" clearable>
            <vxe-option value="1" label="女"></vxe-option>
            <vxe-option value="2" label="男"></vxe-option>
          </vxe-select>
        </template>
      </vxe-form-item>
      <vxe-form-item>
        <template #default>
          <vxe-button type="submit" status="primary" content="超小尺寸"></vxe-button>
        </template>
      </vxe-form-item>
    </vxe-form>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

interface FormDataVO {
  name: string
  sex: string
}

export default Vue.extend({
  data () {
    const formData1: FormDataVO = {
      name: '',
      sex: '0'
    }

    const formData2: FormDataVO = {
      name: '',
      sex: '0'
    }

    const formData3: FormDataVO = {
      name: '',
      sex: '1'
    }

    const formData4: FormDataVO = {
      name: '',
      sex: '1'
    }

    return {
      formData1,
      formData2,
      formData3,
      formData4
    }
  }
})
</script>
