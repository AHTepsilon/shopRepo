var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},r=e.parcelRequire8ba2;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in n){var r=n[e];delete n[e];var o={id:e,exports:{}};return t[e]=o,r.call(o.exports,o,o.exports),o.exports}var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(e,t){n[e]=t},e.parcelRequire8ba2=r),r("1tHc5");var o=r("bQjlg");o=r("bQjlg");r("fXOuZ");var s=r("etBjH"),i=(s=r("etBjH"),r("7xvHX")),a=r("gMVVg"),l=r("eryG9");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class c extends a.FirebaseError{constructor(e,t){super(u(e),`Firebase Storage: ${t} (${u(e)})`),this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,c.prototype)}_codeEquals(e){return u(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}\n${this.customData.serverResponse}`:this.message=this._baseMessage}}function u(e){return"storage/"+e}function h(){return new c("unknown","An unknown error occurred, please check the error payload for server response.")}function d(){return new c("canceled","User canceled the upload/download.")}function p(){return new c("cannot-slice-blob","Cannot slice blob for upload. Please retry the upload.")}function f(e){return new c("invalid-argument",e)}function g(){return new c("app-deleted","The Firebase app was deleted.")}function _(e,t){return new c("invalid-format","String does not match format '"+e+"': "+t)}function m(e){throw new c("internal-error","Internal error: "+e)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return 0===this.path.length}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let n;try{n=b.makeFromUrl(e,t)}catch(t){return new b(e,"")}if(""===n.path)return n;throw new c("invalid-default-bucket","Invalid default bucket '"+e+"'.")}static makeFromUrl(e,t){let n=null;const r="([A-Za-z0-9.\\-_]+)";const o=new RegExp("^gs://"+r+"(/(.*))?$","i");function s(e){e.path_=decodeURIComponent(e.path)}const i=t.replace(/[.]/g,"\\."),a=[{regex:o,indices:{bucket:1,path:3},postModify:function(e){"/"===e.path.charAt(e.path.length-1)&&(e.path_=e.path_.slice(0,-1))}},{regex:new RegExp(`^https?://${i}/v[A-Za-z0-9_]+/b/${r}/o(/([^?#]*).*)?$`,"i"),indices:{bucket:1,path:3},postModify:s},{regex:new RegExp(`^https?://${"firebasestorage.googleapis.com"===t?"(?:storage.googleapis.com|storage.cloud.google.com)":t}/${r}/([^?#]*)`,"i"),indices:{bucket:1,path:2},postModify:s}];for(let t=0;t<a.length;t++){const r=a[t],o=r.regex.exec(e);if(o){const e=o[r.indices.bucket];let t=o[r.indices.path];t||(t=""),n=new b(e,t),r.postModify(n);break}}if(null==n)throw function(e){return new c("invalid-url","Invalid URL '"+e+"'.")}(e);return n}}class w{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function y(e){return"string"==typeof e||e instanceof String}function v(e){return k()&&e instanceof Blob}function k(){return"undefined"!=typeof Blob}function R(e,t,n,r){if(r<t)throw f(`Invalid value for '${e}'. Expected ${t} or greater.`);if(r>n)throw f(`Invalid value for '${e}'. Expected ${n} or less.`)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function x(e,t,n){let r=t;return null==n&&(r=`https://${t}`),`${n}://${r}/v0${e}`}function T(e){const t=encodeURIComponent;let n="?";for(const r in e)if(e.hasOwnProperty(r)){n=n+(t(r)+"="+t(e[r]))+"&"}return n=n.slice(0,-1),n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var I,C;(C=I||(I={}))[C.NO_ERROR=0]="NO_ERROR",C[C.NETWORK_ERROR=1]="NETWORK_ERROR",C[C.ABORT=2]="ABORT";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class O{constructor(e,t,n,r,o,s,i,a,l,c,u){this.url_=e,this.method_=t,this.headers_=n,this.body_=r,this.successCodes_=o,this.additionalRetryCodes_=s,this.callback_=i,this.errorCallback_=a,this.timeout_=l,this.progressCallback_=c,this.connectionFactory_=u,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise(((e,t)=>{this.resolve_=e,this.reject_=t,this.start_()}))}start_(){const e=(e,t)=>{const n=this.resolve_,r=this.reject_,o=t.connection;if(t.wasSuccessCode)try{const e=this.callback_(o,o.getResponse());void 0!==e?n(e):n()}catch(e){r(e)}else if(null!==o){const e=h();e.serverResponse=o.getErrorText(),this.errorCallback_?r(this.errorCallback_(o,e)):r(e)}else if(t.canceled){r(this.appDelete_?g():d())}else{r(new c("retry-limit-exceeded","Max retry time for operation exceeded, please try again."))}};this.canceled_?e(0,new E(!1,null,!0)):this.backoffId_=function(e,t,n){let r=1,o=null,s=null,i=!1,a=0;function l(){return 2===a}let c=!1;function u(...e){c||(c=!0,t.apply(null,e))}function h(t){o=setTimeout((()=>{o=null,e(p,l())}),t)}function d(){s&&clearTimeout(s)}function p(e,...t){if(c)return void d();if(e)return d(),void u.call(null,e,...t);if(l()||i)return d(),void u.call(null,e,...t);let n;r<64&&(r*=2),1===a?(a=2,n=0):n=1e3*(r+Math.random()),h(n)}let f=!1;function g(e){f||(f=!0,d(),c||(null!==o?(e||(a=2),clearTimeout(o),h(0)):e||(a=1)))}return h(0),s=setTimeout((()=>{i=!0,g(!0)}),n),g}(((e,t)=>{if(t)return void e(!1,new E(!1,null,!0));const n=this.connectionFactory_();this.pendingConnection_=n;const r=e=>{const t=e.loaded,n=e.lengthComputable?e.total:-1;null!==this.progressCallback_&&this.progressCallback_(t,n)};null!==this.progressCallback_&&n.addUploadProgressListener(r),n.send(this.url_,this.method_,this.body_,this.headers_).then((()=>{null!==this.progressCallback_&&n.removeUploadProgressListener(r),this.pendingConnection_=null;const t=n.getErrorCode()===I.NO_ERROR,o=n.getStatus();if(!t||this.isRetryStatusCode_(o)){const t=n.getErrorCode()===I.ABORT;return void e(!1,new E(!1,null,t))}const s=-1!==this.successCodes_.indexOf(o);e(!0,new E(s,n))}))}),e,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,null!==this.backoffId_&&(0,this.backoffId_)(!1),null!==this.pendingConnection_&&this.pendingConnection_.abort()}isRetryStatusCode_(e){const t=e>=500&&e<600,n=-1!==[408,429].indexOf(e),r=-1!==this.additionalRetryCodes_.indexOf(e);return t||n||r}}class E{constructor(e,t,n){this.wasSuccessCode=e,this.connection=t,this.canceled=!!n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function P(){return"undefined"!=typeof BlobBuilder?BlobBuilder:"undefined"!=typeof WebKitBlobBuilder?WebKitBlobBuilder:void 0}function U(...e){const t=P();if(void 0!==t){const n=new t;for(let t=0;t<e.length;t++)n.append(e[t]);return n.getBlob()}if(k())return new Blob(e);throw new c("unsupported-environment","This browser doesn't seem to support creating Blobs")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const S="raw",B="base64",A="base64url",M="data_url";class F{constructor(e,t){this.data=e,this.contentType=t||null}}function L(e,t){switch(e){case S:return new F(N(t));case B:case A:return new F(D(e,t));case M:return new F(function(e){const t=new j(e);return t.base64?D(B,t.rest):function(e){let t;try{t=decodeURIComponent(e)}catch(e){throw _(M,"Malformed data URL.")}return N(t)}(t.rest)}(t),new j(t).contentType)}throw h()}function N(e){const t=[];for(let n=0;n<e.length;n++){let r=e.charCodeAt(n);if(r<=127)t.push(r);else if(r<=2047)t.push(192|r>>6,128|63&r);else if(55296==(64512&r)){if(n<e.length-1&&56320==(64512&e.charCodeAt(n+1))){r=65536|(1023&r)<<10|1023&e.charCodeAt(++n),t.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|63&r)}else t.push(239,191,189)}else 56320==(64512&r)?t.push(239,191,189):t.push(224|r>>12,128|r>>6&63,128|63&r)}return new Uint8Array(t)}function D(e,t){switch(e){case B:{const n=-1!==t.indexOf("-"),r=-1!==t.indexOf("_");if(n||r){throw _(e,"Invalid character '"+(n?"-":"_")+"' found: is it base64url encoded?")}break}case A:{const n=-1!==t.indexOf("+"),r=-1!==t.indexOf("/");if(n||r){throw _(e,"Invalid character '"+(n?"+":"/")+"' found: is it base64 encoded?")}t=t.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=atob(t)}catch(t){throw _(e,"Invalid character found")}const r=new Uint8Array(n.length);for(let e=0;e<n.length;e++)r[e]=n.charCodeAt(e);return r}class j{constructor(e){this.base64=!1,this.contentType=null;const t=e.match(/^data:([^,]+)?,/);if(null===t)throw _(M,"Must be formatted 'data:[<mediatype>][;base64],<data>");const n=t[1]||null;var r,o;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */null!=n&&(this.base64=(o=";base64",!!((r=n).length>=o.length)&&r.substring(r.length-o.length)===o),this.contentType=this.base64?n.substring(0,n.length-7):n),this.rest=e.substring(e.indexOf(",")+1)}}class q{constructor(e,t){let n=0,r="";v(e)?(this.data_=e,n=e.size,r=e.type):e instanceof ArrayBuffer?(t?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),n=this.data_.length):e instanceof Uint8Array&&(t?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),n=e.length),this.size_=n,this.type_=r}size(){return this.size_}type(){return this.type_}slice(e,t){if(v(this.data_)){const s=this.data_,i=(r=e,o=t,(n=s).webkitSlice?n.webkitSlice(r,o):n.mozSlice?n.mozSlice(r,o):n.slice?n.slice(r,o):null);return null===i?null:new q(i)}{const n=new Uint8Array(this.data_.buffer,e,t-e);return new q(n,!0)}var n,r,o;
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}static getBlob(...e){if(k()){const t=e.map((e=>e instanceof q?e.data_:e));return new q(U.apply(null,t))}{const t=e.map((e=>y(e)?L(S,e).data:e.data_));let n=0;t.forEach((e=>{n+=e.byteLength}));const r=new Uint8Array(n);let o=0;return t.forEach((e=>{for(let t=0;t<e.length;t++)r[o++]=e[t]})),new q(r,!0)}}uploadData(){return this.data_}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $(e){let t;try{t=JSON.parse(e)}catch(e){return null}return"object"!=typeof(n=t)||Array.isArray(n)?null:t;var n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function z(e){const t=e.lastIndexOf("/",e.length-2);return-1===t?e:e.slice(t+1)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function H(e,t){return t}class V{constructor(e,t,n,r){this.server=e,this.local=t||e,this.writable=!!n,this.xform=r||H}}let X=null;function W(){if(X)return X;const e=[];e.push(new V("bucket")),e.push(new V("generation")),e.push(new V("metageneration")),e.push(new V("name","fullPath",!0));const t=new V("name");t.xform=function(e,t){return function(e){return!y(e)||e.length<2?e:z(e)}(t)},e.push(t);const n=new V("size");return n.xform=function(e,t){return void 0!==t?Number(t):t},e.push(n),e.push(new V("timeCreated")),e.push(new V("updated")),e.push(new V("md5Hash",null,!0)),e.push(new V("cacheControl",null,!0)),e.push(new V("contentDisposition",null,!0)),e.push(new V("contentEncoding",null,!0)),e.push(new V("contentLanguage",null,!0)),e.push(new V("contentType",null,!0)),e.push(new V("metadata","customMetadata",!0)),X=e,X}function K(e,t,n){const r={type:"file"},o=n.length;for(let e=0;e<o;e++){const o=n[e];r[o.local]=o.xform(r,t[o.server])}return function(e,t){Object.defineProperty(e,"ref",{get:function(){const n=e.bucket,r=e.fullPath,o=new b(n,r);return t._makeStorageReference(o)}})}(r,e),r}function G(e,t,n){const r=$(t);if(null===r)return null;return K(e,r,n)}function Z(e,t){const n={},r=t.length;for(let o=0;o<r;o++){const r=t[o];r.writable&&(n[r.server]=e[r.local])}return JSON.stringify(n)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q{constructor(e,t,n,r){this.url=e,this.method=t,this.handler=n,this.timeout=r,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function J(e){if(!e)throw h()}function Y(e,t){return function(n,r){const o=G(e,r,t);return J(null!==o),o}}function ee(e,t){return function(n,r){const o=G(e,r,t);return J(null!==o),function(e,t,n,r){const o=$(t);if(null===o)return null;if(!y(o.downloadTokens))return null;const s=o.downloadTokens;if(0===s.length)return null;const i=encodeURIComponent;return s.split(",").map((t=>{const o=e.bucket,s=e.fullPath;return x("/b/"+i(o)+"/o/"+i(s),n,r)+T({alt:"media",token:t})}))[0]}(o,r,e.host,e._protocol)}}function te(e){return function(t,n){let r;var o,s;return 401===t.getStatus()?r=t.getErrorText().includes("Firebase App Check token is invalid")?new c("unauthorized-app","This app does not have permission to access Firebase Storage on this project."):new c("unauthenticated","User is not authenticated, please authenticate using Firebase Authentication and try again."):402===t.getStatus()?(s=e.bucket,r=new c("quota-exceeded","Quota for bucket '"+s+"' exceeded, please view quota on https://firebase.google.com/pricing/.")):403===t.getStatus()?(o=e.path,r=new c("unauthorized","User does not have permission to access '"+o+"'.")):r=n,r.serverResponse=n.serverResponse,r}}function ne(e){const t=te(e);return function(n,r){let o=t(n,r);var s;return 404===n.getStatus()&&(s=e.path,o=new c("object-not-found","Object '"+s+"' does not exist.")),o.serverResponse=r.serverResponse,o}}function re(e,t,n){const r=Object.assign({},n);return r.fullPath=e.path,r.size=t.size(),r.contentType||(r.contentType=function(e,t){return e&&e.contentType||t&&t.type()||"application/octet-stream"}(null,t)),r}function oe(e,t,n,r,o){const s=t.bucketOnlyServerUrl(),i={"X-Goog-Upload-Protocol":"multipart"};const a=function(){let e="";for(let t=0;t<2;t++)e+=Math.random().toString().slice(2);return e}();i["Content-Type"]="multipart/related; boundary="+a;const l=re(t,r,o),c="--"+a+"\r\nContent-Type: application/json; charset=utf-8\r\n\r\n"+Z(l,n)+"\r\n--"+a+"\r\nContent-Type: "+l.contentType+"\r\n\r\n",u="\r\n--"+a+"--",h=q.getBlob(c,r,u);if(null===h)throw p();const d={name:l.fullPath},f=x(s,e.host,e._protocol),g=e.maxUploadRetryTime,_=new Q(f,"POST",Y(e,n),g);return _.urlParams=d,_.headers=i,_.body=h.uploadData(),_.errorHandler=te(t),_}class se{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=I.NO_ERROR,this.sendPromise_=new Promise((e=>{this.xhr_.addEventListener("abort",(()=>{this.errorCode_=I.ABORT,e()})),this.xhr_.addEventListener("error",(()=>{this.errorCode_=I.NETWORK_ERROR,e()})),this.xhr_.addEventListener("load",(()=>{e()}))}))}send(e,t,n,r){if(this.sent_)throw m("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(t,e,!0),void 0!==r)for(const e in r)r.hasOwnProperty(e)&&this.xhr_.setRequestHeader(e,r[e].toString());return void 0!==n?this.xhr_.send(n):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw m("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw m("cannot .getStatus() before sending");try{return this.xhr_.status}catch(e){return-1}}getResponse(){if(!this.sent_)throw m("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw m("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){null!=this.xhr_.upload&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){null!=this.xhr_.upload&&this.xhr_.upload.removeEventListener("progress",e)}}class ie extends se{initXhr(){this.xhr_.responseType="text"}}function ae(){return new ie}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class le{constructor(e,t){this._service=e,this._location=t instanceof b?t:b.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new le(e,t)}get root(){const e=new b(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return z(this._location.path)}get storage(){return this._service}get parent(){const e=function(e){if(0===e.length)return null;const t=e.lastIndexOf("/");return-1===t?"":e.slice(0,t)}(this._location.path);if(null===e)return null;const t=new b(this._location.bucket,e);return new le(this._service,t)}_throwIfRoot(e){if(""===this._location.path)throw function(e){return new c("invalid-root-operation","The operation '"+e+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}(e)}}function ce(e,t,n){e._throwIfRoot("uploadBytes");const r=oe(e.storage,e._location,W(),new q(t,!0),n);return e.storage.makeRequestWithTokens(r,ae).then((t=>({metadata:t,ref:e})))}function ue(e){e._throwIfRoot("getDownloadURL");const t=function(e,t,n){const r=x(t.fullServerUrl(),e.host,e._protocol),o=e.maxOperationRetryTime,s=new Q(r,"GET",ee(e,n),o);return s.errorHandler=ne(t),s}(e.storage,e._location,W());return e.storage.makeRequestWithTokens(t,ae).then((e=>{if(null===e)throw new c("no-download-url","The given file does not have any download URLs.");return e}))}function he(e,t){const n=function(e,t){const n=t.split("/").filter((e=>e.length>0)).join("/");return 0===e.length?n:e+"/"+n}(e._location.path,t),r=new b(e._location.bucket,n);return new le(e.storage,r)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function de(e,t){if(e instanceof ge){const n=e;if(null==n._bucket)throw new c("no-default-bucket","No default bucket found. Did you set the 'storageBucket' property when initializing the app?");const r=new le(n,n._bucket);return null!=t?de(r,t):r}return void 0!==t?he(e,t):e}function pe(e,t){if(t&&/^[A-Za-z]+:\/\//.test(t)){if(e instanceof ge)return new le(e,t);throw f("To use ref(service, url), the first argument must be a Storage instance.")}return de(e,t)}function fe(e,t){const n=null==t?void 0:t.storageBucket;return null==n?null:b.makeFromBucketSpec(n,e)}class ge{constructor(e,t,n,r,o){this.app=e,this._authProvider=t,this._appCheckProvider=n,this._url=r,this._firebaseVersion=o,this._bucket=null,this._host="firebasestorage.googleapis.com",this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=12e4,this._maxUploadRetryTime=6e5,this._requests=new Set,this._bucket=null!=r?b.makeFromBucketSpec(r,this._host):fe(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,null!=this._url?this._bucket=b.makeFromBucketSpec(this._url,e):this._bucket=fe(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){R("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){R("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(null!==t)return t.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});if(e){return(await e.getToken()).token}return null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach((e=>e.cancel())),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new le(this,e)}_makeRequest(e,t,n,r){if(this._deleted)return new w(g());{const o=function(e,t,n,r,o,s){const i=T(e.urlParams),a=e.url+i,l=Object.assign({},e.headers);return function(e,t){t&&(e["X-Firebase-GMPID"]=t)}(l,t),function(e,t){null!==t&&t.length>0&&(e.Authorization="Firebase "+t)}(l,n),function(e,t){e["X-Firebase-Storage-Version"]="webjs/"+(null!=t?t:"AppManager")}(l,s),function(e,t){null!==t&&(e["X-Firebase-AppCheck"]=t)}(l,r),new O(a,e.method,l,e.body,e.successCodes,e.additionalRetryCodes,e.handler,e.errorHandler,e.timeout,e.progressCallback,o)}(e,this._appId,n,r,t,this._firebaseVersion);return this._requests.add(o),o.getPromise().then((()=>this._requests.delete(o)),(()=>this._requests.delete(o))),o}}async makeRequestWithTokens(e,t){const[n,r]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,n,r).getPromise()}}function _e(e,t){return pe(e=a.getModularInstance(e),t)}function me(e,{instanceIdentifier:t}){const n=e.getProvider("app").getImmediate(),r=e.getProvider("auth-internal"),o=e.getProvider("app-check-internal");return new ge(n,r,o,t,i.SDK_VERSION)}i._registerComponent(new l.Component("storage",me,"PUBLIC").setMultipleInstances(!0)),i.registerVersion("@firebase/storage","0.9.6",""),i.registerVersion("@firebase/storage","0.9.6","esm2017");const be=s.getFirestore(o.app),we=function(e=i.getApp(),t){return e=a.getModularInstance(e),i._getProvider(e,"storage").getImmediate({identifier:t})}(o.app);let ye,ve,ke,Re,xe,Te,Ie,Ce,Oe,Ee;document.getElementById("form_addItems").addEventListener("submit",(async e=>{e.preventDefault(),ye=document.getElementById("form_addItems_name").value,ve=document.getElementById("form_addItems_instrument").value,ke=document.getElementById("form_addItems_manufacturer").value,Re=document.getElementById("form_addItems_body").value,xe=document.getElementById("form_addItems_price").value,Te=document.getElementById("form_addItems_color").value,Ie=document.getElementById("form_addItems_strings").value,Ce=document.getElementById("form_addItems_material").value,Oe=document.getElementById("form_addItems_image").files;let t=[];if(Oe.length){const e=await async function(e,t=[]){console.log(t);return t.map((async t=>{const n=await async function(e,t){const n=_e(e,`products/images/${t.name}`);return await function(e,t,n){return ce(e=a.getModularInstance(e),t,n)}(n,t)}(e,t);return function(e){return ue(e=a.getModularInstance(e))}(_e(e,n.ref.fullPath))}))}(we,[...Oe]);t=await Promise.all(e),console.log(e)}Ee=await async function(){let e="",t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz012345678901234567890123456789";for(let n=0;n<10;n++)e+=t.charAt(Math.floor(30*Math.random()));return e}(),console.log(ye+", "+ve+", "+ke+", "+Re+", "+xe+", "+Te+", "+Ie+", "+Ce+", "+Oe+","+Ee);const n={nameValue:ye,instrument:ve,manufacturer:ke,body:Re,price:xe,color:Te,strings:Ie,material:Ce,images:t,id:Ee};await async function(e,t,n,r,o,i){try{await s.setDoc(s.doc(e,"items",o),i),alert("Item added succesfully")}catch(e){console.log(e)}}(be,0,0,0,n.id,n)}));
//# sourceMappingURL=addItems.e9436b04.js.map
