// src/setupProxy.js
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',  // Specify the path you want to proxy
    createProxyMiddleware({
      target: 'https://api.pujakaitem.com',
      changeOrigin: true,
    })
  );
};
