import { ChurchPage } from './app.po';

describe('church App', function() {
  let page: ChurchPage;

  beforeEach(() => {
    page = new ChurchPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
