const basePageConfig = require('configurations/basePageConfiguration');
module.exports['default'] = class BasePageObject {
    constructor(config = basePageConfig) {
        this.config = config;
    }

    isPresent(elementSelector, options) {
        options = options ? options : {
            time: 5000,
            rev: false
        };
        options.time = options.time ? options.time : 5000;
        options.rev = options.rev ? options.rev : false;
        try {
            $(elementSelector).waitForExist({ timeout: options.time, reverse: options.rev });
            return true;
        } catch (event) {
            if (event.type == 'WaitUntilTimeoutError') return false;
            else throw event;
        }
    }
    clickOn(element) {
        $(element).waitForEnabled(10000);
        $(element).click();
    }

    isNotDisplayed(elementSelector) {
        this.element = $(elementSelector);
        return this.element.waitForDisplayed({ timeout: 10000, reverse: true });
    }

    isDisplayed(elementSelector) {
        this.element = $(elementSelector);
        return this.element.waitForDisplayed({ timeout: 10000 });
    }
    getButtonText(buttonName) {
        this.button = `//a[text()="${buttonName}"]`;
        $(this.button).waitForDisplayed({ timeout: 10000 });
        return $(this.button).getText();
    }

    clickOnButton(buttonName) {
        this.button = `//a[text()="${buttonName}"]`;
        $(this.button).waitForDisplayed({ timeout: 10000 });
        $(this.button).click();
    }

    clickOnSubmit() {
        this.clickSubmitButton = this.config.submitButton;
        $(this.clickSubmitButton).waitForEnabled({ timeout: 10000 });
        $(element).click(this.clickSubmitButton);
    }

    elementExists(elementSelector) {
        return $(elementSelector).waitForExist({ timeout: 10000 });
    }

    getElementText(elementSelector) {
        $(elementSelector).waitForDisplayed({ timeout: 10000 });
        return $(elementSelector).getText();
    }

    sendKeys(selector, value) {
        $(selector).waitForEnabled(10000);
        return $(selector).setValue(value);
    }

    checkboxSelected(elementSelector) {
        $(elementSelector).waitForEnabled(10000);
        return $(elementSelector).isSelected();
    }


    isExistElementByText(value) {
        this.element = $(`//*[contains(text(),"` + value + `")]`);
        return this.element.waitForExist(10000);
    }

    fetchSelectorFromText(text) {
        return (this.element = "//*[contains(text(),'" + text + "')]");
    }

    getText(selector) {
        this.isVisible(selector);
        this.text = $(selector).getText();
        return this.text;
    }

    getDiscriptionText(selector) {
        return $(selector).getText();
    }

    getValueFromInputField(Selector) {
        return $(Selector).getAttribute('value');
    }

    getPlaceholderNameFromInputField(Selector) {
        return $(Selector).getAttribute('placeholder');
    }

    elementDoesNotExistByText(value) {
        this.element = $(`//*[contains(text(),"` + value + `")]`);
        return this.element.waitForExist(10000, true);
    }

    getToastMessage() {
        this.isVisible(this.config.toastMessage);
        let message = this.getText(this.config.toastMessage);
        if (!this.isPresent(this.config.toastMessage, {
                rev: true,
                time: 1000
            })) {
            this.clickOn(this.config.toastCloseButton);
            this.isPresent(this.config.toastMessage, {
                rev: true,
                time: 1000
            });
        }
        browser.pause(500);
        return message;
    }

    waitForDisabledToGo(type) {
        this.element = type + `[disabled]`;
        this.isPresent(this.element);
        if (!this.isPresent(this.element, {
                rev: true,
                time: 10000
            }))
            throw Error('Request Processing Timeout');
    }

};