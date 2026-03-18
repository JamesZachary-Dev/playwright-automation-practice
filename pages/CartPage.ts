import {Page, Locator} from '@playwright/test';

export class CartPage {
    readonly page: Page;
    readonly cartBadge: Locator;
    
    readonly backpackItem: Locator;
    readonly removeBackpackButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.cartBadge = page.locator('.shopping_cart_badge');

        this.backpackItem = page.getByText('Sauce Labs Backpack');
        this.removeBackpackButton = page.locator('[data-test="remove-sauce-labs-backpack"]');
    }
    
    async getCartCount() {
        const countText = await this.cartBadge.textContent();
    }

    async removeBackpackFromCart() {
        await this.removeBackpackButton.click();
    }
}