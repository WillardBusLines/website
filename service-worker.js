"use strict";var precacheConfig=[["/index.html","391dc4a2444c36ee2b75ccae40d5d3f3"],["/static/css/main.3efd2260.css","1ad22950486a84389b2aa8efcbcd0499"],["/static/js/main.bc70bb4c.js","0a96109ccabdc55eb133671350b895ce"],["/static/media/55years.dacc0cf8.png","dacc0cf8caa465b77f4a954a56003578"],["/static/media/ApplicationForm2013.ed35f2aa.pdf","ed35f2aa237dfaae5765ab07556edc36"],["/static/media/BusBuddies.8fed59e1.jpg","8fed59e13c885fb0ba55bcb4a0b46281"],["/static/media/BusLineupWithLogo.2f2cd1c7.png","2f2cd1c720b81f2e10826a984e636150"],["/static/media/BusTop.d72742d1.jpg","d72742d1db4c92ce31348b1428ac82f0"],["/static/media/Charter1.a65f5905.jpg","a65f59052d6e7dbbbf173cd7daa933e4"],["/static/media/Charter2.ee9d61f8.jpg","ee9d61f845d3df742af4395ded635fc7"],["/static/media/Charter3.f778cafc.jpg","f778cafc596e9951cdb8703f42a4108b"],["/static/media/Charter4.2069430b.jpg","2069430b2ec7db8d0ce8274af9e1f062"],["/static/media/Charter5.d248355d.jpg","d248355dad9b5d92b57d6b6b4dbcb974"],["/static/media/Charter6.0c08d9e4.jpg","0c08d9e4eebe84a14f7f9bfe0bd98cc3"],["/static/media/Charter7.0811035f.jpg","0811035fa68099c58b7f3778ec53ee2f"],["/static/media/Circa1991.0a7a3855.png","0a7a3855411f478b6b24641804d9704c"],["/static/media/Dakota-and-Brantley.0e75cc3d.jpg","0e75cc3d1316626703130caa7a035da1"],["/static/media/GarageAndBuses.f2c7677d.jpg","f2c7677d8bc8a8da85f62f5d81456671"],["/static/media/HamburgerIcon.79b18a5d.png","79b18a5d205cdebc264fc06817b73584"],["/static/media/IStopYouStop.25c623ef.png","25c623ef20353a4c1d4b15170d588f0b"],["/static/media/IStopYouStop.85345b4a.png","85345b4ade7320f994213a3ac92083b6"],["/static/media/LogoOnBus.0395e570.png","0395e570ea575bfafa464665e0a18e31"],["/static/media/YardByDrone.2bd59160.jpg","2bd591600f60108ebed41488791b739a"],["/static/media/bus-driver-appreciation.579c1f49.png","579c1f493a893ee028bfd03772255ba0"],["/static/media/i-stop-you-stop.0b1feae0.png","0b1feae0c31a42722a0393c2dc410049"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(a){return a.redirected?("body"in a?Promise.resolve(a.body):a.blob()).then(function(e){return new Response(e,{headers:a.headers,status:a.status,statusText:a.statusText})}):Promise.resolve(a)},createCacheKey=function(e,a,t,n){var c=new URL(e);return n&&c.pathname.match(n)||(c.search+=(c.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),c.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(a){return t.every(function(e){return!e.test(a[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],n=new URL(a,self.location),c=createCacheKey(n,hashParamName,t,/\.\w{8}\./);return[n.toString(),c]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var e=new Request(a,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+a+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(a,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(a){return a.keys().then(function(e){return Promise.all(e.map(function(e){if(!t.has(e.url))return a.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(a){if("GET"===a.request.method){var e,t=stripIgnoredUrlParameters(a.request.url,ignoreUrlParametersMatching),n="index.html";(e=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,n),e=urlsToCacheKeys.has(t));var c="/index.html";!e&&"navigate"===a.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],a.request.url)&&(t=new URL(c,self.location).toString(),e=urlsToCacheKeys.has(t)),e&&a.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',a.request.url,e),fetch(a.request)}))}});