import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});

test('test', async ({ page }) => {
  await page.locator('body').click();
  await page.locator('body').click();
  await page.goto('about:blank');
  await expect(page.locator('body')).toBeVisible();
});


test('test compteur start 0', async ({ page }) => {
  await page.goto('http://127.0.0.1:5173');
  const compteur = page.locator('#compteur');
  await expect(compteur).toHaveText('count is 0'); 
});

test('test compteur égal à 2 avec 2 clics', async ({ page }) => {
  await page.goto('http://127.0.0.1:5173/');
  const increment = page.locator('#increment');
  const compteur = page.locator('#compteur');
  await increment.click();
  await increment.click();
  await expect(compteur).toHaveText('count is 2');
});