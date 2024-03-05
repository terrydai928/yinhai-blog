/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/KVM/index.html","0ec5e76fc7c6fb5fb2c9a75b914b4907"],["/NSX/index.html","46ec8a64073cd13f03fd2049fd63a925"],["/Storage/index.html","0b22c5f2cd74de8b8eeafd946ce10faf"],["/Veeam/index.html","fcfc2a9e657ac24e0cb3dba859cfeeda"],["/Veritas/index.html","e2104fbd20feee7ae7419ff246388f2c"],["/about/index.html","e272f715557bb441a15c823e7e4c8136"],["/archives/2020/05/index.html","cbcc385d60357b301938c66f6ed9c4d0"],["/archives/2020/06/index.html","900a848e58a781cf79304755cda9d852"],["/archives/2020/08/index.html","a86d4174856c6b6fa844e4be34d8f7ed"],["/archives/2020/index.html","a80479aa7aab40da33824797716269d6"],["/archives/2021/03/index.html","e00d0fe2bb1ef1863b73624672b1e68a"],["/archives/2021/06/index.html","420cc0123bc680f7cdb9e202e10549b3"],["/archives/2021/07/index.html","f1d702d8f4d4f9fc07649880bea9c814"],["/archives/2021/08/index.html","89499a02da492789460596e2f7bfbdec"],["/archives/2021/index.html","6c5ead0b8685faed85f022e758a79b5a"],["/archives/2021/page/2/index.html","2f1067d738555032ca3c9f38cfa7d008"],["/archives/2022/03/index.html","d711316adee4e51613b97cc4d00b303f"],["/archives/2022/04/index.html","84174e9a5c99a9a3274cad97c767d704"],["/archives/2022/index.html","a49bd02d2b4967cda41ee47e41b2164b"],["/archives/2024/02/index.html","80d50d302a4237043ccf364c620f7963"],["/archives/2024/index.html","0d63ed4300a69f5489f5717a497dbe3d"],["/archives/index.html","560890047a74e48aab425d11c6913489"],["/archives/page/2/index.html","66162f3dbaaae12265dfbe2a87be636e"],["/archives/page/3/index.html","cb0cba56c1e51e629c3de2d3feec7257"],["/categories/index.html","608545092272b6a607da0b38eed18ed3"],["/categories/学习笔记/index.html","b235f7e6a08207ecf78bc219dee56408"],["/categories/网站建设/hexo/index.html","da0bcb906011b63e91ea23e3c71bc359"],["/categories/网站建设/index.html","2fb21c7b12f109a5e777c2e733235e2b"],["/categories/网络相关/EvE-NG/index.html","3afc94df047905a8a2595b3e57b6fddb"],["/categories/网络相关/H3C/index.html","5c415d0fccdec51a8a8ae02fda431a61"],["/categories/网络相关/index.html","9fa3b44ab578363e9960cd62fc9da7bb"],["/categories/网络相关/华为/index.html","9fc1cadc5ce080f9ad497e8842de2675"],["/categories/网络相关/锐捷/index.html","c86477e043539a8416b6ccc746f8ba09"],["/categories/虚拟化/VMware/index.html","c1d75e3dc9e10c70e8c2a1a072704742"],["/categories/虚拟化/index.html","75df0e6e71ad338387fcb21855afc16c"],["/categories/虚拟化/page/2/index.html","cecfc99a690f832ea5bd0aecd18e0df7"],["/categories/虚拟化/vSphere/VMware/index.html","45cfb11c67987af7774d239b4e192008"],["/categories/虚拟化/vSphere/index.html","73a77729b6d498478b1db1f4fa19086c"],["/charts/index.html","806c8d587b09bd530065c3019dd0c238"],["/comment/index.html","33dcaba99ee6c71dcdd68d90d2df933c"],["/css/custom.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/index.css","3638f07ac1f5a4825e9ab18d1c410ca0"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/Avatar.png","f077e9dd4777008308812082b610d248"],["/img/alipay.jpg","fa447508817875e5c8d7e52fcbe56696"],["/img/archive.jpg","d816a4e7454cca4f675ba7cfe5b8224f"],["/img/background.jpg","1229144fc682676e7a2b49e1ee309b98"],["/img/default_top_img.jpg","84ea6f3cf2e063389c57d517d1694b3a"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","a2dc9668f2cf170fe3efeb263128b0e7"],["/img/tag_img.jpg","e52cc0e889d7c9bff36997cf30765856"],["/index.html","761755768892db2a55e38a5d01b27a74"],["/js/main.js","cb1293dd47e361d4784be03a6788eaf7"],["/js/search/algolia.js","c361589555f3c5138d4a7cd5f71b889a"],["/js/search/local-search.js","067bcc51ed4388f87040ab516569f9e6"],["/js/tw_cn.js","fd2faf7f2f71df78dd71f5e441819b9c"],["/js/utils.js","80c3d558b0800ac8755dc771c68049a2"],["/links/index.html","e97dde3093b7942b4e36caed10ba78ab"],["/page/2/index.html","3ad2099ad0b609cfe33d0d66bdf4df94"],["/page/3/index.html","c0ef7afc78e01c5bfe3fbfac267fe614"],["/post/13022a98.html","4be9dc9fd6c4ccd72880ad085db41360"],["/post/200515.html","f88eb0b9607dfdd125a8e19f95e25fa1"],["/post/200517.html","6aa712bf4a227e18804190dc8556cbe8"],["/post/200518.html","c004e714071543c5d633f86eb27fec53"],["/post/210315.html","2d633b764ee718d05c353d18411ad593"],["/post/210319.html","5dcd72dba72c6723691e03162e93468b"],["/post/2103191.html","8f5e4a7b981412209f9c7c0b314fc26b"],["/post/2103192.html","987e7d3377a58b8537be681b814dc04d"],["/post/210626.html","5684e4a12d885a16166a029fb1b4557f"],["/post/210801.html","d1fe9d45097d6dfbd047d5daf58f839a"],["/post/35c92e1a.html","8ffedea28687e208d6feef6657095562"],["/post/3afe2615.html","4b91bdd8fc5f410c7e2683cff374283e"],["/post/4581e758.html","cd241c9d357dda96adf7d2dfd24e22bc"],["/post/61443.html","e35711c411146782de6b7aa9e52d34d8"],["/post/657905a1.html","3ff1d664b0e9afde7beec89b617b4325"],["/post/76e0150d.html","63b0b567a3537ea7fd0ca148727aa142"],["/post/80fdc049.html","efb801d5e6c6599861cdff261d2533f4"],["/post/a3146603.html","ac38b84c16d95ad53d6061b2b4fe3718"],["/post/a66fd0fd.html","087303953229fa1c994d4fcbad5332ad"],["/post/a6e75a2b.html","f8e28b112dc4ee73f08fc0d433a05497"],["/post/aac6bd89.html","5deda0c9edbfadb37bb100a80d6e8072"],["/post/abae461c.html","b97332690ffcec9361ddc63d4e784f99"],["/post/aof3dfe.html","aa0311cc821e3439a4f650e7b9a44159"],["/post/b5331bb6.html","41f2c128efba2ef81b83e4e563b5a0d3"],["/post/b8091e0.html","ac649d258430b36b4b387702365a82dd"],["/post/c8411948.html","aa464a01408eaea781e00ef0b419f8d8"],["/post/db4a72da.html","97968cd08b37a5a521065736fa21416e"],["/post/fa31a270.html","f4348d6690cabdb3e14ba64b3abb83f9"],["/post/fabc15fe.html","0a9b680ac687d7e4ac641142809d270f"],["/sw-register.js","eb2f9938cb479c0550eb5616f0e197a5"],["/tags/Chart/index.html","3d38c475dcad138598ae4877654d0db6"],["/tags/ESXi/index.html","2e62c9b3a10f6e6b17c16c9838bc5881"],["/tags/Echarts/index.html","9aaa2cce5448fd1ab0b4caf8fb3c4bf9"],["/tags/H3C/index.html","83226ecbe7cb9772ff9745175dfa5e0c"],["/tags/Markdown/index.html","8c624b3e9172ea21ef92b6630f7e6484"],["/tags/VMware/index.html","66aa934cc81186ee02e12da48e537067"],["/tags/Windows-Server/index.html","1a862cda37b80846fd21be795697952a"],["/tags/Workstation/index.html","43e584f60ce7cb584f0fd4d7b8d08d85"],["/tags/butterfly/index.html","fb22f62c4fe4cccd198b0c1f469db211"],["/tags/hexo/index.html","c01ae6035f07e8add5ef1d6382750093"],["/tags/index.html","fb6385bd9073330a87764771af7f84e8"],["/tags/vCenter/index.html","b86aa943f1dde20089de64199bf3f7ef"],["/tags/vSphere/index.html","419d329b549c4b968206de4df4635435"],["/tags/华为/index.html","abfe4cf3cd4aa391b5ee226c6e5cb81e"],["/tags/模拟器/index.html","0bda218bed61a6f3018215e01b39b6ca"],["/tags/网络/index.html","1915dccc7b0adfc9bbbb30253bcaec23"],["/tags/网络基础知识/index.html","e795f96b7bdfe2862d3c7c3cf8c5e4c9"],["/tags/锐捷/index.html","a905c3b745f72e06a4fe10b9396f632e"],["/vCenter/index.html","726c0c2030da9e5162cb3b96d6fdd916"],["/vCloud-Director/index.html","672dc1a36b12e71a014e892781bf1d16"],["/vSAN/index.html","9bbb758adbdb5df73017283320c34791"],["/vSphere/index.html","26f70fcd2ffaabea6369b04c91720e87"]];
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
