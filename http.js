var http = require("http");
// 引用 node的http模块
// 通过http 模块创建服务
function start() {
    function server(request, response) {
        // 服务成功创建
        response.writeHead(200, {"Content-Type": "text/plain"});
        // 发送状态码，约定请求头格式
        response.write("Hello World??");
        // 发送文本
        response.end();
        // 完成相应
    }




    http.createServer(server).listen(8899);
}


   // 监听8899 端口
exports.start = start;