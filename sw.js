/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/KVM/index.html","fc3ca4292643d25944c545f1a459302a"],["/NSX/index.html","d87c994af2f42acc38d4d5738413b584"],["/Storage/index.html","49afdbd90a489c7ae8695623dfaa2f0a"],["/Veeam/index.html","f2d21e83456a0dae5478b5e53110b292"],["/Veritas/index.html","3c6af58b72e039f4becc04d627236601"],["/about/index.html","e43b30f2d831d2666a87f99c7535c15c"],["/archives/2020/05/index.html","bc59c7e6087732972cfedd8dbca46c63"],["/archives/2020/06/index.html","c7b200d23ac65dc65736aabbd8718896"],["/archives/2020/08/index.html","ae6615c7445db4dc35160f06b7866f49"],["/archives/2020/index.html","6f184654f67585c8d4a020697ff18cda"],["/archives/2021/03/index.html","222ee886ae1e453ec8e0dedce9e1aa14"],["/archives/2021/06/index.html","e6520cc6de4e60448df6057889b2e83c"],["/archives/2021/07/index.html","e09b0ca4a281becf4e44bd9f06c40524"],["/archives/2021/08/index.html","d56829b1ba99adceb722706c0fdf3c4c"],["/archives/2021/index.html","c150f9a59f57c67f8da0576e2b84892f"],["/archives/2021/page/2/index.html","a60b7e13df696499fb3d1e36dde61ead"],["/archives/2022/03/index.html","a15dcdb17487d13f9dc6deba2e568e48"],["/archives/2022/04/index.html","88e04a46043c537fc79e291eaba5b720"],["/archives/2022/index.html","60b944981ce95d893391c609ad9ce97c"],["/archives/2024/02/index.html","7a3bc912cd59e344f720d42efd705774"],["/archives/2024/index.html","a6ae7c9a6964419c3bb9325c734b1d76"],["/archives/index.html","88ccb2c99d1f0f75b6b3b5e0e4b62b9f"],["/archives/page/2/index.html","1669f0d366f3b73910ae6297190e3edf"],["/archives/page/3/index.html","4486ae2a6fb61cd718dd34d9caa5cc6d"],["/categories/index.html","0de7a7c7145d4ccafa1f61c664f8b6bb"],["/categories/学习笔记/index.html","12d07cd87b58a0d87b082ee0b96e4460"],["/categories/网站建设/hexo/index.html","926ddb2dfe69e41e6c65b8dc409558ff"],["/categories/网站建设/index.html","e4377f4e344185551a7a2202099436f9"],["/categories/网络相关/EvE-NG/index.html","163d1434998b73ba2f4659e14bc5329c"],["/categories/网络相关/H3C/index.html","0e91ad850e8f61dcb9b1aa92903714fa"],["/categories/网络相关/index.html","d510ad3111f7ca5e0976f458a35ed95e"],["/categories/网络相关/华为/index.html","722f4f8290f5b7f55b657fc8439cadae"],["/categories/网络相关/锐捷/index.html","dd973a0efd31d1a1a36d3ad5aa0aab2f"],["/categories/虚拟化/VMware/index.html","bc1273be56b0349ad829e25949dcf4de"],["/categories/虚拟化/index.html","be44e3d66067a99bf778e209cdb7b0a3"],["/categories/虚拟化/page/2/index.html","6fe9a90cf6a078bb55df8988a0afb32b"],["/categories/虚拟化/vSphere/VMware/index.html","bc28cff1b3dbdba86038353c4d4c4599"],["/categories/虚拟化/vSphere/index.html","2a297c54321de08614a0b71cdb80d4f3"],["/charts/index.html","10aecc1f195006944b565961018efed8"],["/comment/index.html","4785d03835e3e4bc56598e5e985ded48"],["/css/custom.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/index.css","b3f2a6ce45a0b5de37631f6b54d9ef16"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/Avatar.png","f077e9dd4777008308812082b610d248"],["/img/alipay.jpg","fa447508817875e5c8d7e52fcbe56696"],["/img/archive.jpg","d816a4e7454cca4f675ba7cfe5b8224f"],["/img/background.jpg","1229144fc682676e7a2b49e1ee309b98"],["/img/default_top_img.jpg","84ea6f3cf2e063389c57d517d1694b3a"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","a2dc9668f2cf170fe3efeb263128b0e7"],["/img/tag_img.jpg","e52cc0e889d7c9bff36997cf30765856"],["/index.html","42dea7795588c3fa9ca766700330afc2"],["/js/main.js","cb1293dd47e361d4784be03a6788eaf7"],["/js/search/algolia.js","c361589555f3c5138d4a7cd5f71b889a"],["/js/search/local-search.js","067bcc51ed4388f87040ab516569f9e6"],["/js/tw_cn.js","fd2faf7f2f71df78dd71f5e441819b9c"],["/js/utils.js","80c3d558b0800ac8755dc771c68049a2"],["/links/index.html","4756e593c91ed787958af01f025f1498"],["/page/2/index.html","cac012e271d007d8316d4fc39f842e94"],["/page/3/index.html","d2da11e6e666b9ae9ebeba83a8e01b99"],["/post/13022a98.html","c9f78d88abcb64be910c27dac0af648d"],["/post/200515.html","8222cb5099ab77b07cf14a10a0377095"],["/post/200517.html","9aa188d081b5d6657a917a28b4108e02"],["/post/200518.html","60e9eed3b78d0f7a189e9248c57413bf"],["/post/210315.html","02bcbf042404bbf67ea6f4b53ff00523"],["/post/210319.html","b8ed51df5d02521b465c9e46c6b6480b"],["/post/2103191.html","7366918e5c2772bef4b99bef88278b8a"],["/post/2103192.html","f22d4c1af87f9907ffe1e9121e2f4764"],["/post/210626.html","23858df65e3f5b70cc142fc12a43d540"],["/post/210801.html","600fb20ff177a452759d8b910a437ebb"],["/post/35c92e1a.html","0bc9332fa69fbfcbebada2c1aee597e6"],["/post/3afe2615.html","369f09f529a9d1d71b903b0fe3a35038"],["/post/4581e758.html","8d73c4188e142d966101df9bada1a325"],["/post/61443.html","ca229c049872c3f51d91df65b4dac80e"],["/post/657905a1.html","1b754c7ac245dce82f2978f131636618"],["/post/76e0150d.html","5d3f1da03a4637b2e34981f07b5ec06f"],["/post/80fdc049.html","776856c1a566a7d35be9d0dcb62f8de4"],["/post/a3146603.html","b3dc558b02a9cfeaa0bf8a521c69b9e5"],["/post/a66fd0fd.html","dcf91b7441f7352b7ea1c64136be825c"],["/post/a6e75a2b.html","e9f431ea7b0626dd70ba6cbbef44d48e"],["/post/aac6bd89.html","b409dc5ae21a2ae0ed981e9ec19b6ff8"],["/post/abae461c.html","97c8c23e44494a8e95cf9a29583cc210"],["/post/aof3dfe.html","e2b484b8d0c25323bd5af725a5cde7fa"],["/post/b5331bb6.html","a8c28589b32f1784ddc5ab836d204fac"],["/post/b8091e0.html","5a7c22af89d1f8bc6dbc9a75dd011faa"],["/post/c8411948.html","c72664ab1ddc167a68167ba9f906dfb5"],["/post/db4a72da.html","793daead23769f7e712df60b700945c3"],["/post/fa31a270.html","2be73800b0a67edf74dd6df03cbb7e83"],["/post/fabc15fe.html","88ab7982f80ab81e3d3df07e46f223db"],["/sw-register.js","8771db51a92258cc81bbc319b0b654e4"],["/tags/Chart/index.html","c539ea42de0ea3289e73b5b0afd49609"],["/tags/ESXi/index.html","b0d4a7ea202622547324d807fba0a68d"],["/tags/Echarts/index.html","701f58918345dd7a00fab609212ac769"],["/tags/H3C/index.html","f814b2a3367918b20323e5caf494404d"],["/tags/Markdown/index.html","764feb4cfcecb3079e9347910b8ff456"],["/tags/VMware/index.html","1ca03c9d17ad4b5fc9bd24eb67fc07ec"],["/tags/Windows-Server/index.html","57480cc88fb5265aaea66b2d2e33cee3"],["/tags/Workstation/index.html","5fb916615e7823c6951c03f5dea2e441"],["/tags/butterfly/index.html","dd4d177113ccfb458fb5a430530777dd"],["/tags/hexo/index.html","45c5df135046503250e89579e6e3448a"],["/tags/index.html","72b53b996c29432f867d5364275f2525"],["/tags/vCenter/index.html","9ce007e5cdc8745dd427cfde06851fcb"],["/tags/vSphere/index.html","725ffbc34573ad59fc2c9742b1f62b87"],["/tags/华为/index.html","81280921103b8c335b144163888d9772"],["/tags/模拟器/index.html","f26b8fa1b7921f4d81022ea70527a5c7"],["/tags/网络/index.html","f3cca26a9edbe73f15ae5380cf9804c2"],["/tags/网络基础知识/index.html","b8f6b1038d4d25456f0a967b8007400a"],["/tags/锐捷/index.html","58c4d53aaa24d076bf80d3694fa72d7a"],["/vCenter/index.html","985dc54b3973e3b8f060459dbecb0af1"],["/vCloud-Director/index.html","946634d6aaa5c3b53f66d6c59f15b601"],["/vSAN/index.html","6baba4718406fe88b90b91e8a3b3a32e"],["/vSphere/index.html","01501b08d906c7cf01caec97306e6e1e"]];
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
