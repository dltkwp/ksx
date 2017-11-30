var mtAjax = (function() {
    axios.defaults.baseURL = '';
    
    axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
    var opt = {
        getCfg: function(url, method, params) {
            if (!url) { console.error('请求地址不可为空.'); return false; }
            if ((url.indexOf('?') >= 0) && params) { console.error('地址中带有参数且params也包含参数,这种情况不允许.'); return false; } //问号和params 同时存在进行报错处理

            var obj = {
                url: url,
                method: method || 'POST', //变更为默认为POST请求
                headers: {
                    'X-Requested-With': 'XMLHttpRequest'
                },
                validateStatus: function(status) {
                    switch(status){
                        case 401:{
                            mtHelper.go_login();
                        }break;
                    }
                    return status < 500;
                }
            };
            if (params) {
                obj.params = params;
            }
            return obj;
        },
        errHandle: function(err) {
            if (err.response) {
                console.log(err.response.data);
                console.log(err.response.status);
                console.log(err.response.headers);
            } else if (err.request) {
                console.log(err.request);
            } else {
                alert(err.message);
            }
        },
        loading: {
            show: function() { mtHelper.doc.addClass(document.getElementById('ibox-content'),'sk-loading');},
            hide: function() { mtHelper.doc.removeClass(document.getElementById('ibox-content'),'sk-loading'); }
        }
    };

    var _axios = {
        get: function(url, params, success, error, isHideLoading) {
            !isHideLoading && opt.loading.show();
            axios(opt.getCfg(url, 'GET', params))
                .then(function(res) {
                    if (res.data.errorCode) {
                        alert(res.data.errorMessage);
                    } else {
                        success && success(res);
                    }
                    opt.loading.hide();
                })
                .catch(function(err) {
                    opt.loading.hide();
                    opt.errHandle(err);
                    error && error(err);
                });
        },
        post: function(url, params, success, error) {
            opt.loading.show();
            axios(opt.getCfg(url, 'POST', params))
                .then(function(res) {
                    if (res.data.errorCode) {
                        alert(res.data.errorMessage);
                    } else {
                        success && success(res);
                    }
                    opt.loading.hide();
                })
                .catch(function(err) {
                    opt.errHandle(err);
                    error && error(err);
                    opt.loading.hide();
                });
        },
        put: function(url, params, success, error) {
            opt.loading.show();
            axios(opt.getCfg(url, 'PUT', params))
                .then(function(res) {
                    if (res.data.errorCode) {
                        alert(res.data.errorMessage);
                    } else {
                        success && success(res);
                    }
                    opt.loading.hide();
                })
                .catch(function(err) {
                    opt.errHandle(err);
                    error && error(err);
                    opt.loading.hide();
                });
        },
        all: function(reqMethodsArr, callback, error) {
            opt.loading.show();
            axios.all(reqMethodsArr)
                .then(axios.spread(callback)).catch(function(err) {
                    opt.errHandle(err);
                    opt.loading.hide();
                    error && error(err)
                });
        }
    };

    return {
        get: _axios.get,
        post: _axios.post,
        put: _axios.put,
        all: _axios.all,
    }
})();