/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/KVM/index.html","201cbd6d4322c6fbd43fe0baa72d33a0"],["/NSX/index.html","f0288c8b37f54178c681631569803ed5"],["/Storage/index.html","da00eac8177604d98835f113f8799e2b"],["/Veeam/index.html","51b3ee80c166bbeafa623eca43560dbf"],["/Veritas/index.html","c7c1a651f5993558716d290e7ccc1ed4"],["/about/index.html","3a935829f4df27edb2729368506b825b"],["/archives/2020/05/index.html","d5534f5cade287966986d12cf00517f3"],["/archives/2020/06/index.html","c025f1845233874386d5ba9f06ca33da"],["/archives/2020/08/index.html","18263e6f7e5430e77cca5aa035184c0d"],["/archives/2020/index.html","b46117e0d46e98d829770618cfcf737d"],["/archives/2021/03/index.html","3ad07801c61d238880180a4f95720b90"],["/archives/2021/06/index.html","732a2e88f33fb9dffd86b4935a7ea513"],["/archives/2021/07/index.html","db32f4c1ad026635ef88d3a40a8eecb3"],["/archives/2021/08/index.html","748c43f9d020abc4fa6c9669f1b3865f"],["/archives/2021/index.html","46d22922a4edcc6b52be489b84fbccdf"],["/archives/2021/page/2/index.html","b40bc761c314d88700ce0bc27ad44019"],["/archives/2022/03/index.html","320c5b1e2aa792d29b42975497b9f354"],["/archives/2022/04/index.html","e7bcd6e8154c42c70f8ef583188e09da"],["/archives/2022/index.html","a6f0f182d8b1a4f395c4b6702a683451"],["/archives/2024/02/index.html","cd706c5d7eaf04840784d7e6970d79e8"],["/archives/2024/index.html","c4f37d303fc68b05934e46f5a8414e0e"],["/archives/index.html","a4cb9e44b3cccd3ed6944411c417454c"],["/archives/page/2/index.html","a1c274e6771ce78275c9a1e368d1c7a0"],["/archives/page/3/index.html","d1815d6612e000a68c91397334c3b037"],["/categories/index.html","d0d7b0bbd26ebc028f225dc1e0c09ad5"],["/categories/学习笔记/index.html","d779630d561e6348e4a78f8c1c20a1c4"],["/categories/网站建设/hexo/index.html","bf21244db2561bfd08f4e03bc648226c"],["/categories/网站建设/index.html","25481fc7c72d9ede2f33ea549dff3727"],["/categories/网络相关/EvE-NG/index.html","5a927f49bfc3075862b3215935338407"],["/categories/网络相关/H3C/index.html","a8e46f2e0e90f616f11c86857afbc15b"],["/categories/网络相关/index.html","0b247d87b09155e1c764024e4dee04d9"],["/categories/网络相关/华为/index.html","d8f51a2024e3b3e49c48c6f2d00bd20f"],["/categories/网络相关/锐捷/index.html","c3e8da269aa621bd3f5010b39ae2eea9"],["/categories/虚拟化/VMware/index.html","92d7cee108349e84593bf5b2fc8f7b0f"],["/categories/虚拟化/index.html","eb0327706ee194c4c51d5d1da9778262"],["/categories/虚拟化/page/2/index.html","09dee6c3ea5743ce9b3fb8f43b333b4f"],["/categories/虚拟化/vSphere/VMware/index.html","b1bca26359d638199643e5abcca0256a"],["/categories/虚拟化/vSphere/index.html","fbb8266bae2e8762c99b47f38d2500fb"],["/charts/index.html","8843382dd30857a853d84e0efcc4f04d"],["/comment/index.html","7dd8df3df2d81ec9bb76430ccb2b40f8"],["/css/custom.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/index.css","3638f07ac1f5a4825e9ab18d1c410ca0"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/Avatar.png","f077e9dd4777008308812082b610d248"],["/img/alipay.jpg","fa447508817875e5c8d7e52fcbe56696"],["/img/archive.jpg","d816a4e7454cca4f675ba7cfe5b8224f"],["/img/background.jpg","1229144fc682676e7a2b49e1ee309b98"],["/img/default_top_img.jpg","84ea6f3cf2e063389c57d517d1694b3a"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","a2dc9668f2cf170fe3efeb263128b0e7"],["/img/tag_img.jpg","e52cc0e889d7c9bff36997cf30765856"],["/index.html","ca86e1d6d769feb8a4ea635d4fcbfcb3"],["/js/main.js","cb1293dd47e361d4784be03a6788eaf7"],["/js/search/algolia.js","c361589555f3c5138d4a7cd5f71b889a"],["/js/search/local-search.js","067bcc51ed4388f87040ab516569f9e6"],["/js/tw_cn.js","fd2faf7f2f71df78dd71f5e441819b9c"],["/js/utils.js","80c3d558b0800ac8755dc771c68049a2"],["/links/index.html","027eb784e513ebe0c17c26ff65ff45df"],["/page/2/index.html","94bdfef701a07cbb8e6d9f7c9edbaaca"],["/page/3/index.html","9308f475e83eb4e898cbfb4bb10d4f70"],["/post/13022a98.html","27923b4ac0dedcb877b64498ed02477a"],["/post/200515.html","05616819632ae88436fa0a9d2d7705ea"],["/post/200517.html","5ab7b31bd1a3a30ccf50c579914297cf"],["/post/200518.html","c004e714071543c5d633f86eb27fec53"],["/post/210315.html","3d4308d53eb2839a2401f0aecc66a2b0"],["/post/210319.html","d2dedc796c94702185b378bbe474f371"],["/post/2103191.html","f037398926fbe064422c2803d0cdcf63"],["/post/2103192.html","e284ae7974cc428de631132c4c0770eb"],["/post/210626.html","a680986f95f838ff68555b1ebcb29a65"],["/post/210801.html","ad8c44946784438fc01e56fdcdd4cca4"],["/post/35c92e1a.html","43fc8123f1e88ee909db53c3da7e0a9e"],["/post/3afe2615.html","22fafa54f2e562c47a2a81ff7b00e0b5"],["/post/4581e758.html","f59504505b9f62f52e3528c8eae66193"],["/post/61443.html","e35711c411146782de6b7aa9e52d34d8"],["/post/657905a1.html","1906d5873d956b84a9ba63f8d6e06879"],["/post/76e0150d.html","6ca167bc0e76c277163c294ed0b6c234"],["/post/80fdc049.html","efb801d5e6c6599861cdff261d2533f4"],["/post/a3146603.html","a498df32b6214badecf4c7732e97a5fc"],["/post/a66fd0fd.html","2d8691c63a205d6af7d211b06576c8e5"],["/post/a6e75a2b.html","8de13cf9c5d758ac71ba9498680623c4"],["/post/aac6bd89.html","07fe82a33e56ec9cd25cbe06aebd37f9"],["/post/abae461c.html","b69791992ad268d26f424fa84840fc19"],["/post/aof3dfe.html","a397651ac63fb2fd0a8b5ab931113a29"],["/post/b5331bb6.html","dc7fb0940a59796760ab12255e7b1557"],["/post/b8091e0.html","ac649d258430b36b4b387702365a82dd"],["/post/c8411948.html","aa464a01408eaea781e00ef0b419f8d8"],["/post/db4a72da.html","97968cd08b37a5a521065736fa21416e"],["/post/fa31a270.html","acaaa4c30fd5bda198efee8f2182c183"],["/post/fabc15fe.html","16a7eec200e27b8d12588e00811350d1"],["/sw-register.js","31b4468857104583151590329725812b"],["/tags/Chart/index.html","4c8f16388e82a997d766857357d9962e"],["/tags/ESXi/index.html","4d408ed1f62c8accf5f17ad69cd871fc"],["/tags/Echarts/index.html","b1e4b28da889f7998af8d6fd89ee7852"],["/tags/H3C/index.html","5d79b3281cb8ca848063261ac2a0aeb7"],["/tags/Markdown/index.html","30649045252ae50195945235934c64e6"],["/tags/VMware/index.html","25b6a8810b0283df8d8d0f231c7dc125"],["/tags/Windows-Server/index.html","bb900596d90934b5cd0e4fa77d9d33eb"],["/tags/Workstation/index.html","5152ee42155280df484fac49e02e6582"],["/tags/butterfly/index.html","c3655f08b9efc501494d1e437c4c780d"],["/tags/hexo/index.html","ba9937357bc3904868cbc9511b3c924f"],["/tags/index.html","c5a0f8587a1bc1349519e2d6c1a3de28"],["/tags/vCenter/index.html","5b3fa32cb66d3f8f6ba79687eaede0ef"],["/tags/vSphere/index.html","3b8032f25756447a14caf272c3d3e08a"],["/tags/华为/index.html","0e15b9879a2b86f00316ef9ea465b3d4"],["/tags/模拟器/index.html","36804c8d4d569a67010de76b4768b97d"],["/tags/网络/index.html","4b7b979fe060e07074653667ececff5e"],["/tags/网络基础知识/index.html","360c6178ef260785a302db6bcc023b12"],["/tags/锐捷/index.html","d8e725fe4ce236897dfc7b1075248ffd"],["/vCenter/index.html","ec76f80c6f59a5f3d9e2a49f046895a5"],["/vCloud-Director/index.html","0497c854af9d2514282c7a54cc2649de"],["/vSAN/index.html","692c838fad81c437b727ebb84ae134e5"],["/vSphere/index.html","647d824b6bf113886bceb71dca86b87b"]];
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
