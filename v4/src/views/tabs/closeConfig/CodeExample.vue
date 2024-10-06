<template>
  <div>
    <CodeLight path="tabs/closeConfig/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="页签可关闭">
        </vxe-tip>
      </template>
    </CodeLight>

    <!-- <CodeLight path="tabs/closeConfig/Demo2">
      <template #tip>
        <vxe-tip status="primary">
          关闭逻辑控制， <ApiLink name="tabs" prop="close-config"/>.<ApiLink name="tabs" prop="before-method"/> 方法拦截该页签是否允许关闭，支持异步
        </vxe-tip>
      </template>
    </CodeLight> -->

    <CodeLight path="tabs/closeConfig/Demo3">
      <template #tip>
        <vxe-tip status="primary">
          显示逻辑控制， <ApiLink name="tabs" prop="close-config"/>.<ApiLink name="tabs" prop="visible-method"/> 方法判断该页签是否显示关闭按钮
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
