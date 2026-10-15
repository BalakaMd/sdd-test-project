import test from 'node:test';
import assert from 'node:assert/strict';
import { slugify } from './slugify.js';

test('lowercases and joins words', () => {
  assert.equal(slugify('Hello World'), 'hello-world');
});
