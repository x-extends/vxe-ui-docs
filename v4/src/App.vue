<template>
  <div class="app-container" @click="clickEvent">
    <header class="page-header">
      <div class="left">
        <a :href="baseApiUrl">
          <img :src="`${baseApiUrl}logo.png`" width="18">
          <span class="title">Vxe UI</span>
        </a>
        <!-- <a href='https://gitee.com/xuliangzhan_admin/vxe-table/stargazers'>
          <img src='https://gitee.com/xuliangzhan_admin/vxe-table/badge/star.svg?theme=gvp' alt='star'>
        </a>
        <a href="https://github.com/x-extends/vxe-table/stargazers">
          <img src="https://img.shields.io/github/stars/xuliangzhan/vxe-table.svg">
        </a>
        <a href="http://npm-stat.com/charts.html?package=vxe-table">
          <img src="https://img.shields.io/npm/dm/vxe-table.svg">
        </a> -->
      </div>
      <div class="right">
        <div class="content">
          <span v-if="appData.usedJSHeapSize && appData.usedJSHeapSize !== '0'" class="performance">Memory used: {{ appData.usedJSHeapSize }} MB.</span>
          <!-- <span>{{ $t('app.body.label.translations') }}:</span> -->
          <vxe-select class="locale-switch" size="mini" v-model="$i18n.locale">
            <vxe-option value="zh_CN" label="中文"></vxe-option>
            <vxe-option value="zh_TC" label="繁體中文"></vxe-option>
            <vxe-option value="en_US" label="English"></vxe-option>
            <!-- <vxe-option value="ja_JP" label="ジャパン"></vxe-option> -->
          </vxe-select>
          <!-- <span>{{ $t('app.body.label.version') }}: </span> -->
          <!-- <vxe-select class="version-switch" size="mini" v-model="appData.version" @change="vChangeEvent">
            <vxe-option value="4" :label="$t('app.body.other.v4')"></vxe-option>
            <vxe-option value="3" :label="$t('app.body.other.v3')"></vxe-option>
            <vxe-option value="2" :label="$t('app.body.other.v2')" class-name="due-to-stop"></vxe-option>
            <vxe-option value="1" :label="$t('app.body.other.v1')" class-name="due-to-stop"></vxe-option>
          </vxe-select> -->
          <!-- <vxe-switch class="link theme" v-model="currTheme" open-value="default" open-label="白天" close-value="dark" close-label="夜间"></vxe-switch> -->
          <!-- <router-link class="link donation" :title="$t('app.footer.donationDesc')" :to="{name: 'Donation'}">{{ $t('app.header.label.donation') }}</router-link> -->
          <!-- <template v-if="showExtendPlugin && appData.apiLoading && appData.showPlugin">
            <template v-if="appData.disabledPlugin">
              <a class="link support" :href="pluginDocsUrl" target="_blank">{{ $t('app.header.label.extendPlugin') }}</a>
            </template>
            <a v-else title="维护中" class="link support" style="cursor: no-drop;color: #BFBFBF;background-color:#fff;" @click="updatingEvent">{{ $t('app.header.label.extendPlugin') }}</a>
          </template> -->
        </div>
      </div>
    </header>
    <div class="page-container">
      <div class="aside" :class="{visible: appData.showLeft}">
        <div class="header">
          <div class="version-list">
            <template v-if="appData.stableVersionList.length">
              <span class="title">{{  $t('app.body.label.stableVersion')}}</span>
              <vxe-select class="stable-select" v-model="appData.selectStableVersion" size="mini" :options="appData.stableVersionList"></vxe-select>
            </template>
            <template v-if="showBetaVetsion">
              <span class="title">{{  $t('app.body.label.latestVersion')}}</span>
              <vxe-select class="latest-select" v-model="appData.selectBetaVersion" size="mini" :options="newBetsVersionList"></vxe-select>
            </template>
          </div>
          <vxe-input clearable v-model="appData.filterName" type="search" class="search-input" :placeholder="$t('app.body.search.searchPlaceholder')" @keyup="searchEvent" @clear="searchEvent"></vxe-input>
        </div>
        <div class="body">
          <div class="docs">
            <template v-if="appData.apiList.length">
              <ul class="nav-menu">
                <li v-for="(item, index) in appData.apiList" :key="index" :class="{expand: item.expand}">
                  <a class="nav-link" @click="linkEvent(item)" :title="item.disabled ? $t('app.body.other.newFunc') : item.label" :class="{'is-new': item.isNew, disabled: item.disabled, active: pageKey === item.value}">
                    <i class="vxe-icon-arrow-right nav-link-icon"></i>
                    <span v-html="item.label"></span>
                  </a>
                  <ul v-if="item.children" v-show="item.expand" class="nav-child-menu">
                    <li v-for="(child, cIndex) in item.children" :key="cIndex" :class="{'is-donation': child.locat && ['Donation'].includes(child.locat.name)}">
                      <a class="nav-link disabled" v-if="child.disabled" :title="$t('app.body.other.newFunc')" v-html="child.label"></a>
                      <a class="nav-link" v-else-if="child.url" :href="child.url" :title="$t('app.body.other.newFunc')" v-html="child.label" target="_blank"></a>
                      <router-link v-else class="nav-link" :to="child.locat" :title="child.label" v-html="child.label"></router-link>
                    </li>
                  </ul>
                </li>
              </ul>
            </template>
            <template v-else>
              <div class="search-nodata">{{ $t('app.body.search.noDataPrefix') }}<span class="keyword-lighten">{{ appData.filterName }}</span>{{ $t('app.body.search.noDataSuffix') }}</div>
            </template>
          </div>
        </div>
      </div>
      <div class="oper-wrapper" v-show="showOperBtn">
        <vxe-button class="oper-btn" :icon="appData.showLeft ? 'vxe-icon-arrow-left' : 'vxe-icon-arrow-right'" @click="appData.showLeft = !appData.showLeft"></vxe-button>
      </div>
      <div class="body">
        <div class="content" :class="{full: ['VXEAPI', 'Donation'].includes($route.name)}">
          <div class="page-view">
            <template v-if="!/\/start|\/module|\/api/.test($route.path)">
              <a v-if="demoLink" class="link todemo" :href="demoLink" target="_blank">{{ $t('app.body.button.runDemo') }}</a>
            </template>
            <router-view/>
          </div>
          <div v-if="currentLink.preLink || currentLink.nextLink" class="footer-link">
            <router-link v-if="currentLink.preLink" class="pre-link" :to="currentLink.preLink.locat" >{{currentLink.preLink.label}}</router-link>
            <router-link v-if="currentLink.nextLink" class="next-link" :to="currentLink.nextLink.locat">{{currentLink.nextLink.label}}</router-link>
          </div>
          <footer class="page-footer">
            <!-- <div>
              <a class="link" href="http://beian.miit.gov.cn/" target="_blank">粤ICP备2022010374号-1</a>
              <span style="margin-left: 20px;">
                <span>©</span>
                <span><a class="link" :href="baseApiUrl" target="_blank">vxe-table</a> 2018-{{serveTY}}</span>
              </span>
            </div> -->
          </footer>
        </div>
      </div>
      <div class="page-pendant"></div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, nextTick, reactive, watch } from 'vue'
