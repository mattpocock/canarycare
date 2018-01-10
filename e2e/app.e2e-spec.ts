import { LasbarbersPage } from './app.po';

describe('lasbarbers App', function() {
  let page: LasbarbersPage;

  beforeEach(() => {
    page = new LasbarbersPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
