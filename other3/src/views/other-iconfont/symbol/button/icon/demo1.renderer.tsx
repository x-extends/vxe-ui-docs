import { VxeUI } from 'vxe-pc-ui'

VxeUI.renderer.add('MytestIconfontSymbol', {
  renderButtonPrefix (h, renderOpts, renderParams) {
    const { props } = renderOpts
    return <svg class="mytesticonfont" aria-hidden="true">
      <use xlinkHref={`#${props ? props.name : ''}`}></use>
    </svg>
  }
})
