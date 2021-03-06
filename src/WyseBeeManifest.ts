import Icon from './Icon'

export enum WyseBeeContentType {
  App = 'App',
  ImageList = 'ImageList',
  AudioList = 'AudioList',
}

export default class WyseBeeManifest {
  static MANIFEST_FILENAME = 'wysebee.manifest'
  static DEFAULT_ENTRYFILE = 'index.html'

  title: string
  description = ''
  packageType = WyseBeeContentType.App
  lang = 'en'
  entry = WyseBeeManifest.DEFAULT_ENTRYFILE
  version = '1.0.0'
  author = ''
  copyRight = ''
  license = ''
  uuid = 'uuid or isbn of the publication'
  cover?: string
  modified?: string
  icons?: Icon[]

  constructor(title: string) {
    this.title = title
  }

  fileName(): string {
    return WyseBeeManifest.MANIFEST_FILENAME
  }

  toString(): string {
    return JSON.stringify(
      {
        lang: this.lang,
        name: this.title,
        description: this.description,
        packageType: this.packageType,
        start_url: this.entry,
        version: this.version,
        author: this.author,
        uuid: this.uuid,
        copyRight: this.copyRight,
        license: this.license,
        cover: this.cover,
        modified: this.modified,
      },
      null,
      2
    )
  }
}
