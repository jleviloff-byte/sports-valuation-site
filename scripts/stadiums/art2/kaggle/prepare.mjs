// Stages the Path A bake-off inputs for Kaggle and writes the dataset and
// kernel metadata. The staged folder is gitignored (reference photos stay local).
// Usage: node scripts/stadiums/art2/kaggle/prepare.mjs <kaggle-username>
// Then:  kaggle datasets create -p research/raw/stadiums/kaggle/inputs   (first time; private)
//        kaggle kernels push -p research/raw/stadiums/kaggle/kernel
import fs from 'node:fs'
import path from 'node:path'

const user = process.argv[2]
if (!user) throw new Error('usage: prepare.mjs <kaggle-username>')
const STAGE = 'research/raw/stadiums/kaggle'
const IN = path.join(STAGE, 'inputs'), K = path.join(STAGE, 'kernel')
fs.mkdirSync(IN, { recursive: true }); fs.mkdirSync(K, { recursive: true })

// One appearance guide per venue, from the category-verified set
// (scripts/stadiums/refs/verified.json, see refs/rejected.md). Picked to
// match the sprite's view where there is a choice.
const verified = JSON.parse(fs.readFileSync('scripts/stadiums/refs/verified.json', 'utf8'))
const REF = { 'michigan-stadium': 1, 'yulman-stadium': 10, 'fenway-park': 11, 'wrigley-field': 8, 'sofi-stadium': 1, 'madison-square-garden': 17, 'daytona-international-speedway': 17, 'arthur-ashe-stadium': 5 }
for (const [slug, n] of Object.entries(REF)) {
  const ref = verified[slug].find((r) => String(r.n) === String(n))
  if (!ref) throw new Error(`${slug}: reference #${n} is not in verified.json`)
  for (const k of ['depth', 'mask']) fs.copyFileSync(`scripts/stadiums/art2/out/control/${slug}-${k}.png`, path.join(IN, `${slug}-${k}.png`))
  fs.copyFileSync(ref.local, path.join(IN, `${slug}-ref.jpg`))
}
fs.writeFileSync(path.join(IN, 'dataset-metadata.json'), JSON.stringify({
  title: 'stadium-bakeoff-inputs', id: `${user}/stadium-bakeoff-inputs`, licenses: [{ name: 'other' }],
}, null, 1))
fs.copyFileSync('scripts/stadiums/art2/kaggle/bakeoff.py', path.join(K, 'bakeoff.py'))
fs.writeFileSync(path.join(K, 'kernel-metadata.json'), JSON.stringify({
  id: `${user}/stadium-bakeoff`, title: 'stadium-bakeoff', code_file: 'bakeoff.py', language: 'python', kernel_type: 'script',
  is_private: true, enable_gpu: true, enable_internet: true, dataset_sources: [`${user}/stadium-bakeoff-inputs`], competition_sources: [], kernel_sources: [],
}, null, 1))
console.log('staged', Object.keys(REF).length, 'venues in', STAGE)
