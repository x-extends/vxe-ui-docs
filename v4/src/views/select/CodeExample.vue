<template>
  <div>
    <CodeLight path="select/Demo1">
      <template #tip>
        <vxe-tips status="primary" title="下拉框"></vxe-tips>
      </template>

      <template #describe>
        <pre>
          <pre-code>
            | Tab | 切换到上一个 |
            | Shift Tab | 切换到下一个 |
            | Arrow Up ↑ | 展开下拉面板、如果已展开则移动到上一个选项 |
            | Arrow Down ↓ | 展开下拉面板、如果已展开则移动到下一个选项 |
            | Enter | 如果未选择值，则展开下拉面板；如果已展开下拉面板，则选中选项 |
            | Esc | 关闭下拉面板 |
          </pre-code>
        </pre>
      </template>
    </CodeLight>

    <CodeLight path="select/Demo2">
      <template #tip>
        <vxe-tips status="primary">可清除</vxe-tips>
      </template>
    </CodeLight>

    <CodeLight path="select/Demo3">
      <template #tip>
        <vxe-tips status="primary">禁用</vxe-tips>
      </template>
    </CodeLight>

    <CodeLight path="select/Demo4">
      <template #tip>
        <vxe-tips status="primary">多选</vxe-tips>
      </template>
    </CodeLight>

    <CodeLight path="select/Demo5">
      <template #tip>
        <vxe-tips status="primary">可搜索</vxe-tips>
      </template>
    </CodeLight>

    <CodeLight path="select/Demo6">
      <template #tip>
        <vxe-tips status="primary">分组</vxe-tips>
      </template>
    </CodeLight>

    <CodeLight path="select/Demo7">
      <template #tip>
        <vxe-tips status="primary">自定义选项样式/自定义模板</vxe-tips>
      </template>
    </CodeLight>

    <CodeLight path="select/Demo8">
      <template #tip>
        <vxe-tips status="primary">配置式用法</vxe-tips>
      </template>
    </CodeLight>

    <CodeLight path="select/Demo9">
      <template #tip>
        <vxe-tips status="primary">配置式自定义模板</vxe-tips>
      </template>
    </CodeLight>
  </div>
</template>
