import { Angular2RoutingPage } from './app.po';

describe('angular2-routing App', () => {
  let page: Angular2RoutingPage;

  beforeEach(() => {
    page = new Angular2RoutingPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