import { useAppStore } from '@/store/app'
import i18n from './i18n'
import router from './router'
import XEUtils from 'xe-utils'
// import { VxeUI } from 'vxe-pc-ui'

const appStore = useAppStore()
// const serveTY = computed(() => appStore.serveTY)
const docsVersion = computed(() => appStore.docsVersion)
const baseApiUrl = computed(() => appStore.baseApiUrl)
// const pluginDocsUrl = computed(() => appStore.pluginDocsUrl)
// const pluginApiUrl = computed(() => appStore.pluginApiUrl)
const serveApiUrl = computed(() => appStore.serveApiUrl)

// const showExtendPlugin = location.href.indexOf('vxetable.cn') > -1

const appData = reactive({
  showLeft: true,
  selected: null,
  filterName: '',
  version: docsVersion.value,
  apiList: [] as any[],
  tableData: [] as any[],
  selectBetaVersion: null,
  betaVersionList: [] as any[],
  selectStableVersion: null,
  stableVersionList: [] as any[],
  usedJSHeapSize: '0',
  apiLoading: false,
  showPlugin: false,
  disabledPlugin: false,
  tableList: [
    {
      label: 'app.aside.nav.start',
      value: 'start',
      expand: false,
      children: [
        {
          label: 'app.aside.nav.install',
          locat: {
            name: 'StartInstall'
          }
        },
        {
          label: 'app.aside.nav.use',
          locat: {
            name: 'StartUse'
          }
        },
        // {
        //   label: 'app.aside.nav.quick',
        //   locat: {
        //     name: 'StartQuick'
        //   }
        // },
        {
          label: 'app.aside.nav.global',
          locat: {
            name: 'StartGlobal'
          },
          keywords: ['_XID', '_X_ID', '_X_CHILD']
        }
        // {
        //   label: 'app.aside.nav.icons',
        //   locat: {
        //     name: 'StartIcons'
        //   }
        // },
        // {
        //   label: 'app.aside.nav.theme',
        //   locat: {
        //     name: 'StartTheme'
        //   }
        // },
        // {
        //   label: 'app.aside.nav.useZindex',
        //   locat: {
        //     name: 'StartUseZindex'
        //   }
        // },
        // {
        //   label: 'app.aside.nav.i18n',
        //   demoUrl: 'https://jsrun.pro/SbfKp/edit',
        //   locat: {
        //     name: 'StartI18n'
        //   }
        // }
      ]
    },
    {
      label: 'app.aside.nav.module',
      value: 'module',
      expand: false,
      children: [
        {
          label: 'app.aside.nav.icon',
          locat: {
            name: 'ModuleIcon'
          },
          keywords: ['icon']
        },
        {
          label: 'app.aside.nav.button',
          locat: {
            name: 'ModuleButton'
          },
          keywords: ['button']
        },
        {
          label: 'app.aside.nav.radio',
          locat: {
            name: 'ModuleRadio'
          },
          keywords: ['radio']
        },
        {
          label: 'app.aside.nav.checkbox',
          locat: {
            name: 'ModuleCheckbox'
          },
          keywords: ['checkbox']
        },
        {
          label: 'app.aside.nav.switch',
          locat: {
            name: 'ModuleSwitch'
          },
          keywords: ['switch']
        },
        {
          label: 'app.aside.nav.input',
          locat: {
            name: 'ModuleInput'
          },
          keywords: ['input']
        },
        {
          label: 'app.aside.nav.textarea',
          locat: {
            name: 'ModuleTextarea'
          },
          keywords: ['textarea']
        },
        {
          label: 'app.aside.nav.select',
          locat: {
            name: 'ModuleSelect'
          },
          keywords: ['select']
        },
        {
          label: 'app.aside.nav.pulldown',
          locat: {
            name: 'ModulePulldown'
          },
          keywords: ['pulldown']
        },
        {
          label: 'app.aside.nav.pager',
          locat: {
            name: 'ModulePager'
          },
          keywords: ['pager']
        },
        // {
        //   label: 'app.aside.nav.tooltip',
        //   locat: {
        //     name: 'ModuleTooltip'
        //   }
        // },
        {
          label: 'app.aside.nav.list',
          locat: {
            name: 'ModuleList'
          },
          keywords: ['list']
        },
        {
          label: 'app.aside.nav.modal',
          locat: {
            name: 'ModuleModal'
          },
          keywords: ['modal']
        }
      ]
    },
    {
      label: 'app.aside.nav.form',
      value: 'form',
      expand: false,
      children: [
        {
          label: 'app.aside.nav.baseForm',
          locat: {
            name: 'FormBasics'
          },
          keywords: ['form', 'form-item', 'form-gather']
        },
        {
          label: 'app.aside.nav.customLayout',
          locat: {
            name: 'FormCustomLayout'
          },
          keywords: ['custom-layout']
        },
        {
          label: 'app.aside.nav.formVertical',
          locat: {
            name: 'FormVertical'
          },
          keywords: ['vertical']
        },
        {
          label: 'app.aside.nav.formValid',
          locat: {
            name: 'FormValid'
          },
          keywords: ['rulest']
        },
        {
          label: 'app.aside.nav.configForm',
          locat: {
            name: 'FormConfig'
          },
          keywords: ['form']
        }
      ]
    },
    {
      label: 'app.aside.nav.api',
      value: 'api',
      expand: false,
      children: [
        {
          label: 'app.aside.nav.vxePager',
          locat: {
            name: 'VXEAPI',
            params: {
              name: 'pager'
            }
          }
        },
        {
          label: 'app.aside.nav.vxeRadio',
          locat: {
            name: 'VXEAPI',
            params: {
              name: 'radio'
            }
          }
        },
        {
          label: 'app.aside.nav.vxeRadioGroup',
          locat: {
            name: 'VXEAPI',
            params: {
              name: 'radio-group'
            }
          }
        },
        {
          label: 'app.aside.nav.vxeRadioButton',
          locat: {
            name: 'VXEAPI',
            params: {
              name: 'radio-button'
            }
          }
        },
        {
          label: 'app.aside.nav.vxeCheckbox',
          locat: {
            name: 'VXEAPI',
            params: {
              name: 'checkbox'
            }
          }
        },
        {
          label: 'app.aside.nav.vxeCheckboxGroup',
          locat: {
            name: 'VXEAPI',
            params: {
              name: 'checkbox-group'
            }
          }
        },
        {
          label: 'app.aside.nav.vxeSwitch',
          locat: {
            name: 'VXEAPI',
            params: {
              name: 'switch'
            }
          }
        },
        {
          label: 'app.aside.nav.vxeInput',
          locat: {
            name: 'VXEAPI',
            params: {
              name: 'input'
            }
          }
        },
        {
          label: 'app.aside.nav.vxeSelect',
          locat: {
            name: 'VXEAPI',
            params: {
              name: 'select'
            }
          }
        },
        {
          label: 'app.aside.nav.vxeOptgroup',
          locat: {
            name: 'VXEAPI',
            params: {
              name: 'optgroup'
            }
          }
        },
        {
          label: 'app.aside.nav.vxeOption',
          locat: {
            name: 'VXEAPI',
            params: {
              name: 'option'
            }
          }
        },
        {
          label: 'app.aside.nav.vxeTextarea',
          locat: {
            name: 'VXEAPI',
            params: {
              name: 'textarea'
            }
          }
        },
        {
          label: 'app.aside.nav.vxeButton',
          locat: {
            name: 'VXEAPI',
            params: {
              name: 'button'
            }
          }
        },
        {
          label: 'app.aside.nav.vxeButtonGroup',
          locat: {
            name: 'VXEAPI',
            params: {
              name: 'button-group'
            }
          }
        },
        {
          label: 'app.aside.nav.vxeModal',
          locat: {
            name: 'VXEAPI',
            params: {
              name: 'modal'
            }
          }
        },
        // {
        //   label: 'app.aside.nav.vxeTooltip',
        //   locat: {
        //     name: 'VXEAPI',
        //     params: {
        //       name: 'tooltip'
        //     }
        //   }
        // },
        {
          label: 'app.aside.nav.vxeForm',
          locat: {
            name: 'VXEAPI',
            params: {
              name: 'form'
            }
          }
        },
        {
          label: 'app.aside.nav.vxeFormGather',
          locat: {
            name: 'VXEAPI',
            params: {
              name: 'form-gather'
            }
          }
        },
        {
          label: 'app.aside.nav.vxeFormItem',
          locat: {
            name: 'VXEAPI',
            params: {
              name: 'form-item'
            }
          }
        },
        {
          label: 'app.aside.nav.vxeList',
          locat: {
            name: 'VXEAPI',
            params: {
              name: 'list'
            }
          }
        },
        {
          label: 'app.aside.nav.vxePulldown',
          locat: {
            name: 'VXEAPI',
            params: {
              name: 'pulldown'
            }
          }
        },
        {
          label: 'app.aside.nav.vxeIcon',
          locat: {
            name: 'VXEAPI',
            params: {
              name: 'icon'
            }
          }
        }
      ]
    }
  ]
})

