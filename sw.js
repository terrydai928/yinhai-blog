/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/05/10/网站建设-hexo-Hexo-简介及利用GitHub搭建博客/index.html","ef98334cc68906156e6107e432a5b6e6"],["/2020/05/15/网站建设-hexo-hexo-theme-butterfly主题安装/index.html","b093b0ee100650768056a4a3bb5896f9"],["/2020/05/17/网站建设-hexo-Hexo-Front-matter-介绍/index.html","76c8cc38c7b931f8f55ea47ef89eb0a3"],["/2020/05/18/学习笔记-Markdown-基本语法/index.html","67bc01f4bfdb328c99d5c154fbf9b586"],["/2020/05/20/网站建设-hexo-Hexo-相关的优秀插件的精选列表/index.html","2c9e65d7dc24c1b98537583ba791b612"],["/2020/06/06/网站建设-hexo-了解搭建Hexo博客的工作原理/index.html","5139de071daa9590e79cd01305b8dfca"],["/2020/08/07/网站建设-hexo-在-Hexo-中插入-Chart-动态图表/index.html","1ecd74df16e6162093c8b3516028a338"],["/2020/08/10/网站建设-hexo-在-Hexo-中插入-ECharts-动态图表/index.html","524678443237bac8a0fffc60d80134ba"],["/2021/03/15/网络相关-网络设备模拟器之初识/index.html","d6e98f4772a8b6a310a13c49926995e4"],["/2021/03/19/网络相关-EvE-NG-网络设备模拟器之EvE-NG安装配置/index.html","853197b48147cda8094e8d0877dfafb9"],["/2021/03/19/网络相关-H3C-网络设备模拟器之H3C模拟器HCL安装配置/index.html","1a3734b2356358624f85c1a06e9ce802"],["/2021/03/19/网络相关-华为-网络设备模拟器之华为eNSP安装配置/index.html","a699703dc7eb31076c1b730a2227b69b"],["/2021/06/26/虚拟化-VMware-虚拟机VMware-vSphere-ESXi-7-0安装配置详细教程-附下载/index.html","e211bbba25ddd64309ea7e7c7555f37d"],["/2021/06/27/虚拟化-VMware-vCenter7（ESXi-7-0）VCSA的安装教程/index.html","47911cdbc48b92e47a1bb19c7c4698c7"],["/2021/06/27/虚拟化-Windows-Server-2019-搭建DNS服务器/index.html","07b8b6d649de9ace1f8bcde6ee5c1f8f"],["/2021/06/28/虚拟化-VMware-在VMWare-ESXi中网络类型为什么要从E1000调整为VMXNET3/index.html","bb8bff0fb8ecc7596fb9101181172bc3"],["/2021/06/29/虚拟化-VMware-不参加VMWare的培训，如何获取VCP证书/index.html","131ab8d06b69cd2e01ddd8cf1bc1aae1"],["/2021/06/30/虚拟化-VMware-了解VMware-Workstation的三种网络模式（桥接、NAT、Host-only）/index.html","c7f134163abc362eb086ed61b6f46fb9"],["/2021/07/05/网络相关-无公网IP又想访问家里的设备？用ZeroTier-One组建个人超级内网/index.html","5f2dfa6042edb207325afc7792e17f01"],["/2021/07/10/虚拟化-利用Windows-Server-搭建一个iSCSI存储资源池/index.html","3947bd9cab5d33326318f6cf3beb7c06"],["/2021/07/12/虚拟化-VMware-如何将VCSA-直接部署在VMware-Workstation上/index.html","51e32fcbc58138ac5687658ad27cf768"],["/2021/08/15/网络相关-H3C-HCL最新版模拟器3-0-1版本上线啦！/index.html","ffceb050a7a7bcb957511e06847bc142"],["/2021/08/23/网络相关-H3C-H3C配置经典全面教程，适合初学者！/index.html","adef2b6b256530986ea46864785a3466"],["/2021/08/23/虚拟化-VMware-解决VCSA7-0-u2-异常停机后-no-healthy-upstream问题/index.html","f62085559cddbcb202f6f95c5782bb41"],["/2021/08/24/虚拟化-VMware-VMware磁盘的三种置备模式：精简置备厚置备置零厚置备延迟置零/index.html","0aa803ab71d6ef9d2edadb05770d53c8"],["/2021/08/24/虚拟化-VMware-使用VMware-vCenter-Converter-6-2进行物理机虚拟化/index.html","97d835474a837e6a054eab5b528fcbbc"],["/2022/03/24/网络相关-锐捷-配置锐捷交换机的SSH登录/index.html","bd7596e2fd9c856c7d07cb13b57cda93"],["/2022/04/25/网络相关-华为-华为交换机SSH配置一看就懂-华为交换机配置ssh/index.html","4cd9960a25e648c789d04d2060f7d0aa"],["/2024/02/02/虚拟化-VMware-ESXI-添加利旧的硬盘时提示无法创建-VMFS-数据存储及无法更新磁盘分区的解决办法/index.html","fde1d4f85b2ad1da45bd36f5832df08c"],["/KVM/index.html","13f13282dcb639a4330affbbd19b1662"],["/NSX/index.html","69540d5bcf8864bb6baef1f91d3f6a14"],["/Storage/index.html","a28e1a512ee37d55c59ed576a8d971c8"],["/Veeam/index.html","a635ca312b3341b1359a9afc0c9371f9"],["/Veritas/index.html","5e365efc0f6b2bbf96be08f775702bf7"],["/about/index.html","58e5916095f904d6f0a4e0332aa0f4e3"],["/archives/2020/05/index.html","bd9173420b21c0af10fce7deacfe9ed4"],["/archives/2020/06/index.html","fd648f4c5dc9f9a86fdc4b00df0d7a17"],["/archives/2020/08/index.html","6572a281c488accf9d026ed5758d6772"],["/archives/2020/index.html","373bb171128a707449eaf66c5c32978f"],["/archives/2021/03/index.html","eef07d59d33f3d0f2bd67324379bea47"],["/archives/2021/06/index.html","c2ccbacfe1e31db48e0323b9b64d0d3c"],["/archives/2021/07/index.html","172f7e4d49040a1e774bc7901c5f4d40"],["/archives/2021/08/index.html","8efdd71540d46c43b556def70ed55ef7"],["/archives/2021/index.html","ebf973536f431a34573e97415e66b2ad"],["/archives/2021/page/2/index.html","531ab5b652556bd6d605c08fa6f4a924"],["/archives/2022/03/index.html","8d9bd224973786ec394cc05b9f3c3b77"],["/archives/2022/04/index.html","40ecd218911606fee68b82059fec69f5"],["/archives/2022/index.html","fbc200721971ee0d4c977016a5238ef6"],["/archives/2024/02/index.html","656d827c28ebc22eaca41d4b0a0f312e"],["/archives/2024/index.html","5b8927d8d68d19b5169f2368dede3f17"],["/archives/index.html","6c4616a1b0dc23cf0a6e21aa79b9e193"],["/archives/page/2/index.html","0ca2fec14cb15a0a861fb9afb9268c17"],["/archives/page/3/index.html","30567ffa3ed8866114fbad04364f2e2e"],["/categories/index.html","cff1866008971c976d64fff2f86709e0"],["/categories/学习笔记/index.html","af75aa151fd8956121fbff92e8689eb8"],["/categories/网站建设/hexo/index.html","ed61c13534a284fac965de7603a71873"],["/categories/网站建设/index.html","26bad70855e3b605de5ec65c4a47c594"],["/categories/网络相关/EvE-NG/index.html","4d2b79f38ebd0bf8741ed491b9435848"],["/categories/网络相关/H3C/index.html","eb4e3f32179c43a9f7de8015beebf182"],["/categories/网络相关/index.html","35d6de5619603e99e881f49e779a60e0"],["/categories/网络相关/华为/index.html","607c25fa5394fc1b5a9d26eea3f68bcc"],["/categories/网络相关/锐捷/index.html","db39d27f219fcf0139e840a65a4dbe34"],["/categories/虚拟化/VMware/index.html","b74c1881b29b40c39f6b7fe6b2a1ae2d"],["/categories/虚拟化/index.html","71159ffe4a07cfa220b9a4ce9fdf7c48"],["/categories/虚拟化/page/2/index.html","61ff09e44547214bfe2c65ee503d7a05"],["/categories/虚拟化/vSphere/VMware/index.html","8871fb9a3e04081a6573707d4b144fa3"],["/categories/虚拟化/vSphere/index.html","5ba65739f7b58829da9bba2e628d4b78"],["/charts/index.html","4667520105e5fc690bb7ec3bdbe27387"],["/comment/index.html","a508669501f5293f85a53989b9da8e13"],["/css/custom.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/index.css","3638f07ac1f5a4825e9ab18d1c410ca0"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/Avatar.png","f077e9dd4777008308812082b610d248"],["/img/alipay.jpg","fa447508817875e5c8d7e52fcbe56696"],["/img/archive.jpg","d816a4e7454cca4f675ba7cfe5b8224f"],["/img/background.jpg","1229144fc682676e7a2b49e1ee309b98"],["/img/default_top_img.jpg","84ea6f3cf2e063389c57d517d1694b3a"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","a2dc9668f2cf170fe3efeb263128b0e7"],["/img/tag_img.jpg","e52cc0e889d7c9bff36997cf30765856"],["/index.html","809bac71aa524a5b065727261782a0a5"],["/js/main.js","cb1293dd47e361d4784be03a6788eaf7"],["/js/search/algolia.js","c361589555f3c5138d4a7cd5f71b889a"],["/js/search/local-search.js","067bcc51ed4388f87040ab516569f9e6"],["/js/tw_cn.js","fd2faf7f2f71df78dd71f5e441819b9c"],["/js/utils.js","80c3d558b0800ac8755dc771c68049a2"],["/links/index.html","717dba397e27e6c74cc0303bbfbb09de"],["/page/2/index.html","03f4f0987496002f2c97458fc069dd71"],["/page/3/index.html","fd3acefd9e36ae7979a0610e3f2ce426"],["/sw-register.js","39f42af39f3618f58ef0f183eb532f94"],["/tags/Chart/index.html","9f79306b1ce637fa89ce95c441534583"],["/tags/ESXi/index.html","03fe661862072a7f8adc7a5509f5983a"],["/tags/Echarts/index.html","7e01033002ac5ebceca830106f7e041c"],["/tags/H3C/index.html","97f64504b1e093e5d4ecfa00b9888046"],["/tags/Markdown/index.html","d08af8098b9be9b96ca29f6c84a72c4e"],["/tags/VMware/index.html","41068d60be81f1e8f09fdca5aa2f6a5b"],["/tags/Windows-Server/index.html","e880a16d85a5f12c26a569cda9a06d9e"],["/tags/Workstation/index.html","90d4757c001cf8963da47245ebc4f5f0"],["/tags/butterfly/index.html","551408252971a56c84c00a79e26116a9"],["/tags/hexo/index.html","4957b3d0c1cb045b28f52a50b360945f"],["/tags/index.html","75c31afa3294b511a7ffb78ed8bff30f"],["/tags/vCenter/index.html","bd4135d73ba153757712d7de8219d2bf"],["/tags/vSphere/index.html","803e2b64655622ba9e9ff0bb93a8eec9"],["/tags/华为/index.html","e5df8dc343a51afc3e445fc472474dd3"],["/tags/模拟器/index.html","e9671fc59902136c72976f6b95d25d61"],["/tags/网络/index.html","8564b42abc9ff78b04db48bf2d295db1"],["/tags/网络基础知识/index.html","025c0ac6cd0c442ac29fdc2e315bd7bc"],["/tags/锐捷/index.html","3389167dd2a07dde1a2310bde45ee432"],["/vCenter/index.html","323d6872fa15a1f5e8fb60c39a45b41d"],["/vCloud-Director/index.html","9b5f3c7c90691bf5d25bb84fff7b90cf"],["/vSAN/index.html","6743952ebb3c6d310041eecf1585cb66"],["/vSphere/index.html","e11934a6c36587cd78b5ccf3f95aaf20"]];
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
