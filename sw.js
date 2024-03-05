/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/KVM/index.html","1066abe1b37ba680b1ac034c1852e4be"],["/NSX/index.html","a5298df3010ff6ed1bea7b417f4f9587"],["/Storage/index.html","9eed91f8e5e1afb913920e4132a43c11"],["/Veeam/index.html","94882329c8f9104a807f202f3772ec3a"],["/Veritas/index.html","73ddb31ed46c6febecc2a673c302b20e"],["/about/index.html","07b5ea2ba56fba166cb3e0b17b434d79"],["/archives/2020/05/index.html","e359956710721d69f54fc9c3c3d04719"],["/archives/2020/06/index.html","ed91ae7076e5697c2df4b37984fc75c7"],["/archives/2020/08/index.html","d442bcb37eb975b39a02f23d49e4260a"],["/archives/2020/index.html","dd568486cd92f2793ffe7104ef9fb74b"],["/archives/2021/03/index.html","ba26a8319f81480f6b25c30db1dd0cd4"],["/archives/2021/06/index.html","668ee23dbdd618e63343299e9bd9fa58"],["/archives/2021/07/index.html","6c281a0282f4815718d1523a5eeac4f4"],["/archives/2021/08/index.html","aac786167f56090f3f9c6ac568c7f36e"],["/archives/2021/index.html","c326e0031f7faf1cd7a421b099f88273"],["/archives/2021/page/2/index.html","748e9b8c08aa83284923c976f00dee47"],["/archives/2022/03/index.html","6d5bc805465fb0d4d04943ef48122358"],["/archives/2022/04/index.html","be463666bd68379daa87414f7ac5d7e1"],["/archives/2022/index.html","dec99465c30f45eacdf7344e6fa9bea1"],["/archives/2024/02/index.html","d9671292226d009c9c024bac1c08a3b3"],["/archives/2024/index.html","77c09ac53b6e8fdb4dd62327adbba8e7"],["/archives/index.html","e4153ba06ad5695ca9b782e38866ed2c"],["/archives/page/2/index.html","75871fb808f89d1d4712a9fcb87dff9a"],["/archives/page/3/index.html","cef252ede319629d6579b7044b6e529a"],["/categories/index.html","7aa1d7b4c921c41a8816efcf0b81d53f"],["/categories/学习笔记/index.html","5a2555a4de463f20cb8c456232f41f29"],["/categories/网站建设/hexo/index.html","843507f97411c435d493058b0decb3df"],["/categories/网站建设/index.html","2c2e2c1db710d288d0f6b23ff3793c6e"],["/categories/网络相关/EvE-NG/index.html","5e9a9a93817de22ab0d97426c991fc70"],["/categories/网络相关/H3C/index.html","eb6510a4cd9a00d2cc35cfb50a06f07a"],["/categories/网络相关/index.html","b0ae38157b65836582204f88d7518a55"],["/categories/网络相关/华为/index.html","fa4b83ab829dec3d4e98ab386c8a7bb1"],["/categories/网络相关/锐捷/index.html","cf7da216566c0493cb2d8d7fbd834ad0"],["/categories/虚拟化/VMware/index.html","291fd8e209fb89e12e6a60a06a632c9d"],["/categories/虚拟化/index.html","9d58bb2021d8436fd679233850ca3cba"],["/categories/虚拟化/page/2/index.html","ee599040694c2b571d150c5b50685798"],["/categories/虚拟化/vSphere/VMware/index.html","f898aca0d7a178b4b3c2774522de73be"],["/categories/虚拟化/vSphere/index.html","d4bb6b2325499b329febfe9fbc6fd03f"],["/charts/index.html","e8b806df1750b608e2b124500a514740"],["/comment/index.html","0d503196d8cf138f313a37b41306c6b9"],["/css/custom.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/index.css","3638f07ac1f5a4825e9ab18d1c410ca0"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/Avatar.png","f077e9dd4777008308812082b610d248"],["/img/alipay.jpg","fa447508817875e5c8d7e52fcbe56696"],["/img/archive.jpg","d816a4e7454cca4f675ba7cfe5b8224f"],["/img/background.jpg","1229144fc682676e7a2b49e1ee309b98"],["/img/default_top_img.jpg","84ea6f3cf2e063389c57d517d1694b3a"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","a2dc9668f2cf170fe3efeb263128b0e7"],["/img/tag_img.jpg","e52cc0e889d7c9bff36997cf30765856"],["/index.html","256db85400e5d2ae0de22a06491c5839"],["/js/main.js","cb1293dd47e361d4784be03a6788eaf7"],["/js/search/algolia.js","c361589555f3c5138d4a7cd5f71b889a"],["/js/search/local-search.js","067bcc51ed4388f87040ab516569f9e6"],["/js/tw_cn.js","fd2faf7f2f71df78dd71f5e441819b9c"],["/js/utils.js","80c3d558b0800ac8755dc771c68049a2"],["/links/index.html","bd989286923ee16a7b2135826d485406"],["/page/2/index.html","7d938fb0df1c08e719e10d922182469c"],["/page/3/index.html","5517d7c1982b07b8d0caccce7ba06d26"],["/post/13022a98.html","4be9dc9fd6c4ccd72880ad085db41360"],["/post/200515.html","75c9f33f81cc5f8e824783c90605f7b3"],["/post/200517.html","370a38d8d46a77b91556d4ed4ea81e49"],["/post/200518.html","c004e714071543c5d633f86eb27fec53"],["/post/210315.html","3461800d25b03553db68d795bea957ac"],["/post/210319.html","5dcd72dba72c6723691e03162e93468b"],["/post/2103191.html","6bca73853f46a5fa8813c7ba8c789826"],["/post/2103192.html","f39b08aeb50864b9eea9d4d4591f1bee"],["/post/210626.html","5684e4a12d885a16166a029fb1b4557f"],["/post/210801.html","a4542e32bf73cb55e67527e7b0f6209c"],["/post/35c92e1a.html","c2d88836a77d8a2f7050c1520b8b7387"],["/post/3afe2615.html","675f4b9dadbdac8c768a05ea03a305b1"],["/post/4581e758.html","cd241c9d357dda96adf7d2dfd24e22bc"],["/post/61443.html","28283b3a3cfbff461bdcb4e6896f6533"],["/post/657905a1.html","3ff1d664b0e9afde7beec89b617b4325"],["/post/76e0150d.html","63b0b567a3537ea7fd0ca148727aa142"],["/post/80fdc049.html","efb801d5e6c6599861cdff261d2533f4"],["/post/a3146603.html","979679b8835fc17a744804619eddcec7"],["/post/a66fd0fd.html","d33c53360d3e73a80f750026d8332c9a"],["/post/a6e75a2b.html","a215ddd9ea3b32a65b6c1d21afde8190"],["/post/aac6bd89.html","27afdadfd1c022ccc940684eb33d5db2"],["/post/abae461c.html","ee2aa09c0ab4d5d8d8d0fd126bb4e483"],["/post/aof3dfe.html","09a4e900a266566b6d2d6b97cc5ec9bf"],["/post/b5331bb6.html","bfb30f24a28ee1aec7e2c58ac9927183"],["/post/b8091e0.html","9591f1761a994843df71a937e9d591c2"],["/post/c8411948.html","aa464a01408eaea781e00ef0b419f8d8"],["/post/db4a72da.html","250e414c5401f368588c8cbfe18285ed"],["/post/fa31a270.html","f97463b37511f052b42a6b15b874c81c"],["/post/fabc15fe.html","b4a3fd10a13ce693f1ef762df4afdf55"],["/sw-register.js","dafb35868f94c0b2cb19ec5556fb7e5d"],["/tags/Chart/index.html","e554800c71735179d64a20eacbd20851"],["/tags/ESXi/index.html","095139417d85df8e006f6c9e08f017b2"],["/tags/Echarts/index.html","ac7c850bb43ca37721e2f36d3bf96561"],["/tags/H3C/index.html","b682c19629b01d96da54519f9fdcc5f5"],["/tags/Markdown/index.html","c42f7b744a074415f1102483855d04db"],["/tags/VMware/index.html","2cf373bb8347fba53e046e66eeb5dd42"],["/tags/Windows-Server/index.html","cf820de88f935c5015fe7b00466f33e8"],["/tags/Workstation/index.html","82806ef107a93c413f263d78b4fa2803"],["/tags/butterfly/index.html","457411e29a6164fd346822c25cd108f4"],["/tags/hexo/index.html","d007c53a257cdef8bd62ea43e8818ae2"],["/tags/index.html","e92d6504947d319f5e39231dcc54cbd2"],["/tags/vCenter/index.html","ab2ffdc812663fc8dd625802c1febb9c"],["/tags/vSphere/index.html","15952508946b138cfc3e346afb892770"],["/tags/华为/index.html","6aaeb1e8d4d11e7f141a472f558aeffd"],["/tags/模拟器/index.html","c93f202f7dccbc2bc472ed48eb32b8d6"],["/tags/网络/index.html","a52ccbddabe02f6205f765a8b2c76dae"],["/tags/网络基础知识/index.html","82d92bf7c561a43087799e25c9f35935"],["/tags/锐捷/index.html","1cb57219037be774b978f877a3699963"],["/vCenter/index.html","0220f8e05a8cb449a69394cc3ac22fd1"],["/vCloud-Director/index.html","0ef2b20d8a41a3321ae6f86f31b12335"],["/vSAN/index.html","6e1fc30fa5a0da9b167a7d62a1719c25"],["/vSphere/index.html","ef9ff1528615126329050885ec6b69cf"]];
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
