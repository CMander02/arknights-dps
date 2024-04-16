const express = require('express');
const app = express();
const port = 3000;

// 设置静态文件目录
app.use(express.static('public'));

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
