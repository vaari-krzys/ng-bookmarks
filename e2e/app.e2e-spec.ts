import { BookmarksPage } from './app.po';

describe('bookmarks App', () => {
  let page: BookmarksPage;

  beforeEach(() => {
    page = new BookmarksPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
