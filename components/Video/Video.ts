import type { Button, ImageFile } from '.'

export interface Video {
  id: number
  title: string
  videoUrl: string
  overlay: boolean
  button: Button
  playButtonText?: string
  description?: string
  poster?: ImageFile
  partnersFullName?: String
  partnersRole?: String
  partnersCompany?: String
}
