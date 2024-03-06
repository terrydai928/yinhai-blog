/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/KVM/index.html","a82502b02a0d33a3595bd8fe172f693d"],["/NSX/index.html","da9b7a85be8083506407f0975c2df95e"],["/Storage/index.html","c4049074577e1b664cf3600b5c204919"],["/Veeam/index.html","cb1224784e1a8e187db9f31933e0dcdf"],["/Veritas/index.html","7d7cc49234f5587f92511b38c6ec8a2c"],["/about/index.html","3f988bf484110eafb0943d754dce5203"],["/archives/2020/05/index.html","e284f77ff6b34e192b9db25d2ce51744"],["/archives/2020/06/index.html","8b708befa228493550c4a3d6b58f225f"],["/archives/2020/08/index.html","fc4dc5d4e0cc0f563175ba2fe7dcab42"],["/archives/2020/index.html","961bf35f5671313db8e90903ecad5d30"],["/archives/2021/03/index.html","b6059e75cfba8e6f43d41b6ad0a2366b"],["/archives/2021/06/index.html","f9a60caecf53eee53c6ed337ee0c105d"],["/archives/2021/07/index.html","577e3b94dc50400377f5b7cfb5a846c1"],["/archives/2021/08/index.html","5cc187efa73d43a791dcbb33ae6f3fb5"],["/archives/2021/index.html","9b21cb219b847c27d1f795227bc1a41f"],["/archives/2021/page/2/index.html","f74176f0973fc5d1b2b812c68a44b8aa"],["/archives/2022/03/index.html","0627102e2bfb71b7fe32bc89f21c1f64"],["/archives/2022/04/index.html","108869173137bf27a97941be8862a1e8"],["/archives/2022/index.html","9213aa25d65a46b76e48338f0c2268b6"],["/archives/2024/02/index.html","4c4c0911ce412cca9aeda949f8e141a2"],["/archives/2024/index.html","a4f24175c9542d106f6a82b7e42c8c9c"],["/archives/index.html","b1c421712f855b1aa0cb722089ca322f"],["/archives/page/2/index.html","8b05515716a2e70a5983639b89e9a733"],["/archives/page/3/index.html","cbe47e10d19088847e0f6aaddf4fd674"],["/categories/index.html","372ef8aac25ba07344107368d2c0a77f"],["/categories/学习笔记/index.html","67020ccb75ada8738ac26c1dc30776e3"],["/categories/网站建设/hexo/index.html","a81256c2bfa4bfee7d71313390c5556a"],["/categories/网站建设/index.html","2e47d58d19865436187ff9bd85442ba8"],["/categories/网络相关/EvE-NG/index.html","93778944c11c70c3ee3aa4bad5b2be45"],["/categories/网络相关/H3C/index.html","c35c31b36ff9d0802a72d56833a023cc"],["/categories/网络相关/index.html","be0f23018662a4530fcbc090fa98ec53"],["/categories/网络相关/华为/index.html","e18ecd4717ba43378d867ac32183b287"],["/categories/网络相关/锐捷/index.html","f1f95c03d079bf5584dd723133dbad02"],["/categories/虚拟化/VMware/index.html","dd9ded240a2dc175af070b726cc3eed3"],["/categories/虚拟化/index.html","ce179f53d2e3626bceffb238b1fd9955"],["/categories/虚拟化/page/2/index.html","e6ad78820904115aab8dc20a98e0e38d"],["/categories/虚拟化/vSphere/VMware/index.html","bc3c16d00ba9cbbbc79e4e3831c82b37"],["/categories/虚拟化/vSphere/index.html","27ccbee5cadc228052fe41adfe3e43a3"],["/charts/index.html","b166db21c0b181cad96b12f9be779a2b"],["/comment/index.html","e8d795ac20aff6b1997c97d9cfb31216"],["/css/custom.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/index.css","3638f07ac1f5a4825e9ab18d1c410ca0"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/Avatar.png","f077e9dd4777008308812082b610d248"],["/img/alipay.jpg","fa447508817875e5c8d7e52fcbe56696"],["/img/archive.jpg","d816a4e7454cca4f675ba7cfe5b8224f"],["/img/background.jpg","1229144fc682676e7a2b49e1ee309b98"],["/img/default_top_img.jpg","84ea6f3cf2e063389c57d517d1694b3a"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","a2dc9668f2cf170fe3efeb263128b0e7"],["/img/tag_img.jpg","e52cc0e889d7c9bff36997cf30765856"],["/index.html","c2d15ecea9cf5c617665a7af6d78e23d"],["/js/main.js","cb1293dd47e361d4784be03a6788eaf7"],["/js/search/algolia.js","c361589555f3c5138d4a7cd5f71b889a"],["/js/search/local-search.js","067bcc51ed4388f87040ab516569f9e6"],["/js/tw_cn.js","fd2faf7f2f71df78dd71f5e441819b9c"],["/js/utils.js","80c3d558b0800ac8755dc771c68049a2"],["/links/index.html","5a9f39ac30bdc2d3c44877009d2e9524"],["/page/2/index.html","8b6c3d47b3c07e4958e171def1472581"],["/page/3/index.html","336bc773e7be85da80b39ac9e1bc682b"],["/post/13022a98.html","4be9dc9fd6c4ccd72880ad085db41360"],["/post/200515.html","f88eb0b9607dfdd125a8e19f95e25fa1"],["/post/200517.html","6aa712bf4a227e18804190dc8556cbe8"],["/post/200518.html","c004e714071543c5d633f86eb27fec53"],["/post/210315.html","7fba2b561dc5572c8bddd7e4c8279d4e"],["/post/210319.html","98993d21f81451053cf58d9a79aa68f2"],["/post/2103191.html","3227c8ff9e560c8ec087cb7e0d2f0d56"],["/post/2103192.html","7c186ec3e716e7758e16f527831e2a9e"],["/post/210626.html","6b823e7e6ca5082f38f5d9761c4cee1c"],["/post/210801.html","417468d3e7a30dea92e90660f690cb3b"],["/post/35c92e1a.html","c2d88836a77d8a2f7050c1520b8b7387"],["/post/3afe2615.html","6933e4c6f33c7241c3e129c697722a15"],["/post/4581e758.html","310f334df594fcd92c4f8f0cf58dda8f"],["/post/61443.html","e35711c411146782de6b7aa9e52d34d8"],["/post/657905a1.html","1906d5873d956b84a9ba63f8d6e06879"],["/post/76e0150d.html","63b0b567a3537ea7fd0ca148727aa142"],["/post/80fdc049.html","efb801d5e6c6599861cdff261d2533f4"],["/post/a3146603.html","ac38b84c16d95ad53d6061b2b4fe3718"],["/post/a66fd0fd.html","087303953229fa1c994d4fcbad5332ad"],["/post/a6e75a2b.html","57f70b56b614274057984d88eca605c6"],["/post/aac6bd89.html","5deda0c9edbfadb37bb100a80d6e8072"],["/post/abae461c.html","ee2aa09c0ab4d5d8d8d0fd126bb4e483"],["/post/aof3dfe.html","08e56cf161d43b86df612af9db3c2f9c"],["/post/b5331bb6.html","41f2c128efba2ef81b83e4e563b5a0d3"],["/post/b8091e0.html","ac649d258430b36b4b387702365a82dd"],["/post/c8411948.html","aa464a01408eaea781e00ef0b419f8d8"],["/post/db4a72da.html","250e414c5401f368588c8cbfe18285ed"],["/post/fa31a270.html","0239f1c8a9f7dca1c87642caaaee837f"],["/post/fabc15fe.html","b4a3fd10a13ce693f1ef762df4afdf55"],["/sw-register.js","0af021e274a6f4f77dbda5170cd30c38"],["/tags/Chart/index.html","d811127d829700928315a006143f7b96"],["/tags/ESXi/index.html","f751a3affec4be499dc07535d2aa0447"],["/tags/Echarts/index.html","23e2700519f3319268a3f40f00f183a9"],["/tags/H3C/index.html","6350abf1ab08696f71e93b02e8644142"],["/tags/Markdown/index.html","0fe55ef1b3ad4e00cdbeca732d9b2efa"],["/tags/VMware/index.html","6181924d2b87225167f1e96f5b9ed1ce"],["/tags/Windows-Server/index.html","77bf9fe0dbb1737c858c3cb15c9dfbf8"],["/tags/Workstation/index.html","c96e37f530347d0587e47c662580a958"],["/tags/butterfly/index.html","914b2bdf1e5099460f928361065b54ab"],["/tags/hexo/index.html","19ef0f3ec6e988ea8ebc7efe40595d68"],["/tags/index.html","d901d64c974119e86db33c659fae5878"],["/tags/vCenter/index.html","6fee850088e6a87b93ce8188814a0b5d"],["/tags/vSphere/index.html","c14d7bd765020dd3510c5c55adeee73e"],["/tags/华为/index.html","309b931729deeea5440fd86e7d3086c6"],["/tags/模拟器/index.html","3f3515a3413cd44b6c8be8a3e25ce5ce"],["/tags/网络/index.html","1e01612b7bef6a0733584da286cd346a"],["/tags/网络基础知识/index.html","4a4a597d01073a9f8ff9f919276664ca"],["/tags/锐捷/index.html","f29f2cfa9d6ac34b52140cd4587e210f"],["/vCenter/index.html","963d9df447fcfed99ae7ac3dc40fa29c"],["/vCloud-Director/index.html","04cf7a8ebd11fbfa6244559d07398c3a"],["/vSAN/index.html","4c455bb176de98e57682f23a0e18c720"],["/vSphere/index.html","7c62e48e38ecd6a82f36e9313233488b"]];
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
