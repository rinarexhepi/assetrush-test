import type { StrapiEntity } from './strapi-entity'
import type { Image } from '.'

/**  @see collectionName `components_links_buttons` */
export interface Button extends StrapiEntity {
  file?: Image // TODO: find in the BE and add here typings for files like PDF with `|`
  url?: string
  newTab: boolean
  text: string
}
