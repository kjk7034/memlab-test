function url() {
  return "http://localhost:3000/test-base";
}

async function action(page) {
  try {
    await page.waitForSelector('a[href="/test"]');
    await page.click('a[href="/test"]');
    await page.waitForNavigation({ waitUntil: "networkidle0" });
  } catch (error) {
    console.error("Action failed:", error);
  }
}

async function back(page) {
  try {
    await page.goBack();
    await page.waitForNavigation({ waitUntil: "networkidle0" });
  } catch (error) {
    console.error("Back navigation failed:", error);
  }
}

module.exports = { url, action, back };
