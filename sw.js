/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/KVM/index.html","5f966da4d99cbad8b781107772ad05ef"],["/NSX/index.html","405558fe48b9d66d9f8f76f801b5d43a"],["/Storage/index.html","e0188609149d72d6d260899ee0c41a18"],["/Veeam/index.html","d0d789bd89ecb598edfe0ef9b6cba1c7"],["/Veritas/index.html","ae69147975680062c9617b36d57c9b1b"],["/about/index.html","0d7d5fa6888d84afd6f85afa9ae70cab"],["/archives/2020/05/index.html","5f1f8429e47818494816ba95dca87ff3"],["/archives/2020/06/index.html","537cb510120080820a7b54a1256fcee6"],["/archives/2020/08/index.html","34aa50a90512fd8f8543db11007a45d5"],["/archives/2020/index.html","64ca7a4a567e1dec908cf8d9b34af114"],["/archives/2021/03/index.html","76eeaed133453fc85dc2a70c0315bdd3"],["/archives/2021/06/index.html","1d7a40abe4454e4c6ccbc01a71822ccb"],["/archives/2021/07/index.html","809ef78fb40dfa2e1122d6528caea603"],["/archives/2021/08/index.html","47b05202c6a0a603b2cf14a0d639d8d2"],["/archives/2021/index.html","d1dfa2c9e412a00286b8962fee18b1d3"],["/archives/2021/page/2/index.html","74e39874d403146c3785c00e76b20a15"],["/archives/2022/03/index.html","fcc78aca229c99047063e13e20e503c2"],["/archives/2022/04/index.html","9ef03ec367c342598611161f0658f8c8"],["/archives/2022/index.html","03b453ea1305a0c0b139f9636575d18e"],["/archives/2024/02/index.html","f8a80c5c8f3bfb408e8cd9266d405e79"],["/archives/2024/index.html","1e908503ce4965f80b8b289903ee1001"],["/archives/index.html","659eb181efc58bc7e5fce8bfbe812060"],["/archives/page/2/index.html","4d40df5757823d289a86187fcfbffd04"],["/archives/page/3/index.html","f5c1e7b10213be5a9d20fb9b40e655ef"],["/categories/index.html","b29c1b801f0160c29b75971e4510b0f0"],["/categories/学习笔记/index.html","cf2342311d01a2d959d0dac51e5047d8"],["/categories/网站建设/hexo/index.html","ebc3f04c4659e92f7786afff788cf513"],["/categories/网站建设/index.html","c61b779d264623255a276ec83c07463e"],["/categories/网络相关/EvE-NG/index.html","4528a438efbbbe1e5f4f3b5fe36e73b7"],["/categories/网络相关/H3C/index.html","5bf23ed497145379ebbe47bcddb2a972"],["/categories/网络相关/index.html","68addcb011977960bd27258099cb1d27"],["/categories/网络相关/华为/index.html","40117e6401a9ffd39522bc7a091786b6"],["/categories/网络相关/锐捷/index.html","e46556e12b7b6143cb4a849c8eab488e"],["/categories/虚拟化/VMware/index.html","89e7b796d1fccca3e854441179c0529a"],["/categories/虚拟化/index.html","052cf5d6338d461b46e3fb014ce0dd8d"],["/categories/虚拟化/page/2/index.html","8055cf894e66ef4548d7395298a2dbfd"],["/categories/虚拟化/vSphere/VMware/index.html","63bcbe93818053c5091abf26f113e88a"],["/categories/虚拟化/vSphere/index.html","d4dc0614f3dd167e29f7d505ebe5b560"],["/charts/index.html","eb7e97670101132ceb19b4a66aa5c1df"],["/comment/index.html","253fa04578748abc4dfd332a8b8b6b65"],["/css/custom.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/index.css","3638f07ac1f5a4825e9ab18d1c410ca0"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/Avatar.png","f077e9dd4777008308812082b610d248"],["/img/alipay.jpg","fa447508817875e5c8d7e52fcbe56696"],["/img/archive.jpg","d816a4e7454cca4f675ba7cfe5b8224f"],["/img/background.jpg","1229144fc682676e7a2b49e1ee309b98"],["/img/default_top_img.jpg","84ea6f3cf2e063389c57d517d1694b3a"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","a2dc9668f2cf170fe3efeb263128b0e7"],["/img/tag_img.jpg","e52cc0e889d7c9bff36997cf30765856"],["/index.html","d1a9fab95bcd6cfe184923fe68076dab"],["/js/main.js","cb1293dd47e361d4784be03a6788eaf7"],["/js/search/algolia.js","c361589555f3c5138d4a7cd5f71b889a"],["/js/search/local-search.js","067bcc51ed4388f87040ab516569f9e6"],["/js/tw_cn.js","fd2faf7f2f71df78dd71f5e441819b9c"],["/js/utils.js","80c3d558b0800ac8755dc771c68049a2"],["/links/index.html","443aecd798b31ceef584331515eca692"],["/page/2/index.html","13602acdbb7aa491040c40b191cf3c52"],["/page/3/index.html","0db103c3d0eda92269b413c30e1820e2"],["/post/13022a98.html","27923b4ac0dedcb877b64498ed02477a"],["/post/200515.html","9893269f311c3cd820395d6c58af063e"],["/post/200517.html","94e2423532e28598f28dc3aa5cc87b39"],["/post/200518.html","c004e714071543c5d633f86eb27fec53"],["/post/210315.html","3d4308d53eb2839a2401f0aecc66a2b0"],["/post/210319.html","d2dedc796c94702185b378bbe474f371"],["/post/2103191.html","f037398926fbe064422c2803d0cdcf63"],["/post/2103192.html","e284ae7974cc428de631132c4c0770eb"],["/post/210626.html","0976d583428680a02a9893db31308132"],["/post/210801.html","34822a7af69533cae763b8c660eb1707"],["/post/35c92e1a.html","33a3770494c5aa5d343dfb28f5a4a70f"],["/post/3afe2615.html","1a7882b01339d2fc6afe705fb2331a93"],["/post/4581e758.html","f59504505b9f62f52e3528c8eae66193"],["/post/61443.html","e35711c411146782de6b7aa9e52d34d8"],["/post/657905a1.html","1906d5873d956b84a9ba63f8d6e06879"],["/post/76e0150d.html","ad0855200beafaf81600be6e9d2aba11"],["/post/80fdc049.html","efb801d5e6c6599861cdff261d2533f4"],["/post/a3146603.html","a498df32b6214badecf4c7732e97a5fc"],["/post/a66fd0fd.html","d33c53360d3e73a80f750026d8332c9a"],["/post/a6e75a2b.html","e7df34d6937b58585163393e2976cf67"],["/post/aac6bd89.html","36ff2b88f2dbb3e234d27aeb13571a94"],["/post/abae461c.html","d4f72f7275244f2180e065ea554ac4bf"],["/post/aof3dfe.html","56ac04ffac7a6278f422e0ccfbc6c7c6"],["/post/b5331bb6.html","41f2c128efba2ef81b83e4e563b5a0d3"],["/post/b8091e0.html","3d1e1fd145d24bfa8083c348416d3ac9"],["/post/c8411948.html","aa464a01408eaea781e00ef0b419f8d8"],["/post/db4a72da.html","97968cd08b37a5a521065736fa21416e"],["/post/fa31a270.html","e19139f52e46c74210d685e06fa0a998"],["/post/fabc15fe.html","aa311ab71b3669acf3fab04dc390ca56"],["/sw-register.js","d043a18942e495e9593ac3bd80fcd7e0"],["/tags/Chart/index.html","47e1c273e5a5706952037cf05285773a"],["/tags/ESXi/index.html","bcbca5429821907820fcb711f63882fc"],["/tags/Echarts/index.html","f39fb3dc27319858edfeb408beb2f8b4"],["/tags/H3C/index.html","c98d57e1cd603d31575fd429a96fb2a2"],["/tags/Markdown/index.html","fb0d707fd167a66457563889f7a78d90"],["/tags/VMware/index.html","cc6204ca5ad2786c2978bd145527b916"],["/tags/Windows-Server/index.html","1367468d6c336b35b6d63fc04c9bdbb7"],["/tags/Workstation/index.html","50cfe1902782ab75100eeeac4174b4d1"],["/tags/butterfly/index.html","564f692b4ce3a4e676574679078b6dd2"],["/tags/hexo/index.html","830663850ae92d3671df49db4104c56a"],["/tags/index.html","23fabb102d89e97b488e65dcf1a2c5cf"],["/tags/vCenter/index.html","1a64c671173b857e383dfae7c24d0021"],["/tags/vSphere/index.html","cc34e3b498d587699d159eab8e0a8413"],["/tags/华为/index.html","f75dd3d2c195cd79cc5987be76322f00"],["/tags/模拟器/index.html","71f4701105b517bb077a9da10034fd20"],["/tags/网络/index.html","6ce38922eedd1faf7bfbe3adf039caab"],["/tags/网络基础知识/index.html","778636314f59fdc06a38466159aa6c3e"],["/tags/锐捷/index.html","3b35d7b90a7617233a22963b5397c863"],["/vCenter/index.html","5baa365e11e04b348a8b381ca51df038"],["/vCloud-Director/index.html","6110487a30df14ce147d77a3ceefffce"],["/vSAN/index.html","3a5f4640e0a3c14e8b89690f99b291f8"],["/vSphere/index.html","a0fe27a8cd9f3a368c6119931b6688f5"]];
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
