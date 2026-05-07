# log-error-repair-panel

ログ・エラー修復パネル は、ログ、エラー署名、重要度、修復アクションをまとめ、次の修正判断につなげる。

## 対象ユーザー

- 開発者、運用担当、障害調査担当

## 主な価値

- 必須項目の不足を自動検出します。
- 手動テスト、導入手順、リリース前確認を同じドキュメント体系で確認できます。
- 競合プロダクトと公式標準を基準に、QCDSを実装とドキュメントの両方で評価します。

## 使い方

```powershell
cd D:\AI\ProjectManagement\log-error-repair-panel
npm test
node src/cli.mjs samples/sample-input.json manual-output
```

## ドキュメント

- docs/requirements.md
- docs/specification.md
- docs/design.md
- docs/implementation-plan.md
- docs/test-plan.md
- docs/manual-test.md
- docs/installation-guide.md
- docs/user-guide.md
- docs/competitive-benchmark.md
- docs/evaluation-criteria.md
- docs/release-checklist.md
- docs/post-mvp-roadmap.md
- docs/qcds-evaluation.md

## 厳格QCDS評価

- docs/qcds-remote-benchmark.md
- docs/qcds-strict-gap-analysis.md
- docs/qcds-strict-evaluation.md
- docs/qcds-strict-metrics.json
- docs/security-privacy-checklist.md
- docs/traceability-matrix.md
- docs/strict-manual-test-addendum.md
