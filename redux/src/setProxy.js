const { createProxyMiddleware } = require('http-proxy-middleware');


module.exports = function(app) {

    app.use( '/api',
       createProxyMiddleware({
         target: 'http://localhost:5000',
         changeOrigin: true,
     })
);
};

//proxy server 사용이유
// 1. 회사에서 직원들이나 집안에서 아이들 인터넷 사용 제어
// 2. 캐쉬를 이용해 더 빠른 인터넷 이용 제공
// 3. 더 나은 보안 제공
// 4. 이용 제한적된 사이트 접근