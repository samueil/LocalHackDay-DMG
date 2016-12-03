import { LocalHackDayDMGPage } from './app.po';

describe('local-hack-day-dmg App', function() {
  let page: LocalHackDayDMGPage;

  beforeEach(() => {
    page = new LocalHackDayDMGPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
