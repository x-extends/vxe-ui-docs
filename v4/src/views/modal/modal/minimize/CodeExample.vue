<template>
  <div>
    <CodeLight path="modal/modal/minimize/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="窗口最小化">
          通过 <ApiLink name="modal" prop="show-minimize"/> 开启窗口最小化功能
        </vxe-tip>
        <vxe-tip status="error">默认最大支持 10 个窗口最小化，可以 <ApiLink name="modal" prop="zoom-config"/>.<ApiLink name="modal" prop="minimizeMaxSize"/> 设置</vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="modal/modal/minimize/Demo2">
      <template #tip>
        <vxe-tip status="primary">
          叠加多窗口
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
