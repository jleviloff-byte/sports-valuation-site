# Push generate.py with an inlined job list as a private Kaggle script kernel.
# Usage: python3 push.py <jobs.json> <kernel-slug> [--accelerator NvidiaTeslaT4]
import json, os, subprocess, sys, tempfile
jobs, slug = sys.argv[1], sys.argv[2]
here = os.path.dirname(os.path.abspath(__file__))
d = tempfile.mkdtemp()
src = 'JOBS_INLINE = ' + json.dumps(json.load(open(jobs))) + '\n' + open(os.path.join(here, 'generate.py')).read()
open(os.path.join(d, 'run.py'), 'w').write(src)
meta = {'id': f'joshleviloff/{slug}', 'title': slug, 'code_file': 'run.py', 'language': 'python', 'kernel_type': 'script',
        'is_private': 'true', 'enable_gpu': 'true', 'enable_internet': 'true',
        'dataset_sources': ['joshleviloff/stadium-overhaul-refs'], 'competition_sources': [], 'kernel_sources': []}
json.dump(meta, open(os.path.join(d, 'kernel-metadata.json'), 'w'))
subprocess.run(['kaggle', 'kernels', 'push', '-p', d, '--accelerator', 'NvidiaTeslaT4'], check=True)
