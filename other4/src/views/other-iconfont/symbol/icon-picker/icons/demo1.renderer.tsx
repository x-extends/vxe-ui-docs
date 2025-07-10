import { VxeUI } from 'vxe-pc-ui'

VxeUI.renderer.add('MytestIconfontSymbol', {
  renderIconPickerOptionIcon (renderOpts, renderParams) {
    const { option } = renderParams
    return <svg class="mytesticonfont" aria-hidden="true">
      <use xlinkHref={`#${option.icon}`}></use>
    </svg>
  }
})
