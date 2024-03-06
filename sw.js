/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/KVM/index.html","15cd123d73d5d0b53b883cbd3892cbf2"],["/NSX/index.html","85db59ee6be435218b5488a4ffec1046"],["/Storage/index.html","8f60b431ce68f6de3906a4f5bcbd2b6a"],["/Veeam/index.html","c3de0f304b61d972509eb8c5b58ab469"],["/Veritas/index.html","f511fcd53d2dc75e8ef2d3387fb34c21"],["/about/index.html","4deca086f2a15f630b3463f4616c0857"],["/archives/2020/05/index.html","d1d9045586969904bd4723fa83c1df06"],["/archives/2020/06/index.html","4e69452503c11ef6be8ec9b9be9af1a1"],["/archives/2020/08/index.html","080a5799d03994d530155bdfcd44e11f"],["/archives/2020/index.html","39e43f6fdc3a21730af72630123ae082"],["/archives/2021/03/index.html","d0424fe554217594539794fba0e14d10"],["/archives/2021/06/index.html","4cd830ec8d53fcf944c3b4a7435e2b79"],["/archives/2021/07/index.html","84a99ab26b5cf033e0c1ea8125f4e270"],["/archives/2021/08/index.html","76c3831caa752db9ea50322adf2d994d"],["/archives/2021/index.html","9c399387811064a2125f35c995640d1e"],["/archives/2021/page/2/index.html","35fe6f890a29160eae11dd61c6292e4f"],["/archives/2022/03/index.html","f2c3a236fd66e80350a29d0366c10e85"],["/archives/2022/04/index.html","2d48533cc909b86c74ec56378d4c27e9"],["/archives/2022/index.html","94e5f942cb2a6a63dd803194286457c7"],["/archives/2024/02/index.html","f0c6cafd4bda41411f6edd32cc90aac5"],["/archives/2024/index.html","504f3109844caab15465624e2eff57a0"],["/archives/index.html","83d6f90ca99b65f3695c63e9a935c60b"],["/archives/page/2/index.html","040d68567536766bb55691a2b113fee4"],["/archives/page/3/index.html","0b37d8d516ef631b43bd8123f8de41e4"],["/categories/index.html","c2c5467eb9f52e72c5ae42fe0f4ce37e"],["/categories/学习笔记/index.html","b743f4788bd8bd28999ceb7c18f65f42"],["/categories/网站建设/hexo/index.html","5328843ded282cf55cafa8be7df7b006"],["/categories/网站建设/index.html","281811a70c506caee1c60c7b2b5a8f2f"],["/categories/网络相关/EvE-NG/index.html","e8ef5b4730894b7315dfd39ff160b9ff"],["/categories/网络相关/H3C/index.html","20ff0f068e8c903a20c329d080343f88"],["/categories/网络相关/index.html","53d67765c2b3cd339108e21dd1beed50"],["/categories/网络相关/华为/index.html","688e81647f2901c6916204f4dba2c85b"],["/categories/网络相关/锐捷/index.html","084fda640ded0ec632822c26c2e42bc4"],["/categories/虚拟化/VMware/index.html","e791d40f30aba8e7ff872f12d2b75367"],["/categories/虚拟化/index.html","65b65690311fa62e87e6484f5d1a1f42"],["/categories/虚拟化/page/2/index.html","f3c0e67b6b658b3a33bba1eb0a556fcb"],["/categories/虚拟化/vSphere/VMware/index.html","6b49265f375c7cb7fe5a7985f600c8df"],["/categories/虚拟化/vSphere/index.html","a92384972b0c14c6ffeacb46130b3d3e"],["/charts/index.html","7835bbea49a0446d1ed5ebe71c163323"],["/comment/index.html","a02c28c162dd55ce0c7ef68b62349c96"],["/css/custom.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/index.css","3638f07ac1f5a4825e9ab18d1c410ca0"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/Avatar.png","f077e9dd4777008308812082b610d248"],["/img/alipay.jpg","fa447508817875e5c8d7e52fcbe56696"],["/img/archive.jpg","d816a4e7454cca4f675ba7cfe5b8224f"],["/img/background.jpg","1229144fc682676e7a2b49e1ee309b98"],["/img/default_top_img.jpg","84ea6f3cf2e063389c57d517d1694b3a"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","a2dc9668f2cf170fe3efeb263128b0e7"],["/img/tag_img.jpg","e52cc0e889d7c9bff36997cf30765856"],["/index.html","381ffb30c8968e5e77a7ba2114f7ad86"],["/js/main.js","cb1293dd47e361d4784be03a6788eaf7"],["/js/search/algolia.js","c361589555f3c5138d4a7cd5f71b889a"],["/js/search/local-search.js","067bcc51ed4388f87040ab516569f9e6"],["/js/tw_cn.js","fd2faf7f2f71df78dd71f5e441819b9c"],["/js/utils.js","80c3d558b0800ac8755dc771c68049a2"],["/links/index.html","96af4f09d9d3e64820d31066cbe39a5b"],["/page/2/index.html","820167b05906a4be90bd5428134a771c"],["/page/3/index.html","79303e93c5c8a8187295bfbdc9d362a0"],["/post/13022a98.html","c307a4efd0448a9eb88749905cb6023b"],["/post/200515.html","e088ea48cf755d57de040d8e095ce8a6"],["/post/200517.html","a73caf97f1070f48915ba79383936f90"],["/post/200518.html","764d09aa51f908de8135c3e5a5fa7fa7"],["/post/210315.html","0970447fac0f48c09bac1fdce8024be4"],["/post/210319.html","10fd7d6ed66a6972abdd99d14ef0facd"],["/post/2103191.html","fff6e0264d7defc8e8e7338a1ddcf6b3"],["/post/2103192.html","9dff8907cba75c86e1a0074838f758eb"],["/post/210626.html","0bdae0fc03f8104215dbccace3e2b04b"],["/post/210801.html","defa104999e5f86f14788579696094f9"],["/post/35c92e1a.html","350b75fa4a8d20ba7ae7521ddb885056"],["/post/3afe2615.html","42689ca11d8a6da27db727cdee905d03"],["/post/4581e758.html","bd4b739ccc678eeb79a085d05982b4eb"],["/post/61443.html","ce1019a7300553fdbe5e89ccb3866bab"],["/post/657905a1.html","5da307df98c33b05a18db3b5be6d901b"],["/post/76e0150d.html","6632ac1beeecec0d8919f09438596661"],["/post/80fdc049.html","52aca8a57c454ccffabaae1a33d0a71f"],["/post/a3146603.html","4fdf2f8e5dcd29a0d6f94381452267eb"],["/post/a66fd0fd.html","e3a7e0164380a0ba755d9a71325bc728"],["/post/a6e75a2b.html","6923eab9b1510b32bf0182ce31644a15"],["/post/aac6bd89.html","abfd13b4a1b17d2cbe52a4e27c7b042b"],["/post/abae461c.html","d7f727f7a1528ef31f0a8b9f313bcc31"],["/post/aof3dfe.html","986c3b89f427ad33f3db6d60d7af0e17"],["/post/b5331bb6.html","66e6dbda50c79d6a1fc9b1c6a33799e6"],["/post/b8091e0.html","46f4093f01b221a3a9ed9c9b5f18ebba"],["/post/c8411948.html","2bfb9dd02b857e0e894b13dc2c6db82a"],["/post/db4a72da.html","1747e10da76e988aaa29f292259de4a6"],["/post/fa31a270.html","818b71b30c3badd2214b09f405aba48c"],["/post/fabc15fe.html","cde77fb07704851ca9197a72fd6cb747"],["/sw-register.js","252382b82d02c7bff927296bdc331c74"],["/tags/Chart/index.html","dcd699f01d941491accef6f97f718052"],["/tags/ESXi/index.html","bf3840e0ddf0e8168bc4ec8275494d25"],["/tags/Echarts/index.html","7c5bde6f4d3c639c014e661d1127cf01"],["/tags/H3C/index.html","954ecd107c3c6ffacffc2df6a0ada31f"],["/tags/Markdown/index.html","05ad9c7c0104a33b9ba77122b05d605d"],["/tags/VMware/index.html","3ed36f61d30e00226a1d3bc84278f943"],["/tags/Windows-Server/index.html","1fd4f82bdec47276dd3e23843da1635b"],["/tags/Workstation/index.html","095df7820b6a6351cb689b8bf8911e34"],["/tags/butterfly/index.html","528c63dd09678fb7e43cbe8b2f573dbd"],["/tags/hexo/index.html","3e18c4c6e2b2ebee228999d97c565e4d"],["/tags/index.html","e106c38cb965570545166867302bd48e"],["/tags/vCenter/index.html","0532efe4735c99a4c5f4fbc47826a74d"],["/tags/vSphere/index.html","4560332fd133d0799e412227c127f161"],["/tags/华为/index.html","64fcfc0479f076d6eeed8b20ca336967"],["/tags/模拟器/index.html","d7a1d6e189f6dc18d16e72121676a6ce"],["/tags/网络/index.html","96278f9d0f7bace6d63e4be57643ba07"],["/tags/网络基础知识/index.html","29fcf6373879c9feba7db109c3d20d60"],["/tags/锐捷/index.html","453de747aa21bc95d19d77c557f57956"],["/vCenter/index.html","981079ba29379bc31fb901c100f6be51"],["/vCloud-Director/index.html","3b9041cf55426109b9ff46e9c17f06ad"],["/vSAN/index.html","0fb73ed659f8f5cd82f69b4f92c86f81"],["/vSphere/index.html","9639c0ec52b9781980920a4f149e3a42"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });









/* eslint-enable */
