/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/KVM/index.html","b2cd5e6ee7b5763b55ecd9807aab0f0f"],["/NSX/index.html","f92a03a37a1e9f2cd644b960aef238a2"],["/Storage/index.html","f39e3b3b595dc375880133ac0ff8e129"],["/Veeam/index.html","83afba2e85ef0ab81e8d815fbf705c64"],["/Veritas/index.html","497c64ab22649e58c7a43f9995afb5d7"],["/about/index.html","b25b8996f2c59cdd67bb21085d0fa842"],["/archives/2020/05/index.html","c028842c299513f43947128e361b2201"],["/archives/2020/06/index.html","dca1bc55b88c1c19425b9751674870bc"],["/archives/2020/08/index.html","455b660d29e191a5fae9e66d13bf04c4"],["/archives/2020/index.html","a293d19873d12d699cfc5a985b2b4c7a"],["/archives/2021/03/index.html","e943d6dbf4851c91462bba0badd6e39f"],["/archives/2021/06/index.html","4460a732b2665e2b8b99c08c4e95aec1"],["/archives/2021/07/index.html","9dc98feac5ca2378c81dfc67050c16d2"],["/archives/2021/08/index.html","e1c0aeb8a44da0a5dc1d86a1a807423d"],["/archives/2021/index.html","5cdad26f6b57b89103dcbd3ba069f5c6"],["/archives/2021/page/2/index.html","ce0dc4918d179784da6b10583954712f"],["/archives/2022/03/index.html","fa53dd22529eaa56e673d07e51a23081"],["/archives/2022/04/index.html","cd8f055063a1ba37df408f27ca3c0f21"],["/archives/2022/index.html","ba386c52dc4574f7880b09289036d7a5"],["/archives/2023/03/index.html","4b4ab95fad3092d4b4596ca24e953dfa"],["/archives/2023/index.html","4da5885a3cc9a9ce5e67010d483e4bea"],["/archives/2024/02/index.html","0cc0f5b263a6b789b80df243d7b8df5a"],["/archives/2024/index.html","5efa7452e28dacad5f9aded98958ab60"],["/archives/index.html","abdd783ddd1ebf4b46fc32b3d25a5ac9"],["/archives/page/2/index.html","6a52925a61911dce6744b58f821a93a8"],["/archives/page/3/index.html","1d3b5d51bff3ee97a9ce17bc1794c97e"],["/categories/index.html","6ad5496351f641162528e6d369c01556"],["/categories/学习笔记/index.html","ca01ca3dc3a9068db0071877dd98cf16"],["/categories/网站建设/hexo/index.html","6a24fe65d8f313b3d2cb1fb6bda0df43"],["/categories/网站建设/index.html","f2fe7b1fcc5d879401cc2ee84cebb5db"],["/categories/网络相关/EvE-NG/index.html","b0c0a83756ea9689fdfca8244d39c080"],["/categories/网络相关/H3C/index.html","b3ae479b73dfb9a53016d7f2a85aabe6"],["/categories/网络相关/index.html","864a0b564ed32cb91b8e424c945356af"],["/categories/网络相关/华为/index.html","f3f9f6f1b14be5d649a9b988a551a882"],["/categories/网络相关/锐捷/index.html","5e9f160c2b0410f552fde813b71ea40e"],["/categories/虚拟化/VMware/index.html","4315c9d1115092787f6228efc3b25fc9"],["/categories/虚拟化/index.html","77b05d84df1b54863af7381d069410aa"],["/categories/虚拟化/page/2/index.html","efa88df12517bf24fbe1ec09f91b4f2e"],["/categories/虚拟化/vSphere/VMware/index.html","ed230b575ee207dc8e0a178170b1cab5"],["/categories/虚拟化/vSphere/index.html","309b23055008de3086ddb00297a64713"],["/charts/index.html","849a7fd79d59ba4bdf07da82e0c6e2b9"],["/comment/index.html","042fab7713ecbf08fde1309db8eb978f"],["/css/custom.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/index.css","b3f2a6ce45a0b5de37631f6b54d9ef16"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/Avatar.png","f077e9dd4777008308812082b610d248"],["/img/alipay.jpg","fa447508817875e5c8d7e52fcbe56696"],["/img/archive.jpg","d816a4e7454cca4f675ba7cfe5b8224f"],["/img/background.jpg","1229144fc682676e7a2b49e1ee309b98"],["/img/default_top_img.jpg","84ea6f3cf2e063389c57d517d1694b3a"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","a2dc9668f2cf170fe3efeb263128b0e7"],["/img/tag_img.jpg","e52cc0e889d7c9bff36997cf30765856"],["/index.html","ed4cee11208d77c8f9070c334574d948"],["/js/main.js","cb1293dd47e361d4784be03a6788eaf7"],["/js/search/algolia.js","c361589555f3c5138d4a7cd5f71b889a"],["/js/search/local-search.js","067bcc51ed4388f87040ab516569f9e6"],["/js/tw_cn.js","fd2faf7f2f71df78dd71f5e441819b9c"],["/js/utils.js","80c3d558b0800ac8755dc771c68049a2"],["/links/index.html","ca9ef7803d43eff3905d8a8ba4f59996"],["/page/2/index.html","b5a2d1154d6915d3cc9228674b48882f"],["/page/3/index.html","a924dc4010ac9a221ae7c7e8420e2fca"],["/post/13022a98.html","8720552b9b69e0ec5451fca6bc58601c"],["/post/200515.html","730da2d5bf6802329a2f8fa9e26238f8"],["/post/200517.html","bc114641408bffcca1e793dc9e444971"],["/post/200518.html","98336d8229326835717c58feeb431512"],["/post/210315.html","1e4172b03cf45e7cd37fd4157c3550fc"],["/post/210319.html","870df2a2d141b781370728f752df8f9f"],["/post/2103191.html","986ca33da53696055622863d30b885f6"],["/post/2103192.html","394cc4135fd5c1bbb30f397076b745f4"],["/post/210626.html","ac74cde20b7366efb0e63abb2cf2305f"],["/post/210801.html","ec5dd8b8a65ee727d98d1dc813de047f"],["/post/2437986504.html","667584d7381f70943a57554b7179874d"],["/post/35c92e1a.html","9987a0265e6326c09a9e011f46a64578"],["/post/3afe2615.html","0e32aa3652e89e0573127510e0b0f326"],["/post/4581e758.html","e6979159865583d091abab3fbe2c9873"],["/post/61443.html","fd57c4ea8d09fd7edd2f38c73bcf04d7"],["/post/657905a1.html","2d4e59ca284e8e39b4e731f59d6c2aec"],["/post/76e0150d.html","f7b9bfc7d2d3c88cea9bae88218656c2"],["/post/80fdc049.html","f713868d2181db4818600e09748f0ae3"],["/post/a3146603.html","5a79ad1fb3d5648757708000894e1fe2"],["/post/a66fd0fd.html","bd55170d44c7e7cb9d90aad18ec630ef"],["/post/a6e75a2b.html","66490c90e89f6b163eb7c194a0977775"],["/post/aac6bd89.html","8a34ee7b601b02fb59d0f80ccd86b7a7"],["/post/abae461c.html","074f4e360a9b47f75b23bbe8c74df6ef"],["/post/aof3dfe.html","b8b79ff03bee1acb22494c67be4d9932"],["/post/b5331bb6.html","c461fcd55e1d9774723cd7cbd9b74fc3"],["/post/b8091e0.html","7a918d56b18dc66800ea1a063b877de0"],["/post/c8411948.html","2b5ed2a180e0e34dd7f9f5d249cf5fba"],["/post/db4a72da.html","9215ef228616a072800024e67ff815bd"],["/post/fa31a270.html","53cf02619b7e96ce8f672d37884e19dc"],["/post/fabc15fe.html","56b03d5380243d18ec2aef69c6effbc4"],["/sw-register.js","e85f997b571f1ee94d97fb513b65df5d"],["/tags/Chart/index.html","979a9670c5f448704e536b0c67894f21"],["/tags/ESXi/index.html","3e44cb8be57e917edc9683a9ddacb716"],["/tags/Echarts/index.html","da0e2e80050cc7269e2c7efcec47872a"],["/tags/H3C/index.html","e6aa2c927115441c91d90daa90d0c73f"],["/tags/Markdown/index.html","d9603bf446ca9c39a6a927ceddd995ae"],["/tags/VMware/index.html","0d10e6375239960ab527a09bdcbeae2f"],["/tags/VMware/page/2/index.html","298e19eea40f5596197fbc44b65cc292"],["/tags/Windows-Server/index.html","9ef6f6ec8f1375ab857679b6ad54e36e"],["/tags/Workstation/index.html","1048d62464c7e894d8822b28135dde4a"],["/tags/butterfly/index.html","f2959d8f4065bff727f58b9f4ef13c76"],["/tags/hexo/index.html","ef6cc7e1c093c8175d756f1a026d40d6"],["/tags/index.html","2d4858c6470e5378ef56a320c3cdc558"],["/tags/vCenter/index.html","dfab23b44117106b88b9902cc6a3ef1a"],["/tags/vSphere/index.html","9213cd22fcb8e07ed64c1f94fd2b74a3"],["/tags/华为/index.html","1d6b521b7a8e2e9d92eb0f38c561aa84"],["/tags/模拟器/index.html","86a4a03ccd56a2594de5a0ced0449864"],["/tags/网络/index.html","b83f582c90bc676397180833f8bb28e2"],["/tags/网络基础知识/index.html","5a08ac8523edd603382ed4f240d66111"],["/tags/锐捷/index.html","a30ead75867ec2bd110cc1683c463c62"],["/vCenter/index.html","f489b7a2b5c3990576bb610761321ca8"],["/vCloud-Director/index.html","62dcd03308cda00eeb4e37b59792b954"],["/vSAN/index.html","b05b02575dbbe298459aa13973bb9a73"],["/vSphere/index.html","315222a18dcedde706b5266fdd12c962"]];
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
