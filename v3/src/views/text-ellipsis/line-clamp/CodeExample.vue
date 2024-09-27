<template>
  <div>
    <CodeLight path="text-ellipsis/line-clamp/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="多行文字溢出">
          通过参数 <ApiLink name="text-ellipsis" prop="line-clamp"/> 指定显示几行文本，超出之后会被隐藏并显示省略号
        </vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="text-ellipsis/line-clamp/Demo2">
      <template #tip>
        <vxe-tip status="primary">如果没有超出指定行数，则显示全部</vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
