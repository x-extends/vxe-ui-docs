<template>
  <div>
    <CodeLight path="space/itemWidth/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="项宽度">
          通过 <ApiLink name="space" prop="item-width" />、<ApiLink name="space" prop="item-min-width" />、<ApiLink name="space" prop="item-max-width" /> 分别设置每一项的宽度、最小宽度、最大宽度等
        </vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="space/itemWidth/Demo2">
      <template #tip>
        <vxe-tip status="primary">
          还可以通过 <ApiLink name="space" prop="fill" /> 设置是否铺满容器
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
