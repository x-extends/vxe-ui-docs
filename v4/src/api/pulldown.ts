const apis = [
  {
    name: 'Props',
    descKey: 'app.api.title.props',
    version: '',
    type: '',
    enum: '',
    defVal: '',
    list: [
      {
        name: 'modelValue',
        descKey: 'app.api.pulldown.desc.value',
        version: '',
        type: 'boolean',
        enum: '',
        defVal: '4.1.18',
        list: []
      },
      {
        name: 'size',
        descKey: 'app.api.pulldown.desc.size',
        version: '',
        type: 'string',
        enum: 'medium, small, mini',
        defVal: '继承上下文',
        list: []
      },
      {
        name: 'class-name',
        desc: '给展示容器附加 className',
        version: '4.5.0',
        type: 'string | (({}) => string)',
        enum: '',
        defVal: '',
        list: []
      },
      {
        name: 'popup-class-name',
        desc: '给下拉容器附加 className',
        version: '4.5.0',
        type: 'string | (({}) => string)',
        enum: '',
        defVal: '',
        list: []
      },
      {
        name: 'disabled',
        descKey: 'app.api.pulldown.desc.disabled',
        version: '',
        type: 'boolean',
        enum: '',
        defVal: 'false',
        list: []
      },
      {
        name: 'placement',
        descKey: 'app.api.pulldown.desc.placement',
        version: '',
        type: 'string',
        enum: 'top, bottom',
        defVal: 'bottom',
        list: []
      },
      {
        name: 'destroy-on-close',
        desc: '在下拉容器关闭时销毁内容',
        version: '',
        type: 'boolean',
        enum: '',
        defVal: 'false',
        list: []
      },
      {
        name: 'transfer',
        descKey: 'app.api.pulldown.desc.transfer',
        version: '',
        type: 'boolean',
        enum: '',
        defVal: 'false',
        list: []
      }
    ]
  },
  {
    name: 'Slots',
    descKey: 'app.api.title.slots',
    version: '',
    type: '',
    enum: '',
    defVal: '',
    list: [
      {
        name: 'default',
        desc: '显示的内容',
        version: '',
        type: '',
        enum: '',
        defVal: '',
        list: []
      },
      {
        name: 'header',
        desc: '自定义弹窗容器头部模板',
        version: '4.5.17',
        type: '',
        enum: '',
        defVal: '{}',
        list: []
      },
      {
        name: 'dropdown',
        desc: '下拉面板显示的内容',
        version: '',
        type: '',
        enum: '',
        defVal: '',
        list: []
      },
      {
        name: 'footer',
        desc: '自定义弹窗容器底部模板',
        version: '4.5.17',
        type: '',
        enum: '',
        defVal: '{}',
        list: []
      }
    ]
  },
  {
    name: 'Events',
    descKey: 'app.api.title.events',
    version: '',
    type: '',
    enum: '',
    defVal: '',
    list: [
      {
        name: 'hide-panel',
        desc: '在下拉面板被触发隐藏时触发该事件',
        version: '',
        type: '',
        enum: '',
        defVal: '{ $event }',
        list: []
      }
    ]
  },
  {
    name: 'Methods',
    descKey: 'app.api.title.methods',
    version: '',
    type: '',
    enum: '',
    defVal: '',
    list: [
      {
        name: 'isPanelVisible()',
        desc: '判断下拉面板是否可视',
        version: '',
        type: 'Promise',
        enum: '',
        defVal: '',
        list: []
      },
      {
        name: 'togglePanel()',
        desc: '切换下拉面板',
        version: '',
        type: 'Promise',
        enum: '',
        defVal: '',
        list: []
      },
      {
        name: 'showPanel()',
        desc: '显示下拉面板',
        version: '',
        type: 'Promise',
        enum: '',
        defVal: '',
        list: []
      },
      {
        name: 'hidePanel()',
        desc: '隐藏下拉面板',
        version: '',
        type: 'Promise',
        enum: '',
        defVal: '',
        list: []
      }
    ]
  }
]

export default apis
