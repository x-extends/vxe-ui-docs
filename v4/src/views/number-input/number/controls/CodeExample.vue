<template>
  <div>
    <CodeLight path="number-input/number/controls/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="控制按钮">
          操作按钮，可以通过 <ApiLink name="number-input" prop="control-config"/>.<ApiLink name="number-input" prop="showButton"/> 关闭
        </vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="number-input/number/controls/Demo2">
      <template #tip>
        <vxe-tip status="primary">
          鼠标滚轮操作，可以通过 <ApiLink name="number-input" prop="control-config"/>.<ApiLink name="number-input" prop="isWheel"/> 关闭
        </vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="number-input/number/controls/Demo3">
      <template #tip>
        <vxe-tip status="primary">
          全部关闭，可以通过 <ApiLink name="number-input" prop="control-config"/>.<ApiLink name="number-input" prop="enabled"/> 关闭
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
