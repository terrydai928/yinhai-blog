/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/KVM/index.html","cb60018f7ac21d932b21713130c0f6a9"],["/NSX/index.html","17e2e80241542a134e94466e4345d50d"],["/Storage/index.html","003ee900bab8ee831f17b500cbc3fc29"],["/Veeam/index.html","20b69a3cf9a1c7b21d4441fd639366f8"],["/Veritas/index.html","5ca1fbcb28d35581d015c76376f4eddc"],["/about/index.html","aadf18560e97a4cdf71474460496491a"],["/archives/2020/05/index.html","554d7123a08fc2ef044de40dbbc14799"],["/archives/2020/06/index.html","52d3fe50aee4637cd6af206dd514b570"],["/archives/2020/08/index.html","c1f731477f66d1c1d0fbeaf6c0aebd56"],["/archives/2020/index.html","7a4cfbd86a494e8cc799b9595ff2ef6e"],["/archives/2021/03/index.html","0b59745a128fe1eabb08a7956b50eea1"],["/archives/2021/06/index.html","eea4abe7340ea81249be37b0af57ea12"],["/archives/2021/07/index.html","2173a7659de7992dd9202ee18ac51038"],["/archives/2021/08/index.html","7fd7b8b52f002b6b9197ff50214999ab"],["/archives/2021/index.html","6375662a242062a7e034f280c88fc5bd"],["/archives/2021/page/2/index.html","106c757d5ec79f12c94b7e5b4d2216b6"],["/archives/2022/03/index.html","d6df9cbd33969d5cdabde6ad6693ab2a"],["/archives/2022/04/index.html","6cad488157fc1941317361ac2f058858"],["/archives/2022/index.html","40bb8457d7a9e4757b84f9001081f6b3"],["/archives/2024/02/index.html","9adcf3654dfada1111a7b4835c81bb43"],["/archives/2024/index.html","85aa77e1d74de46e5bc4505a2bf4d953"],["/archives/index.html","ef7ae350c2e54a33f62621c9b813a5a9"],["/archives/page/2/index.html","13ed768d359fe5ad95b446c61df97dae"],["/archives/page/3/index.html","777f41d3563b0cf51a46b0f3e3861a9d"],["/categories/index.html","b658e947bd527b9c57c9f00838224125"],["/categories/学习笔记/index.html","73ad3fb554ddb1431cb9d9ac09389009"],["/categories/网站建设/hexo/index.html","78d7d369ab68f6c992b3efe43081bcd0"],["/categories/网站建设/index.html","61be66d63019dfd089af39277cae59f0"],["/categories/网络相关/EvE-NG/index.html","f7f069c8ff40b0ad4b80cdfb335b94d8"],["/categories/网络相关/H3C/index.html","ceec8205922f85ab4c338709bb37b684"],["/categories/网络相关/index.html","9a07acb018d7f67974a47507ad0c5433"],["/categories/网络相关/华为/index.html","8769cf44d550183487d73ecca5e36d2a"],["/categories/网络相关/锐捷/index.html","5a2310176fe6da571d8f1e28d2943168"],["/categories/虚拟化/VMware/index.html","caaef0671e8a4c73b9313874e73621fa"],["/categories/虚拟化/index.html","de8b550a0be529eea340eed5dd52fdbd"],["/categories/虚拟化/page/2/index.html","bacae44eeb6c139bfd4cfbd32e679287"],["/categories/虚拟化/vSphere/VMware/index.html","77cb3ea77c8f21490898d17eb5f56230"],["/categories/虚拟化/vSphere/index.html","aa96431944849432c38d3a1143143062"],["/charts/index.html","253dae3a25624d2985b19820ea2da776"],["/comment/index.html","48e06336a7b607139743967141a10ef1"],["/css/custom.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/index.css","3638f07ac1f5a4825e9ab18d1c410ca0"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/Avatar.png","f077e9dd4777008308812082b610d248"],["/img/alipay.jpg","fa447508817875e5c8d7e52fcbe56696"],["/img/archive.jpg","d816a4e7454cca4f675ba7cfe5b8224f"],["/img/background.jpg","1229144fc682676e7a2b49e1ee309b98"],["/img/default_top_img.jpg","84ea6f3cf2e063389c57d517d1694b3a"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","a2dc9668f2cf170fe3efeb263128b0e7"],["/img/tag_img.jpg","e52cc0e889d7c9bff36997cf30765856"],["/index.html","5cc2923044c6a72fe5c5ecfe1add0173"],["/js/main.js","cb1293dd47e361d4784be03a6788eaf7"],["/js/search/algolia.js","c361589555f3c5138d4a7cd5f71b889a"],["/js/search/local-search.js","067bcc51ed4388f87040ab516569f9e6"],["/js/tw_cn.js","fd2faf7f2f71df78dd71f5e441819b9c"],["/js/utils.js","80c3d558b0800ac8755dc771c68049a2"],["/links/index.html","248864382447995f7fa2f40aa483ce12"],["/page/2/index.html","06f89f3ccfd6400a88e26256273d5fac"],["/page/3/index.html","01cad406cc2f429aeb400af97c260606"],["/post/13022a98.html","4be9dc9fd6c4ccd72880ad085db41360"],["/post/200515.html","b177df1da388efb0d18d35636d3172e1"],["/post/200517.html","b8bdbc257e3fe44be5d0882804fee122"],["/post/200518.html","c004e714071543c5d633f86eb27fec53"],["/post/210315.html","97c44e435a59d8e6a579397f75cfee13"],["/post/210319.html","dc609dc71a30d1934ea7f0b0e1157f7c"],["/post/2103191.html","d439a64a2117f05629c1a04df1c35cc5"],["/post/2103192.html","ef97ae9e28d4151509a6f132fb2989a3"],["/post/210626.html","56a54d5b6a6494bbf39311697c1b7bb9"],["/post/210801.html","d648f8ad265235d6859fa92e39adf458"],["/post/35c92e1a.html","11dfcd346baa3e5cbdb0d967a2c5a34d"],["/post/3afe2615.html","a111f33d3f8f3aa1a13f57252272ec47"],["/post/4581e758.html","310f334df594fcd92c4f8f0cf58dda8f"],["/post/61443.html","887747ec25be926d9662cc3e1abb087c"],["/post/657905a1.html","3ff1d664b0e9afde7beec89b617b4325"],["/post/76e0150d.html","63b0b567a3537ea7fd0ca148727aa142"],["/post/80fdc049.html","efb801d5e6c6599861cdff261d2533f4"],["/post/a3146603.html","18fd6646790a82c58280ec4073061d18"],["/post/a66fd0fd.html","79a24f5457a583818bcd9ca6535bd1e5"],["/post/a6e75a2b.html","3513c464534fe67ec26a08fe6e307901"],["/post/aac6bd89.html","57534bd2f5fe50f15e144eff19286a97"],["/post/abae461c.html","b97332690ffcec9361ddc63d4e784f99"],["/post/aof3dfe.html","f4952c2d63033b4dd9ffaa99a79797c7"],["/post/b5331bb6.html","41f2c128efba2ef81b83e4e563b5a0d3"],["/post/b8091e0.html","1cb74397da5d4ca1680ea72110b3486f"],["/post/c8411948.html","aa464a01408eaea781e00ef0b419f8d8"],["/post/db4a72da.html","97968cd08b37a5a521065736fa21416e"],["/post/fa31a270.html","af6761b5222b2f4c9c16f5268797f50e"],["/post/fabc15fe.html","0a9b680ac687d7e4ac641142809d270f"],["/sw-register.js","8a1c911d96c6902c6be2d2c1e94d4f00"],["/tags/Chart/index.html","8a324e25eca409c7c0eb0a079a1b6d57"],["/tags/ESXi/index.html","5640fa8f806987e5151841e7314310cd"],["/tags/Echarts/index.html","92867bb88c38cf7e2178ff2b6b19f3ac"],["/tags/H3C/index.html","fcf6fdf7c6ca4fa03ef896e410a2ccd5"],["/tags/Markdown/index.html","e2020b84b181e37be9ea45a7cde0f291"],["/tags/VMware/index.html","7e690eee0551dd8a925e15da8a19fdc7"],["/tags/Windows-Server/index.html","bddba07b9bafde870b13ffebdef40137"],["/tags/Workstation/index.html","e951c63f8d6cb6f45ea177e6dfc3eac4"],["/tags/butterfly/index.html","e6bf1e9fe78c2a0458592d24bb113923"],["/tags/hexo/index.html","86f64a306cb07354b96ff9f2f3502974"],["/tags/index.html","26746cfc1d49b1eef87fdab7bfc18328"],["/tags/vCenter/index.html","8b12a8ee399314fe90f4cbaf7cdb897f"],["/tags/vSphere/index.html","17d961750e67adcc7e78e560dc522628"],["/tags/华为/index.html","a3b0b75891ef35243d5b78cadb1bdb48"],["/tags/模拟器/index.html","f0a1a0e53019f5a4e410742a3cf50f38"],["/tags/网络/index.html","ad4b33d07d363375585b89ffd74dd592"],["/tags/网络基础知识/index.html","a61c4e50cf2ba1b0c1278a32f8d76948"],["/tags/锐捷/index.html","75d3a96b33f2b9d0cd02172b32bad5be"],["/vCenter/index.html","3d8615241b812acf1b74eb4092970859"],["/vCloud-Director/index.html","133d298be39e654a4f89aaf52d0c1987"],["/vSAN/index.html","0b44a4735de403cb47d7f18337d67e7c"],["/vSphere/index.html","ea3e64f7e5a607ad1e2ae9d42cbee3bc"]];
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
