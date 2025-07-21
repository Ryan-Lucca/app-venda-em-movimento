import { Carteira } from './carteira/carteira'
import { Home } from './home/home'
import { Hub } from './hub/hub'
import { Meta } from './meta/meta'

export const iconMapper = {
  carteira : Carteira,
  home : Home,
  hub : Hub,
  meta : Meta
}

export type IconNames = keyof typeof iconMapper
