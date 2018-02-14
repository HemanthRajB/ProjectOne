var assert = require('assert');

describe('webdriver.io page', function() {
    it('should have the right title - the fancy generator way', function () {
        browser.url('http://www.google.com');
        var title = browser.getTitle();
        assert.equal(title, 'Google');
		// browser.elementIdClick('#lst-ib').keys('Hemanth');
		browser.elementIdClick("input[aria-label='Google Search']");
		browser.pause(5000);
    });
});