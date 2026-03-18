import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';
import { CartPage } from '../pages/CartPage';

test.describe('Login Tests', () => {

  test('SauceDemo successful login', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.goto();
    await loginPage.login('standard_user', 'secret_sauce');

    await expect(page).toHaveURL(/inventory/);
    await expect(page.locator('.title')).toHaveText('Products');
  });

  test('SauceDemo login fails with invalid password', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.goto();
    await loginPage.loginWithInvalidPassword('standard_user', 'wrong_password');
  
    await expect(loginPage.errorMessage).toHaveText(
    'Epic sadface: Username and password do not match any user in this service'
    );
  });
});

test.describe('Inventory Tests', () => {

  test.beforeEach(async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.goto();
    await loginPage.login('standard_user', 'secret_sauce');
  });

  test('User can add item to cart', async ({ page }) => {
    const inventoryPage = new InventoryPage(page);
    const cartPage = new CartPage(page);

    await inventoryPage.addBackpackToCart();

    await expect(cartPage.cartBadge).toHaveText('1');
  });

  test('User can add multiple items to cart', async ({ page }) => {
    const inventoryPage = new InventoryPage(page);
    const cartPage = new CartPage(page);

    await inventoryPage.addBackpackToCart();
    await inventoryPage.addBikeLightToCart();

    await expect(cartPage.cartBadge).toHaveText('2');
  });
});

test.describe('Cart Tests', () => {

  test.beforeEach(async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.goto();
    await loginPage.login('standard_user', 'secret_sauce');
  });

  test('User can remove item from cart', async ({ page }) => {
    const inventoryPage = new InventoryPage(page);
    const cartPage = new CartPage(page);

    await inventoryPage.addBackpackToCart();
    await inventoryPage.removeBackpackFromCart();
    
    await expect(cartPage.cartBadge).not.toBeVisible();
   });

  test('User can view items in cart', async ({ page }) => {
    const inventoryPage = new InventoryPage(page);
    const cartPage = new CartPage(page);

    await inventoryPage.addBackpackToCart();
    await inventoryPage.openCart();

    await expect(cartPage.backpackItem).toBeVisible();
    });

  test('User can remove item from cart in cart page', async ({ page }) => {
    const inventoryPage = new InventoryPage(page);
    const cartPage = new CartPage(page);

    await inventoryPage.addBackpackToCart();
    await inventoryPage.openCart();
    await cartPage.removeBackpackFromCart();
    
    await expect(cartPage.cartBadge).not.toBeVisible();
    });
  });