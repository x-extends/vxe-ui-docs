<template>
  <div>
    <CodeLight path="upload/image/thumbnailUrl/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="缩略图">
          <div>默认的地址一般是原图，当显示为缩略图时，可能加载会较慢。可以通过自定义缩略图链接来优化。</div>
          <div>通过 <ApiLink name="upload" prop="get-thumbnail-url-method"/> 自定义缩略图链接</div>
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
