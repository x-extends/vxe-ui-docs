<template>
  <div>
    <CodeLight path="tree/base/showIcon/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="隐藏图标">
          树的展开图标按钮可以通过 <ApiLink name="tree" prop="showIcon"/> 来全部显示或全部隐藏。
        </vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="tree/base/showIcon/Demo2">
      <template #tip>
        <vxe-tip status="primary">
          通过 <ApiLink name="tree" prop="visible-method"/> 来隐藏指定节点的树展开图标
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
