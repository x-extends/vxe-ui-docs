<template>
  <div>
    <CodeLight path="upload/image/manualSubmit/Demo1" previewPath="/resource/docsImg/upload_image_manual_submit.gif">
      <template #tip>
        <vxe-tip status="primary" title="手动上传">
          当需要手动批量提交上传时，可以通过 <ApiLink name="upload" prop="aotu-submit"/>=false 关闭自动提交，然后手动调用 <ApiLink name="upload" prop="submit"/>() 方法提交
        </vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="upload/image/manualSubmit/Demo2" previewPath="/resource/docsImg/upload_image_manual_submit_button.gif">
      <template #tip>
        <vxe-tip status="primary">
          还可以通过 <ApiLink name="upload" prop="show-submit-button"/> 显示上传按钮，单个提交或者手动提交单个。如果上传失败也可以通过 <ApiLink name="upload" prop="show-error-status"/> 显示重新上传按钮
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
