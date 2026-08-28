import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';

const evals = JSON.parse(await readFile(new URL('../evals/evals.json', import.meta.url), 'utf8'));

test('behavior suite covers prose, lists, code, context, and safety cases', () => {
  assert.deepEqual(evals.map(({ id }) => id), [
    'prose', 'list', 'code', 'bare-trigger', 'load-bearing-caveat',
  ]);
  for (const scenario of evals) {
    assert.ok(scenario.prompt.length > 10);
    assert.ok(scenario.expected.length >= 3);
    assert.ok(scenario.forbidden.length >= 2);
  }
});
