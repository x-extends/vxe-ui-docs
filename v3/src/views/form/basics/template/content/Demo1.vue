<template>
  <div>
    <vxe-form :data="formData">
      <vxe-form-item title="名称" field="name" span="24" :item-render="{}">
        <template #default>
          <vxe-input v-model="formData.name"></vxe-input>
        </template>
      </vxe-form-item>
      <vxe-form-item title="性别" field="sex" span="24" :item-render="{}">
        <template #default>
          <vxe-input v-model="formData.sex" style="width: 40%;"></vxe-input>
          <vxe-checkbox v-model="formData.isEnable"></vxe-checkbox>
          <vxe-input v-model="formData.age" style="width: 40%;"></vxe-input>
        </template>
      </vxe-form-item>
      <vxe-form-item title="图片" field="age" span="24" :item-render="{}">
        <template #default>
          <vxe-image :src="formData.imgUrl" :height="200"></vxe-image>
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
  age: string
  isEnable: boolean
  imgUrl: string
}

export default Vue.extend({
  data () {
    const formData: FormDataVO = {
      name: 'test1',
      nickname: 'Testing',
      sex: '',
      age: '',
      isEnable: true,
      imgUrl: 'https://vxeui.com/resource/img/fj577.jpg'
    }

    return {
      formData
    }
  }
})
</script>
