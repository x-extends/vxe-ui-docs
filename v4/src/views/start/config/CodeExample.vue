<template>
  <div>
    <CodeLight>
      <template #tip>
        <vxe-tip status="primary">
          通过调用 setConfig({ ... }) 方法可以给组件设置全局默认参数
        </vxe-tip>
      </template>

      <template #use>
        <pre>
          <pre-code class="javascript">
            import { VxeUI } from 'vxe-pc-ui'
            // VxeUI 是 Vxe 库通用全局实例

            VxeUI.setConfig({
              // size: null, // 全局尺寸
              // zIndex: 999, // 全局 zIndex 起始值，如果项目的的 z-index 样式值过大时就需要跟随设置更大，避免被遮挡；新版本可以使用 dom-zindex 共享配置
              // version: 1, // 版本号，对于某些带数据缓存的功能有用到，上升版本号可以用于重置数据

              alert: {},
              anchor: {},
              anchorLink: {},
              avatar: {},
              backtop: {
                showIcon: true,
                showContent: true,
                showTop: true,
                showBottom: true,
                shadow: true,
                threshold: 20
              },
              badge: {},
              breadcrumb: {
                separator: '/'
              },
              breadcrumbItem: {},
              button: {
                trigger: 'hover',
                // destroyOnClose: false,
                prefixTooltip: {
                  enterable: true
                },
                suffixTooltip: {
                  enterable: true
                },
                showDropdownIcon: true
              },
              buttonGroup: {},
              calendar: {
                minDate: new Date(1900, 0, 1),
                maxDate: new Date(2100, 0, 1),
                startDay: 1,
                selectDay: 1
              },
              card: {
                border: true,
                padding: true
              },
              carousel: {
                height: 200,
                loop: true,
                interval: 5000
              },
              carouselItem: {},
              cascader: {
                autoClose: true
              },
              checkbox: {},
              checkboxButton: {},
              checkboxGroup: {},
              col: {},
              collapse: {
                padding: true,
                expandConfig: {
                  showIcon: true
                }
              },
              collapsePane: {},
              contextMenu: {
                autoLocate: true
              },
              countdown: {},
              colorPicker: {
                type: 'rgb',
                clearable: true,
                showAlpha: true,
                clickToCopy: true,
                showColorExtractor: true,
                showQuick: true
              },
              datePanel: {
                // parseFormat: 'yyyy-MM-dd HH:mm:ss.SSS',
                // labelFormat: '',
                // valueFormat: '',
                startDate: new Date(1900, 0, 1),
                endDate: new Date(2100, 0, 1),
                startDay: 1,
                selectDay: 1
              },
              datePicker: {
                // size: null,
                // transfer: false,
                shortcutConfig: {
                  // position: 'left',
                  align: 'left',
                  mode: 'text',
                  autoClose: true
                },
                startDay: 1,
                selectDay: 1,
                autoClose: true,
                showClearButton: null,
                showConfirmButton: null
              },
              dateRangePicker: {
                // size: null,
                // transfer: false,
                shortcutConfig: {
                  // position: 'left',
                  align: 'left',
                  mode: 'text',
                  autoClose: true
                },
                startDay: 1,
                selectDay: 1,
                separator: ' ~ ',
                autoClose: true,
                showClearButton: null,
                showConfirmButton: null
              },
              drawer: {
                // size: null,
                // useHtml: false,
                position: 'right',
                showHeader: true,
                lockView: true,
                mask: true,
                showTitleOverflow: true,
                showClose: true,
                padding: true,
                // destroyOnClose: false,
                cancelClosable: true,
                confirmClosable: true
              },
              empty: {},
              form: {
                // preventSubmit: false,
                // size: null,
                // colon: false,
                validConfig: {
                  showErrorMessage: true,
                  autoPos: true,
                  theme: 'beautify'
                },
                tooltipConfig: {
                  enterable: true
                },
                titleAsterisk: true,
                titleOverflow: false,
                padding: true
              },
              formDesign: {
                height: 400,
                showHeader: true,
                showPc: true
              },
              formGather: {},
              formGroup: {},
              formItem: {},
              formView: {},
              icon: {},
              iconPicker: {
                icons: ['home', 'company', 'comment', 'setting', 'send', 'envelope', 'envelope-open', 'bell', 'search', 'print', 'pc', 'goods', 'chart-line', 'edit', 'delete', 'save', 'folder', 'microphone', 'flag', 'link', 'location', 'sunny', 'rmb', 'usd', 'user', 'add-user', 'add-users', 'star', 'unlock', 'time', 'text', 'feedback', 'calendar', 'association-form', 'cloud-download', 'cloud-upload', 'file', 'subtable', 'chart-bar-x', 'chart-bar-y', 'chart-line', 'chart-pie', 'chart-radar']
              },
              image: {
                draggable: null,
                showPreview: true,
                showPrintButton: true
              },
              imageGroup: {
                showPreview: true,
                showPrintButton: true
              },
              imagePreview: {
                showPrintButton: true,
                maskClosable: true
              },
              input: {
                // size: null,
                // transfer: false
                // parseFormat: 'yyyy-MM-dd HH:mm:ss.SSS',
                // labelFormat: '',
                // valueFormat: '',
                startDate: new Date(1900, 0, 1),
                endDate: new Date(2100, 0, 1),
                startDay: 1,
                selectDay: 1,
                digits: 2,
                controls: true
              },
              layoutAside: {},
              layoutBody: {
                backtopConfig: {
                }
              },
              layoutContainer: {},
              layoutFooter: {},
              layoutHeader: {},
              link: {
                underline: true
              },
              listDesign: {
                height: 400,
                showPc: true
              },
              listView: {},
              list: {
                // size: null,
                virtualYConfig: {
                  enabled: true,
                  gt: 100
                  // oSize: 0
                }
              },
              loading: {
                showIcon: true,
                showText: true
              },
              menu: {},
              modal: {
                // size: null,
                top: 16,
                showHeader: true,
                // useHtml: false,
                // width: null,
                // height: null,
                minWidth: 340,
                minHeight: 140,
                lockView: true,
                mask: true,
                duration: 3000,
                marginSize: 0,
                dblclickZoom: true,
                showTitleOverflow: true,
                animat: true,
                showClose: true,
                padding: true,
                draggable: true,
                showConfirmButton: null,
                cancelClosable: true,
                confirmClosable: true,
                zoomConfig: {
                  minimizeMaxSize: 10,
                  minimizeVerticalOffset: {
                    top: -24,
                    left: 0
                  },
                  minimizeHorizontalOffset: {
                    top: 0,
                    left: 32
                  }
                },
                // destroyOnClose: false,
                // remember: false,
                // storage: false,
                storageKey: 'VXE_MODAL_POSITION'
              },
              noticeBar: {},
              numberInput: {
                // size: null,
                // transfer: false
                digits: 2,
                autoFill: true,
                controlConfig: {
                  enabled: true,
                  layout: 'right',
                  showButton: true,
                  isWheel: true,
                  isArrow: true
                }
              },
              optgroup: {},
              option: {},
              pager: {
                pageSizePlacement: 'top'
                // size: null,
                // autoHidden: false,
                // perfect: true,
                // pageSize: 10,
                // pagerCount: 7,
                // pageSizes: [10, 15, 20, 50, 100],
                // layouts: ['PrevJump', 'PrevPage', 'Jump', 'PageCount', 'NextPage', 'NextJump', 'Sizes', 'Total']
              },
              print: {
                pageStyle: {}
              },
              passwordInput: {
                controls: true
              },
              printPageBreak: {},
              pulldown: {
                // destroyOnClose: false
              },
              radio: {
                strict: true
              },
              radioButton: {
                strict: true
              },
              radioGroup: {
                strict: true
              },
              rate: {},
              result: {},
              row: {},
              segmented: {},
              select: {
                multiCharOverflow: 8,
                remoteConfig: {
                  enabled: true,
                  autoLoad: true
                },
                virtualYConfig: {
                  enabled: true,
                  gt: 50,
                  oSize: 2
                }
              },
              splitter: {
                resize: true,
                itemConfig: {
                  minWidth: 40,
                  minHeight: 40
                },
                resizeConfig: {
                  // immediate: false,
                  showTip: true
                }
              },
              splitterPanel: {},
              slider: {
                max: 100,
                min: 0
              },
              steps: {},
              switch: {},
              tabPane: {},
              tableSelect: {
                gridConfig: {
                  showOverflow: true,
                  showHeaderOverflow: true,
                  showFooterOverflow: true,
                  rowConfig: {
                    isHover: true
                  },
                  virtualXConfig: {
                    enabled: true,
                    gt: 0
                  },
                  virtualYConfig: {
                    enabled: true,
                    gt: 0
                  }
                }
              },
              tabs: {
                // destroyOnClose: false
              },
              tag: {},
              textEllipsis: {
                underline: true
              },
              text: {
                copyConfig: {
                  showMessage: true
                }
              },
              textarea: {
                resize: 'none'
              },
              timeline: {},
              timelineItem: {},
              tip: {},
              tooltip: {
                // size: null,
                // enterable: false,
                trigger: 'hover',
                theme: 'dark',
                enterDelay: 500,
                leaveDelay: 300,
                isArrow: true
              },
              tree: {
                // autoResize: false,
                indent: 20,
                minHeight: 60,
                radioConfig: {
                  strict: true
                },
                dragConfig: {
                  showIcon: true,
                  animation: true,
                  showGuidesStatus: true,
                  showDragTip: true
                },
                virtualYConfig: {
                  enabled: true,
                  gt: 50,
                  oSize: 2
                }
              },
              treeSelect: {
                autoClose: true,
                virtualYConfig: {
                  enabled: true,
                  gt: 0,
                  oSize: 2
                },
                treeConfig: {
                  maxHeight: 300,
                  radioConfig: {},
                  checkboxConfig: {},
                  filterConfig: {
                    autoExpandAll: true
                  }
                }
              },
              upload: {
                mode: 'all',
                imageTypes: ['jpg', 'jpeg', 'png', 'gif'],
                showList: true,
                showUploadButton: true,
                showButtonText: true,
                showRemoveButton: true,
                showButtonIcon: true,
                showPreview: true,
                dragToUpload: true,
                // imageConfig: {},
                showLimitSize: true,
                showLimitCount: true,
                autoSubmit: true,
                // urlArgs: false,
                maxSimultaneousUploads: 5,
                previewImageConfig: {}
              },
              watermark: {
                rotate: -30,
                gap: [100, 100]
              },

              table: {
                showHeader: true,
                delayHover: 250,
                autoResize: true,
                // minHeight: null,
                // keepSource: false,
                // showOverflow: null,
                // showHeaderOverflow: null,
                // showFooterOverflow: null,
                // resizeInterval: 500,
                // size: null,
                // zIndex: null,
                // stripe: false,
                // border: false,
                // round: false,
                // emptyText: '暂无数据',
                // emptyRender: {
                //   name: ''
                // },
                // rowConfig: {
                //   keyField: '_X_ROW_KEY' // 行数据的唯一主键字段名
                // },
                resizeConfig: {
                  // refreshDelay: 20
                },
                resizableConfig: {
                  dragMode: 'auto',
                  showDragTip: true,
                  isSyncAutoHeight: true,
                  isSyncAutoWidth: true,
                  minHeight: 18
                },
                currentRowConfig: {
                  strict: true
                },
                currentColumnConfig: {
                  strict: true
                },
                radioConfig: {
                  // trigger: 'default'
                  strict: true
                },
                rowDragConfig: {
                  showIcon: true,
                  animation: true,
                  showGuidesStatus: true,
                  showDragTip: true
                },
                columnDragConfig: {
                  showIcon: true,
                  animation: true,
                  showGuidesStatus: true,
                  showDragTip: true
                },
                checkboxConfig: {
                  // trigger: 'default',
                  strict: true
                },
                tooltipConfig: {
                  enterable: true,
                  defaultPlacement: 'top'
                },
                headerTooltipConfig: {
                  enterable: true
                },
                footerTooltipConfig: {
                  enterable: true
                },
                validConfig: {
                  showErrorMessage: true,
                  autoClear: true,
                  autoPos: true,
                  message: 'inline',
                  msgMode: 'single',
                  theme: 'beautify'
                },
                columnConfig: {
                  autoOptions: {
                    isCalcHeader: true,
                    isCalcBody: true,
                    isCalcFooter: true
                  },
                  maxFixedSize: 4
                },
                cellConfig: {
                  padding: true
                },
                headerCellConfig: {
                  height: 'unset'
                },
                footerCellConfig: {
                  height: 'unset'
                },
                menuConfig: {
                  // visibleMethod () {},
                  // transfer: false,
                  destroyOnClose: true
                },
                customConfig: {
                  // enabled: false,
                  allowVisible: true,
                  allowResizable: true,
                  allowFixed: true,
                  allowSort: true,
                  showSortDragButton: true,
                  showFooter: true,
                  placement: 'top-right',
                  //  storage: false,
                  storeOptions: {
                    visible: true,
                    resizable: true,
                    sort: true,
                    fixed: true
                    // rowGroup: false,
                    // aggFunc: false
                  },
                  // autoAggGroupValues: false,
                  //  checkMethod () {},
                  modalOptions: {
                    showMaximize: true,
                    mask: true,
                    lockView: true,
                    resize: true,
                    escClosable: true
                  },
                  drawerOptions: {
                    mask: true,
                    lockView: true,
                    escClosable: true,
                    resize: true
                  }
                },
                sortConfig: {
                  // remote: false,
                  // trigger: 'default',
                  // orders: ['asc', 'desc', null],
                  // sortMethod: null,
                  showIcon: true,
                  allowClear: true,
                  allowBtn: true,
                  iconLayout: 'vertical'
                },
                filterConfig: {
                  // remote: false,
                  // filterMethod: null,
                  // isEvery: false,
                  // transfer: false,
                  destroyOnClose: true,
                  multiple: true,
                  showIcon: true,
                  maxHeight: 280
                },
                floatingFilterConfig: {
                  // enabled: false
                },
                aggregateConfig: {
                  padding: true,
                  rowField: 'id',
                  parentField: '_X_ROW_PARENT_KEY',
                  childrenField: '_X_ROW_CHILDREN',
                  mapChildrenField: '_X_ROW_CHILD_LIST',
                  indent: 20,
                  showIcon: true,
                  maxGroupSize: 4,
                  showAggFuncTitle: true
                },
                treeConfig: {
                  padding: true,
                  rowField: 'id',
                  parentField: 'parentId',
                  childrenField: 'children',
                  hasChildField: 'hasChild',
                  mapChildrenField: '_X_ROW_CHILD',
                  indent: 20,
                  showIcon: true,
                  showRootLine: true
                },
                expandConfig: {
                  // trigger: 'default',
                  showIcon: true,
                  mode: 'fixed'
                },
                editConfig: {
                  // mode: 'cell',
                  showIcon: true,
                  showAsterisk: true,
                  autoFocus: true
                },
                importConfig: {
                  _typeMaps: {
                    csv: 1,
                    html: 1,
                    xml: 1,
                    txt: 1
                  }
                },
                exportConfig: {
                  _typeMaps: {
                    csv: 1,
                    html: 1,
                    xml: 1,
                    txt: 1
                  }
                },
                printConfig: {
                },
                mouseConfig: {
                  extension: true
                },
                keyboardConfig: {
                  isAll: true,
                  isEsc: true
                },
                areaConfig: {
                  autoClear: true,
                  selectCellByHeader: true,
                  selectCellByBody: true,
                  extendDirection: {
                    top: true,
                    left: true,
                    bottom: true,
                    right: true
                  }
                },
                clipConfig: {
                  isCopy: true,
                  isCut: true,
                  isPaste: true
                },
                fnrConfig: {
                  isFind: true,
                  isReplace: true
                },
                virtualXConfig: {
                  // enabled: false,
                  gt: 24,
                  preSize: 1,
                  oSize: 0
                },
                virtualYConfig: {
                  // enabled: false,
                  // mode: 'wheel',
                  gt: 100,
                  preSize: 1,
                  oSize: 0
                },
                scrollbarConfig: {
                  // width: 14,
                  // height: 14,
                  x: {
                    // position: 'bottom',
                    visible: true
                  },
                  y: {
                    // position: 'right',
                    visible: true
                  }
                },
                undoRedoHistoryConfig: {
                  stackSize: 50
                }
              },
              grid: {
                // size: null,
                // zoomConfig: {
                //   escRestore: true
                // },
                formConfig: {
                  enabled: true
                },
                pagerConfig: {
                  enabled: true
                  // perfect: false
                },
                toolbarConfig: {
                  enabled: true
                  // perfect: false
                },
                proxyConfig: {
                  enabled: true,
                  autoLoad: true,
                  showLoading: true,
                  showResponseMsg: true,
                  showActionMsg: true,
                  response: {
                    list: 'list',
                    result: 'result',
                    total: 'page.total',
                    footerData: 'footerData',
                    message: 'message'
                  }
                  // beforeItem: null,
                  // beforeColumn: null,
                  // beforeQuery: null,
                  // afterQuery: null,
                  // beforeDelete: null,
                  // afterDelete: null,
                  // beforeSave: null,
                  // afterSave: null
                }
              },
              toolbar: {
                // size: null,
                // import: {
                //   mode: 'covering'
                // },
                // export: {
                //   types: ['csv', 'html', 'xml', 'txt']
                // },
                // buttons: []
              },

              gantt: {
                // size: null,
                // zoomConfig: {
                //   escRestore: true
                // },
                formConfig: {
                  enabled: true
                },
                pagerConfig: {
                  enabled: true
                  // perfect: false
                },
                toolbarConfig: {
                  enabled: true
                  // perfect: false
                },
                proxyConfig: {
                  enabled: true,
                  autoLoad: true,
                  showLoading: true,
                  showResponseMsg: true,
                  showActionMsg: true,
                  response: {
                    list: null,
                    result: 'result',
                    total: 'page.total',
                    message: 'message'
                  }
                  // beforeItem: null,
                  // beforeColumn: null,
                  // beforeQuery: null,
                  // afterQuery: null,
                  // beforeDelete: null,
                  // afterDelete: null,
                  // beforeSave: null,
                  // afterSave: null
                },
                taskBarTooltipConfig: {
                  enterable: true
                },
                taskLinkConfig: {
                  enabled: true,
                  isHover: true,
                  showArrow: true
                },
                taskViewScaleConfig: {
                  year: {
                    valueFormat: 'yyyy-MM-dd'
                  },
                  quarter: {
                    valueFormat: 'yyyy-MM-dd'
                  },
                  month: {
                    valueFormat: 'yyyy-MM-dd'
                  },
                  week: {
                    startDay: 1,
                    valueFormat: 'yyyy-MM-dd'
                  },
                  day: {
                    valueFormat: 'yyyy-MM-dd'
                  },
                  date: {
                    valueFormat: 'yyyy-MM-dd'
                  },
                  hour: {
                    valueFormat: 'yyyy-MM-dd HH:mm:ss'
                  },
                  minute: {
                    valueFormat: 'yyyy-MM-dd HH:mm:ss'
                  },
                  second: {
                    valueFormat: 'yyyy-MM-dd HH:mm:ss'
                  }
                },
                taskViewConfig: {
                  showNowLine: true,
                  gridding: {
                    leftSpacing: 1,
                    rightSpacing: 1
                  }
                },
                taskSplitConfig: {
                  enabled: true,
                  resize: true,
                  showCollapseTableButton: true,
                  showCollapseTaskButton: true
                },
                taskBarSubviewConfig: {
                  // showOverview: false
                }
              }
            })
          </pre-code>
        </pre>
      </template>
    </CodeLight>
  </div>
</template>
