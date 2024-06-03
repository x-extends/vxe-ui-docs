<template>
  <div>
    <CodeLight path="print/page/header/Demo1">
      <template #tip>
        <VxeTips status="primary" title="页眉、标题">
          显示标题
        </VxeTips>
      </template>
    </CodeLight>

    <CodeLight path="print/page/header/Demo2">
      <template #tip>
        <VxeTips status="primary">
          自定义页眉
        </VxeTips>
      </template>
    </CodeLight>

    <CodeLight path="print/page/header/Demo3">
      <template #tip>
        <VxeTips status="primary">
          将页码显示在页眉上方
        </VxeTips>
      </template>
    </CodeLight>
  </div>
</template>
