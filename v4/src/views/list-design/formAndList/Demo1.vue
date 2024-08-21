<template>
  <div>
    <div class="row-wrapper">
      <vxe-tip status="success" title="表单设计器步骤">
        <div>第一步，拖拽创建可视化表单 JSON，再传给列表设计器</div>
        <div>第二步，根据 Form JSON 生成表单视图</div>
      </vxe-tip>
      <vxe-tip status="success" title="列表设计器步骤">
        <div>第一步，根据 Form JSON 拖拽创建可视化列表</div>
        <div>第二步，根据 List JSON 生成列表视图</div>
      </vxe-tip>

      <vxe-tabs v-model="selectTab" padding>
        <vxe-tab-pane title="第一步，创建JSON" name="1">
          <vxe-button status="success" @click="formDesignEvent">赋值</vxe-button>
          <vxe-button status="success" @click="clearFormDesignEvent">清空</vxe-button>
          <vxe-form-design ref="formDesignRef" :height="800" show-mobile />
        </vxe-tab-pane>

        <vxe-tab-pane title="第二步，生成视图" name="2">
          <vxe-button status="success" @click="formViewEvent">点击生成表单</vxe-button>
          <vxe-form-view v-model="formData" :config="formDesignConfig" @submit="submitEvent">
            <template #footer>
              <div v-if="formDesignConfig">
                <vxe-button type="submit" status="primary" content="提交"></vxe-button>
                <vxe-button type="reset" content="重置"></vxe-button>
              </div>
            </template>
          </vxe-form-view>
        </vxe-tab-pane>

        <vxe-tab-pane title="第二步，创建JSON" name="3">
          <vxe-button status="success" @click="listDesignEvent">点击生成列表设计器</vxe-button>
          <vxe-list-design ref="listDesignRef" :height="800" show-mobile />
        </vxe-tab-pane>

        <vxe-tab-pane title="第三步，生成视图" name="4">
          <vxe-button status="success" @click="listViewEvent">点击生成列表</vxe-button>
          <vxe-list-view :config="listDesignConfig" />
        </vxe-tab-pane>
      </vxe-tabs>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { VxeFormDesignInstance, VxeListDesignInstance, VxeListDesignPropTypes, VxeFormDesignPropTypes } from 'vxe-pc-ui'

const formDesignRef = ref<VxeFormDesignInstance>()
const formDesignConfig = ref<VxeFormDesignPropTypes.Config>()
const formData = ref()

const listDesignRef = ref<VxeListDesignInstance>()
const listDesignConfig = ref<VxeListDesignPropTypes.Config>()

const selectTab = ref('1')

const formDesignEvent = () => {
  const $formDesign = formDesignRef.value
  if ($formDesign) {
    const defaultConfigJSON = { formConfig: { title: '', pcVisible: true, pcVertical: true, pcTitleBold: false, pcTitleColon: false, pcTitleAlign: '', pcTitleWidth: '', pcTitleWidthUnit: '', mobileVisible: true, mobileVertical: true, mobileTitleBold: false, mobileTitleColon: false, mobileTitleAlign: '', mobileTitleWidth: '', mobileTitleWidthUnit: '' }, widgetData: [{ id: 100109, field: 'input100109', title: '输入框', name: 'input', required: false, hidden: false, options: { placeholder: '' }, children: [], model: { update: false, value: null } }, { id: 100110, field: 'textarea100110', title: '文本域', name: 'textarea', required: false, hidden: false, options: { placeholder: '' }, children: [], model: { update: false, value: null } }, { id: 100111, field: 'VxeInput100111', title: '输入框', name: 'VxeInput', required: false, hidden: false, options: { placeholder: '' }, children: [], model: { update: false, value: null } }, { id: 100112, field: 'VxeDatePicker100112', title: '日期', name: 'VxeDatePicker', required: false, hidden: false, options: { placeholder: '' }, children: [], model: { update: false, value: null } }] }
    $formDesign.loadConfig(defaultConfigJSON)
  }
}

const clearFormDesignEvent = () => {
  const $formDesign = formDesignRef.value
  if ($formDesign) {
    $formDesign.loadConfig({})
  }
}

const formViewEvent = () => {
  const $formDesign = formDesignRef.value
  if ($formDesign) {
    const designConfig = $formDesign.getConfig()
    formDesignConfig.value = designConfig
    console.log(JSON.stringify(designConfig))
  }
}

const submitEvent = () => {
  console.log('提交表单', formData.value)
}

const listDesignEvent = () => {
  const $formDesign = formDesignRef.value
  const $listDesign = listDesignRef.value
  if ($formDesign && $listDesign) {
    $listDesign.loadFormDesignConfig($formDesign.getConfig())
  }
}

const listViewEvent = () => {
  const $listDesign = listDesignRef.value
  if ($listDesign) {
    const designConfig = $listDesign.getConfig()
    listDesignConfig.value = designConfig
    console.log(JSON.stringify(designConfig))
  }
}
</script>
