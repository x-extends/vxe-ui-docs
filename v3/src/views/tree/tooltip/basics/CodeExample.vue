<template>
  <div>
    <CodeLight path="tree/tooltip/basics/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="文本超出提示">
          通过 <ApiLink name="tree" prop="tooltip-config"/>.<ApiLink name="tree" prop="mode"/> 来设置显示工具提示和原生title以及超出截取不显示提示
        </vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="tree/tooltip/basics/Demo2">
      <template #tip>
        <vxe-tip status="primary">
          显示原生title
        </vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="tree/tooltip/basics/Demo3">
      <template #tip>
        <vxe-tip status="primary">
          超出自动截取不显示提示
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