// const currTheme = computed({
//   get () {
//     return appStore.theme
//   },
//   set (name) {
//     appStore.setTheme(name)
//   }
// })

const getVersion = () => {
  fetch(`${serveApiUrl.value}/api/npm/versions/vxe-table`, { method: 'GET' })
    .then(response => response.json())
    .then((data) => {
      const { sp, dp, ss, time, tags } = data
      appData.apiLoading = true
      appData.disabledPlugin = dp
      appData.showPlugin = sp
      appStore.setSupportQQ(ss)
      const stableVersionList = data[`v${appData.version}StableList`].map(value => ({ value, label: value }))
      const betaVersionList = data[`v${appData.version}BetaList`].map(value => ({ value, label: value }))
      appData.stableVersionList = stableVersionList
      appData.betaVersionList = betaVersionList
      if (stableVersionList.length) {
        appData.selectStableVersion = tags && tags[`xtable-v${appData.version}`] ? tags[`xtable-v${appData.version}`] : stableVersionList[0].value
      }
      if (betaVersionList.length) {
        appData.selectBetaVersion = betaVersionList[0].value
      }

      // 样式处理
      const serveDate = XEUtils.toStringDate(time)
      const yymmdd = XEUtils.toDateString(serveDate, 'yyyyMMdd')
      if (['20210404', '20220405', '20230405', '20240404', '20250404'].includes(yymmdd)) {
        localStorage.setItem('qingmingjie', '1')
        document.body.className = `${document.body.className} qingmingjie`
      } else {
        localStorage.removeItem('qingmingjie')
        document.body.className = document.body.className.replace('qingmingjie', '')
      }
    })

  if (localStorage.getItem('qingmingjie')) {
    document.body.className = `${document.body.className} qingmingjie`
  }
}

