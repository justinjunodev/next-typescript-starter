import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('/');
});

test.describe('Home', () => {
  test('Document title includes page name', async ({ page }) => {
    await expect(page).toHaveTitle(/Home/);
  });

  test('Link to github repo is valid', async ({ page }) => {
    const link = page.locator('a', { hasText: 'View on GitHub' });
    await expect(link).toBeVisible();
    await expect(link).toHaveAttribute(
      'href',
      'https://github.com/justinjunodev/next-typescript-starter'
    );
  });
});
