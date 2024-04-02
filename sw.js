/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/KVM/index.html","9ecd407d93e5e441d29d25cbedb7d9e4"],["/NSX/index.html","22fd3f256919d757fa2e3a3b270fa187"],["/Storage/index.html","21b202a16e29d6390c32e1d252c45e8c"],["/Veeam/index.html","c8dc5799ef115e34e4d3defeb213b063"],["/Veritas/index.html","d58e9a6ce0986fe2083ac3c86cf64978"],["/about/index.html","9414d4b043f548787240c6cbe9dad0de"],["/archives/2020/05/index.html","c63cecf80ba6c688b18cc1a62afcd5bc"],["/archives/2020/06/index.html","4af997a2ff644b7ab3426bb5601649b3"],["/archives/2020/08/index.html","8dc801a569c2a0d45424a986b433f7d1"],["/archives/2020/index.html","52bd560a333b014b26b5dcfe408dba98"],["/archives/2021/03/index.html","1fa4d54045f289b86a823acb85ccc40b"],["/archives/2021/06/index.html","2bbc2dbfe2eb861fa90faa31cccf7425"],["/archives/2021/07/index.html","23de8896889eef08c97649d11735c9d0"],["/archives/2021/08/index.html","a0802240be24cad1293d7085a0576185"],["/archives/2021/index.html","b6d638eb61009c242c858a9ab4ab6156"],["/archives/2021/page/2/index.html","5c90450da073082b2a4f2cb3c9b02d1a"],["/archives/2022/01/index.html","781cd56fa8e45bd6e77338adc33f8a7a"],["/archives/2022/03/index.html","78520de3db4310c778863bad8fc12a92"],["/archives/2022/04/index.html","543c2e395f0fdd21647521ebf9060eb1"],["/archives/2022/index.html","542f84cad978bc813e792893ec719db9"],["/archives/2022/page/2/index.html","07e63ea5e36a40600c0715f07dbb704e"],["/archives/2023/03/index.html","53c174ba9cf150e344e8873a1caf9a33"],["/archives/2023/index.html","1238f6309d4ce007e01340192efaba16"],["/archives/2024/02/index.html","ad881ed493a1b940e5cca18b4d0b053b"],["/archives/2024/03/index.html","812829803eb1e2ccd1fc6ae5f6a86894"],["/archives/2024/04/index.html","f68fcf0001c2de968063cb5faf0e30ac"],["/archives/2024/index.html","64744cefd490003ef5b442de5c2a2c1b"],["/archives/index.html","03c686ac9c713d448f381e9503225d1b"],["/archives/page/2/index.html","7006e2fca6bd6e297a3a3fa062780edb"],["/archives/page/3/index.html","1fbd98ccfc3115c90abb3aa9317870c0"],["/archives/page/4/index.html","a4c5e10a35b557258b799fed41bad764"],["/archives/page/5/index.html","9db251ff6c4e4265f92689e3de6ac6fb"],["/categories/index.html","a31111c03a3654f3f6afa00b3ff7569f"],["/categories/信息安全，工控安全/index.html","a73a699262a459b847b7b064c42a418f"],["/categories/学习笔记/index.html","77f184971d5800384185f135df8d5e98"],["/categories/网站建设/hexo/index.html","4bac712753269530b308355198f173fd"],["/categories/网站建设/index.html","af295d5ed4a357043bc929655387c059"],["/categories/网络相关/EvE-NG/index.html","6664f7569600a28cd4f012472da93f93"],["/categories/网络相关/H3C/index.html","99e1e16d4e1c238cc7f378deb33d3fc3"],["/categories/网络相关/index.html","9596524e93308b782fb521a88962a652"],["/categories/网络相关/华为/index.html","43cb836cc146ac4e6e21fe07386eecc9"],["/categories/网络相关/锐捷/index.html","0a7bc9d710135e963b8c0a7ae1bcaf91"],["/categories/虚拟化/Horizon/index.html","918cf24a443af2ecbc854af93d33155f"],["/categories/虚拟化/Horizon/page/2/index.html","b2850098fb5c73e0e23ea2252dca8efc"],["/categories/虚拟化/VMware/index.html","4ef2002291a4904ec22905da0bb246dc"],["/categories/虚拟化/index.html","018eea824263b26d8d7abc3f8c3f7803"],["/categories/虚拟化/page/2/index.html","f48159c8a6126b1b05fa395c013d1aad"],["/categories/虚拟化/page/3/index.html","acccb2bbb4105e0772b50fd19f6eac9b"],["/categories/虚拟化/vSphere/VMware/index.html","0bc10646229c24d1da5440ffd7aad2d6"],["/categories/虚拟化/vSphere/index.html","1a36bfb633010af0a30c6b4a28e1dcf5"],["/charts/index.html","1c81740fc86de9ea8e3e2f455f7d414a"],["/comment/index.html","eb0fff2a3299359b8641cb9cd416c706"],["/css/custom.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/index.css","b3f2a6ce45a0b5de37631f6b54d9ef16"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/Avatar.png","f077e9dd4777008308812082b610d248"],["/img/alipay.jpg","fa447508817875e5c8d7e52fcbe56696"],["/img/archive.jpg","d816a4e7454cca4f675ba7cfe5b8224f"],["/img/background.jpg","1229144fc682676e7a2b49e1ee309b98"],["/img/default_top_img.jpg","84ea6f3cf2e063389c57d517d1694b3a"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","a2dc9668f2cf170fe3efeb263128b0e7"],["/img/tag_img.jpg","e52cc0e889d7c9bff36997cf30765856"],["/index.html","eddbfe1b550481535d8053fd9440c2d8"],["/js/main.js","cb1293dd47e361d4784be03a6788eaf7"],["/js/search/algolia.js","c361589555f3c5138d4a7cd5f71b889a"],["/js/search/local-search.js","067bcc51ed4388f87040ab516569f9e6"],["/js/tw_cn.js","fd2faf7f2f71df78dd71f5e441819b9c"],["/js/utils.js","80c3d558b0800ac8755dc771c68049a2"],["/links/index.html","7ce2ae67ad32d3f9bfdadedd24abf421"],["/page/2/index.html","59a950cb3db83c871bf0a2a87edd8322"],["/page/3/index.html","7ca1f48ca4cc5f64f6e28c63409a9175"],["/page/4/index.html","8c6b7fcffbf89bad4e6010efef1dd608"],["/page/5/index.html","1fda6497a5b90eec472938efd51804f5"],["/post/13022a98.html","a2a66b0cf9d10f158dd457149080522c"],["/post/1557300456.html","0d4bcabfefb7a6f6e3dc6f1bfef0746e"],["/post/1562883640.html","6c39ffd70490e34a755e144301f07ee7"],["/post/1807458936.html","e9d95cf3c69606d8146429e0656c2614"],["/post/1817709106.html","5c7c08c6c9e4a258f51c7b15d419b45e"],["/post/200515.html","93c58a1b2eeac2df65686e478d760587"],["/post/200517.html","be8b7cb0352c964ee961fcb16023ea83"],["/post/200518.html","a713fa85259c21bb55f9c142643a5ea9"],["/post/2041350213.html","78fde084aab0593ef76667328e0c1cc5"],["/post/210315.html","bb38adb0eab112ca8a687e83b01bbbec"],["/post/210319.html","61721d71c9162a36a45e66af2ffb7f3a"],["/post/2103191.html","1f73a9a6f66a54144b352a9ba23911d9"],["/post/2103192.html","d82921210de79f19d31cdfe1446e2027"],["/post/210626.html","fada7e6894eba06cf87e51309d221508"],["/post/210801.html","624b41dfed061515ec448a82b9e2372e"],["/post/2271410173.html","03989fece236e8db3b91a0c06ec4e471"],["/post/2437986504.html","98cffd495dc43a11a1b07dd2836f50fe"],["/post/2795962120.html","4f220ef0747340a26a819d4859ad1985"],["/post/3576033258.html","14eb12c446608eed25b260995040d012"],["/post/35c92e1a.html","2162699e3a2b62517085082297ed7ccf"],["/post/3677894519.html","5ee5653942005cce37502689d72b3a69"],["/post/3883376956.html","8cb2c6e3fa2a1fac38745c5c20827712"],["/post/3afe2615.html","95aaf6fca5cda8aaffdd65369babdd5e"],["/post/404934634.html","9e973b7675a1b8195b230441ae7b055c"],["/post/4203229419.html","ba24f4852876aa49c9428a105b0ecf5a"],["/post/4581e758.html","5ecd83b29f54731e6ef78149380f8fc9"],["/post/61443.html","896953344299646b12e7a4445a2efe82"],["/post/657905a1.html","2eca86f76720326c667a563244a7f167"],["/post/76e0150d.html","f38e7769c0af25a3830514256904b774"],["/post/80fdc049.html","153308f162498203082f1da47395a83f"],["/post/a3146603.html","dd83250f8cd7777d55fe7f9801183ad5"],["/post/a66fd0fd.html","8a904da1beeb4a23fff68624a43135ae"],["/post/a6e75a2b.html","c87200456074ca60d5af9f03beb3ee10"],["/post/aac6bd89.html","a71ac3e6d804178f273b522fcc4ab82a"],["/post/abae461c.html","6b4a8cd519f49f5fd1356a0723504d37"],["/post/aof3dfe.html","cdd28061e1fdecf5e44213b76e1fc351"],["/post/b5331bb6.html","54a287c8419149b92e1ad444391fedac"],["/post/b8091e0.html","be56647b9d1ed30f760ecfa45cc10686"],["/post/c8411948.html","61d7835f360bf8b3777a8e2a4aeb22eb"],["/post/db4a72da.html","f04bf45ac7a7fb5011566bcee0922508"],["/post/fa31a270.html","15f122240c210eff2244d6ff044edc04"],["/post/fabc15fe.html","36986798ef0f96a4d964cd16585a999a"],["/sw-register.js","f812214ad864c93220e6a14adab38ddd"],["/tags/Chart/index.html","411f184fdefebc8e632ed5281d1ccacf"],["/tags/ESXi/index.html","8784d6fc6924d60dae72fe4b1c9135e2"],["/tags/Echarts/index.html","13d189e15cd7746ce2c1a7fc0ab6b860"],["/tags/H3C/index.html","4a0a4553b84746d06234d4d8f1371b3b"],["/tags/Horizon/index.html","e174822f0a91ea8c9a9a4fed929fb015"],["/tags/Horizon/page/2/index.html","ca2ba4508520865a774c3fc931390f4f"],["/tags/Markdown/index.html","615bf060c02285084a6db3a492c9aee9"],["/tags/VMware/index.html","8785ccec53ceacfa80eeaf3ef817851f"],["/tags/VMware/page/2/index.html","8f74f54858b3e5b1abdafa21330d383c"],["/tags/Windows-Server/index.html","a6a9463dec9b6ca160090e4efad052a0"],["/tags/Workstation/index.html","6423295bf5fd173c7e0424d0d95f8a2d"],["/tags/butterfly/index.html","8f06a91ed8b19661357bbcd390841cb5"],["/tags/hexo/index.html","9d5971b980f5967008d573357ea07098"],["/tags/index.html","ed424b783558762cbe3834957955fa74"],["/tags/vCenter/index.html","9c22d2c47c92310da611365580f0fdf9"],["/tags/vSphere/index.html","779b034cd5a2852a07d1904d678dad5f"],["/tags/信息安全/index.html","9defa146991197298f2369274c2b6ad2"],["/tags/华为/index.html","648048e882977f9b1ef0ef80ebc1bdbc"],["/tags/工控安全/index.html","0518ff386fc241ea3dd0ea6cd7ceb87d"],["/tags/模拟器/index.html","489ff988b9fa7b09367b6f41a381f343"],["/tags/网络/index.html","21f248ea83830aee05da536c659b8402"],["/tags/网络基础知识/index.html","259269071aab9b5a489701127ed7340d"],["/tags/虚拟化/index.html","22a6b76038ad651c5c70146e72c20598"],["/tags/锐捷/index.html","75ee47167f40a38556c1e5020585a7e8"],["/vCenter/index.html","c65f9bb896895d154ba162ab6fbc9275"],["/vCloud-Director/index.html","bdb79f40941975d8c8d545f594b57bb0"],["/vSAN/index.html","651e59757f0d41c21c0ad9625f18377b"],["/vSphere/index.html","c304c3ff9a63410876908f03c487e910"]];
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
