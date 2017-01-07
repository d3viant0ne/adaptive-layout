import { FlexLayoutDemoPage } from './app.po';

describe('flex-layout-demo App', function() {
  let page: FlexLayoutDemoPage;

  beforeEach(() => {
    page = new FlexLayoutDemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
