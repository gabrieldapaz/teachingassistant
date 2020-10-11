import { browser, by, element } from 'protractor';

export class AppPage {
<<<<<<< HEAD
  navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl) as Promise<unknown>;
  }

  getTitleText(): Promise<string> {
=======
  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  getTitleText() {
>>>>>>> cbde7ff2dabb465b4da631941f1b700fc546608c
    return element(by.css('app-root .content span')).getText() as Promise<string>;
  }
}
