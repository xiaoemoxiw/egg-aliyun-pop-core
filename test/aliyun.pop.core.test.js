'use strict';

const mock = require('egg-mock');

describe('test/egg-aliyun-pop-core.test.js', () => {
  let app;
  before(() => {
    app = mock.app({
      baseDir: 'apps/egg-aliyun-pop-core-test',
    });
    return app.ready();
  });

  after(() => app.close());
  afterEach(mock.restore);

  it('should GET /', () => {
    return app.httpRequest()
      .get('/')
      .expect('hi, eggAliyunPopCore')
      .expect(200);
  });
});
