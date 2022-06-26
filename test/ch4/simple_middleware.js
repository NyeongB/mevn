const express = require("express");
const app = express();
const PORT = 3000;

// 1번 로직
app.use((req, res, next) => {
  console.log("1 Time:", Date.now());
  next();
});

// 2번 로직
app.use((req, res, next) => {
  console.log("2 Time:", Date.now());
});

app.listen(PORT, () => {
  console.log(`서버가 생서되었습니다.${PORT}`);
});
