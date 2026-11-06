import { NavVO } from './nav'

export const uploadNavConfig: NavVO = {
  i18nKey: 'app.aside.menu.uploadTitle',
  children: [
    { title: 'API', isSelfAPI: true, routerLink: { name: 'DocsApi', params: { name: 'upload' } } },
    {
      i18nKey: 'app.aside.menu.uploadGlobalInvoke',
      children: [
        { i18nKey: 'app.aside.menu.uploadReadFile', routerLink: { name: 'ComponentUploadGlobalReadFile' } },
        { i18nKey: 'app.aside.menu.uploadDownloadFile', routerLink: { name: 'ComponentUploadGlobalSaveFile' } }
      ]
    },
    {
      i18nKey: 'app.aside.menu.uploadFileUpload',
      children: [
        { i18nKey: 'app.aside.menu.uploadSize', routerLink: { name: 'ComponentUploadFileSize' } },
        { i18nKey: 'app.aside.menu.uploadSingleMode', routerLink: { name: 'ComponentUploadFileBase' } },
        { i18nKey: 'app.aside.menu.uploadReadonly', routerLink: { name: 'ComponentUploadFileReadonly' } },
        { i18nKey: 'app.aside.menu.uploadDisabled', routerLink: { name: 'ComponentUploadFileDisabled' } },
        { i18nKey: 'app.aside.menu.uploadCustomPreview', routerLink: { name: 'ComponentUploadFileCustomReview' } },
        { i18nKey: 'app.aside.menu.uploadUploadMethod', routerLink: { name: 'ComponentUploadFileUploadMethod' } },
        { i18nKey: 'app.aside.menu.uploadPreventUpload', routerLink: { name: 'ComponentUploadFileBeforeSelectMethod' } },
        { i18nKey: 'app.aside.menu.uploadDownloadFile', routerLink: { name: 'ComponentUploadFileDownloadMethod' } },
        { i18nKey: 'app.aside.menu.uploadPreventDownload', routerLink: { name: 'ComponentUploadFileBeforeDownloadMethod' } },
        { i18nKey: 'app.aside.menu.uploadMultipleMode', routerLink: { name: 'ComponentUploadFileMultiple' } },
        { i18nKey: 'app.aside.menu.uploadShowList', routerLink: { name: 'ComponentUploadFileShowList' } },
        { i18nKey: 'app.aside.menu.uploadTip', routerLink: { name: 'ComponentUploadFileTip' } },
        { i18nKey: 'app.aside.menu.uploadDragUpload', routerLink: { name: 'ComponentUploadFileDragToUpload' } },
        { i18nKey: 'app.aside.menu.uploadPasteUpload', routerLink: { name: 'ComponentUploadFilePasteToUpload' } },
        { i18nKey: 'app.aside.menu.uploadUploadProgress', routerLink: { name: 'ComponentUploadFileProgress' } },
        { i18nKey: 'app.aside.menu.uploadSingleValueMode', routerLink: { name: 'ComponentUploadFileSingleMode' } },
        { i18nKey: 'app.aside.menu.uploadUrlMode', routerLink: { name: 'ComponentUploadFileUrlMode' } },
        { i18nKey: 'app.aside.menu.uploadFileTypes', routerLink: { name: 'ComponentUploadFileTypes' } },
        { i18nKey: 'app.aside.menu.uploadLimitCount', routerLink: { name: 'ComponentUploadFileLimitCount' } },
        { i18nKey: 'app.aside.menu.uploadLimitSize', routerLink: { name: 'ComponentUploadFileLimitSize' } },
        { i18nKey: 'app.aside.menu.uploadRemoveFile', routerLink: { name: 'ComponentUploadFileRemoveMethod' } },
        { i18nKey: 'app.aside.menu.uploadPreventRemove', routerLink: { name: 'ComponentUploadFileBeforeRemoveMethod' } },
        // { title: '自定义上传按钮', routerLink: { name: 'ComponentUploadFileShowUploadButton' } },
        { i18nKey: 'app.aside.menu.uploadAutoHideUploadButton', routerLink: { name: 'ComponentUploadFileAutoHidden' } },
        { i18nKey: 'app.aside.menu.uploadShowMore', routerLink: { name: 'ComponentUploadFileMoreBtn' } },
        { i18nKey: 'app.aside.menu.uploadDragSort', routerLink: { name: 'ComponentUploadFileDragSort' } },
        { i18nKey: 'app.aside.menu.uploadRetryUpload', routerLink: { name: 'ComponentUploadFileShowError' } },
        { i18nKey: 'app.aside.menu.uploadManualUpload', routerLink: { name: 'ComponentUploadFileManualSubmit' } },
        // { title: '自定义操作按钮', routerLink: { name: 'ComponentUploadFileAction' } },
        { i18nKey: 'app.aside.menu.uploadManualOperationMethods', routerLink: { name: 'ComponentUploadFileOperFn' } },
        { i18nKey: 'app.aside.menu.uploadEvents', routerLink: { name: 'ComponentUploadFileEvents' } },
        {
          i18nKey: 'app.aside.menu.uploadCustomActionButtons',
          children: [
            { i18nKey: 'app.aside.menu.uploadCustomUploadButtonTemplate', routerLink: { name: 'ComponentUploadFileTemplateDefault' } },
            { i18nKey: 'app.aside.menu.uploadCustomUploadTipTemplate', routerLink: { name: 'ComponentUploadFileTemplateTip' } },
            { i18nKey: 'app.aside.menu.uploadCustomFileNameTemplate', routerLink: { name: 'ComponentUploadFileTemplateName' } },
            { i18nKey: 'app.aside.menu.uploadCustomActionButtonTemplate', routerLink: { name: 'ComponentUploadFileTemplateAction' } },
            { i18nKey: 'app.aside.menu.uploadCustomCornerActionButtonTemplate', routerLink: { name: 'ComponentUploadFileTemplateCorner' } },
            { i18nKey: 'app.aside.menu.uploadCustomFileItemTemplate', routerLink: { name: 'ComponentUploadFileTemplateOption' } }
          ]
        }
      ]
    },
    {
      i18nKey: 'app.aside.menu.uploadImageUpload',
      children: [
        { i18nKey: 'app.aside.menu.uploadSize', routerLink: { name: 'ComponentUploadImageSize' } },
        { i18nKey: 'app.aside.menu.uploadSingleMode', routerLink: { name: 'ComponentUploadImageBase' } },
        { i18nKey: 'app.aside.menu.uploadReadonly', routerLink: { name: 'ComponentUploadImageReadonly' } },
        { i18nKey: 'app.aside.menu.uploadDisabled', routerLink: { name: 'ComponentUploadImageDisabled' } },
        { i18nKey: 'app.aside.menu.uploadCustomImageSize', routerLink: { name: 'ComponentUploadImageImgStyle' } },
        { i18nKey: 'app.aside.menu.uploadCircleImage', routerLink: { name: 'ComponentUploadImageCircle' } },
        { i18nKey: 'app.aside.menu.uploadCustomPreview', routerLink: { name: 'ComponentUploadImageCustomReview' } },
        { i18nKey: 'app.aside.menu.uploadUploadMethod', routerLink: { name: 'ComponentUploadImageUploadMethod' } },
        { i18nKey: 'app.aside.menu.uploadPreventUpload', routerLink: { name: 'ComponentUploadImageBeforeSelectMethod' } },
        { i18nKey: 'app.aside.menu.uploadDownloadFile', routerLink: { name: 'ComponentUploadImageDownloadMethod' } },
        { i18nKey: 'app.aside.menu.uploadPreventDownload', routerLink: { name: 'ComponentUploadImageBeforeDownloadMethod' } },
        { i18nKey: 'app.aside.menu.uploadMultipleMode', routerLink: { name: 'ComponentUploadImageMultiple' } },
        { i18nKey: 'app.aside.menu.uploadShowList', routerLink: { name: 'ComponentUploadImageShowList' } },
        { i18nKey: 'app.aside.menu.uploadTip', routerLink: { name: 'ComponentUploadImageTip' } },
        { i18nKey: 'app.aside.menu.uploadDragUpload', routerLink: { name: 'ComponentUploadImageDragToUpload' } },
        { i18nKey: 'app.aside.menu.uploadPasteUpload', routerLink: { name: 'ComponentUploadImagePasteToUpload' } },
        { i18nKey: 'app.aside.menu.uploadUploadProgress', routerLink: { name: 'ComponentUploadImageProgress' } },
        { i18nKey: 'app.aside.menu.uploadSingleValueMode', routerLink: { name: 'ComponentUploadImageSingleMode' } },
        { i18nKey: 'app.aside.menu.uploadUrlMode', routerLink: { name: 'ComponentUploadImageUrlMode' } },
        { i18nKey: 'app.aside.menu.uploadThumbnailUrl', routerLink: { name: 'ComponentUploadImageThumbnailUrl' } },
        { i18nKey: 'app.aside.menu.uploadFileTypes', routerLink: { name: 'ComponentUploadImageTypes' } },
        { i18nKey: 'app.aside.menu.uploadLimitCount', routerLink: { name: 'ComponentUploadImageLimitCount' } },
        { i18nKey: 'app.aside.menu.uploadLimitSize', routerLink: { name: 'ComponentUploadImageLimitSize' } },
        { i18nKey: 'app.aside.menu.uploadRemoveImage', routerLink: { name: 'ComponentUploadImageRemoveMethod' } },
        { i18nKey: 'app.aside.menu.uploadPreventRemove', routerLink: { name: 'ComponentUploadImageBeforeRemoveMethod' } },
        // { title: '自定义上传按钮', routerLink: { name: 'ComponentUploadImageShowUploadButton' } },
        { i18nKey: 'app.aside.menu.uploadAutoHideButton', routerLink: { name: 'ComponentUploadImageAutoHidden' } },
        { i18nKey: 'app.aside.menu.uploadShowMore', routerLink: { name: 'ComponentUploadImageMoreBtn' } },
        { i18nKey: 'app.aside.menu.uploadDragSort', routerLink: { name: 'ComponentUploadImageDragSort' } },
        { i18nKey: 'app.aside.menu.uploadRetryUpload', routerLink: { name: 'ComponentUploadImageShowError' } },
        { i18nKey: 'app.aside.menu.uploadManualUpload', routerLink: { name: 'ComponentUploadImageManualSubmit' } },
        // { title: '自定义操作按钮', routerLink: { name: 'ComponentUploadImageAction' } },
        { i18nKey: 'app.aside.menu.uploadManualOperationMethods', routerLink: { name: 'ComponentUploadImageOperFn' } },
        { i18nKey: 'app.aside.menu.uploadEvents', routerLink: { name: 'ComponentUploadImageEvents' } },
        {
          i18nKey: 'app.aside.menu.uploadCustomActionButtons',
          children: [
            { i18nKey: 'app.aside.menu.uploadCustomUploadButtonTemplate', routerLink: { name: 'ComponentUploadImageTemplateDefault' } },
            { i18nKey: 'app.aside.menu.uploadCustomUploadTipTemplate', routerLink: { name: 'ComponentUploadImageTemplateTip' } },
            // { title: '自定义文件名模板', routerLink: { name: 'ComponentUploadImageTemplateName' } },
            { i18nKey: 'app.aside.menu.uploadCustomActionButtonTemplate', routerLink: { name: 'ComponentUploadImageTemplateAction' } },
            { i18nKey: 'app.aside.menu.uploadCustomCornerActionButtonTemplate', routerLink: { name: 'ComponentUploadImageTemplateCorner' } },
            { i18nKey: 'app.aside.menu.uploadCustomFileItemTemplate', routerLink: { name: 'ComponentUploadImageTemplateOption' } }
          ]
        }
      ]
    }
  ]
}
