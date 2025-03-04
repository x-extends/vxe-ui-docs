<template>
  <div>
    <CodeLight path="color-picker/showEyeDropper/Demo1" previewPath="/resource/docsImg/color_picker_show_eye_dropper.gif">
      <template #tip>
        <vxe-tip status="primary" title="显示取色管">
          通过 <ApiLink name="color-picker" prop="show-eye-dropper"/> 启用取色管功能
        </vxe-tip>
        <vxe-tip status="error">
          需要注意取色管功能仅支持部分浏览器，对于不支持的浏览器该功能将自动关闭
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
