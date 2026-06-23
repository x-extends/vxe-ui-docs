<template>
  <div>
    <CodeLight path="gantt/scales/minuteSecond/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="秒视图">
          默认解析到秒 yyyy-MM-dd HH:mm:ss，以秒为维度进行渲染
        </vxe-tip>
        <vxe-tip status="error">
          当使用秒视图时，应该控制好天数的限制，比如一分钟内，当渲染分钟数过大时，渲染的复杂度将会以倍数增长，渲染越多将会越慢
        </vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="gantt/scales/minuteSecond/Demo2">
      <template #tip>
        <vxe-tip status="primary">
          指定格式，精确到毫秒，自动在单元格内按实际进度显示
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
