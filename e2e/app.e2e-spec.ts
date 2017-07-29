import { CadencePage } from './app.po';

describe('cadence App', () => {
  let page: CadencePage;

  beforeEach(() => {
    page = new CadencePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to cadence!');
  });
});
