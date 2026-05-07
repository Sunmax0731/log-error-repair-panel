import test from 'node:test';
import assert from 'node:assert/strict';
import { analyzeItems, renderMarkdownReport } from '../src/core.mjs';

test('valid sample passes required field checks', () => {
  const report = analyzeItems({ items: [{
  "id": "log-error-repair-panel-1",
  "title": "ログ・エラー修復パネル サンプル1",
  "status": "ready",
  "logPath": "logs/sample.log",
  "errorSignature": "E_SAMPLE",
  "severity": "warning",
  "repairAction": "設定値を確認する"
}] });
  assert.equal(report.summary.result, 'passed');
  assert.equal(report.summary.errors, 0);
});

test('missing required field is reported', () => {
  const report = analyzeItems({ items: [{
  "id": "log-error-repair-panel-missing-required",
  "title": "必須項目不足サンプル",
  "status": "ready",
  "errorSignature": "E_SAMPLE",
  "severity": "warning",
  "repairAction": "設定値を確認する"
}] });
  assert.equal(report.summary.result, 'failed');
  assert.equal(report.summary.errors, 1);
  assert.match(renderMarkdownReport(report), /未設定/);
});
