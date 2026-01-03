<template>
  <div>
    <CodeLight path="segmented/width/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="宽度">
          通过设置 <ApiLink name="segmented" prop="options"/>.<ApiLink name="segmented" prop="width"/> 设置每一项的宽度，也可以通过 <ApiLink name="segmented" prop="option-config"/>.<ApiLink name="segmented" prop="width"/> 设置默认项宽度
        </vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="segmented/width/Demo2">
      <template #tip>
        <vxe-tip status="primary">
          通过设置 <ApiLink name="segmented" prop="width"/>=100% 占满一行，每一项平均宽度
        </vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="segmented/width/Demo3">
      <template #tip>
        <vxe-tip status="primary">
          占满一行，每一项自定义宽度
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
