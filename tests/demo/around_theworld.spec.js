// Filename: adaptable-mega.spec.ts
// Run with: npx playwright test adaptable-mega.spec.ts --headed
// ============================================================
//  MEGA ADAPTABLE PLAYWRIGHT TEST TEMPLATE
//  - Organized by SECTIONS
//  - Each section has multiple ready-to-use snippets
//  - Uncomment the ones you need
// ============================================================

import { test, expect } from "@playwright/test";

test("Mega Adaptable Playwright Tester", async ({ page }) => {
  // ============================================================
  // SECTION 1: NAVIGATION
  // ============================================================

  // Go to site
  await page.goto("https://YOUR-WEBSITE-HERE.com");

  // Reload page
  // await page.reload();

  // Go back / forward
  // await page.goBack();
  // await page.goForward();

  // Open with mobile emulation
  // test.use({ viewport: { width: 375, height: 812 } }); // iPhone X size

  // ============================================================
  // SECTION 2: BASIC ASSERTIONS
  // ============================================================

  // Check page title
  // await expect(page).toHaveTitle(/Expected Title/);

  // Check URL contains
  // await expect(page).toHaveURL(/expected-path/);

  // Check element is visible
  // await expect(page.locator('//h1')).toBeVisible();

  // Check element contains text
  // await expect(page.locator('//p')).toContainText('Welcome');

  // ============================================================
  // SECTION 3: LOCATORS (XPATH ONLY)
  // ============================================================

  // Buttons
  // await page.click('//button[text()="Continue"]');
  // await page.click('//button[contains(text(),"Next")]');
  // await page.click('//input[@type="submit"]');
  // await page.click('//*[@id="continue-button"]');
  // await page.click('//div[@class="btn primary"]');

  // Inputs
  // await page.fill('//input[@name="username"]', 'myUser');
  // await page.fill('//input[@type="password"]', 'myPassword123');

  // Links
  // await page.click('//a[text()="Login"]');
  // await page.click('//a[contains(@href,"signup")]');

  // Dropdowns
  // await page.selectOption('//select[@id="country"]', 'US');

  // Checkboxes / Radios
  // await page.check('//input[@type="checkbox" and @value="agree"]');
  // await page.check('//input[@type="radio" and @value="male"]');

  // Get element text
  // const text = await page.textContent('//h1');
  // console.log("Heading text:", text);

  // Get attribute value
  // const attr = await page.getAttribute('//img[@id="logo"]', 'src');
  // console.log("Logo src:", attr);

  // ============================================================
  // SECTION 4: WAITS
  // ============================================================

  // Wait for selector
  // await page.waitForSelector('//button[text()="Continue"]');

  // Explicit wait
  // await page.waitForTimeout(2000); // wait 2 seconds

  // Wait for element to be hidden
  // await page.waitForSelector('//div[@id="loading"]', { state: 'hidden' });

  // ============================================================
  // SECTION 5: LOOPS & REPEATED ACTIONS
  // ============================================================

  // Fill multiple inputs
  /*
  const fields = [
    { xpath: '//input[@name="firstName"]', value: 'John' },
    { xpath: '//input[@name="lastName"]', value: 'Doe' },
    { xpath: '//input[@name="email"]', value: 'john@example.com' }
  ];
  for (const field of fields) {
    await page.fill(field.xpath, field.value);
  }
  */

  // Click multiple buttons
  /*
  const buttons = [
    '//button[text()="Continue"]',
    '//button[text()="Next"]',
    '//button[text()="Finish"]'
  ];
  for (const btn of buttons) {
    await page.click(btn);
  }
  */

  // Verify multiple texts on page
  /*
  const expectedTexts = ['Step 1', 'Step 2', 'Step 3'];
  for (const txt of expectedTexts) {
    await expect(page.locator(`//*[contains(text(),"${txt}")]`)).toBeVisible();
  }
  */

  // ============================================================
  // SECTION 6: SCREENSHOTS & VISUAL TESTING
  // ============================================================

  // Full-page screenshot
  // await page.screenshot({ path: 'fullpage.png', fullPage: true });

  // Element screenshot
  // await page.locator('//h1').screenshot({ path: 'heading.png' });

  // Compare screenshot (snapshot testing)
  // expect(await page.screenshot()).toMatchSnapshot('home-page.png');

  // ============================================================
  // SECTION 7: USER INTERACTIONS
  // ============================================================

  // Scroll into view
  // await page.locator('//div[@id="footer"]').scrollIntoViewIfNeeded();

  // Hover
  // await page.hover('//div[@class="menu-item"]');

  // Double-click
  // await page.dblclick('//div[@id="dbl-click-me"]');

  // Right-click
  // await page.click('//div[@id="context-menu"]', { button: 'right' });

  // Drag & Drop
  /*
  await page.dragAndDrop(
    '//div[@id="drag-source"]',
    '//div[@id="drop-target"]'
  );
  */

  // Press keys
  // await page.press('//input[@name="search"]', 'Enter');

  // ============================================================
  // SECTION 8: MULTI-PAGE / POPUPS
  // ============================================================

  /*
  const [newPage] = await Promise.all([
    page.waitForEvent('popup'),
    page.click('//a[text()="Open new window"]')
  ]);
  await newPage.waitForLoadState();
  await expect(newPage).toHaveTitle(/New Window/);
  */

  // ============================================================
  // SECTION 9: API CALLS (INSIDE TEST)
  // ============================================================

  /*
  const response = await page.request.get('https://api.example.com/data');
  const data = await response.json();
  console.log("API Data:", data);
  expect(response.status()).toBe(200);
  */

  // ============================================================
  // SECTION 10: IFRAMES
  // ============================================================

  /*
  const frame = page.frameLocator('//iframe[@id="my-frame"]');
  await frame.locator('//button[text()="Inside Frame"]').click();
  */

  // ============================================================
  // SECTION 11: FILE UPLOADS / DOWNLOADS
  // ============================================================

  // Upload file
  // await page.setInputFiles('//input[@type="file"]', 'tests/data/file.pdf');

  // Download file
  /*
  const [ download ] = await Promise.all([
    page.waitForEvent('download'),
    page.click('//a[text()="Download PDF"]')
  ]);
  const path = await download.path();
  console.log("Downloaded file:", path);
  */

  // ============================================================
  // SECTION 12: DEBUGGING & UTILITIES
  // ============================================================

  // Pause test (opens Playwright inspector)
  // await page.pause();

  // Slow down actions
  // test.use({ launchOptions: { slowMo: 500 } });

  // Log console messages
  /*
  page.on('console', msg => {
    console.log("BROWSER LOG:", msg.text());
  });
  */

  // Record video (add to config: use: { video: 'on' })
  // Test run will save a video per test.
});

