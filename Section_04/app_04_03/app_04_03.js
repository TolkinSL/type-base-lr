"use strict";
var RequestMethod;
(function (RequestMethod) {
    RequestMethod["GET"] = "GET";
    RequestMethod["POST"] = "POST";
})(RequestMethod || (RequestMethod = {}));
function myFetch1(url, method) {
    console.log('mf1 ' + method);
}
myFetch1('zzz', RequestMethod.POST);
function myFetch2(url, method) {
    console.log('mf2 ' + method);
}
myFetch2('zzz', 'GET');
function myFetch3(url, method) {
    console.log('mf2 ' + method);
}
let myMethod = 'GET';
myFetch3('zzz', myMethod);
