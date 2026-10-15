import test from 'node:test';
import assert from 'node:assert/strict';
import { slugify } from './slugify.js';

test('lowercases and joins words', () => {
  assert.equal(slugify('Hello World'), 'hello-world');
});

test('trims leading and trailing separators', () => {
  assert.equal(slugify('  Hello  '), 'hello');
  assert.equal(slugify('!Hello World!'), 'hello-world');
});

test('collapses multiple separators in a row', () => {
  assert.equal(slugify('a   b'), 'a-b');
  assert.equal(slugify('a, ,b'), 'a-b');
});

test('collapses hyphens present in the input', () => {
  assert.equal(slugify('a --- b'), 'a-b');
  assert.equal(slugify('--a--b--'), 'a-b');
});

test('returns empty string for only separators', () => {
  assert.equal(slugify(' - - '), '');
  assert.equal(slugify(''), '');
});