// Filename: adaptable-mega.spec.ts
// Run with: npx playwright test adaptable-mega.spec.ts --headed
// ============================================================
//  MEGA ADAPTABLE PLAYWRIGHT TEST TEMPLATE
//  - Organized by SECTIONS
//  - Each section has multiple ready-to-use snippets
//  - Uncomment the ones you need
// ============================================================

// ============================================================
// SECTION 1 → 12: (already in your file above)
// ============================================================
// Navigation, Assertions, Locators, Waits, Loops,
// Screenshots, User Interactions, Popups, API,
// Iframes, Files, Debugging, etc.

// ============================================================
// SECTION 13: MULTI-USER TESTING
// ============================================================

/*
  const user1 = await browser.newContext();
  const user2 = await browser.newContext();

  const page1 = await user1.newPage();
  const page2 = await user2.newPage();

  await page1.goto('https://YOUR-WEBSITE.com');
  await page2.goto('https://YOUR-WEBSITE.com');

  // Example: login as two different users
  await page1.fill('//input[@name="username"]', 'UserOne');
  await page1.fill('//input[@name="password"]', 'Password1');
  await page1.click('//button[text()="Login"]');

  await page2.fill('//input[@name="username"]', 'UserTwo');
  await page2.fill('//input[@name="password"]', 'Password2');
  await page2.click('//button[text()="Login"]');
  */

