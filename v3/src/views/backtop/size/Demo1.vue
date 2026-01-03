<template>
  <div>
    <div style="position: relative;">
      <div id="bSize1" style="height: 200px;overflow: auto;border: 1px solid red;">
        <div style="height: 150px;">内容111</div>
        <div style="height: 150px;">内容222</div>
        <div style="height: 150px;">内容333</div>
        <div style="height: 150px;">内容444</div>
      </div>
      <vxe-backtop target="#bSize1"></vxe-backtop>
    </div>
    <div style="position: relative;">
      <div id="bSize2" style="height: 200px;overflow: auto;border: 1px solid blue;">
        <div style="height: 150px;">内容111</div>
        <div style="height: 150px;">内容222</div>
        <div style="height: 150px;">内容333</div>
        <div style="height: 150px;">内容444</div>
      </div>
      <vxe-backtop target="#bSize2" size="medium"></vxe-backtop>
    </div>
    <div style="position: relative;">
      <div id="bSize3" style="height: 200px;overflow: auto;border: 1px solid red;">
        <div style="height: 150px;">内容111</div>
        <div style="height: 150px;">内容222</div>
        <div style="height: 150px;">内容333</div>
        <div style="height: 150px;">内容444</div>
      </div>
      <vxe-backtop target="#bSize3" size="small"></vxe-backtop>
    </div>
    <div style="position: relative;">
      <div id="bSize4" style="height: 200px;overflow: auto;border: 1px solid blue;">
        <div style="height: 150px;">内容111</div>
        <div style="height: 150px;">内容222</div>
        <div style="height: 150px;">内容333</div>
        <div style="height: 150px;">内容444</div>
      </div>
      <vxe-backtop target="#bSize4" size="mini"></vxe-backtop>
    </div>
  </div>
</template>
