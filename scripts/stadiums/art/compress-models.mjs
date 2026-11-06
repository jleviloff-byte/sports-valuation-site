// Meshopt-compresses the card GLBs in public/stadiums/models (EXT_meshopt_compression).
// The card decodes them with three.js's bundled MeshoptDecoder (MIT).
// render.mjs calls compressGlb() for new renders; run this file to recompress existing ones.
//
// Usage: node scripts/stadiums/art/compress-models.mjs
import fs from 'node:fs'
import path from 'node:path'
import { pathToFileURL } from 'node:url'
import { NodeIO, Logger } from '@gltf-transform/core'
import { ALL_EXTENSIONS } from '@gltf-transform/extensions'
import { meshopt } from '@gltf-transform/functions'
import { MeshoptEncoder, MeshoptDecoder } from 'meshoptimizer'

await MeshoptEncoder.ready
await MeshoptDecoder.ready
const io = new NodeIO().setLogger(new Logger(Logger.Verbosity.WARN)).registerExtensions(ALL_EXTENSIONS).registerDependencies({ 'meshopt.encoder': MeshoptEncoder, 'meshopt.decoder': MeshoptDecoder })

export async function compressGlb(buf) {
  const doc = await io.readBinary(new Uint8Array(buf))
  await doc.transform(meshopt({ encoder: MeshoptEncoder, level: 'medium' }))
  return io.writeBinary(doc)
}

if (import.meta.url === pathToFileURL(process.argv[1]).href) {
  const dir = 'public/stadiums/models'
  let before = 0, after = 0
  for (const f of fs.readdirSync(dir).filter((x) => x.endsWith('.glb'))) {
    const p = path.join(dir, f)
    const buf = fs.readFileSync(p)
    const doc = await io.readBinary(new Uint8Array(buf))
    if (doc.getRoot().listExtensionsUsed().some((e) => e.extensionName === 'EXT_meshopt_compression')) continue
    const out = await compressGlb(buf)
    before += buf.length; after += out.byteLength
    fs.writeFileSync(p, out)
  }
  console.log(`compressed: ${(before / 1048576).toFixed(1)} MB -> ${(after / 1048576).toFixed(1)} MB`)
}
