import { AdaptiveLayoutDemoPage } from './app.po';

describe('adaptive-layout-demo App', function() {
  let page: AdaptiveLayoutDemoPage;

  beforeEach(() => {
    page = new AdaptiveLayoutDemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
