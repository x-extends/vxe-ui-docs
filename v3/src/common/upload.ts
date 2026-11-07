import { NavVO } from './nav'

export const uploadNavConfig: NavVO = {
  // 上传
  i18nKey: 'app.aside.menu.uploadTitle',
  children: [
    { title: 'API', isSelfAPI: true, routerLink: { name: 'DocsApi', params: { name: 'upload' } } },
    {
      // 全局调用
      i18nKey: 'app.aside.menu.uploadGlobalInvoke',
      children: [
        // 读取文件
        { i18nKey: 'app.aside.menu.uploadReadFile', routerLink: { name: 'ComponentUploadGlobalReadFile' } },
        // 下载文件
        { i18nKey: 'app.aside.menu.uploadDownloadFile', routerLink: { name: 'ComponentUploadGlobalSaveFile' } }
      ]
    },
    {
      // 附件上传
      i18nKey: 'app.aside.menu.uploadFileUpload',
      children: [
        // 尺寸
        { i18nKey: 'app.aside.menu.uploadSize', routerLink: { name: 'ComponentUploadFileSize' } },
        // 单选模式
        { i18nKey: 'app.aside.menu.uploadSingleMode', routerLink: { name: 'ComponentUploadFileBase' } },
        // 只读
        { i18nKey: 'app.aside.menu.uploadReadonly', routerLink: { name: 'ComponentUploadFileReadonly' } },
        // 禁用
        { i18nKey: 'app.aside.menu.uploadDisabled', routerLink: { name: 'ComponentUploadFileDisabled' } },
        // 自定义预览
        { i18nKey: 'app.aside.menu.uploadCustomPreview', routerLink: { name: 'ComponentUploadFileCustomReview' } },
        // 上传方法
        { i18nKey: 'app.aside.menu.uploadUploadMethod', routerLink: { name: 'ComponentUploadFileUploadMethod' } },
        // 阻止上传
        { i18nKey: 'app.aside.menu.uploadPreventUpload', routerLink: { name: 'ComponentUploadFileBeforeSelectMethod' } },
        // 下载文件
        { i18nKey: 'app.aside.menu.uploadDownloadFile', routerLink: { name: 'ComponentUploadFileDownloadMethod' } },
        // 阻止下载
        { i18nKey: 'app.aside.menu.uploadPreventDownload', routerLink: { name: 'ComponentUploadFileBeforeDownloadMethod' } },
        // 多选模式
        { i18nKey: 'app.aside.menu.uploadMultipleMode', routerLink: { name: 'ComponentUploadFileMultiple' } },
        // 显示列表
        { i18nKey: 'app.aside.menu.uploadShowList', routerLink: { name: 'ComponentUploadFileShowList' } },
        // 提示信息
        { i18nKey: 'app.aside.menu.uploadTip', routerLink: { name: 'ComponentUploadFileTip' } },
        // 拖拽上传
        { i18nKey: 'app.aside.menu.uploadDragUpload', routerLink: { name: 'ComponentUploadFileDragToUpload' } },
        // 粘贴上传
        { i18nKey: 'app.aside.menu.uploadPasteUpload', routerLink: { name: 'ComponentUploadFilePasteToUpload' } },
        // 上传进度
        { i18nKey: 'app.aside.menu.uploadUploadProgress', routerLink: { name: 'ComponentUploadFileProgress' } },
        // 单值模式
        { i18nKey: 'app.aside.menu.uploadSingleValueMode', routerLink: { name: 'ComponentUploadFileSingleMode' } },
        // 地址模式
        { i18nKey: 'app.aside.menu.uploadUrlMode', routerLink: { name: 'ComponentUploadFileUrlMode' } },
        // 文件类型
        { i18nKey: 'app.aside.menu.uploadFileTypes', routerLink: { name: 'ComponentUploadFileTypes' } },
        // 数量限制
        { i18nKey: 'app.aside.menu.uploadLimitCount', routerLink: { name: 'ComponentUploadFileLimitCount' } },
        // 大小限制
        { i18nKey: 'app.aside.menu.uploadLimitSize', routerLink: { name: 'ComponentUploadFileLimitSize' } },
        // 移除文件
        { i18nKey: 'app.aside.menu.uploadRemoveFile', routerLink: { name: 'ComponentUploadFileRemoveMethod' } },
        // 阻止移除
        { i18nKey: 'app.aside.menu.uploadPreventRemove', routerLink: { name: 'ComponentUploadFileBeforeRemoveMethod' } },
        // { title: '自定义上传按钮', routerLink: { name: 'ComponentUploadFileShowUploadButton' } },
        // 自动隐藏上传按钮
        { i18nKey: 'app.aside.menu.uploadAutoHideUploadButton', routerLink: { name: 'ComponentUploadFileAutoHidden' } },
        // 显示更多
        { i18nKey: 'app.aside.menu.uploadShowMore', routerLink: { name: 'ComponentUploadFileMoreBtn' } },
        // 拖拽排序
        { i18nKey: 'app.aside.menu.uploadDragSort', routerLink: { name: 'ComponentUploadFileDragSort' } },
        // 重试上传
        { i18nKey: 'app.aside.menu.uploadRetryUpload', routerLink: { name: 'ComponentUploadFileShowError' } },
        // 手动上传
        { i18nKey: 'app.aside.menu.uploadManualUpload', routerLink: { name: 'ComponentUploadFileManualSubmit' } },
        // { title: '自定义操作按钮', routerLink: { name: 'ComponentUploadFileAction' } },
        // 手动操作方法
        { i18nKey: 'app.aside.menu.uploadManualOperationMethods', routerLink: { name: 'ComponentUploadFileOperFn' } },
        // 事件
        { i18nKey: 'app.aside.menu.uploadEvents', routerLink: { name: 'ComponentUploadFileEvents' } },
        {
          // 自定义操作按钮
          i18nKey: 'app.aside.menu.uploadCustomActionButtons',
          children: [
            // 自定义上传按钮模板
            { i18nKey: 'app.aside.menu.uploadCustomUploadButtonTemplate', routerLink: { name: 'ComponentUploadFileTemplateDefault' } },
            // 自定义上传提示模板
            { i18nKey: 'app.aside.menu.uploadCustomUploadTipTemplate', routerLink: { name: 'ComponentUploadFileTemplateTip' } },
            // 自定义文件名模板
            { i18nKey: 'app.aside.menu.uploadCustomFileNameTemplate', routerLink: { name: 'ComponentUploadFileTemplateName' } },
            // 自定义操作按钮模板
            { i18nKey: 'app.aside.menu.uploadCustomActionButtonTemplate', routerLink: { name: 'ComponentUploadFileTemplateAction' } },
            // 自定义角落操作按钮模板
            { i18nKey: 'app.aside.menu.uploadCustomCornerActionButtonTemplate', routerLink: { name: 'ComponentUploadFileTemplateCorner' } },
            // 自定义文件项模板
            { i18nKey: 'app.aside.menu.uploadCustomFileItemTemplate', routerLink: { name: 'ComponentUploadFileTemplateOption' } }
          ]
        }
      ]
    },
    {
      // 图片上传
      i18nKey: 'app.aside.menu.uploadImageUpload',
      children: [
        // 尺寸
        { i18nKey: 'app.aside.menu.uploadSize', routerLink: { name: 'ComponentUploadImageSize' } },
        // 单选模式
        { i18nKey: 'app.aside.menu.uploadSingleMode', routerLink: { name: 'ComponentUploadImageBase' } },
        // 只读
        { i18nKey: 'app.aside.menu.uploadReadonly', routerLink: { name: 'ComponentUploadImageReadonly' } },
        // 禁用
        { i18nKey: 'app.aside.menu.uploadDisabled', routerLink: { name: 'ComponentUploadImageDisabled' } },
        // 自定义图片尺寸
        { i18nKey: 'app.aside.menu.uploadCustomImageSize', routerLink: { name: 'ComponentUploadImageImgStyle' } },
        // 圆形图片
        { i18nKey: 'app.aside.menu.uploadCircleImage', routerLink: { name: 'ComponentUploadImageCircle' } },
        // 自定义预览
        { i18nKey: 'app.aside.menu.uploadCustomPreview', routerLink: { name: 'ComponentUploadImageCustomReview' } },
        // 上传方法
        { i18nKey: 'app.aside.menu.uploadUploadMethod', routerLink: { name: 'ComponentUploadImageUploadMethod' } },
        // 阻止上传
        { i18nKey: 'app.aside.menu.uploadPreventUpload', routerLink: { name: 'ComponentUploadImageBeforeSelectMethod' } },
        // 下载文件
        { i18nKey: 'app.aside.menu.uploadDownloadFile', routerLink: { name: 'ComponentUploadImageDownloadMethod' } },
        // 阻止下载
        { i18nKey: 'app.aside.menu.uploadPreventDownload', routerLink: { name: 'ComponentUploadImageBeforeDownloadMethod' } },
        // 多选模式
        { i18nKey: 'app.aside.menu.uploadMultipleMode', routerLink: { name: 'ComponentUploadImageMultiple' } },
        // 显示列表
        { i18nKey: 'app.aside.menu.uploadShowList', routerLink: { name: 'ComponentUploadImageShowList' } },
        // 提示信息
        { i18nKey: 'app.aside.menu.uploadTip', routerLink: { name: 'ComponentUploadImageTip' } },
        // 拖拽上传
        { i18nKey: 'app.aside.menu.uploadDragUpload', routerLink: { name: 'ComponentUploadImageDragToUpload' } },
        // 粘贴上传
        { i18nKey: 'app.aside.menu.uploadPasteUpload', routerLink: { name: 'ComponentUploadImagePasteToUpload' } },
        // 上传进度
        { i18nKey: 'app.aside.menu.uploadUploadProgress', routerLink: { name: 'ComponentUploadImageProgress' } },
        // 单值模式
        { i18nKey: 'app.aside.menu.uploadSingleValueMode', routerLink: { name: 'ComponentUploadImageSingleMode' } },
        // 地址模式
        { i18nKey: 'app.aside.menu.uploadUrlMode', routerLink: { name: 'ComponentUploadImageUrlMode' } },
        // 缩略图地址
        { i18nKey: 'app.aside.menu.uploadThumbnailUrl', routerLink: { name: 'ComponentUploadImageThumbnailUrl' } },
        // 文件类型
        { i18nKey: 'app.aside.menu.uploadFileTypes', routerLink: { name: 'ComponentUploadImageTypes' } },
        // 数量限制
        { i18nKey: 'app.aside.menu.uploadLimitCount', routerLink: { name: 'ComponentUploadImageLimitCount' } },
        // 大小限制
        { i18nKey: 'app.aside.menu.uploadLimitSize', routerLink: { name: 'ComponentUploadImageLimitSize' } },
        // 移除图片
        { i18nKey: 'app.aside.menu.uploadRemoveImage', routerLink: { name: 'ComponentUploadImageRemoveMethod' } },
        // 阻止移除
        { i18nKey: 'app.aside.menu.uploadPreventRemove', routerLink: { name: 'ComponentUploadImageBeforeRemoveMethod' } },
        // { title: '自定义上传按钮', routerLink: { name: 'ComponentUploadImageShowUploadButton' } },
        // 自动隐藏按钮
        { i18nKey: 'app.aside.menu.uploadAutoHideButton', routerLink: { name: 'ComponentUploadImageAutoHidden' } },
        // 显示更多
        { i18nKey: 'app.aside.menu.uploadShowMore', routerLink: { name: 'ComponentUploadImageMoreBtn' } },
        // 拖拽排序
        { i18nKey: 'app.aside.menu.uploadDragSort', routerLink: { name: 'ComponentUploadImageDragSort' } },
        // 重试上传
        { i18nKey: 'app.aside.menu.uploadRetryUpload', routerLink: { name: 'ComponentUploadImageShowError' } },
        // 手动上传
        { i18nKey: 'app.aside.menu.uploadManualUpload', routerLink: { name: 'ComponentUploadImageManualSubmit' } },
        // { title: '自定义操作按钮', routerLink: { name: 'ComponentUploadImageAction' } },
        // 手动操作方法
        { i18nKey: 'app.aside.menu.uploadManualOperationMethods', routerLink: { name: 'ComponentUploadImageOperFn' } },
        // 事件
        { i18nKey: 'app.aside.menu.uploadEvents', routerLink: { name: 'ComponentUploadImageEvents' } },
        {
          // 自定义操作按钮
          i18nKey: 'app.aside.menu.uploadCustomActionButtons',
          children: [
            // 自定义上传按钮模板
            { i18nKey: 'app.aside.menu.uploadCustomUploadButtonTemplate', routerLink: { name: 'ComponentUploadImageTemplateDefault' } },
            // 自定义上传提示模板
            { i18nKey: 'app.aside.menu.uploadCustomUploadTipTemplate', routerLink: { name: 'ComponentUploadImageTemplateTip' } },
            // { title: '自定义文件名模板', routerLink: { name: 'ComponentUploadImageTemplateName' } },
            // 自定义操作按钮模板
            { i18nKey: 'app.aside.menu.uploadCustomActionButtonTemplate', routerLink: { name: 'ComponentUploadImageTemplateAction' } },
            // 自定义角落操作按钮模板
            { i18nKey: 'app.aside.menu.uploadCustomCornerActionButtonTemplate', routerLink: { name: 'ComponentUploadImageTemplateCorner' } },
            // 自定义文件项模板
            { i18nKey: 'app.aside.menu.uploadCustomFileItemTemplate', routerLink: { name: 'ComponentUploadImageTemplateOption' } }
          ]
        }
      ]
    }
  ]
}
