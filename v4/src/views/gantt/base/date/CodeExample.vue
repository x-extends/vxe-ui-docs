<template>
  <div>
    <CodeLight path="gantt/base/date/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="日期格式">
          支持字符串日期格式自定义，通过 <ApiLink name="gantt" prop="task-config"/>.<ApiLink name="gantt" prop="dateFormat"/>='yyyy-MM-dd HH:mm:ss' 来设置
        </vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="gantt/base/date/Demo2">
      <template #tip>
        <vxe-tip status="primary">
          当时间轴按天展示是，默认是按天解析，当需要精确到时分秒时，可以自定义解析格式
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
