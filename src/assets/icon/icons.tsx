import { createElement } from 'react'

import { iconMapper, IconNames } from './icons-svg'

export type IconsProps = {
  color?: string
  size: number | string
}

export type IconMainComponent = IconsProps & {
  name: IconNames
}

export function Icon({ color, size, name }: IconMainComponent) {
  return createElement(iconMapper[name], { color, size: size || '48px' })
}
