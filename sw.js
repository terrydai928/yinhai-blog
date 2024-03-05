/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/KVM/index.html","ee513b2ad7908d2c2933b9f4a8d7ac15"],["/NSX/index.html","dbc0cdb143d3aa8ae328189c9395375a"],["/Storage/index.html","4c10aa1c052c6c87e1b35133340b45b0"],["/Veeam/index.html","9709546a9191fde6aca6afbf220cd712"],["/Veritas/index.html","94c04c52e3cc5811cc3d39178f4bbe88"],["/about/index.html","f62757b89d272adb8211ba333084fff3"],["/archives/2020/05/index.html","389141fb326517881e26b5c13f12a95e"],["/archives/2020/06/index.html","37bdedda2725e2a73b1e78048188fcb1"],["/archives/2020/08/index.html","e1814125d12c4f8708e0c475fddc319d"],["/archives/2020/index.html","87aaf61fb5436c14c172750af9657a70"],["/archives/2021/03/index.html","64c63c0874765fd1a5dec6bda5932f48"],["/archives/2021/06/index.html","33d8f6230dd14251dc22fb166f22aacf"],["/archives/2021/07/index.html","fd3c594e2eca3760a7659f17df5bffe7"],["/archives/2021/08/index.html","8bf0673b222728d7cb74f1a060e8741f"],["/archives/2021/index.html","e6923434a1b4e0750c7f07de21f61b2e"],["/archives/2021/page/2/index.html","e47e91a9adca6c247074ec7c04811e32"],["/archives/2022/03/index.html","7d77ec8dbef666146f38040cf6d87f29"],["/archives/2022/04/index.html","a4d75cc8a9191764b869aa1941fae4b6"],["/archives/2022/index.html","6d004ad4f34f4745ea0bf647b5b4d165"],["/archives/2024/02/index.html","c6b8757e9ce3e908ca8fd4481aa5faf6"],["/archives/2024/index.html","2cde8f545f6f6c202cc036669f3b95eb"],["/archives/index.html","59e8248a4e05b172fcda82ed565b5be9"],["/archives/page/2/index.html","e1f06287b49f333a34f7dec9a83fabff"],["/archives/page/3/index.html","f194911e7aaafd56d7113579d7a492f9"],["/categories/index.html","d9c9be3da95e2ac16f2bc3a003dabcd7"],["/categories/学习笔记/index.html","9de03d93a01179da759bdfdbbb19d875"],["/categories/网站建设/hexo/index.html","6e965bee8a7c21e7422f81b0ca853258"],["/categories/网站建设/index.html","72e5990a440ccc6d97bd0cd7153dd420"],["/categories/网络相关/EvE-NG/index.html","f1be7063295dc9f18fbe72544fa81a95"],["/categories/网络相关/H3C/index.html","b11ab9fad003327475c9be3ed1f4a892"],["/categories/网络相关/index.html","490cbb221694df693e69d24080dd9bb7"],["/categories/网络相关/华为/index.html","8d3eec462ca27ad993f0fc8a6b0921d9"],["/categories/网络相关/锐捷/index.html","888b7f84a6487fe5246c972b1296d883"],["/categories/虚拟化/VMware/index.html","be1912c375f4fbf3ddc4f57969948105"],["/categories/虚拟化/index.html","2070031f9549cb64db0c8d5aed7cab7b"],["/categories/虚拟化/page/2/index.html","dce9b137509930c99067d737966eb05c"],["/categories/虚拟化/vSphere/VMware/index.html","322d24f13c0348ee2cd42445b4a5168b"],["/categories/虚拟化/vSphere/index.html","5fe4ea4af37c51e4fa5dcd0ea108a39b"],["/charts/index.html","7bd5d56599694a538816c8e02f17e2f1"],["/comment/index.html","ab0b983bf0b46c154280be8cd80c1aa3"],["/css/custom.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/index.css","3638f07ac1f5a4825e9ab18d1c410ca0"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/Avatar.png","f077e9dd4777008308812082b610d248"],["/img/alipay.jpg","fa447508817875e5c8d7e52fcbe56696"],["/img/archive.jpg","d816a4e7454cca4f675ba7cfe5b8224f"],["/img/background.jpg","1229144fc682676e7a2b49e1ee309b98"],["/img/default_top_img.jpg","84ea6f3cf2e063389c57d517d1694b3a"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","a2dc9668f2cf170fe3efeb263128b0e7"],["/img/tag_img.jpg","e52cc0e889d7c9bff36997cf30765856"],["/index.html","6de26f99310cf51ecd79caac73919794"],["/js/main.js","cb1293dd47e361d4784be03a6788eaf7"],["/js/search/algolia.js","c361589555f3c5138d4a7cd5f71b889a"],["/js/search/local-search.js","067bcc51ed4388f87040ab516569f9e6"],["/js/tw_cn.js","fd2faf7f2f71df78dd71f5e441819b9c"],["/js/utils.js","80c3d558b0800ac8755dc771c68049a2"],["/links/index.html","ff4075faba68ac4af5b91e5cdc3e215a"],["/page/2/index.html","d735e180215ab64f0d406c95d050460f"],["/page/3/index.html","cff3843d30276b85f89d41c09900b344"],["/post/13022a98.html","7e18e5216e45e601c192747de82ba3bf"],["/post/200515.html","bb3f011238f2d40a1cbb786bd78d3091"],["/post/200517.html","a85c9e6120d0d7714cfc1ec2f33a609e"],["/post/200518.html","366f4186a8bdb1159f6b1d849b73365e"],["/post/210315.html","c79cd8419ff90e4f2b6370a41186fd0e"],["/post/210319.html","84f7fa7a87e7d66b300dbdcc3b29e160"],["/post/2103191.html","5a0bb5ba8f30b7db30778437fab2d502"],["/post/2103192.html","0506639f1a261f5052479cfa029257be"],["/post/210626.html","6ebe3bc7be68ac676aa6ec0d428089a6"],["/post/210801.html","e830c4d745a26a78735a254512f5c1d5"],["/post/35c92e1a.html","0fa84a8fdb81b97b89accb821c08bb1b"],["/post/3afe2615.html","d6125f59e6260bbe19771af6ffcbf360"],["/post/4581e758.html","2881b4542843017397f9910c44fa4a05"],["/post/61443.html","82481961b3ae0603d4f06921feb50cfd"],["/post/657905a1.html","64bc516a727c30c2058ca1e281b30a47"],["/post/76e0150d.html","62f4325b708c98de6adcbfc27ddf2dba"],["/post/80fdc049.html","af53c403f93fe63f5844f555d5952f64"],["/post/a3146603.html","abe728b64a6bb61299d923c5f24d9202"],["/post/a66fd0fd.html","92bed374f434ccc140e5d4565e28f58b"],["/post/a6e75a2b.html","075856bf35a0940c0e4db9513f4320a4"],["/post/aac6bd89.html","2aa580b92c04a3b318ea26f106be9807"],["/post/abae461c.html","1f7cd9025a4e1715b1057f30c99a28e7"],["/post/aof3dfe.html","878165aecd23e1b072f3d17b486e6853"],["/post/b5331bb6.html","538cc97d97c473ba25ef7484a7a865cb"],["/post/b8091e0.html","815f5935ad290c0b5e44181be4ce0142"],["/post/c8411948.html","9417d3bf09336b5ad1e1396dc9fe2d91"],["/post/db4a72da.html","395ad93b520c49c231b297e84df3c75b"],["/post/fa31a270.html","a37e93e125d46cd6f4384f33a430f1db"],["/post/fabc15fe.html","4604c0cd138f58accf333f9ce9f6af0a"],["/sw-register.js","a31712960fcd6610d62f6c82af901814"],["/tags/Chart/index.html","edb5f018d10799c4f6a35559c2131685"],["/tags/ESXi/index.html","61bbec3248c2938023eb61bafb55e03e"],["/tags/Echarts/index.html","0ce879c885235f2d15993251d8344ac2"],["/tags/H3C/index.html","16e9e9652b9471584d22f2caf8ae749c"],["/tags/Markdown/index.html","0a2f0ccade799962a3f10658afea8b64"],["/tags/VMware/index.html","22ef011067349567e7fe56b77ce4fde3"],["/tags/Windows-Server/index.html","eec61f5faaafce3b7d69fdc59fe396f0"],["/tags/Workstation/index.html","71731556a8b26930ea7c27de529eb939"],["/tags/butterfly/index.html","de7bfd39e0a15ce9fac0ed6d4949d42b"],["/tags/hexo/index.html","4da8597c3e12b4a74878a2bd9124027f"],["/tags/index.html","5abb9bbb03fc1ba37e2281ada1fb7c7c"],["/tags/vCenter/index.html","b26b963fd11f70fb789e4dca53324708"],["/tags/vSphere/index.html","26f798f20cdf1de6e7ebac80df4c6a6a"],["/tags/华为/index.html","7ea9773f46eff036df1285c5f222572f"],["/tags/模拟器/index.html","78c11bc86918319c089a568590bf89de"],["/tags/网络/index.html","914f6594eadbe5706cf54c08992dd0e6"],["/tags/网络基础知识/index.html","6c92f29a444de49f2eaf081afe1e2f98"],["/tags/锐捷/index.html","1c7af316ecb930729bc01029c8b93f2b"],["/vCenter/index.html","a5713aab9e365f2ec9f86aee0493f0b5"],["/vCloud-Director/index.html","c807266fed589a2506662be55e116ebd"],["/vSAN/index.html","f969ecb9845f372a7b082a5a83f7d3d9"],["/vSphere/index.html","fba00c2532ed4033a8b52cfd3592db12"]];
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
