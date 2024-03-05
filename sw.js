/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/05/10/网站建设-hexo-Hexo-简介及利用GitHub搭建博客/index.html","68b5066f920649270f5a83e973192177"],["/2020/05/15/网站建设-hexo-hexo-theme-butterfly主题安装/index.html","fa11444ca18cd2281bcc0c7ccb77c12a"],["/2020/05/17/网站建设-hexo-Hexo-Front-matter-介绍/index.html","6dae266c98293e65cca7add6ad3a689a"],["/2020/05/18/学习笔记-Markdown-基本语法/index.html","cf257796e295df26d9760144bed51c8f"],["/2020/05/20/网站建设-hexo-Hexo-相关的优秀插件的精选列表/index.html","c8f6ab1ef7b8a339e9a3a57f192f48b1"],["/2020/06/06/网站建设-hexo-了解搭建Hexo博客的工作原理/index.html","9c04adcab279c723b456b49f8188a7de"],["/2020/08/07/网站建设-hexo-在-Hexo-中插入-Chart-动态图表/index.html","cf0338ca054183e6d94701128dc72767"],["/2020/08/10/网站建设-hexo-在-Hexo-中插入-ECharts-动态图表/index.html","e4c3619c83a30ffae0100fe033f6990f"],["/2021/03/15/网络相关-网络设备模拟器之初识/index.html","6e1ac74273c99fd0629f003ef78a15a5"],["/2021/03/19/网络相关-EvE-NG-网络设备模拟器之EvE-NG安装配置/index.html","f8c9ec7585713893a9b74be8143a9c14"],["/2021/03/19/网络相关-H3C-网络设备模拟器之H3C模拟器HCL安装配置/index.html","296892c9c1bc9fa34d03688418f74b2d"],["/2021/03/19/网络相关-华为-网络设备模拟器之华为eNSP安装配置/index.html","d13f82d4633f5f4500d980cc507a7dbf"],["/2021/06/26/虚拟化-VMware-虚拟机VMware-vSphere-ESXi-7-0安装配置详细教程-附下载/index.html","07133ac523625e269bf038081250c144"],["/2021/06/27/虚拟化-VMware-vCenter7（ESXi-7-0）VCSA的安装教程/index.html","8458eae407efd1131ff03dec74e84e05"],["/2021/06/27/虚拟化-Windows-Server-2019-搭建DNS服务器/index.html","1b5d96e7b7cfb27417384fb9767e8fef"],["/2021/06/28/虚拟化-VMware-在VMWare-ESXi中网络类型为什么要从E1000调整为VMXNET3/index.html","3ffd1a3999934d04396402e1a5f551e9"],["/2021/06/29/虚拟化-VMware-不参加VMWare的培训，如何获取VCP证书/index.html","2f8c905711f70979d281c20ba4df37dc"],["/2021/06/30/虚拟化-VMware-了解VMware-Workstation的三种网络模式（桥接、NAT、Host-only）/index.html","2c954ae49c64cbc6cf6d88415d9f021b"],["/2021/07/05/网络相关-无公网IP又想访问家里的设备？用ZeroTier-One组建个人超级内网/index.html","9ea2d568c5ddf2bc20f1e5cc315b95e8"],["/2021/07/10/虚拟化-利用Windows-Server-搭建一个iSCSI存储资源池/index.html","6ccf670a150c7fd123e49f2ab055ca06"],["/2021/07/12/虚拟化-VMware-如何将VCSA-直接部署在VMware-Workstation上/index.html","2e8b47f6f2f82c975e57ede31602913a"],["/2021/08/15/网络相关-H3C-HCL最新版模拟器3-0-1版本上线啦！/index.html","13b42b986324468a10cc1ebcaf2fa61d"],["/2021/08/23/网络相关-H3C-H3C配置经典全面教程，适合初学者！/index.html","aef7f2971ce7dfa25c97d6d5024b76bb"],["/2021/08/23/虚拟化-VMware-解决VCSA7-0-u2-异常停机后-no-healthy-upstream问题/index.html","31afa6cdb10fae9d145bfc1904f1d6ee"],["/2021/08/24/虚拟化-VMware-VMware磁盘的三种置备模式：精简置备厚置备置零厚置备延迟置零/index.html","0e1110a4e59555f84a660b9e6298fa66"],["/2021/08/24/虚拟化-VMware-使用VMware-vCenter-Converter-6-2进行物理机虚拟化/index.html","b4d2faed4e8c76abc4122128b9b94016"],["/2022/03/24/网络相关-锐捷-配置锐捷交换机的SSH登录/index.html","9c3d21fffcf5e7ce689a77965bbb35b0"],["/2022/04/25/网络相关-华为-华为交换机SSH配置一看就懂-华为交换机配置ssh/index.html","fcc8f5663116813c4b019959b3fdcb59"],["/2024/02/02/虚拟化-VMware-ESXI-添加利旧的硬盘时提示无法创建-VMFS-数据存储及无法更新磁盘分区的解决办法/index.html","8063522ed838d1205b19a029581adf61"],["/KVM/index.html","2fc89b34382ec60e37ddd259c1e09711"],["/NSX/index.html","ae1b22cb08963bb78f39fb77ea03561b"],["/Storage/index.html","2714e1ad9e4ec7955c5ad87b15f6e04b"],["/Veeam/index.html","a5d27698a6df612c232a87e4fd53ef99"],["/Veritas/index.html","9cc1a2428564df5fb68f641eb6a74edb"],["/about/index.html","a4534089c34d354a58cdc3ad3875f435"],["/archives/2020/05/index.html","247e6411f052df69d8e0aa93de7e908e"],["/archives/2020/06/index.html","b006f52d063757f30da80775b11e7831"],["/archives/2020/08/index.html","d411ec0b25812a346a557f2081672963"],["/archives/2020/index.html","41e550539a9493fc543949e13b846188"],["/archives/2021/03/index.html","b4297b539504f7f13fbce35552de7a4b"],["/archives/2021/06/index.html","959355bbc4ee5b6b5decd49e1b4298e8"],["/archives/2021/07/index.html","c42a2d0a20086d1130ed6d7ec3ab4ed5"],["/archives/2021/08/index.html","070d205418efeac40713c17d5ad744d2"],["/archives/2021/index.html","0a9db49f2e8a2c0be3e8520831e01233"],["/archives/2021/page/2/index.html","d3d31e34f486d46bcc6773ea3dd4c674"],["/archives/2022/03/index.html","dfa9d121c18bc696659158bf34d000e5"],["/archives/2022/04/index.html","d5500d8124f68b541b980498a0bf2262"],["/archives/2022/index.html","f36fbcb1ecad620e7e57c63909418c64"],["/archives/2024/02/index.html","eef5d8776757f69ed2a515491f73a820"],["/archives/2024/index.html","3874e7c70a5f12028d0ee0ec757c9874"],["/archives/index.html","2f63664f18d896857d06f2ac242c0b49"],["/archives/page/2/index.html","8af20b776995adf6643e7cfafb58a5f6"],["/archives/page/3/index.html","867ce229149cb116e6aada071cd43b97"],["/categories/index.html","765608bef84f60e4bc66c768c16e7871"],["/categories/学习笔记/index.html","9a92ca2180b116907bb832ed9f750ecf"],["/categories/网站建设/hexo/index.html","579571d6fec282ff93834d34e1777e15"],["/categories/网站建设/index.html","53262ae1d7bd671138779d91329157a0"],["/categories/网络相关/EvE-NG/index.html","6593613f63b6c8131a66515c14d5ad49"],["/categories/网络相关/H3C/index.html","d3e8cc309c41eb5ca74c559f81431194"],["/categories/网络相关/index.html","8fb8daedce2b21ac4d86ee9013d07680"],["/categories/网络相关/华为/index.html","4185953b1b4cdf1431a1b0ceb45f09ba"],["/categories/网络相关/锐捷/index.html","ceb892f309542ca32b596b9f8b428996"],["/categories/虚拟化/VMware/index.html","a07a75bd68329efc2fa7abfddb5c6c8f"],["/categories/虚拟化/index.html","21f7b9ff1ad8ddacc9c1db216f8e850b"],["/categories/虚拟化/page/2/index.html","749a10e8b703a93c674713ff2aecba3c"],["/categories/虚拟化/vSphere/VMware/index.html","132dfa4135dd89bf29a5bb8c6e732cbd"],["/categories/虚拟化/vSphere/index.html","bdb95e80bd31e4543ebcde3f187f3168"],["/charts/index.html","e0b9fb9ea80d4d5c3446abace6c0807e"],["/comment/index.html","13d567d460d6d3720711d30d6b9a44a0"],["/css/custom.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/index.css","3638f07ac1f5a4825e9ab18d1c410ca0"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/Avatar.png","f077e9dd4777008308812082b610d248"],["/img/alipay.jpg","fa447508817875e5c8d7e52fcbe56696"],["/img/archive.jpg","d816a4e7454cca4f675ba7cfe5b8224f"],["/img/background.jpg","1229144fc682676e7a2b49e1ee309b98"],["/img/default_top_img.jpg","84ea6f3cf2e063389c57d517d1694b3a"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","a2dc9668f2cf170fe3efeb263128b0e7"],["/img/tag_img.jpg","e52cc0e889d7c9bff36997cf30765856"],["/index.html","e1e0ba353ae5ff548d5aa638f6e33c09"],["/js/main.js","cb1293dd47e361d4784be03a6788eaf7"],["/js/search/algolia.js","c361589555f3c5138d4a7cd5f71b889a"],["/js/search/local-search.js","067bcc51ed4388f87040ab516569f9e6"],["/js/tw_cn.js","fd2faf7f2f71df78dd71f5e441819b9c"],["/js/utils.js","80c3d558b0800ac8755dc771c68049a2"],["/links/index.html","91b3d3945567fc56e6ac9f12dc1e522a"],["/page/2/index.html","1586f6e58dfa1484e91c0b921da30573"],["/page/3/index.html","56f6db4a88c7e51638f197e5c5a4641b"],["/sw-register.js","3d93b915b1eb1819120fd2aecefddd61"],["/tags/Chart/index.html","18e829e593f6f41286480f7a5f065689"],["/tags/ESXi/index.html","6ef75556588469fd5aa32445b7b06965"],["/tags/Echarts/index.html","4333b98eaab877529cc6764a41f3cc97"],["/tags/H3C/index.html","a124259bf918d3130b328120d7d5ba8e"],["/tags/Markdown/index.html","b32046ed39e21dd1a2b5e841d397b49e"],["/tags/VMware/index.html","ae1ac16960f5c9032f61bcfa5a7a85bb"],["/tags/Windows-Server/index.html","f8e354eff76f23817436ef3943f2de86"],["/tags/Workstation/index.html","6fd954cc501d6c71e4339dc47426d0fc"],["/tags/butterfly/index.html","96fee67754d765b377df6495b918876c"],["/tags/hexo/index.html","f6ba5f316f076c2a3d112765c514f0ee"],["/tags/index.html","1fb18fc3899c821e02483c39cb5f17a1"],["/tags/vCenter/index.html","6a6c9a3276f2de2b002e8f00d330e1f1"],["/tags/vSphere/index.html","21c8a6ff2dddeb41d625f5a91a376108"],["/tags/华为/index.html","43593890253d1a223eff48f10b3c7fae"],["/tags/模拟器/index.html","722a694072c9dd5f9af33e01042be4a6"],["/tags/网络/index.html","9307a2ae8bb5b8bde0dbd8d5f23aba68"],["/tags/网络基础知识/index.html","cf36b3c019b13de7e8804fd217b7ff9a"],["/tags/锐捷/index.html","1965ea17fa87b5d0d9984a332941772d"],["/vCenter/index.html","4f8bed018b1691362f837c86e774ed98"],["/vCloud-Director/index.html","ea723b3cb39c2409af40dbabb4a2f39b"],["/vSAN/index.html","4a01b7d374aa2135c34738d40d56882c"],["/vSphere/index.html","a320c344dd0368f01a313252565939aa"]];
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
