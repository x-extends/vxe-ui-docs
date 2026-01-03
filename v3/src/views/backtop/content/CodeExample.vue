<template>
  <div>
    <CodeLight path="backtop/content/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="文字">
          可以通过 <ApiLink name="backtop" prop="content"/> 自定义文字和 <ApiLink name="backtop" prop="show-content"/> 是否显示文字
        </vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="backtop/content/Demo2">
      <template #tip>
        <vxe-tip status="primary">
          不显示图标
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
