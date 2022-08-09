import { expect, test } from 'vitest';
import mod from './';

test('exports', () => {
  expect(mod).toMatchInlineSnapshot('"Foo Bar Banana Baz"');
});
