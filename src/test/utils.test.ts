import { describe, it, expect } from 'vitest';
import { debounce } from '$lib/utils/animations';
import { safeValidateData, ProjectSchema } from '$lib/utils/validation';

describe('Animation Utilities', () => {
  it('should debounce function calls', () => {
    let count = 0;
    const debouncedFn = debounce(() => {
      count++;
    }, 100);

    debouncedFn();
    debouncedFn();
    debouncedFn();

    // Should not have executed yet
    expect(count).toBe(0);

    return new Promise((resolve) => {
      setTimeout(() => {
        expect(count).toBe(1);
        resolve(null);
      }, 150);
    });
  });
});

describe('Validation Utilities', () => {
  it('should validate valid project data', () => {
    const validProject = {
      slug: 'test-project',
      title: 'Test Project',
      desc: 'A test project',
      problem: 'A problem',
      role: 'My role',
      approach: 'An approach',
      result: 'A result',
      date: '2024',
      thumb: 'https://example.com/image.jpg',
      projecttype: 'app',
      github: 'https://github.com/test/repo',
      src: 'https://example.com'
    };

    const result = safeValidateData(ProjectSchema, validProject);
    expect(result.success).toBe(true);
    if (result.success) {
      expect(result.data.title).toBe('Test Project');
    }
  });

  it('should reject invalid project data', () => {
    const invalidProject = {
      slug: '',
      title: 'Test Project',
      desc: 'A test project',
      problem: 'A problem',
      role: 'My role',
      approach: 'An approach',
      result: 'A result',
      date: '2024',
      thumb: 'not-a-url',
      projecttype: 'app',
      github: 'not-a-url',
      src: 'not-a-url'
    };

    const result = safeValidateData(ProjectSchema, invalidProject);
    expect(result.success).toBe(false);
    if (!result.success) {
      expect(result.error.errors.length).toBeGreaterThan(0);
    }
  });
});
