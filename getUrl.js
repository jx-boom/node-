var http = require("http");
var url = require("url");

// 引用 node的http模块

// 通过http 模块创建服务
function start(route,handle) {
    function server(request, response) {
        var pathName = url.parse(request.url).pathName;
        console.log('request.url');
        console.log(request.url);
        console.log('服务来自'+ request.url);
        route(handle,request.url);

        // 服务成功创建
        response.writeHead(200, {"Content-Type": "text/plain"});
        // 发送状态码，约定请求头格式
        response.write("你好 node");
        // 发送文本
        response.end();
        // 完成相应
    }




    http.createServer(server).listen(8899);
    console.log('服务启动')
}


// 监听8899 端口
exports.start = start;