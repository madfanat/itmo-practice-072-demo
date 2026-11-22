import { test } from 'node:test';
import assert from 'node:assert/strict';
import { sum } from '../src/sum.mjs';

test('empty numbers sum to zero', () => assert.equal(sum([]), 0));
test('single number is kept', () => assert.equal(sum([4]), 4));
test('positive numbers add up', () => assert.equal(sum([1, 2, 3]), 6));
test('signed numbers add up', () => assert.equal(sum([-3, 1, 2]), 0));
