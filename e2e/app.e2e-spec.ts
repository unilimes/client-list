import { ClientListPage } from './app.po';

describe('client-list App', function() {
  let page: ClientListPage;

  beforeEach(() => {
    page = new ClientListPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
