/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/KVM/index.html","49f903e8eb57ecf0a42c48916e75af10"],["/NSX/index.html","9b956451aa3041bf4cbd040e401d709b"],["/Storage/index.html","f1793a97faf9dc6bd2e01f3740ea5d5b"],["/Veeam/index.html","c88836448f6a89c974b2e9a1696554fc"],["/Veritas/index.html","627198f90afd3f7831733428d5c09234"],["/about/index.html","a17cd28193acb9b4c5468976867d109d"],["/archives/2020/05/index.html","ed477e92fe6eef7d38afbe3e49600198"],["/archives/2020/06/index.html","e0e37ef6f7353f4e4e695dce988a2ccd"],["/archives/2020/08/index.html","e0386ff213824ce07fabf16bd502ffd3"],["/archives/2020/index.html","3168c20f61c7fc0d13d7935c272ef6af"],["/archives/2021/03/index.html","98dafad0a920bb71719e8abfb55dd1ac"],["/archives/2021/06/index.html","5d3b0c6e6e4211c353e764082af0ec0b"],["/archives/2021/07/index.html","73130b78db17e80605fe193fb6882695"],["/archives/2021/08/index.html","fbf4928eb35dcd0dcc7b448020a2e4cb"],["/archives/2021/index.html","740cdaf62cf3676776688ae5c5b21ab4"],["/archives/2021/page/2/index.html","aeacf7ce089a5e08e88867999700b569"],["/archives/2022/03/index.html","339a2050d3d1b5b4f7ec05e10b2b2046"],["/archives/2022/04/index.html","2e025bd67d660bada1cf6c48ee4f8a17"],["/archives/2022/index.html","d1280c2e1f678621222db80d2eb7a665"],["/archives/2024/02/index.html","b7d40d6a07080c906188a3cd3896bd28"],["/archives/2024/index.html","5aeac2f03988581d8f0227a5754ec41d"],["/archives/index.html","f0690928ad22c24b2dedabab37b133f1"],["/archives/page/2/index.html","6463e6459618a2d02046cfcb4692b2b4"],["/archives/page/3/index.html","fbf6582b8847d2c2a81f4fcbd6c9e84e"],["/categories/index.html","bec7b82cc073c3c09d4616709366a33b"],["/categories/学习笔记/index.html","23d60a2a2402c831e6e46df52b00b997"],["/categories/网站建设/hexo/index.html","68b03829b9fa609a3f68f10e430efe34"],["/categories/网站建设/index.html","3beaf2636474ee6f2c1f983ba9f04676"],["/categories/网络相关/EvE-NG/index.html","898961a012fefd78def487a37ec11952"],["/categories/网络相关/H3C/index.html","f258bab32814d0e86176befd53b04339"],["/categories/网络相关/index.html","f3a1dd162d1dde4860a86a3d7c2ba752"],["/categories/网络相关/华为/index.html","8cff0f95bc39f5904cd9d9036646de75"],["/categories/网络相关/锐捷/index.html","d0c3f45751bc621931af95692f3df38b"],["/categories/虚拟化/VMware/index.html","29cb16650b51d4397b3a44d1927c5463"],["/categories/虚拟化/index.html","58e72d27446b7e544085a359d4ed7d5e"],["/categories/虚拟化/page/2/index.html","7b570c613a73b4c0fb93767bf944be7c"],["/categories/虚拟化/vSphere/VMware/index.html","1fb784153b39a58019433ca5deb6cee6"],["/categories/虚拟化/vSphere/index.html","bccf06ff1f30c9d21437d9f1415c1126"],["/charts/index.html","45885ba4385460122272a5b920a4bd1a"],["/comment/index.html","28f443fb020bf61f396976a9db6e8077"],["/css/custom.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/index.css","3638f07ac1f5a4825e9ab18d1c410ca0"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/Avatar.png","f077e9dd4777008308812082b610d248"],["/img/alipay.jpg","fa447508817875e5c8d7e52fcbe56696"],["/img/archive.jpg","d816a4e7454cca4f675ba7cfe5b8224f"],["/img/background.jpg","1229144fc682676e7a2b49e1ee309b98"],["/img/default_top_img.jpg","84ea6f3cf2e063389c57d517d1694b3a"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","a2dc9668f2cf170fe3efeb263128b0e7"],["/img/tag_img.jpg","e52cc0e889d7c9bff36997cf30765856"],["/index.html","2ce960f2ca62450f5b81bf63997869fe"],["/js/main.js","cb1293dd47e361d4784be03a6788eaf7"],["/js/search/algolia.js","c361589555f3c5138d4a7cd5f71b889a"],["/js/search/local-search.js","067bcc51ed4388f87040ab516569f9e6"],["/js/tw_cn.js","fd2faf7f2f71df78dd71f5e441819b9c"],["/js/utils.js","80c3d558b0800ac8755dc771c68049a2"],["/links/index.html","ee367ec842f3d87445d9bedf3045c4f7"],["/page/2/index.html","895b6a471e49803d6dfc77763789f00b"],["/page/3/index.html","7d5890ce8d3da2d8e1c7eafea93a6925"],["/post/13022a98.html","654d5852ade781b272b9c13032420b55"],["/post/200515.html","8b4236848347355109fa7c0a80118996"],["/post/200517.html","08e5c77a147f44d29933905e75ce93b5"],["/post/200518.html","3a6a4b8201c23d27f2b3fde0223037ca"],["/post/210315.html","b999458cef24fd76f36c3d99c64d039e"],["/post/210319.html","cb2cc0cd82ca3b1b1f90725ff92dfba2"],["/post/2103191.html","ef2e749ac9495ff46f40c1ad227e4d97"],["/post/2103192.html","5005d6ca6f08501aa990cc25b988babc"],["/post/210626.html","befac8852c8daf967eb2a18d16b4211b"],["/post/210801.html","db155db375ef28e711e8e5cd8637ea39"],["/post/35c92e1a.html","97d24ebdb4a2812f59eefeab46745bfe"],["/post/3afe2615.html","81738c0e0b1a933c46313ca9c046ba0b"],["/post/4581e758.html","125a2f33af35259cd6f7bac36ac92241"],["/post/61443.html","b0d2aa3263c91cea1e74a5c84c7ae242"],["/post/657905a1.html","de97021d6410f4360223453fa3078cf1"],["/post/76e0150d.html","f8865631b6c73b3d9920349842f1bbca"],["/post/80fdc049.html","bc110ecfe33369560ed500b786a7cecc"],["/post/a3146603.html","c55bcf9c627067cfbc853851b5ab8c7c"],["/post/a66fd0fd.html","6816fd32a9d0bf24dbc12e79be5a6c1f"],["/post/a6e75a2b.html","ab51ccff6c762be0c9c6457b2f347677"],["/post/aac6bd89.html","657c627dd7ea9dc335d8034376c4d38c"],["/post/abae461c.html","91123e023166739308c8d2546944203f"],["/post/aof3dfe.html","90e0dc245a26d27823743c483781bb5c"],["/post/b5331bb6.html","b83e133c9d40ec1e7cd76f3da0267799"],["/post/b8091e0.html","c8dfba4f2303f066ffa8d19a7804435f"],["/post/c8411948.html","3c028a9350148f30e3076dc309992eb8"],["/post/db4a72da.html","48323c24f8983749ac8875b44d98042a"],["/post/fa31a270.html","815131a53d3ff1be92c84b60cb833fa8"],["/post/fabc15fe.html","b5141e974422628c49167138a1713037"],["/sw-register.js","63e3495091c751661be00a0ebf10dd39"],["/tags/Chart/index.html","2b3b65a61175f9f70d2c85c2a865f23f"],["/tags/ESXi/index.html","c064ee8ccd87af491bbf37be6a127975"],["/tags/Echarts/index.html","cbcbc9606cf7f3398b3bdba29c3a7239"],["/tags/H3C/index.html","207efc45ef4c698cca6812467988483b"],["/tags/Markdown/index.html","0da6b78acb53602aeff84163f9f21fe9"],["/tags/VMware/index.html","1f14a3ea56553dcd0a35601973ea95d1"],["/tags/Windows-Server/index.html","bd47edd484f1c1e380eb87c6601f6f39"],["/tags/Workstation/index.html","5d5907929125ed480698924be6594c72"],["/tags/butterfly/index.html","2e20483ea1b8d36daa4a0026923c8a91"],["/tags/hexo/index.html","e4d7d9249bcfa79bce267a7f8c2c4ccd"],["/tags/index.html","6e88bad85140bcbbe0828746be1f3e55"],["/tags/vCenter/index.html","04f98ce5d4ef8b12385d68ca5c8b1e0f"],["/tags/vSphere/index.html","3e63b102a2bd47cf19a85979e8d72910"],["/tags/华为/index.html","fc28f5687b4aea34961a614850ba5e92"],["/tags/模拟器/index.html","f72e5fa14811eb1642da3bf9900cb82a"],["/tags/网络/index.html","c3aa16e925deeda29af010942cd4d242"],["/tags/网络基础知识/index.html","c6e3fcd2938be16177911be849d44669"],["/tags/锐捷/index.html","b87d0487bdef94176efc727b51b4b200"],["/vCenter/index.html","0a26b1c311e48d42e6d0e1e75f928530"],["/vCloud-Director/index.html","efac41dd625681a0977ead61cce175a5"],["/vSAN/index.html","34afaa88d60b217babb5418483531530"],["/vSphere/index.html","f054ac54defc219e61705e510af66150"]];
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
