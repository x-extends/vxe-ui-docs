## Vxe 组件架构

```mermaid
graph TD;
    xe-utils[Js 函数库<br><a href="https://github.com/x-extends/xe-utils" target="_blank">xe-utils</a>]-->vxe-core[VxeUI 核心库<br><a href="https://github.com/x-extends/vxe-core" target="_blank">vxe-core</a>];
    vxe-core-->vxe-pc-ui[VxeUIBase<br>组件库（桌面端）<br><a href="https://github.com/x-extends/vxe-pc-ui" target="_blank">vxe-pc-ui</a>];
    vxe-core-->vxe-table[VxeUITable<br>表格库（桌面端）<br><a href="https://github.com/x-extends/vxe-table" target="_blank">vxe-table</a>];
    vxe-core-->vxe-mobile-ui[VxeUIBase<br>组件库（移动端）<br>规划中];
    vxe-core-->vxe-mini-ui[VxeUIBase<br>组件库（小程序）<br>规划中];
    vxe-table-->vxe-gantt[VxeUIGantt<br>甘特图（桌面端）<br><a href="https://github.com/x-extends/vxe-gantt" target="_blank">vxe-gantt</a>];
    vxe-pc-ui-->vxe-design[VxeUIDesign<br>可视化设计器（桌面端）<br><a href="https://github.com/x-extends/vxe-design" target="_blank">vxe-design</a>];
    vxe-table-->vxe-design;
```
## vxe-table 表格组件依赖关系

```mermaid
graph TD;
    Toolbar[工具类]-->Grid[Grid 全功能表格];
    Table[Table 基础表格]-->Grid;
    Column-->Table;
    Colgroup-->Table;
    Pager[分页]-->Grid;
    Form[表单]-->Grid;
    Form-->FormGroup;
    Form-->FormItem;
    Toolbar-->Grid;
    gFunc[高级功能]-->Grid;
    zoom[全屏]-->gFunc;
    proxy[数据代理]-->gFunc;
    modules[功能]-->Table;
    tip[鼠标提示]-->modules;
    Tooltip-->tip;
    modal[弹窗提示]-->modules;
    Modal-->modal;
    export[数据导出]-->modules;
    Button-->export;
    Checkbox-->export;
    Select-->export;
    Input-->export;
    Modal-->export;
    import[数据导入]-->modules;
    Button-->import;
    Modal-->import;
    Select-->import;
    print[打印数据]-->modules;
    Button-->print;
    Checkbox-->print;
    Select-->print;
    Input-->print;
    Modal-->print;
    menu[右键菜单]-->modules;
    filter[筛选]-->modules;
    Button-->filter;
    edit[可编辑]-->modules;
    custom[个性化列设置]-->modules;
    Button-->custom;
    Vvalidator[数据校验]-->modules;
    keyboard[按键导航]-->modules;
```

## vxe-gantt 甘特图组件依赖关系

```mermaid
graph TD;
    Table-->Gantt[Gantt 继承 Grid 全功能表格];
    chat[Task 视图渲染]-->Gantt;
```

## vxe-design 设计器组件依赖关系

```mermaid
graph TD;
    Form-->FormGroup;
    Form-->FormItem;
    Form-->FormDesign[FormDesign 表单设计器];
    Button-->FormDesign;
    Switch-->FormDesign;
    Checkbox-->FormDesign;
    CheckboxGroup-->FormDesign;
    Radio-->FormDesign;
    RadioGroup-->FormDesign;
    Input-->FormDesign;
    Tab-->FormDesign;
    TabPane-->FormDesign;
    Grid-->FormDesign;
    Tip-->FormDesign;
    Form-->FormView;
    Button-->FormView;
    Grid-->ListDesign[ListDesign 列表设计器];
    Grid-->ListView;
```