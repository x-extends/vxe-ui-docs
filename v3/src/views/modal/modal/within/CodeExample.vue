<template>
  <div>
    <CodeLight path="modal/modal/within/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="显示到挂载区域中">
          通过设置 <ApiLink name="modal" prop="append-to" /> 和 <ApiLink name="modal" prop="is-within-append-to" /> 来将弹窗挂载到指定区域显示
        </vxe-tip>
        <vxe-tip status="error" title="小提示">
          <div> 当使用 append-to 时，必须要保证在该组件渲染之前存在该元素</div>
          <div> 父元素（挂载元素）需要有定位属性，如：position: relative</div>
        </vxe-tip>
      </template>
    </CodeLight>

    <div class="my-modal-within-demo1-wrapper" style="height: 100%;height: 600px;position: relative;overflow: auto;background-color: var(--vxe-ui-status-info-tinge-color);"></div>

    <CodeLight path="modal/modal/within/Demo2">
      <template #tip>
        <vxe-tip status="primary">
          完整功能操作
        </vxe-tip>
      </template>
    </CodeLight>

    <div class="my-modal-within-demo2-wrapper" style="height: 100%;height: 600px;position: relative;overflow: auto;background-color: var(--vxe-ui-status-info-tinge-color);"></div>
  </div>
</template>
