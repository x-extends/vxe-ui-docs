<template>
  <div>
    <CodeLight path="tool/clipboard/Demo1">
      <template #tip>
        <VxeTips status="primary">
          通过调用 VxeUI.clipboard.copy('xxx') 方法将字符串复制到剪贴板
        </VxeTips>
        <VxeTips status="error" title="注意">
          需要注意该方法只会在事件中调用才能触发
        </VxeTips>
      </template>
    </CodeLight>
  </div>
</template>
