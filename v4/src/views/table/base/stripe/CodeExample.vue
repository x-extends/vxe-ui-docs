<template>
  <div>
    <CodeLight path="table/base/stripe/Demo1">
      <template #tip>
        <vxe-tips status="primary">
          斑马线条纹，通过设置 <ApiLink name="table" prop="stripe"/> 参数<br>
          <span class="red">（注：斑马线条纹不支持树结构）</span>
        </vxe-tips>
      </template>
    </CodeLight>

    <CodeLight path="table/base/stripe/Demo2">
      <template #tip>
        <vxe-tips status="primary">使用 <ApiLink name="table" prop="row-config"/>.<ApiLink name="table" prop="isHover"/> 属性启用 hover 行高亮</vxe-tips>
      </template>
    </CodeLight>
  </div>
</template>
