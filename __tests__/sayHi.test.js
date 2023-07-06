import { describe, expect, test } from '@jest/globals';
import { sayHi } from '../src/sayHi';

// Run the test
describe('sayHi module', () => {
  test('Returns a greeting as a string', function () {
    // should return a string
    expect(typeof sayHi()).toBe('string');

    // should include the provided name
    expect(sayHi('Merlin').includes('Merlin')).toBe(true);
  });
});
