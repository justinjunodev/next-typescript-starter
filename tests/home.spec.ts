import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('/');
});

test.describe('Home', () => {
  test('Document title includes page name', async ({ page }) => {
    await expect(page).toHaveTitle(/Home/);
  });
});
