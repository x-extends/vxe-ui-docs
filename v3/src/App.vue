<template>
  <VxeLayoutContainer :size="componentsSize">
    <RouterView />
    <vxe-loading :value="pageLoading"></vxe-loading>
  </VxeLayoutContainer>
</template>

<script lang="tsx">
import Vue from 'vue'
import { mapState, mapMutations } from 'vuex'
import { VxeUI } from 'vxe-pc-ui'
import axios from 'axios'

export default Vue.extend({
  computed: {
    ...mapState([
      'siteBaseUrl',
      'pageLoading',
      'componentsSize'
    ])
  },
  methods: {
    ...mapMutations([
      'setSystemConfig',
      'setVersionConfig'
    ])
  },
  created () {
    axios.get(`${this.siteBaseUrl}/component-api/system-config.json?v=${process.env.VUE_APP_DATE_NOW}`).then(res => {
      this.setSystemConfig(res.data)
    })

    axios.get(`${this.siteBaseUrl}/component-api/vxe-version.json?v=${process.env.VUE_APP_DATE_NOW}`).then(res => {
      this.setVersionConfig(res.data)
    })

    if (!localStorage.getItem('VXE_VOTE_2025')) {
      VxeUI.modal.confirm({
        width: 500,
        title: 'vxe-table 正在参加 Gitee 2025 最受欢迎的开源软件投票活动',
        confirmButtonText: '去投票',
        cancelButtonText: '忽略，不再弹出',
        slots: {
          default () {
            return <div>
              <div>如果该项目对您有帮助，快来投票！</div>
              <div><vxe-link status="primary" href="https://gitee.com/activity/2025opensource?ident=IX0B8Q" target="_blank">https://gitee.com/activity/2025opensource?ident=IX0B8Q</vxe-link></div>
            </div>
          }
        }
      }).then((type) => {
        if (type === 'confirm') {
          localStorage.setItem('VXE_VOTE_2025', '1')
          open('https://gitee.com/activity/2025opensource?ident=IX0B8Q')
        } else if (type === 'cancel') {
          localStorage.setItem('VXE_VOTE_2025', '1')
        }
      })
    }
  }
})
</script>
