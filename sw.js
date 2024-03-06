/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/KVM/index.html","62fc24ef1f967f53c0fecab26c3705fa"],["/NSX/index.html","3c05f0d724cd1ac413dbf99ef25e5068"],["/Storage/index.html","53fa585044abeafcda412598d2bf5e58"],["/Veeam/index.html","8f196db94cbdfe660afad65751842376"],["/Veritas/index.html","0ae74cd825e1ce98aef84da9c78cd0d7"],["/about/index.html","735caf93dd23fbdd961ec0d1085fe987"],["/archives/2020/05/index.html","053e6d8c1c7b517aed0a9d244575af1c"],["/archives/2020/06/index.html","18fa5440cd6d2d4388927600d4e74d64"],["/archives/2020/08/index.html","3801e139a4920dd815470d802e7b7686"],["/archives/2020/index.html","460437e2d4791a791c3c963a5b62cdcb"],["/archives/2021/03/index.html","a3caad11aa1c1927038868176ff37974"],["/archives/2021/06/index.html","eebf673ace25a15483fc208f02c8baf6"],["/archives/2021/07/index.html","071e5c3c775056172d1a100a5ac20073"],["/archives/2021/08/index.html","8f1656218e3b4755f8144eac035877ea"],["/archives/2021/index.html","eaf0e3f7e88b6bdd7720e47e0ee593e1"],["/archives/2021/page/2/index.html","f5cc986c32747bbaf5728dbf81663e74"],["/archives/2022/03/index.html","900b75074faba5232fc149c6cca3cfe8"],["/archives/2022/04/index.html","fb88f289a054c7723bdb5f95b4ba900b"],["/archives/2022/index.html","638a9dc192a67881d9218693b944ff3a"],["/archives/2024/02/index.html","b5e49857c601e2de4ea67da6096f142f"],["/archives/2024/index.html","fc00cee918172b5ff727e0cd5bd2be87"],["/archives/index.html","5e2718f001372d463310b47f55ddf5e7"],["/archives/page/2/index.html","f6cb3c9e018c45cd2481b5c602473cdb"],["/archives/page/3/index.html","a255e3906274db515497bda8f9bf8506"],["/categories/index.html","31394d7f8fba8f43abf4ca34cec47f9a"],["/categories/学习笔记/index.html","89c589a80ca7542e29840c35d2d8855e"],["/categories/网站建设/hexo/index.html","a9d13aab2b6dceaffd8474116a092e5f"],["/categories/网站建设/index.html","30fac736173ce41578271a3b4b35cd82"],["/categories/网络相关/EvE-NG/index.html","7b6227c48868eb12c3906b609c9225c5"],["/categories/网络相关/H3C/index.html","30e1d84394d5efc5a128170c16a48c34"],["/categories/网络相关/index.html","d295b010c776a44f898fdfbb0cc564df"],["/categories/网络相关/华为/index.html","e229483bc44e5db699f2b54740670e5f"],["/categories/网络相关/锐捷/index.html","20bdddff2baf487502cb7f26e8eba6b6"],["/categories/虚拟化/VMware/index.html","88ab8d3e5fc4f44f3d4bee5058b7f01c"],["/categories/虚拟化/index.html","29b0ed9c519600db0475fdb25d1edbd2"],["/categories/虚拟化/page/2/index.html","50d19c77a3b984fbe052030faa10916d"],["/categories/虚拟化/vSphere/VMware/index.html","1cbef9ac02b8de0ee88f152e20f523f8"],["/categories/虚拟化/vSphere/index.html","415d4285d295bc271859364d734eb9f8"],["/charts/index.html","05221a17bd4cdb851664eeac8193adf9"],["/comment/index.html","dbdd6101346c88eea5483528441b0889"],["/css/custom.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/index.css","3638f07ac1f5a4825e9ab18d1c410ca0"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/Avatar.png","f077e9dd4777008308812082b610d248"],["/img/alipay.jpg","fa447508817875e5c8d7e52fcbe56696"],["/img/archive.jpg","d816a4e7454cca4f675ba7cfe5b8224f"],["/img/background.jpg","1229144fc682676e7a2b49e1ee309b98"],["/img/default_top_img.jpg","84ea6f3cf2e063389c57d517d1694b3a"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","a2dc9668f2cf170fe3efeb263128b0e7"],["/img/tag_img.jpg","e52cc0e889d7c9bff36997cf30765856"],["/index.html","4cc7288607cac5b10c529a94ab18c621"],["/js/main.js","cb1293dd47e361d4784be03a6788eaf7"],["/js/search/algolia.js","c361589555f3c5138d4a7cd5f71b889a"],["/js/search/local-search.js","067bcc51ed4388f87040ab516569f9e6"],["/js/tw_cn.js","fd2faf7f2f71df78dd71f5e441819b9c"],["/js/utils.js","80c3d558b0800ac8755dc771c68049a2"],["/links/index.html","e6f405b31aa464e11f7fa11750e29fda"],["/page/2/index.html","d58fcd8783fd852992fd97138f7ea39d"],["/page/3/index.html","fcc43d46da48053fc5bc94cf5e3d95f8"],["/post/13022a98.html","aab99d91f4015bf73f0ae8196b92a0e1"],["/post/200515.html","1f9b03b6a5c6c0022e127ccb9d7cf346"],["/post/200517.html","21e2f959739d3397cc53fc088ee0e300"],["/post/200518.html","a11ba4c36656a2bd6a9b40f281f1a6ce"],["/post/210315.html","f4a4fa2f2eae2543d051ba51be6d45cd"],["/post/210319.html","ba4dea8601e2c5cf8ae38b2c81043690"],["/post/2103191.html","3e5d19cc573acc1553b9dd4fdc670015"],["/post/2103192.html","aa36010470c9d86802d686223b8e9902"],["/post/210626.html","c6dcc6cef77e0464e64c734ade7f2ad6"],["/post/210801.html","f25f81893fa6f10d93ef2ca889d63f28"],["/post/35c92e1a.html","618b87165738afebbab6c8c11a148252"],["/post/3afe2615.html","797f6d1685d3c0e82d4a4c2aa6175f99"],["/post/4581e758.html","b5bb79217224497d51ec537601695f93"],["/post/61443.html","49513a9fdd071501a10fe179fb16a160"],["/post/657905a1.html","30aafe481c2b4f8db9abdfb2ac5fa650"],["/post/76e0150d.html","ec5943c29278e57096c9d820ae135a9f"],["/post/80fdc049.html","3dae847c0cd40bba85c9a1f5621f4712"],["/post/a3146603.html","728660378c30cb89d1df5be87e212f68"],["/post/a66fd0fd.html","0119011b130e380d7f4a1f9c853b9ede"],["/post/a6e75a2b.html","90efe5f98294286488315df7fd065e95"],["/post/aac6bd89.html","4b13609524ddcda9a179a4d4bdd65e00"],["/post/abae461c.html","c78a98b54cb6c97ee4cd8720dbdaaf21"],["/post/aof3dfe.html","cb55fb3371392c2f620d0866e1efc0ee"],["/post/b5331bb6.html","f08ad8212f18c7f5a670e18b21c9a7f1"],["/post/b8091e0.html","021e52ca882c6808ac4f3cf6b6ede44f"],["/post/c8411948.html","528bdfafea027704552049db9b89c678"],["/post/db4a72da.html","372791170964f32af4a7118ab7747487"],["/post/fa31a270.html","9871053613b0587343cdb31ad24e0537"],["/post/fabc15fe.html","6fd92ee14fe6ccd0421f2c99b83eef04"],["/sw-register.js","861274e1b2bebd2d6a061e58b9d24436"],["/tags/Chart/index.html","b9229c4cd47b77f366cb4d2f6012f296"],["/tags/ESXi/index.html","f4e6e1973629915b68517a9b3ae1e6af"],["/tags/Echarts/index.html","b55ee9b6338ce093f29b3f96421662db"],["/tags/H3C/index.html","6d6d4bf29df2968a5cdf22ae0783ec42"],["/tags/Markdown/index.html","2b1fafc984f0b8c6cab889bb3240b849"],["/tags/VMware/index.html","ec398de1f151ab44670f141d28968909"],["/tags/Windows-Server/index.html","4677164528113040218a281056a4d91b"],["/tags/Workstation/index.html","c74985fd6032b350d017e54dd3e5ad9a"],["/tags/butterfly/index.html","7fa09a7f10e33fb067a5da0fe25d771c"],["/tags/hexo/index.html","623d553cbcff5cd6dbcfb6aa806cf4d5"],["/tags/index.html","b149eae9785a1ba7391707032afadc45"],["/tags/vCenter/index.html","a65a2fd4b1260ddfc18ae31fddcfabe0"],["/tags/vSphere/index.html","853be3bfb98a0f1b1149209ebfe88ca8"],["/tags/华为/index.html","9bc34d0214b705f359405909fa690a7d"],["/tags/模拟器/index.html","b730d8875d8b87b68f8ca10563ca7a93"],["/tags/网络/index.html","3c569e1f4bf4a6e236a8ec396082712b"],["/tags/网络基础知识/index.html","c31f24570d1cac3843125009a77db514"],["/tags/锐捷/index.html","359db374d6303e97dd3f6e6910ef2f7c"],["/vCenter/index.html","7e229b140896340ecf4815e86b7f3b7c"],["/vCloud-Director/index.html","c2ef8043553af01c771b5b08b507f632"],["/vSAN/index.html","e6b9a8a6504dc037e0fd8f3f121cb71a"],["/vSphere/index.html","aced98fd7cd211c16ec363ab9bc4fbfe"]];
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
