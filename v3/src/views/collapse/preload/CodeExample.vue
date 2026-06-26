<template>
  <div>
    <CodeLight path="collapse/preload/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="预加载">
          通过 <ApiLink name="collapse-pane" prop="preload"/> 设置为预加载，内容将会被立刻加载而不是等展开时再加载，对于需要提前加载的场景非常有用
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
