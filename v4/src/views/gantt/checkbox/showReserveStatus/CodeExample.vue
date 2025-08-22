<template>
  <div>
    <CodeLight path="gantt/checkbox/showReserveStatus/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="分页显示保留选中状态">
          启用保留选中状态后默认是每页独立状态显示，可以通过 <ApiLink name="gantt" prop="checkbox-config"/>.<ApiLink name="gantt" prop="showReserveStatus"/> 启用，当存在保留记录时，则未勾选当前页数据也会显示未半选状态
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
