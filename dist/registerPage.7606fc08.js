var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},a={},r=e.parcelRequire8ba2;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in a){var r=a[e];delete a[e];var n={id:e,exports:{}};return t[e]=n,r.call(n.exports,n,n.exports),n.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){a[e]=t},e.parcelRequire8ba2=r);var n=r("1tHc5"),o=r("bQjlg");o=r("bQjlg");r("fXOuZ");var l=r("etBjH");l=r("etBjH");const s=n.getAuth(),i=l.getFirestore(o.app);let d,u,m,c,f,g,p;document.getElementById("form_register").addEventListener("submit",(async e=>{e.preventDefault(),d=document.getElementById("form_register_username").value,u=document.getElementById("form_register_name").value,m=document.getElementById("form_register_lastName").value,c=document.getElementById("form_register_email").value,f=document.getElementById("form_register_phoneNumber").value,g=document.getElementById("form_register_password").value,p=!1,console.log(d+", "+u+", "+m+", "+c+", "+f+", "+g);const t={username:d,nameValue:u,lastName:m,email:c,phoneNumber:f,password:g,admin:false},{user:a}=await async function(e,t){try{return await n.createUserWithEmailAndPassword(s,e,t)}catch(e){console.log(e),"auth/weak-password"===e.code&&alert("Password must be at least 6 characters long"),"auth/email-already-in-use"===e.code&&alert("That email is already in use")}}(t.email,t.password);await async function(e,t,a){try{await l.setDoc(l.doc(e,"users",t),a),alert("User created"),window.location.href="./index.html"}catch(e){console.log(e)}}(i,a.uid,t)}));
//# sourceMappingURL=registerPage.7606fc08.js.map