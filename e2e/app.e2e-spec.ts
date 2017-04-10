import { Ng2BestPracticePage } from './app.po';

describe('ng2-best-practice App', () => {
  let page: Ng2BestPracticePage;

  beforeEach(() => {
    page = new Ng2BestPracticePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
