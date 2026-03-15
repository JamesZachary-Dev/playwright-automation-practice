import { Page, Locator } from '@playwright/test';

export class InventoryPage {
  readonly page: Page;

  readonly backpackAddToCartButton: Locator;
  readonly cartIcon: Locator;

  constructor(page: Page) {
    this.page = page;

    this.backpackAddToCartButton = page.locator('[data-test="add-to-cart-sauce-labs-backpack"]');
    this.cartIcon = page.locator('.shopping_cart_link');
    }

    async addBackpackToCart() {
        await this.backpackAddToCartButton.click();
    }

    async opencart() {
        await this.cartIcon.click();
    }

}