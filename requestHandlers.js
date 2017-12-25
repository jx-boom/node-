function start() {

    console.log('开始被触发')


};

function upload() {
    console.log('更新被触发');
}

exports.start =start;
exports.updoad= upload;