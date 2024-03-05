/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/KVM/index.html","c8799464b089ea1f0c87b2677792b47c"],["/NSX/index.html","601c1a3e3f6f889e642b0bd147a66c89"],["/Storage/index.html","692c8a9d9c83ec5e0ad050e36e9e353d"],["/Veeam/index.html","c8b2ec652357a070dcb10e3b96fe1036"],["/Veritas/index.html","d159b1efcc1da7b1cced642279e6584a"],["/about/index.html","d199b3c36b39dc5c872c799ab4cf3e73"],["/archives/2020/05/index.html","ff4027381305e7f4448fac93abd6e98e"],["/archives/2020/06/index.html","90d0414872fb7c87a1c8091a2e4b22f6"],["/archives/2020/08/index.html","bb6f91b3d2efd5574bfd36d9397c9d1c"],["/archives/2020/index.html","a3d6d4b317b15ac8f3e4c1d34c4a912a"],["/archives/2021/03/index.html","b1419398ca4a139e1ae71e2a40bfabf1"],["/archives/2021/06/index.html","d79cbc21aae8a6e39d7d73ea1d9233b2"],["/archives/2021/07/index.html","bfa083894a22bb553d9e60a63ac971b8"],["/archives/2021/08/index.html","8db364ed6ecaf0a3a461674ce9a17e7e"],["/archives/2021/index.html","b6f29655cd4932d28d53f793c2191752"],["/archives/2021/page/2/index.html","29e4e42fc2ce40867c2892f289e45d08"],["/archives/2022/03/index.html","984ad56eba8444b0fec17bec8a149bdc"],["/archives/2022/04/index.html","22942448144027c15ba0b94ae5f6cfab"],["/archives/2022/index.html","d5edd5d6470b7d8ba989d61f75f51752"],["/archives/2024/02/index.html","ece9ac0752af7439fd7b382dacbcaaa8"],["/archives/2024/index.html","1f8f573cc20d2c79fbb0a2fda9cd7807"],["/archives/index.html","19df148f295b69aa6c28fec660633729"],["/archives/page/2/index.html","9bac6897e6fd95d1af784ce18de31cef"],["/archives/page/3/index.html","4d00df279abc77502acf712af2de8bba"],["/categories/index.html","5f9f09902149207d72da44bd9fed2bd8"],["/categories/学习笔记/index.html","fb33f0a90ea09aa0d9a81e882ed2bfc1"],["/categories/网站建设/hexo/index.html","99f2c82fea92f9b831c804f4966e2dc4"],["/categories/网站建设/index.html","8f20c92464eb661a76d0a406580e4a0e"],["/categories/网络相关/EvE-NG/index.html","ebfaf37de0ee4e4ecb760f0e33fb8bc6"],["/categories/网络相关/H3C/index.html","be1477b142d7d765d4c1014d0ec622bc"],["/categories/网络相关/index.html","bbed080abd1b0bd11ec8b988a203eb03"],["/categories/网络相关/华为/index.html","f4a82588f0ce111b96685942d40bba25"],["/categories/网络相关/锐捷/index.html","c5897b856c2caf1892e84cb1b0e44256"],["/categories/虚拟化/VMware/index.html","50fd181dbc84a2fec6726935042ef049"],["/categories/虚拟化/index.html","d0ec5bc232664c78c0c06525243ee14f"],["/categories/虚拟化/page/2/index.html","845bdf0f00d2e1c972add725a2785015"],["/categories/虚拟化/vSphere/VMware/index.html","af6155e6b97f0a888d94d748c239bcd6"],["/categories/虚拟化/vSphere/index.html","3743fadb9330c14bd50dbcd945fc224b"],["/charts/index.html","333a83e018563c2eba438f34ce26eaa5"],["/comment/index.html","5f593d865bbd68aa78efb89e830b9221"],["/css/custom.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/index.css","3638f07ac1f5a4825e9ab18d1c410ca0"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/Avatar.png","f077e9dd4777008308812082b610d248"],["/img/alipay.jpg","fa447508817875e5c8d7e52fcbe56696"],["/img/archive.jpg","d816a4e7454cca4f675ba7cfe5b8224f"],["/img/background.jpg","1229144fc682676e7a2b49e1ee309b98"],["/img/default_top_img.jpg","84ea6f3cf2e063389c57d517d1694b3a"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","a2dc9668f2cf170fe3efeb263128b0e7"],["/img/tag_img.jpg","e52cc0e889d7c9bff36997cf30765856"],["/index.html","5f3c8c2566d59f944f06239f962d5d96"],["/js/main.js","cb1293dd47e361d4784be03a6788eaf7"],["/js/search/algolia.js","c361589555f3c5138d4a7cd5f71b889a"],["/js/search/local-search.js","067bcc51ed4388f87040ab516569f9e6"],["/js/tw_cn.js","fd2faf7f2f71df78dd71f5e441819b9c"],["/js/utils.js","80c3d558b0800ac8755dc771c68049a2"],["/links/index.html","b705bd31804a67a103bd35c1d0c336d2"],["/page/2/index.html","9ec965ff45f65d5f386172dfdef50034"],["/page/3/index.html","f59cbfb549d59071c589133c728d6fd9"],["/post/13022a98.html","7e18e5216e45e601c192747de82ba3bf"],["/post/200515.html","84d9aa2d96190401c41e46b77bf2d42b"],["/post/200517.html","7fb0b3c0b324035031326b71d064cd87"],["/post/200518.html","366f4186a8bdb1159f6b1d849b73365e"],["/post/210315.html","316214329d56cee00ff1c044bb70dfc4"],["/post/210319.html","84f7fa7a87e7d66b300dbdcc3b29e160"],["/post/2103191.html","20b85cb76b3544c1c313ec4774923eae"],["/post/2103192.html","774121ec66500985306d0903bdfb78eb"],["/post/210626.html","6ebe3bc7be68ac676aa6ec0d428089a6"],["/post/210801.html","6f5b68fc21896fc629367c81a495b3c6"],["/post/35c92e1a.html","497373c0a1fb361ae2c8c1e16c93e379"],["/post/3afe2615.html","a8e3be0f06dd25ec0a33c36af66df813"],["/post/4581e758.html","2881b4542843017397f9910c44fa4a05"],["/post/61443.html","82481961b3ae0603d4f06921feb50cfd"],["/post/657905a1.html","64bc516a727c30c2058ca1e281b30a47"],["/post/76e0150d.html","62f4325b708c98de6adcbfc27ddf2dba"],["/post/80fdc049.html","af53c403f93fe63f5844f555d5952f64"],["/post/a3146603.html","983e6850b8c022520fe7083379dc95f9"],["/post/a66fd0fd.html","8c5c03f68fd1d16dff3c07a462510b55"],["/post/a6e75a2b.html","53eb891efebfb9a0c26c8bedd7caa467"],["/post/aac6bd89.html","c6b9370242b4b6a291702d7d1441dd0b"],["/post/abae461c.html","f04f8743ec32d2522cb10ca24b20682a"],["/post/aof3dfe.html","cb899432c46584a4a22ae57a9060b81e"],["/post/b5331bb6.html","538cc97d97c473ba25ef7484a7a865cb"],["/post/b8091e0.html","815f5935ad290c0b5e44181be4ce0142"],["/post/c8411948.html","9417d3bf09336b5ad1e1396dc9fe2d91"],["/post/db4a72da.html","c8eae280d64ed2481035a7e648eb40b5"],["/post/fa31a270.html","9bd1d3045096de70d78496e608299831"],["/post/fabc15fe.html","051c4a2f0598fb0671dc7e0da61020ee"],["/sw-register.js","60c810aa478285bd059c6f1d5d1162d0"],["/tags/Chart/index.html","e3818f52cdca1fc4b08d6addfb4e97a3"],["/tags/ESXi/index.html","4041bda611bb2b8a98f55bc34743adf1"],["/tags/Echarts/index.html","9c88b666ef10db95e7740cd343f566ed"],["/tags/H3C/index.html","f4e89c888ad3cdccd92ae492112ab18a"],["/tags/Markdown/index.html","6d8ab635fbf47176e3d2ed2c68179210"],["/tags/VMware/index.html","ce0bff727dbea696a67398af2cb440fc"],["/tags/Windows-Server/index.html","4daca9ec05a57f1c5774234678c6620e"],["/tags/Workstation/index.html","9f8073cc093132142f5944072214b107"],["/tags/butterfly/index.html","71d6ef3cee3f21fa65b62f558a5a41c4"],["/tags/hexo/index.html","67291015b458420660cedd6dec01f3dd"],["/tags/index.html","10783211f008969893cc377cbacd6374"],["/tags/vCenter/index.html","d4a68b96a557b92c47d253c0820ba787"],["/tags/vSphere/index.html","1df47af0c66b3005640078331399c29d"],["/tags/华为/index.html","53e9773a91b5b21236d339f642ba65bd"],["/tags/模拟器/index.html","3b8b6f1cf7556cf7da9117f70a89a0f4"],["/tags/网络/index.html","54ffaed64fd6454a8c08911189282a81"],["/tags/网络基础知识/index.html","7309444ef9ca7796c830bfce2a2e4fec"],["/tags/锐捷/index.html","453e9c705909e6ab8312d0366f341cad"],["/vCenter/index.html","88d038d22e23adfe1e6334bd79643528"],["/vCloud-Director/index.html","0427ab8b7516e1a80168a5e83ca4a17e"],["/vSAN/index.html","083976e9496b465f58e84261851c6c32"],["/vSphere/index.html","c1be6c6f236f29f6619767cd454000c3"]];
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
