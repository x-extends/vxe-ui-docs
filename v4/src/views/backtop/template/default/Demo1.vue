<template>
  <div>
    <div style="position: relative;">
      <div id="bTmpl1" style="height: 400px;overflow: auto;border: 1px solid red;">
        <div style="height: 150px;">内容111</div>
        <div style="height: 150px;">内容222</div>
        <div style="height: 150px;">内容333</div>
        <div style="height: 150px;">内容444</div>
        <div style="height: 150px;">内容555</div>
        <div style="height: 150px;">内容666</div>
        <div style="height: 150px;">内容777</div>
        <div style="height: 150px;">内容888</div>
      </div>
      <vxe-backtop target="#bTmpl1">
        <template #default>
          <vxe-button icon="vxe-icon-arrows-up"></vxe-button>
        </template>
      </vxe-backtop>
    </div>
  </div>
</template>
