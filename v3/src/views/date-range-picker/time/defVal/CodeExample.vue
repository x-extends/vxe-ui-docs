<template>
  <div>
    <CodeLight path="date-range-picker/time/defVal/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="面板的默认日期">
          打开面板时，默认是自适应已选时间或当前时间，也可以通过 <ApiLink name="date-range-picker" prop="default-date"/> 自定义设置
        </vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="date-range-picker/time/defVal/Demo2">
      <template #tip>
        <vxe-tip status="primary">
          分别设置面板不同的默认时间
        </vxe-tip>
        <vxe-tip status="error">
          当设置数为数组时，需要注意结束时间必须大于或等于开始时间，否则将会出现错误
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
