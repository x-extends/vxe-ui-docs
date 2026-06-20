<template>
  <div>
    <vxe-collapse padding border>
      <vxe-collapse-pane title="标题1" name="1">
        <template #default>
          <div>内容1</div>
        </template>
      </vxe-collapse-pane>
      <vxe-collapse-pane title="标题2" name="2">
        <template #default>
          <div style="color:red">内容2</div>
        </template>
      </vxe-collapse-pane>
      <vxe-collapse-pane title="标题3" name="3">
        <template #default>
          <div>内容3</div>
        </template>
      </vxe-collapse-pane>
      <vxe-collapse-pane title="标题4" name="4">
        <template #default>
          <div style="color:blue">内容4</div>
        </template>
      </vxe-collapse-pane>
      <vxe-collapse-pane title="标题5" name="5">
        <template #default>
          <div>内容5</div>
        </template>
      </vxe-collapse-pane>
    </vxe-collapse>
  </div>
</template>
