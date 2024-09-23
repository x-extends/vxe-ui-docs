<template>
  <div>
    <CodeLight path="drawer/confirmClosable/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="点击确认按钮不可关闭">
          默认是开启的，可以通过设置 <ApiLink name="drawer" prop="confirm-closable"/> 参数关闭
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
