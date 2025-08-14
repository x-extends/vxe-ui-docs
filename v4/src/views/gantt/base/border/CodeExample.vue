<template>
  <div>
    <CodeLight path="gantt/base/border/Demo1">
      <template #tip>
        <vxe-tip status="primary">通过设置 <ApiLink name="gantt" prop="border"/>=false|default 显示默认边框</vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="gantt/base/border/Demo2">
      <template #tip>
        <vxe-tip status="primary">通过设置 <ApiLink name="gantt" prop="border"/>=true|full 显示完整边框</vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="gantt/base/border/Demo3">
      <template #tip>
        <vxe-tip status="primary">通过设置 <ApiLink name="gantt" prop="border"/>=outer 显示外边框</vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="gantt/base/border/Demo4">
      <template #tip>
        <vxe-tip status="primary">通过设置 <ApiLink name="gantt" prop="border"/>=inner 显示内边框</vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="gantt/base/border/Demo5">
      <template #tip>
        <vxe-tip status="primary">通过设置 <ApiLink name="gantt" prop="border"/>=none 隐藏边框</vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
