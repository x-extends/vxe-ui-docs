<template>
  <div>
    <CodeLight path="scrollbar/barWidth/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="滚动条宽度">
          通过 <ApiLink name="scrollbar" prop="x-config" />.<ApiLink name="scrollbar" prop="height" /> 和<ApiLink name="scrollbar" prop="y-config" />.<ApiLink name="scrollbar" prop="width" /> 设置任意一个都会同步滚动条宽度和高度
        </vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="scrollbar/barWidth/Demo2">
      <template #tip>
        <vxe-tip status="primary">
          通过 <ApiLink name="scrollbar" prop="x-config" />.<ApiLink name="scrollbar" prop="height" /> 和<ApiLink name="scrollbar" prop="y-config" />.<ApiLink name="scrollbar" prop="width" /> 单独设置滚动条宽度
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
