<template>
  <div>
    <CodeLight path="switch/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="开关"></vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="switch/Demo2">
      <template #tip>
        <vxe-tip status="primary">禁用状态</vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="switch/Demo3">
      <template #tip>
        <vxe-tip status="primary">自定义值</vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="switch/Demo4">
      <template #tip>
        <vxe-tip status="primary">自定义名称</vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="switch/Demo5">
      <template #tip>
        <vxe-tip status="primary">自定义图标</vxe-tip>
      </template>

      <template #describe>
        <pre>
          <pre-code>
            | Tab | 切换到上一个 |
            | Shift Tab | 切换到下一个 |
            | Spacebar | 按下点击 |
            | Enter | 点击 |
          </pre-code>
        </pre>
      </template>
    </CodeLight>
  </div>
</template>
