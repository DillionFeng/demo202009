
//能够发起ajax请求(get,post)
/*
    @method   POST  GET
    @url      服务器地址
    @params   传递给后台的参数
    fn:   函数
*/
function ajax(method, url, fn, params) {
    // var data;//保存服务器数据
    var xhr = new XMLHttpRequest();
    //get 有参数
    if (method.toUpperCase() == "GET" && params != undefined) {
        url = url + "?" + params;
    }
    xhr.open(method, url, true);
    xhr.onreadystatechange = function () {
        //异步和同步
        if (this.readyState == 4 && this.status == 200) {
            // console.log(this.responseText);//在控制台输出
            // document.getElementById(id).innerHTML=this.responseText;
            // return this.responseText;
            // data=this.responseText;
            fn(this.responseText);
        }
    };
    //post 有参数
    if (method.toUpperCase() == "POST" && params != undefined) {
        xhr.send(params);
    } else {
        xhr.send(null);//其它情况
    }
    // return data;
}


// function show(a, b, c) {
//     console.log(a, b, c)
// }

// show();
// show(10)
// show(10, 20)
// show(10, 20, 30)
// show(10, 20, 30,40)