import { RouteRecordRaw } from 'vue-router'

import RouteLayout from '@/components/RouteLayout.vue'

export const uploadRouteConfig: RouteRecordRaw = {
  path: 'upload',
  component: RouteLayout,
  children: [
    {
      path: 'global',
      component: RouteLayout,
      children: [
        {
          path: 'readFile',
          name: 'ComponentUploadGlobalReadFile',
          component: () => import('@/views/upload/global/readFile/CodeExample.vue')
        },
        {
          path: 'saveFile',
          name: 'ComponentUploadGlobalSaveFile',
          component: () => import('@/views/upload/global/saveFile/CodeExample.vue')
        }
      ]
    },
    {
      path: 'file',
      component: RouteLayout,
      children: [
        {
          path: 'size',
          name: 'ComponentUploadFileSize',
          component: () => import('@/views/upload/file/size/CodeExample.vue')
        },
        {
          path: 'base',
          name: 'ComponentUploadFileBase',
          component: () => import('@/views/upload/file/base/CodeExample.vue')
        },
        {
          path: 'readonly',
          name: 'ComponentUploadFileReadonly',
          component: () => import('@/views/upload/file/readonly/CodeExample.vue')
        },
        {
          path: 'disabled',
          name: 'ComponentUploadFileDisabled',
          component: () => import('@/views/upload/file/disabled/CodeExample.vue')
        },
        {
          path: 'multiple',
          name: 'ComponentUploadFileMultiple',
          component: () => import('@/views/upload/file/multiple/CodeExample.vue')
        },
        { path: 'showList', name: 'ComponentUploadFileShowList', component: () => import('@/views/upload/file/showList/CodeExample.vue') },
        { path: 'beforeSelectMethod', name: 'ComponentUploadFileBeforeSelectMethod', component: () => import('@/views/upload/file/beforeSelectMethod/CodeExample.vue') },
        {
          path: 'customReview',
          name: 'ComponentUploadFileCustomReview',
          component: () => import('@/views/upload/file/customReview/CodeExample.vue')
        },
        {
          path: 'uploadMethod',
          name: 'ComponentUploadFileUploadMethod',
          component: () => import('@/views/upload/file/uploadMethod/CodeExample.vue')
        },
        {
          path: 'downloadMethod',
          name: 'ComponentUploadFileDownloadMethod',
          component: () => import('@/views/upload/file/downloadMethod/CodeExample.vue')
        },
        {
          path: 'beforeDownloadMethod',
          name: 'ComponentUploadFileBeforeDownloadMethod',
          component: () => import('@/views/upload/file/beforeDownloadMethod/CodeExample.vue')
        },
        {
          path: 'singleMode',
          name: 'ComponentUploadFileSingleMode',
          component: () => import('@/views/upload/file/singleMode/CodeExample.vue')
        },
        {
          path: 'urlMode',
          name: 'ComponentUploadFileUrlMode',
          component: () => import('@/views/upload/file/urlMode/CodeExample.vue')
        },
        {
          path: 'tip',
          name: 'ComponentUploadFileTip',
          component: () => import('@/views/upload/file/tip/CodeExample.vue')
        },
        {
          path: 'dragToUpload',
          name: 'ComponentUploadFileDragToUpload',
          component: () => import('@/views/upload/file/dragToUpload/CodeExample.vue')
        },
        {
          path: 'pasteToUpload',
          name: 'ComponentUploadFilePasteToUpload',
          component: () => import('@/views/upload/file/pasteToUpload/CodeExample.vue')
        },
        {
          path: 'progress',
          name: 'ComponentUploadFileProgress',
          component: () => import('@/views/upload/file/progress/CodeExample.vue')
        },
        {
          path: 'types',
          name: 'ComponentUploadFileTypes',
          component: () => import('@/views/upload/file/types/CodeExample.vue')
        },
        {
          path: 'limitCount',
          name: 'ComponentUploadFileLimitCount',
          component: () => import('@/views/upload/file/limitCount/CodeExample.vue')
        },
        {
          path: 'limitSize',
          name: 'ComponentUploadFileLimitSize',
          component: () => import('@/views/upload/file/limitSize/CodeExample.vue')
        },
        {
          path: 'removeMethod',
          name: 'ComponentUploadFileRemoveMethod',
          component: () => import('@/views/upload/file/removeMethod/CodeExample.vue')
        },
        {
          path: 'beforeRemoveMethod',
          name: 'ComponentUploadFileBeforeRemoveMethod',
          component: () => import('@/views/upload/file/beforeRemoveMethod/CodeExample.vue')
        },
        {
          path: 'showUploadButton',
          name: 'ComponentUploadFileShowUploadButton',
          component: () => import('@/views/upload/file/showUploadButton/CodeExample.vue')
        },
        {
          path: 'autoHidden',
          name: 'ComponentUploadFileAutoHidden',
          component: () => import('@/views/upload/file/autoHidden/CodeExample.vue')
        },
        {
          path: 'moreBtn',
          name: 'ComponentUploadFileMoreBtn',
          component: () => import('@/views/upload/file/moreBtn/CodeExample.vue')
        },
        {
          path: 'dragSort',
          name: 'ComponentUploadFileDragSort',
          component: () => import('@/views/upload/file/dragSort/CodeExample.vue')
        },
        {
          path: 'showError',
          name: 'ComponentUploadFileShowError',
          component: () => import('@/views/upload/file/showError/CodeExample.vue')
        },
        {
          path: 'manualSubmit',
          name: 'ComponentUploadFileManualSubmit',
          component: () => import('@/views/upload/file/manualSubmit/CodeExample.vue')
        },
        {
          path: 'action',
          name: 'ComponentUploadFileAction',
          component: () => import('@/views/upload/file/action/CodeExample.vue')
        },
        { path: 'operFn', name: 'ComponentUploadFileOperFn', component: () => import('@/views/upload/file/operFn/CodeExample.vue') },
        {
          path: 'template',
          children: [
            { path: 'default', name: 'ComponentUploadFileTemplateDefault', component: () => import('@/views/upload/file/template/default/CodeExample.vue') },
            { path: 'tip', name: 'ComponentUploadFileTemplateTip', component: () => import('@/views/upload/file/template/tip/CodeExample.vue') },
            { path: 'name', name: 'ComponentUploadFileTemplateName', component: () => import('@/views/upload/file/template/name/CodeExample.vue') },
            { path: 'corner', name: 'ComponentUploadFileTemplateCorner', component: () => import('@/views/upload/file/template/corner/CodeExample.vue') },
            { path: 'action', name: 'ComponentUploadFileTemplateAction', component: () => import('@/views/upload/file/template/action/CodeExample.vue') },
            { path: 'option', name: 'ComponentUploadFileTemplateOption', component: () => import('@/views/upload/file/template/option/CodeExample.vue') }
          ]
        }
      ]
    },
    {
      path: 'image',
      component: RouteLayout,
      children: [
        {
          path: 'size',
          name: 'ComponentUploadImageSize',
          component: () => import('@/views/upload/image/size/CodeExample.vue')
        },
        {
          path: 'base',
          name: 'ComponentUploadImageBase',
          component: () => import('@/views/upload/image/base/CodeExample.vue')
        },
        {
          path: 'imgStyle',
          name: 'ComponentUploadImageImgStyle',
          component: () => import('@/views/upload/image/imgStyle/CodeExample.vue')
        },
        {
          path: 'circle',
          name: 'ComponentUploadImageCircle',
          component: () => import('@/views/upload/image/circle/CodeExample.vue')
        },
        {
          path: 'readonly',
          name: 'ComponentUploadImageReadonly',
          component: () => import('@/views/upload/image/readonly/CodeExample.vue')
        },
        {
          path: 'disabled',
          name: 'ComponentUploadImageDisabled',
          component: () => import('@/views/upload/image/disabled/CodeExample.vue')
        },
        {
          path: 'customReview',
          name: 'ComponentUploadImageCustomReview',
          component: () => import('@/views/upload/image/customReview/CodeExample.vue')
        },
        {
          path: 'multiple',
          name: 'ComponentUploadImageMultiple',
          component: () => import('@/views/upload/image/multiple/CodeExample.vue')
        },
        { path: 'showList', name: 'ComponentUploadImageShowList', component: () => import('@/views/upload/image/showList/CodeExample.vue') },
        { path: 'beforeSelectMethod', name: 'ComponentUploadImageBeforeSelectMethod', component: () => import('@/views/upload/image/beforeSelectMethod/CodeExample.vue') },
        {
          path: 'uploadMethod',
          name: 'ComponentUploadImageUploadMethod',
          component: () => import('@/views/upload/image/uploadMethod/CodeExample.vue')
        },
        {
          path: 'downloadMethod',
          name: 'ComponentUploadImageDownloadMethod',
          component: () => import('@/views/upload/image/downloadMethod/CodeExample.vue')
        },
        {
          path: 'beforeDownloadMethod',
          name: 'ComponentUploadImageBeforeDownloadMethod',
          component: () => import('@/views/upload/image/beforeDownloadMethod/CodeExample.vue')
        },
        {
          path: 'singleMode',
          name: 'ComponentUploadImageSingleMode',
          component: () => import('@/views/upload/image/singleMode/CodeExample.vue')
        },
        {
          path: 'urlMode',
          name: 'ComponentUploadImageUrlMode',
          component: () => import('@/views/upload/image/urlMode/CodeExample.vue')
        },
        {
          path: 'thumbnailUrl',
          name: 'ComponentUploadImageThumbnailUrl',
          component: () => import('@/views/upload/image/thumbnailUrl/CodeExample.vue')
        },
        {
          path: 'tip',
          name: 'ComponentUploadImageTip',
          component: () => import('@/views/upload/image/tip/CodeExample.vue')
        },
        {
          path: 'dragToUpload',
          name: 'ComponentUploadImageDragToUpload',
          component: () => import('@/views/upload/image/dragToUpload/CodeExample.vue')
        },
        {
          path: 'pasteToUpload',
          name: 'ComponentUploadImagePasteToUpload',
          component: () => import('@/views/upload/image/pasteToUpload/CodeExample.vue')
        },
        {
          path: 'progress',
          name: 'ComponentUploadImageProgress',
          component: () => import('@/views/upload/image/progress/CodeExample.vue')
        },
        {
          path: 'types',
          name: 'ComponentUploadImageTypes',
          component: () => import('@/views/upload/image/types/CodeExample.vue')
        },
        {
          path: 'limitCount',
          name: 'ComponentUploadImageLimitCount',
          component: () => import('@/views/upload/image/limitCount/CodeExample.vue')
        },
        {
          path: 'limitSize',
          name: 'ComponentUploadImageLimitSize',
          component: () => import('@/views/upload/image/limitSize/CodeExample.vue')
        },
        {
          path: 'removeMethod',
          name: 'ComponentUploadImageRemoveMethod',
          component: () => import('@/views/upload/image/removeMethod/CodeExample.vue')
        },
        {
          path: 'beforeRemoveMethod',
          name: 'ComponentUploadImageBeforeRemoveMethod',
          component: () => import('@/views/upload/image/beforeRemoveMethod/CodeExample.vue')
        },
        {
          path: 'showUploadButton',
          name: 'ComponentUploadImageShowUploadButton',
          component: () => import('@/views/upload/image/showUploadButton/CodeExample.vue')
        },
        {
          path: 'autoHidden',
          name: 'ComponentUploadImageAutoHidden',
          component: () => import('@/views/upload/image/autoHidden/CodeExample.vue')
        },
        {
          path: 'moreBtn',
          name: 'ComponentUploadImageMoreBtn',
          component: () => import('@/views/upload/image/moreBtn/CodeExample.vue')
        },
        {
          path: 'dragSort',
          name: 'ComponentUploadImageDragSort',
          component: () => import('@/views/upload/image/dragSort/CodeExample.vue')
        },
        {
          path: 'showError',
          name: 'ComponentUploadImageShowError',
          component: () => import('@/views/upload/image/showError/CodeExample.vue')
        },
        {
          path: 'manualSubmit',
          name: 'ComponentUploadImageManualSubmit',
          component: () => import('@/views/upload/image/manualSubmit/CodeExample.vue')
        },
        {
          path: 'action',
          name: 'ComponentUploadImageAction',
          component: () => import('@/views/upload/image/action/CodeExample.vue')
        },
        { path: 'operFn', name: 'ComponentUploadImageOperFn', component: () => import('@/views/upload/image/operFn/CodeExample.vue') },
        {
          path: 'template',
          children: [
            { path: 'default', name: 'ComponentUploadImageTemplateDefault', component: () => import('@/views/upload/image/template/default/CodeExample.vue') },
            { path: 'tip', name: 'ComponentUploadImageTemplateTip', component: () => import('@/views/upload/image/template/tip/CodeExample.vue') },
            { path: 'name', name: 'ComponentUploadImageTemplateName', component: () => import('@/views/upload/image/template/name/CodeExample.vue') },
            { path: 'corner', name: 'ComponentUploadImageTemplateCorner', component: () => import('@/views/upload/image/template/corner/CodeExample.vue') },
            { path: 'action', name: 'ComponentUploadImageTemplateAction', component: () => import('@/views/upload/image/template/action/CodeExample.vue') },
            { path: 'option', name: 'ComponentUploadImageTemplateOption', component: () => import('@/views/upload/image/template/option/CodeExample.vue') }
          ]
        }
      ]
    }
  ]
}
