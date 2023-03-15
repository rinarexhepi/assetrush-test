import type { StrapiEntity } from '../../types'

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
  url: string
  provider: string
  provider_metadata?: unknown
  previewUrl?: string
}
