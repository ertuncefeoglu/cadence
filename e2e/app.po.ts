import { browser, by, element } from 'protractor';

export class CadencePage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('cadence-root h1')).getText();
  }
}
