function router(handle,pathName) {

    console.log('当前路由为'+ pathName);
    console.log(handle);
    if( typeof handle[pathName]=== 'function'){
        handle[pathName]();
    }else{
        console.log('没有找到路由指向');
    }




};
exports.route = router;