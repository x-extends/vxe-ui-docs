<template>
  <div>
    <CodeLight path="splitter/basics/style/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="修改样式">
          通过 <ApiLink name="splitter" prop="bar-config"/>.<ApiLink name="splitter" prop="width"/> 和 <ApiLink name="splitter" prop="bar-config"/>.<ApiLink name="splitter" prop="height"/> 修改样式
        </vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="splitter/basics/style/Demo2">
      <template #tip>
        <vxe-tip status="primary">
          通过 css 变量修改样式
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
