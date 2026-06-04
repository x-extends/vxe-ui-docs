import { NavVO } from './nav'

export const uploadNavConfig: NavVO & { children: NavVO[] } = {
  title: 'Upload 上传',
  children: [
    { title: 'API', isSelfAPI: true, routerLink: { name: 'DocsApi', params: { name: 'upload' } } },
    {
      title: '全局调用',
      children: [
        { title: '读取文件', routerLink: { name: 'ComponentUploadGlobalReadFile' } },
        { title: '下载文件', routerLink: { name: 'ComponentUploadGlobalSaveFile' } }
      ]
    },
    {
      title: '文件上传',
      children: [
        { title: '尺寸大小', routerLink: { name: 'ComponentUploadFileSize' } },
        { title: '单选模式', routerLink: { name: 'ComponentUploadFileBase' } },
        { title: '只读状态', routerLink: { name: 'ComponentUploadFileReadonly' } },
        { title: '禁用状态', routerLink: { name: 'ComponentUploadFileDisabled' } },
        { title: '自定义预览', routerLink: { name: 'ComponentUploadFileCustomReview' } },
        { title: '上传方法', routerLink: { name: 'ComponentUploadFileUploadMethod' } },
        { title: '阻止上传', routerLink: { name: 'ComponentUploadFileBeforeSelectMethod' } },
        { title: '下载文件', routerLink: { name: 'ComponentUploadFileDownloadMethod' } },
        { title: '阻止下载', routerLink: { name: 'ComponentUploadFileBeforeDownloadMethod' } },
        { title: '多选模式', routerLink: { name: 'ComponentUploadFileMultiple' } },
        { title: '显示列表', routerLink: { name: 'ComponentUploadFileShowList' } },
        { title: '提示', routerLink: { name: 'ComponentUploadFileTip' } },
        { title: '拖拽上传', routerLink: { name: 'ComponentUploadFileDragToUpload' } },
        { title: '粘贴上传', routerLink: { name: 'ComponentUploadFilePasteToUpload' } },
        { title: '上传进度', routerLink: { name: 'ComponentUploadFileProgress' } },
        { title: '唯一值模式', routerLink: { name: 'ComponentUploadFileSingleMode' } },
        { title: 'URL 模式', routerLink: { name: 'ComponentUploadFileUrlMode' } },
        { title: '指定文件类型', routerLink: { name: 'ComponentUploadFileTypes' } },
        { title: '限制上传数量', routerLink: { name: 'ComponentUploadFileLimitCount' } },
        { title: '限制附件大小', routerLink: { name: 'ComponentUploadFileLimitSize' } },
        { title: '删除文件', routerLink: { name: 'ComponentUploadFileRemoveMethod' } },
        { title: '阻止删除', routerLink: { name: 'ComponentUploadFileBeforeRemoveMethod' } },
        // { title: '自定义上传按钮', routerLink: { name: 'ComponentUploadFileShowUploadButton' } },
        { title: '自动隐藏上传按钮', routerLink: { name: 'ComponentUploadFileAutoHidden' } },
        { title: '显示更多', routerLink: { name: 'ComponentUploadFileMoreBtn' } },
        { title: '拖拽调整顺序', routerLink: { name: 'ComponentUploadFileDragSort' } },
        { title: '失败重新上传', routerLink: { name: 'ComponentUploadFileShowError' } },
        { title: '手动上传', routerLink: { name: 'ComponentUploadFileManualSubmit' } },
        // { title: '自定义操作按钮', routerLink: { name: 'ComponentUploadFileAction' } },
        { title: '手动操作方法', routerLink: { name: 'ComponentUploadFileOperFn' } },
        {
          title: '自定义操作按钮',
          children: [
            { title: '自定义上传按钮模板', routerLink: { name: 'ComponentUploadFileTemplateDefault' } },
            { title: '自定义上传提示模板', routerLink: { name: 'ComponentUploadFileTemplateTip' } },
            { title: '自定义文件名模板', routerLink: { name: 'ComponentUploadFileTemplateName' } },
            { title: '自定义操作按钮模板', routerLink: { name: 'ComponentUploadFileTemplateAction' } },
            { title: '自定义额外操作按钮模板', routerLink: { name: 'ComponentUploadFileTemplateCorner' } },
            { title: '自定义文件项模板', routerLink: { name: 'ComponentUploadFileTemplateOption' } }
          ]
        }
      ]
    },
    {
      title: '图片上传',
      children: [
        { title: '尺寸大小', routerLink: { name: 'ComponentUploadImageSize' } },
        { title: '单选模式', routerLink: { name: 'ComponentUploadImageBase' } },
        { title: '只读状态', routerLink: { name: 'ComponentUploadImageReadonly' } },
        { title: '禁用状态', routerLink: { name: 'ComponentUploadImageDisabled' } },
        { title: '自定义图片宽高', routerLink: { name: 'ComponentUploadImageImgStyle' } },
        { title: '圆形图片', routerLink: { name: 'ComponentUploadImageCircle' } },
        { title: '自定义预览', routerLink: { name: 'ComponentUploadImageCustomReview' } },
        { title: '上传方法', routerLink: { name: 'ComponentUploadImageUploadMethod' } },
        { title: '阻止上传', routerLink: { name: 'ComponentUploadImageBeforeSelectMethod' } },
        { title: '下载文件', routerLink: { name: 'ComponentUploadImageDownloadMethod' } },
        { title: '阻止下载', routerLink: { name: 'ComponentUploadImageBeforeDownloadMethod' } },
        { title: '多选模式', routerLink: { name: 'ComponentUploadImageMultiple' } },
        { title: '显示列表', routerLink: { name: 'ComponentUploadImageShowList' } },
        { title: '提示', routerLink: { name: 'ComponentUploadImageTip' } },
        { title: '拖拽上传', routerLink: { name: 'ComponentUploadImageDragToUpload' } },
        { title: '粘贴上传', routerLink: { name: 'ComponentUploadImagePasteToUpload' } },
        { title: '上传进度', routerLink: { name: 'ComponentUploadImageProgress' } },
        { title: '唯一值模式', routerLink: { name: 'ComponentUploadImageSingleMode' } },
        { title: 'URL 模式', routerLink: { name: 'ComponentUploadImageUrlMode' } },
        { title: '缩略图链接地址', routerLink: { name: 'ComponentUploadImageThumbnailUrl' } },
        { title: '指定文件类型', routerLink: { name: 'ComponentUploadImageTypes' } },
        { title: '限制上传数量', routerLink: { name: 'ComponentUploadImageLimitCount' } },
        { title: '限制附件大小', routerLink: { name: 'ComponentUploadImageLimitSize' } },
        { title: '删除图片', routerLink: { name: 'ComponentUploadImageRemoveMethod' } },
        { title: '阻止删除', routerLink: { name: 'ComponentUploadImageBeforeRemoveMethod' } },
        // { title: '自定义上传按钮', routerLink: { name: 'ComponentUploadImageShowUploadButton' } },
        { title: '自动隐藏按钮', routerLink: { name: 'ComponentUploadImageAutoHidden' } },
        { title: '显示更多', routerLink: { name: 'ComponentUploadImageMoreBtn' } },
        { title: '拖拽调整顺序', routerLink: { name: 'ComponentUploadImageDragSort' } },
        { title: '失败重新上传', routerLink: { name: 'ComponentUploadImageShowError' } },
        { title: '手动上传', routerLink: { name: 'ComponentUploadImageManualSubmit' } },
        // { title: '自定义操作按钮', routerLink: { name: 'ComponentUploadImageAction' } },
        { title: '手动操作方法', routerLink: { name: 'ComponentUploadImageOperFn' } },
        {
          title: '自定义操作按钮',
          children: [
            { title: '自定义上传按钮模板', routerLink: { name: 'ComponentUploadImageTemplateDefault' } },
            { title: '自定义上传提示模板', routerLink: { name: 'ComponentUploadImageTemplateTip' } },
            // { title: '自定义文件名模板', routerLink: { name: 'ComponentUploadImageTemplateName' } },
            { title: '自定义操作按钮模板', routerLink: { name: 'ComponentUploadImageTemplateAction' } },
            { title: '自定义额外操作按钮模板', routerLink: { name: 'ComponentUploadImageTemplateCorner' } },
            { title: '自定义文件项模板', routerLink: { name: 'ComponentUploadImageTemplateOption' } }
          ]
        }
      ]
    }
  ]
}
