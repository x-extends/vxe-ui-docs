<template>
  <div>
    <p>
      <vxe-button mode="text" :prefix-tooltip="{content: '提示内容111'}"></vxe-button>
      <vxe-button mode="text" :suffix-tooltip="{content: '提示内容111'}"></vxe-button>
    </p>
    <p>
      <vxe-button mode="text" :prefix-tooltip="{content: '提示内容111', icon: 'vxe-icon-bell'}">前缀提示</vxe-button>
      <vxe-button mode="text" :suffix-tooltip="{content: '提示内容111', icon: 'vxe-icon-bell'}">后缀提示</vxe-button>
    </p>
    <p>
      <vxe-button mode="text" icon="vxe-icon-add" :prefix-tooltip="{content: '提示内容111', icon: 'vxe-icon-envelope'}">前缀提示</vxe-button>
      <vxe-button mode="text" icon="vxe-icon-add" :suffix-tooltip="{content: '提示内容111', icon: 'vxe-icon-envelope'}">后缀提示</vxe-button>
    </p>
  </div>
</template>
