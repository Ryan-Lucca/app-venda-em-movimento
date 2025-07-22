import { Carteira } from './carteira/carteira'
import { Home } from './home/home'
import { Hub } from './hub/hub'
import { Meta } from './meta/meta'
import { Reload } from './reload/reload'

export const iconMapper = {
  carteira : Carteira,
  home : Home,
  hub : Hub,
  meta : Meta,
  reload : Reload
}

export type IconNames = keyof typeof iconMapper
