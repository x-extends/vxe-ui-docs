<template>
  <div>
    <CodeLight path="tree-select/base/hierarchy/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="层级结构">
          支持渲染带有树层级结构的数据，例如 <ApiLink name="tree-select" prop="tree-config"/>.<ApiLink name="tree-select" prop="title-field"/>、<ApiLink name="tree-select" prop="tree-config"/>.<ApiLink name="tree-select" prop="children-field"/>
        </vxe-tip>
        <vxe-tip status="error">
          该模式下仅支持部分功能，不支持虚拟滚动，数据量大过时不建议使用
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
