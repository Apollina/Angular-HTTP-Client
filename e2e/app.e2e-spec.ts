import { Weeklt2Page } from './app.po';

describe('weeklt2 App', function() {
  let page: Weeklt2Page;

  beforeEach(() => {
    page = new Weeklt2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