const handleSearch = () => {
  const filterName = XEUtils.toValueString(appData.filterName).trim().toLowerCase()
  if (filterName) {
    const filterRE = new RegExp(filterName, 'gi')
    const rest = XEUtils.searchTree(appData.tableData, (item: any) => item.label.toLowerCase().indexOf(filterName) > -1 || (item.keywords && item.keywords.some((key: string) => key.toLowerCase().indexOf(filterName) > -1)))
    XEUtils.eachTree(rest, (item: any) => {
      item.label = item.label.replace(filterRE, (match: any) => `<span class="keyword-lighten">${match}</span>`)
    })
    appData.apiList = rest
    appData.apiList.forEach(group => {
      group.expand = true
    })
  } else {
    appData.apiList = appData.tableData
  }
}

// 调用频率间隔 500 毫秒
const searchEvent = XEUtils.debounce(handleSearch, 500, { leading: false, trailing: true })

const clickEvent = (evnt: any) => {
  const pElem = evnt.target
  if (pElem && pElem.className === 'demo-code') {
    const nextElem = pElem.nextSibling
    if (nextElem && nextElem.tagName.toLowerCase() === 'pre') {
      if (nextElem.className.indexOf('is-show') > -1) {
        nextElem.className = ''
      } else {
        nextElem.className = 'is-show'
      }
    }
  }
}

