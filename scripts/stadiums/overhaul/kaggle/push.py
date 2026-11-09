# Push a kernel script with an inlined job list as a private Kaggle script kernel (T4 GPU, internet).
# Usage: python3 push.py <jobs.json> <kernel-slug> [--script generate.py] [--dataset joshleviloff/stadium-overhaul-refs] [--cpu]
# --cpu: no accelerator (CPU session; does not use the weekly GPU quota). --dataset none: no input dataset.
import json, os, subprocess, sys, tempfile
jobs, slug = sys.argv[1], sys.argv[2]
opt = lambda k, d: sys.argv[sys.argv.index(k) + 1] if k in sys.argv else d
script, dataset = opt('--script', 'generate.py'), opt('--dataset', 'joshleviloff/stadium-overhaul-refs')
here = os.path.dirname(os.path.abspath(__file__))
d = tempfile.mkdtemp()
src = 'JOBS_INLINE = ' + json.dumps(json.load(open(jobs))) + '\n' + open(os.path.join(here, script)).read()
open(os.path.join(d, 'run.py'), 'w').write(src)
meta = {'id': f'joshleviloff/{slug}', 'title': slug, 'code_file': 'run.py', 'language': 'python', 'kernel_type': 'script',
        'is_private': 'true', 'enable_gpu': 'false' if '--cpu' in sys.argv else 'true', 'enable_internet': 'true',
        'dataset_sources': [] if dataset == 'none' else [dataset], 'competition_sources': [], 'kernel_sources': []}
json.dump(meta, open(os.path.join(d, 'kernel-metadata.json'), 'w'))
subprocess.run(['kaggle', 'kernels', 'push', '-p', d] + ([] if '--cpu' in sys.argv else ['--accelerator', 'NvidiaTeslaT4']), check=True)
