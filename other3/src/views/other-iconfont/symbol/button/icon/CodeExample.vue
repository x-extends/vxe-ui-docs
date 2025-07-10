<template>
  <div>
    <CodeLight path="other-iconfont/symbol/button/icon/Demo1" :extraImports="['./demo1.renderer.tsx']">
      <template #tip>
        <vxe-tip status="primary" title="自定义 iconfont Symbol 图标">
          <div>支持使用任意第三方字体图标，例如 <vxe-link href="https://iconfont.cn" target="_blank">iconfont</vxe-link>，在官网创建图标后，引入对应的 Symbol 的 js 文件。</div>
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
