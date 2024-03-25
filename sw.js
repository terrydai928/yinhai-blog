/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/KVM/index.html","6663a92695b9fab3da9b65f966fbb3bf"],["/NSX/index.html","4c7251cac54fb044284c1aed6df58c6c"],["/Storage/index.html","cdad15b06438055d38e09694a41d906b"],["/Veeam/index.html","21b7f5ae78c9fcbdc20775bd1b503e98"],["/Veritas/index.html","2f92ede01ac91cea27ca5b124756eae4"],["/about/index.html","7dbcfd92f3ccaa752b2cf967acca6b5d"],["/archives/2020/05/index.html","4c8066e6075d8846af0ded90fd768e83"],["/archives/2020/06/index.html","95a91e401898d98ab5d1fc727718df17"],["/archives/2020/08/index.html","da7e355d8c844619aaabcea815e86170"],["/archives/2020/index.html","3f370751c5fdea690a793c6e3ca8bb09"],["/archives/2021/03/index.html","2758a5cc409710869dcc866bd62bfdf8"],["/archives/2021/06/index.html","953b262a8fb1d50478c3b5122ae2ca0e"],["/archives/2021/07/index.html","b762367c47886b7bb48a08d801908fa5"],["/archives/2021/08/index.html","6efbe3daaf5cfd60d2b7a76821cefc27"],["/archives/2021/index.html","aa894c1dd1c53a9503f40c43a1c072c6"],["/archives/2021/page/2/index.html","745996cc78ae76a8b3714006851bbe79"],["/archives/2022/01/index.html","0649751632eb084b4fbbc374cc51eebc"],["/archives/2022/03/index.html","d09258269ad0bd51a1a3468f3b05f1f4"],["/archives/2022/04/index.html","27095df18b170f7645c04d28ca265e44"],["/archives/2022/index.html","71d676d755d224df522ccba9b28e3825"],["/archives/2022/page/2/index.html","1b5b7a75e544e1f801a1c7a155f78129"],["/archives/2023/03/index.html","a72567265d31137e3a23f945f7652636"],["/archives/2023/index.html","0d30e2d22f991defdecf5afe195e4be0"],["/archives/2024/02/index.html","64566aa39e6da7c8512b5949e9696f68"],["/archives/2024/03/index.html","3cfc53859530a5b771563c211bd8799e"],["/archives/2024/index.html","67e28e6996aa54bf07a4527dae67e56b"],["/archives/index.html","2023414aa74da7bf39b2c04407efb3b7"],["/archives/page/2/index.html","43f37a14572ded5f4f41286a6bf09b4b"],["/archives/page/3/index.html","6e16a813b67342ef2889c91b73d61f30"],["/archives/page/4/index.html","6aa92ac71ad0a3b92b28c929f0137813"],["/archives/page/5/index.html","0de16776e12031521660cc20db9b5a9d"],["/categories/index.html","2b3d2c3499bf73a12fa271a6303fb4ef"],["/categories/学习笔记/index.html","20e083af081d48fb6a99545de66ec020"],["/categories/网站建设/hexo/index.html","561ec7abf0bc1064c092776547be1745"],["/categories/网站建设/index.html","914f108f4cdf50a0a0b46276f6286e7f"],["/categories/网络相关/EvE-NG/index.html","acdc69ccad342ce0c326387d42b890d6"],["/categories/网络相关/H3C/index.html","6ceee68c79a12a7c32fa4596d940aa3a"],["/categories/网络相关/index.html","0acdbd80e9d24025a0f8ae3a42f63eab"],["/categories/网络相关/华为/index.html","82df693c0c7f9a641ab50211a611ef66"],["/categories/网络相关/锐捷/index.html","5843c8146e087fcbe37dbfe60b4cb31b"],["/categories/虚拟化/Horizon/index.html","a4c169a40bdf0b00ceeb3f537b471634"],["/categories/虚拟化/Horizon/page/2/index.html","4df47b26b247c84eb2ea21c382926a31"],["/categories/虚拟化/VMware/index.html","8e730fce435fd82815de5fd27d441cb2"],["/categories/虚拟化/index.html","d2d99a9cdefefa0f9255d584b06cdcae"],["/categories/虚拟化/page/2/index.html","b496012c85cbeead8ae7c28a04b7d803"],["/categories/虚拟化/page/3/index.html","67d39c46595dad6b8c063651e8fd2c52"],["/categories/虚拟化/vSphere/VMware/index.html","dab3cc09595ad4d0c77536308b73012d"],["/categories/虚拟化/vSphere/index.html","cf9f7484209fe19a9d5ba9122f396995"],["/charts/index.html","db3d46250b56278a7c6286e765f3a0de"],["/comment/index.html","5f11a843a3bf92391ebf45239254b3d4"],["/css/custom.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/index.css","b3f2a6ce45a0b5de37631f6b54d9ef16"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/Avatar.png","f077e9dd4777008308812082b610d248"],["/img/alipay.jpg","fa447508817875e5c8d7e52fcbe56696"],["/img/archive.jpg","d816a4e7454cca4f675ba7cfe5b8224f"],["/img/background.jpg","1229144fc682676e7a2b49e1ee309b98"],["/img/default_top_img.jpg","84ea6f3cf2e063389c57d517d1694b3a"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","a2dc9668f2cf170fe3efeb263128b0e7"],["/img/tag_img.jpg","e52cc0e889d7c9bff36997cf30765856"],["/index.html","2572d9976380326c248d0c8f105eda22"],["/js/main.js","cb1293dd47e361d4784be03a6788eaf7"],["/js/search/algolia.js","c361589555f3c5138d4a7cd5f71b889a"],["/js/search/local-search.js","067bcc51ed4388f87040ab516569f9e6"],["/js/tw_cn.js","fd2faf7f2f71df78dd71f5e441819b9c"],["/js/utils.js","80c3d558b0800ac8755dc771c68049a2"],["/links/index.html","8fcc8f42076ea9f1d175c489d14eef9b"],["/page/2/index.html","8fbb51e27129cb79cbf32e38f9d3f598"],["/page/3/index.html","e42b5575a4cb2c13674b668969d85d75"],["/page/4/index.html","17f752cd3fe97e5dcea273e1a3919034"],["/page/5/index.html","fb9722b7ea5d1e1eeda75e31adff0450"],["/post/13022a98.html","602cf1739007c0d22d710704cfb13529"],["/post/1557300456.html","69f5144619f02121e7c864ff3ddf8575"],["/post/1562883640.html","f9249426f05f641a8f4a6657429ec790"],["/post/1807458936.html","6979452bd582793b249b82396f968877"],["/post/1817709106.html","825aa9ae0c9fb3ada2171bf7d1bba7b9"],["/post/200515.html","c30bc15057dc6a67db771e7c9f700874"],["/post/200517.html","7bf18a107991d4ef460b8c6492981ccf"],["/post/200518.html","03fdfa5146634cbc0e5b37e841383b0a"],["/post/2041350213.html","2c4a83cc5e5ca68b54b13e37a620665d"],["/post/210315.html","13170cced9a042498ec7bcdfab4d954f"],["/post/210319.html","2b20e4c33c5735582c804a2cfd556789"],["/post/2103191.html","19663bf22bf4dfc0688c13c9714aac64"],["/post/2103192.html","0ff5411d63f52c0b726e0773530d26b4"],["/post/210626.html","afd9a5bb024774b0274736edee723662"],["/post/210801.html","9a314268901297073dbf9a563a2ee395"],["/post/2271410173.html","facf2cbb49b2b2985d5b087f9a31dc3a"],["/post/2437986504.html","b0b8587dd1c3cf293604a97d54b36ed8"],["/post/2795962120.html","9b4ebfcf95f5914485e0adb0c436a487"],["/post/3576033258.html","aac539853b136ef796042cc49cf6ec99"],["/post/35c92e1a.html","919e7b35f737676ed34887750cebeb28"],["/post/3677894519.html","8302fed777264f3e96bfca874948eb2f"],["/post/3afe2615.html","456fa69dab67d84a8191bf8525c75a54"],["/post/404934634.html","3ce37f8fa8e2f77934883f7bf7fd354e"],["/post/4203229419.html","7ea2ed79e46bc7d791bab98de9cfd1a4"],["/post/4581e758.html","a322c22ae32718aa283770fb0ba0fb03"],["/post/61443.html","ec3f04247a60f4709d7d04d522a02fe3"],["/post/657905a1.html","c3079d60a961f4ff9952e80875d1d584"],["/post/76e0150d.html","b2d773b75274547af7f2bcbe8dedf6be"],["/post/80fdc049.html","2a17da045f1f54d3d3a0005ea446e297"],["/post/a3146603.html","30953446953500b30fdc48a2f17ee156"],["/post/a66fd0fd.html","2326b7205babd8ede0de8b17197aa85e"],["/post/a6e75a2b.html","23aa65775d47f21179cf20968b479187"],["/post/aac6bd89.html","286e059bf7d22a0fe29d355a04329b86"],["/post/abae461c.html","2cd9148af51bc26ae0ea1b0a1a001d77"],["/post/aof3dfe.html","914bd945e4acc78be231b175afaf81db"],["/post/b5331bb6.html","41ff16fbe501ef69bf5418aebd4c08a8"],["/post/b8091e0.html","e50214a4665e1b16aa48c61708e2f7dd"],["/post/c8411948.html","05d505999ee7bf795e7819fbc296aaef"],["/post/db4a72da.html","aa3c810df8f2c59c83830531f1c9ad11"],["/post/fa31a270.html","e69f4b99e68f53bfb6b07f188f1c3527"],["/post/fabc15fe.html","9d6bd03bb9e962a70ab3d866d40c25dc"],["/sw-register.js","789331bc5c231808c3d5377d844bbf10"],["/tags/Chart/index.html","bba790f08fad6bd045ec5440fdcf1fe2"],["/tags/ESXi/index.html","7deed1279c836240c2054e73ef6edebd"],["/tags/Echarts/index.html","054bfef8b29cb5dbbf56bba6c3d5f27c"],["/tags/H3C/index.html","6da7a1ae78407688862dec2f13bae6e9"],["/tags/Horizon/index.html","5b50f46cfe1baff0149700c93ea45e8c"],["/tags/Horizon/page/2/index.html","e6e39ac47c20c8629484c4995f2ae0c7"],["/tags/Markdown/index.html","dcef97bb1f0d4095be50b43a622040b5"],["/tags/VMware/index.html","8912848af1ef717a5bc6fdf919b6376c"],["/tags/VMware/page/2/index.html","da0865ccbb182e6417fc890d46f592f6"],["/tags/Windows-Server/index.html","d58d463a68ebe52c9f14def4c81595de"],["/tags/Workstation/index.html","29cbd924808fc3c4e2fb9fa14cfd1165"],["/tags/butterfly/index.html","966a8967a01ade7336c4ba9f88c57fac"],["/tags/hexo/index.html","82490b2ef66d51c7300c26884cf69de2"],["/tags/index.html","3f61d805891e729a59056c3837e123f0"],["/tags/vCenter/index.html","2dad0a7538abf20c4f549cfe89b6fd87"],["/tags/vSphere/index.html","6217f68b6e0b81120b6b4bba099ddddd"],["/tags/华为/index.html","109e6775f4e0dfeff9b91aac399289bd"],["/tags/模拟器/index.html","5f87ca612994104bb0cbf74e6018adf9"],["/tags/网络/index.html","0cd9a80d5bb6f6a428bae5ed2f26be21"],["/tags/网络基础知识/index.html","d3955aa006a34d98eed35d04e204c8c2"],["/tags/虚拟化/index.html","984effa0446f59a7356d570f1ead5643"],["/tags/锐捷/index.html","f1b515fb1a5fbd44d7861e75f164747d"],["/vCenter/index.html","04e4e84bba37201ab62e98a8d782089a"],["/vCloud-Director/index.html","1630abf0098c48196d4b5225303c4377"],["/vSAN/index.html","842b23b6b9ea6fcb22aade348f53459d"],["/vSphere/index.html","94e30d07952c112d5c95907a9653686b"]];
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
