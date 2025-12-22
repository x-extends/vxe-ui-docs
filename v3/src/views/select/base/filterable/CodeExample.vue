<template>
  <div>
    <CodeLight path="select/base/filterable/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="本地搜索">
          通过 <ApiLink name="select" prop="filterable"/> 开启本地搜索功能
        </vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="select/base/filterable/Demo2">
      <template #tip>
        <vxe-tip status="primary">
          通过 <ApiLink name="select" prop="filterMethod"/> 自定义搜索方法的处理逻辑
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
