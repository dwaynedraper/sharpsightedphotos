#!/bin/bash
# Copy the real repo into the preview folder and apply the preview-only changes. Never touches the repo.
set -e
cd /home/claude/photos
find /home/claude/photos-preview -mindepth 1 -maxdepth 1 ! -name node_modules -exec rm -rf {} +
tar --exclude=./.next --exclude=./node_modules --exclude=./.git --exclude=./out -cf - . | tar -xf - -C /home/claude/photos-preview
cd /home/claude/photos-preview
python3 - <<'PY'
p='next.config.ts'; s=open(p).read()
a=s.index('  // Clean paths'); b=s.index('};\n\nexport default')
s=s[:a]+s[b:]
s=s.replace("images: {","output: 'export',\n  images: {\n    unoptimized: true,",1)
open(p,'w').write(s)
open('src/app/actions/gallery.ts','w').write('''// Preview stub: the static preview cannot call Cloudinary.
export interface CloudinaryImage { id: string; publicId: string; format: string; width: number; height: number; url: string; secureUrl: string; }
export async function getGalleryImages(folderName: string): Promise<CloudinaryImage[]> { void folderName; return []; }
''')
PY
rm -f src/app/robots.ts src/app/sitemap.ts
