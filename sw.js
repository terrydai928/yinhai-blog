/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/KVM/index.html","d38ea89653b63e3e2abda12d0f60fb0c"],["/NSX/index.html","9fd3d40a14e3d6fa039e6e61224c1d64"],["/Storage/index.html","06e41c543ed88d28d17f758ecf2032b9"],["/Veeam/index.html","a21d4895e11e7b2a67e0fc30b4594538"],["/Veritas/index.html","904f76185cbbab2e8a7c400d094ee1a7"],["/about/index.html","8470332b4cbcba4619df523917e2c05a"],["/archives/2020/05/index.html","f71ba49538006086be3125b2f3b5fc32"],["/archives/2020/06/index.html","a4e77e94fe7156f2ad1be3a640126a92"],["/archives/2020/08/index.html","0ce95e7afdeef6a5a7d7d407e7798185"],["/archives/2020/index.html","9bf32df21535f9ba009a3cfb158dee9b"],["/archives/2021/03/index.html","eb75d4b1a356866b3d73f098dacca0f2"],["/archives/2021/06/index.html","2db736c328e613bbdd1c4ea25c39e12c"],["/archives/2021/07/index.html","cb0c7517dd7675b8fcd5dd5fa602fbfc"],["/archives/2021/08/index.html","80e259ce3414022df96858635cc34806"],["/archives/2021/index.html","903b3d98bbd128217b5125f43401ba58"],["/archives/2021/page/2/index.html","b8e1438b5727db094e032c08c82d12ca"],["/archives/2022/03/index.html","a2335e55a0eb392384f7a5205458c2cb"],["/archives/2022/04/index.html","761b31cd00617a7023b89aa8fa7b843b"],["/archives/2022/index.html","3549ec17bceb11c38c5f55a42850f058"],["/archives/2024/02/index.html","5cbd472cbd72ac05b8a332bbb431ba09"],["/archives/2024/index.html","e7e69dab2a187e1b344d21e654740441"],["/archives/index.html","febddee787f7cc523de8589c6e5b7da2"],["/archives/page/2/index.html","b09b17d920627bc44c1ef2e8d6331553"],["/archives/page/3/index.html","8c6fc1211b9c62eafbd8ed8c688db17b"],["/categories/index.html","e23a622e428d86101c808de6b6b01aaa"],["/categories/学习笔记/index.html","d806fe92983f3271d445bd7c9b326bae"],["/categories/网站建设/hexo/index.html","28e57aaae644877a73f9ea001596a25c"],["/categories/网站建设/index.html","18842d3ac8d177ee94d2f2fa1294226b"],["/categories/网络相关/EvE-NG/index.html","b7e6a30f8d4ed3b8244492cf0c261966"],["/categories/网络相关/H3C/index.html","e58e4ccb1a18c409d62fb2dc2beb389d"],["/categories/网络相关/index.html","0b87993cdefa3709219024fddd2c93be"],["/categories/网络相关/华为/index.html","4180c61d99e579d0bc1f9af7432d7a80"],["/categories/网络相关/锐捷/index.html","4018464828a09ce9e07feabc2b805dbc"],["/categories/虚拟化/VMware/index.html","3b117730000dfa9c7cbfdecc5e346a35"],["/categories/虚拟化/index.html","e33b6e892dd95ce06dce1715eef2f6c6"],["/categories/虚拟化/page/2/index.html","9154ea3eb9ea362c96841d3cab9b7da9"],["/categories/虚拟化/vSphere/VMware/index.html","36113c346213eec2b5984bb57e4dc541"],["/categories/虚拟化/vSphere/index.html","5474eaf9fe71970c10dd10273da8a091"],["/charts/index.html","e261e430c95a5cd9b0858871473e63fc"],["/comment/index.html","c0a18fdf17232e2e1e68e2c5692b8789"],["/css/custom.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/index.css","b3f2a6ce45a0b5de37631f6b54d9ef16"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/Avatar.png","f077e9dd4777008308812082b610d248"],["/img/alipay.jpg","fa447508817875e5c8d7e52fcbe56696"],["/img/archive.jpg","d816a4e7454cca4f675ba7cfe5b8224f"],["/img/background.jpg","1229144fc682676e7a2b49e1ee309b98"],["/img/default_top_img.jpg","84ea6f3cf2e063389c57d517d1694b3a"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","a2dc9668f2cf170fe3efeb263128b0e7"],["/img/tag_img.jpg","e52cc0e889d7c9bff36997cf30765856"],["/index.html","a63812cb0386e6b1417b17e95eb4693e"],["/js/main.js","cb1293dd47e361d4784be03a6788eaf7"],["/js/search/algolia.js","c361589555f3c5138d4a7cd5f71b889a"],["/js/search/local-search.js","067bcc51ed4388f87040ab516569f9e6"],["/js/tw_cn.js","fd2faf7f2f71df78dd71f5e441819b9c"],["/js/utils.js","80c3d558b0800ac8755dc771c68049a2"],["/links/index.html","8c50b0b94d2e1076f3e137ad3c9d3de4"],["/page/2/index.html","2557ec40173f9ba6d8f4ec3a50a54153"],["/page/3/index.html","93da2787ef20117459a7d90f7f210010"],["/post/13022a98.html","dc55e9ec14ec8f0a07946d854ed35dc4"],["/post/200515.html","41e1bb12ef6b7107d6c7d1a5c2f9cf39"],["/post/200517.html","63d0885158cce429feeb149e6304d54b"],["/post/200518.html","d05c59f09b76694e4f04e69d55ee3f65"],["/post/210315.html","d1334475fcba5992dc0177fcf8073ad3"],["/post/210319.html","4490a9ab480777d966c0c6e5d6ec99b2"],["/post/2103191.html","e90e178c071a6b1162524965224cbb76"],["/post/2103192.html","cf776094a6c26c62880bfab2c0ba1592"],["/post/210626.html","c4ac1eb730337f72a9878f807719b40c"],["/post/210801.html","833b129ddff3887b846008ce1fe78172"],["/post/35c92e1a.html","7f6938b4aa4d66f714a3d6aa6fa9f1dd"],["/post/3afe2615.html","4e35089978b5be4dc2a2d59c46df6b11"],["/post/4581e758.html","6b444212e5b2fdcbfa8ae5447d856f4e"],["/post/61443.html","d81b36ec9f93e80005489890c96470db"],["/post/657905a1.html","ec9f9d385db1fa754a948f8648b9d9c4"],["/post/76e0150d.html","67a1be9e0621873655141a6f88bcc77a"],["/post/80fdc049.html","98a3c579a67db938cc49a9c8ccf852e3"],["/post/a3146603.html","5219912c9797a20915eb36798a2fed10"],["/post/a66fd0fd.html","5462194541af9b93639d43921df2007e"],["/post/a6e75a2b.html","563e557799e542cdb7455a719d414b7f"],["/post/aac6bd89.html","6f39ca3d6cd06b5df426b40de35dbb6e"],["/post/abae461c.html","01678c13ed1e3c93ebbb3219b53ce009"],["/post/aof3dfe.html","56f32378128bd08936c7246db44b2a9b"],["/post/b5331bb6.html","d5f5e3648026b94a0f04febbe1cb9b42"],["/post/b8091e0.html","eeaa8a62f5982eac92a6e89381ee0b1e"],["/post/c8411948.html","ef515ff8d0ea867dbf051695b49d23c9"],["/post/db4a72da.html","b141b93f957cc93ae88ffa45feb7f81c"],["/post/fa31a270.html","25ad6104f02628f3ff41e9e641d0825d"],["/post/fabc15fe.html","cf69250b3e12e6147575eeea50cf9b4c"],["/sw-register.js","0e496bcd4f65c2bcd073d6c00a39a9ec"],["/tags/Chart/index.html","c450d664817eddda299024399d3101fb"],["/tags/ESXi/index.html","e9df3e501c354cbd0d89e94f482e89c9"],["/tags/Echarts/index.html","36b966d1cf49a862a57d77f7f451f34c"],["/tags/H3C/index.html","a09c28b7dffadcd4ab46cbdfe5023e93"],["/tags/Markdown/index.html","6015bf488e3be7134bbca5e843be84e9"],["/tags/VMware/index.html","7bb4069beeb1702d27f8a0588b504fc4"],["/tags/Windows-Server/index.html","bb45e7344e682c94745c331f6cebcfc0"],["/tags/Workstation/index.html","8e661afd11bbb7d976c01c24f7d95115"],["/tags/butterfly/index.html","ee25f94712a3dd092b6920768380cc63"],["/tags/hexo/index.html","2ef7f9094cb05acc699db20faba407cb"],["/tags/index.html","920093dfa7ff2a2496d5ec6030ef3eb4"],["/tags/vCenter/index.html","b5f75cb632f0efb0cd3fcaf84297e3c3"],["/tags/vSphere/index.html","d41b96262b523d75bd5c009d28899f0b"],["/tags/华为/index.html","c3ccbee6ae263a3a54faf1f57a1781b4"],["/tags/模拟器/index.html","a07c0fa1ff0275043ab932353c7d73b5"],["/tags/网络/index.html","a2fdd5709e39d3fc44ffc3c631f7b8af"],["/tags/网络基础知识/index.html","988664bd0fcfde2b06fd29d1be7fd7e3"],["/tags/锐捷/index.html","c4957e6b51ed83f572a6be61a551ba78"],["/vCenter/index.html","cffe0f9675afd24c255541a0c0007725"],["/vCloud-Director/index.html","cf2f06ef888d8cec83e8f3f5fffb282f"],["/vSAN/index.html","0f51fc03c92ab9d161b4d3bf7d122b66"],["/vSphere/index.html","32c54d1b1f4e9930c3379b4b793a0ceb"]];
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
