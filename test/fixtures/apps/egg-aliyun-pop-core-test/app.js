'use strict';


class AppBootHook {
  constructor(app) {
    this.app = app;

  }

  async willReady() {
    const { app } = this;
    const params = {
      AppId: app.config.aliyunApiGateway.appId,
      PageSize: 50,
      RegionId: 'cn-shenzhen',
    };

    const requestOption = { method: 'POST', timeout: 10000 };
    const describeAuthorizedApis = await app.aliyunPopCore.request(
      'DescribeAuthorizedApis',
      params,
      requestOption
    );
    console.log('describeAuthorizedApis===>', describeAuthorizedApis);


  }


}

module.exports = AppBootHook;
