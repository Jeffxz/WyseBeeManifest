import WyseBeeManifest from '../src/WyseBeeManifest'

describe('WyseBeeManifest', () => {
  it('should return MANIFEST_FILENAME', () => {
    const manifest = new WyseBeeManifest('test')
    expect(manifest.fileName()).toEqual(WyseBeeManifest.MANIFEST_FILENAME)
  })

  it('should return JSON string', () => {
    const manifest = new WyseBeeManifest('test')
    console.log(manifest.toString())
    expect(manifest.toString().length > 0).toBeTruthy()
  })
})
