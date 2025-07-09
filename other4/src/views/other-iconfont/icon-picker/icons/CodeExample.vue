<template>
  <div>
    <CodeLight path="other-iconfont/icon-picker/icons/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="自定义 iconfont 字体图标">
          <div>支持使用任意第三方字体图标，例如 iconfont，在官网创建图标后，将生成 Font class 的 css 文件。</div>
          <div>在 head 中引入 <vxe-link href="https://iconfont.cn" target="_blank">{{ '<link rel="stylesheet" href="https://at.alicdn.com/t/c/font_4971056_hneogwb9snt.css">' }}</vxe-link> 就可以使用了</div>
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
