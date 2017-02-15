import { AutomaticallyAngularPage } from './app.po';

describe('automatically-angular App', function() {
  let page: AutomaticallyAngularPage;

  beforeEach(() => {
    page = new AutomaticallyAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
