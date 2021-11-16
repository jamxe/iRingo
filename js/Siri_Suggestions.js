/*
README:https://github.com/VirgilClyne/iRingo
*/

var url = $request.url;

replaceQueryParamter(url, 'cc', 'TW');
replaceQueryParamter(url, 'card_locale', 'zh-Hans_CN');
if (getQueryVariable(url, 'include') == 'tv') {
    let A = getQueryVariable(url, 'q')
    newA = A.replace(/%2F[a-z]{2}-[A-Z]{2}/, '%2Fzh-TW')
    replaceQueryParamter(url, 'q', newA)
};
if (getQueryVariable(url, 'include') == 'movies') {
    let A = getQueryVariable(url, 'q')
    newA = A.replace(/%2F[a-z]{2}-[A-Z]{2}/, '%2Fzh-TW')
    replaceQueryParamter(url, 'q', newA)
};

$done(url);


// 获取指定传入参数的值,url为链接,variable为参数
// https://community.nssurge.com/d/106-script/14
function getQueryVariable(url, variable) {
    if (url.indexOf("?") != -1) {
        var query = url.split("?")[1];
        var vars = query.split("&");
        for (var i = 0; i < vars.length; i++) {
            var pair = vars[i].split("=");
            if (pair[0] == variable) {
                return pair[1];
            }
        }
    } else return false;
};

// 替换指定传入参数的值,url为链接,variable为参数,parameter为新值

function replaceQueryParamter(url, variable, parameter) {
    if (url.indexOf("?") != -1) {
        var re = new RegExp('(' + variable + '=)([^&]*)', 'gi')
        var newUrl = url.replace(re, variable + '=' + parameter)
        console.log('replaceQueryParamter:' + newUrl)
        return newUrl
    } else return false;
};


// 查询并替换自身,url为链接,variable为参数,parameter为新值(如果有就替换)
function processQuery(url, variable, parameter) {
    if (url.indexOf("?") != -1) {
        var query = url.split("?")[1];
        var vars = query.split("&");
        for (var i = 0; i < vars.length; i++) {
            var pair = vars[i].split("=");
            if (pair[0] == variable) {
                if (parameter = undefined) {
                    console.log(variable + '=' + newUrl);
                    return pair[1];
                } else if (parameter != undefined) {
                    var re = new RegExp('(' + variable + '=)([^&]*)', 'gi')
                    newUrl = url.replace(re, variable + '=' + parameter)
                    console.log('replaceQueryParamter:' + newUrl)
                    return newUrl
                }
            }
        }
    } else return false;
};
