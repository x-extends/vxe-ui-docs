<template>
  <div>
    <p>
      <vxe-button :prefix-tooltip="{content: '提示内容111'}"></vxe-button>
      <vxe-button :suffix-tooltip="{content: '提示内容111'}"></vxe-button>
    </p>
    <p>
      <vxe-button :prefix-tooltip="{content: '提示内容111', icon: 'vxe-icon-bell'}">前缀提示</vxe-button>
      <vxe-button :suffix-tooltip="{content: '提示内容111', icon: 'vxe-icon-bell'}">后缀提示</vxe-button>
    </p>
    <p>
      <vxe-button icon="vxe-icon-add" :prefix-tooltip="{content: '提示内容111', icon: 'vxe-icon-envelope'}">前缀提示</vxe-button>
      <vxe-button icon="vxe-icon-add" :suffix-tooltip="{content: '提示内容111', icon: 'vxe-icon-envelope'}">后缀提示</vxe-button>
    </p>
  </div>
</template>
