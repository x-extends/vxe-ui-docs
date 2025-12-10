<template>
  <div>
    <vxe-select v-model="val1" v-bind="selectOptions">
      <template #option="{ option }">
        <div class="user-select-item">
          <img :src="option.url" class="user-select-img" />
          <span class="user-select-name">
            <span>{{ option.label }}</span>
            <span v-if="option.status" :class="['user-select-status', option.status]">{{ getUserStatus(option.status) }}</span>
          </span>
        </div>
      </template>
    </vxe-select>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import { VxeSelectProps } from 'vxe-pc-ui'

const val1 = ref()

const selectOptions = reactive<VxeSelectProps>({
  multiple: true,
  filterable: true,
  clearable: true,
  placeholder: '人员选择',
  optionConfig: {
    height: 40
  },
  popupConfig: {
    width: 300,
    height: 420
  },
  options: [
    { label: '张三', value: '1', status: 'dimission', url: 'https://vxeui.com/resource/avatarImg/avatar1.jpeg' },
    { label: '小明', value: '2', status: '', url: 'https://vxeui.com/resource/avatarImg/avatar2.jpeg' },
    { label: '老刘', value: '3', status: 'trial', url: 'https://vxeui.com/resource/avatarImg/avatar3.jpeg' },
    { label: '李四', value: '4', status: '', url: 'https://vxeui.com/resource/avatarImg/avatar4.jpeg' },
    { label: '老六', value: '5', status: 'trial', url: 'https://vxeui.com/resource/avatarImg/avatar5.jpeg' },
    { label: '王五', value: '6', status: '', url: 'https://vxeui.com/resource/avatarImg/avatar6.jpeg' },
    { label: '小陈', value: '7', status: '', url: 'https://vxeui.com/resource/avatarImg/avatar7.jpeg' },
    { label: '老徐', value: '8', status: 'dimission', url: 'https://vxeui.com/resource/avatarImg/avatar8.jpeg' },
    { label: '小瑞', value: '9', status: '', url: 'https://vxeui.com/resource/avatarImg/avatar9.jpeg' },
    { label: '小马', value: '10', status: '', url: 'https://vxeui.com/resource/avatarImg/avatar10.jpeg' },
    { label: '小徐', value: '11', status: 'trial', url: 'https://vxeui.com/resource/avatarImg/avatar11.jpeg' },
    { label: '小三', value: '12', status: 'dimission', url: 'https://vxeui.com/resource/avatarImg/avatar12.jpeg' },
    { label: '老李', value: '13', status: '', url: 'https://vxeui.com/resource/avatarImg/avatar13.jpeg' },
    { label: '小四', value: '14', status: '', url: 'https://vxeui.com/resource/avatarImg/avatar14.jpeg' },
    { label: '小李', value: '15', status: 'trial', url: 'https://vxeui.com/resource/avatarImg/avatar15.jpeg' }
  ]
})

const getUserStatus = (status: string) => {
  switch (status) {
    case 'dimission': return '离职'
    case 'trial': return '试用期'
  }
  return ''
}
</script>

<style lang="scss" scoped>
.user-select-item {
  position: relative;
  height: 40px;
  display: flex;
  flex-direction: row;
  align-items: center;
}
.user-select-img {
  width: 30px;
  height: 30px;
  border-radius: 50%;
}
.user-select-name {
  padding-left: 5px;
}
.user-select-status {
  font-size: 12px;
  position: absolute;
  top: 0;
  padding-left: 5px;
  &.dimission {
    color: red;
  }
  &.trial {
    color: orange;
  }
}
</style>
