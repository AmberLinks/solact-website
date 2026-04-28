# _archive — 現状未使用のアセット保管

現在のサイト実装では参照していないが、再利用可能性があるためソース管理しているファイル。

## public/images/

| ファイル | 内容 |
|---|---|
| `bg-preview.png` | gpt-image-2 で生成した縦長海中シーン背景画像 (1280×3840 / 7MB)。`scripts/generate-bg.mjs` で再生成可能 |
| `bg-txtline.png` | Base テンプレート由来の装飾パターン (74B) |
| `logo_icon.png` | SOLACT ロゴアイコン高解像度ソース (2048×2048 透過 PNG, ただしチェッカー柄が焼き込み済み)。`logo.png` / `logo-white.png` の生成元 |

## public/videos/

| ファイル | 内容 |
|---|---|
| `bg-main.mp4` | seedance 2.0 fast image-to-video で生成した縦長背景動画 (960×2880 / 5sec / 一方向ループ / 3MB) |
| `logo-anim.mp4` | seedance で生成したロゴアニメ (960×960 / 5sec / 白背景、CSS multiply で透明扱い想定 / 193KB) |
| `logo-animation.mp4` | 初期に生成した 1:1 ロゴ動画 (1MB) |

## scripts/

| ファイル | 内容 |
|---|---|
| `sync-agent-rules.sh` | Base テンプレ由来。AGENTS.md から各 AI agent 用設定を生成 (Cursor / Cline / Continue 等) |
| `sync-skills.mjs` | Base テンプレ由来。`.claude/skills/clone-website/SKILL.md` を各プラットフォーム用にコピー |

---

## 復元方法

サイトで利用するには、対応する `public/` 配下に戻す:

```bash
mv _archive/public/images/bg-preview.png public/images/
# など
```

スクリプト由来の生成物 (背景画像/動画) は `scripts/generate-bg.mjs` で都度再生成可能。
