<template>
  <div>
    <CodeLight path="print/page/margin/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="设置边距">
          通过设置 <ApiLink name="print" prop="page-style"/>.<ApiLink name="print" prop="margin"/> 设置打印的页面边距
        </vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="print/page/margin/Demo2">
      <template #tip>
        <vxe-tip status="primary" title="设置头部和维护高度">
          通过设置 <ApiLink name="print" prop="page-style"/>.<ApiLink name="print" prop="header"/>.<ApiLink name="print" prop="height"/> 设置打印的页面头部高度、<ApiLink name="print" prop="page-style"/>.<ApiLink name="print" prop="footer"/>.<ApiLink name="print" prop="height"/> 设置打印的页面尾部高度
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
