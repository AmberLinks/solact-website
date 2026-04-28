// SOLACT 背景画像生成スクリプト (ロゴ無し版)
//
// 仕様:
//   - openai/gpt-image-2 (text-to-image) で 1280x3840 縦長海中シーンを生成
//   - ロゴは合成しない (HeroIntro.tsx 側で別要素として表示)
//   - viewport 1440 表示で 1.125x 拡大、Hero〜Story 全体を背景でカバー
//
// 実行:
//   FAL_KEY=xxxxxxx node scripts/generate-bg.mjs
//
// 出力:
//   public/images/bg-preview.png

import { fal } from '../node_modules/@fal-ai/client/src/index.js';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PROJECT_ROOT = path.resolve(__dirname, '..');

if (!process.env.FAL_KEY) { console.log('ERROR: FAL_KEY not set'); process.exit(1); }
fal.config({ credentials: process.env.FAL_KEY });

const FINAL = path.join(PROJECT_ROOT, 'public/images/bg-preview.png');

// 1280x3840 (gpt-image-2 max edge 3840 / max ratio 1:3)
const IMG_W = 1280, IMG_H = 3840;

const bgPrompt = `Tall vertical 1280x3840 portrait image as a continuous seamless website hero background — a dreamy journey from morning sky down to a sunlit shallow seabed, divided smoothly into four atmospheric zones from top to bottom (NO hard lines, gradients flow continuously):

ZONE 1 (top 0-25% — sky, distant coastline, horizon): A serene morning sky with very pale sky-blue and warm white luminance. A soft luminous sun glow positioned in the upper-right area, casting gentle golden light across the scene.

A SMALL, SUBTLE white lighthouse stands on a low rocky coastline in the upper-RIGHT area (lighthouse base around X=78%, Y=22%). The lighthouse is a MODEST BACKGROUND ELEMENT — clearly visible but NOT prominent, NOT dominant, just a quiet small silhouette in the distance. The lighthouse height occupies roughly only 8-10% of the total image height. The coastline beneath is low and gentle (no tall cliffs), occupying only the far-right 20% of the horizon line, fading softly into the haze.

The horizon meets the calm ocean at exactly Y=25%. The upper-LEFT region (X=0-50%, Y=0-22%) must remain a clean simple pale empty sky.

ZONE 2 (25-50% — calm shallow water, STABLE WAVE PATTERNS): Just below the horizon at Y=25-30%, the ocean surface shows CALM, SMOOTH, CONSISTENT wave patterns — gentle ripples flowing in ONE consistent direction (left to right). Surface light reflects naturally and softly.

Below the water surface (from Y=30%), light teal-cyan water with NATURAL DIFFUSED AMBIENT LIGHT. Avoid heavy dramatic light shafts or god-rays — the underwater lighting should look SOFT, DIFFUSED, NATURAL, like a real photograph of clear ocean water in late morning. Just a faint sense of brightness from above, NOT distinct light beams or rays. Water clarity is good but lighting is naturally soft and uniform.

ZONE 3 (50-75% — mid water with anchor): Medium teal water with NATURAL diffused ambient lighting (no harsh light beams, no dramatic god-rays — just soft natural underwater light). An old-style iron anchor rests on a sandy seabed, partially half-buried, positioned to the LOWER-RIGHT area (around X=70%, Y=70%). The water has a calm, realistic underwater photographic quality.

ZONE 4 (bottom 75-100% — SHALLOW SANDY SEABED): A natural sunlit sandy seabed in clear tropical shallow water. Soft warm sand with subtle natural light variation (NOT dramatic caustic patterns, just gentle natural variation in brightness). The water above stays a calm bright turquoise-cyan. NOT dark, but lighting is NATURAL and SOFT — like a photograph from snorkeling depth in the Caribbean. A very few tiny bubbles drift gently.

Color flow: pale sky-blue (top) → light cyan-teal (upper middle) → medium teal (middle) → BRIGHT TURQUOISE OVER SANDY BEIGE (bottom). Transitions are smooth and gradient — like one continuous painterly cinematic image. Light direction (upper-right sun) MUST stay consistent throughout all zones. Soft, dreamy, cinematic atmosphere. ABSOLUTELY NO TEXT, NO LETTERS, NO PEOPLE, NO BOATS, NO FISH, NO CHARACTERS, NO LOGOS. Cinematic high-fidelity composition.`;

console.log(`Generating ${IMG_W}x${IMG_H} background (no logo)...`);
const result = await fal.subscribe('openai/gpt-image-2', {
  input: {
    prompt: bgPrompt,
    image_size: { width: IMG_W, height: IMG_H },
    quality: 'high',
    num_images: 1,
    output_format: 'png',
    sync_mode: true,
  },
  logs: false,
  onQueueUpdate: (u) => { if (u.status && u.status !== 'IN_PROGRESS') console.log('  status:', u.status); },
});

const img = result.data?.images?.[0];
if (!img?.url) { console.log('FAILED'); console.log(JSON.stringify(result.data, null, 2)); process.exit(1); }
const buf = img.url.startsWith('data:')
  ? Buffer.from(img.url.split(',')[1], 'base64')
  : Buffer.from(await (await fetch(img.url)).arrayBuffer());

fs.writeFileSync(FINAL, buf);
console.log(`saved: ${FINAL} (${(buf.length / 1024).toFixed(1)} KB)`);
