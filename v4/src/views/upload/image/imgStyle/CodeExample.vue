<template>
  <div>
    <CodeLight path="upload/image/imgStyle/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="自定义图片宽高">
          通过 <ApiLink name="upload" prop="image-config"/> 来自定义图片宽高，当尺寸过小时，可以通过 <ApiLink name="upload" prop="show-button-text"/> 隐藏按钮文字
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
