import { CliAppPage } from './app.po';

describe('cli-app App', () => {
  let page: CliAppPage;

  beforeEach(() => {
    page = new CliAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
