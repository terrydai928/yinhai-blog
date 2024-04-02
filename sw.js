/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/KVM/index.html","f4d4fea731c727deb495e7ec2ea2bcce"],["/NSX/index.html","d01c1e1737dc7a065fe6b2a779748baa"],["/Storage/index.html","54a2e60ad266e464e153cd5ac0d24a87"],["/Veeam/index.html","ff4901f69f680d767e49ac1c8bec2e80"],["/Veritas/index.html","f8bb8b6f5ee8fbaf1061cf9547b24315"],["/about/index.html","ef84f555c99627369a59125047cd6fbf"],["/archives/2020/05/index.html","49e194b6bbad318372c30b2315fb44ad"],["/archives/2020/06/index.html","a37af8b7a370a312ed558f21432292d1"],["/archives/2020/08/index.html","00b12964c8365b1b2d7ea38a8f2775d7"],["/archives/2020/index.html","b05eedb85fd3b217d7637dd7a407bfe2"],["/archives/2021/03/index.html","5fceb191b44c13bb36474b602e4d4ae1"],["/archives/2021/06/index.html","ebdadbcc1cf244f717fc5cb4d4b3e664"],["/archives/2021/07/index.html","2c7109f893a72388ad06c0f13e95688c"],["/archives/2021/08/index.html","e6e62b4b2aed2e2e31db9f3462f1e710"],["/archives/2021/index.html","59c2fd3aa1be8c58b1a942641eb752e7"],["/archives/2021/page/2/index.html","1197611cbe4bf337db6a19382fc7d8d1"],["/archives/2022/01/index.html","33838f6cb4e4c7f966db63a685eae950"],["/archives/2022/03/index.html","eb59e61d5fa5952006b028027b4b0744"],["/archives/2022/04/index.html","5ac42c002bc96c4dfe73340bedaefe15"],["/archives/2022/05/index.html","b8954690855be8eb1dbff57447ce4f35"],["/archives/2022/index.html","dc42282a976f213cf464f05a9d7d59c4"],["/archives/2022/page/2/index.html","6e77cf40c24e03c5e50fbdc3f8c8e5c3"],["/archives/2023/03/index.html","14725fb9c8cf6796486cb1221715a695"],["/archives/2023/index.html","af30b12e60805765fca4f4d6767935b4"],["/archives/2024/02/index.html","b3f9d9711f38846b0a6e59b9b11f7b43"],["/archives/2024/03/index.html","e30c78ca63643c32d487025cb312c182"],["/archives/2024/04/index.html","08a1c006974df3da28acc49e54e0cfc2"],["/archives/2024/index.html","e0e01d38ad877556aa7a592c04d596ab"],["/archives/index.html","d2bb00e7aa7f9a01eb176ed9658a9283"],["/archives/page/2/index.html","b05fb79ec20c02fbd35235fc8a87af55"],["/archives/page/3/index.html","ec29f2cea62a0bd9c8b4e4bf75101fa1"],["/archives/page/4/index.html","02fe7cedf43666e81a7788d1822359a6"],["/archives/page/5/index.html","6eb0081560b21d547044277f8009e70a"],["/categories/index.html","8ab203ff0b9a703d4119f83ad94b0072"],["/categories/信息安全，工控安全/index.html","34ba25d79137fdee379987bc2c559bb3"],["/categories/学习笔记/index.html","d4d0b73da3642d4fd219030ca914afe0"],["/categories/网站建设/hexo/index.html","bc7f747b32ba6cde34f70081b1fdc354"],["/categories/网站建设/index.html","a876b8e9f89bee6a8f2a3008328adeae"],["/categories/网络相关/EvE-NG/index.html","0efc6d9243ab437073af43a3b2aa5b25"],["/categories/网络相关/H3C/index.html","2471cf2361f4ff31b01045e97c5a8dc5"],["/categories/网络相关/index.html","193cb239dc1f31d331a962c3a05ec585"],["/categories/网络相关/华为/index.html","29da74091a74a5302d5fb1d77363ef2a"],["/categories/网络相关/锐捷/index.html","2007bace8c82e23589a8b9370f6c9bd6"],["/categories/虚拟化/Horizon/index.html","a4290337d55e7d6b5fbc345d52ea097d"],["/categories/虚拟化/Horizon/page/2/index.html","6b20ce5800da6c189993d7291983f4f6"],["/categories/虚拟化/VMware/index.html","422ad179efee576cbcc81601785abf54"],["/categories/虚拟化/index.html","0840219f716139e00425587e6257987f"],["/categories/虚拟化/page/2/index.html","40ab30441e72db08d2dd05df460f6f22"],["/categories/虚拟化/page/3/index.html","8a11a87a1b875584acea7b89d8be6746"],["/categories/虚拟化/vSphere/VMware/index.html","d224ff87c3e4e7afb97348242d583b3a"],["/categories/虚拟化/vSphere/index.html","f11ff2f70706b69cb186203143fd7dad"],["/categories/虚拟化，vSAN/index.html","c6f35468f683748e60b49e5b91e1a2e7"],["/charts/index.html","b5ccb269b4ec25e49a139f8f76cca639"],["/comment/index.html","9f0d9c74f76baa5e5e62d29be1fc5923"],["/css/custom.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/index.css","b3f2a6ce45a0b5de37631f6b54d9ef16"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/Avatar.png","f077e9dd4777008308812082b610d248"],["/img/alipay.jpg","fa447508817875e5c8d7e52fcbe56696"],["/img/archive.jpg","d816a4e7454cca4f675ba7cfe5b8224f"],["/img/background.jpg","1229144fc682676e7a2b49e1ee309b98"],["/img/default_top_img.jpg","84ea6f3cf2e063389c57d517d1694b3a"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","a2dc9668f2cf170fe3efeb263128b0e7"],["/img/tag_img.jpg","e52cc0e889d7c9bff36997cf30765856"],["/index.html","bb695e51813d92a781311ef1104285b1"],["/js/main.js","cb1293dd47e361d4784be03a6788eaf7"],["/js/search/algolia.js","c361589555f3c5138d4a7cd5f71b889a"],["/js/search/local-search.js","067bcc51ed4388f87040ab516569f9e6"],["/js/tw_cn.js","fd2faf7f2f71df78dd71f5e441819b9c"],["/js/utils.js","80c3d558b0800ac8755dc771c68049a2"],["/links/index.html","22888b3f9d09950de75c08ef470d5c15"],["/page/2/index.html","2462c40210c6e3d27d39239ede6a5d8a"],["/page/3/index.html","5a658e6de0fb4512bf60c54aeaf62c83"],["/page/4/index.html","f75f713485ad20bad688b52e4d95dad3"],["/page/5/index.html","229449e1df4833927f02a194f6afced1"],["/post/13022a98.html","b64f2396a87f6b15654c01e248ee83cc"],["/post/1557300456.html","b3049f735ccf4e60619866a5671c67da"],["/post/1562883640.html","59163ecaff1c7f684c3f0a8ad9ed6d79"],["/post/156415027.html","51dc0ad3d6b4108d3700e61c5440959c"],["/post/1807458936.html","13a7a899cea6a5fdf1b39dde6c99518e"],["/post/1817709106.html","e22ed4a8c69b0ac484663c74e3eb86e9"],["/post/200515.html","0daa75b8e87393e2714b51a789fb6e53"],["/post/200517.html","4ba4c289c685ae553857bc77e9e91772"],["/post/200518.html","98e6bbdf3255f4bcf18e55cdda929bcb"],["/post/2041350213.html","f5f7794d0c85895845290ab53fda4510"],["/post/210315.html","695ab2032cf9954133f572aa6acd6887"],["/post/210319.html","d58db572665e0ec58bbf240c91e09579"],["/post/2103191.html","2ee3cde39aeadb77ac2ed13d8f9717a3"],["/post/2103192.html","8eb0e50f31fd3d28b9bbb848f48cb607"],["/post/210626.html","c26dcff43608c31ba436958959c5e2e1"],["/post/210801.html","9e754e0b7b19d59ce79bedf82b112165"],["/post/2271410173.html","eb795ce49f17d982701ecc76859d49e6"],["/post/2437986504.html","a45ca4e638176d79e4b8d6df6044bbbc"],["/post/2795962120.html","24abf37efa57c2f91dea1ac6fc548ff7"],["/post/3274621697.html","22ad30cb529ef9c4e4e839a0c074016a"],["/post/3576033258.html","6b77d555c2457a071ba842fd12449339"],["/post/35c92e1a.html","d4f3317ba6d9c6a2dd76e61319cd6ea2"],["/post/3677894519.html","399bbd2c44a292e8b51358fae2e4bb2b"],["/post/3883376956.html","e1c59a9986a3bc49298f06ec8d1a7a76"],["/post/3afe2615.html","2741dab2114ca8643bc1514d6d8f8bbd"],["/post/404934634.html","bc0aad3e505ca2fd48b61e24d778e678"],["/post/4203229419.html","f2583d8fb7ba0d83c20f14d83ea0a626"],["/post/4581e758.html","1fe8631c8a67fb5c19acd4bc0260f64e"],["/post/61443.html","9eb95aa4e03d75f25be6003141e342bc"],["/post/657905a1.html","0130753cdda38e72b0dc05e2da82ebdf"],["/post/76e0150d.html","991e11c7cec52572cc9e12ac651b5e07"],["/post/80fdc049.html","500c2e714fe91100c40a3b90eb056c1c"],["/post/a3146603.html","494606f0692fa634456ec4d9108f7665"],["/post/a66fd0fd.html","47e67bc2730f88d343b097bb589014e3"],["/post/a6e75a2b.html","ee662ec23c5056d0813e16396807b71a"],["/post/aac6bd89.html","76de608000dad9989f2ed9d9cf3b0dda"],["/post/abae461c.html","50f9ecaf2b5be2f677b565474daa784f"],["/post/aof3dfe.html","c221c219591a692784968346e6cd563e"],["/post/b5331bb6.html","1f83d1ebf03e7ace51078569ea33c96b"],["/post/b8091e0.html","1a428b49b39701d102c2e046c460aff2"],["/post/c8411948.html","f6a81263b296a96a216e161f13f42258"],["/post/db4a72da.html","cc7a2a4e67896bd6e1fa7b499513cc8e"],["/post/fa31a270.html","dbe7731aef2a82871be1779cc660f296"],["/post/fabc15fe.html","85424eb3b9d77e4cbb8d825c74c5d819"],["/sw-register.js","803ef11f53a174fcf75a64af03e8e290"],["/tags/Chart/index.html","c05736b69645f36c5c7f21a19ff07136"],["/tags/ESXi/index.html","c3e98b6b63d06b797cfb0a43497a6f89"],["/tags/Echarts/index.html","8e82ad601e5525a8c3fe3ec1b4ef4c5b"],["/tags/H3C/index.html","ff2e3d033a27ca4339f7d4448e84ef83"],["/tags/Horizon/index.html","4c4b1ff97ef32a9554b6b32af3b78d06"],["/tags/Horizon/page/2/index.html","b3e2ae62935ea49f6873c5eb49d1d6dd"],["/tags/Markdown/index.html","443b97b6b7f5d3276b41f62f1d3ed4a4"],["/tags/VMware/index.html","f05edf67f40c272ccde812ac64dcb598"],["/tags/VMware/page/2/index.html","268afc7a4a612de67c2eac604f6e4c1f"],["/tags/Windows-Server/index.html","6bf6b7dd63cca33ed3327877ec73fe49"],["/tags/Workstation/index.html","62f28bb1ea14a6036d00b7d2c4fbcbd7"],["/tags/butterfly/index.html","f543bb233d0c9df70e094e0bebc4c161"],["/tags/hexo/index.html","25217e92aa87d9d9e13be29092f71b95"],["/tags/index.html","fc5fb3a7ae89448b8923862e4574fd2b"],["/tags/vCenter/index.html","8b54e9531a0dd1c96fdc6a572e29e349"],["/tags/vSAN/index.html","8a5f6e1aaf307aed6f31fcdb03c3045c"],["/tags/vSphere/index.html","2a37fc514ddeb9ca1462ab86a87b31f8"],["/tags/信息安全/index.html","affbc326fd93464bf4764c5678e7a335"],["/tags/华为/index.html","2a8daf19313dcc1e3088f5f636f36727"],["/tags/工控安全/index.html","a9c26ebde057becebaf58f7aea0b4ae7"],["/tags/模拟器/index.html","b6a83869af6541904b16586cf1acf54b"],["/tags/网络/index.html","6f628d5a26b3648a97f405012a281e12"],["/tags/网络基础知识/index.html","7688eebf1aa7999ee1d2a0776ac5994b"],["/tags/虚拟化/index.html","07d0add3bd15980a57f98a10d56f82c5"],["/tags/虚拟化/page/2/index.html","da24b2222bf643ff8d86e0832d1d5755"],["/tags/锐捷/index.html","b0c6b8f9f7684a716881c5211ec3ee4e"],["/vCenter/index.html","cb8f595f50b068afed22fc0728c34843"],["/vCloud-Director/index.html","8b3696d3384d6128f9b40c04e56253c0"],["/vSAN/index.html","f131494c1937544cf2c5ff8157a76b7b"],["/vSphere/index.html","105e7c717668a31b0197184755e0615a"]];
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
