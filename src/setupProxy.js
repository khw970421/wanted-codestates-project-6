const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    createProxyMiddleware('/api', {
      target: 'https://www.juso.go.kr',
      changeOrigin: true,
      pathRewrite: {
        '^/api': '',
      },
    }),
    createProxyMiddleware('/caredoc', {
      target: 'https://caredoc-fe-server.herokuapp.com',
      changeOrigin: true,
      pathRewrite: {
        '^/caredoc': '',
      },
    }),
  );
};
