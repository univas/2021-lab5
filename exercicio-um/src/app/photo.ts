export class Photo {

  title: string
  description: string
  url: string

  constructor(title?: string, description?: string, url?: string) {
    this.title = title
    this.description = description
    this.url = url
  }
}