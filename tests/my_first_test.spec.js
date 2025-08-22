// tests/demo3.spec.js
const { test, expect } = require("@playwright/test");

test("Add cheapest product to cart in Saucedemo", async ({ page }) => {
  // ✅ Go to saucedemo
  await page.goto("https://www.saucedemo.com/");

  // ✅ Login
  await page.fill("#user-name", "standard_user");
  await page.fill("#password", "secret_sauce");
  await page.click("#login-button");

  for (let i = 0; i < 20; i++) {
    // ✅ Sort products Low → High
    await page.selectOption(".product_sort_container", "lohi");

    // ✅ Wait for the grid to refresh (first item must exist)
    const firstProduct = page.locator(".inventory_item").first();
    await expect(firstProduct).toBeVisible();

    // ✅ Add the first product (cheapest after sort) to cart
    await firstProduct.locator("button").click();

    console.log("✅ Added the cheapest product to cart.");

    // ✅ Go to cart
    await page.click(".shopping_cart_link");

    // Verify cart URL
    await expect(page).toHaveURL(/cart/);

    await page.click('[data-test="continue-shopping"]');
    console.log("✅ Clicked Continue Shopping, back to products page.");
  }

  await page.waitForTimeout(5000);

  console.log("✅ Cart page opened:", page.url());
});
