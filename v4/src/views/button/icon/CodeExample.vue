<template>
  <div>
    <CodeLight path="button/icon/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="图标">
          图标参数 <ApiLink name="button" prop="icon"/> 是 <ApiLink name="button" prop="prefix-icon"/> 的简写
        </vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="button/icon/Demo2">
      <template #tip>
        <vxe-tip status="primary">文本按钮</vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="button/icon/Demo3">
      <template #tip>
        <vxe-tip status="primary">普通按钮</vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
