<template>
  <div>
    <CodeLight path="gantt/base/field/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="自定义字段">
          通过指定 <ApiLink name="gantt" prop="task-config"/>.<ApiLink name="gantt" prop="startField"/>, <ApiLink name="gantt" prop="task-config"/>.<ApiLink name="gantt" prop="endField"/>, <ApiLink name="gantt" prop="task-config"/>.<ApiLink name="gantt" prop="progressField"/> 来自定义字段名
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
