import { browser, element, by } from 'protractor';

export class NgSmeupPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('su-root h1')).getText();
  }
}
