// tests/demo3.spec.js
const { test, expect } = require("@playwright/test");

test("Add cheapest product to cart in Saucedemo", async ({ page }) => {
  // ✅ Go to saucedemo
  await page.goto("https://www.saucedemo.com/");

  // ✅ Login
  await page.fill("#user-name", "standard_user");
  await page.fill("#password", "secret_sauce");
  await page.click("#login-button");

  for (let i = 0; i < 6; i++) {
    // ✅ Sort products Low → High
    await page.selectOption(".product_sort_container", "lohi");

    // Get all products
    const products = page.locator('//div[contains(@class, "inventory_item")]');
    const count = await products.count();

    let added = false;

    for (let i = 0; i < count; i++) {
      const product = products.nth(i);
      // Use XPath explicitly
      const button = product.locator('xpath=.//button[text()="Add to cart"]');

      if ((await button.count()) > 0) {
        await button.click();
        console.log(`✅ Added product #${i + 1} to cart.`);
        added = true;
        break;
      }
    }

    if (!added) {
      console.log("⚠️ No product with 'Add to cart' button found.");
    }

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
