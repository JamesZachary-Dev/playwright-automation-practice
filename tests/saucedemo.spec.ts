import { test, expect } from '@playwright/test';
import { login } from '../helpers/login';

test('SauceDemo successful login', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await login(page);

  await expect(page).toHaveURL(/inventory/);
  await expect(page.locator('.title')).toHaveText('Products');
});

test('SauceDemo login fails with invalid password', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  
  await page.getByPlaceholder('Username').fill('standard_user');
  await page.getByPlaceholder('Password').fill('wrong_password');

  await page.getByRole('button', { name: 'Login' }).click();

  await expect(page.locator('[data-test="error"]')).toHaveText(
    'Epic sadface: Username and password do not match any user in this service'
  );
});

test('User can add Backpack to cart', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await login(page);

  await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();

  await expect(page.locator('.shopping_cart_badge')).toHaveText('1');
});