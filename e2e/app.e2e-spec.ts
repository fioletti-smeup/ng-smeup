import { NgSmeupPage } from './app.po';

describe('ng-smeup App', function() {
  let page: NgSmeupPage;

  beforeEach(() => {
    page = new NgSmeupPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('su works!');
  });
});
