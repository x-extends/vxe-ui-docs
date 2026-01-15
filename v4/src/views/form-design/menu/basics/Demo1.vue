<template>
  <div>
    <div class="row-wrapper">
      <vxe-button status="primary" @click="clickEvent">获取json</vxe-button>
      <vxe-form-design ref="formDesignRef" :widgets="formDesignWidgets" :menu-config="menuConfig" :height="800" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'
import { VxeFormDesignPropTypes, VxeFormDesignInstance } from 'vxe-design'

const formDesignRef = ref<VxeFormDesignInstance>()

const formDesignWidgets = ref<VxeFormDesignPropTypes.Widgets>([
  {
    group: 'base',
    children: [
      'VxeInput'
    ]
  }
])

const menuConfig = reactive<VxeFormDesignPropTypes.MenuConfig>({
  options: [
    [
      { code: '1', name: '新增' },
      { code: '2', name: '删除' },
      {
        code: '3',
        name: '审批',
        children: [
          { code: '4', name: '通过' },
          { code: '5', name: '不通过' }
        ]
      },
      { code: '6', name: '查看' }
    ],
    [
      {
        code: '11',
        name: '更多操作',
        children: [
          { code: '13', name: '编辑' },
          { code: '14', name: '取消' }
        ]
      },
      { code: '10', name: '驳回' }
    ]
  ]
})

const clickEvent = () => {
  const $formDesign = formDesignRef.value
  if ($formDesign) {
    console.log(JSON.stringify($formDesign.getConfig()))
  }
}
</script>
