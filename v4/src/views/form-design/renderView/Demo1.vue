<template>
  <div>
    <div class="row-wrapper">
      <vxe-tip status="success" title="表单设计器步骤">
        <div>第一步，拖拽创建可视化表单 JSON，再传给列表设计器</div>
        <div>第二步，根据 Form JSON 生成表单视图</div>
      </vxe-tip>

      <vxe-tabs v-model="selectTab" padding>
        <vxe-tab-pane title="第一步，创建JSON" name="1">
          <vxe-form-design ref="formDesignRef" :height="800" show-mobile />
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
import { ref, nextTick } from 'vue'
import { VxeFormDesignInstance, VxeFormViewPropTypes } from 'vxe-pc-ui'

const formDesignRef = ref<VxeFormDesignInstance>()
const designConfig = ref<VxeFormViewPropTypes.Config>()
const formData = ref()

const selectTab = ref('1')

const formViewEvent = () => {
  const $formDesign = formDesignRef.value
  if ($formDesign) {
    designConfig.value = $formDesign.getConfig()
    console.log(JSON.stringify(designConfig.value))
  }
}

const submitEvent = () => {
  console.log('提交表单', formData.value)
}

nextTick(() => {
  const $formDesign = formDesignRef.value
  if ($formDesign) {
    const defaultConfigJSON = { formConfig: { title: '', pcVisible: true, pcVertical: true, pcTitleBold: false, pcTitleColon: false, pcTitleAlign: '', pcTitleWidth: '', pcTitleWidthUnit: '', mobileVisible: true, mobileVertical: true, mobileTitleBold: false, mobileTitleColon: false, mobileTitleAlign: '', mobileTitleWidth: '', mobileTitleWidthUnit: '' }, widgetData: [{ id: 100109, field: 'input100109', title: '输入框', name: 'input', required: false, hidden: false, options: { placeholder: '' }, children: [], model: { update: false, value: null } }, { id: 100110, field: 'textarea100110', title: '文本域', name: 'textarea', required: false, hidden: false, options: { placeholder: '' }, children: [], model: { update: false, value: null } }, { id: 100111, field: 'VxeInput100111', title: '输入框', name: 'VxeInput', required: false, hidden: false, options: { placeholder: '' }, children: [], model: { update: false, value: null } }, { id: 100112, field: 'VxeDatePicker100112', title: '日期', name: 'VxeDatePicker', required: false, hidden: false, options: { placeholder: '', defaultValue: { type: '', value: '' } }, children: [], model: { update: false, value: null } }] }
    $formDesign.loadConfig(defaultConfigJSON)
  }
})
</script>
