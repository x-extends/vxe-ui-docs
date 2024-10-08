<template>
  <div>
    <CodeLight>
      <template #tip>
        <vxe-tip status="primary" title="CDN 方式">
          <div>可以通过第三方开放的 CDN 来引用， <vxe-link href="https://unpkg.com/vxe-table/">unpkg</vxe-link> 或 <vxe-link href="https://cdn.jsdelivr.net/npm/vxe-table/">cdnjs</vxe-link> 获取到最新版本的资源，并在页面上引入即可</div>
        </vxe-tip>
        <vxe-tip status="error" title="">
          <div>不建议将不受信任的第三方 CDN 用于正式环境，如确实需要使用第三方 CDN 链接记得锁定版本号，锁定版本的方法请查看第三方的说明。</div>
        </vxe-tip>
      </template>

      <template #use>
        <pre>
          <pre-code class="html">
            &lt;!-- 引入样式 --&gt;
            &lt;link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/vxe-pc-ui@4.2.15/lib/style.css"&gt;
            &lt;link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/vxe-table@4.7.85/lib/style.css"&gt;
            &lt;!-- 引入vue --&gt;
            &lt;script src="https://cdn.jsdelivr.net/npm/vue"&gt;&lt;/script&gt;
            &lt;!-- 引入组件 --&gt;
            &lt;script src="https://cdn.jsdelivr.net/npm/xe-utils"&gt;&lt;/script&gt;
            &lt;script src="https://cdn.jsdelivr.net/npm/vxe-pc-ui@4.2.15"&gt;&lt;/script&gt;
            &lt;script src="https://cdn.jsdelivr.net/npm/vxe-table@4.7.85"&gt;&lt;/script&gt;
          </pre-code>
        </pre>
      </template>
    </CodeLight>
  </div>
</template>
