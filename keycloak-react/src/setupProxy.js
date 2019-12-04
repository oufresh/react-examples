const proxy = require("http-proxy-middleware");

/**
 * no need to rewrite cookie with the correct settings of keycloak
 */
module.exports = app => {
  app.use(
    "/auth",
    proxy({
      target: "http://localhost:8080",
      changeOrigin: true,
      onProxyReq: (proxyReq, req, res) => {
        console.log(proxyReq);
        console.log(req);
        console.log(res);
      }/*,
      cookieDomainRewrite: {
        "localhost:3000": "localhost:3000",
        "127.0.0.1:3000": "localhost:3000",
        "127.0.0.1:8080": "localhost:3000",
        "*": ""
      }*/
    })
  );
};