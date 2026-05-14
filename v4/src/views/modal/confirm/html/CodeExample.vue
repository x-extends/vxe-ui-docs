<template>
  <div>
    <CodeLight path="modal/confirm/html/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="显示HTML标签">
          通过 <ApiLink name="modal" prop="use-html"/> 属性设置为渲染 HTML 标签
        </vxe-tip>
        <vxe-tip status="error">
          动态渲染任意 HTML 是非常危险的，很容易导致 <a class="link" href="https://zh.wikipedia.org/wiki/%E8%B7%A8%E7%B6%B2%E7%AB%99%E6%8C%87%E4%BB%A4%E7%A2%BC">XSS</a> 攻击，请确保内容是可信的
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