// const updatingEvent = () => {
//   VxeUI.modal.alert('维护中...', '维护中')
// }

const linkEvent = (item: any) => {
  if (!item.disabled) {
    item.expand = !item.expand
  }
}

// const vChangeEvent = () => {
//   switch (appData.version) {
//     case '1':
//       location.href = `${baseApiUrl.value}v1/`
//       break
//     case '2':
//       location.href = `${baseApiUrl.value}v2/`
//       break
//     case '3':
//       location.href = `${baseApiUrl.value}v3/`
//       break
//     case '4':
//       location.href = `${baseApiUrl.value}v4/`
//       break
//   }
// }

const demoLink = computed(() => {
  const $route = router.currentRoute.value
  const apiList: any[] = appData.apiList
  for (let gIndex = 0; gIndex < apiList.length; gIndex++) {
    const group = apiList[gIndex]
    if (group.children) {
      for (let cIndex = 0; cIndex < group.children.length; cIndex++) {
        const item = group.children[cIndex]
        if (item.locat && item.locat.name === $route.name) {
          return item.demoV4Url
        }
      }
    }
  }
  return null
})

const showBetaVetsion = computed(() => {
  const betaVersionList: any[] = appData.betaVersionList
  const stableVersionList: any[] = appData.stableVersionList
  if (stableVersionList.length) {
    if (betaVersionList.length) {
      const stableNums = stableVersionList[0].value.split('-')[0].split('.')
      const stable1 = XEUtils.toNumber(stableNums[0])
      const stable2 = XEUtils.toNumber(stableNums[1])
      const stable3 = XEUtils.toNumber(stableNums[2])
      const betaNums = betaVersionList[0].value.split('-')[0].split('.')
      const beta1 = XEUtils.toNumber(betaNums[0])
      const beta2 = XEUtils.toNumber(betaNums[1])
      const beta3 = XEUtils.toNumber(betaNums[2])
      if (beta1 > stable1) {
        return true
      } else if (beta1 === stable1) {
        if (beta2 > stable2) {
          return true
        } else if (beta2 === stable2) {
          if (beta3 > stable3) {
            return true
          }
        }
      }
    } else {
      return true
    }
  } else {
    return betaVersionList.some((item: any) => item.value.indexOf('4.') === 0)
  }
  return false
})

