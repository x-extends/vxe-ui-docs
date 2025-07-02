<template>
  <div>
    <CodeLight>
      <template #tip>
        <vxe-tip status="primary" title="自定义图标">
          通过调用 VxeUI.setIcon({ ... }) 方法可以全局替换组件内置的图标
        </vxe-tip>
      </template>

      <template #use>
        <pre>
          <pre-code class="javascript">
            import { VxeUI } from 'vxe-pc-ui'
            // VxeUI 是 Vxe 库通用全局实例

            VxeUI.setIcon({
              // loading
              LOADING: 'vxe-icon-spinner roll vxe-loading--default-icon',

              // button
              BUTTON_DROPDOWN: 'vxe-icon-arrow-down',
              BUTTON_LOADING: 'vxe-icon-spinner roll',
              BUTTON_TOOLTIP_ICON: 'vxe-icon-question-circle-fill',

              // menu
              MENU_ITEM_EXPAND_OPEN: 'vxe-icon-arrow-down rotate180',
              MENU_ITEM_EXPAND_CLOSE: 'vxe-icon-arrow-down',

              // select
              SELECT_LOADED: 'vxe-icon-spinner roll',
              SELECT_OPEN: 'vxe-icon-caret-down rotate180',
              SELECT_CLOSE: 'vxe-icon-caret-down',
              SELECT_ADD_OPTION: 'vxe-icon-add',

              // icon-picker
              ICON_PICKER_OPEN: 'vxe-icon-caret-down rotate180',
              ICON_PICKER_CLOSE: 'vxe-icon-caret-down',

              // pager
              PAGER_HOME: 'vxe-icon-home-page',
              PAGER_END: 'vxe-icon-end-page',
              PAGER_JUMP_PREV: 'vxe-icon-arrow-double-left',
              PAGER_JUMP_NEXT: 'vxe-icon-arrow-double-right',
              PAGER_PREV_PAGE: 'vxe-icon-arrow-left',
              PAGER_NEXT_PAGE: 'vxe-icon-arrow-right',
              PAGER_JUMP_MORE: 'vxe-icon-ellipsis-h',

              // radio
              RADIO_CHECKED: 'vxe-icon-radio-checked-fill',
              RADIO_UNCHECKED: 'vxe-icon-radio-unchecked',
              RADIO_DISABLED_UNCHECKED: 'vxe-icon-radio-unchecked-fill',

              // checkbox
              CHECKBOX_INDETERMINATE: 'vxe-icon-checkbox-indeterminate-fill',
              CHECKBOX_CHECKED: 'vxe-icon-checkbox-checked-fill',
              CHECKBOX_UNCHECKED: 'vxe-icon-checkbox-unchecked',
              CHECKBOX_DISABLED_UNCHECKED: 'vxe-icon-checkbox-unchecked-fill',

              // input
              INPUT_CLEAR: 'vxe-icon-error-circle-fill',
              INPUT_SEARCH: 'vxe-icon-search',
              INPUT_PLUS_NUM: 'vxe-icon-caret-up',
              INPUT_MINUS_NUM: 'vxe-icon-caret-down',

              // number-picker
              NUMBER_INPUT_MINUS_NUM: 'vxe-icon-minus',
              NUMBER_INPUT_PLUS_NUM: 'vxe-icon-add',

              // date-picker
              DATE_PICKER_DATE: 'vxe-icon-calendar',

              // password-input
              PASSWORD_INPUT_SHOW_PWD: 'vxe-icon-eye-fill-close',
              PASSWORD_INPUT_HIDE_PWD: 'vxe-icon-eye-fill',

              // modal
              MODAL_ZOOM_MIN: 'vxe-icon-minus',
              MODAL_ZOOM_REVERT: 'vxe-icon-recover',
              MODAL_ZOOM_IN: 'vxe-icon-square',
              MODAL_ZOOM_OUT: 'vxe-icon-maximize',
              MODAL_CLOSE: 'vxe-icon-close',
              MODAL_INFO: 'vxe-icon-info-circle-fill',
              MODAL_SUCCESS: 'vxe-icon-success-circle-fill',
              MODAL_WARNING: 'vxe-icon-warning-circle-fill',
              MODAL_ERROR: 'vxe-icon-error-circle-fill',
              MODAL_QUESTION: 'vxe-icon-question-circle-fill',
              MODAL_LOADING: 'vxe-icon-spinner roll',

              // drawer
              DRAWER_CLOSE: 'vxe-icon-close',

              // form
              FORM_PREFIX: 'vxe-icon-question-circle-fill',
              FORM_SUFFIX: 'vxe-icon-question-circle-fill',
              FORM_FOLDING: 'vxe-icon-arrow-up rotate180',
              FORM_UNFOLDING: 'vxe-icon-arrow-up',

              // form-design
              FORM_DESIGN_STYLE_SETTING: 'vxe-icon-layout',
              FORM_DESIGN_PROPS_PC: 'vxe-icon-pc',
              FORM_DESIGN_PROPS_MOBILE: 'vxe-icon-mobile',
              FORM_DESIGN_PROPS_ADD: 'vxe-icon-add',
              FORM_DESIGN_PROPS_EDIT: 'vxe-icon-edit',
              FORM_DESIGN_WIDGET_ADD: 'vxe-icon-square-plus-fill',
              FORM_DESIGN_WIDGET_COPY: 'vxe-icon-copy',
              FORM_DESIGN_WIDGET_DELETE: 'vxe-icon-delete',
              FORM_DESIGN_WIDGET_SWAP_LR: 'vxe-icon-swap',
              FORM_DESIGN_WIDGET_OPTION_DELETE: 'vxe-icon-delete',
              FORM_DESIGN_WIDGET_OPTION_EXPAND_OPEN: 'vxe-icon-square-plus',
              FORM_DESIGN_WIDGET_OPTION_EXPAND_CLOSE: 'vxe-icon-square-minus',

              // list-design
              LIST_DESIGN_FIELD_SETTING: 'vxe-icon-custom-column',
              LIST_DESIGN_LIST_SETTING: 'vxe-icon-menu',
              LIST_DESIGN_LIST_SETTING_SEARCH_DELETE: 'vxe-icon-delete',
              LIST_DESIGN_LIST_SETTING_ACTIVE_DELETE: 'vxe-icon-delete',

              // upload
              UPLOAD_FILE_ERROR: 'vxe-icon-warning-circle-fill',
              UPLOAD_FILE_ADD: 'vxe-icon-upload',
              UPLOAD_FILE_REMOVE: 'vxe-icon-delete',
              UPLOAD_FILE_DOWNLOAD: 'vxe-icon-download',
              UPLOAD_IMAGE_RE_UPLOAD: 'vxe-icon-repeat',
              UPLOAD_IMAGE_ADD: 'vxe-icon-add',
              UPLOAD_IMAGE_REMOVE: 'vxe-icon-close',
              UPLOAD_LOADING: 'vxe-icon-spinner roll vxe-loading--default-icon',
              UPLOAD_FILE_TYPE_DEFAULT: 'vxe-icon-file',
              UPLOAD_FILE_TYPE_XLSX: 'vxe-icon-file-excel',
              UPLOAD_FILE_TYPE_XLS: 'vxe-icon-file-excel',
              UPLOAD_FILE_TYPE_PDF: 'vxe-icon-file-pdf',
              UPLOAD_FILE_TYPE_PNG: 'vxe-icon-file-image',
              UPLOAD_FILE_TYPE_GIF: 'vxe-icon-file-image',
              UPLOAD_FILE_TYPE_JPG: 'vxe-icon-file-image',
              UPLOAD_FILE_TYPE_JPEG: 'vxe-icon-file-image',
              UPLOAD_FILE_TYPE_MD: 'vxe-icon-file-markdown',
              UPLOAD_FILE_TYPE_PPD: 'vxe-icon-file-ppt',
              UPLOAD_FILE_TYPE_DOCX: 'vxe-icon-file-word',
              UPLOAD_FILE_TYPE_DOC: 'vxe-icon-file-word',
              UPLOAD_FILE_TYPE_ZIP: 'vxe-icon-file-zip',
              UPLOAD_FILE_TYPE_TXT: 'vxe-icon-file-txt',

              // image-preview
              IMAGE_PREVIEW_CLOSE: 'vxe-icon-close',
              IMAGE_PREVIEW_PREVIOUS: 'vxe-icon-arrow-left',
              IMAGE_PREVIEW_NEXT: 'vxe-icon-arrow-right',
              IMAGE_PREVIEW_PCT_FULL: 'vxe-icon-pct-full',
              IMAGE_PREVIEW_PCT_1_1: 'vxe-icon-pct-1-1',
              IMAGE_PREVIEW_ZOOM_OUT: 'vxe-icon-search-zoom-out',
              IMAGE_PREVIEW_ZOOM_IN: 'vxe-icon-search-zoom-in',
              IMAGE_PREVIEW_ROTATE_LEFT: 'vxe-icon-rotate-left',
              IMAGE_PREVIEW_ROTATE_RIGHT: 'vxe-icon-rotate-right',
              IMAGE_PREVIEW_PRINT: 'vxe-icon-print',
              IMAGE_PREVIEW_DOWNLOAD: 'vxe-icon-download',

              // alert
              ALERT_CLOSE: 'vxe-icon-close',
              ALERT_INFO: 'vxe-icon-info-circle-fill',
              ALERT_SUCCESS: 'vxe-icon-success-circle-fill',
              ALERT_WARNING: 'vxe-icon-warning-circle-fill',
              ALERT_ERROR: 'vxe-icon-error-circle-fill',

              // tree
              TREE_NODE_OPEN: 'vxe-icon-caret-right rotate90',
              TREE_NODE_CLOSE: 'vxe-icon-caret-right',
              TREE_NODE_LOADED: 'vxe-icon-spinner roll',

              // tree-select
              TREE_SELECT_LOADED: 'vxe-icon-spinner roll',
              TREE_SELECT_OPEN: 'vxe-icon-caret-down rotate180',
              TREE_SELECT_CLOSE: 'vxe-icon-caret-down',

              // table-select
              TABLE_SELECT_LOADED: 'vxe-icon-spinner roll',
              TABLE_SELECT_OPEN: 'vxe-icon-caret-down rotate180',
              TABLE_SELECT_CLOSE: 'vxe-icon-caret-down',

              // tabs
              TABS_TAB_BUTTON_TOP: 'vxe-icon-arrow-up',
              TABS_TAB_BUTTON_BOTTOM: 'vxe-icon-arrow-down',
              TABS_TAB_BUTTON_LEFT: 'vxe-icon-arrow-left',
              TABS_TAB_BUTTON_RIGHT: 'vxe-icon-arrow-right',
              TABS_TAB_CLOSE: 'vxe-icon-close',
              TABS_TAB_REFRESH: 'vxe-icon-refresh',
              TABS_TAB_REFRESH_LOADING: 'vxe-icon-refresh roll',

              // text
              TEXT_COPY: 'vxe-icon-copy',
              TEXT_LOADING: 'vxe-icon-spinner roll',

              // carousel
              CAROUSEL_HORIZONTAL_PREVIOUS: 'vxe-icon-arrow-left',
              CAROUSEL_HORIZONTAL_NEXT: 'vxe-icon-arrow-right',
              CAROUSEL_VERTICAL_PREVIOUS: 'vxe-icon-arrow-up',
              CAROUSEL_VERTICAL_NEXT: 'vxe-icon-arrow-down',

              // collapse
              COLLAPSE_OPEN: 'vxe-icon-arrow-right rotate90',
              COLLAPSE_CLOSE: 'vxe-icon-arrow-right',

              // empty
              EMPTY_DEFAULT: 'vxe-icon-empty',

              // result
              RESULT_INFO: 'vxe-icon-info-circle-fill',
              RESULT_SUCCESS: 'vxe-icon-success-circle-fill',
              RESULT_WARNING: 'vxe-icon-warning-circle-fill',
              RESULT_ERROR: 'vxe-icon-error-circle-fill',
              RESULT_QUESTION: 'vxe-icon-question-circle-fill',
              RESULT_LOADING: 'vxe-icon-spinner roll',

              // rate
              RATE_CHECKED: 'vxe-icon-star-fill',
              RATE_UNCHECKED: 'vxe-icon-star',

              // color-picker
              COLOR_PICKER_COLOR_COPY: 'vxe-icon-copy',
              COLOR_PICKER_EYE_DROPPER: 'vxe-icon-dropper',
              COLOR_PICKER_TPTY_OPEN: 'vxe-icon-arrow-down rotate180',
              COLOR_PICKER_TPTY_CLOSE: 'vxe-icon-arrow-down',

              // split
              SPLIT_TOP_ACTION: 'vxe-icon-arrow-up',
              SPLIT_BOTTOM_ACTION: 'vxe-icon-arrow-down',
              SPLIT_LEFT_ACTION: 'vxe-icon-arrow-left',
              SPLIT_RIGHT_ACTION: 'vxe-icon-arrow-right'

              // table
              TABLE_SORT_ASC: 'vxe-icon-caret-up',
              TABLE_SORT_DESC: 'vxe-icon-caret-down',
              TABLE_FILTER_NONE: 'vxe-icon-funnel',
              TABLE_FILTER_MATCH: 'vxe-icon-funnel',
              TABLE_EDIT: 'vxe-icon-edit',
              TABLE_TITLE_PREFIX: 'vxe-icon-question-circle-fill',
              TABLE_TITLE_SUFFIX: 'vxe-icon-question-circle-fill',
              TABLE_TREE_LOADED: 'vxe-icon-spinner roll',
              TABLE_TREE_OPEN: 'vxe-icon-caret-right rotate90',
              TABLE_TREE_CLOSE: 'vxe-icon-caret-right',
              TABLE_EXPAND_LOADED: 'vxe-icon-spinner roll',
              TABLE_EXPAND_OPEN: 'vxe-icon-arrow-right rotate90',
              TABLE_EXPAND_CLOSE: 'vxe-icon-arrow-right',
              TABLE_CHECKBOX_CHECKED: 'vxe-icon-checkbox-checked-fill',
              TABLE_CHECKBOX_UNCHECKED: 'vxe-icon-checkbox-unchecked',
              TABLE_CHECKBOX_INDETERMINATE: 'vxe-icon-checkbox-indeterminate-fill',
              TABLE_CHECKBOX_DISABLED_UNCHECKED: 'vxe-icon-checkbox-unchecked-fill',
              TABLE_RADIO_CHECKED: 'vxe-icon-radio-checked-fill',
              TABLE_RADIO_UNCHECKED: 'vxe-icon-radio-unchecked',
              TABLE_RADIO_DISABLED_UNCHECKED: 'vxe-icon-radio-unchecked-fill',
              TABLE_CUSTOM_SORT: 'vxe-icon-drag-handle',
              TABLE_MENU_OPTIONS: 'vxe-icon-arrow-right',
              TABLE_DRAG_ROW: 'vxe-icon-drag-handle',
              TABLE_DRAG_COLUMN: 'vxe-icon-drag-handle',
              TABLE_DRAG_STATUS_ROW: 'vxe-icon-sort',
              TABLE_DRAG_STATUS_SUB_ROW: 'vxe-icon-add-sub',
              TABLE_DRAG_STATUS_AGG_GROUP: 'vxe-icon-grouping',
              TABLE_DRAG_STATUS_AGG_VALUES: 'vxe-icon-values',
              TABLE_DRAG_STATUS_COLUMN: 'vxe-icon-swap',
              TABLE_DRAG_DISABLED: 'vxe-icon-no-drop',
              TABLE_ROW_GROUP_OPEN: 'vxe-icon-arrow-right rotate90',
              TABLE_ROW_GROUP_CLOSE: 'vxe-icon-arrow-right',
              TABLE_AGGREGATE_GROUPING: 'vxe-icon-grouping',
              TABLE_AGGREGATE_VALUES: 'vxe-icon-values',
              TABLE_AGGREGATE_SORT: 'vxe-icon-drag-handle',
              TABLE_AGGREGATE_DELETE: 'vxe-icon-close',

              // toolbar
              TOOLBAR_TOOLS_REFRESH: 'vxe-icon-repeat',
              TOOLBAR_TOOLS_REFRESH_LOADING: 'vxe-icon-repeat roll',
              TOOLBAR_TOOLS_IMPORT: 'vxe-icon-upload',
              TOOLBAR_TOOLS_EXPORT: 'vxe-icon-download',
              TOOLBAR_TOOLS_PRINT: 'vxe-icon-print',
              TOOLBAR_TOOLS_FULLSCREEN: 'vxe-icon-fullscreen',
              TOOLBAR_TOOLS_MINIMIZE: 'vxe-icon-minimize',
              TOOLBAR_TOOLS_CUSTOM: 'vxe-icon-custom-column',
              TOOLBAR_TOOLS_FIXED_LEFT: 'vxe-icon-fixed-left',
              TOOLBAR_TOOLS_FIXED_LEFT_ACTIVE: 'vxe-icon-fixed-left-fill',
              TOOLBAR_TOOLS_FIXED_RIGHT: 'vxe-icon-fixed-right',
              TOOLBAR_TOOLS_FIXED_RIGHT_ACTIVE: 'vxe-icon-fixed-right-fill'
            })
          </pre-code>
        </pre>
      </template>
    </CodeLight>
  </div>
</template>
