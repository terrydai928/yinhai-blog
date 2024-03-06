/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/KVM/index.html","9d988072ca60a8e3abe5f385d6ad0c26"],["/NSX/index.html","318d10947b0dcf7aa0da9b64db03bb23"],["/Storage/index.html","e31a83b5989f889f2b81aa0f93c9421d"],["/Veeam/index.html","82465e9baf9eca0285dd6fbf81531445"],["/Veritas/index.html","133f3c998ad18870d5de6034c3453583"],["/about/index.html","3c422bf6da7e338d92bcd652261c32a3"],["/archives/2020/05/index.html","b6675d0e8cf25d173b71edca6038cace"],["/archives/2020/06/index.html","1259d3b4c969630882c1927bdd82d681"],["/archives/2020/08/index.html","ec7b740c7614b733438894ac7d3705da"],["/archives/2020/index.html","f0480691ba02c96190db11386d86373e"],["/archives/2021/03/index.html","9a55fa7e157bdf2404e23fa193e2d4ef"],["/archives/2021/06/index.html","e372817936f62cc81079a3e217b97209"],["/archives/2021/07/index.html","fff4d411185776c3238fc6ab8feec9b6"],["/archives/2021/08/index.html","1cf17c45524ad4c81c52a6108dd19688"],["/archives/2021/index.html","08ad183da5798677aac7b71a98f46c98"],["/archives/2021/page/2/index.html","2abbde5eac35b39a5f15ab6bb2b95395"],["/archives/2022/03/index.html","9a41dea71b371682fc75e5a55f889ebf"],["/archives/2022/04/index.html","549cc73a7d9871f1433151bf337d6d72"],["/archives/2022/index.html","f223e149ea2ed2972decda6b6eabcf06"],["/archives/2024/02/index.html","204049bfead6b1af37856f068c0563ef"],["/archives/2024/index.html","bf4f18c073b180e48192478871f48dc9"],["/archives/index.html","548f5449ebf2d4effeeabf9518f126f8"],["/archives/page/2/index.html","3d6d44f1deef2f35ee36be6006b69211"],["/archives/page/3/index.html","451856ffa24eb6ac27e7717a12c59cc7"],["/categories/index.html","535adc9856f34abca8eb76536d49840f"],["/categories/学习笔记/index.html","67cf66db37b264f106c90f3573463ca6"],["/categories/网站建设/hexo/index.html","b7561df1545b6a3fc5430a201fd68798"],["/categories/网站建设/index.html","e608a076d432e03b54455e58d7c96182"],["/categories/网络相关/EvE-NG/index.html","6cb51d7cfceee5badebafe5b084f5c0f"],["/categories/网络相关/H3C/index.html","94691ec154f3fa696884b50d9db7bc1d"],["/categories/网络相关/index.html","309ddd5915fe7e6eb5e4b675f7abc8ae"],["/categories/网络相关/华为/index.html","91ce0c2f01d03e8b72dee24ca9319839"],["/categories/网络相关/锐捷/index.html","4d41f2e4d5433d85cf7121c4cb8e66cb"],["/categories/虚拟化/VMware/index.html","0e510aea8032c655b51d85ea8d8e8d62"],["/categories/虚拟化/index.html","6bd5923518a664c60f81ee9ecbef1586"],["/categories/虚拟化/page/2/index.html","30a156ed9535e6b8c25072f057595692"],["/categories/虚拟化/vSphere/VMware/index.html","1f6a12676b06df6e9e74e256ad2b0d82"],["/categories/虚拟化/vSphere/index.html","e66503eec2c88ab42e34645a85402416"],["/charts/index.html","813d354ff72634841a6e73ad271705b5"],["/comment/index.html","766b4aebe1c8797d851ebaee64169d44"],["/css/custom.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/index.css","3638f07ac1f5a4825e9ab18d1c410ca0"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/Avatar.png","f077e9dd4777008308812082b610d248"],["/img/alipay.jpg","fa447508817875e5c8d7e52fcbe56696"],["/img/archive.jpg","d816a4e7454cca4f675ba7cfe5b8224f"],["/img/background.jpg","1229144fc682676e7a2b49e1ee309b98"],["/img/default_top_img.jpg","84ea6f3cf2e063389c57d517d1694b3a"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","a2dc9668f2cf170fe3efeb263128b0e7"],["/img/tag_img.jpg","e52cc0e889d7c9bff36997cf30765856"],["/index.html","ddc2810b889c31e60770b208d1d4d911"],["/js/main.js","cb1293dd47e361d4784be03a6788eaf7"],["/js/search/algolia.js","c361589555f3c5138d4a7cd5f71b889a"],["/js/search/local-search.js","067bcc51ed4388f87040ab516569f9e6"],["/js/tw_cn.js","fd2faf7f2f71df78dd71f5e441819b9c"],["/js/utils.js","80c3d558b0800ac8755dc771c68049a2"],["/links/index.html","05c771f994e938fccb0a80cf383b1de9"],["/page/2/index.html","d1a165d9d2cc5329e261f934f4a1ccdf"],["/page/3/index.html","0e96403be22665c787a0feb8ef046062"],["/post/13022a98.html","154709123bd642f74e84af44711a98a4"],["/post/200515.html","505fc8500db1780bbec7f6b9b89bcd74"],["/post/200517.html","7d1ece1ab46cd90a73b1529a403f9306"],["/post/200518.html","b3d22dad0823897d0de1fc11bedccc7a"],["/post/210315.html","522225a0c6cc2564437026ab921219b5"],["/post/210319.html","35b81b6c99862f52f305b0b7a80d6b4a"],["/post/2103191.html","f8f7729d862eb8022ba97fe5807d2188"],["/post/2103192.html","c13ee1d6f9177bc33a1e9515f763ccae"],["/post/210626.html","153625c74e4fae51dec3f543aacf3f54"],["/post/210801.html","c985d663e48e6f4fa064df2cdce8f520"],["/post/35c92e1a.html","22ffd308f20310af1bf09db8f2ac516e"],["/post/3afe2615.html","0f16af72340c59edf93f749fd5f328d8"],["/post/4581e758.html","db9fb978fcb0f7021d37303b3069eba0"],["/post/61443.html","04d73e1c46bfbdb5c958f9beba7fe33a"],["/post/657905a1.html","c775dbb8f406d02a2dbaca49e18e91e3"],["/post/76e0150d.html","573f04d4ea6b5227c0b35ff80657f469"],["/post/80fdc049.html","f66f92884bedae2d95ff470d6b53cf23"],["/post/a3146603.html","f17669b1b9e6b041967843aec778c541"],["/post/a66fd0fd.html","8d5464e9e3d48c044c8844e756925d65"],["/post/a6e75a2b.html","4fec25cccf92ae61b54588a64d351b32"],["/post/aac6bd89.html","c10be87213318c9dee5e700ede08c1ce"],["/post/abae461c.html","80cefda201fe3cf4a0207bbfd648b8f0"],["/post/aof3dfe.html","dbdaf8a4414b5b282c42496d565ee2ca"],["/post/b5331bb6.html","f7490494fc566275d25919ed7f0e9b22"],["/post/b8091e0.html","a7ef84adbb4b4a45dc5ad8c7f257034c"],["/post/c8411948.html","40c5e170754c1b92f547cb42ab3307f7"],["/post/db4a72da.html","9a593478aa4498f95a44327eee2c4ad2"],["/post/fa31a270.html","621fd1abd004d3d7bf5ad36701ddc813"],["/post/fabc15fe.html","1b350500d8f0d273ee12dc18c0167416"],["/sw-register.js","0b8728bc110f3f81f68b0c33210885bf"],["/tags/Chart/index.html","9568d13044324223d3f420e0ba4c1994"],["/tags/ESXi/index.html","38ded451e936ee9fe8764b9b94f014b6"],["/tags/Echarts/index.html","ed2d7e1937798dd0f3faaceaf4dc8930"],["/tags/H3C/index.html","b4bfa0a4335e9eabab426aabda55fdb5"],["/tags/Markdown/index.html","0a1bee40c48b020ba5ec55c0caaa07b6"],["/tags/VMware/index.html","92c2a191a953e994ac73dc3981b7786a"],["/tags/Windows-Server/index.html","6ba83cefb9362190236a5307fc303641"],["/tags/Workstation/index.html","48887a73e71289a965e928995ec4e6a9"],["/tags/butterfly/index.html","78e4dd6a3e8b86b5fd47a1f20cc76a3f"],["/tags/hexo/index.html","8a55052917b9bba23848c4c3ac00de09"],["/tags/index.html","d46c7b8755199d40ae797aeb90d95c90"],["/tags/vCenter/index.html","c1eb7fe53c94a5d6dae83e0ddf1f0fea"],["/tags/vSphere/index.html","93d010eec479e903e1693971ddf6137d"],["/tags/华为/index.html","3df2aec50fb1ac41adf4b0242c15b2c2"],["/tags/模拟器/index.html","ec706105e34e2ee627b3c415e62dab0b"],["/tags/网络/index.html","4ff646aaf5053fb1140e1bafe9865b12"],["/tags/网络基础知识/index.html","459d54d0720b3975184d8ebfdf576faa"],["/tags/锐捷/index.html","c97a7021da233a13595a27cf8722b38f"],["/vCenter/index.html","b0945e97029554d4b62c311fbd7b4d64"],["/vCloud-Director/index.html","3bb1c686e1233eefd298265dd9db2bc8"],["/vSAN/index.html","46745bf23ded67c09520b5fb5bdd4f21"],["/vSphere/index.html","01b6aa4a995823b4227799cc0b97a879"]];
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
