<template>
  <div>
    <CodeLight path="tabs/beforeClose/Demo1">
      <template #tip>
        <vxe-tip status="primary">
          关闭逻辑控制， <ApiLink name="tabs" prop="close-config" />.<ApiLink name="tabs" prop="before-method" /> 方法拦截该页签是否允许关闭
        </vxe-tip>
        <vxe-tip status="success">支持t同步或异步</vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="tabs/beforeClose/Demo2">
      <template #tip>
        <vxe-tip status="primary">
          卡片风格的页签
        </vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="tabs/beforeClose/Demo3">
      <template #tip>
        <vxe-tip status="primary">
          带有边框背景的卡片风格页签
        </vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="tabs/beforeClose/Demo4">
      <template #tip>
        <vxe-tip status="primary">
          带有圆角边框背景的卡片风格页签
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
