/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/KVM/index.html","2b7bcc956aec18e26a3fba90c7d0e5f2"],["/NSX/index.html","f9da48d62a39e0eb9f2414b0cc2833ef"],["/Storage/index.html","31e2c8cebeae49118d7057b8de5c162c"],["/Veeam/index.html","39377d2649f2dcabc81aa84d89598f13"],["/Veritas/index.html","40def8f50eaaa3134a5c8dcb2dce2093"],["/about/index.html","c8c8dbd5b6a36b42adccf514f32fc0e1"],["/archives/2020/05/index.html","867c042e8a095b6fadf3247e86d27191"],["/archives/2020/06/index.html","2778b6603f3e3dc2a7eb48ea1e418763"],["/archives/2020/08/index.html","a43a94e3c3b49cf46eea95b15e9d5677"],["/archives/2020/index.html","0eb10fb5f1af72166815fde05eee1466"],["/archives/2021/03/index.html","550653a7e15f557eaa4a46d548d1482d"],["/archives/2021/06/index.html","f60a1e26f76cfd95f580f2224ab24464"],["/archives/2021/07/index.html","51969c276c8bfd2458ec2127f16e6be7"],["/archives/2021/08/index.html","9916c90ab52af3f7f0249a986af7077a"],["/archives/2021/index.html","e840a809934a9163a156411c28fbc4d8"],["/archives/2021/page/2/index.html","ba99fe0a20599f35cb655ca10654e26f"],["/archives/2022/03/index.html","1171c284bf4d6de13e531e63d416409b"],["/archives/2022/04/index.html","35f8aaae1d55ed7cbac90fa694499e9e"],["/archives/2022/index.html","4d1bbaa9c7936f37c54c8f417746fb38"],["/archives/2024/02/index.html","3c0a2d90f6067316330fcdaaab46c6f8"],["/archives/2024/index.html","a571916ed6c1194c07ecdeb1bc0afeec"],["/archives/index.html","d96c3336187094cba69448fa44a5649c"],["/archives/page/2/index.html","44a131c61d0908321e6054298c552b55"],["/archives/page/3/index.html","0df35de86e2ca430cdc283f1e9c036af"],["/categories/index.html","c45b78092d0eb3f79c2f9b7058c27c9b"],["/categories/学习笔记/index.html","71379aff8ed30b9c111055a08bfe4e9f"],["/categories/网站建设/hexo/index.html","9f0d03309d36fd73e94ca08015a85825"],["/categories/网站建设/index.html","901181a7ee73a945159bb9e29f719971"],["/categories/网络相关/EvE-NG/index.html","53e1e012efc8a6897f218c862d72f318"],["/categories/网络相关/H3C/index.html","797dbed562922f203988a3de0f0a62e4"],["/categories/网络相关/index.html","760b121fcec4636f6c79611d13873d2f"],["/categories/网络相关/华为/index.html","2b18bb25279445553596a36504585ec2"],["/categories/网络相关/锐捷/index.html","173e342226170f818b07f77c586b2acd"],["/categories/虚拟化/index.html","3b7fa2a762aae2a8e7ab6fa2c81d6f96"],["/categories/虚拟化/page/2/index.html","99c7d3ed9cc991faf78c7d51be9f317b"],["/categories/虚拟化/vSphere/index.html","e84edb6bfce20644179385df61ba1897"],["/charts/index.html","84c66df02ab7693711e76193e0417c1d"],["/comment/index.html","ab5b26a932fbf091718f9eef82ad2005"],["/css/custom.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/index.css","3638f07ac1f5a4825e9ab18d1c410ca0"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/Avatar.png","f077e9dd4777008308812082b610d248"],["/img/alipay.jpg","fa447508817875e5c8d7e52fcbe56696"],["/img/archive.jpg","d816a4e7454cca4f675ba7cfe5b8224f"],["/img/background.jpg","1229144fc682676e7a2b49e1ee309b98"],["/img/default_top_img.jpg","84ea6f3cf2e063389c57d517d1694b3a"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","a2dc9668f2cf170fe3efeb263128b0e7"],["/img/tag_img.jpg","e52cc0e889d7c9bff36997cf30765856"],["/index.html","5e5b6ac7ad51df6813c39a3632e119c1"],["/js/main.js","cb1293dd47e361d4784be03a6788eaf7"],["/js/search/algolia.js","c361589555f3c5138d4a7cd5f71b889a"],["/js/search/local-search.js","067bcc51ed4388f87040ab516569f9e6"],["/js/tw_cn.js","fd2faf7f2f71df78dd71f5e441819b9c"],["/js/utils.js","80c3d558b0800ac8755dc771c68049a2"],["/links/index.html","ca8b4ebe73a2400d33419146b6de9008"],["/page/2/index.html","2cd952310f42a6f64b65539c49168f84"],["/page/3/index.html","2860efa0abeda167f2da6d33a147af74"],["/post/13022a98.html","440f6ef557571a7b4f7f85c91c9845ec"],["/post/200515.html","ae7417abb4df6c61960e4040f2e7b917"],["/post/200517.html","35ab39ce7b537fdd012734bb34c7dec7"],["/post/200518.html","d3042a3a23bb23463ea372739fbffe74"],["/post/210315.html","4d0e641ab571b4d34cb2bc0c03573092"],["/post/210319.html","473459e14e19e06ba62ad789c963c107"],["/post/2103191.html","6b9d6056c3793c49e2e72b7b5685b6ad"],["/post/2103192.html","179a85b5e0448a64004f570752884c46"],["/post/210626.html","438786f90a9460a83d0ce2e68a16792c"],["/post/210801.html","fc59ca91ca3fa3f43a2beeca6d4643b0"],["/post/35c92e1a.html","e28c71c62810fa0814ed91a3db953513"],["/post/3afe2615.html","fb1d24506f7806e1e7625b26d1e3f5c0"],["/post/4581e758.html","c6d3e447b9bb962f3b298340aad27d81"],["/post/61443.html","558afd6d683a3238a66e1544feca9589"],["/post/657905a1.html","b6a98ac0cab23721194fa34ebcccc22d"],["/post/76e0150d.html","683cc0a2187046e2142eb78e5e875474"],["/post/80fdc049.html","0e667e6d80589ea8a03f974213cb079c"],["/post/a3146603.html","c23c91e32e483f6324d534eb1b4c54aa"],["/post/a66fd0fd.html","eb769108b3b628044f5054787add42e1"],["/post/a6e75a2b.html","a5788435bb746729f946a9c075e64ba4"],["/post/aac6bd89.html","2a71bba45cf6918a9ef5813a12e76e12"],["/post/abae461c.html","020f05782db80c9323754232ae8d5bd9"],["/post/aof3dfe.html","3d031a057f9cb1f681ab708fbfe025dd"],["/post/b5331bb6.html","54241c36804250e4973cb68f539c1143"],["/post/b8091e0.html","d34350f822f4e6335d5126017a0f57d7"],["/post/c8411948.html","48324f9520c81aeb96230072e5fbd68f"],["/post/db4a72da.html","7ef87841ed06c297ce78d25d21b5737a"],["/post/fa31a270.html","08d61fba5f84a2e61aa2289c71557272"],["/post/fabc15fe.html","9f7ca4b9b080ec075b74fc903412263a"],["/sw-register.js","4ba12d55f3b9bfb9c355f37b7d7aa373"],["/tags/Chart/index.html","390db93e75c572e05e016bdbce965535"],["/tags/ESXi/index.html","0c351c0145f7105aef07fb7f08d872ac"],["/tags/Echarts/index.html","464415d56b13bf1d7311450dafd67a9d"],["/tags/H3C/index.html","215faf1e9ec14ce9d9bc698e8d1d4b4e"],["/tags/Markdown/index.html","74996d99ad917d1358f8d1632b921574"],["/tags/VMware/index.html","705169aacb57279b03564eef02ee706a"],["/tags/VMware/page/2/index.html","eee310a944f8926a60267d80f170ddfc"],["/tags/Windows-Server/index.html","a70c3c734e941636d38213a330bf01e4"],["/tags/Workstation/index.html","330cd65dc304a65cdecfaa4015e0d275"],["/tags/butterfly/index.html","2368643c420e20475e509b0bd897c532"],["/tags/hexo/index.html","ea9b30c4e8b730a7dcd7406d4621e50a"],["/tags/index.html","e8f83124ae21c1176c90b899b3322e68"],["/tags/vCenter/index.html","1ef7d0ee1023d4082e0a5b74bf4c7cee"],["/tags/vSphere/index.html","1fdff273939f1fd11e2099bce671afdc"],["/tags/华为/index.html","2b633ecfefd50164c678d62db3329bcf"],["/tags/模拟器/index.html","3591002036e40ddf09862a16c7b427e7"],["/tags/网络/index.html","f5424050a4f975370da4a2058e2cee15"],["/tags/网络基础知识/index.html","629d9f1789b890298cc6103748bc32bf"],["/tags/锐捷/index.html","e8efc9ab57869eee15e6f4ab9d519d56"],["/vCenter/index.html","79e9c69916f6d57f957a60b38dfce8c5"],["/vCloud-Director/index.html","0b4a3d8591acee73d8325cc090a02b48"],["/vSAN/index.html","85497e0265dd04234cf3970767aebdef"],["/vSphere/index.html","9f1b0af8bb1ceb260bf8d46ba6ec5b86"]];
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
