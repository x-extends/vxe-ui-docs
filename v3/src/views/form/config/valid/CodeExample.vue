<template>
  <div>
    <CodeLight path="form/config/valid/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="表单校验">
          默认的表单是自动触发的，只要给按钮加上 type=submit 并且给表单加上 <ApiLink name="form" prop="rules"/> 校验规则和 submit 事件，表单就在自动调用 validate() 方法，并且在校验成功后触发 submit 事件。
        </vxe-tip>
        <vxe-tip status="error">当使用插槽编辑时，同时还需要调用 updateStatus 方法更新表单状态</vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="form/config/valid/Demo2">
      <template #tip>
        <vxe-tip status="primary">
          如果需要手动触发表单时，可以关闭默认行为 prevent-submit，手动调用 validate() 方法
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
