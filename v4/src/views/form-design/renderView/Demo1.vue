<template>
  <div>
    <div class="row-wrapper">
      <p>
        <vxe-button status="primary" @click="clickEvent">点击生成表单</vxe-button>
      </p>
      <div class="design-demo">
        <div class="design-preview">
          <vxe-form-view v-model="formData" :config="designConfig" @submit="submitEvent">
            <template #footer>
              <vxe-button type="submit" status="primary" content="提交"></vxe-button>
              <vxe-button type="reset" content="重置"></vxe-button>
            </template>
          </vxe-form-view>
        </div>
        <div>
          <vxe-form-design ref="formDesignRef" :height="800" showMobile />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { VxeFormDesignInstance, VxeFormViewPropTypes } from 'vxe-pc-ui'

const formDesignRef = ref<VxeFormDesignInstance>()
const designConfig = ref<VxeFormViewPropTypes.Config>()
const formData = ref()

const clickEvent = () => {
  const $formDesign = formDesignRef.value
  if ($formDesign) {
    designConfig.value = $formDesign.getConfig()
  }
}

const submitEvent = () => {
  console.log('提交表单', formData.value)
}
</script>

<style lang="scss" scoped>
.design-demo {
  display: flex;
  flex-direction: row;
  min-width: 1400px;
  & > div {
    width: 50%;
    flex-shrink: 0;
    padding: 0 10px;
    height: 800px;
    overflow: auto;
    & > div {
      min-height: 100%;
      padding: 10px;
      border: 5px solid #47494c;
    }
  }
}
</style>