// ============================================================
// SECTION 14: CLIPBOARD ACCESS
// ============================================================

/*
  // Copy text to clipboard
  await page.evaluate(() => navigator.clipboard.writeText("Hello Clipboard!"));

  // Read text from clipboard
  const clip = await page.evaluate(() => navigator.clipboard.readText());
  console.log("Clipboard text:", clip);
  */

// ============================================================
// SECTION 15: COOKIES & SESSION STORAGE
// ============================================================

/*
  // Get cookies
  const cookies = await context.cookies();
  console.log("Cookies:", cookies);

  // Set cookies
  await context.addCookies([
    { name: 'token', value: '12345', domain: 'your-website.com', path: '/' }
  ]);

  // LocalStorage
  await page.evaluate(() => localStorage.setItem("theme", "dark"));
  const theme = await page.evaluate(() => localStorage.getItem("theme"));
  console.log("Theme:", theme);

  // SessionStorage
  await page.evaluate(() => sessionStorage.setItem("sessionId", "abc123"));
  const sid = await page.evaluate(() => sessionStorage.getItem("sessionId"));
  console.log("Session ID:", sid);
  */

// ============================================================
// SECTION 16: PARALLEL TESTING
// ============================================================

/*
  // Run tests in parallel with test.describe.parallel
  test.describe.parallel('Parallel Group', () => {
    test('Test A', async ({ page }) => {
      await page.goto('https://example.com');
      await expect(page).toHaveTitle(/Example/);
    });

    test('Test B', async ({ page }) => {
      await page.goto('https://playwright.dev');
      await expect(page).toHaveTitle(/Playwright/);
    });
  });
  */

// ============================================================
// SECTION 17: PERFORMANCE & MONITORING
// ============================================================

/*
  // Measure load time
  const start = Date.now();
  await page.goto('https://your-website.com');
  const duration = Date.now() - start;
  console.log("Load time (ms):", duration);

  // Access performance metrics
  const perf = await page.evaluate(() => JSON.stringify(window.performance.timing));
  console.log("Performance:", JSON.parse(perf));

  // Collect JS coverage
  await context.coverage.startJSCoverage();
  await page.goto('https://your-website.com');
  const coverage = await context.coverage.stopJSCoverage();
  console.log("JS Coverage length:", coverage.length);
  */

// ============================================================
// SECTION 18: NETWORK CONTROLS
// ============================================================

/*
  // Intercept requests
  await page.route('/ api; /**', route => {
    console.log("Intercepted:", route.request().url());
    route.continue();
  });

  /* Mock API response
   await page.route('/api/data', route =>
    route.fulfill({
       status: 200,
       contentType: 'application/json',
       body: JSON.stringify({ message: "Mocked data!" })
     })
   );

   Block requests
   await page.route('/*.png', route => route.abort());
  */

// ============================================================
// SECTION 19: TEST STRUCTURING (BEST PRACTICES)
// ============================================================

/*
  // Group tests logically
  test.describe('Login Flow', () => {

    test('Login with valid credentials', async ({ page }) => {
      await page.goto('https://your-website.com/login');
      await page.fill('//input[@name="username"]', 'testuser');
      await page.fill('//input[@name="password"]', 'password');
      await page.click('//button[text()="Login"]');
      await expect(page.locator('//h1')).toContainText('Welcome');
    });

    test('Login with invalid credentials', async ({ page }) => {
      await page.goto('https://your-website.com/login');
      await page.fill('//input[@name="username"]', 'wrong');
      await page.fill('//input[@name="password"]', 'wrong');
      await page.click('//button[text()="Login"]');
      await expect(page.locator('//div[@class="error"]')).toBeVisible();
    });

  });

*/
