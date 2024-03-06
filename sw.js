/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/KVM/index.html","b3946f750e7ddc5ce7bbd1282b924e06"],["/NSX/index.html","89799ea5cead20ed3ce03a83ab6f3cfe"],["/Storage/index.html","2fb04e5ce41beccbfbe224d12ec27ae1"],["/Veeam/index.html","795fa747b3418c418a9ca3964b9d967d"],["/Veritas/index.html","fd8994b4aa216a833869e78a8e50cb36"],["/about/index.html","e53f28f27c64cb35d6c0b7d0429a2f49"],["/archives/2020/05/index.html","af990c4b019c4b19b62e2257e1b3b7a5"],["/archives/2020/06/index.html","7cc82c72b9531dd0bd9a778fb2796dc9"],["/archives/2020/08/index.html","7b38ec7eb9fee1f868ab8b2d30fd9afa"],["/archives/2020/index.html","a748a6646c7ad9e806b88ec2c70e7397"],["/archives/2021/03/index.html","3ecc32d6c6ea518591112486d0ab54b5"],["/archives/2021/06/index.html","dcda43bebeb25c6dc85a5452d89b595a"],["/archives/2021/07/index.html","b759e7f622f89f02396bad97fc69fdfc"],["/archives/2021/08/index.html","63325459d7b46a575041ba04cbc8ace3"],["/archives/2021/index.html","dcb49c05381104d7c522a3bb877f960a"],["/archives/2021/page/2/index.html","f430cbcc79b1e252c7f25df25e37324f"],["/archives/2022/03/index.html","c979ac6a312bb08d51f0f4462271b68f"],["/archives/2022/04/index.html","6d4382dbb439f9293d4f9769947e4756"],["/archives/2022/index.html","3fd90d31b6fb0205fb93b901a1b9b0d5"],["/archives/2024/02/index.html","191e110a394641be4b979f2a117c6211"],["/archives/2024/index.html","3d5bc854c012ec0aa819d81fe8c82040"],["/archives/index.html","c641b595193c913b7868fa7cdb33ec5c"],["/archives/page/2/index.html","fcc3a99d0b24673d4a9662541a4afc3c"],["/archives/page/3/index.html","3ba7b71b69cc20cc0dc04e7ec3959468"],["/categories/index.html","d81176276cd961b9f211e0ff8a0318ec"],["/categories/学习笔记/index.html","c2bfa22fde578cdf4b8c7896a2f36ab4"],["/categories/网站建设/hexo/index.html","32e5207030611c867594b48018d77530"],["/categories/网站建设/index.html","3b59fee899b8e06a840aa21dc6a8ff8f"],["/categories/网络相关/EvE-NG/index.html","056549242edc66c86d9a1d700f06e5f3"],["/categories/网络相关/H3C/index.html","2665a8abfcfcb563717959d1489a28d8"],["/categories/网络相关/index.html","3dffef5955256cfca98bd05ac23588ff"],["/categories/网络相关/华为/index.html","9dc57743e20bef3eabe6c18ce2666807"],["/categories/网络相关/锐捷/index.html","13c90b85033ae304183647c158a02a54"],["/categories/虚拟化/VMware/index.html","1a762acc4d65aae467bd28d51b7bcfe5"],["/categories/虚拟化/index.html","43dc730abacb2d0ed3d8c29169d52657"],["/categories/虚拟化/page/2/index.html","78f7bc585352fd6e27f963f967d4478d"],["/categories/虚拟化/vSphere/VMware/index.html","8913aedf0100b1ace8cb1dac0a0496df"],["/categories/虚拟化/vSphere/index.html","1ffe5bd4e89f731c02221ccadec1883e"],["/charts/index.html","36de4653604ed40d0fd7f938a0dd9f39"],["/comment/index.html","c651b2be12feaf8f3745ea5a97270392"],["/css/custom.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/index.css","3638f07ac1f5a4825e9ab18d1c410ca0"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/Avatar.png","f077e9dd4777008308812082b610d248"],["/img/alipay.jpg","fa447508817875e5c8d7e52fcbe56696"],["/img/archive.jpg","d816a4e7454cca4f675ba7cfe5b8224f"],["/img/background.jpg","1229144fc682676e7a2b49e1ee309b98"],["/img/default_top_img.jpg","84ea6f3cf2e063389c57d517d1694b3a"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","a2dc9668f2cf170fe3efeb263128b0e7"],["/img/tag_img.jpg","e52cc0e889d7c9bff36997cf30765856"],["/index.html","0bbd7d6b18340dc5899e20f10fc8feea"],["/js/main.js","cb1293dd47e361d4784be03a6788eaf7"],["/js/search/algolia.js","c361589555f3c5138d4a7cd5f71b889a"],["/js/search/local-search.js","067bcc51ed4388f87040ab516569f9e6"],["/js/tw_cn.js","fd2faf7f2f71df78dd71f5e441819b9c"],["/js/utils.js","80c3d558b0800ac8755dc771c68049a2"],["/links/index.html","9462b5ead51452554e8aa8149cdb72b6"],["/page/2/index.html","12119d26c905f5cc9af9c9eeda4043db"],["/page/3/index.html","08e7d2fad26a56d2d730c203571ef312"],["/post/13022a98.html","4be9dc9fd6c4ccd72880ad085db41360"],["/post/200515.html","9893269f311c3cd820395d6c58af063e"],["/post/200517.html","94e2423532e28598f28dc3aa5cc87b39"],["/post/200518.html","c004e714071543c5d633f86eb27fec53"],["/post/210315.html","3461800d25b03553db68d795bea957ac"],["/post/210319.html","5dcd72dba72c6723691e03162e93468b"],["/post/2103191.html","6bca73853f46a5fa8813c7ba8c789826"],["/post/2103192.html","f39b08aeb50864b9eea9d4d4591f1bee"],["/post/210626.html","2aeb24afc4ec2db76945c4580ccd8d88"],["/post/210801.html","d648f8ad265235d6859fa92e39adf458"],["/post/35c92e1a.html","8ffedea28687e208d6feef6657095562"],["/post/3afe2615.html","a111f33d3f8f3aa1a13f57252272ec47"],["/post/4581e758.html","cd241c9d357dda96adf7d2dfd24e22bc"],["/post/61443.html","887747ec25be926d9662cc3e1abb087c"],["/post/657905a1.html","3ff1d664b0e9afde7beec89b617b4325"],["/post/76e0150d.html","63b0b567a3537ea7fd0ca148727aa142"],["/post/80fdc049.html","efb801d5e6c6599861cdff261d2533f4"],["/post/a3146603.html","229bf0be4c6383376b6d696f81518db1"],["/post/a66fd0fd.html","647a8545fe7aaa907c504a52e7f0adf5"],["/post/a6e75a2b.html","ed1d44897d831e4afca7a6a42ebfbdd6"],["/post/aac6bd89.html","52a1c2fa8e72decb095d63c29505d3cf"],["/post/abae461c.html","b97332690ffcec9361ddc63d4e784f99"],["/post/aof3dfe.html","6ad3eed79030d990931374b53e8cdbc9"],["/post/b5331bb6.html","41f2c128efba2ef81b83e4e563b5a0d3"],["/post/b8091e0.html","1cb74397da5d4ca1680ea72110b3486f"],["/post/c8411948.html","aa464a01408eaea781e00ef0b419f8d8"],["/post/db4a72da.html","97968cd08b37a5a521065736fa21416e"],["/post/fa31a270.html","af6761b5222b2f4c9c16f5268797f50e"],["/post/fabc15fe.html","0a9b680ac687d7e4ac641142809d270f"],["/sw-register.js","27c378fa88b679af6cb67bbf0e172b00"],["/tags/Chart/index.html","ac0a9cf2622bf94f60acaba53710b4c6"],["/tags/ESXi/index.html","8d34a8fddbb918bcffc1720c83da953f"],["/tags/Echarts/index.html","94c7c57c7b1969f87dc6bf1ad7a495a1"],["/tags/H3C/index.html","d0a76fcb70e336e3482ae617a42e00d0"],["/tags/Markdown/index.html","0855b15a24ee4d37f300c6db1e40b842"],["/tags/VMware/index.html","18a0ec4cdeea447e2eb5eadd47dc74dd"],["/tags/Windows-Server/index.html","4fcc644943c99a294799b6057af3d974"],["/tags/Workstation/index.html","999a985b284020fd93d2012c1746fdca"],["/tags/butterfly/index.html","2e9c0d19e401f3b32a7a57a075a477b7"],["/tags/hexo/index.html","944db221d1a076a7cbd745361648603e"],["/tags/index.html","00714a785c48293a4e08489f0d8f2e22"],["/tags/vCenter/index.html","e7f8a9ca6fc9e66c0c5a39e1a3455740"],["/tags/vSphere/index.html","6389595f7a55e1c3f2f3af3c22151c8d"],["/tags/华为/index.html","112acf31af1965f6b19858bba61e0b93"],["/tags/模拟器/index.html","88e20575b914570b8c102a8db3aa96a3"],["/tags/网络/index.html","06d1ff6635c43d1cf7722833c6309a09"],["/tags/网络基础知识/index.html","a81819f11b7f632671811e1b2a772881"],["/tags/锐捷/index.html","388b0b2a21075d9660c6ee305931ede3"],["/vCenter/index.html","3bb38e025e5b09f1a776b545617d3f9e"],["/vCloud-Director/index.html","ab755c2fe49363900d15142b45e7ac30"],["/vSAN/index.html","7aba25767491935e8701a0dc9d9c21be"],["/vSphere/index.html","cb007f19ff8be5aa81284c37cc049273"]];
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
