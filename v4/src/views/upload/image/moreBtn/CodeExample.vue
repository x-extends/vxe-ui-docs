<template>
  <div>
    <CodeLight path="upload/image/moreBtn/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="缩略模式，显示更多">
          对于某些场景中，可能不需要全部展示出来，可以通过 <ApiLink name="upload" prop="more-config"/>.<ApiLink name="upload" prop="maxCount"/> 指定显示数量，通过更多按钮来显示全部
        </vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="upload/image/moreBtn/Demo2">
      <template #tip>
        <vxe-tip status="primary">
          显示横向布局
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
