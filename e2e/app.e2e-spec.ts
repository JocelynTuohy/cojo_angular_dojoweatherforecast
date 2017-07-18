import { DojoweatherforecastPage } from './app.po';

describe('dojoweatherforecast App', () => {
  let page: DojoweatherforecastPage;

  beforeEach(() => {
    page = new DojoweatherforecastPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
