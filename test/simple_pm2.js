const http = require("http");
const PORT = 12012;
const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/plain; charset=utf-8");
  const obj = { 이름: "큰돌" };
  res.end(JSON.stringify(obj));
});

setTimeout(() => {
  JSON.parse("{Z");
}, 1000);

server.listen(PORT, () => {
  console.log(`Server running at http://127.0.0.1:${PORT}/`);
});

// pm2로 서버 관리하기
/*
npm install pm2 -g
pm2 start simple_pm2.js
*/

// 안될경우 스크립트 보안오류 해결
/* 
+ CategoryInfo : 보안 오류: (:) [], PSSecurityException
*/
