import { expect, test } from '@playwright/test';

test('renders the tester application layout', async ({ page }) => {
  await page.goto('/');

  await expect(page.locator('go-layout')).toBeVisible();
  await expect(page.locator('go-side-nav')).toBeVisible();
  await expect(page.locator('go-footer')).toHaveText('Footer Works');
});
