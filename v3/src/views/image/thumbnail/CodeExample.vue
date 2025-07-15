<template>
  <div>
    <CodeLight path="image/thumbnail/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="预览链接">
          当加载高清图片时，会比较慢，这时预览不需要加载大图，只需要加载轻量级的小图预览，可以通过 <ApiLink name="image" prop="get-thumbnail-url-method"/>  来设置
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
