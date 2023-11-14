const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api',  // Your API endpoint
    createProxyMiddleware({
      target: 'http://idgs1003.infinityfreeapp.com/',  // Your API server
      changeOrigin: true,
    })
  );
};
