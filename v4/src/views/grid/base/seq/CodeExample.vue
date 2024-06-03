<template>
  <div>
    <CodeLight path="grid/base/seq/Demo1">
      <template #tip>
        <vxe-tips status="primary">设置 <ApiLink name="column" prop="type"/>=<ApiLink name="column" prop="seq"/> 开启序号列</vxe-tips>
      </template>
    </CodeLight>

    <CodeLight path="grid/base/seq/Demo2">
      <template #tip>
        <vxe-tips status="primary">使用 <ApiLink name="table" prop="seq-config"/>={<ApiLink name="table" prop="startIndex"/>} 自定义起始序号</vxe-tips>
      </template>
    </CodeLight>

    <CodeLight path="grid/base/seq/Demo3">
      <template #tip>
        <vxe-tips status="primary">使用 <ApiLink name="table" prop="seq-config"/>={<ApiLink name="table" prop="seqMethod"/>} 自定义方法</vxe-tips>
      </template>
    </CodeLight>
  </div>
</template>
