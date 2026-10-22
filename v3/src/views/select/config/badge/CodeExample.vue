<template>
  <div>
    <CodeLight path="select/config/badge/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="显示徽标">
          通过 <ApiLink name="select" prop="show-badge" /> 和 <ApiLink name="select" prop="badge-config" />.<ApiLink name="select" prop="count" /> 显示徽标数值
        </vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="select/config/badge/Demo2">
      <template #tip>
        <vxe-tip status="primary">
          通过 <ApiLink name="select" prop="badge-config" />.<ApiLink name="select" prop="text" /> 显示文本
        </vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="select/config/badge/Demo3">
      <template #tip>
        <vxe-tip status="primary">
          通过 <ApiLink name="select" prop="badge-config" />.<ApiLink name="select" prop="dot" /> 显示小圆点
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
