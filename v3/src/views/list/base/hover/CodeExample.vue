<template>
  <div>
    <CodeLight path="list/base/hover/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="设置列表项高度">
          <div>通过 <ApiLink name="list" prop="row-config"/>.<ApiLink name="list" prop="isHover"/> 设置当鼠标移到每一项时，是否要高亮当前头</div>
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
