import {Page, Locator} from '@playwright/test';

export class CartPage {
    readonly page: Page;
    readonly cartbadge: Locator;

    constructor(page: Page) {
        this.page = page;
        this.cartbadge = page.locator('.shopping_cart_badge');
    }
    
    async getCartCount() {
        const countText = await this.cartbadge.textContent();
    }
}