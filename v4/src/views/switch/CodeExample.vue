<template>
  <div>
    <CodeLight path="switch/Demo1">
      <template #tip>
        <vxe-tips status="primary" title="开关"></vxe-tips>
      </template>
    </CodeLight>

    <CodeLight path="switch/Demo2">
      <template #tip>
        <vxe-tips status="primary">禁用状态</vxe-tips>
      </template>
    </CodeLight>

    <CodeLight path="switch/Demo3">
      <template #tip>
        <vxe-tips status="primary">自定义值</vxe-tips>
      </template>
    </CodeLight>

    <CodeLight path="switch/Demo4">
      <template #tip>
        <vxe-tips status="primary">自定义名称</vxe-tips>
      </template>
    </CodeLight>

    <CodeLight path="switch/Demo5">
      <template #tip>
        <vxe-tips status="primary">自定义图标</vxe-tips>
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
