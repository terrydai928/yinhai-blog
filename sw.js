/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/KVM/index.html","33fdab0fd0ec1b46f5161e906fb07fae"],["/NSX/index.html","4f336abf004e0035185cbc8a3e05892e"],["/Storage/index.html","7c1f306c425d4d2f221cd448215cd40a"],["/Veeam/index.html","0f1c87fdfdb26b4d175f68ef12527ea9"],["/Veritas/index.html","5c7d708958d893aa3a7edb816c0828e0"],["/about/index.html","d1619e0930b48c758a19c68b3522b60e"],["/archives/2020/05/index.html","d66770c0008b46bbf110aeccdda01894"],["/archives/2020/06/index.html","dd1ec4138ef29b6e89e7f45d6af1d5e3"],["/archives/2020/08/index.html","7fdf10a1ea43bfa4f2fd53f69c4f9f64"],["/archives/2020/index.html","3590069ec1f442db1e92a6f36e7237a3"],["/archives/2021/03/index.html","27958b482a13f2114a0e6a70fb86f8ea"],["/archives/2021/06/index.html","168780e11597ad558f11a66b6233f717"],["/archives/2021/07/index.html","930d4d998dbb62746af1721785612de3"],["/archives/2021/08/index.html","90d43badfd92c91bb065c1459616b065"],["/archives/2021/index.html","f89b9de2b3ce454307ab7b63a5896b61"],["/archives/2021/page/2/index.html","3cef7ee7e6fcb0ccfb74a9bc2ae5b4dc"],["/archives/2022/03/index.html","7c31267dc3dd44ed3fff41381531957b"],["/archives/2022/04/index.html","84cadeff06a6f6ed5f957723bba3a72b"],["/archives/2022/index.html","c929fb9ff5dd80d77e925b6f96251e25"],["/archives/2023/03/index.html","a1b1e120cfcac7afda2707ac14a464aa"],["/archives/2023/index.html","987f0b37f6c5e77b35526bd84d5d16e0"],["/archives/2024/02/index.html","e415b4d2f1eb82c87f2a7a0a20f30b7d"],["/archives/2024/03/index.html","f6ef63f7ed603a4860ec87d3c04deab1"],["/archives/2024/index.html","6183277e3c6138e6d69b2813afa6d961"],["/archives/index.html","38749c9e176295aa73661911c10563cd"],["/archives/page/2/index.html","0348cc17550cea2bec493a04fd6acd53"],["/archives/page/3/index.html","8db43d8f374cb5b796005faff7fe2b0d"],["/archives/page/4/index.html","d02936df1cd2717c91be08de50913c9a"],["/categories/index.html","8f13afe5c31e34f51bf657a792f2c64d"],["/categories/学习笔记/index.html","985080bcaba5f239b1e18fa17ea6a1e7"],["/categories/网站建设/hexo/index.html","3af20cae43252ab01ed49c77cb880b4b"],["/categories/网站建设/index.html","3dbdb93b121a47b1280b26f8a2ff95ef"],["/categories/网络相关/EvE-NG/index.html","e82c328e63208bee56bb3ef3e7b06a62"],["/categories/网络相关/H3C/index.html","7e86b2ddb355d2be5af087c9e84e26af"],["/categories/网络相关/index.html","65b3166e8c2fcbe13d776b4f79e179be"],["/categories/网络相关/华为/index.html","1f79b5bd18a2c8795a115cbaf0d7efe9"],["/categories/网络相关/锐捷/index.html","1e70bd7fc8c5f62d56896a9088a7f585"],["/categories/虚拟化/Horizon/index.html","2d67b41715ad9cf164abbfdcb1447859"],["/categories/虚拟化/VMware/index.html","960ee36a6d136b8dbc17991c53f24774"],["/categories/虚拟化/index.html","556b2f8f526f95fbf2d90aca7ac48da2"],["/categories/虚拟化/page/2/index.html","d9a91c16e8fe4bb1997df9fd2555a681"],["/categories/虚拟化/vSphere/VMware/index.html","1f89306a7ae0b6b9ae6d3f0e1b079370"],["/categories/虚拟化/vSphere/index.html","34e0287efd18790f12166c439af0c36a"],["/charts/index.html","009782b2990dae58c2d768f998b404d1"],["/comment/index.html","71add720a50135184e182dd568888ab8"],["/css/custom.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/index.css","b3f2a6ce45a0b5de37631f6b54d9ef16"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/Avatar.png","f077e9dd4777008308812082b610d248"],["/img/alipay.jpg","fa447508817875e5c8d7e52fcbe56696"],["/img/archive.jpg","d816a4e7454cca4f675ba7cfe5b8224f"],["/img/background.jpg","1229144fc682676e7a2b49e1ee309b98"],["/img/default_top_img.jpg","84ea6f3cf2e063389c57d517d1694b3a"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","a2dc9668f2cf170fe3efeb263128b0e7"],["/img/tag_img.jpg","e52cc0e889d7c9bff36997cf30765856"],["/index.html","4fdc5579e41e9e11fdc6099d8ca36f67"],["/js/main.js","cb1293dd47e361d4784be03a6788eaf7"],["/js/search/algolia.js","c361589555f3c5138d4a7cd5f71b889a"],["/js/search/local-search.js","067bcc51ed4388f87040ab516569f9e6"],["/js/tw_cn.js","fd2faf7f2f71df78dd71f5e441819b9c"],["/js/utils.js","80c3d558b0800ac8755dc771c68049a2"],["/links/index.html","940a07b35d9990ed3599b0187f17d38a"],["/page/2/index.html","380e6e0fed2783dae17e59b25fa20d83"],["/page/3/index.html","b6ca1069d2d5518443f99028414eded7"],["/page/4/index.html","2c5f1bf1b5cbf4e86339c08cbc0b08ca"],["/post/13022a98.html","ede43fedccebf058b2c5c2626a8252a8"],["/post/1557300456.html","0e44db4cee3e239303f04357ff0d0007"],["/post/200515.html","515ad985113fdb27bb6228ccd42a36ee"],["/post/200517.html","bc66fc482e1d5f8a379cb97d14ba5c5a"],["/post/200518.html","ef10170ea9eb85e88a803faf6728ce0a"],["/post/210315.html","54ab4c599eae05377f7079d91b9a5add"],["/post/210319.html","1a8f692eff50af6b17f6c51c4f05c20c"],["/post/2103191.html","fa472c102613285420b3898961110767"],["/post/2103192.html","81e3e1240fb1f06612235f9745b9d4f8"],["/post/210626.html","a2d2af87c457fe918ed133be3f6b3c53"],["/post/210801.html","f8fc12726ac41ce4b1fc9346636e6e02"],["/post/2437986504.html","7b83c7ec4a9e87968fa25acd3364affa"],["/post/35c92e1a.html","3e14f6bb4adc02c76513777e2cebce6f"],["/post/3afe2615.html","cd0079c9dde2f3ca8cf0053ffb8eff70"],["/post/4581e758.html","c1127c8b02ce05864bc8633b5c217202"],["/post/61443.html","df71b67b270ec75178a7b03c3067538e"],["/post/657905a1.html","535de6758f656fd1a7f9d7e0a5d82b60"],["/post/76e0150d.html","347f906a362e96a50c32e4d4cf471a9d"],["/post/80fdc049.html","86146ba4f0b05d065d0ef1a12cd95a8f"],["/post/a3146603.html","72e31c8eb75ec498484c5509e22399d4"],["/post/a66fd0fd.html","7eae64b297012bef5bf9b55be11b6cf8"],["/post/a6e75a2b.html","88bd4f8af046d9b0ce346ab694d1095d"],["/post/aac6bd89.html","b0860b1ef0ae275d431bb58a309f509f"],["/post/abae461c.html","0703d59129b38e840de1c38656055f47"],["/post/aof3dfe.html","ec2173be1d4d276c85921d32faee0657"],["/post/b5331bb6.html","ed7a9a10079b132c5b2226eccce050e8"],["/post/b8091e0.html","c0bbf421b1f983971ef601a59670e4f1"],["/post/c8411948.html","b4d13b1e713075552c237f0c8d2a36a9"],["/post/db4a72da.html","ea2aeff6836da9ca178b064355c63c22"],["/post/fa31a270.html","a1da0a628e443587d5ad719e91059a06"],["/post/fabc15fe.html","95d3b64e599b1b453eec342a0485fbdf"],["/sw-register.js","4aea90af2a4082db49c9f2e530c1b95e"],["/tags/Chart/index.html","54e7e6e40c838670840f24f11e7b3e44"],["/tags/ESXi/index.html","35bebc5e016c400014f05cee7c597400"],["/tags/Echarts/index.html","0ce2d0f8401858531ae2ff118f93b6fd"],["/tags/H3C/index.html","244531f20f671d4c5d2d3283a95af5dd"],["/tags/Horizon/index.html","6d3e24ca83374aae3b9d93fa8cc27647"],["/tags/Markdown/index.html","a971524860485671a0880735df1eb627"],["/tags/VMware/index.html","3f296cb53a3e6acdf762acf98581f539"],["/tags/VMware/page/2/index.html","b06715c3d111f2c26370919a909a3d78"],["/tags/Windows-Server/index.html","1428c51176f85b1e37ee4f448c8c4b19"],["/tags/Workstation/index.html","b1b867aff40b377bb9f5ba6d30608d60"],["/tags/butterfly/index.html","0561e0bf5d237857137bc73f679fb8b7"],["/tags/hexo/index.html","faec2944909b61111b7d80965e31a874"],["/tags/index.html","64a948836c9d8a95e30318d1fdf30876"],["/tags/vCenter/index.html","db2866575c044de6c5979814874a2b2d"],["/tags/vSphere/index.html","2967faa9f8c2a98f626e5369c6f969b0"],["/tags/华为/index.html","b21eafdb4eacbc36385158a56e54d1f5"],["/tags/模拟器/index.html","2e937364bc25b8933dbdda9ff2f295f7"],["/tags/网络/index.html","ed10f1d80671cb252b863811695c2066"],["/tags/网络基础知识/index.html","593fe74b4a3a1fd519399b5b192d1faa"],["/tags/锐捷/index.html","518061e395dfa1ea57d89a667309412d"],["/vCenter/index.html","1770c1f6fdc30ab7d38275f8ab287422"],["/vCloud-Director/index.html","1b3e77b78eb68d3aa7f81650038e7e6b"],["/vSAN/index.html","8ee01ee0a98ed1e0a5e28df434007072"],["/vSphere/index.html","b6f90e27abcea68eeede59af81f7e179"]];
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
