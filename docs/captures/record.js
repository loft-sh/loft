const webdriver = require('selenium-webdriver');
async function runTestWithCaps (capabilities) {
  let driver = new webdriver.Builder()
    .usingServer('http://lukasgentele1:AascXs8Js2uWyKg7KSh5@hub-cloud.browserstack.com/wd/hub')
    .withCapabilities({
      ...capabilities,
      ...capabilities['browser'] && { browserName: capabilities['browser']}  // Because NodeJS language binding requires browserName to be defined
    })
    .build();
  await driver.get("http://www.google.com");
  const inputField = await driver.findElement(webdriver.By.name("q"));
  await inputField.sendKeys("BrowserStack", webdriver.Key.ENTER); // this submits on desktop browsers
  try {
    await driver.wait(webdriver.until.titleMatches(/BrowserStack/i), 5000);
  } catch (e) {
    await inputField.submit(); // this helps in mobile browsers
  }
  try {
    await driver.wait(webdriver.until.titleMatches(/BrowserStack/i), 5000);
    console.log(await driver.getTitle());
    await driver.executeScript(
      'browserstack_executor: {"action": "setSessionStatus", "arguments": {"status":"passed","reason": "Title contains BrowserStack!"}}'
    );
  } catch (e) {
    await driver.executeScript(
      'browserstack_executor: {"action": "setSessionStatus", "arguments": {"status":"failed","reason": "Page could not load in time"}}'
    );
  }
  await driver.quit();
}
const capabilities1 = {
  'browser': 'chrome',
  'browser_version': 'latest',
  'os': 'Windows',
  'os_version': '10',
  'build': 'browserstack-build-1',
  'name': 'Parallel test 1'
}
const capabilities2 = {
	'browser': 'firefox',
  'browser_version': 'latest',
  'os': 'Windows',
  'os_version': '10',
  'build': 'browserstack-build-1',
  'name': 'Parallel test 2'
}
const capabilities3 = {
	'browser': 'safari',
  'browser_version': 'latest',
  'os': 'OS X',
  'os_version': 'Big Sur',
  'build': 'browserstack-build-1',
  'name': 'Parallel test 3'
}
runTestWithCaps(capabilities1);
runTestWithCaps(capabilities2);
runTestWithCaps(capabilities3);