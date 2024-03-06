import { Builder,By} from 'selenium-webdriver';
import {should} from "chai";
should();

async function validUsername() {

    // GIVEN that I open the browser
    let driver = await new Builder().forBrowser('firefox').build();

    // AND I navigate to the site
    await driver.get('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    await sleep(1000);

    // AND I click in "Forgot your password?"
    await driver.findElement(By.xpath("//p[@class='oxd-text oxd-text--p orangehrm-login-forgot-header']")).click();

    await sleep(1000);

    // AND I type a valid username
    await driver.findElement(By.xpath("//input[@placeholder='Username']")).sendKeys("Admin");

    await sleep(1000);

    // WHEN I click in the "Reset Password" button
    await driver.findElement(By.xpath("//button[normalize-space()='Reset Password']")).click();

    await sleep(1000);

    // THEN it works and the password is reseted (Assertion)
    let successMessage = await driver.findElement(By.xpath("//h6[normalize-space()='Reset Password link sent successfully']")).getText()
    .then(function(value) {
        return value
    });
    
    // Function sleep to set a time between steps
    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    await sleep(1000);

    // Ends this test case
    await driver.quit();
    
}

validUsername();

async function emptyUsername() {

    // GIVEN that I open the browser
    let driver = await new Builder().forBrowser('firefox').build();

    // AND I navigate to the site
    await driver.get('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    await sleep(1000);

    // AND I click in "Forgot your password?"
    await driver.findElement(By.xpath("//p[@class='oxd-text oxd-text--p orangehrm-login-forgot-header']")).click();

    await sleep(1000);

    // WHEN I click in the "Reset Password" button
    await driver.findElement(By.xpath("//button[normalize-space()='Reset Password']")).click();

    await sleep(1000);

    // THEN it doesn't work and appears an error message (Assertion)
    let successMessage = await driver.findElement(By.xpath("//span[@class='oxd-text oxd-text--span oxd-input-field-error-message oxd-input-group__message']")).getText()
    .then(function(value) {
        return value
    });
    
    // Function sleep to set a time between steps
    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    await sleep(1000);

    // Ends this test case
    await driver.quit();
    
}

emptyUsername();

async function cancelButton() {

    // GIVEN that I open the browser
    let driver = await new Builder().forBrowser('firefox').build();

    // AND I navigate to the site
    await driver.get('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    await sleep(1000);

    // AND I click in "Forgot your password?"
    await driver.findElement(By.xpath("//p[@class='oxd-text oxd-text--p orangehrm-login-forgot-header']")).click();

    await sleep(1000);

    // WHEN I click in the "Cancel" button
    await driver.findElement(By.xpath("//button[normalize-space()='Cancel']")).click();

    await sleep(1000);

    // THEN it works and goes back to the login page (Assertion)
    driver.get("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    .then(function() {
        return driver.getCurrentUrl();
    })
    .then(function(currentUrl) {
        // work with the current url of browser
    });
    
    // Function sleep to set a time between steps
    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    await sleep(1000);

    // Ends this test case
    await driver.quit();
    
}

cancelButton();

async function falseUsername() {

    // GIVEN that I open the browser
    let driver = await new Builder().forBrowser('firefox').build();

    // AND I navigate to the site
    await driver.get('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    await sleep(1000);

    // AND I click in "Forgot your password?"
    await driver.findElement(By.xpath("//p[@class='oxd-text oxd-text--p orangehrm-login-forgot-header']")).click();

    await sleep(1000);

    // AND I type a false username
    await driver.findElement(By.xpath("//input[@placeholder='Username']")).sendKeys("tony");

    await sleep(1000);

    // WHEN I click in the "Reset Password" button
    await driver.findElement(By.xpath("//button[normalize-space()='Reset Password']")).click();

    await sleep(1000);

    // THEN it works and the password is reseted, but it shouldn't (BUG!) (Assertion)
    let successMessage = await driver.findElement(By.xpath("//h6[normalize-space()='Reset Password link sent successfully']")).getText()
    .then(function(value) {
        return value
    });
    
    // Function sleep to set a time between steps
    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    await sleep(1000);

    // Ends this test case
    await driver.quit();
    
}

falseUsername();

