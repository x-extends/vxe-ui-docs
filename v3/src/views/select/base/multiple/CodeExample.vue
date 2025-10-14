<template>
  <div>
    <CodeLight path="select/base/multiple/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="多选"></vxe-tip>
        <vxe-tip status="error">
          需要注意，value 值不能包含逗号，逗号属于分割值
        </vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="select/base/multiple/Demo2">
      <template #tip>
        <vxe-tip status="primary">
          当已选很多时，可以设置最多显示多少个已选
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
