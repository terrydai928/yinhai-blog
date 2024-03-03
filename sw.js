/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/KVM/index.html","25f9776101813210446537268a2b15eb"],["/NSX/index.html","ab02882e47d78622b921d3aa1bd33b5a"],["/Storage/index.html","3ccbf9e0ec015344ac38960306c9128c"],["/Veeam/index.html","87ee284d839d3cf2c5e60fbe31cc8a5c"],["/Veritas/index.html","cf7c9a46dfc2ca9f635892aeee0a7a5b"],["/about/index.html","860d76c4e3ae2d02beebd1d8f0cf29d1"],["/archives/2020/05/index.html","2959ce8bd3ecdc6a341fe87d1007a41c"],["/archives/2020/06/index.html","a3f22446e55b7b2a8c5f3790916b4599"],["/archives/2020/08/index.html","542b026ae5ccef12a81c63e063f76b0a"],["/archives/2020/index.html","fc24ff2530324ed167560a1bee4b0097"],["/archives/2021/03/index.html","aedd164d98a30d3be2985ac5d68a9c04"],["/archives/2021/06/index.html","33e979cabca3607d2be5f22fce01430a"],["/archives/2021/07/index.html","a7932f5cf21b626c65df95507de3bda3"],["/archives/2021/08/index.html","1ad54b78a792206dc6e3ae6557d3a8a4"],["/archives/2021/index.html","7b99fe6c9bcf62d563f791325166107a"],["/archives/2021/page/2/index.html","81130a17d480f610dd4266eca49a54b6"],["/archives/2022/03/index.html","2825b1e45f2282591821e10f88f5d924"],["/archives/2022/04/index.html","d15f15f98c0b592de6a0a027e18bb32c"],["/archives/2022/index.html","47b03c05be778f7a39dd0fdbd60089a3"],["/archives/2024/02/index.html","c14a405ca51efde227d6637e705254d1"],["/archives/2024/index.html","dec6f7544f2943534154e681511b8f92"],["/archives/index.html","000e7dbe5aca14d08d33fa1eb45f9c36"],["/archives/page/2/index.html","ec3551a6e9f4c1dca2dcedc9af38c79c"],["/archives/page/3/index.html","088ff291c551ba99f1f9bc8af1b015af"],["/categories/index.html","6e97dc15ce8ee27c8a106181f9cce08e"],["/categories/学习笔记/index.html","fd07ded109ef0342780f41c39be405c1"],["/categories/网站建设/hexo/index.html","db143bee0c5412f0c22b94b39153e7a4"],["/categories/网站建设/index.html","5bd71de5306faa3d63fdf2896aee91fa"],["/categories/网络相关/EvE-NG/index.html","6ab054defed233f6ef738d3f5f9c1c59"],["/categories/网络相关/H3C/index.html","ce76ef5f8269a3f868fd6de2c1561691"],["/categories/网络相关/index.html","a1aa659a66a9ec0478577e0753600d99"],["/categories/网络相关/华为/index.html","85524aba42b2f52f5eea4e413d1aa640"],["/categories/网络相关/锐捷/index.html","f3fa5a64503fe60e21be8a01ae5f55b5"],["/categories/虚拟化/index.html","1c200418c910a954802775c2213eeae8"],["/categories/虚拟化/page/2/index.html","65a1ce5a28c23dfce2365f8181eccc59"],["/categories/虚拟化/vSphere/index.html","9a4ae694eaa6f1bbc59a3bb43a9dff76"],["/charts/index.html","2fa1d529309cdf71406597bf0da49272"],["/comment/index.html","a152eae1f34d3ed4085c91b8b13410a8"],["/css/custom.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/index.css","3638f07ac1f5a4825e9ab18d1c410ca0"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/Avatar.png","f077e9dd4777008308812082b610d248"],["/img/alipay.jpg","fa447508817875e5c8d7e52fcbe56696"],["/img/archive.jpg","d816a4e7454cca4f675ba7cfe5b8224f"],["/img/background.jpg","1229144fc682676e7a2b49e1ee309b98"],["/img/default_top_img.jpg","84ea6f3cf2e063389c57d517d1694b3a"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","a2dc9668f2cf170fe3efeb263128b0e7"],["/img/tag_img.jpg","e52cc0e889d7c9bff36997cf30765856"],["/index.html","9afe5680a0c03c2d8d58c92b1bf24130"],["/js/main.js","cb1293dd47e361d4784be03a6788eaf7"],["/js/search/algolia.js","c361589555f3c5138d4a7cd5f71b889a"],["/js/search/local-search.js","067bcc51ed4388f87040ab516569f9e6"],["/js/tw_cn.js","fd2faf7f2f71df78dd71f5e441819b9c"],["/js/utils.js","80c3d558b0800ac8755dc771c68049a2"],["/links/index.html","65929d91ed8cb4f28aad828849e91bf8"],["/page/2/index.html","d884eb48f5e3b27ce3fdaa6def8c2cfa"],["/page/3/index.html","5bd59e737f9d6f0a60538d0ab5a87d87"],["/post/13022a98.html","5c44254bbff35d5d357886ad564db38d"],["/post/200515.html","b0fb65aad7455e9c194ea0cd7adb8073"],["/post/200517.html","ee345fc8822dccb84ca8a7eda1716d27"],["/post/200518.html","0bdf76af9b50c7cbeb45d2ac7e913ea2"],["/post/210315.html","9dc5c0c64dd7a32964cf74b342b5b8a4"],["/post/210319.html","32213055803deb207442819c41873116"],["/post/2103191.html","4a228339dde649bb333643361942085f"],["/post/2103192.html","08a3c487468e7f17bf502d7be0123246"],["/post/210626.html","cc5c87b718d386070f627a44edbdd08e"],["/post/210801.html","1c403729295641c8b377da4c01f7d10d"],["/post/35c92e1a.html","c259969dfbb617db68ba6960e8200e29"],["/post/3afe2615.html","64683ec5ef9e11292ccbda290c3091a6"],["/post/4581e758.html","0812d6c4eb40185e45028ead8c3612f8"],["/post/61443.html","10273dd6db21d248d82a050606737e03"],["/post/657905a1.html","42058456bd40e79d9195c35d33d5ab60"],["/post/76e0150d.html","2b4f936071fbbcbdc1bb56877c4ad525"],["/post/80fdc049.html","48f339aa39b2083cc153c81de3c04d0d"],["/post/a3146603.html","c48cd670624b8347b7517c4df53b4602"],["/post/a66fd0fd.html","879f68a324503d94bfd3a0294e7d1467"],["/post/a6e75a2b.html","b05d4ed9283681d76c55dfbb144378d1"],["/post/aac6bd89.html","f4d660931ef71bf247f6df7d0684f416"],["/post/abae461c.html","0c6b4f58da43a7a3802436aa56c71f2d"],["/post/aof3dfe.html","aeca2f67a155cce19c3d25c11502e359"],["/post/b5331bb6.html","8a11e8d04a9c3adba2f45e5b989930b6"],["/post/b8091e0.html","7c13e78bc3964ba45cc102d681720fe2"],["/post/c8411948.html","65ed331bfa1f5d17deede38fc11761d6"],["/post/db4a72da.html","6a5d26a46d15face7dca69c83fe3be8c"],["/post/fa31a270.html","b02c3eb3903ad4baeaf8ef36463a7038"],["/post/fabc15fe.html","4898315e5699a141eb51f3fe900d527e"],["/sw-register.js","ab58c92fcce3d63d231932b514c17bc7"],["/tags/Chart/index.html","42735358cfc84de46c4178aa5e92614b"],["/tags/ESXi/index.html","9ab3acaaae52f7cc3b5935698b65b402"],["/tags/Echarts/index.html","32acce23d537d8e8e25df48965b69fe8"],["/tags/H3C/index.html","e5c1afcd2ea80f40b79446961f6ef15a"],["/tags/Markdown/index.html","ae3634747a6d0298b2915fd81c093f17"],["/tags/VMware/index.html","7a1681c56f11c4ab3a619e607f2a7d51"],["/tags/VMware/page/2/index.html","9c41f11b266fc91ba8d92c9e583f3af9"],["/tags/Windows-Server/index.html","9a4347896311a3ed759e84b43b98c0be"],["/tags/Workstation/index.html","8ee11dea963552a7c928f768a5b1d09c"],["/tags/butterfly/index.html","b23fac8a7928d78b7a5eb405e8fbced8"],["/tags/hexo/index.html","f8d4eb5187f76d810afd62412313c793"],["/tags/index.html","9575a45320918194a4ce9ff17b0dccf5"],["/tags/vCenter/index.html","13274216e9646d078fb5926968960084"],["/tags/vSphere/index.html","da3b0ad0ac6ecaabf7ebd3c5b1d85284"],["/tags/华为/index.html","931cab567099c84cdb80fb6952f5712e"],["/tags/模拟器/index.html","96a150649ea71edfdfd0f47c7428ceaf"],["/tags/网络/index.html","cda54bd19952e23d0ae826103e336a8d"],["/tags/网络基础知识/index.html","df967691ef2f71a1e154ae301ab31bab"],["/tags/锐捷/index.html","7e867c05e805748e6cd2531e446f63b6"],["/vCenter/index.html","ce08e36a5acbb437fd25ff35a60103b6"],["/vCloud-Director/index.html","363b4469e6ba26548a6546a119fa91ad"],["/vSAN/index.html","535c6624b80f522444d9d9232d96de7d"],["/vSphere/index.html","bd89c25eb52e31c1ad757feb734295d7"]];
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
