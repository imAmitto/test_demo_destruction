const BasePageObject = require('page/base.page').default;
const {
  expect
} = require('chai');
const constants = require('constants/index');

describe('Verify Nginx Page', () => {
  let scope = {};
  scope.basePage = new BasePageObject();

  it('should verify nginx home page', () => {
    expect(scope.basePage.isExistElementByText(constants.nginxHeader)).to.be.true;
    expect(scope.basePage.isExistElementByText(constants.nginxThankYou)).to.be.true;
  });
});