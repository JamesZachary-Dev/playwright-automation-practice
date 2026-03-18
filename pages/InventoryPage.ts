import { Page, Locator } from '@playwright/test';

export class InventoryPage {
  readonly page: Page;

  readonly cartIcon: Locator;
  readonly backpackAddToCartButton: Locator;
  readonly bikeLightAddToCartButton: Locator;
  
  readonly removeBackpackButton: Locator;

  constructor(page: Page) {
    this.page = page;

    this.cartIcon = page.locator('.shopping_cart_link');
    this.backpackAddToCartButton = page.locator('[data-test="add-to-cart-sauce-labs-backpack"]');
    this.bikeLightAddToCartButton = page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]');

    this.removeBackpackButton = page.locator('[data-test="remove-sauce-labs-backpack"]');
}

    async addBackpackToCart() {
        await this.backpackAddToCartButton.click();
    }

    async removeBackpackFromCart() {
        await this.removeBackpackButton.click();
    }

    async addBikeLightToCart() {
        await this.bikeLightAddToCartButton.click();
    }

    async openCart() {
        await this.cartIcon.click();
    }

}