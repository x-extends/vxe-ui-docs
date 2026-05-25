<template>
  <div>
    <CodeLight path="select/config/allowCreate/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="可新增">
          通过 <ApiLink name="select" prop="allow-create"/> 启用可新增功能，当搜索后选项不存在时，可以手动新增选项；当输入的值不在 <ApiLink name="select" prop="options"/> 选项中时，可以通过 <ApiLink name="select" prop="lazy-options"/> 来自定义。
        </vxe-tip>
        <vxe-tip status="error">
          由于新增的数据是以输入值作为 value 的，应该避免输入值与选项列表中的值冲突，否则将会影响部分功能出问题
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
