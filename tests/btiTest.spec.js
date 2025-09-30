import { test, chromium } from "@playwright/test";

test("Login with my custom Chrome profile", async () => {
  const userDataDir =
    "C:\\Users\\kdestabalaya\\AppData\\Local\\Google\\Chrome\\User Data\\PlaywrightProfile";

  const context = await chromium.launchPersistentContext(userDataDir, {
    channel: "chrome", // real Chrome
    headless: false,
    args: ["--start-maximized"], // optional
  });

  const page = context.pages()[0] || (await context.newPage());

  // login steps /////////////////////////////////
  await page.goto("https://admin-stag.btipaymentsph.com/");
  await page.fill("#Email", "kdestabalaya@sscgi.com");
  await page.fill("#password-input", "Kobe@123");
  await page.getByRole("button", { name: "Sign In" }).click();
  await page.fill('input[name="Otp"]', "852369");

  // Click Verify button
  await page.click("#verify");

  // Optional: wait for navigation or confirmation
  await page.waitForTimeout(3000);

  console.log("OTP submitted, current URL:", page.url());

  // login steps /////////////////////////////////

  // Make admin user /////////////////////////////////
  // Step 1: Click the User Management toggle
  await page.click('a.nav-link.menu-link:has-text("Customer Management")');

  // Step 2: Wait for the dropdown to expand
  await page.waitForSelector('a.nav-link[data-key="t-transaction-history"]', {
    state: "visible",
  });

  // Step 3: Click Profile & Roles
  await page.click('a.nav-link[data-key="t-transaction-history"]');

  // Optional: wait for navigation to complete
  await page.waitForLoadState("networkidle");
  console.log("Now on:", page.url());

  await page.waitForTimeout(5000);

  //// SIGN OUT // /////////////////////////////////

  // Click the profile button (top-right avatar dropdown)
  await page.click("#page-header-user-dropdown");

  // Wait for dropdown to be visible
  await page.waitForSelector('a.dropdown-item[href="/account/logout"]', {
    state: "visible",
  });

  // Click Logout
  await page.click('a.dropdown-item[href="/account/logout"]');

  console.log("✅ Successfully clicked Logout");

  await page.waitForTimeout(5000);

  console.log("Checker:", page.url());
  // ⬆️ no context.close() here (as you requested)
});
