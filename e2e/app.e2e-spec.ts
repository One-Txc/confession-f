import { ConfessionPage } from './app.po';

describe('confession App', () => {
  let page: ConfessionPage;

  beforeEach(() => {
    page = new ConfessionPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
