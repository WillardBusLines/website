"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/website/index.html","ce9577d7d07009c1901eeac5b4263603"],["/website/static/css/main.3efd2260.css","1ad22950486a84389b2aa8efcbcd0499"],["/website/static/js/main.2f4cf5c8.js","dce6b8688a9e70336528036d62ce8991"],["/website/static/media/55years.dacc0cf8.png","dacc0cf8caa465b77f4a954a56003578"],["/website/static/media/ApplicationForm2013.ed35f2aa.pdf","ed35f2aa237dfaae5765ab07556edc36"],["/website/static/media/BusBuddies.8fed59e1.jpg","8fed59e13c885fb0ba55bcb4a0b46281"],["/website/static/media/BusLineupWithLogo.2f2cd1c7.png","2f2cd1c720b81f2e10826a984e636150"],["/website/static/media/BusTop.d72742d1.jpg","d72742d1db4c92ce31348b1428ac82f0"],["/website/static/media/Charter1.a65f5905.jpg","a65f59052d6e7dbbbf173cd7daa933e4"],["/website/static/media/Charter2.ee9d61f8.jpg","ee9d61f845d3df742af4395ded635fc7"],["/website/static/media/Charter3.f778cafc.jpg","f778cafc596e9951cdb8703f42a4108b"],["/website/static/media/Charter4.2069430b.jpg","2069430b2ec7db8d0ce8274af9e1f062"],["/website/static/media/Charter5.d248355d.jpg","d248355dad9b5d92b57d6b6b4dbcb974"],["/website/static/media/Charter6.0c08d9e4.jpg","0c08d9e4eebe84a14f7f9bfe0bd98cc3"],["/website/static/media/Charter7.0811035f.jpg","0811035fa68099c58b7f3778ec53ee2f"],["/website/static/media/Circa1991.0a7a3855.png","0a7a3855411f478b6b24641804d9704c"],["/website/static/media/GarageAndBuses.f2c7677d.jpg","f2c7677d8bc8a8da85f62f5d81456671"],["/website/static/media/HamburgerIcon.79b18a5d.png","79b18a5d205cdebc264fc06817b73584"],["/website/static/media/LogoOnBus.0395e570.png","0395e570ea575bfafa464665e0a18e31"],["/website/static/media/YardByDrone.2bd59160.jpg","2bd591600f60108ebed41488791b739a"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,a,n){var r=new URL(e);return n&&r.pathname.match(n)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),r=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),r]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var n=new Request(a,{credentials:"same-origin"});return fetch(n).then(function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(a,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,"index.html"),t=urlsToCacheKeys.has(a));!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(a=new URL("/website/index.html",self.location).toString(),t=urlsToCacheKeys.has(a)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});