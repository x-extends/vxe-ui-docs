<template>
  <div>
    <div class="row-wrapper">
      <vxe-tip status="success" title="表单设计器步骤">
        <div>第一步，拖拽创建可视化表单 JSON，再传给列表设计器</div>
        <div>第二步，根据 Form JSON 生成表单视图</div>
      </vxe-tip>

      <vxe-tabs v-model="selectTab" padding>
        <vxe-tab-pane title="第一步，创建JSON" name="1">
          <vxe-form-design ref="formDesignRef" :height="800" :widgets="formDesignWidgets" show-mobile />
        </vxe-tab-pane>

        <vxe-tab-pane title="第二步，生成视图" name="2">
          <vxe-button status="success" @click="formViewEvent">点击生成表单</vxe-button>
          <vxe-form-view v-model="formData" :config="designConfig" @submit="submitEvent">
            <template #footer>
              <div v-if="designConfig">
                <vxe-button type="submit" status="primary" content="提交"></vxe-button>
                <vxe-button type="reset" content="重置"></vxe-button>
              </div>
            </template>
          </vxe-form-view>
        </vxe-tab-pane>
      </vxe-tabs>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { VxeFormDesignInstance, VxeFormDesignPropTypes, VxeFormViewPropTypes } from 'vxe-design'

const formDesignRef = ref<VxeFormDesignInstance>()
const designConfig = ref<VxeFormViewPropTypes.Config>()
const formData = ref()

const selectTab = ref('1')

const formDesignWidgets = ref<VxeFormDesignPropTypes.Widgets>([
  {
    group: 'base',
    children: [
      'WangEditorWidget'
    ]
  },
  {
    group: 'layout',
    children: [
      'title',
      'row',
      'subtable'
    ]
  }
])

const formViewEvent = () => {
  const $formDesign = formDesignRef.value
  if ($formDesign) {
    designConfig.value = $formDesign.getConfig()
  }
}

const submitEvent = () => {
  console.log('提交表单', formData.value)
}
</script>
