/*
README:https://github.com/VirgilClyne/iRingo
*/

var url = $request.url;

processQuery(url, 'cc', 'TW')
processQuery(url, 'card_locale', 'zh-Hans_CN')
if (processQuery(url, 'include') == 'tv') {
    let A = processQuery(url, 'q')
    newA = A.replace(/%2F[a-z]{2}-[A-Z]{2}/, '%2Fzh-TW')
    processQuery(url, 'q', newA)
};
if (processQuery(url, 'include') == 'movies') {
    let A = processQuery(url, 'q')
    newA = A.replace(/%2F[a-z]{2}-[A-Z]{2}/, '%2Fzh-TW')
    processQuery(url, 'q', newA)
};

$done({ url });

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
                    //var re = new RegExp('(' + variable + '=)([^&]*)', 'gi')
                    newUrl = url.replace(/variable + '=' + pair[1]/, variable + '=' + parameter)
                    console.log('replaceQueryParamter:' + newUrl)
                    return newUrl
                }
            }
        }
    } else return false;
};