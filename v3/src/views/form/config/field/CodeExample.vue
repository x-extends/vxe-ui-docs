<template>
  <div>
    <CodeLight path="form/config/field/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="标准结构">使用对象形式</vxe-tip>
        <vxe-tip status="error">
          需要注意字段名不允许出现 "." 关键字，该关键字用于层深层结构的数据
        </vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="form/config/field/Demo2">
      <template #tip>
        <vxe-tip status="primary" title="深层结构">可用于带有复杂层级的场景</vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
