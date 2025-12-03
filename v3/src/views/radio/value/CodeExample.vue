<template>
  <div>
    <CodeLight path="radio/value/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="自定义值">
          通过 <ApiLink name="checkbox" prop="radio-value"/> 自定义选中值
        </vxe-tip>
        <vxe-tip status="error" title="重要提示">
          参数 <ApiLink name="radio" prop="label"/> 已不建议使用，最新版本统一 <ApiLink name="radio" prop="checked-value"/>
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
