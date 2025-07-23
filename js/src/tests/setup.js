import { vi } from 'vitest';

// Mock the max-api module using our custom mock location
vi.mock('max-api', async () => {
  const mock = await import('./__mocks__/max-api.js');
  return mock;
}); 