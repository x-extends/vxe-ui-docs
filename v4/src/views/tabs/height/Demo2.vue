<template>
  <div>
    <vxe-radio-group v-model="customHeight">
      <vxe-radio-button checked-value="100px" content="100px"></vxe-radio-button>
      <vxe-radio-button checked-value="200px" content="200px"></vxe-radio-button>
      <vxe-radio-button checked-value="300px" content="300px"></vxe-radio-button>
    </vxe-radio-group>

    <div :style="{height: customHeight}">
      <vxe-tabs type="border-card" height="100%" padding>
        <vxe-tab-pane title="标题1" name="1">
          <template #default>
            <div>内容1</div>
            <div>内容1</div>
            <div>内容1</div>
            <div>内容1</div>
            <div>内容1</div>
            <div>内容1</div>
            <div>内容1</div>
            <div>内容1</div>
            <div>内容1</div>
            <div>内容1</div>
          </template>
        </vxe-tab-pane>
        <vxe-tab-pane title="标题2" name="2">
          <template #default>
            <div>内容2</div>
            <div>内容2</div>
            <div>内容2</div>
            <div>内容2</div>
            <div>内容2</div>
            <div>内容2</div>
          </template>
        </vxe-tab-pane>
        <vxe-tab-pane title="标题3" name="3">
          <template #default>
            <div>内容3</div>
            <div>内容3</div>
            <div>内容3</div>
            <div>内容3</div>
            <div>内容3</div>
            <div>内容3</div>
            <div>内容3</div>
            <div>内容3</div>
            <div>内容3</div>
            <div>内容3</div>
          </template>
        </vxe-tab-pane>
      </vxe-tabs>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const customHeight = ref('300px')
</script>
