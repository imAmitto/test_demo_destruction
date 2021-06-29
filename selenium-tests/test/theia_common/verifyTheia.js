const theiaConfig = require('../../configurations/theia-home.json');
const BasePageObject = require('../../page/base.page').default;
const { expect } = require('chai');

describe('Verify Nginx Page', () => {
  let scope = {};
  scope.basePage = new BasePageObject();

  it('should verify theia loading', () => {
    // TODO: Update it when updating nginx proxy
    browser.url('/user/heisenberg');
    expect(scope.basePage.isDisplayed(theiaConfig.loadingDiv)).to.be.true;
  });

  it('should verify theia loaded', () => {
    expect(scope.basePage.isDisplayed(theiaConfig.theiaShell)).to.be.true;
  });
});
