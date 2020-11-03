'use strict';

const mock = require('egg-mock');
const assert = require('assert');

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

  it('should GET pop client', async () => {
    const params = {
      AppId: app.config.aliyunApiGateway.appId,
      PageSize: 50,
      RegionId: 'cn-shenzhen',
    };

    const requestOption = { method: 'POST', timeout: 10000 };
    const aliyunPopCoreClient = await app.aliyunPopCore.request(
      'DescribeAuthorizedApis',
      params,
      requestOption
    );


    assert(aliyunPopCoreClient);

  });
});
