import type { StrapiEntity } from '.'

export interface ImageFile {
  ext: string
  url: string
  hash: string
  mime: string
  name: string
  size: number
  width: number
  height: number
  path?: string
}

export interface ImageFormat {
  thumbnail?: ImageFile
  small?: ImageFile
  medium?: ImageFile
  large?: ImageFile
}

export interface Image extends StrapiEntity {
  name: string
  alternativeText: string
  caption: string
  width: number
  height: number
  formats: ImageFormat
  hash: string
  ext: string
  mime: string
  size: number
  /**
   * @deprecated For performance reasons use `.formats.[X].url` instead.
   * An exception would be if the image is known to be an svg and that format is preferable
   * vs a raster image (e.g. webp) for our specific use case (even though the webp version is
   * expected to result in smaller file size).
   */
  url: string
  provider: string
  provider_metadata?: unknown
  previewUrl?: string
}
