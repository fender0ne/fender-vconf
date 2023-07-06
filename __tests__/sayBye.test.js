import { describe, expect, test } from '@jest/globals';
import { sayHi } from '../src/sayHi';

// Run the test
describe('sayBye module', () => {
  test('Returns a bye as a string', function () {
    // should return a string
    expect(typeof sayHi()).toBe('string');

    // should include the provided name
    expect(sayHi('Merlin1').includes('Merlin')).toBe(true);
  });
});
