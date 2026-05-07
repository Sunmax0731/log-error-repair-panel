# log-error-repair-panel

ログ・エラー修復パネル の MVP リポジトリです。

## 概要

ログ、エラー署名、重大度、修復候補を整理し、修復判断を支援する。

## 現在の範囲

- 入力データを検査し、必須項目の不足と注意状態をレポート化する。
- 自動テストで正常系と必須項目不足を検証する。
- 手動テスト手順は `docs/manual-test.md` にまとめる。
- 公開前チェックは `docs/release-checklist.md` を基準にする。

## 検証

```powershell
npm test
```

Unity パッケージの場合は `tools/test-package-structure.ps1` が構造検証を実行します。
