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

            VxeUI.setConfig({
              // size: null, // 全局尺寸
              // zIndex: 999, // 全局 zIndex 起始值，如果项目的的 z-index 样式值过大时就需要跟随设置更大，避免被遮挡；新版本可以使用 dom-zindex 共享配置
              // version: 1, // 版本号，对于某些带数据缓存的功能有用到，上升版本号可以用于重置数据

              alert: {},
              anchor: {},
              anchorLink: {},
              avatar: {},
              badge: {},
              breadcrumb: {
                separator: '/'
              },
              breadcrumbItem: {},
              button: {
                trigger: 'hover',
                prefixTooltip: {
                  enterable: true
                },
                suffixTooltip: {
                  enterable: true
                }
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
              checkbox: {},
              checkboxGroup: {},
              col: {},
              collapse: {
                padding: true,
                expandConfig: {
                  showIcon: true
                }
              },
              collapsePane: {},
              countdown: {},
              datePicker: {
                // size: null,
                // transfer: false
                // parseFormat: 'yyyy-MM-dd HH:mm:ss.SSS',
                // labelFormat: '',
                // valueFormat: '',
                startDate: new Date(1900, 0, 1),
                endDate: new Date(2100, 0, 1),
                startDay: 1,
                selectDay: 1
              },
              drawer: {
                // size: null,
                position: 'right',
                showHeader: true,
                lockView: true,
                mask: true,
                showTitleOverflow: true,
                showClose: true,
                padding: true,
                cancelClosable: true,
                confirmClosable: true
              },
              empty: {},
              form: {
                // preventSubmit: false,
                // size: null,
                // colon: false,
                validConfig: {
                  showMessage: true,
                  autoPos: true
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
                showPreview: true,
                showPrintButton: true
              },
              imageGroup: {
                showPreview: true,
                showPrintButton: true
              },
              imagePreview: {
                showPrintButton: true
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
              layoutBody: {},
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
                scrollY: {
                  enabled: true,
                  gt: 100
                  // oSize: 0
                }
              },
              loading: {
                showIcon: true,
                showText: true
              },
              modal: {
                // size: null,
                top: 16,
                showHeader: true,
                minWidth: 340,
                minHeight: 140,
                lockView: true,
                mask: true,
                duration: 3000,
                marginSize: 0,
                dblclickZoom: true,
                showTitleOverflow: true,
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
                // storage: false,
                storageKey: 'VXE_MODAL_POSITION'
              },
              noticeBar: {},
              numberInput: {
                // size: null,
                // transfer: false
                digits: 2,
                controls: true
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
              print: {},
              passwordInput: {
                controls: true
              },
              printPageBreak: {},
              pulldown: {
                destroyOnClose: true
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
              result: {},
              row: {},
              select: {
                multiCharOverflow: 8,
                scrollY: {
                  enabled: true,
                  gt: 100,
                  oSize: 2
                }
              },
              slider: {
                max: 100,
                min: 0
              },
              steps: {},
              switch: {},
              tabPane: {},
              tabs: {},
              tag: {},
              textEllipsis: {},
              text: {},
              textarea: {
                resize: 'none'
              },
              tip: {},
              tooltip: {
                // size: null,
                trigger: 'hover',
                theme: 'dark',
                enterDelay: 500,
                leaveDelay: 300
              },
              tree: {
                indent: 20,
                minHeight: 60,
                radioConfig: {
                  strict: true
                }
              },
              treeSelect: {
                treeConfig: {
                  radioConfig: {},
                  checkboxConfig: {}
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
                imageStyle: {}
              },
              watermark: {
                rotate: -30,
                gap: [100, 100]
              }
            })
          </pre-code>
        </pre>
      </template>
    </CodeLight>
  </div>
</template>
