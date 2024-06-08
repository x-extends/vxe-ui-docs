<template>
  <div>
    <CodeLight path="pager/pageSize/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="自定义每页大小">
          通过参数 <ApiLink name="pager" prop="page-sizes"/> 自定义下拉列表选项
        </vxe-tip>
      </template>

      <template #describe>
        <pre>
          <pre-code>
            | Arrow Up ↑ | 如果在当前页输入框内则向上翻页 |
            | Arrow Down ↓ | 如果在当前页输入框内则向下翻页 |
            | Tab | 切换到上一个 |
            | Shift + Tab | 切换到下一个 |
            | Spacebar | 按下点击 |
            | Enter | 点击 |
          </pre-code>
        </pre>
      </template>
    </CodeLight>

    <CodeLight path="pager/pageSize/Demo2">
      <template #tip>
        <vxe-tip status="primary">自定义每页大小下拉框的方向，通过参数 <ApiLink name="pager" prop="page-size-placement"/> 设置</vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
