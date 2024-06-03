<template>
  <div>
    <CodeLight path="table/base/maxHeight/Demo1">
      <template #tip>
        <vxe-tips status="primary">当一个表格高度需要自适应的时候可以设置为最大高度，通过设置 <ApiLink name="table" prop="max-height"/> 参数</vxe-tips>
      </template>
    </CodeLight>

    <CodeLight path="table/base/maxHeight/Demo2">
      <template #tip>
        <vxe-tips status="primary">如果设置 <ApiLink name="table" prop="max-height"/>，当内容为达到最大高度时会自适应</vxe-tips>
      </template>
    </CodeLight>

    <CodeLight path="table/base/maxHeight/Demo3">
      <template #tip>
        <vxe-tips status="primary">也可以设置相对于父容器的百分比</vxe-tips>
      </template>
    </CodeLight>
  </div>
</template>
