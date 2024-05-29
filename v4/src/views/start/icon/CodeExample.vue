<template>
  <div>
    <CodeLight>
      <template #tip>
        <VxeTips status="primary">
          通过调用 VxeUI.setIcon({ ... }) 方法可以全局替换组件内置的图标
        </VxeTips>
      </template>

      <template #use>
        <pre>
          <pre-code class="javascript">
            import { VxeUI } from 'vxe-pc-ui'

            VxeUI.setIcon({
              // loading
              LOADING: 'vxe-icon-spinner roll vxe-loading--default-icon',

              // button
              BUTTON_DROPDOWN: 'vxe-icon-arrow-down',
              BUTTON_LOADING: 'vxe-icon-spinner roll',

              // menu
              MENU_ITEM_EXPAND_OPEN: 'vxe-icon-arrow-down rotate180',
              MENU_ITEM_EXPAND_CLOSE: 'vxe-icon-arrow-down',

              // select
              SELECT_LOADED: 'vxe-icon-spinner roll',
              SELECT_OPEN: 'vxe-icon-caret-down rotate180',
              SELECT_CLOSE: 'vxe-icon-caret-down',

              // pager
              PAGER_HOME: 'vxe-icon-home-page',
              PAGER_END: 'vxe-icon-end-page',
              PAGER_JUMP_PREV: 'vxe-icon-arrow-double-left',
              PAGER_JUMP_NEXT: 'vxe-icon-arrow-double-right',
              PAGER_PREV_PAGE: 'vxe-icon-arrow-left',
              PAGER_NEXT_PAGE: 'vxe-icon-arrow-right',
              PAGER_JUMP_MORE: 'vxe-icon-ellipsis-h',

              // input
              INPUT_CLEAR: 'vxe-icon-error-circle-fill',
              INPUT_PWD: 'vxe-icon-eye-fill',
              INPUT_SHOW_PWD: 'vxe-icon-eye-fill-close',
              INPUT_PREV_NUM: 'vxe-icon-caret-up',
              INPUT_NEXT_NUM: 'vxe-icon-caret-down',
              INPUT_DATE: 'vxe-icon-calendar',
              INPUT_SEARCH: 'vxe-icon-search',

              // modal
              MODAL_ZOOM_IN: 'vxe-icon-square',
              MODAL_ZOOM_OUT: 'vxe-icon-maximize',
              MODAL_CLOSE: 'vxe-icon-close',
              MODAL_INFO: 'vxe-icon-info-circle-fill',
              MODAL_SUCCESS: 'vxe-icon-success-circle-fill',
              MODAL_WARNING: 'vxe-icon-warning-circle-fill',
              MODAL_ERROR: 'vxe-icon-error-circle-fill',
              MODAL_QUESTION: 'vxe-icon-question-circle-fill',
              MODAL_LOADING: 'vxe-icon-spinner roll',

              // form
              FORM_PREFIX: 'vxe-icon-question-circle-fill',
              FORM_SUFFIX: 'vxe-icon-question-circle-fill',
              FORM_FOLDING: 'vxe-icon-arrow-up rotate180',
              FORM_UNFOLDING: 'vxe-icon-arrow-up',

              // form-design
              DESIGN_FORM_STYLE_SETTING: 'vxe-icon-layout',
              DESIGN_FORM_PROPS_PC: 'vxe-icon-pc',
              DESIGN_FORM_PROPS_MOBILE: 'vxe-icon-mobile',
              DESIGN_FORM_WIDGET_ADD: 'vxe-icon-square-plus-fill',
              DESIGN_FORM_WIDGET_COPY: 'vxe-icon-copy',
              DESIGN_FORM_WIDGET_DELETE: 'vxe-icon-delete',
              DESIGN_FORM_WIDGET_OPTION_DELETE: 'vxe-icon-delete',
              DESIGN_FORM_WIDGET_OPTION_EXPAND_OPEN: 'vxe-icon-square-plus',
              DESIGN_FORM_WIDGET_OPTION_EXPAND_CLOSE: 'vxe-icon-square-minus'
            })
          </pre-code>
        </pre>
      </template>
    </CodeLight>
  </div>
</template>
