'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('my app', function() {

  browser.get('index.html');

  it('should automatically redirect to /rants when location hash/fragment is empty', function() {
    expect(browser.getLocationAbsUrl()).toMatch("/rants");
  });


  describe('rants', function() {

    beforeEach(function() {
      browser.get('index.html#/rants');
    });


    it('should render rants when user navigates to /rants', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for view 1/);
    });

  });


  describe('users', function() {

    beforeEach(function() {
      browser.get('index.html#/users');
    });


    it('should render users when user navigates to /users', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for view 2/);
    });

  });
});
