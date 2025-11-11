import { test, expect } from '@playwright/test';

test('title', async ({ page }) => {
	await page.goto('https://joomla.digital-peak.com');
	await expect(page).toHaveTitle(/Joomla Extensions/);
});

test('subscribe link', async ({ page }) => {
	await page.goto('https://joomla.digital-peak.com');
	await page.click('text=Subscribe');
	await expect(page).toHaveTitle(/Subscribe/);
	await expect(page).toHaveURL('https://joomla.digital-peak.com/subscribe');
});
