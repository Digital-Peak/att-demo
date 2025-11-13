import { test, expect } from '@playwright/test';

test('It opens the front page and checks the title', async ({ page }) => {
	await page.goto('https://joomla.digital-peak.com');

	await expect(page).toHaveTitle(/Joomla Extensions/);
});

test('It clicks the Subscribe link and checks navigation', async ({ page }) => {
	await page.goto('https://joomla.digital-peak.com');
	await page.click('text=Subscribe');

	await expect(page).toHaveTitle(/Subscribe/);
	await expect(page).toHaveURL('https://joomla.digital-peak.com/subscribe');
});