const newBetsVersionList = computed(() => {
  const betaVersionList: any[] = appData.betaVersionList
  const stableVersionList: any[] = appData.stableVersionList
  if (stableVersionList.length) {
    if (betaVersionList.length) {
      const stableNums = stableVersionList[0].value.split('-')[0].split('.')
      const stable1 = XEUtils.toNumber(stableNums[0])
      const stable2 = XEUtils.toNumber(stableNums[1])
      const stable3 = XEUtils.toNumber(stableNums[2])
      return betaVersionList.filter((pack: any) => {
        const betaNums = pack.value.split('-')[0].split('.')
        const beta1 = XEUtils.toNumber(betaNums[0])
        const beta2 = XEUtils.toNumber(betaNums[1])
        const beta3 = XEUtils.toNumber(betaNums[2])
        if (beta1 > stable1) {
          return true
        } else if (beta1 === stable1) {
          if (beta2 > stable2) {
            return true
          } else if (beta2 === stable2) {
            if (beta3 > stable3) {
              return true
            }
          }
        }
        return false
      })
    }
  } else {
    return betaVersionList.filter((item: any) => item.value.indexOf('4.') === 0)
  }
  return stableVersionList
})

const pageKey = computed(() => {
  const $route = router.currentRoute.value
  return $route.path.split('/')[2]
})

const showOperBtn = computed(() => {
  const $route = router.currentRoute.value
  return XEUtils.isString($route.name) && ['StartInstall', 'StartUse', 'StartGlobal', 'StartIcons', 'StartTheme', 'StartI18n', 'StartUseZindex', 'VXEAPI', 'Donation'].includes($route.name)
})

const currentLink = computed(() => {
  const $route = router.currentRoute.value
  const childArr = XEUtils.toTreeArray(appData.tableData).filter(data => data.locat && data.locat.name !== 'VXEAPI')
  const cindex = childArr.findIndex(item => (item.locat && item.locat.name) === ($route && $route.name))
  return {
    preLink: cindex >= 0 && childArr[cindex - 1],
    nextLink: cindex >= 0 && childArr[cindex + 1]
  }
})

const defaultExpand = () => {
  const group = appData.apiList.find(item => item.value === pageKey.value)
  if (group) {
    group.expand = true
  }
}

const loadList = () => {
  appData.tableData = XEUtils.clone(appData.tableList, true)
  XEUtils.eachTree(appData.tableData, (item: any) => {
    item.label = i18n.global.t(item.label)
  })
  handleSearch()
}

const init = () => {
  getVersion()
  loadList()
  setTimeout(() => defaultExpand(), 1500)
}

watch(() => i18n.global.locale, (value) => {
  localStorage.setItem('language', value)
  loadList()
  defaultExpand()
})

watch(pageKey, () => {
  defaultExpand()
})

watch(() => router.currentRoute.value, () =>
  document.querySelector('.body .content')?.scrollTo(0, 0)
)

nextTick(() => {
  if (process.env.NODE_ENV === 'development') {
    setInterval(() => {
      const performance: any = window.performance
      if (performance && performance.memory) {
        appData.usedJSHeapSize = XEUtils.toFixed(XEUtils.floor(performance.memory.usedJSHeapSize / 1048576, 2), 2)
      }
    }, 3000)
  }
  init()
})
</script>
