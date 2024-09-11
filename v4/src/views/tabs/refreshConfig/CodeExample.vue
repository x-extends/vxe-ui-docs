<template>
  <div>
    <CodeLight path="tabs/refreshConfig/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="页签可关闭">
        </vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="tabs/refreshConfig/Demo2">
      <template #tip>
        <vxe-tip status="primary">
          显示逻辑控制， <ApiLink name="tabs" prop="refresh-config"/>.<ApiLink name="tabs" prop="visible-method"/> 方法判断该页签是否显示刷新按钮
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
