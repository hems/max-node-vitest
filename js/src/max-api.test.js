import { describe, test, expect } from 'vitest';
import { multiply, bang } from './max-api.js';

describe('max-api', () => {
  test('multiply function returns correct result', () => {
    const result = multiply(5, 3);
    expect(result).toBe(15);
  });

  test('multiply function with negative numbers', () => {
    const result = multiply(-4, 2);
    expect(result).toBe(-8);
  });

  test('multiply function with zero', () => {
    const result = multiply(0, 10);
    expect(result).toBe(0);
  });

  test('bang function runs without errors', () => {
    expect(() => bang()).not.toThrow();
  });
}); 