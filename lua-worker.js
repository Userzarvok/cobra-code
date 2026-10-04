(()=>{var po=Object.defineProperty;var st=(t,e,o)=>()=>{if(o)throw o[0];try{return t&&(e=t(t=0)),e}catch(n){throw o=[n],n}};var ho=(t,e)=>{for(var o in e)po(t,o,{get:e[o],enumerable:!0})};var ut,he,Be=st(()=>{ut=Object.defineProperty,he=(t,e)=>{let o={};for(var n in t)ut(o,n,{get:t[n],enumerable:!0});return e||ut(o,Symbol.toStringTag,{value:"Module"}),o}});var vt={};ho(vt,{WasmLua:()=>Ue,compileWorker:()=>So,dumpWorker:()=>To,start:()=>Ao,version:()=>Eo,workerMemoryBytes:()=>Ro});function So(t,e,o,n){let a=c.compileWorker(t,e,o,n);if(a[2])throw d(a[1]);return d(a[0])}function To(t,e,o,n,a){let r=c.dumpWorker(t,e,o,n,a);if(r[2])throw d(r[1]);return d(r[0])}function Ao(){c.start()}function Eo(){let t,e;try{let o=c.version();return t=o[0],e=o[1],D(o[0],o[1])}finally{c.__wbindgen_free(t,e,1)}}function Ro(){return c.workerMemoryBytes()>>>0}function ko(t,e){return Error(D(t,e))}function Do(t,e){let o=e,n=typeof o=="bigint"?o:void 0;I().setBigInt64(t+8,R(n)?BigInt(0):n,!0),I().setInt32(t+0,!R(n),!0)}function Wo(t){let e=t,o=typeof e=="boolean"?e:void 0;return R(o)?16777215:o?1:0}function Po(t,e){let o=T($e(e),c.__wbindgen_malloc,c.__wbindgen_realloc),n=S;I().setInt32(t+4,n,!0),I().setInt32(t+0,o,!0)}function Oo(t){return typeof t=="bigint"}function Io(t){return typeof t=="function"}function Mo(t){return t===null}function Fo(t){let e=t;return typeof e=="object"&&e!==null}function Lo(t){return t===void 0}function jo(t,e){return t===e}function No(t,e){let o=e,n=typeof o=="number"?o:void 0;I().setFloat64(t+8,R(n)?0:n,!0),I().setInt32(t+0,!R(n),!0)}function Bo(t){throw t}function Vo(t,e){let o=e,n=typeof o=="string"?o:void 0;var a=R(n)?0:T(n,c.__wbindgen_malloc,c.__wbindgen_realloc),r=S;I().setInt32(t+4,r,!0),I().setInt32(t+0,a,!0)}function zo(t,e){throw new Error(D(t,e))}function Uo(t){t._wbg_cb_unref()}function $o(){return G(function(t,e,o){return t.apply(e,o)},arguments)}function qo(){return G(function(t,e){return t.call(e)},arguments)}function Go(){return G(function(t,e,o){return t.call(e,o)},arguments)}function Ho(){return G(function(t,e,o,n){return t.call(e,o,n)},arguments)}function Jo(){return G(function(t,e,o,n,a){return t.call(e,o,n,a)},arguments)}function Xo(t,e){let o,n;try{o=t,n=e,console.error(D(t,e))}finally{c.__wbindgen_free(o,n,1)}}function Yo(t){return Array.from(t)}function Qo(){return G(function(t,e){return Reflect.get(t,e)},arguments)}function Zo(t,e){return t[e>>>0]}function Ko(t,e){return t[e>>>0]}function en(t){let e;try{e=t instanceof Promise}catch{e=!1}return e}function tn(t){let e;try{e=t instanceof Uint8Array}catch{e=!1}return e}function on(t){return Array.isArray(t)}function nn(t,e){return Object.is(t,e)}function rn(t){return Object.keys(t)}function an(t){return t.length}function sn(t){return t.length}function cn(){return new Error}function ln(t,e){return new Intl.DateTimeFormat(t,e)}function un(){return new Map}function dn(t,e){return new Error(D(t,e))}function fn(){return new Object}function mn(){return new Array}function pn(t,e){return new Uint8Array(bt(t,e))}function hn(t,e){try{var o={a:t,b:e},n=(a,r)=>{let s=o.a;o.a=0;try{return $n(s,o.b,a,r)}finally{o.a=s}};return new Promise(n)}finally{o.a=0}}function bn(t){return new Uint8Array(t>>>0)}function gn(t){return new Array(t>>>0)}function _n(){return Date.now()}function vn(t,e,o){Uint8Array.prototype.set.call(bt(t,e),o)}function wn(t,e){return t.push(e)}function yn(t){return t.queueMicrotask}function Cn(t){queueMicrotask(t)}function xn(t){return Promise.resolve(t)}function Sn(t){return t.resolvedOptions()}function Tn(t,e,o){t[e>>>0]=o}function An(){return G(function(t,e,o){return Reflect.set(t,e,o)},arguments)}function En(t,e,o){return t.set(e,o)}function Rn(t,e){let o=e.stack,n=T(o,c.__wbindgen_malloc,c.__wbindgen_realloc),a=S;I().setInt32(t+4,a,!0),I().setInt32(t+0,n,!0)}function kn(){let t=typeof global>"u"?null:global;return R(t)?0:q(t)}function Dn(){let t=typeof globalThis>"u"?null:globalThis;return R(t)?0:q(t)}function Wn(){let t=typeof self>"u"?null:self;return R(t)?0:q(t)}function Pn(){let t=typeof window>"u"?null:window;return R(t)?0:q(t)}function On(t,e,o){return t.then(e,o)}function In(t,e){return t.then(e)}function Mn(t,e){return gt(t,e,Un)}function Fn(t,e){return gt(t,e,zn)}function Ln(t){return t}function jn(t){return t}function Nn(t,e){return D(t,e)}function Bn(){let t=c.__wbindgen_externrefs,e=t.grow(4);t.set(0,void 0),t.set(e+0,void 0),t.set(e+1,null),t.set(e+2,!0),t.set(e+3,!1)}function zn(t,e){c.wasm_bindgen_88f4e4fb1e9bfc9___convert__closures_____invoke_______true_(t,e)}function Un(t,e,o){let n=c.wasm_bindgen_88f4e4fb1e9bfc9___convert__closures_____invoke___wasm_bindgen_88f4e4fb1e9bfc9___JsValue__core_9b3796e30d99ddb7___result__Result_____wasm_bindgen_88f4e4fb1e9bfc9___JsError___true_(t,e,o);if(n[1])throw d(n[0])}function $n(t,e,o,n){c.wasm_bindgen_88f4e4fb1e9bfc9___convert__closures_____invoke___js_sys_9c4f85dd2a4a6892___Function_fn_wasm_bindgen_88f4e4fb1e9bfc9___JsValue_____wasm_bindgen_88f4e4fb1e9bfc9___sys__Undefined___js_sys_9c4f85dd2a4a6892___Function_fn_wasm_bindgen_88f4e4fb1e9bfc9___JsValue_____wasm_bindgen_88f4e4fb1e9bfc9___sys__Undefined_______true_(t,e,o,n)}function q(t){let e=c.__externref_table_alloc();return c.__wbindgen_externrefs.set(e,t),e}function $e(t){let e=typeof t;if(e=="number"||e=="boolean"||t==null)return`${t}`;if(e=="string")return`"${t}"`;if(e=="symbol"){let a=t.description;return a==null?"Symbol":`Symbol(${a})`}if(e=="function"){let a=t.name;return typeof a=="string"&&a.length>0?`Function(${a})`:"Function"}if(Array.isArray(t)){let a=t.length,r="[";a>0&&(r+=$e(t[0]));for(let s=1;s<a;s++)r+=", "+$e(t[s]);return r+="]",r}let o=/\[object ([^\]]+)\]/.exec(toString.call(t)),n;if(o&&o.length>1)n=o[1];else return toString.call(t);if(n=="Object")try{return"Object("+JSON.stringify(t)+")"}catch{return"Object"}return t instanceof Error?`${t.name}: ${t.message}
${t.stack}`:n}function bt(t,e){return t=t>>>0,se().subarray(t/1,t/1+e)}function I(){return(Z===null||Z.buffer.detached===!0||Z.buffer.detached===void 0&&Z.buffer!==c.memory.buffer)&&(Z=new DataView(c.memory.buffer)),Z}function D(t,e){return Gn(t>>>0,e)}function se(){return(ge===null||ge.byteLength===0)&&(ge=new Uint8Array(c.memory.buffer)),ge}function G(t,e){try{return t.apply(this,e)}catch(o){let n=q(o);c.__wbindgen_exn_store(n)}}function R(t){return t==null}function gt(t,e,o){let n={a:t,b:e,cnt:1},a=(...r)=>{n.cnt++;let s=n.a;n.a=0;try{return o(s,n.b,...r)}finally{n.a=s,a._wbg_cb_unref()}};return a._wbg_cb_unref=()=>{--n.cnt===0&&(c.__wbindgen_destroy_closure(n.a,n.b),n.a=0,ht.unregister(n))},ht.register(a,n,n),a}function T(t,e,o){if(o===void 0){let i=ce.encode(t),l=e(i.length,1)>>>0;return se().subarray(l,l+i.length).set(i),S=i.length,l}let n=t.length,a=e(n,1)>>>0,r=se(),s=0;for(;s<n;s++){let i=t.charCodeAt(s);if(i>127)break;r[a+s]=i}if(s!==n){s!==0&&(t=t.slice(s)),a=o(a,n,n=s+t.length*3,1)>>>0;let i=se().subarray(a+s,a+n),l=ce.encodeInto(t,i);s+=l.written,a=o(a,n,s,1)>>>0}return S=s,a}function d(t){let e=c.__wbindgen_externrefs.get(t);return c.__externref_table_dealloc(t),e}function Gn(t,e){return ze+=e,ze>=qn&&(_e=new TextDecoder("utf-8",{ignoreBOM:!0,fatal:!0}),_e.decode(),ze=e),_e.decode(se().subarray(t,t+e))}function Hn(t){c=t}function Xn(t){let e=globalThis.__cobraLuauWasm;if(!e)throw new Error("o WebAssembly do Luau ainda n\xE3o foi carregado");return new WebAssembly.Instance(e,t)}var Ue,Vn,pt,ht,Z,ge,_e,qn,ze,ce,S,c,Jn,h,Yn,Qn,Zn,Kn,er,tr,or,nr,rr,ar,ir,sr,cr,lr,ur,dr,fr,mr,pr,hr,br,gr,_r,vr,wr,yr,Cr,xr,Sr,Tr,Ar,Er,Rr,kr,Dr,Wr,Pr,Or,Ir,Mr,Fr,Lr,jr,Nr,Br,Vr,zr,Ur,$r,qr,Gr,Hr,Jr,Xr,Yr,Qr,Zr,Kr,ea,ta,oa,na,ra,aa,ia,sa,ca,la,ua,da,fa,ma,pa,ha,ba,ga,_a,va,wa,ya,Ca,xa,Sa,Ta,Aa,Ea,Ra,ka,Da,Wa,Pa,Oa,Ia,Ma,Fa,La,ja,Na,Ba,Va,za,Ua,$a,qa,Ga,Ha,Ja,Xa,Ya,Qa,Za,Ka,ei,ti,oi,ni,ri,ai,ii,si,ci,li,ui,di,fi,mi,pi,hi,bi,gi,_i,vi,wi,yi,Ci,xi,Si,Ti,_t,wt=st(()=>{Be();Ue=class{__destroy_into_raw(){let t=this.__wbg_ptr;return this.__wbg_ptr=0,pt.unregister(this),t}free(){let t=this.__destroy_into_raw();c.__wbg_wasmlua_free(t,0)}bufferBytes(t){let e=c.wasmlua_bufferBytes(this.__wbg_ptr,t);if(e[2])throw d(e[1]);return d(e[0])}bufferWrite(t,e,o){let n=c.wasmlua_bufferWrite(this.__wbg_ptr,t,e,o);if(n[1])throw d(n[0])}callAsync(t,e,o){return c.wasmlua_callAsync(this.__wbg_ptr,t,e,o)}callFunctionAsync(t,e,o,n){let a=T(e,c.__wbindgen_malloc,c.__wbindgen_realloc),r=S;return c.wasmlua_callFunctionAsync(this.__wbg_ptr,t,a,r,o,n)}callFunction(t,e,o){let n=T(e,c.__wbindgen_malloc,c.__wbindgen_realloc),a=S,r=c.wasmlua_callFunction(this.__wbg_ptr,t,n,a,o);if(r[2])throw d(r[1]);return d(r[0])}callMethodAsync(t,e,o,n){let a=T(e,c.__wbindgen_malloc,c.__wbindgen_realloc),r=S;return c.wasmlua_callMethodAsync(this.__wbg_ptr,t,a,r,o,n)}callMethod(t,e,o){let n=T(e,c.__wbindgen_malloc,c.__wbindgen_realloc),a=S,r=c.wasmlua_callMethod(this.__wbg_ptr,t,n,a,o);if(r[2])throw d(r[1]);return d(r[0])}call(t,e){let o=c.wasmlua_call(this.__wbg_ptr,t,e);if(o[2])throw d(o[1]);return d(o[0])}coerceInteger(t){let e=c.wasmlua_coerceInteger(this.__wbg_ptr,t);if(e[2])throw d(e[1]);return d(e[0])}coerceNumber(t){let e=c.wasmlua_coerceNumber(this.__wbg_ptr,t);if(e[3])throw d(e[2]);return e[0]===0?void 0:e[1]}coerceString(t){let e=c.wasmlua_coerceString(this.__wbg_ptr,t);if(e[2])throw d(e[1]);return d(e[0])}compile(t,e){let o=T(t,c.__wbindgen_malloc,c.__wbindgen_realloc),n=S,a=c.wasmlua_compile(this.__wbg_ptr,o,n,e);if(a[2])throw d(a[1]);return d(a[0])}configureModules(t,e,o,n){let a=c.wasmlua_configureModules(this.__wbg_ptr,t,R(e)?0:q(e),o,n);if(a[1])throw d(a[0])}configureOutput(t){let e=c.wasmlua_configureOutput(this.__wbg_ptr,t);if(e[1])throw d(e[0])}configureWorker(t,e,o,n,a,r){let s=c.wasmlua_configureWorker(this.__wbg_ptr,t,R(e)?0:q(e),o,n,a,r);if(s[1])throw d(s[0])}createAsyncFunction(t){let e=c.wasmlua_createAsyncFunction(this.__wbg_ptr,t);if(e[2])throw d(e[1]);return d(e[0])}createBufferWithCapacity(t){let e=c.wasmlua_createBufferWithCapacity(this.__wbg_ptr,t);if(e[2])throw d(e[1]);return d(e[0])}createBuffer(t){let e=c.wasmlua_createBuffer(this.__wbg_ptr,t);if(e[2])throw d(e[1]);return d(e[0])}createTableWithCapacity(t,e){let o=c.wasmlua_createTableWithCapacity(this.__wbg_ptr,t,e);if(o[2])throw d(o[1]);return d(o[0])}createTable(t){let e=c.wasmlua_createTable(this.__wbg_ptr,t);if(e[2])throw d(e[1]);return d(e[0])}createThread(t){let e=c.wasmlua_createThread(this.__wbg_ptr,t);if(e[2])throw d(e[1]);return d(e[0])}createUserdata(t,e,o){let n=c.wasmlua_createUserdata(this.__wbg_ptr,t,e,o);if(n[2])throw d(n[1]);return d(n[0])}currentThread(){let t=c.wasmlua_currentThread(this.__wbg_ptr);if(t[2])throw d(t[1]);return d(t[0])}dispose(){let t=c.wasmlua_dispose(this.__wbg_ptr);if(t[1])throw d(t[0])}dump(t,e,o){let n=T(t,c.__wbindgen_malloc,c.__wbindgen_realloc),a=S,r=c.wasmlua_dump(this.__wbg_ptr,n,a,e,o);if(r[2])throw d(r[1]);return d(r[0])}executeAsync(t,e,o,n){let a=T(t,c.__wbindgen_malloc,c.__wbindgen_realloc),r=S;return c.wasmlua_executeAsync(this.__wbg_ptr,a,r,e,o,n)}executeBytecodeAsync(t,e,o,n){return c.wasmlua_executeBytecodeAsync(this.__wbg_ptr,t,e,o,n)}executeBytecodeWorker(t,e,o,n,a){return c.wasmlua_executeBytecodeWorker(this.__wbg_ptr,t,e,o,n,a)}executeBytecode(t,e,o){let n=c.wasmlua_executeBytecode(this.__wbg_ptr,t,e,o);if(n[2])throw d(n[1]);return d(n[0])}executeWorker(t,e,o,n,a){return c.wasmlua_executeWorker(this.__wbg_ptr,t,e,o,n,a)}execute(t,e,o){let n=T(t,c.__wbindgen_malloc,c.__wbindgen_realloc),a=S,r=c.wasmlua_execute(this.__wbg_ptr,n,a,e,o);if(r[2])throw d(r[1]);return d(r[0])}functionBind(t,e){let o=c.wasmlua_functionBind(this.__wbg_ptr,t,e);if(o[2])throw d(o[1]);return d(o[0])}functionCoverage(t){let e=c.wasmlua_functionCoverage(this.__wbg_ptr,t);if(e[2])throw d(e[1]);return d(e[0])}functionDeepClone(t){let e=c.wasmlua_functionDeepClone(this.__wbg_ptr,t);if(e[2])throw d(e[1]);return d(e[0])}functionEnvironment(t){let e=c.wasmlua_functionEnvironment(this.__wbg_ptr,t);if(e[2])throw d(e[1]);return d(e[0])}functionIdentity(t){let e=c.wasmlua_functionIdentity(this.__wbg_ptr,t);if(e[2])throw d(e[1]);return e[0]>>>0}functionInfo(t){let e=c.wasmlua_functionInfo(this.__wbg_ptr,t);if(e[2])throw d(e[1]);return d(e[0])}functionSetEnvironment(t,e){let o=c.wasmlua_functionSetEnvironment(this.__wbg_ptr,t,e);if(o[2])throw d(o[1]);return o[0]!==0}gcCollect(){let t=c.wasmlua_gcCollect(this.__wbg_ptr);if(t[1])throw d(t[0])}gcIsRunning(){let t=c.wasmlua_gcIsRunning(this.__wbg_ptr);if(t[2])throw d(t[1]);return t[0]!==0}gcRestart(){let t=c.wasmlua_gcRestart(this.__wbg_ptr);if(t[1])throw d(t[0])}gcStep(){let t=c.wasmlua_gcStep(this.__wbg_ptr);if(t[2])throw d(t[1]);return t[0]!==0}gcStop(){let t=c.wasmlua_gcStop(this.__wbg_ptr);if(t[1])throw d(t[0])}get(t,e){let o=c.wasmlua_get(this.__wbg_ptr,t,e);if(o[2])throw d(o[1]);return d(o[0])}globals(){let t=c.wasmlua_globals(this.__wbg_ptr);if(t[2])throw d(t[1]);return d(t[0])}inspectStack(t){let e=c.wasmlua_inspectStack(this.__wbg_ptr,t);if(e[2])throw d(e[1]);return d(e[0])}invokeFunction(t,e,o){return c.wasmlua_invokeFunction(this.__wbg_ptr,t,e,o)}isYieldable(){let t=c.wasmlua_isYieldable(this.__wbg_ptr);if(t[2])throw d(t[1]);return t[0]!==0}loadBytecode(t,e){let o=c.wasmlua_loadBytecode(this.__wbg_ptr,t,e);if(o[2])throw d(o[1]);return d(o[0])}loadLibraries(t){let e=c.wasmlua_loadLibraries(this.__wbg_ptr,t);if(e[1])throw d(e[0])}load(t,e){let o=T(t,c.__wbindgen_malloc,c.__wbindgen_realloc),n=S,a=c.wasmlua_load(this.__wbg_ptr,o,n,e);if(a[2])throw d(a[1]);return d(a[0])}mainThread(){let t=c.wasmlua_mainThread(this.__wbg_ptr);if(t[2])throw d(t[1]);return d(t[0])}namecallMethod(){let t=c.wasmlua_namecallMethod(this.__wbg_ptr);if(t[3])throw d(t[2]);let e;return t[0]!==0&&(e=D(t[0],t[1]),c.__wbindgen_free(t[0],t[1]*1,1)),e}namedRegistryValue(t){let e=T(t,c.__wbindgen_malloc,c.__wbindgen_realloc),o=S,n=c.wasmlua_namedRegistryValue(this.__wbg_ptr,e,o);if(n[2])throw d(n[1]);return d(n[0])}constructor(t){let e=c.wasmlua_new(t);if(e[2])throw d(e[1]);return this.__wbg_ptr=e[0],pt.register(this,this.__wbg_ptr,this),this}objectClass(t){let e=c.wasmlua_objectClass(this.__wbg_ptr,t);if(e[2])throw d(e[1]);return d(e[0])}peakMemory(){let t=c.wasmlua_peakMemory(this.__wbg_ptr);if(t[2])throw d(t[1]);return t[0]>>>0}rawGet(t,e){let o=c.wasmlua_rawGet(this.__wbg_ptr,t,e);if(o[2])throw d(o[1]);return d(o[0])}rawSet(t,e,o){let n=c.wasmlua_rawSet(this.__wbg_ptr,t,e,o);if(n[1])throw d(n[0])}release(t){let e=c.wasmlua_release(this.__wbg_ptr,t);if(e[1])throw d(e[0])}removeDebugHooks(){let t=c.wasmlua_removeDebugHooks(this.__wbg_ptr);if(t[1])throw d(t[0])}removeInterruptHooks(){let t=c.wasmlua_removeInterruptHooks(this.__wbg_ptr);if(t[1])throw d(t[0])}requestInterrupt(){let t=c.wasmlua_requestInterrupt(this.__wbg_ptr);if(t[1])throw d(t[0])}sandbox(t){let e=c.wasmlua_sandbox(this.__wbg_ptr,t);if(e[1])throw d(e[0])}setCompiler(t){let e=c.wasmlua_setCompiler(this.__wbg_ptr,t);if(e[1])throw d(e[0])}setDebugHooks(t){let e=c.wasmlua_setDebugHooks(this.__wbg_ptr,t);if(e[1])throw d(e[0])}setInterruptHooks(t){let e=c.wasmlua_setInterruptHooks(this.__wbg_ptr,t);if(e[1])throw d(e[0])}setMemoryLimit(t){let e=c.wasmlua_setMemoryLimit(this.__wbg_ptr,t);if(e[2])throw d(e[1]);return e[0]>>>0}setNamedRegistryValue(t,e){let o=T(t,c.__wbindgen_malloc,c.__wbindgen_realloc),n=S,a=c.wasmlua_setNamedRegistryValue(this.__wbg_ptr,o,n,e);if(a[1])throw d(a[0])}setTypeMetatable(t,e){let o=T(t,c.__wbindgen_malloc,c.__wbindgen_realloc),n=S,a=c.wasmlua_setTypeMetatable(this.__wbg_ptr,o,n,e);if(a[1])throw d(a[0])}set(t,e,o){let n=c.wasmlua_set(this.__wbg_ptr,t,e,o);if(n[1])throw d(n[0])}get stateId(){return c.wasmlua_stateId(this.__wbg_ptr)>>>0}tableClear(t){let e=c.wasmlua_tableClear(this.__wbg_ptr,t);if(e[1])throw d(e[0])}tableContainsKey(t,e){let o=c.wasmlua_tableContainsKey(this.__wbg_ptr,t,e);if(o[2])throw d(o[1]);return o[0]!==0}tableEntries(t){let e=c.wasmlua_tableEntries(this.__wbg_ptr,t);if(e[2])throw d(e[1]);return d(e[0])}tableIsReadonly(t){let e=c.wasmlua_tableIsReadonly(this.__wbg_ptr,t);if(e[2])throw d(e[1]);return e[0]!==0}tableLength(t,e){let o=c.wasmlua_tableLength(this.__wbg_ptr,t,e);if(o[2])throw d(o[1]);return o[0]}tableMetatable(t){let e=c.wasmlua_tableMetatable(this.__wbg_ptr,t);if(e[2])throw d(e[1]);return d(e[0])}tablePop(t){let e=c.wasmlua_tablePop(this.__wbg_ptr,t);if(e[2])throw d(e[1]);return d(e[0])}tablePush(t,e){let o=c.wasmlua_tablePush(this.__wbg_ptr,t,e);if(o[1])throw d(o[0])}tableRawInsert(t,e,o){let n=c.wasmlua_tableRawInsert(this.__wbg_ptr,t,e,o);if(n[1])throw d(n[0])}tableRawPop(t){let e=c.wasmlua_tableRawPop(this.__wbg_ptr,t);if(e[2])throw d(e[1]);return d(e[0])}tableRawPush(t,e){let o=c.wasmlua_tableRawPush(this.__wbg_ptr,t,e);if(o[1])throw d(o[0])}tableRawRemove(t,e){let o=c.wasmlua_tableRawRemove(this.__wbg_ptr,t,e);if(o[1])throw d(o[0])}tableRawSetIndex(t,e,o){let n=c.wasmlua_tableRawSetIndex(this.__wbg_ptr,t,e,o);if(n[1])throw d(n[0])}tableRemove(t,e){let o=c.wasmlua_tableRemove(this.__wbg_ptr,t,e);if(o[1])throw d(o[0])}tableSetMetatable(t,e){let o=c.wasmlua_tableSetMetatable(this.__wbg_ptr,t,e);if(o[1])throw d(o[0])}tableSetReadonly(t,e){let o=c.wasmlua_tableSetReadonly(this.__wbg_ptr,t,e);if(o[1])throw d(o[0])}tableSetSafeEnvironment(t,e){let o=c.wasmlua_tableSetSafeEnvironment(this.__wbg_ptr,t,e);if(o[1])throw d(o[0])}threadInspectStack(t,e){let o=c.wasmlua_threadInspectStack(this.__wbg_ptr,t,e);if(o[2])throw d(o[1]);return d(o[0])}threadIsYieldable(t){let e=c.wasmlua_threadIsYieldable(this.__wbg_ptr,t);if(e[2])throw d(e[1]);return e[0]!==0}threadNamecallMethod(t){let e=c.wasmlua_threadNamecallMethod(this.__wbg_ptr,t);if(e[3])throw d(e[2]);let o;return e[0]!==0&&(o=D(e[0],e[1]),c.__wbindgen_free(e[0],e[1]*1,1)),o}threadReset(t,e){let o=c.wasmlua_threadReset(this.__wbg_ptr,t,e);if(o[1])throw d(o[0])}threadResumeAsync(t,e,o){return c.wasmlua_threadResumeAsync(this.__wbg_ptr,t,e,o)}threadResumeErrorAsync(t,e,o){return c.wasmlua_threadResumeErrorAsync(this.__wbg_ptr,t,e,o)}threadResumeError(t,e){let o=c.wasmlua_threadResumeError(this.__wbg_ptr,t,e);if(o[2])throw d(o[1]);return d(o[0])}threadResume(t,e){let o=c.wasmlua_threadResume(this.__wbg_ptr,t,e);if(o[2])throw d(o[1]);return d(o[0])}threadSetSingleStep(t,e){let o=c.wasmlua_threadSetSingleStep(this.__wbg_ptr,t,e);if(o[1])throw d(o[0])}threadStatus(t){let e,o;try{let r=c.wasmlua_threadStatus(this.__wbg_ptr,t);var n=r[0],a=r[1];if(r[3])throw n=0,a=0,d(r[2]);return e=n,o=a,D(n,a)}finally{c.__wbindgen_free(e,o,1)}}threadTraceback(t,e,o){var n=R(e)?0:T(e,c.__wbindgen_malloc,c.__wbindgen_realloc),a=S;let r=c.wasmlua_threadTraceback(this.__wbg_ptr,t,n,a,o);if(r[2])throw d(r[1]);return d(r[0])}traceback(t,e){var o=R(t)?0:T(t,c.__wbindgen_malloc,c.__wbindgen_realloc),n=S;let a=c.wasmlua_traceback(this.__wbg_ptr,o,n,e);if(a[2])throw d(a[1]);return d(a[0])}typeMetatable(t){let e=T(t,c.__wbindgen_malloc,c.__wbindgen_realloc),o=S,n=c.wasmlua_typeMetatable(this.__wbg_ptr,e,o);if(n[2])throw d(n[1]);return d(n[0])}unsetNamedRegistryValue(t){let e=T(t,c.__wbindgen_malloc,c.__wbindgen_realloc),o=S,n=c.wasmlua_unsetNamedRegistryValue(this.__wbg_ptr,e,o);if(n[1])throw d(n[0])}usedMemory(){let t=c.wasmlua_usedMemory(this.__wbg_ptr);if(t[2])throw d(t[1]);return t[0]>>>0}userdataDestroy(t){let e=c.wasmlua_userdataDestroy(this.__wbg_ptr,t);if(e[1])throw d(e[0])}userdataMetatableEntries(t){let e=c.wasmlua_userdataMetatableEntries(this.__wbg_ptr,t);if(e[2])throw d(e[1]);return d(e[0])}userdataMetatableGet(t,e){let o=T(e,c.__wbindgen_malloc,c.__wbindgen_realloc),n=S,a=c.wasmlua_userdataMetatableGet(this.__wbg_ptr,t,o,n);if(a[2])throw d(a[1]);return d(a[0])}userdataMetatableHas(t,e){let o=T(e,c.__wbindgen_malloc,c.__wbindgen_realloc),n=S,a=c.wasmlua_userdataMetatableHas(this.__wbg_ptr,t,o,n);if(a[2])throw d(a[1]);return a[0]!==0}userdataMetatableSet(t,e,o){let n=T(e,c.__wbindgen_malloc,c.__wbindgen_realloc),a=S,r=c.wasmlua_userdataMetatableSet(this.__wbg_ptr,t,n,a,o);if(r[1])throw d(r[0])}userdataMetatable(t){let e=c.wasmlua_userdataMetatable(this.__wbg_ptr,t);if(e[1])throw d(e[0])}userdataSetUserValue(t,e){let o=c.wasmlua_userdataSetUserValue(this.__wbg_ptr,t,e);if(o[1])throw d(o[0])}userdataTake(t){let e=c.wasmlua_userdataTake(this.__wbg_ptr,t);if(e[2])throw d(e[1]);return d(e[0])}userdataTypeName(t){let e,o;try{let r=c.wasmlua_userdataTypeName(this.__wbg_ptr,t);var n=r[0],a=r[1];if(r[3])throw n=0,a=0,d(r[2]);return e=n,o=a,D(n,a)}finally{c.__wbindgen_free(e,o,1)}}userdataUserValue(t){let e=c.wasmlua_userdataUserValue(this.__wbg_ptr,t);if(e[2])throw d(e[1]);return d(e[0])}userdataValue(t){let e=c.wasmlua_userdataValue(this.__wbg_ptr,t);if(e[2])throw d(e[1]);return d(e[0])}valueEquals(t,e){let o=c.wasmlua_valueEquals(this.__wbg_ptr,t,e);if(o[2])throw d(o[1]);return o[0]!==0}valueIdentity(t){let e=c.wasmlua_valueIdentity(this.__wbg_ptr,t);if(e[2])throw d(e[1]);return e[0]>>>0}valueToString(t){let e,o;try{let r=c.wasmlua_valueToString(this.__wbg_ptr,t);var n=r[0],a=r[1];if(r[3])throw n=0,a=0,d(r[2]);return e=n,o=a,D(n,a)}finally{c.__wbindgen_free(e,o,1)}}};Symbol.dispose&&(Ue.prototype[Symbol.dispose]=Ue.prototype.free);Vn=new WebAssembly.Memory({initial:32});pt=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(t=>c.__wbg_wasmlua_free(t,1));ht=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(t=>c.__wbindgen_destroy_closure(t.a,t.b));Z=null;ge=null;_e=new TextDecoder("utf-8",{ignoreBOM:!0,fatal:!0});_e.decode();qn=2146435072,ze=0;ce=new TextEncoder;"encodeInto"in ce||(ce.encodeInto=function(t,e){let o=ce.encode(t);return e.set(o),{read:t.length,written:o.length}});S=0;Jn=he({__abort_handler:()=>fi,__externref_table_alloc:()=>yi,__externref_table_dealloc:()=>Ti,__instance_terminated:()=>mi,__wbg_wasmlua_free:()=>Yn,__wbindgen_destroy_closure:()=>Si,__wbindgen_exn_store:()=>wi,__wbindgen_externrefs:()=>Ci,__wbindgen_free:()=>xi,__wbindgen_malloc:()=>_i,__wbindgen_realloc:()=>vi,__wbindgen_start:()=>_t,compileWorker:()=>Qn,dumpWorker:()=>Zn,memory:()=>gi,start:()=>Kn,version:()=>er,wasm_bindgen_88f4e4fb1e9bfc9___convert__closures_____invoke_______true_:()=>bi,wasm_bindgen_88f4e4fb1e9bfc9___convert__closures_____invoke___js_sys_9c4f85dd2a4a6892___Function_fn_wasm_bindgen_88f4e4fb1e9bfc9___JsValue_____wasm_bindgen_88f4e4fb1e9bfc9___sys__Undefined___js_sys_9c4f85dd2a4a6892___Function_fn_wasm_bindgen_88f4e4fb1e9bfc9___JsValue_____wasm_bindgen_88f4e4fb1e9bfc9___sys__Undefined_______true_:()=>pi,wasm_bindgen_88f4e4fb1e9bfc9___convert__closures_____invoke___wasm_bindgen_88f4e4fb1e9bfc9___JsValue__core_9b3796e30d99ddb7___result__Result_____wasm_bindgen_88f4e4fb1e9bfc9___JsError___true_:()=>hi,wasmlua_bufferBytes:()=>tr,wasmlua_bufferWrite:()=>or,wasmlua_call:()=>nr,wasmlua_callAsync:()=>rr,wasmlua_callFunction:()=>ar,wasmlua_callFunctionAsync:()=>ir,wasmlua_callMethod:()=>sr,wasmlua_callMethodAsync:()=>cr,wasmlua_coerceInteger:()=>lr,wasmlua_coerceNumber:()=>ur,wasmlua_coerceString:()=>dr,wasmlua_compile:()=>fr,wasmlua_configureModules:()=>mr,wasmlua_configureOutput:()=>pr,wasmlua_configureWorker:()=>hr,wasmlua_createAsyncFunction:()=>br,wasmlua_createBuffer:()=>gr,wasmlua_createBufferWithCapacity:()=>_r,wasmlua_createTable:()=>vr,wasmlua_createTableWithCapacity:()=>wr,wasmlua_createThread:()=>yr,wasmlua_createUserdata:()=>Cr,wasmlua_currentThread:()=>xr,wasmlua_dispose:()=>Sr,wasmlua_dump:()=>Tr,wasmlua_execute:()=>Ar,wasmlua_executeAsync:()=>Er,wasmlua_executeBytecode:()=>Rr,wasmlua_executeBytecodeAsync:()=>kr,wasmlua_executeBytecodeWorker:()=>Dr,wasmlua_executeWorker:()=>Wr,wasmlua_functionBind:()=>Pr,wasmlua_functionCoverage:()=>Or,wasmlua_functionDeepClone:()=>Ir,wasmlua_functionEnvironment:()=>Mr,wasmlua_functionIdentity:()=>Fr,wasmlua_functionInfo:()=>Lr,wasmlua_functionSetEnvironment:()=>jr,wasmlua_gcCollect:()=>Nr,wasmlua_gcIsRunning:()=>Br,wasmlua_gcRestart:()=>Vr,wasmlua_gcStep:()=>zr,wasmlua_gcStop:()=>Ur,wasmlua_get:()=>$r,wasmlua_globals:()=>qr,wasmlua_inspectStack:()=>Gr,wasmlua_invokeFunction:()=>Hr,wasmlua_isYieldable:()=>Jr,wasmlua_load:()=>Xr,wasmlua_loadBytecode:()=>Yr,wasmlua_loadLibraries:()=>Qr,wasmlua_mainThread:()=>Zr,wasmlua_namecallMethod:()=>Kr,wasmlua_namedRegistryValue:()=>ea,wasmlua_new:()=>ta,wasmlua_objectClass:()=>oa,wasmlua_peakMemory:()=>na,wasmlua_rawGet:()=>ra,wasmlua_rawSet:()=>aa,wasmlua_release:()=>ia,wasmlua_removeDebugHooks:()=>sa,wasmlua_removeInterruptHooks:()=>ca,wasmlua_requestInterrupt:()=>la,wasmlua_sandbox:()=>ua,wasmlua_set:()=>da,wasmlua_setCompiler:()=>fa,wasmlua_setDebugHooks:()=>ma,wasmlua_setInterruptHooks:()=>pa,wasmlua_setMemoryLimit:()=>ha,wasmlua_setNamedRegistryValue:()=>ba,wasmlua_setTypeMetatable:()=>ga,wasmlua_stateId:()=>_a,wasmlua_tableClear:()=>va,wasmlua_tableContainsKey:()=>wa,wasmlua_tableEntries:()=>ya,wasmlua_tableIsReadonly:()=>Ca,wasmlua_tableLength:()=>xa,wasmlua_tableMetatable:()=>Sa,wasmlua_tablePop:()=>Ta,wasmlua_tablePush:()=>Aa,wasmlua_tableRawInsert:()=>Ea,wasmlua_tableRawPop:()=>Ra,wasmlua_tableRawPush:()=>ka,wasmlua_tableRawRemove:()=>Da,wasmlua_tableRawSetIndex:()=>Wa,wasmlua_tableRemove:()=>Pa,wasmlua_tableSetMetatable:()=>Oa,wasmlua_tableSetReadonly:()=>Ia,wasmlua_tableSetSafeEnvironment:()=>Ma,wasmlua_threadInspectStack:()=>Fa,wasmlua_threadIsYieldable:()=>La,wasmlua_threadNamecallMethod:()=>ja,wasmlua_threadReset:()=>Na,wasmlua_threadResume:()=>Ba,wasmlua_threadResumeAsync:()=>Va,wasmlua_threadResumeError:()=>za,wasmlua_threadResumeErrorAsync:()=>Ua,wasmlua_threadSetSingleStep:()=>$a,wasmlua_threadStatus:()=>qa,wasmlua_threadTraceback:()=>Ga,wasmlua_traceback:()=>Ha,wasmlua_typeMetatable:()=>Ja,wasmlua_unsetNamedRegistryValue:()=>Xa,wasmlua_usedMemory:()=>Ya,wasmlua_userdataDestroy:()=>Qa,wasmlua_userdataMetatable:()=>Za,wasmlua_userdataMetatableEntries:()=>Ka,wasmlua_userdataMetatableGet:()=>ei,wasmlua_userdataMetatableHas:()=>ti,wasmlua_userdataMetatableSet:()=>oi,wasmlua_userdataSetUserValue:()=>ni,wasmlua_userdataTake:()=>ri,wasmlua_userdataTypeName:()=>ai,wasmlua_userdataUserValue:()=>ii,wasmlua_userdataValue:()=>si,wasmlua_valueEquals:()=>ci,wasmlua_valueIdentity:()=>li,wasmlua_valueToString:()=>ui,workerMemoryBytes:()=>di});h=Xn({"./luau_wasm_bg.js":{__wbg_push_bfdf956ba476f65b:wn,__wbg_call_6bcf8d3e20937e46:Go,__wbg_call_269c5566fbede3eb:qo,__wbg_length_4e1adc0d42e23620:sn,__wbg_get_unchecked_363572bdd397d473:Ko,__wbg_keys_6efc298980178da1:rn,__wbg_then_7a850dae4493f353:On,__wbg_new_typed_6f8b0d724fe26c07:hn,__wbg_call_7bbd9cceba9949ad:Ho,__wbg_instanceof_Promise_f6320f682f582ddf:en,__wbg_get_b1f0ab13c737f856:Zo,__wbg_set_13d25b81ab403f5e:Tn,__wbg_apply_5d9aa7604c2490a8:$o,__wbg_call_c1ad1cb1b78e8130:Jo,__wbg_set_bf6dde4923b9b059:En,__wbg_new_227d7c05414eb861:cn,__wbg_stack_3b0d974bbf31e44f:Rn,__wbg_error_757e9472f8410341:Xo,__wbg_then_b830475380919203:In,__wbg_resolve_35ec7e0c6af4c82c:xn,__wbg_new_bebc3f4757acf305:fn,__wbg_new_ffa92086ea89f79c:mn,__wbg_new_with_length_6a9fc3631737ef8c:gn,__wbg_isArray_5674713bb7b79043:on,__wbg_from_a39669ce566077da:Yo,__wbg_new_a32a1ab6c6655abe:dn,__wbg_new_8d36e20aa758e411:un,__wbg_now_d1fb6650485d7f3e:_n,__wbg_is_61443cc073056436:nn,__wbg_length_31bdaf014f5fbde2:an,__wbg_prototypesetcall_ae9f5e7459250748:vn,__wbg_new_with_length_5ffeddb9d9fbb96f:bn,__wbg_new_from_slice_4ee02165f9de919e:pn,__wbg_static_accessor_GLOBAL_THIS_1e7044f654e934db:Dn,__wbg_static_accessor_SELF_d8b50611246a6d92:Wn,__wbg_static_accessor_GLOBAL_8eb4cd83130a11a0:kn,__wbg_static_accessor_WINDOW_fd0bc376bf0f8b42:Pn,__wbg_instanceof_Uint8Array_598adc0fef426aa8:tn,__wbg_new_8bacbcd413da85bb:ln,__wbg_resolvedOptions_a8a5a3f370c62607:Sn,__wbg_get_989d0a1309644f2b:Qo,__wbg_set_a377297433dfea63:An,__wbg_queueMicrotask_85c90f6987555d65:yn,__wbg_queueMicrotask_f6a1fa10b81d1fc0:Cn,__wbg___wbindgen_number_get_1dc732b810cb937c:No,__wbg___wbindgen_throw_5d9e815e6fdf150f:zo,__wbg___wbindgen_is_null_5160b3e381865372:Mo,__wbg___wbindgen_rethrow_dba7bb2caa14ba21:Bo,__wbg___wbindgen_jsval_eq_9fdcd3c0a860dd3b:jo,__wbg_Error_67e7344beaa85059:ko,__wbg___wbindgen_is_bigint_60fc0336cb14f5d7:Oo,__wbg___wbindgen_is_object_edb6b15aa3afe12e:Fo,__wbg___wbindgen_string_get_92ab86bb19cbc12f:Vo,__wbg___wbindgen_boolean_get_7a12af2b3f899c5a:Wo,__wbg___wbindgen_is_function_fcda5e3902d732fe:Io,__wbg___wbindgen_is_undefined_8c687d0b90d5b524:Lo,__wbg___wbindgen_bigint_get_as_i64_b482365c149396c8:Do,__wbg__wbg_cb_unref_997e73d32238e655:Uo,__wbg___wbindgen_debug_string_0e68cf47c9cbd9b0:Po,__wbindgen_init_externref_table:Bn,__wbindgen_generic_0000000000000001:Mn,__wbindgen_generic_0000000000000002:Fn,__wbindgen_generic_0000000000000003:Ln,__wbindgen_generic_0000000000000004:jn,__wbindgen_generic_0000000000000005:Nn,memory:Vn}}),Yn=h.exports.__wbg_wasmlua_free,Qn=h.exports.compileWorker,Zn=h.exports.dumpWorker,Kn=h.exports.start,er=h.exports.version,tr=h.exports.wasmlua_bufferBytes,or=h.exports.wasmlua_bufferWrite,nr=h.exports.wasmlua_call,rr=h.exports.wasmlua_callAsync,ar=h.exports.wasmlua_callFunction,ir=h.exports.wasmlua_callFunctionAsync,sr=h.exports.wasmlua_callMethod,cr=h.exports.wasmlua_callMethodAsync,lr=h.exports.wasmlua_coerceInteger,ur=h.exports.wasmlua_coerceNumber,dr=h.exports.wasmlua_coerceString,fr=h.exports.wasmlua_compile,mr=h.exports.wasmlua_configureModules,pr=h.exports.wasmlua_configureOutput,hr=h.exports.wasmlua_configureWorker,br=h.exports.wasmlua_createAsyncFunction,gr=h.exports.wasmlua_createBuffer,_r=h.exports.wasmlua_createBufferWithCapacity,vr=h.exports.wasmlua_createTable,wr=h.exports.wasmlua_createTableWithCapacity,yr=h.exports.wasmlua_createThread,Cr=h.exports.wasmlua_createUserdata,xr=h.exports.wasmlua_currentThread,Sr=h.exports.wasmlua_dispose,Tr=h.exports.wasmlua_dump,Ar=h.exports.wasmlua_execute,Er=h.exports.wasmlua_executeAsync,Rr=h.exports.wasmlua_executeBytecode,kr=h.exports.wasmlua_executeBytecodeAsync,Dr=h.exports.wasmlua_executeBytecodeWorker,Wr=h.exports.wasmlua_executeWorker,Pr=h.exports.wasmlua_functionBind,Or=h.exports.wasmlua_functionCoverage,Ir=h.exports.wasmlua_functionDeepClone,Mr=h.exports.wasmlua_functionEnvironment,Fr=h.exports.wasmlua_functionIdentity,Lr=h.exports.wasmlua_functionInfo,jr=h.exports.wasmlua_functionSetEnvironment,Nr=h.exports.wasmlua_gcCollect,Br=h.exports.wasmlua_gcIsRunning,Vr=h.exports.wasmlua_gcRestart,zr=h.exports.wasmlua_gcStep,Ur=h.exports.wasmlua_gcStop,$r=h.exports.wasmlua_get,qr=h.exports.wasmlua_globals,Gr=h.exports.wasmlua_inspectStack,Hr=h.exports.wasmlua_invokeFunction,Jr=h.exports.wasmlua_isYieldable,Xr=h.exports.wasmlua_load,Yr=h.exports.wasmlua_loadBytecode,Qr=h.exports.wasmlua_loadLibraries,Zr=h.exports.wasmlua_mainThread,Kr=h.exports.wasmlua_namecallMethod,ea=h.exports.wasmlua_namedRegistryValue,ta=h.exports.wasmlua_new,oa=h.exports.wasmlua_objectClass,na=h.exports.wasmlua_peakMemory,ra=h.exports.wasmlua_rawGet,aa=h.exports.wasmlua_rawSet,ia=h.exports.wasmlua_release,sa=h.exports.wasmlua_removeDebugHooks,ca=h.exports.wasmlua_removeInterruptHooks,la=h.exports.wasmlua_requestInterrupt,ua=h.exports.wasmlua_sandbox,da=h.exports.wasmlua_set,fa=h.exports.wasmlua_setCompiler,ma=h.exports.wasmlua_setDebugHooks,pa=h.exports.wasmlua_setInterruptHooks,ha=h.exports.wasmlua_setMemoryLimit,ba=h.exports.wasmlua_setNamedRegistryValue,ga=h.exports.wasmlua_setTypeMetatable,_a=h.exports.wasmlua_stateId,va=h.exports.wasmlua_tableClear,wa=h.exports.wasmlua_tableContainsKey,ya=h.exports.wasmlua_tableEntries,Ca=h.exports.wasmlua_tableIsReadonly,xa=h.exports.wasmlua_tableLength,Sa=h.exports.wasmlua_tableMetatable,Ta=h.exports.wasmlua_tablePop,Aa=h.exports.wasmlua_tablePush,Ea=h.exports.wasmlua_tableRawInsert,Ra=h.exports.wasmlua_tableRawPop,ka=h.exports.wasmlua_tableRawPush,Da=h.exports.wasmlua_tableRawRemove,Wa=h.exports.wasmlua_tableRawSetIndex,Pa=h.exports.wasmlua_tableRemove,Oa=h.exports.wasmlua_tableSetMetatable,Ia=h.exports.wasmlua_tableSetReadonly,Ma=h.exports.wasmlua_tableSetSafeEnvironment,Fa=h.exports.wasmlua_threadInspectStack,La=h.exports.wasmlua_threadIsYieldable,ja=h.exports.wasmlua_threadNamecallMethod,Na=h.exports.wasmlua_threadReset,Ba=h.exports.wasmlua_threadResume,Va=h.exports.wasmlua_threadResumeAsync,za=h.exports.wasmlua_threadResumeError,Ua=h.exports.wasmlua_threadResumeErrorAsync,$a=h.exports.wasmlua_threadSetSingleStep,qa=h.exports.wasmlua_threadStatus,Ga=h.exports.wasmlua_threadTraceback,Ha=h.exports.wasmlua_traceback,Ja=h.exports.wasmlua_typeMetatable,Xa=h.exports.wasmlua_unsetNamedRegistryValue,Ya=h.exports.wasmlua_usedMemory,Qa=h.exports.wasmlua_userdataDestroy,Za=h.exports.wasmlua_userdataMetatable,Ka=h.exports.wasmlua_userdataMetatableEntries,ei=h.exports.wasmlua_userdataMetatableGet,ti=h.exports.wasmlua_userdataMetatableHas,oi=h.exports.wasmlua_userdataMetatableSet,ni=h.exports.wasmlua_userdataSetUserValue,ri=h.exports.wasmlua_userdataTake,ai=h.exports.wasmlua_userdataTypeName,ii=h.exports.wasmlua_userdataUserValue,si=h.exports.wasmlua_userdataValue,ci=h.exports.wasmlua_valueEquals,li=h.exports.wasmlua_valueIdentity,ui=h.exports.wasmlua_valueToString,di=h.exports.workerMemoryBytes,fi=h.exports.__abort_handler,mi=h.exports.__instance_terminated,pi=h.exports.wasm_bindgen_88f4e4fb1e9bfc9___convert__closures_____invoke___js_sys_9c4f85dd2a4a6892___Function_fn_wasm_bindgen_88f4e4fb1e9bfc9___JsValue_____wasm_bindgen_88f4e4fb1e9bfc9___sys__Undefined___js_sys_9c4f85dd2a4a6892___Function_fn_wasm_bindgen_88f4e4fb1e9bfc9___JsValue_____wasm_bindgen_88f4e4fb1e9bfc9___sys__Undefined_______true_,hi=h.exports.wasm_bindgen_88f4e4fb1e9bfc9___convert__closures_____invoke___wasm_bindgen_88f4e4fb1e9bfc9___JsValue__core_9b3796e30d99ddb7___result__Result_____wasm_bindgen_88f4e4fb1e9bfc9___JsError___true_,bi=h.exports.wasm_bindgen_88f4e4fb1e9bfc9___convert__closures_____invoke_______true_,gi=h.exports.memory,_i=h.exports.__wbindgen_malloc,vi=h.exports.__wbindgen_realloc,wi=h.exports.__wbindgen_exn_store,yi=h.exports.__externref_table_alloc,Ci=h.exports.__wbindgen_externrefs,xi=h.exports.__wbindgen_free,Si=h.exports.__wbindgen_destroy_closure,Ti=h.exports.__externref_table_dealloc,_t=h.exports.__wbindgen_start;Hn(Jn);_t()});var bo=Symbol("FromLua");var go=Symbol("FromLua.rest"),je=Symbol("IntoLua"),Ne=Symbol("IntoLua.multiple");function L(t){if(!(typeof t!="object"||t===null))return t[bo]}function re(t){if(!(typeof t!="object"||t===null))return t[go]}function ct(t){if(!(typeof t!="object"||t===null))return t[je]}function lt(t){if(!(typeof t!="object"||t===null))return t[Ne]}Be();function Q(t,e){if(!Array.isArray(t))throw new TypeError(`${e} must be an array`);if(t.length>0&&Array.isArray(t[0]))return t.map((o,n)=>{if(!Array.isArray(o))throw new TypeError(`${e} cannot mix arguments and overloads`);return dt(o,`${e}[${n}]`)});if(t.some(Array.isArray))throw new TypeError(`${e} cannot mix arguments and overloads`);return dt(t,e)}function ft(t){return _o(t)?t:[t]}function mt(t,e){let o=re(t.at(-1))!==void 0,n=o?t.length-1:t.length,a=n;for(;a>0&&ae(t[a-1]);)a--;return e>=a&&(o||e<=n)}function be(t){return L(t)!==void 0||vo(t)}function ae(t){return L(t)?.kind==="option"}function dt(t,e){let o=!1,n=!1;return t.map((a,r)=>{let s=re(a);if(s){if(r!==t.length-1)throw new TypeError(`${e}[${r}] rest argument must be last`);if(o)throw new TypeError(`${e}[${r}] cannot follow an optional argument`);if(!be(s.value))throw new TypeError(`${e}[${r}] has an invalid rest decoder`);return n=!0,a}if(n||!be(a))throw new TypeError(`${e}[${r}] must be a FromLua decoder`);if(ae(a))o=!0;else if(o)throw new TypeError(`${e}[${r}] cannot follow an optional argument`);return a})}function _o(t){return t.length>0&&Array.isArray(t[0])}function vo(t){if(t===BigInt)return!0;if(typeof t!="function")return!1;try{return Reflect.construct(Object,[],t),!0}catch{return!1}}var ie=he({buffer:()=>wo,callback:()=>Co,multiple:()=>xo,userdata:()=>yo});function wo(t){if(!(t instanceof Uint8Array))throw new TypeError("buffer value must be a Uint8Array");return Ve({kind:"buffer",bytes:t.slice()})}function yo(t){if((typeof t!="object"||t===null)&&typeof t!="function")throw new TypeError("userdata value must be an object or function");return Ve({kind:"userdata",value:t})}function Co(t,e){if(typeof t!="function")throw new TypeError("callback value must be a function");return Ve({kind:"callback",callback:t,args:e===void 0?void 0:Q(e,"callback arguments")})}function xo(...t){return Object.freeze({[Ne]:Object.freeze(t.slice())})}function Ve(t){return Object.freeze({[je]:Object.freeze(t)})}Object.freeze({optimizationLevel:1,debugLevel:1,memoryLimitBytes:33554432,interruptLimit:25e4,outputLimitBytes:65536,outputLimitEvents:1024,resultLimitBytes:1048576,resultLimitEntries:16384});var yt=2048,Ct=262144,xt=1048576;function Ai(t){for(let e=0;e<t.length;e+=1){let o=t.charCodeAt(e);if(o>=55296&&o<=56319){let n=t.charCodeAt(e+1);if(!(n>=56320&&n<=57343))return!1;e+=1}else if(o>=56320&&o<=57343)return!1}return!0}function ye(t){if(!Ai(t))throw new TypeError("JavaScript string contains an unpaired surrogate")}function St(t){ye(t);let e=0;for(let o=0;o<t.length;o+=1){let n=t.charCodeAt(o);n<128?e+=1:n<2048?e+=2:n>=55296&&n<=56319?(e+=4,o+=1):e+=3}return e}var Ei=class extends Event{text;constructor(t,e){super(t),this.text=e}},Ce=class{x;y;z;constructor(t,e,o){this.x=t,this.y=e,this.z=o}toString(){return`vector(${this.x}, ${this.y}, ${this.z})`}},Ri=new Set(["__add","__sub","__mul","__div","__idiv","__mod","__pow","__eq","__lt","__le","__concat"]),Tt=new WeakMap,ki=new Set(["__add","__sub","__mul","__div","__idiv","__mod","__pow","__unm","__eq","__lt","__le","__len","__concat","__index","__newindex","__namecall","__call","__tostring","__todebugstring","__iter"]);function Di(t){let e=[],o=t;for(;typeof o=="function"&&o!==Function.prototype;){let f=Tt.get(o);f&&e.unshift(f),o=Object.getPrototypeOf(o)}let n=new Map,a=new Map,r=new Map,s=new Map,i=new Map,l=new Map;for(let f of e){for(let m of f.fields)n.set(...m);for(let m of f.methods)a.set(...m);for(let m of f.metamethods)r.set(...m);for(let m of f.proxyFields)s.set(...m);for(let m of f.proxyMethods)i.set(...m);for(let m of f.proxyMetamethods)l.set(...m)}let u=Tt.get(t)?.constructorArguments;if(u!==void 0&&l.has("__call"))throw new TypeError("userdata constructor conflicts with proxy metamethod __call");if(!(u===void 0&&n.size===0&&a.size===0&&r.size===0&&s.size===0&&i.size===0&&l.size===0))return{...u===void 0?{}:{constructor:u},fields:n.size>0?Object.fromEntries(n):void 0,methods:a.size>0?Object.fromEntries(a):void 0,metamethods:r.size>0?Object.fromEntries(r):void 0,proxy:s.size>0||i.size>0||l.size>0?{fields:s.size>0?Object.fromEntries(s):void 0,methods:i.size>0?Object.fromEntries(i):void 0,metamethods:l.size>0?Object.fromEntries(l):void 0}:void 0}}function Wi(t){return Ri.has(t)}function xe(t,e="userdata definition"){if(typeof t!="object"||t===null)throw new TypeError(`${e} must be an object`);let o=t;if(o.fields!==void 0){if(typeof o.fields!="object"||o.fields===null)throw new TypeError(`${e}.fields must be an object`);for(let[n,a]of Object.entries(o.fields)){if(typeof a!="object"||a===null)throw new TypeError(`${e}.fields.${n} must be an object`);if(a.get!==void 0&&typeof a.get!="function")throw new TypeError(`${e}.fields.${n}.get must be a function`);if(a.set!==void 0&&typeof a.set!="function")throw new TypeError(`${e}.fields.${n}.set must be a function`);a.type!==void 0&&Oi(a.type,`${e}.fields.${n}.type`)}}if(o.methods!==void 0){if(typeof o.methods!="object"||o.methods===null)throw new TypeError(`${e}.methods must be an object`);for(let[n,a]of Object.entries(o.methods))Se(a,`${e}.methods.${n}`)}if(o.metamethods!==void 0){if(typeof o.metamethods!="object"||o.metamethods===null)throw new TypeError(`${e}.metamethods must be an object`);for(let[n,a]of Object.entries(o.metamethods)){if(!ki.has(n))throw new TypeError(`unknown Lua userdata metamethod ${n}`);if(n==="__call")Se(a,`${e}.metamethods.${n}`);else if(typeof a!="function")throw new TypeError(`${e}.metamethods.${n} must be a function`)}}}function Pi(t,e="userdata definition"){xe(t,e);let o=t,n=Object.hasOwn(o,"constructor");if(n&&Q(o.constructor,`${e}.constructor`),o.proxy!==void 0&&xe(o.proxy,`${e}.proxy`),n&&o.proxy?.metamethods?.__call!==void 0)throw new TypeError(`${e}.constructor conflicts with ${e}.proxy.metamethods.__call`)}function Se(t,e="userdata method"){if(typeof t=="function")return{callback:t};if(typeof t!="object"||t===null)throw new TypeError(`${e} must be a function or method options`);if(typeof t.callback!="function")throw new TypeError(`${e}.callback must be a function`);return{callback:t.callback,args:Q(t.args,`${e}.args`)}}function Oi(t,e){if(be(t))return t;throw new TypeError(`${e} must be a FromLua decoder`)}var Ye="__luauRsState",fe="__luauRsRef",Qe="__luauRsType",kt="__luauRsVector",Ii="__luauRsBuffer",qe="__luauRsUserdata",K="__luauRsTable",Mi="__luauRsCallbackResult",_=Symbol("LuaValue.state"),W=Symbol("LuaValue"),Dt=Symbol("LuaValue.identity"),N=Symbol("Lua.userdataValue"),Fi=Symbol("Lua.createUserdataIdentity"),Li=Symbol("Lua.release"),ji=Symbol("LuaFunction.invoke"),Ni=Symbol("LuaFunction.identity"),Je=new TextDecoder,At=new TextEncoder,Te=Array.isArray,Bi;function Vi(){return Bi??=Promise.resolve().then(()=>(wt(),vt)).then(t=>{let e=t.initializeWorkerBindings;return e===void 0?t:e()})}var Wt=new FinalizationRegistry(({state:t,handle:e})=>{try{t.deref()?.release(e)}catch{}});function j(t){let e=t.deref();if(!e)throw new Error("Lua state is unavailable");return e}function le(t){if(typeof t!="string")throw new TypeError("Luau source must be a string");return ye(t),t}var zi=class{#e=new WeakMap;bridge(t){let e=new WeakRef(t),o=(...n)=>{let a=e.deref();if(!a)throw new Error("Lua host callback is unavailable");return a(...n)};return this.#e.set(o,t),o}},B=class{lua;type;handle;[_];constructor(t,e,o,n,a,r){if(this.lua=t,this.type=o,this.handle=n,r!==W)throw new TypeError("Lua values are created by a Lua state");this[_]=e,a&&Wt.register(this,{state:new WeakRef(this[_]),handle:n},t)}equals(t){if(t.lua!==this.lua)throw new Error("Lua value belongs to another state");return this[_].valueEquals(this.handle,t.handle)}[Dt](){return this[_].valueIdentity(this.handle)}toString(){return this[_].valueToString(this.handle)}reference(t){if(this.lua!==t)throw new Error("Lua value belongs to another state");return{[Ye]:this[_].stateId,[fe]:this.handle,[Qe]:this.type}}},Ae=class extends B{get(t){return this.lua.decode(this[_].get(this.handle,this.lua.encode(t)))}set(t,e){this[_].set(this.handle,this.lua.encode(t),this.lua.encode(e))}call(...t){return this.lua.decodeArray(this[_].call(this.handle,this.lua.encodeArray(t)))}async callAsync(t=[],e={}){let[o,n]=F(e);try{return this.lua.decodeArray(await this[_].callAsync(this.handle,this.lua.encodeArray(t),o))}finally{n()}}callMethod(t,...e){return this.lua.decodeArray(this[_].callMethod(this.handle,t,this.lua.encodeArray(e)))}async callMethodAsync(t,e=[],o={}){let[n,a]=F(o);try{return this.lua.decodeArray(await this[_].callMethodAsync(this.handle,t,this.lua.encodeArray(e),n))}finally{a()}}callFunction(t,...e){return this.lua.decodeArray(this[_].callFunction(this.handle,t,this.lua.encodeArray(e)))}async callFunctionAsync(t,e=[],o={}){let[n,a]=F(o);try{return this.lua.decodeArray(await this[_].callFunctionAsync(this.handle,t,this.lua.encodeArray(e),n))}finally{a()}}},Pt=class extends Ae{},Ui=class extends Ae{get class(){let t=this.lua.decode(this[_].objectClass(this.handle));if(!(t instanceof Pt))throw new Error("Lua returned an invalid object class");return t}},P=class Ot extends Ae{rawGet(e){return this.lua.decode(this[_].rawGet(this.handle,this.lua.encode(e)))}rawSet(e,o){this[_].rawSet(this.handle,this.lua.encode(e),this.lua.encode(o))}entries(){return this[_].tableEntries(this.handle).map(e=>{if(!Te(e)||e.length!==2)throw new Error("Lua returned an invalid table entry");return[this.lua.decode(e[0]),this.lua.decode(e[1])]})}toArray(){let e=this.entries(),o=new Array(e.length);for(let[n,a]of e){let r=Mt(n);if(r===void 0||r>e.length||r-1 in o)throw new TypeError("table must be a contiguous sequence");o[r-1]=a}return o}toObject(){let e=Object.create(null);for(let[o,n]of this.entries()){if(typeof o!="string")throw new TypeError("table must have only string keys");e[o]=n}return e}toMap(){return new Map(this.entries())}length(e={}){return this[_].tableLength(this.handle,e.raw??!1)}clear(){this[_].tableClear(this.handle)}containsKey(e){return this[_].tableContainsKey(this.handle,this.lua.encode(e))}push(e){this[_].tablePush(this.handle,this.lua.encode(e))}pop(){return this.lua.decode(this[_].tablePop(this.handle))}remove(e){this[_].tableRemove(this.handle,this.lua.encode(e))}rawSetIndex(e,o){this[_].tableRawSetIndex(this.handle,k(e,"index"),this.lua.encode(o))}rawPush(e){this[_].tableRawPush(this.handle,this.lua.encode(e))}rawPop(){return this.lua.decode(this[_].tableRawPop(this.handle))}rawInsert(e,o){this[_].tableRawInsert(this.handle,k(e,"index"),this.lua.encode(o))}rawRemove(e){this[_].tableRawRemove(this.handle,this.lua.encode(e))}setSafeEnvironment(e){this[_].tableSetSafeEnvironment(this.handle,e)}get readonly(){return this[_].tableIsReadonly(this.handle)}set readonly(e){this[_].tableSetReadonly(this.handle,e)}get metatable(){let e=this.lua.decode(this[_].tableMetatable(this.handle));if(e===null)return null;if(!(e instanceof Ot))throw new Error("Lua returned a non-table metatable");return e}set metatable(e){this[_].tableSetMetatable(this.handle,this.lua.encode(e))}},de=class Xe extends B{get environment(){let e=this.lua.decode(this[_].functionEnvironment(this.handle));if(e===null)return null;if(!(e instanceof P))throw new Error("Lua returned a non-table function environment");return e}setEnvironment(e){if(!(e instanceof P))throw new TypeError("function environment must be a Lua table");return this[_].functionSetEnvironment(this.handle,e.reference(this.lua)[fe])}deepClone(){let e=this.lua.decode(this[_].functionDeepClone(this.handle));if(!(e instanceof Xe))throw new Error("Lua returned a non-function clone");return e}bind(...e){let o=this.lua.decode(this[_].functionBind(this.handle,this.lua.encodeArray(e)));if(!(o instanceof Xe))throw new Error("Lua returned a non-function binding");return o}info(){return this[_].functionInfo(this.handle)}coverage(){return this[_].functionCoverage(this.handle)}call(...e){return this.lua.decodeArray(this[_].call(this.handle,this.lua.encodeArray(e)))}async callAsync(e=[],o={}){let[n,a]=F(o);try{return this.lua.decodeArray(await this[_].callAsync(this.handle,this.lua.encodeArray(e),n))}finally{a()}}[ji](e,o={}){let[n,a]=F(o),r;try{r=this[_].invokeFunction(this.handle,this.lua.encodeArray(e),n)}catch(s){throw a(),s}return r instanceof Promise?r.then(s=>this.lua.decodeArray(s)).finally(a):(a(),this.lua.decodeArray(r))}[Ni](){return this[_].functionIdentity(this.handle)}createThread(){let e=this.lua.decode(this[_].createThread(this.handle));if(!(e instanceof ve))throw new Error("Lua returned a non-thread value");return e}},ve=class extends B{get status(){return this[_].threadStatus(this.handle)}get yieldable(){return this[_].threadIsYieldable(this.handle)}get namecallMethod(){return this[_].threadNamecallMethod(this.handle)??null}setSingleStep(t){if(typeof t!="boolean")throw new TypeError("single-step state must be a boolean");this[_].threadSetSingleStep(this.handle,t)}inspectStack(t=0){let e=this[_].threadInspectStack(this.handle,k(t,"stack level"));return e===null?null:Object.freeze(e)}traceback(t,e=0){return Je.decode(this[_].threadTraceback(this.handle,t,k(e,"traceback level")))}resume(...t){return this.lua.decodeArray(this[_].threadResume(this.handle,this.lua.encodeArray(t)))}reset(t){if(!(t instanceof de))throw new TypeError("thread reset requires a Lua function");this[_].threadReset(this.handle,t.reference(this.lua)[fe])}resumeError(t){return this.lua.decodeArray(this[_].threadResumeError(this.handle,this.lua.encode(t)))}async resumeAsync(t=[],e={}){let[o,n]=F(e);try{let a=await this[_].threadResumeAsync(this.handle,this.lua.encodeArray(t),o);return this.decodeResult(a)}finally{n()}}async resumeErrorAsync(t,e={}){let[o,n]=F(e);try{return this.decodeResult(await this[_].threadResumeErrorAsync(this.handle,this.lua.encode(t),o))}finally{n()}}[Symbol.asyncIterator](){let t=!1,e=Promise.resolve(),o=this,n=a=>{let r=e.then(a);return e=r.then(()=>{},()=>{}),r};return{next(a=[]){return n(async()=>{if(t)return{done:!0,value:[]};try{let r=await o.resumeAsync(a);return t=r.done,r}catch(r){throw t=o.status!=="resumable",r}})},throw(a){return n(async()=>{if(t)throw a;try{let r=await o.resumeErrorAsync(a);return t=r.done,r}catch(r){throw t=o.status!=="resumable",r}})},return(a=[]){return n(async()=>(t=!0,{done:!0,value:await a}))},[Symbol.asyncIterator](){return this},async[Symbol.asyncDispose](){t=!0,await e}}}decodeResult(t){if(typeof t!="object"||t===null)throw new Error("Lua returned an invalid coroutine result");let e=t;if(typeof e.done!="boolean"||!Te(e.value))throw new Error("Lua returned an invalid coroutine result");let o=this.lua.decodeArray(e.value);return e.done?{done:!0,value:o}:{done:!1,value:o}}},Et=class extends B{get bytes(){return this[_].bufferBytes(this.handle)}write(t,e){this[_].bufferWrite(this.handle,k(t,"offset"),e)}},ee=class extends Ae{get value(){return this.lua[N](this[_].userdataValue(this.handle))}destroy(){this[_].userdataDestroy(this.handle)}take(){return this.lua[N](this[_].userdataTake(this.handle))}get userValue(){return this.lua.decode(this[_].userdataUserValue(this.handle))}set userValue(t){this[_].userdataSetUserValue(this.handle,this.lua.encode(t))}get typeName(){return this[_].userdataTypeName(this.handle)}get metatable(){return this[_].userdataMetatable(this.handle),$i.create(this,this.lua,this[_],this.handle,W)}isProxy(t){return Object.is(this.value,t)}},$i=class It{owner;lua;handle;constructor(e,o,n,a,r){if(this.owner=e,this.lua=o,this.handle=a,r!==W)throw new TypeError("userdata metatables are created by Lua userdata");this.state=n}state;static create(e,o,n,a,r){return new It(e,o,n,a,r)}get(e){return this.lua.decode(this.state.userdataMetatableGet(this.handle,e))}set(e,o){this.state.userdataMetatableSet(this.handle,e,this.lua.encode(o))}has(e){return this.state.userdataMetatableHas(this.handle,e)}entries(){return this.state.userdataMetatableEntries(this.handle).map(e=>{if(!Te(e)||e.length!==2||typeof e[0]!="string")throw new Error("Lua returned an invalid userdata metatable entry");return[e[0],this.lua.decode(e[1])]})}};function ue(t,e,o="argument"){if(e===void 0)return[...t];let n=ft(e).filter(r=>mt(r,t.length));if(n.length===0)throw new TypeError(`${o} count does not match the declared arguments`);let a;for(let r of n)try{return qi(t,r,s=>s,o)}catch(s){a??=s}throw n.length===1&&a instanceof Error?a:new TypeError(`${o}s do not match any declared overload`)}function qi(t,e,o,n){let a={tables:new Map,leaf:o},r=e?re(e.at(-1)):void 0,s=e?e.length-(r?1:0):t.length,i=r?Math.max(s,t.length):s;return Array.from({length:i},(l,u)=>H(t[u]??null,u<s?e?.[u]:r?.value,a,0,`${n} ${u+1}`))}function H(t,e,o,n,a){if(n>64)throw new TypeError("Lua table nesting is too deep");let r=L(e);if(r?.kind==="option")return t===null?void 0:H(t,r.value,o,n,a);if(r?.kind==="bytes"){if(t instanceof Uint8Array)return t;if(typeof t=="string")return At.encode(t);throw new TypeError(`${a} must be a string`)}if(r?.kind==="array"||r?.kind==="tuple"||r?.kind==="map"||r?.kind==="record"||r?.kind==="object"){if(!(t instanceof P))throw new TypeError(`${a} must be a table`);return Ge(t,e,o,n,a)}if(e===void 0)return t instanceof P?Ge(t,void 0,o,n,a):o.leaf(t);if(e===Number){if(typeof t=="number")return t;if(typeof t=="bigint"&&t>=BigInt(Number.MIN_SAFE_INTEGER)&&t<=BigInt(Number.MAX_SAFE_INTEGER))return Number(t);throw new TypeError(`${a} must be a number`)}if(e===BigInt){if(typeof t=="bigint")return t;if(typeof t=="number"&&Number.isSafeInteger(t))return BigInt(t);throw new TypeError(`${a} must be an integer`)}if(e===String){if(typeof t=="string")return t;throw new TypeError(`${a} must be a valid UTF-8 string`)}if(e===Boolean){if(typeof t=="boolean")return t;throw new TypeError(`${a} must be a boolean`)}if(e===Uint8Array){if(t instanceof Uint8Array)return t;if(typeof t=="string")return At.encode(t);throw new TypeError(`${a} must be a string`)}if(e===Array||e===Object||e===Map){if(!(t instanceof P))throw new TypeError(`${a} must be a table`);return Ge(t,e,o,n,a)}if(e===Ce){if(t instanceof Ce)return t;throw new TypeError(`${a} must be a vector`)}let s=e;if(s===B||s.prototype instanceof B){if(t instanceof s)return t;throw new TypeError(`${a} must be ${s.name}`)}if(t instanceof ee){let i=t.value;if(i instanceof s)return i}throw new TypeError(`${a} must be ${s.name||"registered userdata"}`)}function Ge(t,e,o,n,a){let r=t[Dt](),s=o.tables.get(r);if(s){if(e!==void 0&&(s.decoder===void 0||!te(e,s.decoder)))throw new TypeError(`${a} was already converted with a different table decoder`);return s.value}let i=t.entries(),l=i.map(([g])=>Mt(g)),u=i.length>0&&l.every(g=>g!==void 0)&&new Set(l).size===i.length&&l.reduce((g,v)=>Math.max(g,v),0)===i.length,f=L(e),m=(e===Array||f?.kind==="array"||f?.kind==="tuple"?"array":e===Object||f?.kind==="record"||f?.kind==="object"?"object":e===Map||f?.kind==="map"?"map":void 0)??(u?"array":i.every(([g])=>typeof g=="string")?"object":"map");if(m==="array"){if(!u&&i.length!==0)throw new TypeError(`${a} must be a contiguous sequence table`);if(f?.kind==="tuple"&&!Gi(f.values,i.length))throw new TypeError(`${a} length does not match the declared tuple`);let g=new Array(f?.kind==="tuple"?f.values.length:i.length);o.tables.set(r,{decoder:e,value:g});for(let v=0;v<i.length;v+=1)g[l[v]-1]=H(i[v][1],f?.kind==="array"?f.value:f?.kind==="tuple"?f.values[v]:void 0,o,n+1,`${a}[${v}]`);if(f?.kind==="tuple")for(let v=i.length;v<f.values.length;v+=1)g[v]=H(null,f.values[v],o,n+1,`${a}[${v}]`);return g}if(m==="object"){if(!i.every(([C])=>typeof C=="string"))throw new TypeError(`${a} must be a table with string keys`);let g=Object.create(null);o.tables.set(r,{decoder:e,value:g});let v=f?.kind==="object"?f.fields:void 0,w=new Set;for(let[C,b]of i){let y=C;w.add(y),g[y]=H(b,f?.kind==="record"?f.value:v?.[y],o,n+1,`${a}.${y}`)}if(v){for(let[C,b]of Object.entries(v))if(!w.has(C)&&!ae(b))throw new TypeError(`${a}.${C} is required`)}return g}let p=new Map;o.tables.set(r,{decoder:e,value:p});for(let[g,v]of i)p.set(H(g,f?.kind==="map"?f.key:void 0,o,n+1,`${a} key`),H(v,f?.kind==="map"?f.value:void 0,o,n+1,`${a} value`));return p}function Gi(t,e){let o=t.length;for(;o>0&&ae(t[o-1]);)o--;return e>=o&&e<=t.length}function te(t,e){if(t===e)return!0;let o=L(t),n=L(e);if(!o||!n||o.kind!==n.kind)return!1;switch(o.kind){case"bytes":return!0;case"array":case"record":case"option":return te(o.value,n.value);case"tuple":{let a=n.values;return o.values.length===a.length&&o.values.every((r,s)=>te(r,a[s]))}case"map":{let a=n;return te(o.key,a.key)&&te(o.value,a.value)}case"object":{let a=n.fields,r=Object.keys(o.fields);return r.length===Object.keys(a).length&&r.every(s=>Object.hasOwn(a,s)&&te(o.fields[s],a[s]))}}}function Rt(t){return(typeof t=="object"||typeof t=="function")&&t!==null&&"then"in t&&typeof t.then=="function"}function Mt(t){return typeof t=="bigint"?t<1n||t>BigInt(Number.MAX_SAFE_INTEGER)?void 0:Number(t):typeof t=="number"&&Number.isSafeInteger(t)&&t>=1?t:void 0}var Ee=class we extends EventTarget{version;appData=new Map;#e;#t;#r=new Map;#n=new Map;#a=new WeakMap;#i=new WeakMap;#o;constructor(e,o,n,a){super(),this.version=o,this.#e=e,this.#o=n,this.#t=a}[Li](){Wt.unregister(this),this.#e.dispose(),this.#e.free()}static async create(e={}){return we.createState(e,!0)}static async createWorkerState(e={}){return we.createState(e,!1)}static async createState(e,o){if(typeof e!="object"||e===null)throw new TypeError("Lua options must be an object");let{resolveModule:n,...a}=e;if(n!==void 0&&typeof n!="function")throw new TypeError("resolveModule must be a function");let r=await Vi(),s=new zi,i=a.memory?.onAllocation,l=i?{...a,memory:{...a.memory,onAllocation:s.bridge(i)}}:a,u=new we(new r.WasmLua(l),r.version(),o,s),f=new WeakRef(u);return u.#e.configureOutput(s.bridge((m,p)=>{f.deref()?.dispatchEvent(new Ei(m,p))})),n&&u.#e.configureModules([],u.moduleResolver(n),a.sandbox===!0,{maxModules:32,maxModuleNameBytes:yt,maxModuleSourceBytes:Ct,maxTotalModuleSourceBytes:xt}),u}addEventListener(e,o,n){super.addEventListener(e,o,n)}removeEventListener(e,o,n){super.removeEventListener(e,o,n)}get globals(){let e=this.decode(this.#e.globals());if(!(e instanceof P))throw new Error("Lua returned invalid globals");return e}get mainThread(){let e=this.decode(this.#e.mainThread());if(!(e instanceof ve))throw new Error("Lua returned an invalid main thread");return e}get currentThread(){let e=this.decode(this.#e.currentThread());if(!(e instanceof ve))throw new Error("Lua returned an invalid current thread");return e}get yieldable(){return this.#e.isYieldable()}get namecallMethod(){return this.#e.namecallMethod()??null}coerceString(e){let o=this.decode(this.#e.coerceString(this.encode(e)));if(o!==null&&typeof o!="string"&&!(o instanceof Uint8Array))throw new Error("Lua returned a non-string coercion result");return o}coerceInteger(e){let o=this.#e.coerceInteger(this.encode(e));if(o!==null&&typeof o!="bigint")throw new Error("Lua returned a non-integer coercion result");return o}coerceNumber(e){let o=this.#e.coerceNumber(this.encode(e));if(o===void 0)return null;if(typeof o!="number")throw new Error("Lua returned a non-number coercion result");return o}typeMetatable(e){let o=this.decode(this.#e.typeMetatable(e));if(o===null)return null;if(!(o instanceof P))throw new Error("Lua returned a non-table type metatable");return o}setTypeMetatable(e,o){if(o!==null&&!(o instanceof P))throw new TypeError("type metatable must be a Lua table or null");this.#e.setTypeMetatable(e,this.encode(o))}inspectStack(e=0){let o=this.#e.inspectStack(k(e,"stack level"));return o===null?null:Object.freeze(o)}get usedMemory(){return this.#e.usedMemory()}get peakMemory(){return this.#e.peakMemory()}configureWorker(e,o,n,a,r){this.#e.configureWorker([...e],o?this.moduleResolver(o):void 0,this.#t.bridge(n),a,r,{maxModules:32,maxModuleNameBytes:yt,maxModuleSourceBytes:Ct,maxTotalModuleSourceBytes:xt})}moduleResolver(e){let o=this.#t.bridge(e),n=new WeakRef(this),a=r=>{let s=j(n);if(r==null)return r;if(typeof r!="object"||Array.isArray(r))throw new TypeError("module resolver must return a module object");if(typeof r.name!="string")throw new TypeError("resolved module name must be a string");if(!r.name||r.name.includes("\0")||St(r.name)>2048)throw new TypeError("resolved module name is invalid");let i=Object.hasOwn(r,"source");if(i===Object.hasOwn(r,"value"))throw new TypeError("module resolver must return exactly one of source or value");if(i){if(typeof r.source!="string")throw new TypeError("resolved module source must be a string");let u=r.source;if(St(u)>262144)throw new RangeError("resolved module source exceeds the per-file limit");return{name:r.name,source:u}}let l=r.value;if(l===void 0)throw new TypeError("resolved module value is required");return{name:r.name,value:s.encode(l)}};return(r,s)=>{let i=j(n),l=o(r,{from:s,lua:i});return Rt(l)?Promise.resolve(l).then(a):a(l)}}executeWorker(e,o,n,a,r){return this.#e.executeWorker(e,o,n,a,r)}executeBytecodeWorker(e,o,n,a,r){return this.#e.executeBytecodeWorker(e,o,n,a,r)}get gcRunning(){return this.#e.gcIsRunning()}createTable(e){let o=this.decode(this.#e.createTable(this.encode(e??null)));if(!(o instanceof P))throw new Error("Lua returned a non-table value");return o}createTableWithCapacity(e,o){let n=this.decode(this.#e.createTableWithCapacity(k(e,"array capacity"),k(o,"record capacity")));if(!(n instanceof P))throw new Error("Lua returned a non-table value");return n}createBuffer(e){let o=this.decode(typeof e=="number"?this.#e.createBufferWithCapacity(k(e,"buffer size")):this.#e.createBuffer(e));if(!(o instanceof Et))throw new Error("Lua returned a non-buffer value");return o}loadLibraries(e){this.#e.loadLibraries(e)}createFunction(e,o){if(typeof e!="function")throw new TypeError("callback must be a function");let n;if(o!==void 0){if(typeof o!="object"||o===null)throw new TypeError("function options must be an object");n=Q(o.args,"function options.args")}let a=new WeakRef(this),r=this.#t.bridge(e),s=(...l)=>{let u=j(a);return u.encodeCallbackReturn(r(...ue(l.map(f=>u.decode(f)),n,"function argument")))},i=this.decode(this.#e.createAsyncFunction(s));if(!(i instanceof de))throw new Error("Lua returned a non-function value");return i}createUserdata(e){let o=this.userdataBridge(e)??this.bridgeUserdataDefinition({}),n=this.decode(this.#e.createUserdata(this.storeUserdata(e),o,0));if(!(n instanceof ee))throw new Error("Lua returned a non-userdata value");return n}createProxy(e,o){o!==void 0&&xe(o,"userdata proxy definition");let n=o||this.userdataProxyDefinition(e,this.userdataDefinition(e)),a=this.bridgeUserdataDefinition(n),r=this.decode(this.#e.createUserdata(this.storeUserdata(e),a,0));if(!(r instanceof ee))throw new Error("Lua returned a non-userdata proxy");return r}registerUserdata(e,o){Pi(o);let n=Object.hasOwn(o,"constructor")?{...o,constructor:Q(o.constructor,"userdata definition.constructor")}:o;this.#r.set(e,n),this.#n.clear()}[Fi](e,o,n){let a=n?this.bridgeUserdataDefinition(n):this.userdataBridge(e)??this.bridgeUserdataDefinition({}),r=this.decode(this.#e.createUserdata(this.storeUserdata(e),a,k(o,"userdata identity")));if(!(r instanceof ee))throw new Error("Lua returned a non-userdata value");return r}load(e,o={}){let n={...o,environment:o.environment?this.encode(o.environment):void 0},a=this.decode(this.#e.load(le(e),n));if(!(a instanceof de))throw new Error("Lua returned a non-function value");return a}loadBytecode(e,o={}){let n={...o,environment:o.environment?this.encode(o.environment):void 0},a=this.decode(this.#e.loadBytecode(e,n));if(!(a instanceof de))throw new Error("Lua returned a non-function value");return a}execute(e,o={},...n){let a={...o,environment:o.environment?this.encode(o.environment):void 0};return this.decodeArray(this.#e.execute(le(e),a,this.encodeArray(n)))}async executeAsync(e,o={},...n){let[a,r]=F(o),{signal:s,...i}=o,l={...i,environment:o.environment?this.encode(o.environment):void 0};try{return this.decodeArray(await this.#e.executeAsync(le(e),l,this.encodeArray(n),a))}finally{r()}}executeBytecode(e,o={},...n){let a={...o,environment:o.environment?this.encode(o.environment):void 0};return this.decodeArray(this.#e.executeBytecode(e,a,this.encodeArray(n)))}async executeBytecodeAsync(e,o={},...n){let[a,r]=F(o),{signal:s,...i}=o,l={...i,environment:o.environment?this.encode(o.environment):void 0};try{return this.decodeArray(await this.#e.executeBytecodeAsync(e,l,this.encodeArray(n),a))}finally{r()}}compile(e,o={}){return this.#e.compile(le(e),this.encodeCompilerOptions(o))}dump(e,o={}){return Je.decode(this.#e.dump(le(e),this.encodeCompilerOptions(o),o))}setCompiler(e){this.#e.setCompiler(this.encodeCompilerOptions(e))}sandbox(e=!0){this.#e.sandbox(e)}setMemoryLimit(e){return this.#e.setMemoryLimit(k(e,"memory limit"))}gcStop(){this.#e.gcStop()}gcRestart(){this.#e.gcRestart()}gcCollect(){this.#e.gcCollect()}gcStep(){return this.#e.gcStep()}traceback(e,o=0){return Je.decode(this.#e.traceback(e,k(o,"traceback level")))}setNamedRegistryValue(e,o){this.#e.setNamedRegistryValue(e,this.encode(o))}namedRegistryValue(e){return this.decode(this.#e.namedRegistryValue(e))}unsetNamedRegistryValue(e){this.#e.unsetNamedRegistryValue(e)}setInterruptHooks(e){let o=e.execution?this.#t.bridge(e.execution):void 0,n=e.pattern?this.#t.bridge(e.pattern):void 0,a=e.garbageCollection?this.#t.bridge(e.garbageCollection):void 0;this.#e.setInterruptHooks({mode:e.mode,execution:o,pattern:n,garbageCollection:a})}removeInterruptHooks(){this.#e.removeInterruptHooks()}requestInterrupt(){this.#e.requestInterrupt()}setDebugHooks(e){let o=e.step?this.#t.bridge(e.step):void 0,n=e.breakpoint?this.#t.bridge(e.breakpoint):void 0,a=e.interrupt?this.#t.bridge(e.interrupt):void 0,r=e.protectedError?this.#t.bridge(e.protectedError):void 0;this.#e.setDebugHooks({singleStep:e.singleStep,step:o,breakpoint:n,interrupt:a,protectedError:r})}removeDebugHooks(){this.#e.removeDebugHooks()}encode(e,o=0,n={tables:new WeakMap,nextTableId:1}){if(o>64)throw new TypeError("value nesting is too deep");if(e==null)return null;let a=ct(e);if(a)switch(a.kind){case"buffer":return{[Ii]:!0,bytes:a.bytes};case"userdata":return{[qe]:!0,value:this.storeUserdata(a.value),definition:this.bridgeUserdataDefinition({})};case"callback":return(a.args?this.createFunction(a.callback,{args:a.args}):this.createFunction(a.callback)).reference(this)}if(e instanceof B)return e.reference(this);if(e instanceof Ce)return{[kt]:!0,x:e.x,y:e.y,z:e.z};if(typeof e=="string")return ye(e),e;if(typeof e=="boolean"||typeof e=="number"||typeof e=="bigint"||e instanceof Uint8Array)return e;if(typeof e=="function")return{[qe]:!0,value:this.storeUserdata(e),definition:this.userdataBridge(e)??this.bridgeUserdataDefinition({})};if(Te(e)){let r=n.tables.get(e);if(r!==void 0)return{[K]:!0,reference:r};let s=He(n);return n.tables.set(e,s),{[K]:!0,id:s,array:e.map(i=>this.encode(i,o+1,n))}}if(typeof e=="object"){if(e instanceof Map){let l=n.tables.get(e);if(l!==void 0)return{[K]:!0,reference:l};let u=He(n);return n.tables.set(e,u),{[K]:!0,id:u,entries:[...e].map(([f,m])=>[this.encode(f,o+1,n),this.encode(m,o+1,n)])}}let r=this.userdataBridge(e);if(r)return{[qe]:!0,value:this.storeUserdata(e),definition:r};let s=n.tables.get(e);if(s!==void 0)return{[K]:!0,reference:s};let i=He(n);return n.tables.set(e,i),{[K]:!0,id:i,entries:Object.entries(e).map(([l,u])=>(ye(l),[l,this.encode(u,o+1,n)]))}}throw new TypeError(`unsupported JavaScript value of type ${typeof e}`)}encodeArray(e){let o={tables:new WeakMap,nextTableId:1};return e.map(n=>this.encode(n,0,o))}decode(e){if(Hi(e)){if(e[Ye]!==this.#e.stateId)throw new Error("Lua value belongs to another state");return this.wrapReference(e[fe],e[Qe])}if(Ji(e))return new Ce(e.x,e.y,e.z);if(e===null||typeof e=="boolean"||typeof e=="number"||typeof e=="bigint"||typeof e=="string"||e instanceof Uint8Array)return e;throw new Error("Lua returned a value that cannot cross into JavaScript")}decodeArray(e){return e.map(o=>this.decode(o))}wrapReference(e,o){switch(o){case"table":return new P(this,this.#e,o,e,this.#o,W);case"function":return new de(this,this.#e,o,e,this.#o,W);case"thread":return new ve(this,this.#e,o,e,this.#o,W);case"buffer":return new Et(this,this.#e,o,e,this.#o,W);case"userdata":return new ee(this,this.#e,o,e,this.#o,W);case"class":return new Pt(this,this.#e,o,e,this.#o,W);case"object":return new Ui(this,this.#e,o,e,this.#o,W);default:return new B(this,this.#e,o,e,this.#o,W)}}encodeCallbackResult(e){let o=lt(e),n=e===void 0?[]:o||[e];return{[Mi]:!0,values:this.encodeArray(n)}}encodeCallbackReturn(e){return Rt(e)?Promise.resolve(e).then(o=>this.encodeCallbackResult(o)):this.encodeCallbackResult(e)}encodeCompilerOptions(e){return{...e,libraryConstants:e.libraryConstants?Object.fromEntries(Object.entries(e.libraryConstants).map(([o,n])=>[o,this.encode(n)])):void 0}}userdataBridge(e){let o=Object.getPrototypeOf(e);if(o===null||o===Object.prototype)return;let n=o?Reflect.get(o,"constructor"):void 0;if(typeof n=="function"){let s=this.#n.get(n);if(s)return s}let a=typeof n=="function"?this.userdataDefinition(n):void 0,r=this.bridgeUserdataDefinition(a??{});return a&&typeof n=="function"&&this.#n.set(n,r),r}userdataDefinition(e){let o=e;for(;typeof o=="function"&&o!==Function.prototype;){let n=this.#r.get(o);if(n){if(o!==e&&Object.hasOwn(n,"constructor")){let{constructor:a,...r}=n;return r}return n}o=Object.getPrototypeOf(o)}return Di(e)}userdataProxyDefinition(e,o){let n=o?.proxy??{};return!o||!Object.hasOwn(o,"constructor")?n:{...n,metamethods:{...n.metamethods,__call:{args:o.constructor,callback:(a,...r)=>Reflect.construct(e,r)}}}}storeUserdata(e){let o=Object.create(null);return this.#a.set(o,e),o}[N](e){if(typeof e!="object"||e===null)throw new Error("Lua returned an invalid userdata token");let o=this.#a.get(e);if(!o)throw new Error("Lua userdata value is unavailable");return o}bridgeUserdataDefinition(e){xe(e);let o=new WeakRef(this);return{fields:e.fields?Object.fromEntries(Object.entries(e.fields).map(([n,a])=>{let r=a.get?this.#t.bridge(a.get):void 0,s=a.set?this.#t.bridge(a.set):void 0;return[n,{get:r?i=>{let l=j(o);return l.encode(r(l[N](i)))}:void 0,set:s?(i,l)=>{let u=j(o),[f]=ue([u.decode(l)],a.type?[a.type]:void 0,`userdata field ${n}`);s(u[N](i),f)}:void 0}]})):void 0,methods:e.methods?Object.fromEntries(Object.entries(e.methods).map(([n,a])=>{let r=Se(a),s=this.#t.bridge(r.callback);return[n,(i,...l)=>{let u=j(o);return u.encodeCallbackReturn(s(u[N](i),...ue(l.map(f=>u.decode(f)),r.args,`userdata method ${n} argument`)))}]})):void 0,metamethods:e.metamethods?Object.fromEntries(Object.entries(e.metamethods).map(([n,a])=>{if(!a)throw new TypeError(`userdata metamethod ${n} is undefined`);if(Wi(n)){let i=a,l=this.#i.get(i);if(!l){let u=this.#t.bridge(i);l=(f,m,p)=>{let g=j(o),v=g[N](f),[w]=ue([g.decode(m)]),C=w instanceof ee?w.value:w;return g.encodeCallbackResult(p?u(C,v):u(v,C))},this.#i.set(i,l)}return[n,l]}let r=n==="__call"?Se(a):{callback:a},s=this.#t.bridge(r.callback);return[n,(i,...l)=>{let u=j(o),f=s(u[N](i),...ue(l.map(m=>u.decode(m)),r.args,`userdata metamethod ${n} argument`));return n==="__call"||n==="__namecall"?u.encodeCallbackReturn(f):u.encodeCallbackResult(f)}]})):void 0}}};function Hi(t){return typeof t=="object"&&t!==null&&typeof t[Ye]=="number"&&typeof t[fe]=="number"&&typeof t[Qe]=="string"}function Ji(t){return typeof t=="object"&&t!==null&&t[kt]===!0&&typeof t.x=="number"&&typeof t.y=="number"&&typeof t.z=="number"}function He(t){let e=t.nextTableId;if(e>4294967295)throw new RangeError("too many tables in one value");return t.nextTableId+=1,e}function k(t,e){if(!Number.isInteger(t)||t<0||t>4294967295)throw new RangeError(`${e} must be an integer between 0 and 4294967295`);return t}function F(t){if(typeof t!="object"||t===null)throw new TypeError("options must be an object");let{signal:e}=t;if(e===void 0)return[null,()=>{}];if(typeof e!="object"||e===null||typeof e.addEventListener!="function"||typeof e.removeEventListener!="function"||typeof e.aborted!="boolean")throw new TypeError("signal must be an AbortSignal");if(e.aborted)throw e.reason;let o,n=new Promise(a=>{o=()=>a(e.reason),e.addEventListener("abort",o,{once:!0})});return e.aborted&&o(),[n,()=>{try{e.removeEventListener("abort",o)}catch{}}]}var Xs=Function.prototype[Symbol.hasInstance];var A="script.lua",Xi=new Set(["and","break","do","else","elseif","end","false","for","function","if","in","local","nil","not","or","repeat","return","then","true","until","while"]),Yi=["...","..=","//=","==","~=","<=",">=","+=","-=","*=","/=","%=","^=","..","//","->","::","!=","&&","||","++","+","-","*","/","%","^","#","=","<",">","(",")","{","}","[","]",";",":",",",".","?","|","&","@","!","~"],Ze=t=>t>="a"&&t<="z"||t>="A"&&t<="Z"||t==="_",V=t=>t>="0"&&t<="9";function ke(t){t=String(t??"");let e=[],o=t.length,n=0,a=1,r=0,s=[],i=(m,p,g,v,w,C)=>{let b={t:m,v:t.slice(p,g),i:p,f:g,l:v,c:w,lf:a};return C&&Object.assign(b,C),e.push(b),b},l=(m,p)=>{for(let g=m;g<p;g++)t.charCodeAt(g)===10&&(a++,r=g+1)},u=m=>{let p=m+1,g=0;for(;t[p]==="=";)g++,p++;if(t[p]!=="[")return-1;let v="]"+"=".repeat(g)+"]",w=t.indexOf(v,p+1);return w<0?o:w+v.length},f=m=>{let p=m;for(;p<o;){let g=t[p];if(g==="\\"){p+=2;continue}if(g==="`")return[p+1,!1];if(g==="{")return[p+1,!0];if(g===`
`)return[p,!1];p++}return[o,!1]};for(;n<o;){let m=t[n],p=a,g=n-r;if(m===`
`){a++,r=n+1,n++;continue}if(m===" "||m==="	"||m==="\r"||m==="\f"||m==="\v"){n++;continue}if(m==="-"&&t[n+1]==="-"){let b;t[n+2]==="["&&u(n+2)>=0?b=u(n+2):(b=t.indexOf(`
`,n),b<0&&(b=o));let y=n;l(n,b),i("com",y,b,p,g,{bloco:t[n+2]==="["&&b!==t.indexOf(`
`,n)}),n=b;continue}if(Ze(m)){let b=n+1;for(;b<o&&(Ze(t[b])||V(t[b]));)b++;let y=t.slice(n,b);i(Xi.has(y)?"palavra":"nome",n,b,p,g),n=b;continue}if(V(m)||m==="."&&V(t[n+1]||"")){let b=n;if(m==="0"&&(t[n+1]==="x"||t[n+1]==="X"||t[n+1]==="b"||t[n+1]==="B"))for(b=n+2;b<o&&/[0-9a-fA-F_]/.test(t[b]);)b++;else{for(;b<o&&(V(t[b])||t[b]==="_");)b++;if(t[b]==="."&&t[b+1]!==".")for(b++;b<o&&(V(t[b])||t[b]==="_");)b++;if(t[b]==="e"||t[b]==="E"){let y=b+1;if((t[y]==="+"||t[y]==="-")&&y++,V(t[y]||""))for(b=y;b<o&&(V(t[b])||t[b]==="_");)b++}}for(;b<o&&(Ze(t[b])||V(t[b]));)b++;i("num",n,b,p,g),n=b;continue}if(m==='"'||m==="'"){let b=n+1;for(;b<o&&t[b]!==m&&t[b]!==`
`;){if(t[b]==="\\"){if(t[b+1]==="z"){for(b+=2;b<o&&/\s/.test(t[b]);)t[b]===`
`&&(a++,r=b+1),b++;continue}t[b+1]===`
`&&(a++,r=b+2),b+=2;continue}b++}let y=t[b]===m;i("str",n,y?b+1:b,p,g,{aspas:m,aberto:!y}),n=y?b+1:b;continue}if(m==="["&&u(n)>=0){let b=u(n);l(n,b),i("str",n,b,p,g,{aspas:"[["}),n=b;continue}if(m==="`"){let[b,y]=f(n+1);y?(i("istr",n,b,p,g,{parte:"ini"}),s.push(0)):i("str",n,b,p,g,{aspas:"`",aberto:t[b-1]!=="`"||b===n+1}),n=b;continue}if(s.length&&(m==="{"||m==="}")){let b=s.length-1;if(m==="{"){s[b]++,i("op",n,n+1,p,g),n++;continue}if(s[b]>0){s[b]--,i("op",n,n+1,p,g),n++;continue}let[y,x]=f(n+1);x?i("istr",n,y,p,g,{parte:"meio"}):(i("istr",n,y,p,g,{parte:"fim"}),s.pop()),n=y;continue}let v=null;for(let b of Yi)if(t.startsWith(b,n)){v=b;break}if(v){i("op",n,n+v.length,p,g),n+=v.length;continue}let C=t.codePointAt(n)>65535?2:1;i("erro",n,n+C,p,g),n+=C}return e}var Ke=t=>t.filter(e=>e.t!=="com");function Qi(t,e){let o=t[e];if(o.t!=="nome"||o.v!=="continue")return!1;let n=t[e-1],a=t[e+1];return!(n&&n.t==="op"&&(n.v==="."||n.v===":")||a&&a.t==="op"&&["=","(",".",":","[",",","+=","-="].includes(a.v))}var Zi=new Set(["=","(","[","{",",","+","-","*","/","//","%","^","..","==","~=","<","<=",">",">=","+=","-=","*=","/=","//=","%=","^=","..=","#","and","or","not","return","in","until","while","if","elseif","::","->"]);function Re(t){return!t||t.t==="nome"||t.t==="num"||t.t==="str"?!0:t.t==="istr"?t.parte==="fim":t.t==="palavra"?["end","true","false","nil","break"].includes(t.v):t.t==="op"?[")","]","}","...",";"].includes(t.v):!1}function et(t){let e=[],o=[],n=[],a=[],r=new Set,s=[],i=new Set,l=new Set,u=null,f=!1,m=p=>{let g=t[p-1];if(!g)return!1;if(Zi.has(g.v)&&(g.t==="op"||g.t==="palavra"))return!0;if(g.t==="palavra"&&g.v==="then"){let v=e[e.length-1];return!!(v&&v.k==="ifexpr")}return g.t==="palavra"&&g.v==="else"?f:!1};for(let p=0;p<t.length;p++){let g=t[p],v=e[e.length-1],w=g.v,C=e.length===0,b=!1;if(C){let y=t[p-1],x=!1;g.t==="palavra"&&["local","return","for","while","repeat"].includes(w)?x=!0:g.t==="palavra"&&(w==="function"||w==="if")?x=!m(p)&&Re(y):g.t==="nome"&&(!y||y.lf<g.l)&&Re(y)&&(x=!0),x&&n.push(p),g.t==="palavra"&&w==="local"&&a.push({k:p,nomes:tt(t,p)})}if(g.t==="palavra")switch(w){case"function":{let y=m(p);y&&l.add(p);let x=p+1,Fe=[];for(;x<t.length&&(t[x].t==="nome"||t[x].t==="op"&&(t[x].v==="."||t[x].v===":"));)t[x].t==="nome"&&r.add(x),Fe.push(t[x].v),x++;if(t[x]&&t[x].t==="op"&&t[x].v==="<"){let O=0;for(;x<t.length;x++)if(t[x].v==="<")O++;else if(t[x].v===">"&&(O--,O===0)){x++;break}}let M={k:"function",tok:g,nome:Fe.join(""),expr:y,inicioCorpo:null};if(t[x]&&t[x].v==="("){let O=0,E=x;for(;E<t.length;E++)if(t[E].t==="op"){if(t[E].v==="(")O++;else if(t[E].v===")"&&(O--,O===0))break}let it=t[E];it&&!(t[E+1]&&t[E+1].t==="op"&&t[E+1].v===":")&&o.push({pos:it.f,linha:g.l}),M.inicioCorpo=E+1,M.parametros=[];let Le=0;for(let X=x+1;X<E;X++){let Y=t[X];Y.t==="op"&&["(","{","[","<"].includes(Y.v)?Le++:Y.t==="op"&&[")","}","]",">"].includes(Y.v)?Le--:Y.t==="nome"&&Le===0&&(X===x+1||t[X-1].t==="op"&&t[X-1].v===",")&&M.parametros.push(Y.v)}}if(!M.nome&&t[p-1]&&t[p-1].v==="local"&&t[p+1]&&t[p+1].t==="nome"&&(M.nome=t[p+1].v),!M.nome&&y){let O=t[p-1],E=t[p-2];O&&O.v==="="&&E&&E.t==="nome"&&(M.nome=E.v)}e.push(M),s.push(M);break}case"do":e.push({k:"do"}),o.push({pos:g.f,linha:u?u.l:g.l}),u=null;break;case"while":case"for":u=g;break;case"repeat":e.push({k:"repeat"}),o.push({pos:g.f,linha:g.l});break;case"until":v&&v.k==="repeat"&&e.pop();break;case"if":m(p)?(i.add(p),e.push({k:"ifexpr"})):e.push({k:"if"});break;case"else":v&&v.k==="ifexpr"&&(e.pop(),b=!0);break;case"end":{for(;e.length;){let y=e.pop();if(y.k==="function"||y.k==="do"||y.k==="if"){y.k==="function"&&(y.fimCorpo=p);break}}break}default:break}else if(g.t==="op"){if(w==="("||w==="["||w==="{")e.push({k:w});else if(w===")"||w==="]"||w==="}")for(;e.length;){let y=e.pop();if(y.k==="("||y.k==="["||y.k==="{")break}}f=b}return{checagens:o,comandosTopo:n,locaisTopo:a,definicoes:r,funcoes:s,ifExpr:i,funcExpr:l}}function tt(t,e){let o=[],n=e+1;if(t[n]&&t[n].t==="palavra"&&t[n].v==="function")return t[n+1]&&t[n+1].t==="nome"&&o.push(t[n+1].v),o;for(;;){let a=t[n];if(!a||a.t!=="nome")break;if(o.push(a.v),n++,t[n]&&t[n].t==="op"&&t[n].v===":"){let r=0;for(n++;n<t.length;n++){let s=t[n];if(s.t==="op"&&["(","{","[","<"].includes(s.v))r++;else if(s.t==="op"&&[")","}","]",">"].includes(s.v))r--;else{if(r<=0&&s.t==="op"&&(s.v===","||s.v==="="))break;if(r<=0&&s.t==="palavra"&&s.v!=="nil")break}if(r<0)break}}if(t[n]&&t[n].t==="op"&&t[n].v===","){n++;continue}break}return o}var Ki=t=>` __cobra_k-=1 if __cobra_k<0 then __cobra_k=__cobra_chk(${t}) end `,Ft=t=>`__cobra_exp("${t}",function()return ${t} end,function(__cobra_v)${t}=__cobra_v end);`;function Lt(t,e={}){t=String(t??"").replace(/\r\n?/g,`
`);let o=ke(t),n=Ke(o),a=et(n),r=[];for(let u of a.checagens)r.push({pos:u.pos,texto:Ki(u.linha),ordem:1});let s=[];if(e.exportar!==!1){let u=[],f=0,m=!1;for(let p of a.comandosTopo){for(;f<a.locaisTopo.length&&a.locaisTopo[f].k<p;)u.push(...a.locaisTopo[f].nomes),f++;u.length&&(r.push({pos:n[p].i,texto:u.map(Ft).join(""),ordem:0}),u=[]),m=n[p].t==="palavra"&&n[p].v==="return"}for(;f<a.locaisTopo.length;)u.push(...a.locaisTopo[f].nomes),f++;u.length&&!m&&r.push({pos:t.length,texto:`
`+u.map(Ft).join(""),ordem:2});for(let p of a.locaisTopo)for(let g of p.nomes)s.includes(g)||s.push(g)}r.sort((u,f)=>u.pos-f.pos||u.ordem-f.ordem);let i="local __cobra_k,__cobra_chk=4000,__cobra_chk;",l=0;for(let u of r)i+=t.slice(l,u.pos)+u.texto,l=u.pos;return i+=t.slice(l),{fonte:i,nomesTopo:s}}var es=new Set(["+","-","*","/","//","%","^","..","==","~=","<","<=",">",">="]);function jt(t){t=String(t??"").replace(/\r\n?/g,`
`);let e=ke(t),o=Ke(e),n=et(o),a={},r=[],s={},i=0,l=(u,f)=>{u[f]=(u[f]||0)+1};for(let u=0;u<o.length;u++){let f=o[u],m=o[u-1];if(f.t==="palavra"){if(l(a,f.v),(f.v==="and"||f.v==="or"||f.v==="not")&&l(s,f.v),f.v==="for"){let p=o[u+2]&&o[u+2].t==="op"&&o[u+2].v==="="?"for numerico":"for in";l(a,p)}f.v==="if"&&n.ifExpr.has(u)&&l(a,"if expressao"),f.v==="function"&&(n.funcExpr.has(u)&&l(a,"function anonima"),m&&m.v==="local"&&l(a,"local function"));continue}if(Qi(o,u)){l(a,"continue");continue}if(f.t==="istr"&&f.parte==="ini"){i++;continue}if(f.t==="op"){let p=f.v;es.has(p)?p==="-"&&!Re(m)?l(s,"-unario"):l(s,p):p.length>=2&&p.endsWith("=")&&!["==","~=","<=",">="].includes(p)?(l(s,p),l(s,p.slice(0,-1))):(p==="#"||p==="=")&&l(s,p);continue}if(f.t==="nome"&&!n.definicoes.has(u)){let p=o[u+1];if(!(p&&(p.t==="op"&&(p.v==="("||p.v==="{")||p.t==="str"||p.t==="istr"&&p.parte==="ini")))continue;let v=[f.v],w=u-1;for(;w>=1&&o[w].t==="op"&&(o[w].v==="."||o[w].v===":")&&o[w-1].t==="nome";)v.unshift(o[w-1].v,o[w].v),w-=2;let C=v.join("");r.push({nome:f.v,caminho:C,linha:f.l,metodo:m&&m.t==="op"&&m.v===":"})}}return{palavras:a,chamadas:r,operadores:s,interpolacoes:i,funcoes:n.funcoes.map(u=>({nome:u.nome,linha:u.tok.l,expr:u.expr,parametros:u.parametros||[],recursiva:u.nome?ts(o,u):!1})),globais:as(o,n),comentarios:e.filter(u=>u.t==="com").map(u=>({texto:u.v.replace(/^--(\[(=*)\[)?/,"").replace(/\](=*)\]$/,"").trim(),linha:u.l})),limpo:is(t,e)}}function ts(t,e){if(e.inicioCorpo==null)return!1;let o=e.fimCorpo!=null?e.fimCorpo:t.length,n=e.nome.split(/[.:]/).pop();for(let a=e.inicioCorpo;a<o;a++){let r=t[a];if(r.t==="nome"&&r.v===n){let s=t[a+1];if(s&&s.t==="op"&&s.v==="(")return!0}}return!1}var os=new Set(["game","workspace","script","print","warn","error","Instance","Vector3","Vector2","Color3","BrickColor","CFrame","UDim","UDim2","Enum","task","wait","spawn","delay","tick","time","typeof","math","string","table","os","coroutine","shared","_G"]),ns=new Set(["do","then","else","repeat"]);function rs(t,e){let o=t[e-1];return!o||o.t==="palavra"&&ns.has(o.v)||o.t==="op"&&o.v===";"?!0:Re(o)}function as(t,e){let o=new Set,n=[],a=r=>{!o.has(r)&&!os.has(r)&&!n.includes(r)&&n.push(r)};for(let r=0;r<t.length;r++){let s=t[r];if(s.t==="palavra"&&s.v==="local")for(let i of tt(t,r))o.add(i);else if(s.t==="palavra"&&s.v==="for")for(let i=r+1;i<t.length&&!(t[i].t==="palavra"&&(t[i].v==="in"||t[i].v==="do"))&&t[i].v!=="=";i++)t[i].t==="nome"&&o.add(t[i].v)}for(let r of e.funcoes)for(let s of r.parametros||[])o.add(s);for(let r=0;r<t.length;r++){let s=t[r];if(s.t==="palavra"&&s.v==="function"&&!e.funcExpr.has(r)&&!(t[r-1]&&t[r-1].v==="local")){let f=t[r+1],m=t[r+2];f&&f.t==="nome"&&!(m&&m.t==="op"&&(m.v==="."||m.v===":"))&&a(f.v);continue}if(s.t!=="nome"||!rs(t,r))continue;let i=[s.v],l=r+1;for(;t[l]&&t[l].t==="op"&&t[l].v===","&&t[l+1]&&t[l+1].t==="nome";)i.push(t[l+1].v),l+=2;let u=t[l];if(!(!u||u.t!=="op")&&(u.v==="="||i.length===1&&["+=","-=","*=","/=","//=","%=","^=","..="].includes(u.v)))for(let f of i)a(f)}return n}function is(t,e){e=e||ke(t);let o="",n=0,a=r=>r.replace(/[^\n]/g," ");for(let r of e)if(!(r.t!=="com"&&r.t!=="str"&&r.t!=="istr")){if(o+=t.slice(n,r.i),r.t==="com")o+=a(r.v);else if(r.t==="str"){let s=r.aspas==="[["?r.v.match(/^\[=*\[/)[0]:r.v[0],i=r.aspas==="[["?s.replace(/\[/g,"]"):r.aberto?"":r.v[r.v.length-1];o+=s+a(r.v.slice(s.length,r.v.length-i.length))+i}else{let s=r.v[0],i=r.v[r.v.length-1];o+=s+a(r.v.slice(1,r.v.length-1))+(r.v.length>1?i:"")}n=r.f}return o+t.slice(n)}function Nt(t){let e=Ke(ke(t)),o=et(e),n=new Set;for(let a=0;a<e.length;a++){let r=e[a];if(r.t==="palavra"&&r.v==="local")for(let s of tt(e,a))n.add(s);if(r.t==="palavra"&&r.v==="for")for(let s=a+1;s<e.length&&!(e[s].t==="palavra"&&(e[s].v==="in"||e[s].v==="do"))&&e[s].v!=="=";s++)e[s].t==="nome"&&n.add(e[s].v);r.t==="palavra"&&r.v==="function"&&e[a+1]&&e[a+1].t==="nome"&&n.add(e[a+1].v)}for(let a of o.funcoes)for(let r of a.parametros||[])n.add(r);return n}var J=t=>t.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"),ss=new RegExp(`(?:^|\\n|\\s)${J(A)}:(\\d+)`);function Pe(t,e){let o=String(t||"").split(`
`);return e>=1&&e<=o.length?o[e-1]:null}function zt(t,e){let o=Pe(t,e);return o==null?`${A}:${e}`:`${A}:${e}
${o.replace(/\t/g,"    ")}`}var ot={function:"a fun\xE7\xE3o (function)",then:"o if (then)",else:"o else",do:"o bloco do (do for/while)",repeat:"o repeat","(":"o par\xEAntese (","{":"a chave { (tabela)","[":"o colchete ["};function De(t){return t==="<eof>"?"o fim do c\xF3digo":t}function Ut(t,e){let o=String(e||"").replace(/^syntax error:\s*/,""),n=null,a=new RegExp(`^${J(A)}:(\\d+):\\s*`).exec(o);a&&(n=Number(a[1]),o=o.slice(a[0].length));let r=cs(t,o,n),s=r.linha||n;return{tipo:"erro de sintaxe",texto:`${s?zt(t,s)+`

`:""}${A}:${n??"?"}: ${o}`,linha:s,dica:r.dica}}function cs(t,e,o){let n,a=Pe(t,o)||"";if(n=/^Expected '(end|until)' \(to close '([^']+)' at line (\d+)\), got (.+)$/.exec(e)){let[,r,s,i,l]=n,u=ot[s]||`o ${s}`;if(r==="until")return{linha:l==="<eof>"?Number(i):null,dica:`O repeat da linha ${i} n\xE3o tem o seu until. Um repeat termina com until condi\xE7\xE3o: repeat ... until vida <= 0`};if(s==="else"&&/\belse\s+if\b/.test(t))return{linha:l==="<eof>"?Number(i):null,dica:'Em Lua, "sen\xE3o se" se escreve junto: elseif (sem espa\xE7o). Com else if separado, o Luau entende um if novo dentro do else, que precisaria de outro end.'};let f=`Faltou um end para fechar ${u} que come\xE7a na linha ${i}. Todo function, if, for, while e do termina com end.`;return l!=="<eof>"&&(f+=` O Luau chegou em ${De(l)} e o bloco ainda estava aberto.`),s==="do"&&/^'(print|local|[A-Za-z_])/.test(l)&&/\bbreak\b|\breturn\b/.test(t)&&(f="Depois de break (ou return) o bloco precisa terminar: eles t\xEAm que ser o \xFAltimo comando antes do end. Mova o break para o fim do bloco (ou ponha o c\xF3digo antes dele)."),{linha:l==="<eof>"?Number(i):null,dica:f}}if(n=/^Expected '([)\]}])' \(to close '([([{])' at (line|column) (\d+)\), got (.+)$/.exec(e)){let[,r,s,i,l,u]=n,f=i==="line"?`na linha ${l}`:`na coluna ${l}`,m=i==="line"?Number(l):null;return u==="'x'"&&/\d\s*x\s*[\d(]/.test(a)?{dica:"Em programa\xE7\xE3o, a multiplica\xE7\xE3o \xE9 o asterisco *, n\xE3o a letra x: 3 * 4."}:r===")"&&u!=="<eof>"&&/^['"`]|^[A-Za-z_]/.test(u)?{dica:'Faltou alguma coisa entre dois valores dentro dos par\xEAnteses: uma v\xEDrgula (para separar argumentos: print(a, b)) ou .. para juntar textos ("Vida: " .. vida).'}:u==="<eof>"?{linha:m,dica:`O c\xF3digo terminou sem fechar ${ot[s]} aberto ${f}. Falta um ${r}.`}:{linha:m&&u==="<eof>"?m:null,dica:`Faltou fechar ${ot[s]} aberto ${f} com ${r} antes de ${De(u)}.`}}if(n=/^Expected identifier when parsing expression, got (.+)$/.exec(e)){let r=n[1];return/Unicode character U\+201[cdCD89]|did you mean '"'|did you mean '''/.test(r)?{dica:`Aspas curvas (\u201C \u201D \u2018 \u2019) n\xE3o funcionam em c\xF3digo \u2014 elas aparecem quando o texto vem de um editor de documentos. Troque por aspas retas: " ou '.`}:/Unicode character/.test(r)?{dica:"Acentos e \xE7 s\xF3 podem aparecer dentro de textos (entre aspas) e de coment\xE1rios. Nomes de vari\xE1veis n\xE3o podem ter acento: escreva pocao em vez de po\xE7\xE3o."}:r==="'='"?{dica:"Depois de = precisa vir um valor (local vida = 100). Para comparar, use == dentro de um if."}:r==="<eof>"?{linha:ls(t),dica:"O c\xF3digo terminou antes da hora: faltou um valor depois de um operador (como +, .. ou =)."}:r==="')'"?{dica:"Tem um ) sobrando, ou faltou um valor antes dele (por exemplo, depois de um operador ou de uma v\xEDrgula)."}:r==="','"?{dica:"Tem uma v\xEDrgula sobrando (ou faltou o valor entre duas v\xEDrgulas)."}:r==="';'"?{dica:"Tem um ; sobrando aqui. Em Lua o ponto e v\xEDrgula \xE9 opcional: pode tirar."}:r==="'elseif'"?{dica:"O else tem que ser o \xFAltimo caso do if: os elseif v\xEAm antes dele."}:r==="'then'"?{dica:"Faltou a condi\xE7\xE3o antes do then: if vida > 0 then ... end"}:r==="'['"?{dica:"Em Lua, listas s\xE3o escritas com chaves: local lista = {1, 2, 3} (colchetes servem para pegar um item: lista[1])."}:r==="'!'"?{dica:'Em Lua, "diferente" se escreve ~= (e n\xE3o !=), e "n\xE3o" se escreve not.'}:/^'[-+*/.]+='$/.test(r)&&/^\s*local\s+\w+\s*\S+=/.test(a)?{dica:`${r.slice(1,-1)} s\xF3 funciona numa vari\xE1vel que j\xE1 existe. Crie com local e um = (local moedas = 10) e, nas linhas de baixo, atualize (moedas ${r.slice(1,-1)} 5).`}:/=[-+*/]\s/.test(a.replace(/[-+*/<>~=]=/g,"  "))&&/^'[-+*/]'$/.test(r)?{dica:`O operador se escreve com o sinal antes do igual: ${r.slice(1,-1)}= (por exemplo moedas ${r.slice(1,-1)}= 10).`}:r==="'+='"||r==="'-='"?{dica:`${r.slice(1,-1)} \xE9 um comando sozinho: x += 1 (soma 1 em x). Ele n\xE3o pode aparecer no meio de uma conta.`}:r==="'+'"&&/\+\+/.test(a)?{dica:"Em Lua n\xE3o existe ++. Para somar 1, escreva x += 1 (ou x = x + 1)."}:r==="'...'"?{dica:'Para juntar textos use dois pontos: "a" .. "b" (tr\xEAs pontos ... \xE9 outra coisa).'}:r==="'return'"?{dica:"Depois de return vem o valor que a fun\xE7\xE3o devolve (ou nada)."}:r==="'<'"&&/^\s*local\s+\w+\s*</.test(a)?{dica:"O Luau (a Lua do Roblox) n\xE3o tem <const> nem <close>. Escreva s\xF3 local nome = valor."}:{dica:`O Luau esperava um valor aqui (um n\xFAmero, um texto, uma vari\xE1vel...), mas encontrou ${De(r)}. Confira se n\xE3o falta um valor depois de um operador ou se n\xE3o sobrou um s\xEDmbolo.`}}if(n=/^Unexpected '([^']+)'; did you mean '([^']+)'\?$/.exec(e))return n[1]==="!="?{dica:'Em Lua, "diferente" se escreve ~= (e n\xE3o !=).'}:n[1]==="&&"||n[1]==="||"?{dica:`Em Lua os operadores l\xF3gicos s\xE3o palavras: and, or e not (e n\xE3o ${n[1]}).`}:{dica:`Em Lua escreva ${n[2]} em vez de ${n[1]}.`};if(/^Malformed string/.test(e))return{dica:`Um texto come\xE7ou com aspas e n\xE3o terminou na mesma linha. Feche com o mesmo tipo de aspas que abriu: "..." ou '...'. Para um texto de v\xE1rias linhas, use [[ ... ]].`};if(/^Malformed interpolated string/.test(e))return{dica:"Num texto com interpola\xE7\xE3o (entre crases), cada { precisa do seu }: `Vida: {vida}`. Para mostrar uma chave de verdade, escreva \\{."};if(/^Malformed number/.test(e))return{dica:"Esse n\xFAmero est\xE1 mal escrito. Decimais usam ponto (3.5) e n\xFAmeros n\xE3o podem ter letras grudadas. (Para juntar textos e n\xFAmeros use .. com espa\xE7os: 1 .. 2.)"};if(n=/^Expected 'do' when parsing (for|while) loop, got (.+)$/.exec(e))return n[1]==="for"?{dica:"O for termina a primeira linha com do: for i = 1, 10 do ... end"}:{dica:"Depois da condi\xE7\xE3o do while vem do: while vida > 0 do ... end"};if(n=/^Expected ',' when parsing (index range|for loop), got 'to'$/.exec(e))return{dica:"Em Lua o for num\xE9rico usa v\xEDrgula, n\xE3o to: for i = 1, 10 do ... end"};if(n=/^Expected 'then' when parsing (if statement|elseif statement|if-then-else expression), got (.+)$/.exec(e))return n[2]==="'='"?{dica:"Para comparar use == (dois sinais de igual). Um = sozinho serve para guardar um valor numa vari\xE1vel."}:{dica:"Depois da condi\xE7\xE3o do if (ou do elseif) vem then: if vida > 0 then ... end"};if(/^Expected 'else' when parsing if-then-else expression/.test(e))return{dica:'Um if usado como valor precisa do else: local texto = if vivo then "vivo" else "morto"'};if(/^Incomplete statement: expected assignment or a function call/.test(e)){let r=/^\s*(Local|If|For|While|Function|Return|End|Then|Else|Elseif|Repeat|Until|Do|Print)\b/.exec(a);return r?{dica:`Palavras do Lua s\xE3o escritas em min\xFAsculas: ${r[1].toLowerCase()} (e n\xE3o ${r[1]}).`}:/\+\+|--\s*$/.test(a)&&/\w\+\+/.test(a)?{dica:"Em Lua n\xE3o existe ++. Para somar 1, escreva x += 1 (ou x = x + 1)."}:/^\s*goto\b/.test(a)?{dica:"O Luau (a Lua do Roblox) n\xE3o tem goto. Use la\xE7os com break e continue."}:/==/.test(a)&&!/\bif\b|\bwhile\b|\buntil\b|\breturn\b|=\s*[^=]/.test(a.replace(/==/g,""))?{dica:"== compara dois valores, mas uma compara\xE7\xE3o sozinha n\xE3o \xE9 um comando. Para guardar um valor use um =; para decidir algo, use if ... then."}:/\.\s*\d/.test(a)?{dica:"Para usar um n\xFAmero como chave escreva entre colchetes: t[1] = 2 (t.1 n\xE3o funciona)."}:/^\s*export\b/.test(a)?{dica:"export s\xF3 serve para tipos (export type ...). Para um valor, use local."}:/^\s*\w+(\s*\.\s*\w+)*\s+[\w"'(]/.test(a)?{dica:"Esta linha n\xE3o \xE9 um comando completo. Para chamar uma fun\xE7\xE3o, use par\xEAnteses: print(x). Para guardar um valor, use =: vida = 100."}:{dica:"Esta linha n\xE3o faz nada sozinha. Em Lua cada comando \xE9 uma atribui\xE7\xE3o (vida = 100), uma chamada de fun\xE7\xE3o com par\xEAnteses (print(vida)) ou um bloco (if, for, while, local...)."}}if(n=/^Expected <eof>, got (.+)$/.exec(e)){let r=n[1];return r==="'end'"?{dica:"Este end est\xE1 sobrando: n\xE3o h\xE1 nenhum bloco aberto (function, if, for, while, do) para ele fechar. Confira se n\xE3o tem um end a mais."}:r==="'elseif'"||r==="'else'"?{dica:`Este ${r.slice(1,-1)} n\xE3o tem um if aberto antes dele. Confira se n\xE3o sobrou um end antes dele.`}:r==="'until'"?{dica:"Este until n\xE3o tem um repeat antes dele."}:/\breturn\b/.test(t)?{dica:"Depois de um return o bloco precisa terminar: o return tem que ser o \xFAltimo comando (do script, da fun\xE7\xE3o ou do bloco)."}:{dica:`O Luau n\xE3o esperava ${De(r)} aqui. Confira se n\xE3o sobrou um end ou um par\xEAntese.`}}return/^Expected ',' after table constructor element/.test(e)?{dica:'Separe os itens da tabela com v\xEDrgulas: {vida = 100, nivel = 1} ou {"espada", "escudo"}.'}:(n=/^Expected identifier when parsing variable name, got (.+)$/.exec(e))?n[1]==="'('"?{dica:"local function precisa de um nome: local function atacar() ... end"}:/^'\d/.test(n[1])?{dica:"Nomes de vari\xE1veis n\xE3o podem come\xE7ar com n\xFAmero: use pontos1 em vez de 1pontos."}:n[1]==="'='"?{dica:"Faltou o nome da vari\xE1vel antes do = (ou sobrou uma v\xEDrgula)."}:/Unicode character/.test(n[1])?{dica:"Nomes de vari\xE1veis n\xE3o podem ter acento nem \xE7: escreva pocao em vez de po\xE7\xE3o."}:{dica:"Nome de vari\xE1vel inv\xE1lido. Nomes come\xE7am com letra ou _, e s\xF3 t\xEAm letras sem acento, n\xFAmeros e _ (sem espa\xE7os)."}:(n=/^Expected '\(' when parsing function, got (.+)$/.exec(e))?n[1]==="'.'"?{dica:"Depois de : vem s\xF3 o nome do m\xE9todo: function Classe:metodo(...) ... end"}:{dica:"Depois de function (e do nome) v\xEAm os par\xEAnteses com os par\xE2metros: local function atacar(alvo) ... end"}:/^Expected '\(', '\{' or <string> when parsing function call/.test(e)?{dica:"Depois de obj:metodo vem uma chamada com par\xEAnteses: obj:metodo(...). Para guardar um valor num campo use ponto: obj.campo = valor."}:/^Ambiguous syntax/.test(e)?{dica:"Uma linha que come\xE7a com ( logo depois de outra parece continua\xE7\xE3o da linha de cima. Junte as duas linhas ou ponha um ; no fim da linha de cima."}:/^Expected type, got/.test(e)?{dica:"Depois de : numa declara\xE7\xE3o vem um tipo (local vida: number = 100). Se n\xE3o quer usar tipos, apague os dois-pontos."}:/^Assigned expression must be a variable or a field/.test(e)?{dica:"Do lado esquerdo do = precisa ficar uma vari\xE1vel ou um campo (vida = 100, jogador.vida = 100)."}:/^Cannot (use|have) '\.\.\.' outside a vararg function/.test(e)?{dica:"... s\xF3 funciona dentro de uma fun\xE7\xE3o declarada com ... nos par\xE2metros."}:/^Unknown escape sequence|^Invalid escape/i.test(e)?{dica:"Dentro de textos, a barra \\ come\xE7a um c\xF3digo especial (\\n \xE9 quebra de linha). Para uma barra de verdade escreva \\\\."}:/^Expected 'in' when parsing for loop/.test(e)?{dica:"O for gen\xE9rico \xE9 for chave, valor in pairs(tabela) do ... end (com in)."}:/^Expected '=' when parsing for loop|^Expected '=' or 'in'/.test(e)?{dica:"O for num\xE9rico \xE9 for i = 1, 10 do ... end; o de tabelas \xE9 for i, v in ipairs(lista) do ... end."}:/^Expected 'end'/.test(e)?{dica:"Faltou um end para fechar um bloco (function, if, for, while ou do)."}:{dica:"O Luau n\xE3o entendeu o c\xF3digo neste ponto. Confira se cada function/if/for/while tem o seu end, se cada ( tem o seu ) e se os textos est\xE3o entre aspas \u2014 \xE0s vezes o erro de verdade est\xE1 um pouco antes."}}function ls(t){let e=String(t||"").split(`
`);for(let o=e.length-1;o>=0;o--)if(e[o].trim())return o+1;return null}var z={nil:"nil (nada)",number:"um n\xFAmero",string:"um texto (string)",boolean:"um boolean (true/false)",table:"uma tabela",function:"uma fun\xE7\xE3o",vector:"um Vector3",userdata:"um objeto",thread:"uma thread"};function us(t){let e=new RegExp(`^${J(A)}:(\\d+):`).exec(t.mensagem||"");if(e)return Number(e[1]);let o=ss.exec(t.pilha||"");return o?Number(o[1]):null}function ds(t){let e=[];for(let o of String(t||"").split(`
`)){let n=new RegExp(`^${J(A)}:(\\d+)(?: function (\\S+))?`).exec(o.trim());n&&e.push({linha:Number(n[1]),funcao:n[2]||""})}return e}function fs(t){if(t.length<=1)return"";let e=[],o=0;for(;o<t.length;){let a=t[o],r=o+1;for(;r<t.length&&t[r].linha===a.linha&&t[r].funcao===a.funcao;)r++;let s=`  ${A}:${a.linha}${a.funcao?` (na fun\xE7\xE3o ${a.funcao})`:""}`;if(r-o>3)e.push(s,`  ... (a mesma chamada se repete mais ${r-o-1} vezes)`);else for(let i=o;i<r;i++)e.push(s);o=r}return`
Pilha de chamadas:
`+(e.length>10?[...e.slice(0,9),`  ... (mais ${e.length-9} linhas)`]:e).join(`
`)}function ms(t,e){if(!t||!e)return null;let n=new RegExp(`([A-Za-z_][\\w]*(?:\\s*[.:]\\s*[A-Za-z_]\\w*|\\[[^\\]]*\\])*)\\s*[.:]\\s*${J(e)}\\b`).exec(t.replace(/--.*$/,""));return n?n[1].replace(/\s+/g,""):null}function ps(t){if(!t)return null;let e=t.replace(/--.*$/,"").replace(/"([^"\\]|\\.)*"|'([^'\\]|\\.)*'/g,'""'),o=/([A-Za-z_][\w]*(?:\s*[.:]\s*[A-Za-z_]\w*)*)\s*\(/g,n=[],a;for(;a=o.exec(e);){let r=a[1].replace(/\s+/g,"");/^(if|while|until|return|and|or|not|function|local|elseif|in|do|then)$/.test(r)||n.push(r)}return n}var Bt=["print","warn","game","workspace","script","Instance","Vector3","Color3","BrickColor","CFrame","Enum","task","tostring","tonumber","typeof","pairs","ipairs","table","string","math","pcall","error","wait"];function hs(t,e){let o=Array.from({length:t.length+1},(n,a)=>[a]);for(let n=1;n<=e.length;n++)o[0][n]=n;for(let n=1;n<=t.length;n++)for(let a=1;a<=e.length;a++)o[n][a]=Math.min(o[n-1][a]+1,o[n][a-1]+1,o[n-1][a-1]+(t[n-1]===e[a-1]?0:1)),n>1&&a>1&&t[n-1]===e[a-2]&&t[n-2]===e[a-1]&&(o[n][a]=Math.min(o[n][a],o[n-2][a-2]+1));return o[t.length][e.length]}function We(t,e){let o=t.toLowerCase(),n=[...new Set(e)].filter(i=>i&&i!==t);for(let i of n)if(i.toLowerCase()===o)return i;let a=t.length<=3?0:t.length<=7?1:2,r=null,s=1/0;for(let i of n){if(!a||Math.abs(i.length-t.length)>a)continue;let l=hs(i.toLowerCase(),o);l<=a&&l<s&&(r=i,s=l)}return r}var bs=["Workspace","Players","Lighting","ReplicatedStorage","ReplicatedFirst","ServerStorage","ServerScriptService","StarterGui","StarterPack","StarterPlayer","Teams","SoundService","RunService","TweenService","Debris","DataStoreService","CollectionService","HttpService","UserInputService","ContextActionService","MarketplaceService","PathfindingService"],gs={Vector3:"Vector3.new(0, 5, 0)",Color3:"Color3.fromRGB(255, 0, 0)",BrickColor:'BrickColor.new("Bright red")',CFrame:"CFrame.new(0, 5, 0)",bool:"true ou false",boolean:"true ou false",number:"um n\xFAmero, como 10",int:"um n\xFAmero inteiro, como 10",string:"um texto entre aspas",UDim2:"UDim2.new(0, 100, 0, 50)"},Vt={True:"Em Lua os valores l\xF3gicos s\xE3o escritos em min\xFAsculas: true e false.",False:"Em Lua os valores l\xF3gicos s\xE3o escritos em min\xFAsculas: true e false.",None:"Em Lua a aus\xEAncia de valor se chama nil.",null:"Em Lua a aus\xEAncia de valor se chama nil.",len:"Em Lua o tamanho de um texto ou de uma lista \xE9 #: #lista, #texto.",str:"Para transformar em texto use tostring(valor).",int:"Para transformar um texto em n\xFAmero use tonumber(texto).",console:"Em Lua, para mostrar algo use print(...).",self:"self s\xF3 existe dentro de m\xE9todos declarados com dois-pontos: function Classe:metodo() ... end."};function _s(t,e,o,n,a){let r,s=Pe(o,n)||"",i=t;if(r=/^attempt to index nil with '([^']+)'$/.exec(i)){let l=r[1],u=ms(s,l),f=u?`\`${u}\` \xE9 nil (n\xE3o existe), ent\xE3o n\xE3o d\xE1 para usar \`${u}.${l}\`. `:`Voc\xEA tentou usar .${l} (um campo, propriedade ou filho) de algo que \xE9 nil (n\xE3o existe). `;return/FindFirstChild|FindFirstAncestor|FindFirstChildOfClass|FindFirstChildWhichIsA/.test(s)||u&&/FindFirst/.test(o)?f+="FindFirstChild devolve nil quando n\xE3o acha o filho: confira o nome (mai\xFAsculas contam) ou teste antes com if objeto then ... end.":u&&/Parent$/.test(u)?f+="O Parent \xE9 nil quando o objeto n\xE3o est\xE1 em lugar nenhum (ou j\xE1 foi destru\xEDdo).":u&&/^[A-Za-z_]\w*$/.test(u)?f+=`Confira se a vari\xE1vel ${u} recebeu um valor antes desta linha e se o nome est\xE1 escrito igual (mai\xFAsculas contam).`:f+="Confira se o objeto existe (FindFirstChild devolve nil quando n\xE3o acha) e se os nomes est\xE3o escritos certo.",f}if(r=/^attempt to index nil with number$/.exec(i))return"Voc\xEA usou [ ] (pegar um item) numa vari\xE1vel que \xE9 nil. Confira se a lista (tabela) foi criada: local lista = {}.";if(r=/^attempt to index (number|string|boolean|function|thread) with (?:'([^']+)'|number)$/.exec(i)){let l=r[2];return r[1]==="string"&&l?`Textos n\xE3o t\xEAm o campo .${l}. Para m\xE9todos de texto use dois-pontos (texto:upper()) ou a biblioteca string (string.upper(texto)). Se era para ser um objeto do jogo, confira: a vari\xE1vel guarda s\xF3 o nome (um texto)?`:`Voc\xEA usou ${l?"."+l:"[ ]"} em ${z[r[1]]||r[1]}, mas s\xF3 tabelas e objetos do Roblox t\xEAm campos. Confira o que essa vari\xE1vel guarda (print(typeof(x)) ajuda).`}if(r=/^attempt to index vector with '([^']+)'$/.exec(i))return`Um Vector3 n\xE3o muda por partes (${r[1]} \xE9 s\xF3 de leitura). Crie um novo: parte.Position = Vector3.new(x, y, z) \u2014 ou some: parte.Position += Vector3.new(0, 5, 0).`;if(/^attempt to call a nil value$/.test(i)){let l=ps(s)||[],u=o?Nt(o):new Set;for(let f of l){let m=f.split(/[.:]/).pop();if(!f.includes(".")&&!f.includes(":")&&!u.has(f)&&!Bt.includes(f)){if(Vt[f])return Vt[f];let p=We(f,[...u,...Bt]);return`A fun\xE7\xE3o \`${f}\` n\xE3o existe (\xE9 nil).`+(p?` Talvez voc\xEA quis escrever \`${p}\`?`:" Confira o nome (mai\xFAsculas contam) e se a fun\xE7\xE3o foi criada ANTES desta linha (em Lua, a fun\xE7\xE3o precisa existir antes de ser chamada).")}if(m&&f.includes("."))return`\`${f}\` n\xE3o \xE9 uma fun\xE7\xE3o (\xE9 nil). Confira o nome (mai\xFAsculas contam: FindFirstChild, GetService...) e se a fun\xE7\xE3o foi criada antes desta linha.`}return"Voc\xEA chamou com () algo que \xE9 nil: a fun\xE7\xE3o n\xE3o existe com esse nome, ou s\xF3 \xE9 criada depois desta linha. Confira o nome (mai\xFAsculas contam)."}if(r=/^attempt to call missing method '([^']+)' of (\w+)$/.exec(i))return r[2]==="string"?`Textos n\xE3o t\xEAm o m\xE9todo ${r[1]}. Alguns que existem: upper, lower, sub, find, gsub, split, rep, len, format.`:`O m\xE9todo ${r[1]} n\xE3o existe nessa tabela. Confira o nome (mai\xFAsculas contam) e se ele foi criado com function Tabela:${r[1]}(...) ou function Tabela.${r[1]}(...).`;if(r=/^attempt to call a (\w+) value$/.exec(i))return`Voc\xEA colocou () depois de algo que \xE9 ${z[r[1]]||r[1]}, n\xE3o uma fun\xE7\xE3o. Confira se uma vari\xE1vel n\xE3o est\xE1 com o mesmo nome de uma fun\xE7\xE3o.`;if(r=/^attempt to perform arithmetic \((\w+)\) on (\w+)(?: and (\w+))?$/.exec(i)){let l=[r[2],r[3]].filter(Boolean);return l.includes("nil")?"Uma conta (+, -, *, /...) recebeu nil. Uma das vari\xE1veis n\xE3o tem valor: confira se ela foi criada, se o nome est\xE1 igual e se a fun\xE7\xE3o devolveu algo com return.":l.includes("string")?"Uma conta recebeu um texto que n\xE3o \xE9 n\xFAmero. Para somar n\xFAmeros que vieram como texto use tonumber(texto); para juntar textos use .. (dois pontos).":l.includes("table")||l.includes("userdata")?"Uma conta recebeu uma tabela (ou um objeto do jogo) em vez de um n\xFAmero. Pegue o n\xFAmero que est\xE1 dentro dele (por exemplo, jogador.leaderstats.Moedas.Value).":l.includes("boolean")?"Uma conta recebeu true/false em vez de um n\xFAmero.":"Uma conta recebeu um valor que n\xE3o \xE9 n\xFAmero."}if(r=/^attempt to concatenate (\w+) with (\w+)$/.exec(i)){let l=[r[1],r[2]].find(u=>u!=="string"&&u!=="number")||r[1];return l==="nil"?"O .. junta textos, mas um dos lados \xE9 nil (uma vari\xE1vel sem valor). Confira se a vari\xE1vel existe e tem valor.":l==="boolean"?'O .. n\xE3o junta true/false direto. Use tostring(valor): "Vivo: " .. tostring(vivo).':l==="table"||l==="userdata"?"O .. n\xE3o junta tabelas nem objetos. Para um objeto do jogo use .Name (parte.Name); para outros valores use tostring(valor).":`O .. s\xF3 junta textos e n\xFAmeros, e um dos lados \xE9 ${z[l]||l}. Use tostring(valor).`}if(r=/^attempt to compare (\w+) ([<>=]+) (\w+)$/.exec(i))return r[1]===r[3]?`N\xE3o d\xE1 para comparar dois valores do tipo ${r[1]} com ${r[2]}. Compare n\xFAmeros (ou textos).`:`Voc\xEA comparou ${z[r[1]]||r[1]} com ${z[r[3]]||r[3]} usando ${r[2]}. Compare valores do mesmo tipo (tonumber(texto) transforma texto em n\xFAmero).`;if(/^attempt to modify a readonly table$/.test(i))return"Esse valor \xE9 s\xF3 de leitura. Vector3, Color3, CFrame e as bibliotecas (math, string...) n\xE3o mudam: crie um valor novo (parte.Position = Vector3.new(...)) em vez de mudar uma parte dele.";if(r=/^attempt to get length of an? (\w+) value$/.exec(i))return`O # (tamanho) s\xF3 funciona em textos e tabelas, mas o valor \xE9 ${z[r[1]]||r[1]}.`;if(r=/^attempt to iterate over an? (\w+) value/.exec(i))return r[1]==="Instance"?"Um objeto do jogo n\xE3o \xE9 uma lista. Para percorrer os filhos use :GetChildren(): for _, filho in pasta:GetChildren() do ... end":`O for ... in precisa de uma tabela (use ipairs(lista) ou pairs(tabela)), mas recebeu ${z[r[1]]||r[1]}.`;if(/^table index is (nil|NaN)$/.test(i))return"Voc\xEA usou nil como chave de uma tabela (tabela[nil] = ...). Confira se a vari\xE1vel usada como chave tem valor.";if(/stack overflow/.test(i)&&!/^C stack overflow/.test(i))return"Uma fun\xE7\xE3o chamou a si mesma sem parar (recurs\xE3o infinita). Falta um caso que pare as chamadas? (Ou um evento que dispara a si mesmo sem parar.)";if(/not enough memory/.test(i))return"Acabou a mem\xF3ria: provavelmente uma tabela ou um texto crescendo sem parar dentro de um la\xE7o.";if(/resulting string too large/.test(i))return"O texto ficou grande demais (string.rep ou .. dentro de um la\xE7o sem fim?).";if(r=/^(.+) is not a valid member of (\w+) "(.*)"$/.exec(i)){let[,l,u,f]=r,m=a&&a.filhos?We(l,a.filhos):null,p=`\`${l}\` n\xE3o existe dentro de ${f||u} (um ${u}). `;return m&&(p+=`Talvez voc\xEA quis escrever \`${m}\`? `),p+=`Confira o nome (mai\xFAsculas contam). Para procurar sem dar erro use :FindFirstChild("${l}") \u2014 que devolve nil quando n\xE3o acha \u2014, e se o objeto ainda vai ser criado use :WaitForChild("${l}").`,p}if(r=/^(.+) is not a valid member of (\w+)$/.exec(i))return`\`${r[1]}\` n\xE3o existe em ${r[2]}. Confira o nome (mai\xFAsculas contam: Position, Magnitude, Name...).`;if(r=/^(\S+) cannot be assigned to$/.exec(i))return`${r[1]} \xE9 s\xF3 de leitura nesse valor. Crie um valor novo em vez de mudar uma parte dele.`;if(r=/^Unable to assign property (\w+)\. (.+) expected, got (\w+)$/.exec(i)){let l=r[2].replace(/^Enum\./,""),u=gs[l]||(r[2].startsWith("Enum.")?`um Enum.${l}.Algo`:null);return`A propriedade ${r[1]} s\xF3 aceita ${r[2]}${u?` (por exemplo ${u})`:""}, mas recebeu ${r[3]}.`}if(r=/^Unable to assign property (\w+)\. Property is read only$/.exec(i))return`A propriedade ${r[1]} s\xF3 pode ser lida: o pr\xF3prio jogo cuida dela.`;if(r=/^invalid argument #(\d+) to '([^']+)' \((.+) expected, got (\w+)\)$/.exec(i))return`A fun\xE7\xE3o ${r[2]} recebeu no argumento ${r[1]} ${z[r[4]]||r[4]}, mas precisava de ${r[3]}.`;if(r=/^missing argument #(\d+)(?: to '([^']+)')?/.exec(i))return`Faltou passar o argumento ${r[1]}${r[2]?` para ${r[2]}`:""}.`;if(r=/^Argument (\d+) missing or nil$/.exec(i))return`Faltou o argumento ${r[1]} (ou ele \xE9 nil).`;if(r=/^wrong number of arguments to '([^']+)'$/.exec(i))return`A fun\xE7\xE3o ${r[1]} recebeu argumentos de menos (ou demais).`;if(r=/^Expected ':' not '\.' calling member function (\w+)$/.exec(i))return`M\xE9todos do Roblox s\xE3o chamados com dois-pontos: objeto:${r[1]}(...) \u2014 e n\xE3o objeto.${r[1]}(...).`;if(/^Attempt to connect failed: Passed value is not a function$/.test(i))return":Connect precisa receber uma fun\xE7\xE3o: evento:Connect(minhaFuncao) \u2014 sem () depois do nome \u2014 ou evento:Connect(function(...) ... end).";if(r=/^invalid 'for' (initial value|limit|step)/.exec(i))return`No for num\xE9rico (for i = in\xEDcio, fim, passo do), ${{"initial value":"o in\xEDcio",limit:"o fim",step:"o passo"}[r[1]]} precisa ser um n\xFAmero.`;if(/^'for' step is zero/.test(i))return"O passo do for n\xE3o pode ser 0 (o la\xE7o nunca terminaria).";if(r=/^Unable to create an Instance of type "(.*)"$/.exec(i)){let l=a&&a.classes?We(r[1],a.classes):null;return`N\xE3o existe a classe "${r[1]}" para Instance.new.`+(l?` Talvez voc\xEA quis escrever "${l}"?`:' Confira o nome (mai\xFAsculas contam): "Part", "Folder", "IntValue", "Model"...')}if(/^The Parent property of .* is locked/.test(i))return"Esse objeto foi destru\xEDdo com :Destroy() e n\xE3o pode mais voltar para o jogo. Para usar de novo, crie (ou clone) outro.";if(/circular reference|as its own parent/.test(i))return"Um objeto n\xE3o pode ficar dentro dele mesmo (nem dentro de um filho dele).";if(/attempt to yield across metamethod\/C-call boundary/.test(i))return"task.wait (ou :Wait()) n\xE3o pode ser usado dentro desse tipo de fun\xE7\xE3o (por exemplo, na fun\xE7\xE3o de compara\xE7\xE3o do table.sort). Mova a espera para fora.";if(/^Requested module was required recursively/.test(i))return"Dois ModuleScripts est\xE3o usando require um no outro (um ciclo). Um deles n\xE3o pode depender do outro.";if(/^Module code did not return exactly one value/.test(i))return"Um ModuleScript precisa terminar com return e um valor s\xF3 (normalmente a tabela do m\xF3dulo: return Modulo).";if(/^Attempted to call require with invalid argument/.test(i))return"require precisa receber um ModuleScript (por exemplo require(game.ReplicatedStorage.MeuModulo)).";if(/DataStore|API Services|\b50[0-9]\b/.test(i))return"O DataStore falhou \u2014 no Roblox isso acontece de verdade de vez em quando. Por isso GetAsync/SetAsync sempre v\xE3o dentro de pcall: local ok, erro = pcall(function() ... end).";if(r=/^'(.*)' is not a valid Service name$/.exec(i)){let l=We(r[1],bs);return"GetService recebe o nome do servi\xE7o em ingl\xEAs, exatamente como aparece no Explorer"+(l?`: talvez voc\xEA quis escrever "${l}"?`:' ("Players", "ReplicatedStorage", "ServerStorage", "RunService", "TweenService"...).')}return(r=/^(FireServer|InvokeServer) can only be called from the client$/.exec(i))?`${r[1]} \xE9 o cliente (LocalScript) falando com o servidor. No servidor, para falar com um jogador use ${r[1]==="FireServer"?"FireClient(jogador, ...)":"InvokeClient(jogador, ...)"}.`:(r=/^(FireClient|FireAllClients|InvokeClient) can only be called from the server$/.exec(i))?`${r[1]} \xE9 o servidor (Script) falando com os jogadores. No cliente (LocalScript), use FireServer(...) para falar com o servidor.`:(r=/can only be (?:used|called|fired|invoked) (?:on|from) the (server|client)/i.exec(i))?r[1]==="server"?"Isso s\xF3 funciona no servidor (num Script). No cliente (LocalScript), pe\xE7a ao servidor com um RemoteEvent.":"Isso s\xF3 funciona no cliente (num LocalScript).":/player argument must be a Player object/.test(i)?"O primeiro argumento de FireClient/InvokeClient \xE9 o jogador (um Player): evento:FireClient(jogador, ...).":/DataStores can only be accessed from the server/.test(i)?"S\xF3 o servidor (Script) pode usar DataStores \u2014 o cliente nunca acessa os dados salvos direto.":/^10[0-9]: /.test(i)?"O DataStore s\xF3 guarda n\xFAmeros, textos, true/false e tabelas simples (listas ou dicion\xE1rios com chaves de texto). Instances, Vector3 e Color3 precisam virar n\xFAmeros ou textos antes de salvar.":/^TweenService:Create no property named/.test(i)?"Uma das propriedades da tabela de objetivos n\xE3o existe nesse objeto. Confira o nome (Position, Size, Transparency, Color...).":/cannot be tweened due to type mismatch/.test(i)?"O valor final do tween precisa ser do mesmo tipo da propriedade (Position \u2192 Vector3, Transparency \u2192 n\xFAmero, Color \u2192 Color3).":(r=/^(\w+) is a callback member of (\w+)/.exec(i))?`${r[1]} n\xE3o \xE9 um evento: \xE9 uma fun\xE7\xE3o que voc\xEA define com =, por exemplo ${r[2]==="RemoteFunction"?"remote":"objeto"}.${r[1]} = function(jogador, ...) ... end.`:/^Attribute names? /.test(i)?"Nomes de atributos s\xF3 podem ter letras sem acento, n\xFAmeros e _ (at\xE9 100 caracteres), sem come\xE7ar com RBX.":/is not a supported attribute type/.test(i)?"Atributos guardam n\xFAmeros, textos, true/false, Vector3, Color3, CFrame e alguns outros \u2014 n\xE3o tabelas nem Instances.":/is not a valid property name\.$/.test(i)?"Esse nome de propriedade n\xE3o existe nesse objeto. Confira o nome (mai\xFAsculas contam).":/^Http requests are not enabled|^Teleport is not supported/.test(i)?"Aqui o jogo roda simulado, sem internet e com um servidor s\xF3: isso n\xE3o funciona no curso.":(r=/^attempt to perform arithmetic on (\w+) and (\w+)$/.exec(i))?`N\xE3o d\xE1 para fazer essa conta entre ${r[1]} e ${r[2]}. Vector3 soma com Vector3 (pos + Vector3.new(0, 5, 0)) e multiplica por n\xFAmero (pos * 2).`:/^invalid order function for sorting/.test(i)?'A fun\xE7\xE3o de compara\xE7\xE3o do table.sort precisa responder "a vem antes de b?" sempre do mesmo jeito: use a < b (ou a > b para a ordem contr\xE1ria) \u2014 nunca <= nem um valor fixo como true.':/cannot change a protected metatable/.test(i)?"Objetos do Roblox (e alguns valores do jogo) n\xE3o deixam trocar a metatabela. Use setmetatable s\xF3 nas suas pr\xF3prias tabelas.":/^C stack overflow/.test(i)?"Uma fun\xE7\xE3o chamou a si mesma sem parar \u2014 por exemplo, um evento Changed que muda a pr\xF3pria propriedade e dispara de novo. Falta uma condi\xE7\xE3o que pare?":/^assertion failed!?$/.test(i)?"Um assert(condi\xE7\xE3o) recebeu uma condi\xE7\xE3o falsa.":/^Infinite yield/.test(i)?"WaitForChild ficou esperando um filho que nunca apareceu. Confira o nome (mai\xFAsculas contam) e se ele \xE9 mesmo criado.":/^Can't parse JSON/.test(i)?"JSONDecode recebeu um texto que n\xE3o \xE9 JSON v\xE1lido.":e&&e.doUsuario?"Esse erro foi lan\xE7ado pelo pr\xF3prio c\xF3digo com error(...). Leia a mensagem: ela diz o que deu errado.":null}function nt(t,e,o={}){t=t||{};let n=String(t.mensagem??""),a=us(t),r=n.replace(new RegExp(`^${J(A)}:\\d+:\\s*`),"");r=r.replace(/^[\w.]+:\d+:\s*/,"");let s=Pe(e,a)||"",i=!!(a&&/\berror\s*\(/.test(s))||!!t.naoTexto,l=_s(r,{...t,doUsuario:i},e,a,o);l||(l=i?"Esse erro foi lan\xE7ado pelo pr\xF3prio c\xF3digo com error(...). Leia a mensagem: ela diz o que deu errado.":"Aconteceu um erro enquanto o script rodava. Leia a mensagem (em ingl\xEAs, como no Output do Roblox Studio) e confira a linha indicada."),t.naoTexto&&!/^table|^\{/.test(r)&&(n=n||"(erro sem mensagem)"),t.acao?l+=` (O erro aconteceu ${t.acao}.)`:t.origem==="evento"&&(l+=" (O erro aconteceu dentro de uma fun\xE7\xE3o ligada a um evento.)");let f=a&&!new RegExp(`^${J(A)}:\\d+:`).test(n)?`${A}:${a}: ${n}`:n,m=fs(ds(t.pilha));return m&&(f+=m),a&&(f=`${zt(e,a)}

${f}`),{tipo:"erro",texto:f,linha:a||null,dica:l}}function rt(t){let e=String(t).replace(/\r\n/g,`
`).split(`
`).map(o=>o.replace(/\s+$/,""));for(;e.length&&e[e.length-1]==="";)e.pop();return e}function $(t,e=120){let o='"'+String(t).replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\n/g,"\\n").replace(/\t/g,"\\t")+'"';return o.length<=e?o:o.slice(0,e-4)+'..."'}var U=t=>t.normalize("NFD").replace(/[̀-ͯ]/g,""),oe=t=>[...t].filter(e=>/[\p{L}\p{N}]/u.test(e)).join("");function at(t,e){if(t.toLowerCase()===e.toLowerCase())return"A diferen\xE7a est\xE1 nas letras mai\xFAsculas/min\xFAsculas.";if(t.replace(/ /g,"")===e.replace(/ /g,""))return"A diferen\xE7a est\xE1 nos espa\xE7os.";if(U(t)===U(e))return"A diferen\xE7a est\xE1 nos acentos.";if(oe(t)&&t.replace(/-/g,"")===e.replace(/-/g,""))return"A diferen\xE7a est\xE1 no sinal de menos (-).";if(oe(t)&&oe(t)===oe(e))return"A diferen\xE7a est\xE1 na pontua\xE7\xE3o ou nos s\xEDmbolos (v\xEDrgulas, pontos, dois-pontos, exclama\xE7\xE3o...).";let o=oe(U(t)).toLowerCase(),n=oe(U(e)).toLowerCase();return o&&o===n?"Est\xE1 quase: confira mai\xFAsculas, acentos e pontua\xE7\xE3o.":null}var $t=/-?\d+(?:\.\d+)?/g;function qt(t,e){let o=U(String(t)),n=o.match($t)||[],a=(o.replace($t," ").match(/\p{L}+/gu)||[]).join("");return{nums:n,letras:e?a:a.toLowerCase()}}function vs(t,e,o){if(Math.abs(t.length-e.length)>o)return o+1;let n=Array.from({length:e.length+1},(a,r)=>r);for(let a=1;a<=t.length;a++){let r=[a],s=a;for(let i=1;i<=e.length;i++)r[i]=Math.min(n[i]+1,r[i-1]+1,n[i-1]+(t[a-1]===e[i-1]?0:1)),r[i]<s&&(s=r[i]);if(s>o)return o+1;n=r}return n[e.length]}function Oe(t,e,o={}){if(o.espacos){let s=U(String(t)),i=U(String(e));return o.caixa?s===i:s.toLowerCase()===i.toLowerCase()}let n=qt(t,o.caixa),a=qt(e,o.caixa);if(n.nums.length!==a.nums.length||n.nums.some((s,i)=>s!==a.nums[i]))return!1;if(n.letras===a.letras)return!0;let r=Math.min(Math.floor(Math.max(n.letras.length,a.letras.length)/8),3);return vs(n.letras,a.letras,r)<=r}function Ht(t,e,o={}){let n=t.filter(r=>r.trim()),a=e.filter(r=>r.trim());return a.length?n.length===a.length&&n.every((r,s)=>Oe(r,a[s],o))?!0:!o.espacos&&Oe(n.join(" "),a.join(" "),o):!1}function Jt(t,e){let o=t.filter(a=>a.trim()),n=e.filter(a=>a.trim());for(let a=0;a<Math.min(o.length,n.length);a++)if(o[a]!==n[a]){let r=at(o[a],n[a]);return`Passou! S\xF3 um detalhe: o esperado era ${$(o[a])} e saiu ${$(n[a])}.${r?" "+r:""}`}return"Passou! S\xF3 um detalhe: as linhas em branco (ou as quebras de linha) ficaram um pouco diferentes do esperado."}var Gt=(t,e)=>{let n=U(String(t)).match(/-?\d+(?:\.\d+)?|\p{L}+/gu)||[];return" "+(e?n:n.map(a=>a.toLowerCase())).join(" ")+" "};function Xt(t,e,o={}){let n=Gt(e,o.caixa);return n.trim()!==""&&Gt(t,o.caixa).includes(n)}function Yt(t){let e=/^[A-Za-z_À-ÿ][\wÀ-ÿ]*/.exec(t);if(!e||!/^[a-zà-ÿ]/.test(t))return t;let o=t.slice(e[0].length,e[0].length+1);return e[0].includes("_")||"(.[_:".includes(o)&&o?t:t[0].toUpperCase()+t.slice(1)}var ws=["saida","contem","nao_contem","ultima_linha","codigo"],ys=["usa","nao_usa","regex","nao_regex","conta","comentario","comentarios","codigo_regex","recursiva"],uc=new Set([...ws,...ys,"cpp","entradas","eof","semente","msg","min","max"]);var Qt=["base","tipos","agenda","instancias","classes","servicos","mundo","ajudantes"],Cs="0.739",xs=5,Ss=8,Ts=96*1024*1024,Zt={optimizationLevel:1,debugLevel:1},Kt=Object.getOwnPropertySymbols(Ee.prototype).find(t=>t.description==="Lua.release");function Ie(t){try{Kt&&t&&t[Kt]()}catch{}}var ne=t=>String(t||"").replace(/^(syntax|runtime) error:\s*/,""),me=t=>t?t+": ":"";function As(t,e,o="",n=null){let a=Array.isArray(e)?e.map(String):rt(e),r=rt(t);if(a.length===r.length&&a.every((m,p)=>m===r[p]))return null;if(n&&Ht(a,r,n))return{quase:!0,msg:Jt(a,r)};let s=a.join(`
`),i=r.join(`
`),l=m=>({msg:Yt(m),esperado:s,recebido:i});if(!r.length)return l(`${me(o)}seu script n\xE3o mostrou nada no Output. Faltou um print()?`);if(!a.length){let m=r.length>1?` (e mais ${r.length-1} linha${r.length>2?"s":""})`:"";return l(`${me(o)}nada deveria aparecer no Output, mas apareceu ${$(r[0])}${m}.`)}let u=n?a.filter(m=>m.trim()):a,f=r.map((m,p)=>[m,p]).filter(([m])=>!n||m.trim());for(let m=0;m<Math.min(u.length,f.length);m++){let p=u[m],[g,v]=f[m];if(p!==g&&!(n&&Oe(p,g,n))){let w=`${me(o)}a linha ${v+1} da sa\xEDda est\xE1 diferente.
  esperado: ${$(p)}
  recebido: ${$(g)}`,C=at(p,g);return C&&(w+=`
`+C),l(w)}}if(f.length<u.length){let m=u.length-f.length;return l(`${me(o)}faltou ${m===1?"uma linha":`${m} linhas`} na sa\xEDda. A pr\xF3xima esperada era: ${$(u[f.length])}`)}return l(`${me(o)}sua sa\xEDda tem linhas a mais. A primeira que sobrou foi: ${$(f[u.length][0])}`)}function Es(t){return String(t??"").replace(/\r\n?/g,`
`).replace(/^﻿/,"")}function Rs(t,e,o){let n=to(t);switch(e){case"palavra":return n.palavras[o]||0;case"operador":return n.operadores[o]||0;case"interpolacao":return n.interpolacoes;case"chamada":{if(/[.:]/.test(o)){let r=o.replace(/:/g,".");return n.chamadas.filter(s=>s.caminho.replace(/:/g,".")===r||s.caminho.replace(/:/g,".").endsWith("."+r)).length}return n.chamadas.filter(r=>r.nome===o).length}case"funcao":return n.funcoes.some(a=>a.nome===o||a.nome.endsWith("."+o)||a.nome.endsWith(":"+o))?1:0;case"recursiva":{let a=n.funcoes.find(r=>r.nome===o||r.nome.endsWith("."+o)||r.nome.endsWith(":"+o));return a?a.recursiva?1:0:-1}default:return 0}}function to(t){return t._estrutura||(t._estrutura=jt(t.codigo)),t._estrutura}function ks(t,e){let o=()=>to(t);switch(e){case"globais":return JSON.stringify(o().globais);case"limpo":return o().limpo;case"codigo":return t.codigo;case"comentarios":return JSON.stringify(o().comentarios);case"nomesTopo":return JSON.stringify(t.nomesTopo||[]);default:return""}}function eo(t){return typeof t=="string"?{mundo:t,roteiro:""}:t&&typeof t=="object"?{mundo:String(t.mundo||t.antes||""),roteiro:String(t.roteiro||t.depois||"")}:{mundo:"",roteiro:""}}var Me=class t{constructor({fontes:e}){this.fontes=e,this.bytecodes=null,this.lua0=null,this.cache={codigo:null,an:null}}async iniciar(){if(this.bytecodes)return this;this.lua0=await Ee.create({sandbox:!0});let e=[];for(let n of Qt){let a=this.fontes[n];if(typeof a!="string")throw new Error(`prel\xFAdio: falta o peda\xE7o ${n}.luau`);try{e.push(this.lua0.compile(a,Zt))}catch(r){let s=ne(r&&r.message);try{this.lua0.load(a,{name:`=${n}.luau`})}catch(i){s=ne(i.message)}throw new Error(`prel\xFAdio ${n}.luau n\xE3o compila: ${s}`)}}this.bytecodes=e;let{lua:o}=await this._novoEstado(null);return Ie(o),this}info(){return{motor:"Luau",versao:Cs,linguagem:"lua",arquivo:A}}analisar(e){if(e=Es(e),this.cache.codigo===e)return this.cache.an;let o={codigo:e,erro:null,bytecode:null,nomesTopo:[],_estrutura:null,instrumentado:!1};try{this.lua0.load(e,{name:"="+A})}catch(n){o.erro=Ut(e,n&&n.message)}if(!o.erro){let n=e;try{let a=Lt(e);o.nomesTopo=a.nomesTopo,this.lua0.load(a.fonte,{name:"="+A}),n=a.fonte,o.instrumentado=!0}catch(a){console.warn("[motor lua] a instrumenta\xE7\xE3o falhou; rodando sem ela:",a&&a.message),o.nomesTopo=[]}o.bytecode=this.lua0.compile(n,Zt)}return this.cache={codigo:e,an:o},o}async _novoEstado(e){let o=await Ee.create({sandbox:!0,memory:{limitBytes:Ts}});try{let n=o.createTable(),a=o.createTable(),r=(s,i)=>a.set(s,o.createFunction(i));return r("carregar",(s,i,l)=>{try{return o.load(String(s??""),{name:"="+String(i||"codigo.lua"),environment:l})}catch(u){return ie.multiple(null,ne(u&&u.message))}}),r("carregarAluno",s=>{if(!e||!e.bytecode)return ie.multiple(null,"nenhum c\xF3digo do aluno");try{return o.loadBytecode(e.bytecode,{name:"="+A,environment:s})}catch(i){return ie.multiple(null,ne(i&&i.message))}}),r("formatarErro",s=>{let i={};try{i=JSON.parse(String(s))}catch{i={mensagem:String(s)}}return JSON.stringify(nt(i,e?e.codigo:"",{}))}),r("estrutura",(s,i)=>e?Rs(e,String(s),String(i??"")):0),r("consulta",s=>e?ks(e,String(s)):""),r("compararSaida",(s,i,l,u)=>{let f=JSON.parse(String(i)),m=JSON.parse(String(u))||null;typeof f!="string"&&!Array.isArray(f)&&(f=String(f??""));let p=As(String(s??""),f,String(l??""),m);return p?JSON.stringify(p):""}),r("contemParecido",(s,i,l)=>Xt(String(s??""),String(i??""),JSON.parse(String(l))||{})),Qt.forEach((s,i)=>{o.loadBytecode(this.bytecodes[i],{name:`=${s}.luau`}).call(n,a),s==="tipos"&&o.setTypeMetatable("vector",n.get("V3MT"))}),{lua:o,C:n}}catch(n){throw Ie(o),n}}static erroInterno(e){let o=ne(e&&e.message||e);return/not enough memory|out of memory|memory limit/i.test(o)?{tipo:"erro",texto:"not enough memory",linha:null,dica:"Acabou a mem\xF3ria: provavelmente uma tabela ou um texto crescendo sem parar dentro de um la\xE7o."}:/stack|recursion/i.test(o)?{tipo:"erro",texto:"stack overflow",linha:null,dica:"Uma fun\xE7\xE3o chamou a si mesma vezes demais (recurs\xE3o infinita?). Falta um caso que pare as chamadas?"}:{tipo:"erro",texto:`O motor do Luau teve um problema interno (${o.slice(0,200)}).`,linha:null,dica:"Tente de novo. Se continuar, simplifique o c\xF3digo perto da \xFAltima mudan\xE7a."}}async executar(e={}){await this.iniciar();let o=this.analisar(e.code);if(o.erro)return{saida:"",fim:"erro",erro:o.erro,linha:o.erro.linha};let n=Number(e.tempo)>0?Number(e.tempo):xs,a=e.seed!=null&&Number.isFinite(Number(e.seed))?Number(e.seed):Math.floor(Math.random()*2**30),r=eo(e.cena),s;try{s=await this._novoEstado(o)}catch(u){return{saida:"",fim:"erro",erro:t.erroInterno(u)}}let{lua:i,C:l}=s;try{let u={tempo:n,semente:a,mundo:r.mundo,cenario:r.roteiro,tempoVirtual:Number(e.tempoVirtual)>0?Number(e.tempoVirtual):60,mundoVazio:e.mundoVazio===!0},[f]=l.get("controle").get("executar").call(JSON.stringify(u)),m=JSON.parse(String(f)),p={saida:m.saida||"",fim:m.fim||"ok",tempoVirtual:m.tempoVirtual||0};return m.cena&&(p.cena=m.cena),m.cortado&&p.fim==="ok"&&(p.cortado=!0),m.fim==="tempo"&&(p.linha=m.linha||null),m.fim==="erro"&&(m.erro?p.erro=nt(m.erro,o.codigo,{}):m.erroMundo?p.erro={tipo:"erro",texto:`O mundo desta aula deu erro: ${m.erroMundo}`,linha:null,dica:"Isso n\xE3o \xE9 culpa do seu c\xF3digo: avise quem escreveu a aula."}:m.erroCarregar?p.erro={tipo:"erro",texto:String(m.erroCarregar),linha:null,dica:"N\xE3o consegui carregar o seu script."}:p.erro={tipo:"erro",texto:"O script terminou com erro.",linha:null,dica:""},p.linha=p.erro.linha),p}catch(u){return{saida:"",fim:"erro",erro:t.erroInterno(u)}}finally{Ie(i)}}async testar(e={}){await this.iniciar();let o=this.analisar(e.code),n={ok:!1,sintaxe:null,testes:[]};if(o.erro)return n.sintaxe=o.erro,n;let a=Number(e.tempo)>0?Number(e.tempo):Ss,r=Date.now()+a*1e3,s=e.leniente&&typeof e.leniente=="object"?e.leniente:null,i=eo(e.cena),l=!1;for(let m of e.tests||[]){let p=String(m[0]),g=String(m[1]??""),v;l?v={nome:p,ok:!1,msg:"N\xE3o rodou: um teste anterior estourou o tempo."}:(v=await this._umTeste(o,p,g,r,s,i),!v.ok&&v.tempo&&(l=Date.now()>r-50),delete v.tempo),n.testes.push(v)}let u=n.testes.reduce((m,p)=>m+(p.execucoes||0),0),f=!0;for(let m of n.testes)delete m.execucoes,m.estrutura&&(!u&&m.ok?Object.assign(m,{ok:!1,msg:m.estrutura[0]}):m.ok&&(m.dicas=(m.dicas||[]).concat(m.estrutura.map(p=>`Sugest\xE3o da aula: ${p}`))),delete m.estrutura),m.ok||delete m.dicas,f=f&&m.ok;return n.ok=f&&n.testes.length>0,n}async _umTeste(e,o,n,a,r,s){let i=Math.max(.05,(a-Date.now())/1e3),l;try{l=await this._novoEstado(e)}catch(m){let p=t.erroInterno(m);return{nome:o,ok:!1,msg:`Seu c\xF3digo deu erro:
${p.texto}
\u2192 ${p.dica}`}}let{lua:u,C:f}=l;try{let m=f.get("ambienteTeste").call()[0],p;try{p=u.load(n.replace(/^\s*\n/,""),{name:"=teste.lua",environment:m})}catch(b){return{nome:o,ok:!1,msg:`O teste tem um erro de sintaxe (${ne(b.message)}). Avise quem escreveu a aula.`}}let g={tempo:i,leniente:r,mundo:s.mundo},[v]=f.get("controle").get("testar").call(p,JSON.stringify(g)),w=JSON.parse(String(v)),C={nome:o,ok:!!w.ok,execucoes:w.execucoes||0};return w.ok?(w.dicas&&w.dicas.length&&(C.dicas=w.dicas),w.estrutura&&w.estrutura.length&&(C.estrutura=w.estrutura)):(C.msg=w.msg||"O teste falhou.",w.esperado!=null&&(C.esperado=String(w.esperado)),w.recebido!=null&&(C.recebido=String(w.recebido)),w.tempo&&(C.tempo=!0)),C}catch(m){let p=t.erroInterno(m);return{nome:o,ok:!1,msg:`Seu c\xF3digo deu erro:
${p.texto}
\u2192 ${p.dica}`}}finally{Ie(u)}}};var oo=`--!nolint
-- Cobra Code \u2014 ambiente Luau (1/8): utilidades, formata\xE7\xE3o do print, JSON e o registro de tipos do Roblox.
-- Cada arquivo de web/lua/luau/ \xE9 um peda\xE7o do "prel\xFAdio" que o motor roda num estado Luau novo antes do c\xF3digo do
-- aluno. Todos recebem C (a tabela compartilhada entre os peda\xE7os) e host (fun\xE7\xF5es do JavaScript).
local C, host = ...

C.host = host
-- fun\xE7\xF5es originais (antes de qualquer troca): o rel\xF3gio REAL serve s\xF3 para o limite de tempo
C.real = {
	clock = os.clock,
	type = type,
	typeof = typeof,
	tostring = tostring,
	pairs = pairs,
	ipairs = ipairs,
	random = math.random,
	randomseed = math.randomseed,
	resume = coroutine.resume,
	status = coroutine.status,
	running = coroutine.running,
	yield = coroutine.yield,
	create = coroutine.create,
	traceback = debug.traceback,
}
C.prazo = math.huge -- os.clock() real a partir do qual o c\xF3digo \xE9 interrompido (o JavaScript define)

-- marcadores (erros especiais que atravessam o c\xF3digo do aluno)
C.MARCA_TEMPO = setmetatable({}, { __tostring = function() return "o c\xF3digo demorou demais e foi interrompido" end })
C.MARCA_LIMITE = setmetatable({}, { __tostring = function() return "o c\xF3digo mostrou texto demais" end })
C.MARCA_PARAR = setmetatable({}, { __tostring = function() return "a simula\xE7\xE3o parou" end })
function C.eMarca(v)
	return v == C.MARCA_TEMPO or v == C.MARCA_LIMITE or v == C.MARCA_PARAR
end

-- ============================================================================================
-- Registro de tipos do Roblox: tabela fraca objeto \u2192 nome do tipo ("Instance", "Color3", "EnumItem"...)
-- ============================================================================================
C.TIPO = setmetatable({}, { __mode = "k" })

function C.typeof(v)
	local t = C.real.type(v)
	if t == "table" then
		local n = C.TIPO[v]
		if n then return n end
		return "table"
	end
	if t == "vector" then return "Vector3" end
	if t == "userdata" then return "userdata" end
	return t
end

-- type() como no Roblox: objetos do Roblox s\xE3o "userdata" (o Vector3 \xE9 "vector")
function C.type(v)
	local t = C.real.type(v)
	if t == "table" and C.TIPO[v] then return "userdata" end
	return t
end

-- ============================================================================================
-- N\xFAmeros
-- ============================================================================================
local function numeroTexto(x: number): string
	local s = C.real.tostring(x)
	if s == "-nan" or s == "nan" or s == "-nan(ind)" or s == "nan(ind)" then return "nan" end
	return s
end
C.numeroTexto = numeroTexto

-- n\xFAmero de 32 bits (Vector3 e CFrame do Roblox): o texto mais curto que volta ao mesmo float
local function f32(x: number): number
	return vector.create(x, 0, 0).x
end
C.f32 = f32
local function numero32(x: number): string
	if x ~= x then return "nan" end
	if x == math.huge then return "inf" end
	if x == -math.huge then return "-inf" end
	if x == 0 then return "0" end
	if x == math.floor(x) and math.abs(x) < 1e15 then return string.format("%d", x) end
	for p = 1, 9 do
		local s = string.format("%." .. p .. "g", x)
		if f32(tonumber(s) :: number) == x then return s end
	end
	return string.format("%.9g", x)
end
C.numero32 = numero32
-- Color3: como no Roblox, at\xE9 6 algarismos significativos
local function numero6(x: number): string
	if x ~= x then return "nan" end
	if x == math.floor(x) and math.abs(x) < 1e15 then return string.format("%d", x) end
	local s = string.format("%.6g", x)
	return s
end
C.numero6 = numero6

-- ============================================================================================
-- Texto de um valor (print, mensagens dos testes)
-- ============================================================================================
local IDENT = "^[%a_][%w_]*$"
local PALAVRAS = {}
for _, p in { "and", "break", "do", "else", "elseif", "end", "false", "for", "function", "if", "in", "local", "nil", "not",
	"or", "repeat", "return", "then", "true", "until", "while", "continue" } do
	PALAVRAS[p] = true
end

local function aspas(s: string): string
	s = string.gsub(s, "\\\\", "\\\\\\\\")
	s = string.gsub(s, '"', '\\\\"')
	s = string.gsub(s, "\\n", "\\\\n")
	s = string.gsub(s, "\\t", "\\\\t")
	s = string.gsub(s, "\\r", "\\\\r")
	return '"' .. s .. '"'
end
C.aspas = aspas

local enderecos = setmetatable({}, { __mode = "k" })
local proximoEndereco = 0
function C.endereco(v): string
	local e = enderecos[v]
	if not e then
		proximoEndereco += 1
		e = string.format("0x%016x", 0x5a5a0000 + proximoEndereco * 16)
		enderecos[v] = e
	end
	return e
end

-- texto "de m\xE1quina" de valores do Roblox (Vector3, Color3, Instance...), ou nil
function C.textoRoblox(v): string?
	local t = C.real.type(v)
	if t == "vector" then
		return numero32(v.x) .. ", " .. numero32(v.y) .. ", " .. numero32(v.z)
	end
	if t == "table" and C.TIPO[v] then
		local ok, s = pcall(C.real.tostring, v)
		if ok then return s end
		return C.TIPO[v]
	end
	return nil
end

local function chaveOrdem(a, b)
	local ta, tb = C.real.type(a), C.real.type(b)
	if ta ~= tb then
		if ta == "number" then return true end
		if tb == "number" then return false end
		if ta == "string" then return true end
		if tb == "string" then return false end
		return ta < tb
	end
	if ta == "number" or ta == "string" then return a < b end
	return C.real.tostring(a) < C.real.tostring(b)
end

-- opcoes: {aspas = true (textos com aspas), largura = 80 (quebra em v\xE1rias linhas acima disso), profundidade = 4}
local mostrar
local function mostrarTabela(t, prof: number, vistos, indent: string, opcoes)
	if vistos[t] then return "{...}" end
	if prof > (opcoes.profundidade or 4) then return "{...}" end
	local mt = getmetatable(t)
	if mt ~= nil and C.real.type(mt) == "table" and rawget(mt, "__tostring") then
		local ok, s = pcall(C.real.tostring, t)
		if ok then return s end
	end
	vistos[t] = true
	local n = 0
	while rawget(t, n + 1) ~= nil do n += 1 end
	local partes = {}
	for i = 1, n do
		table.insert(partes, mostrar(rawget(t, i), prof + 1, vistos, indent .. "  ", opcoes))
	end
	local resto = {}
	for k in C.real.pairs(t) do
		if not (C.real.type(k) == "number" and k >= 1 and k <= n and k == math.floor(k)) then table.insert(resto, k) end
	end
	table.sort(resto, chaveOrdem)
	for _, k in resto do
		local kt
		if C.real.type(k) == "string" and string.match(k, IDENT) and not PALAVRAS[k] then
			kt = k
		else
			kt = "[" .. mostrar(k, prof + 1, vistos, indent .. "  ", { aspas = true, profundidade = 1 }) .. "]"
		end
		table.insert(partes, kt .. " = " .. mostrar(rawget(t, k), prof + 1, vistos, indent .. "  ", opcoes))
	end
	vistos[t] = nil
	if #partes == 0 then return "{}" end
	local linha = "{" .. table.concat(partes, ", ") .. "}"
	if #linha + #indent <= (opcoes.largura or 80) and not string.find(linha, "\\n", 1, true) then return linha end
	return "{\\n" .. indent .. "  " .. table.concat(partes, ",\\n" .. indent .. "  ") .. "\\n" .. indent .. "}"
end

mostrar = function(v, prof: number?, vistos, indent: string?, opcoes)
	opcoes = opcoes or { aspas = true }
	local t = C.real.type(v)
	if t == "string" then
		if opcoes.aspas then return aspas(v) end
		return v
	end
	if t == "number" then return numeroTexto(v) end
	if t == "nil" or t == "boolean" then return C.real.tostring(v) end
	local r = C.textoRoblox(v)
	if r then
		-- dentro de uma tabela, os tipos "de n\xFAmeros" levam o nome ({Vector3(1, 2, 3)} e n\xE3o {1, 2, 3})
		if (prof or 1) > 1 then
			local tp = C.typeof(v)
			if tp == "Vector3" or tp == "Vector2" or tp == "Color3" or tp == "CFrame" or tp == "UDim" or tp == "UDim2" then
				return tp .. "(" .. r .. ")"
			end
		end
		return r
	end
	if t == "table" then return mostrarTabela(v, prof or 1, vistos or {}, indent or "", opcoes) end
	if t == "function" then
		local nome = debug.info(v, "n")
		return "function: " .. C.endereco(v)
	end
	if t == "thread" then return "thread: " .. C.endereco(v) end
	return C.real.tostring(v)
end

-- valor como o print mostra: textos sem aspas no n\xEDvel de cima; dentro de tabelas, com aspas
function C.textoPrint(v): string
	if C.real.type(v) == "string" then return v end
	return mostrar(v, 1, {}, "", { aspas = true })
end
-- valor para mensagens dos testes (textos sempre com aspas)
function C.mostrar(v, largura: number?): string
	return mostrar(v, 1, {}, "", { aspas = true, largura = largura or 80 })
end

-- tostring como no Roblox: Instance \u2192 Name, Vector3 \u2192 "1, 2, 3", tabela \u2192 "table: 0x..."
function C.tostring(v): string
	local t = C.real.type(v)
	if t == "number" then return numeroTexto(v) end
	if t == "vector" then return C.textoRoblox(v) :: string end
	if t == "table" then
		local mt = getmetatable(v)
		if C.TIPO[v] or (mt ~= nil and C.real.type(mt) == "table" and rawget(mt, "__tostring")) then
			return C.real.tostring(v)
		end
		if C.real.type(mt) == "string" then return C.real.tostring(v) end
		return "table: " .. C.endereco(v)
	end
	if t == "function" then return "function: " .. C.endereco(v) end
	if t == "thread" then return "thread: " .. C.endereco(v) end
	return C.real.tostring(v)
end

-- ============================================================================================
-- Tabelas
-- ============================================================================================
-- congela uma tabela da API (somente leitura, como as do Roblox)
function C.congelar(t)
	if not table.isfrozen(t) then table.freeze(t) end
	return t
end

function C.copiaProfunda(v, vistos)
	if C.real.type(v) ~= "table" or C.TIPO[v] then return v end
	vistos = vistos or {}
	if vistos[v] then return vistos[v] end
	local r = {}
	vistos[v] = r
	for k, x in C.real.pairs(v) do
		r[C.copiaProfunda(k, vistos)] = C.copiaProfunda(x, vistos)
	end
	return r
end

-- ============================================================================================
-- JSON (HttpService:JSONEncode/JSONDecode e a cena para a interface)
-- ============================================================================================
local json = {}
C.json = json

local function jsonTexto(s: string): string
	s = string.gsub(s, '[%c"\\\\]', function(ch)
		if ch == '"' then return '\\\\"' end
		if ch == "\\\\" then return "\\\\\\\\" end
		if ch == "\\n" then return "\\\\n" end
		if ch == "\\r" then return "\\\\r" end
		if ch == "\\t" then return "\\\\t" end
		return string.format("\\\\u%04x", string.byte(ch))
	end)
	return '"' .. s .. '"'
end

local function jsonValor(v, partes, vistos, estrito: boolean)
	local t = C.real.type(v)
	if v == nil then
		table.insert(partes, "null")
	elseif t == "boolean" then
		table.insert(partes, if v then "true" else "false")
	elseif t == "number" then
		if v ~= v or v == math.huge or v == -math.huge then
			table.insert(partes, "null")
		elseif v == math.floor(v) and math.abs(v) < 1e15 then
			table.insert(partes, string.format("%d", v))
		else
			table.insert(partes, string.format("%.17g", v))
		end
	elseif t == "string" then
		table.insert(partes, jsonTexto(v))
	elseif t == "table" and not C.TIPO[v] then
		if vistos[v] then error("Cannot convert circular table to JSON", 0) end
		vistos[v] = true
		local n = #v
		local temOutras = false
		for k in C.real.pairs(v) do
			if not (C.real.type(k) == "number" and k >= 1 and k <= n and k == math.floor(k)) then temOutras = true break end
		end
		if n > 0 and not temOutras then
			table.insert(partes, "[")
			for i = 1, n do
				if i > 1 then table.insert(partes, ",") end
				jsonValor(v[i], partes, vistos, estrito)
			end
			table.insert(partes, "]")
		elseif n == 0 and not temOutras then
			table.insert(partes, "[]")
		else
			table.insert(partes, "{")
			local chaves = {}
			for k in C.real.pairs(v) do table.insert(chaves, k) end
			table.sort(chaves, chaveOrdem)
			local primeiro = true
			for _, k in chaves do
				if not primeiro then table.insert(partes, ",") end
				primeiro = false
				table.insert(partes, jsonTexto(C.real.tostring(k)))
				table.insert(partes, ":")
				jsonValor(v[k], partes, vistos, estrito)
			end
			table.insert(partes, "}")
		end
		vistos[v] = nil
	else
		if estrito then error("Can't convert to JSON", 0) end
		table.insert(partes, jsonTexto(C.textoPrint(v)))
	end
end

function json.encode(v, estrito: boolean?): string
	local partes = {}
	jsonValor(v, partes, {}, estrito == true)
	return table.concat(partes)
end

function json.decode(s: string)
	if C.real.type(s) ~= "string" then error("Can't parse JSON", 0) end
	local i = 1
	local n = #s
	local valor
	local function espacos()
		i = string.find(s, "[^ \\t\\r\\n]", i) or n + 1
	end
	local function falha()
		error("Can't parse JSON", 0)
	end
	local function texto()
		local partes = {}
		i += 1
		while true do
			local c = string.sub(s, i, i)
			if c == "" then falha() end
			if c == '"' then i += 1 break end
			if c == "\\\\" then
				local e = string.sub(s, i + 1, i + 1)
				local mapa = { n = "\\n", t = "\\t", r = "\\r", b = "\\b", f = "\\f", ['"'] = '"', ["\\\\"] = "\\\\", ["/"] = "/" }
				if mapa[e] then
					table.insert(partes, mapa[e])
					i += 2
				elseif e == "u" then
					local hex = string.sub(s, i + 2, i + 5)
					local cp = tonumber(hex, 16)
					if not cp then falha() end
					table.insert(partes, utf8.char(cp :: number))
					i += 6
				else
					falha()
				end
			else
				table.insert(partes, c)
				i += 1
			end
		end
		return table.concat(partes)
	end
	valor = function()
		espacos()
		local c = string.sub(s, i, i)
		if c == "{" then
			local r = {}
			i += 1
			espacos()
			if string.sub(s, i, i) == "}" then i += 1 return r end
			while true do
				espacos()
				if string.sub(s, i, i) ~= '"' then falha() end
				local k = texto()
				espacos()
				if string.sub(s, i, i) ~= ":" then falha() end
				i += 1
				r[k] = valor()
				espacos()
				local d = string.sub(s, i, i)
				i += 1
				if d == "}" then break end
				if d ~= "," then falha() end
			end
			return r
		elseif c == "[" then
			local r = {}
			i += 1
			espacos()
			if string.sub(s, i, i) == "]" then i += 1 return r end
			while true do
				table.insert(r, valor())
				espacos()
				local d = string.sub(s, i, i)
				i += 1
				if d == "]" then break end
				if d ~= "," then falha() end
			end
			return r
		elseif c == '"' then
			return texto()
		elseif string.sub(s, i, i + 3) == "true" then
			i += 4
			return true
		elseif string.sub(s, i, i + 4) == "false" then
			i += 5
			return false
		elseif string.sub(s, i, i + 3) == "null" then
			i += 4
			return nil
		else
			local num = string.match(s, "^-?%d+%.?%d*[eE]?[-+]?%d*", i)
			if not num or num == "" or num == "-" then falha() end
			i += #(num :: string)
			return tonumber(num)
		end
	end
	local r = valor()
	espacos()
	if i <= n then falha() end
	return r
end

-- ============================================================================================
-- Erros dos objetos do Roblox: sem posi\xE7\xE3o (como os erros do motor do Roblox); o motor acha a linha pela pilha
-- ============================================================================================
function C.erro(msg: string)
	error(msg, 0)
end

-- nome do tipo de um valor para mensagens ("number", "Vector3", "Instance"...)
function C.nomeTipo(v): string
	return C.typeof(v)
end
`;var no=`--!nolint
-- Cobra Code \u2014 ambiente Luau (2/8): os tipos de dados do Roblox \u2014 Vector3 (o vetor nativo do Luau, como no Roblox),
-- Vector2, Color3, BrickColor, CFrame, UDim, UDim2, TweenInfo, NumberRange, Enum, Random, RaycastParams...
local C, host = ...
local TIPO = C.TIPO
local erro = C.erro
local numero32 = C.numero32
local numero6 = C.numero6
local rtype = C.real.type

local function registrar(obj, nome: string)
	TIPO[obj] = nome
	return obj
end
C.registrarTipo = registrar

-- confere um argumento num\xE9rico de um construtor ("invalid argument #1 to 'new' (number expected, got string)")
local function num(v, i: number, funcao: string, padrao: number?): number
	if v == nil and padrao ~= nil then return padrao end
	local t = rtype(v)
	if t == "number" then return v end
	if t == "string" and tonumber(v) then return tonumber(v) :: number end
	erro(string.format("invalid argument #%d to '%s' (number expected, got %s)", i, funcao, C.typeof(v)))
	return 0
end
C.argNumero = num

-- tipo de dado imut\xE1vel: os campos ficam na pr\xF3pria tabela (congelada); m\xE9todos e campos calculados no __index
local function novoTipo(nome: string, metodos, calculados, extras)
	local mt = {}
	mt.__index = function(self, k)
		local f = calculados and calculados[k]
		if f then return f(self) end
		local m = metodos[k]
		if m ~= nil then return m end
		erro(C.real.tostring(k) .. " is not a valid member of " .. nome)
	end
	mt.__newindex = function(self, k)
		erro(C.real.tostring(k) .. " cannot be assigned to")
	end
	-- sem __metatable: o Luau n\xE3o congela (table.freeze) tabelas com metatabela protegida, e congelar \xE9 o que deixa
	-- estes valores imut\xE1veis de verdade (cor.R = 1 d\xE1 erro, como no Roblox)
	mt.__iter = function()
		erro("attempt to iterate over a " .. nome .. " value")
	end
	if extras then
		for k, v in extras do mt[k] = v end
	end
	return mt
end

local function criar(mt, nome: string, campos)
	local obj = setmetatable(campos, mt)
	TIPO[obj] = nome
	table.freeze(obj)
	return obj
end

-- ============================================================================================
-- Vector3: o vetor nativo do Luau (32 bits, imut\xE1vel, == por valor), com X/Y/Z, Magnitude, Unit e m\xE9todos
-- ============================================================================================
local V3 = {}
local vcreate = vector.create
local function v3(x: number, y: number, z: number)
	return vcreate(x, y, z)
end
C.v3 = v3

local function eV3(v): boolean
	return rtype(v) == "vector"
end
C.eV3 = eV3

local function argV3(v, i: number, funcao: string)
	if rtype(v) ~= "vector" then
		erro(string.format("invalid argument #%d to '%s' (Vector3 expected, got %s)", i, funcao, C.typeof(v)))
	end
	return v
end

local function magnitude(v): number
	return math.sqrt(v.x * v.x + v.y * v.y + v.z * v.z)
end
C.magnitude = magnitude

local V3METODOS = {}
function V3METODOS.Dot(a, b)
	argV3(a, 1, "Dot")
	argV3(b, 1, "Dot")
	return a.x * b.x + a.y * b.y + a.z * b.z
end
function V3METODOS.Cross(a, b)
	argV3(b, 1, "Cross")
	return v3(a.y * b.z - a.z * b.y, a.z * b.x - a.x * b.z, a.x * b.y - a.y * b.x)
end
function V3METODOS.Lerp(a, b, t)
	argV3(b, 1, "Lerp")
	t = num(t, 2, "Lerp")
	return a + (b - a) * t
end
function V3METODOS.FuzzyEq(a, b, eps)
	argV3(b, 1, "FuzzyEq")
	eps = eps or 1e-5
	return math.abs(a.x - b.x) <= eps and math.abs(a.y - b.y) <= eps and math.abs(a.z - b.z) <= eps
end
function V3METODOS.Abs(a) return v3(math.abs(a.x), math.abs(a.y), math.abs(a.z)) end
function V3METODOS.Ceil(a) return v3(math.ceil(a.x), math.ceil(a.y), math.ceil(a.z)) end
function V3METODOS.Floor(a) return v3(math.floor(a.x), math.floor(a.y), math.floor(a.z)) end
function V3METODOS.Sign(a) return v3(math.sign(a.x), math.sign(a.y), math.sign(a.z)) end
function V3METODOS.Min(a, ...)
	local r = a
	for _, b in { ... } do r = v3(math.min(r.x, b.x), math.min(r.y, b.y), math.min(r.z, b.z)) end
	return r
end
function V3METODOS.Max(a, ...)
	local r = a
	for _, b in { ... } do r = v3(math.max(r.x, b.x), math.max(r.y, b.y), math.max(r.z, b.z)) end
	return r
end
function V3METODOS.Angle(a, b)
	argV3(b, 1, "Angle")
	local d = magnitude(a) * magnitude(b)
	if d == 0 then return 0 end
	return math.acos(math.clamp(V3METODOS.Dot(a, b) / d, -1, 1))
end

C.V3MT = {
	__index = function(v, k)
		if k == "Magnitude" then return magnitude(v) end
		if k == "Unit" then
			local m = magnitude(v)
			return v3(v.x / m, v.y / m, v.z / m)
		end
		local m = V3METODOS[k]
		if m then return m end
		erro(C.real.tostring(k) .. " is not a valid member of Vector3")
	end,
	__newindex = function(v, k)
		erro(C.real.tostring(k) .. " cannot be assigned to")
	end,
	__tostring = function(v)
		return numero32(v.x) .. ", " .. numero32(v.y) .. ", " .. numero32(v.z)
	end,
	__iter = function()
		erro("attempt to iterate over a Vector3 value")
	end,
}

function V3.new(x, y, z)
	return v3(num(x, 1, "new", 0), num(y, 2, "new", 0), num(z, 3, "new", 0))
end
V3.zero = v3(0, 0, 0)
V3.one = v3(1, 1, 1)
V3.xAxis = v3(1, 0, 0)
V3.yAxis = v3(0, 1, 0)
V3.zAxis = v3(0, 0, 1)
function V3.FromNormalId(id)
	local n = id and id.Name
	local m = { Right = v3(1, 0, 0), Left = v3(-1, 0, 0), Top = v3(0, 1, 0), Bottom = v3(0, -1, 0), Back = v3(0, 0, 1), Front = v3(0, 0, -1) }
	return m[n] or V3.zero
end
function V3.FromAxis(eixo)
	local n = eixo and eixo.Name
	return if n == "X" then V3.xAxis elseif n == "Y" then V3.yAxis else V3.zAxis
end
C.Vector3 = table.freeze(V3)

-- ============================================================================================
-- Vector2
-- ============================================================================================
local V2 = {}
local V2MT
local function v2(x: number, y: number)
	return criar(V2MT, "Vector2", { X = x, Y = y })
end
local V2METODOS = {
	Dot = function(a, b) return a.X * b.X + a.Y * b.Y end,
	Cross = function(a, b) return a.X * b.Y - a.Y * b.X end,
	Lerp = function(a, b, t) return v2(a.X + (b.X - a.X) * t, a.Y + (b.Y - a.Y) * t) end,
	Abs = function(a) return v2(math.abs(a.X), math.abs(a.Y)) end,
	Floor = function(a) return v2(math.floor(a.X), math.floor(a.Y)) end,
	Ceil = function(a) return v2(math.ceil(a.X), math.ceil(a.Y)) end,
	FuzzyEq = function(a, b, eps) eps = eps or 1e-5 return math.abs(a.X - b.X) <= eps and math.abs(a.Y - b.Y) <= eps end,
}
local function opV2(f)
	return function(a, b)
		local ta, tb = C.typeof(a), C.typeof(b)
		if ta == "Vector2" and tb == "Vector2" then return v2(f(a.X, b.X), f(a.Y, b.Y)) end
		if ta == "Vector2" and tb == "number" then return v2(f(a.X, b), f(a.Y, b)) end
		if ta == "number" and tb == "Vector2" then return v2(f(a, b.X), f(a, b.Y)) end
		erro("attempt to perform arithmetic on " .. ta .. " and " .. tb)
	end
end
V2MT = novoTipo("Vector2", V2METODOS, {
	Magnitude = function(a) return math.sqrt(a.X * a.X + a.Y * a.Y) end,
	Unit = function(a) local m = math.sqrt(a.X * a.X + a.Y * a.Y) return v2(a.X / m, a.Y / m) end,
	x = function(a) return a.X end,
	y = function(a) return a.Y end,
}, {
	__add = opV2(function(a, b) return a + b end),
	__sub = opV2(function(a, b) return a - b end),
	__mul = opV2(function(a, b) return a * b end),
	__div = opV2(function(a, b) return a / b end),
	__unm = function(a) return v2(-a.X, -a.Y) end,
	__eq = function(a, b) return a.X == b.X and a.Y == b.Y end,
	__tostring = function(a) return numero32(a.X) .. ", " .. numero32(a.Y) end,
})
function V2.new(x, y) return v2(num(x, 1, "new", 0), num(y, 2, "new", 0)) end
V2.zero = v2(0, 0)
V2.one = v2(1, 1)
V2.xAxis = v2(1, 0)
V2.yAxis = v2(0, 1)
C.Vector2 = table.freeze(V2)

-- ============================================================================================
-- Color3 (componentes de 0 a 1)
-- ============================================================================================
local C3 = {}
local C3MT
local function c3(r: number, g: number, b: number)
	return criar(C3MT, "Color3", { R = r, G = g, B = b })
end
C.c3 = c3
local function paraHSV(c)
	local r, g, b = c.R, c.G, c.B
	local mx, mn = math.max(r, g, b), math.min(r, g, b)
	local d = mx - mn
	local h = 0
	if d > 0 then
		if mx == r then h = ((g - b) / d) % 6
		elseif mx == g then h = (b - r) / d + 2
		else h = (r - g) / d + 4 end
		h /= 6
	end
	local s = if mx == 0 then 0 else d / mx
	return h, s, mx
end
local function deHSV(h: number, s: number, v: number)
	h = (h % 1) * 6
	local i = math.floor(h)
	local f = h - i
	local p, q, t = v * (1 - s), v * (1 - s * f), v * (1 - s * (1 - f))
	if i == 0 then return c3(v, t, p) end
	if i == 1 then return c3(q, v, p) end
	if i == 2 then return c3(p, v, t) end
	if i == 3 then return c3(p, q, v) end
	if i == 4 then return c3(t, p, v) end
	return c3(v, p, q)
end
local function byte(x: number): number
	return math.clamp(math.floor(x * 255 + 0.5), 0, 255)
end
C.byteCor = byte
C3MT = novoTipo("Color3", {
	Lerp = function(a, b, t)
		if C.typeof(b) ~= "Color3" then erro("invalid argument #1 to 'Lerp' (Color3 expected, got " .. C.typeof(b) .. ")") end
		return c3(a.R + (b.R - a.R) * t, a.G + (b.G - a.G) * t, a.B + (b.B - a.B) * t)
	end,
	ToHSV = function(a) return paraHSV(a) end,
	ToHex = function(a) return string.format("%02X%02X%02X", byte(a.R), byte(a.G), byte(a.B)) end,
}, {
	r = function(a) return a.R end,
	g = function(a) return a.G end,
	b = function(a) return a.B end,
}, {
	__eq = function(a, b) return a.R == b.R and a.G == b.G and a.B == b.B end,
	__tostring = function(a) return numero6(a.R) .. ", " .. numero6(a.G) .. ", " .. numero6(a.B) end,
})
function C3.new(r, g, b) return c3(num(r, 1, "new", 0), num(g, 2, "new", 0), num(b, 3, "new", 0)) end
function C3.fromRGB(r, g, b)
	return c3(num(r, 1, "fromRGB", 0) / 255, num(g, 2, "fromRGB", 0) / 255, num(b, 3, "fromRGB", 0) / 255)
end
function C3.fromHSV(h, s, v) return deHSV(num(h, 1, "fromHSV"), num(s, 2, "fromHSV"), num(v, 3, "fromHSV")) end
function C3.toHSV(c) return paraHSV(c) end
function C3.fromHex(hex)
	if rtype(hex) ~= "string" then erro("invalid argument #1 to 'fromHex' (string expected, got " .. C.typeof(hex) .. ")") end
	local h = string.gsub(hex, "^#", "")
	if #h == 3 then h = string.gsub(h, ".", "%0%0") end
	if not string.match(h, "^%x%x%x%x%x%x$") then erro("Unable to convert characters to hex value") end
	return c3(tonumber(string.sub(h, 1, 2), 16) / 255, tonumber(string.sub(h, 3, 4), 16) / 255, tonumber(string.sub(h, 5, 6), 16) / 255)
end
C.Color3 = table.freeze(C3)

-- ============================================================================================
-- BrickColor (paleta reduzida com os nomes mais usados)
-- ============================================================================================
local PALETA = {
	{ 1, "White", 242, 243, 243 }, { 2, "Grey", 161, 165, 162 }, { 3, "Light yellow", 249, 233, 153 },
	{ 5, "Brick yellow", 215, 197, 154 }, { 9, "Light reddish violet", 232, 186, 200 }, { 11, "Pastel Blue", 128, 187, 219 },
	{ 12, "Light orange brown", 203, 132, 66 }, { 18, "Nougat", 204, 142, 105 }, { 21, "Bright red", 196, 40, 28 },
	{ 22, "Med. reddish violet", 196, 112, 160 }, { 23, "Bright blue", 13, 105, 172 }, { 24, "Bright yellow", 245, 205, 48 },
	{ 25, "Earth orange", 98, 71, 50 }, { 26, "Black", 27, 42, 53 }, { 27, "Dark grey", 109, 110, 108 },
	{ 28, "Dark green", 40, 127, 71 }, { 29, "Medium green", 161, 196, 140 }, { 37, "Bright green", 75, 151, 75 },
	{ 38, "Dark orange", 160, 95, 53 }, { 104, "Bright violet", 107, 50, 124 }, { 105, "Br. yellowish orange", 226, 155, 64 },
	{ 106, "Bright orange", 218, 133, 65 }, { 107, "Bright bluish green", 0, 143, 156 }, { 119, "Br. yellowish green", 164, 189, 71 },
	{ 192, "Reddish brown", 105, 64, 40 }, { 194, "Medium stone grey", 163, 162, 165 }, { 199, "Dark stone grey", 99, 95, 98 },
	{ 208, "Light stone grey", 229, 228, 223 }, { 217, "Brown", 124, 92, 70 }, { 1001, "Institutional white", 248, 248, 248 },
	{ 1003, "Really black", 17, 17, 17 }, { 1004, "Really red", 255, 0, 0 }, { 1005, "Deep orange", 255, 176, 0 },
	{ 1006, "Alder", 180, 128, 255 }, { 1007, "Dusty Rose", 163, 75, 75 }, { 1008, "Olive", 193, 190, 66 },
	{ 1009, "New Yeller", 255, 255, 0 }, { 1010, "Really blue", 0, 0, 255 }, { 1011, "Navy blue", 0, 32, 96 },
	{ 1012, "Deep blue", 33, 84, 185 }, { 1013, "Cyan", 4, 175, 236 }, { 1014, "CGA brown", 170, 85, 0 },
	{ 1015, "Magenta", 170, 0, 170 }, { 1016, "Pink", 255, 102, 204 }, { 1018, "Teal", 18, 238, 212 },
	{ 1019, "Toothpaste", 0, 255, 255 }, { 1020, "Lime green", 0, 255, 0 }, { 1021, "Camo", 58, 125, 21 },
	{ 1022, "Grime", 127, 142, 100 }, { 1023, "Lavender", 140, 91, 159 }, { 1024, "Pastel light blue", 175, 221, 255 },
	{ 1025, "Pastel orange", 255, 201, 201 }, { 1026, "Pastel violet", 177, 167, 255 }, { 1027, "Pastel blue-green", 159, 243, 233 },
	{ 1028, "Pastel green", 204, 255, 204 }, { 1029, "Pastel yellow", 255, 255, 204 }, { 1030, "Pastel brown", 255, 204, 153 },
	{ 1031, "Royal purple", 98, 37, 209 }, { 1032, "Hot pink", 255, 0, 191 },
}
local BC = {}
local BCMT
local porNome, porNumero = {}, {}
local function bcDe(item)
	return criar(BCMT, "BrickColor", {
		Name = item[2], Number = item[1], Color = c3(item[3] / 255, item[4] / 255, item[5] / 255),
	})
end
BCMT = novoTipo("BrickColor", {}, {
	r = function(a) return a.Color.R end,
	g = function(a) return a.Color.G end,
	b = function(a) return a.Color.B end,
}, {
	__eq = function(a, b) return a.Number == b.Number end,
	__tostring = function(a) return a.Name end,
})
for _, item in PALETA do
	local b = bcDe(item)
	porNome[item[2]] = b
	porNumero[item[1]] = b
end
local function maisProxima(r: number, g: number, b: number)
	local melhor, dist = porNumero[194], math.huge
	for _, item in PALETA do
		local d = (item[3] - r) ^ 2 + (item[4] - g) ^ 2 + (item[5] - b) ^ 2
		if d < dist then melhor, dist = porNumero[item[1]], d end
	end
	return melhor
end
C.brickDeCor = function(cor)
	return maisProxima(cor.R * 255, cor.G * 255, cor.B * 255)
end
function BC.new(a, b, c)
	local t = C.typeof(a)
	if t == "string" then return porNome[a] or porNumero[194] end
	if t == "number" and b == nil then return porNumero[a] or porNumero[194] end
	if t == "number" then return maisProxima(a * 255, num(b, 2, "new") * 255, num(c, 3, "new") * 255) end
	if t == "Color3" then return C.brickDeCor(a) end
	return porNumero[194]
end
function BC.palette(i) return porNumero[PALETA[(i or 0) + 1] and PALETA[(i or 0) + 1][1] or 194] end
function BC.random() return porNumero[PALETA[C.real.random(1, #PALETA)][1]] end
function BC.White() return porNome["White"] end
function BC.Gray() return porNome["Medium stone grey"] end
function BC.DarkGray() return porNome["Dark stone grey"] end
function BC.Black() return porNome["Black"] end
function BC.Red() return porNome["Bright red"] end
function BC.Yellow() return porNome["Bright yellow"] end
function BC.Green() return porNome["Dark green"] end
function BC.Blue() return porNome["Bright blue"] end
C.BrickColor = table.freeze(BC)

-- ============================================================================================
-- CFrame: posi\xE7\xE3o + rota\xE7\xE3o (matriz 3x3)
-- ============================================================================================
local CF = {}
local CFMT
local function cf(x, y, z, r00, r01, r02, r10, r11, r12, r20, r21, r22)
	return criar(CFMT, "CFrame", {
		X = x, Y = y, Z = z,
		R00 = r00, R01 = r01, R02 = r02, R10 = r10, R11 = r11, R12 = r12, R20 = r20, R21 = r21, R22 = r22,
	})
end
C.cf = cf
local function eCF(v) return TIPO[v] == "CFrame" end
C.eCF = eCF
local function argCF(v, i, funcao)
	if not eCF(v) then erro(string.format("invalid argument #%d to '%s' (CFrame expected, got %s)", i, funcao, C.typeof(v))) end
	return v
end

local function mul(a, b)
	return cf(
		a.R00 * b.X + a.R01 * b.Y + a.R02 * b.Z + a.X,
		a.R10 * b.X + a.R11 * b.Y + a.R12 * b.Z + a.Y,
		a.R20 * b.X + a.R21 * b.Y + a.R22 * b.Z + a.Z,
		a.R00 * b.R00 + a.R01 * b.R10 + a.R02 * b.R20, a.R00 * b.R01 + a.R01 * b.R11 + a.R02 * b.R21, a.R00 * b.R02 + a.R01 * b.R12 + a.R02 * b.R22,
		a.R10 * b.R00 + a.R11 * b.R10 + a.R12 * b.R20, a.R10 * b.R01 + a.R11 * b.R11 + a.R12 * b.R21, a.R10 * b.R02 + a.R11 * b.R12 + a.R12 * b.R22,
		a.R20 * b.R00 + a.R21 * b.R10 + a.R22 * b.R20, a.R20 * b.R01 + a.R21 * b.R11 + a.R22 * b.R21, a.R20 * b.R02 + a.R21 * b.R12 + a.R22 * b.R22
	)
end
local function aplicar(a, v)
	return v3(a.R00 * v.x + a.R01 * v.y + a.R02 * v.z + a.X, a.R10 * v.x + a.R11 * v.y + a.R12 * v.z + a.Y, a.R20 * v.x + a.R21 * v.y + a.R22 * v.z + a.Z)
end
local function girar(a, v)
	return v3(a.R00 * v.x + a.R01 * v.y + a.R02 * v.z, a.R10 * v.x + a.R11 * v.y + a.R12 * v.z, a.R20 * v.x + a.R21 * v.y + a.R22 * v.z)
end
local function inversa(a)
	local x, y, z = a.X, a.Y, a.Z
	return cf(
		-(a.R00 * x + a.R10 * y + a.R20 * z), -(a.R01 * x + a.R11 * y + a.R21 * z), -(a.R02 * x + a.R12 * y + a.R22 * z),
		a.R00, a.R10, a.R20, a.R01, a.R11, a.R21, a.R02, a.R12, a.R22
	)
end
local function rotX(t) local c, s = math.cos(t), math.sin(t) return cf(0, 0, 0, 1, 0, 0, 0, c, -s, 0, s, c) end
local function rotY(t) local c, s = math.cos(t), math.sin(t) return cf(0, 0, 0, c, 0, s, 0, 1, 0, -s, 0, c) end
local function rotZ(t) local c, s = math.cos(t), math.sin(t) return cf(0, 0, 0, c, -s, 0, s, c, 0, 0, 0, 1) end

-- quat\xE9rnios (para Lerp e para CFrame.new com 7 n\xFAmeros)
local function paraQuat(a)
	local tr = a.R00 + a.R11 + a.R22
	local w, x, y, z
	if tr > 0 then
		local s = math.sqrt(tr + 1) * 2
		w = 0.25 * s
		x = (a.R21 - a.R12) / s
		y = (a.R02 - a.R20) / s
		z = (a.R10 - a.R01) / s
	elseif a.R00 > a.R11 and a.R00 > a.R22 then
		local s = math.sqrt(1 + a.R00 - a.R11 - a.R22) * 2
		w = (a.R21 - a.R12) / s
		x = 0.25 * s
		y = (a.R01 + a.R10) / s
		z = (a.R02 + a.R20) / s
	elseif a.R11 > a.R22 then
		local s = math.sqrt(1 + a.R11 - a.R00 - a.R22) * 2
		w = (a.R02 - a.R20) / s
		x = (a.R01 + a.R10) / s
		y = 0.25 * s
		z = (a.R12 + a.R21) / s
	else
		local s = math.sqrt(1 + a.R22 - a.R00 - a.R11) * 2
		w = (a.R10 - a.R01) / s
		x = (a.R02 + a.R20) / s
		y = (a.R12 + a.R21) / s
		z = 0.25 * s
	end
	return x, y, z, w
end
local function deQuat(px, py, pz, x, y, z, w)
	local n = math.sqrt(x * x + y * y + z * z + w * w)
	if n == 0 then return cf(px, py, pz, 1, 0, 0, 0, 1, 0, 0, 0, 1) end
	x, y, z, w = x / n, y / n, z / n, w / n
	return cf(px, py, pz,
		1 - 2 * (y * y + z * z), 2 * (x * y - z * w), 2 * (x * z + y * w),
		2 * (x * y + z * w), 1 - 2 * (x * x + z * z), 2 * (y * z - x * w),
		2 * (x * z - y * w), 2 * (y * z + x * w), 1 - 2 * (x * x + y * y))
end
local function olharPara(pos, alvo, cima)
	local frente = alvo - pos
	local m = magnitude(frente)
	if m < 1e-9 then return cf(pos.x, pos.y, pos.z, 1, 0, 0, 0, 1, 0, 0, 0, 1) end
	frente = frente / m
	cima = cima or v3(0, 1, 0)
	local dir = V3METODOS.Cross(frente, cima)
	if magnitude(dir) < 1e-6 then dir = V3METODOS.Cross(frente, v3(0, 0, if frente.y > 0 then 1 else -1)) end
	dir = dir / magnitude(dir)
	local up = V3METODOS.Cross(dir, frente)
	return cf(pos.x, pos.y, pos.z, dir.x, up.x, -frente.x, dir.y, up.y, -frente.y, dir.z, up.z, -frente.z)
end

local CFMETODOS = {}
function CFMETODOS.Inverse(a) return inversa(a) end
function CFMETODOS.Lerp(a, b, t)
	argCF(b, 1, "Lerp")
	t = num(t, 2, "Lerp")
	local ax, ay, az, aw = paraQuat(a)
	local bx, by, bz, bw = paraQuat(b)
	local d = ax * bx + ay * by + az * bz + aw * bw
	if d < 0 then bx, by, bz, bw, d = -bx, -by, -bz, -bw, -d end
	local x, y, z, w
	if d > 0.9995 then
		x, y, z, w = ax + (bx - ax) * t, ay + (by - ay) * t, az + (bz - az) * t, aw + (bw - aw) * t
	else
		local th = math.acos(d)
		local s = math.sin(th)
		local ka, kb = math.sin((1 - t) * th) / s, math.sin(t * th) / s
		x, y, z, w = ax * ka + bx * kb, ay * ka + by * kb, az * ka + bz * kb, aw * ka + bw * kb
	end
	return deQuat(a.X + (b.X - a.X) * t, a.Y + (b.Y - a.Y) * t, a.Z + (b.Z - a.Z) * t, x, y, z, w)
end
function CFMETODOS.ToWorldSpace(a, b) return mul(a, argCF(b, 1, "ToWorldSpace")) end
function CFMETODOS.ToObjectSpace(a, b) return mul(inversa(a), argCF(b, 1, "ToObjectSpace")) end
function CFMETODOS.PointToWorldSpace(a, v) return aplicar(a, argV3(v, 1, "PointToWorldSpace")) end
function CFMETODOS.PointToObjectSpace(a, v) return aplicar(inversa(a), argV3(v, 1, "PointToObjectSpace")) end
function CFMETODOS.VectorToWorldSpace(a, v) return girar(a, argV3(v, 1, "VectorToWorldSpace")) end
function CFMETODOS.VectorToObjectSpace(a, v) return girar(inversa(a), argV3(v, 1, "VectorToObjectSpace")) end
function CFMETODOS.GetComponents(a)
	return a.X, a.Y, a.Z, a.R00, a.R01, a.R02, a.R10, a.R11, a.R12, a.R20, a.R21, a.R22
end
CFMETODOS.components = CFMETODOS.GetComponents
function CFMETODOS.ToEulerAnglesXYZ(a)
	local ry = math.asin(math.clamp(a.R02, -1, 1))
	return math.atan2(-a.R12, a.R22), ry, math.atan2(-a.R01, a.R00)
end
function CFMETODOS.ToEulerAnglesYXZ(a)
	local rx = math.asin(math.clamp(-a.R12, -1, 1))
	return rx, math.atan2(a.R02, a.R22), math.atan2(a.R10, a.R11)
end
CFMETODOS.ToOrientation = CFMETODOS.ToEulerAnglesYXZ
function CFMETODOS.ToAxisAngle(a)
	local x, y, z, w = paraQuat(a)
	local ang = 2 * math.acos(math.clamp(w, -1, 1))
	local s = math.sqrt(1 - w * w)
	if s < 1e-9 then return v3(1, 0, 0), 0 end
	return v3(x / s, y / s, z / s), ang
end
function CFMETODOS.FuzzyEq(a, b, eps)
	eps = eps or 1e-5
	for _, k in { "X", "Y", "Z", "R00", "R01", "R02", "R10", "R11", "R12", "R20", "R21", "R22" } do
		if math.abs(a[k] - b[k]) > eps then return false end
	end
	return true
end

CFMT = novoTipo("CFrame", CFMETODOS, {
	Position = function(a) return v3(a.X, a.Y, a.Z) end,
	p = function(a) return v3(a.X, a.Y, a.Z) end,
	LookVector = function(a) return v3(-a.R02, -a.R12, -a.R22) end,
	RightVector = function(a) return v3(a.R00, a.R10, a.R20) end,
	UpVector = function(a) return v3(a.R01, a.R11, a.R21) end,
	XVector = function(a) return v3(a.R00, a.R10, a.R20) end,
	YVector = function(a) return v3(a.R01, a.R11, a.R21) end,
	ZVector = function(a) return v3(a.R02, a.R12, a.R22) end,
	Rotation = function(a) return cf(0, 0, 0, a.R00, a.R01, a.R02, a.R10, a.R11, a.R12, a.R20, a.R21, a.R22) end,
	lookVector = function(a) return v3(-a.R02, -a.R12, -a.R22) end,
}, {
	__mul = function(a, b)
		if not eCF(a) then erro("invalid argument #1 (CFrame expected, got " .. C.typeof(a) .. ")") end
		if eCF(b) then return mul(a, b) end
		if eV3(b) then return aplicar(a, b) end
		erro("invalid argument #2 (Vector3 expected, got " .. C.typeof(b) .. ")")
	end,
	__add = function(a, b)
		if eCF(a) and eV3(b) then return cf(a.X + b.x, a.Y + b.y, a.Z + b.z, a.R00, a.R01, a.R02, a.R10, a.R11, a.R12, a.R20, a.R21, a.R22) end
		erro("invalid argument #2 (Vector3 expected, got " .. C.typeof(b) .. ")")
	end,
	__sub = function(a, b)
		if eCF(a) and eV3(b) then return cf(a.X - b.x, a.Y - b.y, a.Z - b.z, a.R00, a.R01, a.R02, a.R10, a.R11, a.R12, a.R20, a.R21, a.R22) end
		erro("invalid argument #2 (Vector3 expected, got " .. C.typeof(b) .. ")")
	end,
	__eq = function(a, b)
		return a.X == b.X and a.Y == b.Y and a.Z == b.Z and a.R00 == b.R00 and a.R01 == b.R01 and a.R02 == b.R02
			and a.R10 == b.R10 and a.R11 == b.R11 and a.R12 == b.R12 and a.R20 == b.R20 and a.R21 == b.R21 and a.R22 == b.R22
	end,
	__tostring = function(a)
		local p = {}
		for _, k in { "X", "Y", "Z", "R00", "R01", "R02", "R10", "R11", "R12", "R20", "R21", "R22" } do table.insert(p, numero32(a[k])) end
		return table.concat(p, ", ")
	end,
})

function CF.new(...)
	local n = select("#", ...)
	local a, b = ...
	if n == 0 then return cf(0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1) end
	if eV3(a) then
		if n >= 2 and eV3(b) then return olharPara(a, b) end
		return cf(a.x, a.y, a.z, 1, 0, 0, 0, 1, 0, 0, 0, 1)
	end
	local t = { ... }
	for i = 1, n do t[i] = num(t[i], i, "new") end
	if n == 3 then return cf(t[1], t[2], t[3], 1, 0, 0, 0, 1, 0, 0, 0, 1) end
	if n == 7 then return deQuat(t[1], t[2], t[3], t[4], t[5], t[6], t[7]) end
	if n == 12 then return cf(table.unpack(t)) end
	erro("Invalid number of arguments: " .. n)
	return nil
end
function CF.lookAt(pos, alvo, cima)
	return olharPara(argV3(pos, 1, "lookAt"), argV3(alvo, 2, "lookAt"), cima)
end
function CF.Angles(rx, ry, rz)
	return mul(mul(rotX(num(rx, 1, "Angles", 0)), rotY(num(ry, 2, "Angles", 0))), rotZ(num(rz, 3, "Angles", 0)))
end
CF.fromEulerAnglesXYZ = CF.Angles
function CF.fromEulerAnglesYXZ(rx, ry, rz)
	return mul(mul(rotY(num(ry, 2, "fromEulerAnglesYXZ", 0)), rotX(num(rx, 1, "fromEulerAnglesYXZ", 0))), rotZ(num(rz, 3, "fromEulerAnglesYXZ", 0)))
end
CF.fromOrientation = CF.fromEulerAnglesYXZ
function CF.fromAxisAngle(eixo, ang)
	argV3(eixo, 1, "fromAxisAngle")
	local u = eixo / magnitude(eixo)
	local s = math.sin(ang / 2)
	return deQuat(0, 0, 0, u.x * s, u.y * s, u.z * s, math.cos(ang / 2))
end
function CF.fromMatrix(pos, vx, vy, vz)
	vz = vz or V3METODOS.Cross(vx, vy)
	return cf(pos.x, pos.y, pos.z, vx.x, vy.x, vz.x, vx.y, vy.y, vz.y, vx.z, vy.z, vz.z)
end
CF.identity = cf(0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1)
C.CFrame = table.freeze(CF)
C.cfMul = mul

-- ============================================================================================
-- UDim e UDim2 (interfaces)
-- ============================================================================================
local UD, UD2 = {}, {}
local UDMT, UD2MT
local function ud(s, o) return criar(UDMT, "UDim", { Scale = s, Offset = o }) end
local function ud2(xs, xo, ys, yo) return criar(UD2MT, "UDim2", { X = ud(xs, xo), Y = ud(ys, yo) }) end
UDMT = novoTipo("UDim", {}, nil, {
	__add = function(a, b) return ud(a.Scale + b.Scale, a.Offset + b.Offset) end,
	__sub = function(a, b) return ud(a.Scale - b.Scale, a.Offset - b.Offset) end,
	__unm = function(a) return ud(-a.Scale, -a.Offset) end,
	__eq = function(a, b) return a.Scale == b.Scale and a.Offset == b.Offset end,
	__tostring = function(a) return numero6(a.Scale) .. ", " .. numero6(a.Offset) end,
})
UD2MT = novoTipo("UDim2", {
	Lerp = function(a, b, t)
		return ud2(a.X.Scale + (b.X.Scale - a.X.Scale) * t, a.X.Offset + (b.X.Offset - a.X.Offset) * t,
			a.Y.Scale + (b.Y.Scale - a.Y.Scale) * t, a.Y.Offset + (b.Y.Offset - a.Y.Offset) * t)
	end,
}, {
	Width = function(a) return a.X end,
	Height = function(a) return a.Y end,
}, {
	__add = function(a, b) return ud2(a.X.Scale + b.X.Scale, a.X.Offset + b.X.Offset, a.Y.Scale + b.Y.Scale, a.Y.Offset + b.Y.Offset) end,
	__sub = function(a, b) return ud2(a.X.Scale - b.X.Scale, a.X.Offset - b.X.Offset, a.Y.Scale - b.Y.Scale, a.Y.Offset - b.Y.Offset) end,
	__eq = function(a, b) return a.X == b.X and a.Y == b.Y end,
	__tostring = function(a) return "{" .. tostring(a.X) .. "}, {" .. tostring(a.Y) .. "}" end,
})
function UD.new(s, o) return ud(num(s, 1, "new", 0), num(o, 2, "new", 0)) end
function UD2.new(a, b, c, d)
	if C.typeof(a) == "UDim" then return ud2(a.Scale, a.Offset, b.Scale, b.Offset) end
	return ud2(num(a, 1, "new", 0), num(b, 2, "new", 0), num(c, 3, "new", 0), num(d, 4, "new", 0))
end
function UD2.fromScale(x, y) return ud2(num(x, 1, "fromScale", 0), 0, num(y, 2, "fromScale", 0), 0) end
function UD2.fromOffset(x, y) return ud2(0, num(x, 1, "fromOffset", 0), 0, num(y, 2, "fromOffset", 0)) end
C.UDim = table.freeze(UD)
C.UDim2 = table.freeze(UD2)
C.ud2 = ud2

-- ============================================================================================
-- NumberRange, NumberSequence e ColorSequence (efeitos: s\xF3 guardam os valores)
-- ============================================================================================
local NR = {}
local NRMT = novoTipo("NumberRange", {}, nil, {
	__eq = function(a, b) return a.Min == b.Min and a.Max == b.Max end,
	__tostring = function(a) return numero6(a.Min) .. " " .. numero6(a.Max) end,
})
function NR.new(a, b)
	a = num(a, 1, "new")
	b = num(b, 2, "new", a)
	if b < a then erro("NumberRange: invalid range") end
	return criar(NRMT, "NumberRange", { Min = a, Max = b })
end
C.NumberRange = table.freeze(NR)
local function sequencia(nome)
	local mod = {}
	local mt = novoTipo(nome, {}, nil, { __tostring = function(a) return nome end })
	function mod.new(...)
		return criar(mt, nome, { Keypoints = { ... } })
	end
	return table.freeze(mod)
end
C.NumberSequence = sequencia("NumberSequence")
C.ColorSequence = sequencia("ColorSequence")

-- ============================================================================================
-- Enum
-- ============================================================================================
local LISTAS = {
	Material = {
		Plastic = 256, SmoothPlastic = 272, Neon = 288, Wood = 512, WoodPlanks = 528, Marble = 784, Slate = 800,
		Concrete = 816, Granite = 832, Brick = 848, Pebble = 864, Cobblestone = 880, Rock = 896, Sandstone = 912,
		Basalt = 788, CrackedLava = 804, Limestone = 820, Pavement = 836, CorrodedMetal = 1040, DiamondPlate = 1056,
		Foil = 1072, Metal = 1088, Grass = 1280, LeafyGrass = 1284, Sand = 1296, Fabric = 1312, Snow = 1328, Mud = 1344,
		Ground = 1360, Asphalt = 1376, Salt = 1392, Ice = 1536, Glacier = 1552, Glass = 1568, ForceField = 1584,
		Air = 1792, Water = 2048, Cardboard = 1314, Carpet = 1315, CeramicTiles = 1316, ClayRoofTiles = 1317,
		RoofShingles = 1318, Leather = 1319, Plaster = 1320, Rubber = 1321,
	},
	PartType = { Ball = 0, Block = 1, Cylinder = 2, Wedge = 3, CornerWedge = 4 },
	KeyCode = {
		Unknown = 0, Backspace = 8, Tab = 9, Return = 13, Escape = 27, Space = 32, Zero = 48, One = 49, Two = 50,
		Three = 51, Four = 52, Five = 53, Six = 54, Seven = 55, Eight = 56, Nine = 57, A = 97, B = 98, C = 99,
		D = 100, E = 101, F = 102, G = 103, H = 104, I = 105, J = 106, K = 107, L = 108, M = 109, N = 110, O = 111,
		P = 112, Q = 113, R = 114, S = 115, T = 116, U = 117, V = 118, W = 119, X = 120, Y = 121, Z = 122,
		Delete = 127, Up = 273, Down = 274, Right = 275, Left = 276, F1 = 282, F2 = 283, F3 = 284, F4 = 285,
		RightShift = 303, LeftShift = 304, RightControl = 305, LeftControl = 306, RightAlt = 307, LeftAlt = 308,
		ButtonX = 1000, ButtonY = 1001, ButtonA = 1002, ButtonB = 1003, ButtonR1 = 1004, ButtonL1 = 1005,
		ButtonR2 = 1006, ButtonL2 = 1007,
	},
	UserInputType = {
		MouseButton1 = 0, MouseButton2 = 1, MouseButton3 = 2, MouseWheel = 3, MouseMovement = 4, Touch = 7,
		Keyboard = 8, Focus = 9, Accelerometer = 10, Gyro = 11, Gamepad1 = 12, TextInput = 20, None = 22,
	},
	UserInputState = { Begin = 0, Change = 1, End = 2, Cancel = 3, None = 4 },
	EasingStyle = {
		Linear = 0, Sine = 1, Back = 2, Quad = 3, Quart = 4, Quint = 5, Bounce = 6, Elastic = 7, Exponential = 8,
		Circular = 9, Cubic = 10,
	},
	EasingDirection = { In = 0, Out = 1, InOut = 2 },
	PlaybackState = { Begin = 0, Delayed = 1, Playing = 2, Paused = 3, Completed = 4, Cancelled = 5 },
	HumanoidStateType = {
		FallingDown = 0, Ragdoll = 1, GettingUp = 2, Jumping = 3, Swimming = 4, Freefall = 5, Flying = 6,
		Landed = 7, Running = 8, RunningNoPhysics = 10, StrafingNoPhysics = 11, Climbing = 12, Seated = 13,
		PlatformStanding = 14, Dead = 15, Physics = 16, None = 18,
	},
	HumanoidRigType = { R6 = 0, R15 = 1 },
	RaycastFilterType = { Exclude = 0, Include = 1 },
	SurfaceType = { Smooth = 0, Glue = 1, Weld = 2, Studs = 3, Inlet = 4, Universal = 5, Hinge = 6, Motor = 7, SmoothNoOutlines = 10 },
	NormalId = { Right = 0, Top = 1, Back = 2, Left = 3, Bottom = 4, Front = 5 },
	Axis = { X = 0, Y = 1, Z = 2 },
	Font = {
		Legacy = 0, Arial = 1, ArialBold = 2, SourceSans = 3, SourceSansBold = 4, SourceSansLight = 5,
		SourceSansItalic = 6, Bodoni = 7, Garamond = 8, Cartoon = 9, Code = 10, Highway = 11, SciFi = 12,
		Arcade = 13, Fantasy = 14, Antique = 15, SourceSansSemibold = 16, Gotham = 17, GothamMedium = 18,
		GothamBold = 19, GothamBlack = 20, FredokaOne = 28, Bangers = 29, Creepster = 30, Ubuntu = 39, Roboto = 41,
		Oswald = 44, Nunito = 46, Montserrat = 37,
	},
	TextXAlignment = { Left = 0, Right = 1, Center = 2 },
	TextYAlignment = { Top = 0, Center = 1, Bottom = 2 },
	SortOrder = { Name = 0, Custom = 1, LayoutOrder = 2 },
	FillDirection = { Horizontal = 0, Vertical = 1 },
	ZIndexBehavior = { Global = 0, Sibling = 1 },
	AnimationPriority = { Idle = 0, Movement = 1, Action = 2, Action2 = 3, Action3 = 4, Action4 = 5, Core = 1000 },
	MessageType = { MessageOutput = 0, MessageInfo = 1, MessageWarning = 2, MessageError = 3 },
	ContextActionResult = { Sink = 0, Pass = 1 },
	RenderPriority = { First = 0, Input = 100, Camera = 200, Character = 300, Last = 2000 },
	CameraType = { Fixed = 0, Attach = 1, Watch = 2, Track = 3, Follow = 4, Custom = 5, Scriptable = 6, Orbital = 7 },
	MembershipType = { None = 0, BuildersClub = 1, TurboBuildersClub = 2, OutrageousBuildersClub = 3, Premium = 4 },
	HorizontalAlignment = { Center = 0, Left = 1, Right = 2 },
	VerticalAlignment = { Center = 0, Top = 1, Bottom = 2 },
	ScaleType = { Stretch = 0, Slice = 1, Tile = 2, Fit = 3, Crop = 4 },
	DataStoreRequestType = { GetAsync = 0, SetIncrementAsync = 1, UpdateAsync = 2, GetSortedAsync = 3, SetIncrementSortedAsync = 4, OnUpdate = 5 },
	ProximityPromptStyle = { Default = 0, Custom = 1 },
	CoreGuiType = { PlayerList = 0, Health = 1, Backpack = 2, Chat = 3, All = 4, EmotesMenu = 5 },
	Limb = { Head = 0, Torso = 1, LeftArm = 2, RightArm = 3, LeftLeg = 4, RightLeg = 5, Unknown = 6 },
}
local ENUM_ALIAS = { RaycastFilterType = { Blacklist = "Exclude", Whitelist = "Include" } }

local EIMT, ETMT
local Enum = {}
local function enumItemIsA(self, nomeTipo)
	return C.real.tostring(self.EnumType) == nomeTipo
end
EIMT = novoTipo("EnumItem", { IsA = enumItemIsA }, nil, {
	__tostring = function(a) return "Enum." .. C.real.tostring(a.EnumType) .. "." .. a.Name end,
})
local tiposEnum = {}
for nomeTipo, itens in LISTAS do
	local tipoEnum = {}
	local lista = {}
	local mt = {
		__index = function(_, k)
			if k == "GetEnumItems" then
				return function() return table.clone(lista) end
			end
			if k == "FromName" then
				return function(_, nome) return rawget(tipoEnum, nome) end
			end
			if k == "FromValue" then
				return function(_, v)
					for _, it in lista do if it.Value == v then return it end end
					return nil
				end
			end
			local alias = ENUM_ALIAS[nomeTipo] and ENUM_ALIAS[nomeTipo][k]
			if alias then return rawget(tipoEnum, alias) end
			erro(C.real.tostring(k) .. ' is not a valid member of "Enum.' .. nomeTipo .. '"')
		end,
		__newindex = function() erro("attempt to modify a readonly table") end,
		__tostring = function() return nomeTipo end,
		__iter = function()
			erro("attempt to iterate over an Enum value (use :GetEnumItems())")
		end,
	}
	setmetatable(tipoEnum, mt)
	for nome, valor in itens do
		local item = criar(EIMT, "EnumItem", { Name = nome, Value = valor, EnumType = tipoEnum })
		rawset(tipoEnum, nome, item)
		table.insert(lista, item)
	end
	table.sort(lista, function(a, b) return a.Value < b.Value end)
	TIPO[tipoEnum] = "Enum"
	table.freeze(tipoEnum)
	tiposEnum[nomeTipo] = tipoEnum
end
setmetatable(Enum, {
	__index = function(_, k)
		local t = tiposEnum[k]
		if t then return t end
		if k == "GetEnums" then
			return function()
				local r = {}
				for _, v in tiposEnum do table.insert(r, v) end
				return r
			end
		end
		erro(C.real.tostring(k) .. ' is not a valid member of "Enums"')
	end,
	__newindex = function() erro("attempt to modify a readonly table") end,
	__tostring = function() return "Enums" end,
})
TIPO[Enum] = "Enums"
table.freeze(Enum)
C.Enum = Enum
C.tiposEnum = tiposEnum

-- converte para um item do enum: aceita o item, o nome ("Neon") ou o n\xFAmero
function C.paraEnum(nomeTipo: string, v)
	local tipoEnum = tiposEnum[nomeTipo]
	if TIPO[v] == "EnumItem" then
		if v.EnumType == tipoEnum then return v end
		return nil
	end
	if rtype(v) == "string" then return rawget(tipoEnum, v) end
	if rtype(v) == "number" then
		for _, it in tipoEnum:GetEnumItems() do if it.Value == v then return it end end
	end
	return nil
end

-- ============================================================================================
-- TweenInfo
-- ============================================================================================
local TI = {}
local TIMT = novoTipo("TweenInfo", {}, nil, {
	__tostring = function(a)
		return string.format("Time:%s DelayTime:%s RepeatCount:%d Reverses:%s EasingDirection:%s EasingStyle:%s",
			numero6(a.Time), numero6(a.DelayTime), a.RepeatCount, if a.Reverses then "True" else "False", a.EasingDirection.Name, a.EasingStyle.Name)
	end,
})
function TI.new(tempo, estilo, direcao, repeticoes, reverte, atraso)
	return criar(TIMT, "TweenInfo", {
		Time = num(tempo, 1, "new", 1),
		EasingStyle = C.paraEnum("EasingStyle", estilo or "Quad") or tiposEnum.EasingStyle.Quad,
		EasingDirection = C.paraEnum("EasingDirection", direcao or "Out") or tiposEnum.EasingDirection.Out,
		RepeatCount = num(repeticoes, 4, "new", 0),
		Reverses = reverte == true,
		DelayTime = num(atraso, 6, "new", 0),
	})
end
C.TweenInfo = table.freeze(TI)

-- curvas de suaviza\xE7\xE3o (alfa de 0 a 1)
local function easeIn(estilo: string, t: number): number
	if estilo == "Linear" then return t end
	if estilo == "Sine" then return 1 - math.cos(t * math.pi / 2) end
	if estilo == "Quad" then return t * t end
	if estilo == "Cubic" then return t * t * t end
	if estilo == "Quart" then return t ^ 4 end
	if estilo == "Quint" then return t ^ 5 end
	if estilo == "Exponential" then return if t == 0 then 0 else 2 ^ (10 * t - 10) end
	if estilo == "Circular" then return 1 - math.sqrt(1 - t * t) end
	if estilo == "Back" then local s = 1.70158 return t * t * ((s + 1) * t - s) end
	if estilo == "Elastic" then
		if t == 0 or t == 1 then return t end
		return -(2 ^ (10 * t - 10)) * math.sin((t * 10 - 10.75) * (2 * math.pi) / 3)
	end
	if estilo == "Bounce" then
		local u = 1 - t
		local r
		if u < 1 / 2.75 then r = 7.5625 * u * u
		elseif u < 2 / 2.75 then u -= 1.5 / 2.75 r = 7.5625 * u * u + 0.75
		elseif u < 2.5 / 2.75 then u -= 2.25 / 2.75 r = 7.5625 * u * u + 0.9375
		else u -= 2.625 / 2.75 r = 7.5625 * u * u + 0.984375 end
		return 1 - r
	end
	return t
end
function C.suavizar(estilo: string, direcao: string, t: number): number
	t = math.clamp(t, 0, 1)
	if direcao == "In" then return easeIn(estilo, t) end
	if direcao == "Out" then return 1 - easeIn(estilo, 1 - t) end
	if t < 0.5 then return easeIn(estilo, t * 2) / 2 end
	return 1 - easeIn(estilo, (1 - t) * 2) / 2
end

-- interpola dois valores do mesmo tipo (Tween)
function C.interpolar(a, b, alfa: number)
	local t = C.typeof(a)
	if t == "number" then return a + (b - a) * alfa end
	if t == "Vector3" then return a + (b - a) * alfa end
	if t == "Color3" then return a:Lerp(b, alfa) end
	if t == "CFrame" then return a:Lerp(b, alfa) end
	if t == "UDim2" then return a:Lerp(b, alfa) end
	if t == "Vector2" then return a:Lerp(b, alfa) end
	if t == "UDim" then return ud(a.Scale + (b.Scale - a.Scale) * alfa, a.Offset + (b.Offset - a.Offset) * alfa) end
	if alfa >= 1 then return b end
	return a
end

-- ============================================================================================
-- Random (gerador pr\xF3prio, determin\xEDstico com a semente)
-- ============================================================================================
local RND = {}
local RNDMT
local function proximo(estado)
	-- xorshift32 em n\xFAmeros de 32 bits
	local x = estado.s
	x = bit32.bxor(x, bit32.lshift(x, 13))
	x = bit32.bxor(x, bit32.rshift(x, 17))
	x = bit32.bxor(x, bit32.lshift(x, 5))
	estado.s = x
	return x / 4294967296
end
local RNDMETODOS = {}
function RNDMETODOS.NextNumber(self, a, b)
	local u = proximo(self.__estado)
	if a == nil then return u end
	a = num(a, 1, "NextNumber")
	b = num(b, 2, "NextNumber")
	return a + (b - a) * u
end
function RNDMETODOS.NextInteger(self, a, b)
	a = math.floor(num(a, 1, "NextInteger"))
	b = math.floor(num(b, 2, "NextInteger"))
	if a > b then a, b = b, a end
	return a + math.floor(proximo(self.__estado) * (b - a + 1))
end
function RNDMETODOS.NextUnitVector(self)
	local z = proximo(self.__estado) * 2 - 1
	local t = proximo(self.__estado) * 2 * math.pi
	local r = math.sqrt(1 - z * z)
	return v3(r * math.cos(t), r * math.sin(t), z)
end
function RNDMETODOS.Shuffle(self, t)
	for i = #t, 2, -1 do
		local j = 1 + math.floor(proximo(self.__estado) * i)
		t[i], t[j] = t[j], t[i]
	end
end
function RNDMETODOS.Clone(self)
	local r = setmetatable({ __estado = { s = self.__estado.s } }, RNDMT)
	TIPO[r] = "Random"
	return r
end
RNDMT = {
	__index = function(self, k)
		local m = RNDMETODOS[k]
		if m then return m end
		erro(C.real.tostring(k) .. " is not a valid member of Random")
	end,
	__newindex = function(self, k) erro(C.real.tostring(k) .. " cannot be assigned to") end,
	__tostring = function() return "Random" end,
	__metatable = "The metatable is locked",
}
function C.novoRandom(semente: number)
	local s = math.floor(math.abs(semente) % 4294967295)
	if s == 0 then s = 2463534242 end
	local r = setmetatable({ __estado = { s = s } }, RNDMT)
	TIPO[r] = "Random"
	-- descarta os primeiros n\xFAmeros (sementes parecidas \u2192 sequ\xEAncias diferentes)
	for _ = 1, 4 do proximo(r.__estado) end
	return r
end

-- ============================================================================================
-- RaycastParams e OverlapParams (mut\xE1veis)
-- ============================================================================================
local function parametros(nome: string, campos)
	local mod = {}
	function mod.new()
		local dados = table.clone(campos)
		dados.FilterDescendantsInstances = {}
		local obj = setmetatable({}, {
			__index = function(_, k)
				if dados[k] ~= nil or campos[k] ~= nil or k == "FilterDescendantsInstances" then return dados[k] end
				if k == "AddToFilter" then
					return function(_, x)
						if C.typeof(x) == "Instance" then table.insert(dados.FilterDescendantsInstances, x)
						else for _, i in x do table.insert(dados.FilterDescendantsInstances, i) end end
					end
				end
				erro(C.real.tostring(k) .. " is not a valid member of " .. nome)
			end,
			__newindex = function(_, k, v)
				if campos[k] == nil and k ~= "FilterDescendantsInstances" then erro(C.real.tostring(k) .. " is not a valid member of " .. nome) end
				if k == "FilterType" then v = C.paraEnum("RaycastFilterType", v) or tiposEnum.RaycastFilterType.Exclude end
				dados[k] = v
			end,
			__tostring = function() return nome end,
			__metatable = "The metatable is locked",
		})
		TIPO[obj] = nome
		return obj
	end
	return table.freeze(mod)
end
C.RaycastParams = parametros("RaycastParams", {
	FilterType = tiposEnum.RaycastFilterType.Exclude, IgnoreWater = false, CollisionGroup = "Default", RespectCanCollide = false,
})
C.OverlapParams = parametros("OverlapParams", {
	FilterType = tiposEnum.RaycastFilterType.Exclude, MaxParts = 0, CollisionGroup = "Default", RespectCanCollide = false,
})
local RRMT = novoTipo("RaycastResult", {}, nil, { __tostring = function() return "RaycastResult" end })
function C.novoRaycastResult(campos)
	return criar(RRMT, "RaycastResult", campos)
end
`;var ro=`--!nolint
-- Cobra Code \u2014 ambiente Luau (3/8): o agendador de tempo virtual (task.wait, task.spawn, task.delay...), os
-- contextos servidor/cliente e os sinais (eventos) com :Connect, :Once, :Wait e :Disconnect.
--
-- Tempo virtual: nada espera de verdade. O jogo anda em quadros de 1/60 s (W.quadro). task.wait(t) guarda a thread
-- numa fila com o quadro em que ela acorda e a suspende; o la\xE7o do agendador (C.rodarAte) pula direto para o pr\xF3ximo
-- quadro com trabalho \u2014 ou anda quadro a quadro quando h\xE1 algo por quadro (Heartbeat conectado, tweens ativos).
local C, host = ...
local TIPO = C.TIPO
local erro = C.erro
local resume = C.real.resume
local status = C.real.status
local running = C.real.running
local yield = C.real.yield
local create = C.real.create
local rtype = C.real.type

local QPS = 60 -- quadros por segundo
C.QPS = QPS

function C.quadrosDe(t: number): number
	return math.max(1, math.ceil(t * QPS - 1e-9))
end

-- ============================================================================================
-- Fila (heap bin\xE1rio por quadro e ordem de chegada)
-- ============================================================================================
local function menor(a, b)
	if a.q ~= b.q then return a.q < b.q end
	return a.s < b.s
end
local function empurrar(fila, e)
	table.insert(fila, e)
	local i = #fila
	while i > 1 do
		local p = i // 2
		if menor(fila[i], fila[p]) then
			fila[i], fila[p] = fila[p], fila[i]
			i = p
		else
			break
		end
	end
end
local function tirar(fila)
	local n = #fila
	if n == 0 then return nil end
	local topo = fila[1]
	fila[1] = fila[n]
	fila[n] = nil
	n -= 1
	local i = 1
	while true do
		local l, r = i * 2, i * 2 + 1
		local m = i
		if l <= n and menor(fila[l], fila[m]) then m = l end
		if r <= n and menor(fila[r], fila[m]) then m = r end
		if m == i then break end
		fila[i], fila[m] = fila[m], fila[i]
		i = m
	end
	return topo
end

-- ============================================================================================
-- Contextos (servidor ou cliente de um jogador) e threads
-- ============================================================================================
function C.ctxAtual(W)
	return W.ctx[running()] or W.ctxServidor
end

function C.ctxCliente(W, jogador)
	local cache = W.ctxClientes[jogador]
	if not cache then
		cache = { lado = "cliente", jogador = jogador }
		W.ctxClientes[jogador] = cache
	end
	return cache
end

-- registra o primeiro erro e para a simula\xE7\xE3o
function C.registrarErro(W, err, co)
	if C.eMarca(err) then
		if err == C.MARCA_TEMPO then W.motivo = W.motivo or "tempo" end
		if err == C.MARCA_LIMITE then W.motivo = W.motivo or "limite" end
		W.parado = true
		return
	end
	if not W.erro then
		local pilha = ""
		if co then
			local ok, tb = pcall(C.real.traceback, co)
			if ok then pilha = tb end
		end
		W.erro = { valor = err, pilha = pilha, acao = W.acao, t = W.quadro / QPS, origem = W.origemAtual }
	end
	W.parado = true
end

-- retoma uma thread suspensa; erro nela para a simula\xE7\xE3o
function C.retomar(W, co, ...)
	if status(co) ~= "suspended" then return false end
	if W.parado then return false end
	local ant = W.atual
	W.atual = co
	local ok, err = resume(co, ...)
	W.atual = ant
	if not ok then
		C.registrarErro(W, err, co)
		return false
	end
	return true
end

-- cria uma thread para f com o contexto dado e a roda j\xE1 (at\xE9 ela terminar ou esperar)
function C.iniciarThread(W, f, ctx, ...)
	local co = create(f)
	W.ctx[co] = ctx or C.ctxAtual(W)
	C.retomar(W, co, ...)
	return co
end

function C.agendar(W, co, quadro: number, espera: boolean?, ...)
	W.seq += 1
	local e = { q = quadro, s = W.seq, co = co, args = table.pack(...), espera = espera }
	if espera then W.espera[co] = e.s end
	empurrar(W.fila, e)
	return e
end

-- roda tudo o que est\xE1 marcado para o quadro atual (inclusive o que for agendado agora para o mesmo quadro)
function C.processar(W)
	local fila = W.fila
	while not W.parado and fila[1] and fila[1].q <= W.quadro do
		local e = tirar(fila)
		local co = e.co
		if W.cancelados[co] then
			W.cancelados[co] = nil
		elseif e.espera and W.espera[co] ~= e.s then
			-- espera antiga (a thread j\xE1 foi retomada por outro caminho)
		else
			if e.espera then W.espera[co] = nil end
			C.retomar(W, co, table.unpack(e.args, 1, e.args.n))
		end
		if C.real.clock() > C.prazo then
			W.parado = true
			W.motivo = W.motivo or "tempo"
		end
	end
end

-- h\xE1 trabalho por quadro? (eventos de quadro conectados, tweens, movimentos)
local function porQuadro(W): boolean
	for _, proxy in W.sinaisQuadro do
		local s = proxy.__s
		if s.nConexoes > 0 or #s.esperando > 0 then return true end
	end
	return next(W.animacoes) ~= nil
end
C.temTrabalhoPorQuadro = porQuadro

local function passoDeQuadro(W)
	local dt = 1 / QPS
	-- Stepped (antes da f\xEDsica), anima\xE7\xF5es (tweens, movimentos), Heartbeat (depois)
	local rs = W.sinaisQuadro
	if rs.Stepped then C.disparar(rs.Stepped, W.quadro / QPS, dt) end
	if rs.RenderStepped then C.disparar(rs.RenderStepped, dt) end
	for chave, f in W.animacoes do
		if W.parado then break end
		local ok, err = pcall(f, W.quadro)
		if not ok then C.registrarErro(W, err, nil) end
	end
	if rs.PreSimulation then C.disparar(rs.PreSimulation, dt) end
	if rs.PostSimulation then C.disparar(rs.PostSimulation, dt) end
	if rs.Heartbeat then C.disparar(rs.Heartbeat, dt) end
end

-- roda o jogo at\xE9 o quadro limite (ou at\xE9 n\xE3o sobrar trabalho); devolve true se parou no limite com trabalho pendente
function C.rodarAte(W, limite: number)
	C.processar(W)
	while not W.parado do
		local proximo = W.fila[1]
		local cadaQuadro = porQuadro(W)
		local alvo
		if cadaQuadro then
			alvo = W.quadro + 1
		elseif proximo then
			alvo = math.max(proximo.q, W.quadro)
		else
			return false
		end
		if alvo > limite then
			W.quadro = math.max(W.quadro, limite)
			return true
		end
		local mudou = alvo > W.quadro
		W.quadro = alvo
		if mudou and cadaQuadro then passoDeQuadro(W) end
		C.processar(W)
		if C.real.clock() > C.prazo then
			W.parado = true
			W.motivo = W.motivo or "tempo"
		end
	end
	return false
end

-- avan\xE7a exatamente at\xE9 o quadro alvo (o rel\xF3gio termina nele mesmo sem trabalho)
function C.avancarAte(W, alvo: number)
	C.rodarAte(W, alvo)
	if not W.parado and W.quadro < alvo then W.quadro = alvo end
end

function C.temPendencias(W): boolean
	return W.fila[1] ~= nil or porQuadro(W)
end

-- ============================================================================================
-- Biblioteca task (uma por mundo) e as fun\xE7\xF5es antigas wait/spawn/delay
-- ============================================================================================
local function funcaoOuThread(f, nome: string)
	local t = rtype(f)
	if t ~= "function" and t ~= "thread" then
		erro(string.format("invalid argument #1 to '%s' (function or thread expected, got %s)", nome, C.typeof(f)))
	end
end

function C.esperar(W, t: number?): number
	local co = running()
	local inicio = W.quadro
	local q = C.quadrosDe(math.max(0, tonumber(t) or 0))
	C.agendar(W, co, inicio + q, true)
	yield()
	return (W.quadro - inicio) / QPS
end

function C.criarTask(W)
	local task = {}
	function task.wait(t)
		if t ~= nil and rtype(t) ~= "number" then
			if rtype(t) == "string" and tonumber(t) then t = tonumber(t)
			else erro("invalid argument #1 to 'wait' (number expected, got " .. C.typeof(t) .. ")") end
		end
		return C.esperar(W, t)
	end
	function task.spawn(f, ...)
		funcaoOuThread(f, "spawn")
		if rtype(f) == "thread" then
			C.retomar(W, f, ...)
			return f
		end
		return C.iniciarThread(W, f, C.ctxAtual(W), ...)
	end
	function task.defer(f, ...)
		funcaoOuThread(f, "defer")
		local co = if rtype(f) == "thread" then f else create(f)
		W.ctx[co] = W.ctx[co] or C.ctxAtual(W)
		C.agendar(W, co, W.quadro, false, ...)
		return co
	end
	function task.delay(t, f, ...)
		funcaoOuThread(f, "delay")
		local co = if rtype(f) == "thread" then f else create(f)
		W.ctx[co] = W.ctx[co] or C.ctxAtual(W)
		C.agendar(W, co, W.quadro + C.quadrosDe(math.max(0, tonumber(t) or 0)), false, ...)
		return co
	end
	function task.cancel(co)
		if rtype(co) ~= "thread" then erro("invalid argument #1 to 'cancel' (thread expected, got " .. C.typeof(co) .. ")") end
		W.cancelados[co] = true
		W.espera[co] = nil
		if status(co) == "suspended" then pcall(coroutine.close, co) end
	end
	function task.synchronize() end
	function task.desynchronize() end
	table.freeze(task)

	local antigas = {}
	function antigas.wait(t)
		local dt = C.esperar(W, math.max(tonumber(t) or 0, 1 / 30))
		return dt, W.quadro / QPS
	end
	function antigas.spawn(f)
		funcaoOuThread(f, "spawn")
		local co = create(function(...)
			f(...)
		end)
		W.ctx[co] = C.ctxAtual(W)
		C.agendar(W, co, W.quadro + 2, false, 0, W.quadro / QPS)
	end
	function antigas.delay(t, f)
		funcaoOuThread(f, "delay")
		local co = create(f)
		W.ctx[co] = C.ctxAtual(W)
		C.agendar(W, co, W.quadro + C.quadrosDe(math.max(tonumber(t) or 0, 1 / 30)), false)
	end
	return task, antigas
end

-- coroutine com o contexto herdado (threads criadas por um LocalScript continuam no cliente)
function C.criarCoroutine(W)
	local co = table.clone(coroutine)
	co.create = function(f)
		local t = create(f)
		W.ctx[t] = C.ctxAtual(W)
		return t
	end
	co.wrap = function(f)
		local t = create(f)
		W.ctx[t] = C.ctxAtual(W)
		return function(...)
			local r = table.pack(resume(t, ...))
			if not r[1] then error(r[2], 0) end
			return table.unpack(r, 2, r.n)
		end
	end
	return table.freeze(co)
end

-- ============================================================================================
-- Sinais (RBXScriptSignal) e conex\xF5es (RBXScriptConnection)
-- ============================================================================================
local SINAL = {}
local CONEXAO = {}
local dadosConexao = setmetatable({}, { __mode = "k" })

local CONEXAO_MT = {
	__index = function(self, k)
		local d = dadosConexao[self]
		if k == "Connected" then return d.conectada end
		if k == "Disconnect" or k == "disconnect" then return CONEXAO.Disconnect end
		erro(C.real.tostring(k) .. " is not a valid member of RBXScriptConnection")
	end,
	__newindex = function(self, k) erro(C.real.tostring(k) .. " cannot be assigned to") end,
	__tostring = function() return "Connection" end,
	__metatable = "The metatable is locked",
}

function CONEXAO.Disconnect(self)
	local d = dadosConexao[self]
	if not d then erro("Expected ':' not '.' calling member function Disconnect") end
	if not d.conectada then return end
	d.conectada = false
	local s = d.sinal
	local i = table.find(s.conexoes, d)
	if i then table.remove(s.conexoes, i) end
	s.nConexoes = #s.conexoes
end

local function argSinal(self, nome: string)
	if rtype(self) ~= "table" or TIPO[self] ~= "RBXScriptSignal" then
		erro("Expected ':' not '.' calling member function " .. nome)
	end
end

local function conectar(self, f, uma: boolean)
	local s = self.__s
	if rtype(f) ~= "function" then erro("Attempt to connect failed: Passed value is not a function") end
	local W = s.W
	if s.lado then
		local ctx = C.ctxAtual(W)
		if ctx.lado ~= s.lado then
			erro(s.nome .. " can only be used on the " .. (if s.lado == "servidor" then "server" else "client"))
		end
	end
	local d = { f = f, conectada = true, uma = uma, sinal = s, ctx = C.ctxAtual(W) }
	local con = setmetatable({}, CONEXAO_MT)
	TIPO[con] = "RBXScriptConnection"
	dadosConexao[con] = d
	d.proxy = con
	table.insert(s.conexoes, d)
	s.nConexoes = #s.conexoes
	if s.aoConectar then s.aoConectar(d) end
	return con
end

function SINAL.Connect(self, f)
	argSinal(self, "Connect")
	return conectar(self, f, false)
end
SINAL.connect = SINAL.Connect
SINAL.ConnectParallel = SINAL.Connect
function SINAL.Once(self, f)
	argSinal(self, "Once")
	return conectar(self, f, true)
end
function SINAL.Wait(self)
	argSinal(self, "Wait")
	local s = self.__s
	local co = running()
	table.insert(s.esperando, co)
	return yield()
end
SINAL.wait = SINAL.Wait

local SINAL_MT = {
	__index = function(self, k)
		local m = SINAL[k]
		if m then return m end
		erro(C.real.tostring(k) .. " is not a valid member of RBXScriptSignal")
	end,
	__newindex = function(self, k) erro(C.real.tostring(k) .. " cannot be assigned to") end,
	__tostring = function(self) return "Signal " .. self.__s.nome end,
}

-- cria um sinal. opcoes: {lado = "servidor"|"cliente" (s\xF3 pode conectar nesse lado), aoConectar = fun\xE7\xE3o}
function C.novoSinal(W, nome: string, opcoes)
	local s = { W = W, nome = nome, conexoes = {}, esperando = {}, nConexoes = 0 }
	if opcoes then
		s.lado = opcoes.lado
		s.aoConectar = opcoes.aoConectar
	end
	local proxy = setmetatable({ __s = s }, SINAL_MT)
	TIPO[proxy] = "RBXScriptSignal"
	s.proxy = proxy
	table.freeze(proxy)
	return proxy
end

function C.dadosSinal(proxy)
	return proxy.__s
end

-- dispara: cada conex\xE3o roda numa thread nova (j\xE1, antes de disparar voltar), com o contexto de quem conectou.
-- filtro(conexao) \u2192 false pula a conex\xE3o (RemoteEvent:FireClient s\xF3 chega no cliente daquele jogador)
function C.dispararFiltrado(proxy, filtro, ...)
	local s = proxy.__s
	local W = s.W
	if W.parado then return end
	if s.nConexoes > 0 then
		local lista = table.clone(s.conexoes)
		for _, d in lista do
			if W.parado then break end
			if d.conectada and (not filtro or filtro(d)) then
				if d.uma then
					d.conectada = false
					local i = table.find(s.conexoes, d)
					if i then table.remove(s.conexoes, i) end
					s.nConexoes = #s.conexoes
				end
				C.iniciarThread(W, d.f, d.ctx, ...)
			end
		end
	end
	if #s.esperando > 0 then
		local esperando = s.esperando
		local restantes = {}
		s.esperando = restantes
		for _, co in esperando do
			if W.parado then break end
			local ctx = W.ctx[co] or W.ctxServidor
			if filtro and not filtro({ ctx = ctx }) then
				table.insert(restantes, co)
			else
				C.retomar(W, co, ...)
			end
		end
	end
end

function C.disparar(proxy, ...)
	C.dispararFiltrado(proxy, nil, ...)
end

function C.desconectarTodos(proxy)
	local s = proxy.__s
	for _, d in s.conexoes do d.conectada = false end
	table.clear(s.conexoes)
	s.nConexoes = 0
	table.clear(s.esperando)
end
`;var ao=`--!nolint
-- Cobra Code \u2014 ambiente Luau (4/8): o sistema de Instances do Roblox simulado.
--
-- Cada Instance \xE9 uma tabela vazia (o "proxy") com uma metatabela trancada; os dados ficam num registro interno
-- (C.DADOS[proxy] = rec). inst.X procura, nesta ordem: propriedade, m\xE9todo, evento e filho chamado X \u2014 como no
-- Roblox \u2014 e sen\xE3o d\xE1 o erro "X is not a valid member of Part "Workspace.Part"".
local C, host = ...
local TIPO = C.TIPO
local erro = C.erro
local rtype = C.real.type
local running = C.real.running
local yield = C.real.yield

local DADOS = setmetatable({}, { __mode = "k" })
C.DADOS = DADOS
local CLASSES = {}
C.CLASSES = CLASSES

-- ============================================================================================
-- Classes
-- ============================================================================================
-- def: {criavel, servico, props = {Nome = {tipo, padrao, so, get, set}}, metodos = {}, eventos = {"Touched"},
--       ladoEventos = {OnServerEvent = "servidor"}, iniciar = function(rec) end, quadro = "Heartbeat"...}
function C.classe(nome: string, base: string?, def)
	def = def or {}
	local pai = base and CLASSES[base]
	if base and not pai then error("classe base desconhecida: " .. base) end
	local cls = {
		nome = nome, base = pai, criavel = def.criavel == true, servico = def.servico == true,
		props = {}, metodos = {}, eventos = {}, ladoEventos = {}, isa = { [nome] = true }, iniciadores = {},
		padroes = {}, ordemProps = {},
	}
	if pai then
		for k, v in pai.props do cls.props[k] = v end
		for k, v in pai.metodos do cls.metodos[k] = v end
		for k, v in pai.eventos do cls.eventos[k] = v end
		for k, v in pai.ladoEventos do cls.ladoEventos[k] = v end
		for k in pai.isa do cls.isa[k] = true end
		for _, f in pai.iniciadores do table.insert(cls.iniciadores, f) end
		for _, k in pai.ordemProps do table.insert(cls.ordemProps, k) end
	end
	for k, p in def.props or {} do
		if cls.props[k] == nil then table.insert(cls.ordemProps, k) end
		cls.props[k] = p
	end
	for k, f in def.metodos or {} do cls.metodos[k] = f end
	for _, e in def.eventos or {} do cls.eventos[e] = true end
	for k, v in def.ladoEventos or {} do cls.ladoEventos[k] = v end
	if def.iniciar then table.insert(cls.iniciadores, def.iniciar) end
	CLASSES[nome] = cls
	return cls
end

-- ============================================================================================
-- Tipos das propriedades
-- ============================================================================================
local NOMES_TIPO = { number = "number", int = "int", string = "string", boolean = "bool", any = "Variant" }

local function converter(tipo: string, v, prop: string)
	if tipo == "any" then return v end
	local t = rtype(v)
	if tipo == "number" then
		if t == "number" then return v end
		if t == "string" and tonumber(v) then return tonumber(v) end
	elseif tipo == "int" then
		if t == "number" then
			if v ~= v or v == math.huge or v == -math.huge then return 0 end
			return if v >= 0 then math.floor(v + 0.5) else -math.floor(-v + 0.5)
		end
		if t == "string" and tonumber(v) then return math.floor((tonumber(v) :: number) + 0.5) end
	elseif tipo == "string" then
		if t == "string" then return v end
		if t == "number" then return C.numeroTexto(v) end
	elseif tipo == "boolean" then
		if t == "boolean" then return v end
	elseif tipo == "Vector3" then
		if t == "vector" then return v end
	elseif tipo == "function" then
		if t == "function" or v == nil then return v end
	elseif string.sub(tipo, 1, 8) == "Instance" then
		if v == nil then return nil end
		local r = DADOS[v]
		if r then
			local classe = string.sub(tipo, 10)
			if classe == "" or r.classe.isa[classe] then return v end
			erro(string.format("Unable to assign property %s. %s expected, got %s", prop, classe, r.classe.nome))
		end
		erro(string.format("Unable to assign property %s. Instance expected, got %s", prop, C.typeof(v)))
	elseif string.sub(tipo, 1, 9) == "EnumItem:" then
		local nomeEnum = string.sub(tipo, 10)
		local it = C.paraEnum(nomeEnum, v)
		if it then return it end
		erro(string.format("Unable to assign property %s. Enum.%s expected, got %s", prop, nomeEnum, C.typeof(v)))
	else
		if C.typeof(v) == tipo then return v end
	end
	erro(string.format("Unable to assign property %s. %s expected, got %s", prop, NOMES_TIPO[tipo] or tipo, C.typeof(v)))
	return nil
end
C.converter = converter

-- ============================================================================================
-- Registro, nome completo e eventos
-- ============================================================================================
local function recDe(v)
	return DADOS[v]
end
C.recDe = recDe

function C.eInstancia(v): boolean
	return DADOS[v] ~= nil
end

function C.nomeCompleto(rec): string
	local partes = {}
	local r = rec
	local n = 0
	while r and n < 100 do
		if r.classe.nome == "DataModel" then break end
		table.insert(partes, 1, r.nome)
		r = r.pai and DADOS[r.pai]
		n += 1
	end
	return table.concat(partes, ".")
end

local function sinalDe(rec, nome: string)
	local s = rec.sinais[nome]
	if not s then
		local lado = rec.classe.ladoEventos[nome]
		s = C.novoSinal(rec.W, nome, lado and { lado = lado } or nil)
		rec.sinais[nome] = s
	end
	return s
end
C.sinalDe = sinalDe

-- dispara um evento da inst\xE2ncia (s\xF3 se algu\xE9m j\xE1 pediu o sinal)
local function evento(rec, nome: string, ...)
	local s = rec.sinais[nome]
	if s then C.disparar(s, ...) end
end
C.evento = evento

local function mudou(rec, prop: string)
	if rec.silencioso then return end
	local s = rec.sinais.Changed
	if s then
		if rec.classe.isa.ValueBase and prop == "Value" then C.disparar(s, rec.props.Value)
		else C.disparar(s, prop) end
	end
	local sp = rec.sinaisProp[prop]
	if sp then C.disparar(sp) end
end
C.mudou = mudou

-- grava uma propriedade (sem conferir tipo) e avisa quem escuta
function C.gravar(rec, prop: string, v)
	if rec.props[prop] == v then return end
	rec.props[prop] = v
	mudou(rec, prop)
end

-- ============================================================================================
-- O proxy
-- ============================================================================================
local INST_MT = {}
INST_MT.__index = function(proxy, k)
	local rec = DADOS[proxy]
	local cls = rec.classe
	local p = cls.props[k]
	if p then
		if p.get then return p.get(rec) end
		return rec.props[k]
	end
	local m = cls.metodos[k]
	if m ~= nil then return m end
	if cls.eventos[k] then return sinalDe(rec, k) end
	if rtype(k) == "string" then
		for _, f in rec.filhos do
			if DADOS[f].nome == k then return f end
		end
	end
	erro(string.format('%s is not a valid member of %s "%s"', C.real.tostring(k), cls.nome, C.nomeCompleto(rec)))
end
INST_MT.__newindex = function(proxy, k, v)
	local rec = DADOS[proxy]
	local cls = rec.classe
	local p = cls.props[k]
	if not p then
		if cls.metodos[k] ~= nil or cls.eventos[k] then
			erro(string.format("%s is not a valid member of %s or cannot be assigned to", C.real.tostring(k), cls.nome))
		end
		erro(string.format('%s is not a valid member of %s "%s"', C.real.tostring(k), cls.nome, C.nomeCompleto(rec)))
	end
	if p.so then erro("Unable to assign property " .. k .. ". Property is read only") end
	v = converter(p.tipo or "any", v, k)
	if p.set then
		p.set(rec, v)
	elseif rec.props[k] ~= v then
		rec.props[k] = v
		mudou(rec, k)
	end
end
INST_MT.__tostring = function(proxy)
	return DADOS[proxy].nome
end
INST_MT.__metatable = "The metatable is locked"
INST_MT.__iter = function()
	erro("attempt to iterate over an Instance value")
end
INST_MT.__len = function()
	erro("attempt to get length of an Instance value")
end

-- cria uma inst\xE2ncia (sem pai). opcoes.semIniciar: n\xE3o roda os iniciadores (Clone)
function C.novaInstancia(W, nomeClasse: string, opcoes)
	local cls = CLASSES[nomeClasse]
	if not cls then erro('Unable to create an Instance of type "' .. C.real.tostring(nomeClasse) .. '"') end
	local proxy = setmetatable({}, INST_MT)
	TIPO[proxy] = "Instance"
	local rec = {
		proxy = proxy, classe = cls, W = W, nome = nomeClasse, pai = nil, filhos = {}, props = {},
		sinais = {}, sinaisProp = {}, sinaisAtrib = {}, atributos = {}, tags = {}, destruido = false, travado = false,
	}
	DADOS[proxy] = rec
	for _, k in cls.ordemProps do
		local p = cls.props[k]
		if p.padrao ~= nil and not p.get then
			local v = p.padrao
			if rtype(v) == "function" then v = v(rec) end
			rec.props[k] = v
		end
	end
	if not (opcoes and opcoes.semIniciar) then
		for _, f in cls.iniciadores do f(rec) end
	end
	W.nInstancias += 1
	return proxy, rec
end

-- ============================================================================================
-- Parent: muda o pai, com os eventos (ChildAdded, DescendantAdded, AncestryChanged...)
-- ============================================================================================
local function descendentes(rec, lista)
	for _, f in rec.filhos do
		table.insert(lista, f)
		descendentes(DADOS[f], lista)
	end
	return lista
end
C.descendentes = descendentes

local function eAncestral(possivel, rec): boolean
	local r = rec.pai and DADOS[rec.pai]
	local n = 0
	while r and n < 10000 do
		if r == possivel then return true end
		r = r.pai and DADOS[r.pai]
		n += 1
	end
	return false
end
C.eAncestral = eAncestral

local function noJogo(rec): boolean
	local r = rec
	local n = 0
	while r and n < 10000 do
		if r.classe.nome == "DataModel" then return true end
		r = r.pai and DADOS[r.pai]
		n += 1
	end
	return false
end
C.noJogo = noJogo

function C.reparentar(rec, novoProxy, forcar: boolean?)
	if rec.travado and not forcar then
		local atual = if rec.pai then DADOS[rec.pai].nome else "NULL"
		local novoNome = if novoProxy and DADOS[novoProxy] then DADOS[novoProxy].nome else "NULL"
		erro(string.format("The Parent property of %s is locked, current parent: %s, new parent %s", rec.nome, atual, novoNome))
	end
	local novo = novoProxy and DADOS[novoProxy]
	if novoProxy ~= nil and not novo then
		erro("Unable to assign property Parent. Instance expected, got " .. C.typeof(novoProxy))
	end
	if novo == rec then erro("Attempt to set " .. C.nomeCompleto(rec) .. " as its own parent") end
	if novo and eAncestral(rec, novo) then
		erro(string.format("Attempt to set parent of %s to %s would result in circular reference", C.nomeCompleto(rec), C.nomeCompleto(novo)))
	end
	if rec.pai == novoProxy then return end
	local proxy = rec.proxy
	local antigo = rec.pai and DADOS[rec.pai]
	local estavaNoJogo = noJogo(rec)
	local subarvore = descendentes(rec, { proxy })
	if antigo then
		-- DescendantRemoving nos ancestrais antigos
		local a = antigo
		local n = 0
		while a and n < 10000 do
			if a.sinais.DescendantRemoving then
				for _, d in subarvore do evento(a, "DescendantRemoving", d) end
			end
			a = a.pai and DADOS[a.pai]
			n += 1
		end
		local i = table.find(antigo.filhos, proxy)
		if i then table.remove(antigo.filhos, i) end
	end
	rec.pai = novoProxy
	if novo then table.insert(novo.filhos, proxy) end
	if antigo then evento(antigo, "ChildRemoved", proxy) end
	if novo then
		evento(novo, "ChildAdded", proxy)
		local a = novo
		local n = 0
		while a and n < 10000 do
			if a.sinais.DescendantAdded then
				for _, d in subarvore do evento(a, "DescendantAdded", d) end
			end
			a = a.pai and DADOS[a.pai]
			n += 1
		end
		-- quem esperava este filho (WaitForChild)
		if novo.esperandoFilho then
			local lista = novo.esperandoFilho
			novo.esperandoFilho = nil
			local resto = {}
			for _, e in lista do
				if e.nome == rec.nome and not e.feito then
					e.feito = true
					rec.W.espera[e.co] = nil
					C.retomar(rec.W, e.co, proxy)
				elseif not e.feito then
					table.insert(resto, e)
				end
			end
			if #resto > 0 then
				novo.esperandoFilho = novo.esperandoFilho or {}
				for _, e in resto do table.insert(novo.esperandoFilho, e) end
			end
		end
	end
	for _, d in subarvore do
		local r = DADOS[d]
		if r.sinais.AncestryChanged then evento(r, "AncestryChanged", proxy, novoProxy) end
	end
	mudou(rec, "Parent")
	local agoraNoJogo = noJogo(rec)
	if estavaNoJogo ~= agoraNoJogo and rec.W.aoMudarJogo then
		rec.W.aoMudarJogo(subarvore, agoraNoJogo)
	end
	if rec.classe.aoMudarPai then rec.classe.aoMudarPai(rec, antigo, novo) end
end

-- ============================================================================================
-- M\xE9todos de toda Instance
-- ============================================================================================
local function eu(self, metodo: string)
	local rec = DADOS[self]
	if not rec then erro("Expected ':' not '.' calling member function " .. metodo) end
	return rec
end
C.eu = eu

local function argTexto(v, i: number, metodo: string)
	if rtype(v) ~= "string" then
		if v == nil then erro("Argument " .. i .. " missing or nil") end
		erro(string.format("invalid argument #%d to '%s' (string expected, got %s)", i, metodo, C.typeof(v)))
	end
	return v
end

local M = {}
C.metodosInstance = M

function M.FindFirstChild(self, nome, recursivo)
	local rec = eu(self, "FindFirstChild")
	argTexto(nome, 1, "FindFirstChild")
	for _, f in rec.filhos do
		if DADOS[f].nome == nome then return f end
	end
	if recursivo then
		for _, f in rec.filhos do
			local r = M.FindFirstChild(f, nome, true)
			if r then return r end
		end
	end
	return nil
end
function M.FindFirstChildOfClass(self, classe)
	local rec = eu(self, "FindFirstChildOfClass")
	argTexto(classe, 1, "FindFirstChildOfClass")
	for _, f in rec.filhos do
		if DADOS[f].classe.nome == classe then return f end
	end
	return nil
end
function M.FindFirstChildWhichIsA(self, classe, recursivo)
	local rec = eu(self, "FindFirstChildWhichIsA")
	argTexto(classe, 1, "FindFirstChildWhichIsA")
	for _, f in rec.filhos do
		if DADOS[f].classe.isa[classe] then return f end
	end
	if recursivo then
		for _, f in rec.filhos do
			local r = M.FindFirstChildWhichIsA(f, classe, true)
			if r then return r end
		end
	end
	return nil
end
function M.FindFirstDescendant(self, nome)
	return M.FindFirstChild(self, nome, true)
end
function M.FindFirstAncestor(self, nome)
	local rec = eu(self, "FindFirstAncestor")
	local r = rec.pai and DADOS[rec.pai]
	while r do
		if r.nome == nome then return r.proxy end
		r = r.pai and DADOS[r.pai]
	end
	return nil
end
function M.FindFirstAncestorOfClass(self, classe)
	local rec = eu(self, "FindFirstAncestorOfClass")
	local r = rec.pai and DADOS[rec.pai]
	while r do
		if r.classe.nome == classe then return r.proxy end
		r = r.pai and DADOS[r.pai]
	end
	return nil
end
function M.FindFirstAncestorWhichIsA(self, classe)
	local rec = eu(self, "FindFirstAncestorWhichIsA")
	local r = rec.pai and DADOS[rec.pai]
	while r do
		if r.classe.isa[classe] then return r.proxy end
		r = r.pai and DADOS[r.pai]
	end
	return nil
end
function M.WaitForChild(self, nome, tempoMax)
	local rec = eu(self, "WaitForChild")
	argTexto(nome, 1, "WaitForChild")
	local f = M.FindFirstChild(self, nome)
	if f then return f end
	local W = rec.W
	local co = running()
	local e = { nome = nome, co = co, feito = false }
	rec.esperandoFilho = rec.esperandoFilho or {}
	table.insert(rec.esperandoFilho, e)
	if tempoMax ~= nil then
		local q = W.quadro + C.quadrosDe(tonumber(tempoMax) or 0)
		C.agendar(W, co, q, true, nil)
		local r = yield()
		e.feito = true
		return r
	end
	-- sem tempo m\xE1ximo: aviso de "Infinite yield possible" depois de 5 s, como no Roblox
	local aviso = coroutine.create(function()
		if not e.feito then
			C.escrever(W, string.format('Infinite yield possible on \\'%s:WaitForChild("%s")\\'', C.nomeCompleto(rec), nome), "warn")
		end
	end)
	W.ctx[aviso] = W.ctxServidor
	C.agendar(W, aviso, W.quadro + 5 * C.QPS, false)
	local r = yield()
	e.feito = true
	return r
end
function M.GetChildren(self)
	local rec = eu(self, "GetChildren")
	return table.clone(rec.filhos)
end
M.getChildren = M.GetChildren
M.children = M.GetChildren
function M.GetDescendants(self)
	local rec = eu(self, "GetDescendants")
	return descendentes(rec, {})
end
function M.IsA(self, classe)
	local rec = eu(self, "IsA")
	return rec.classe.isa[classe] == true
end
M.isA = M.IsA
function M.IsDescendantOf(self, outro)
	local rec = eu(self, "IsDescendantOf")
	local o = DADOS[outro]
	if not o then return false end
	return eAncestral(o, rec)
end
function M.IsAncestorOf(self, outro)
	local rec = eu(self, "IsAncestorOf")
	local o = DADOS[outro]
	if not o then return false end
	return eAncestral(rec, o)
end
function M.GetFullName(self)
	return C.nomeCompleto(eu(self, "GetFullName"))
end
function M.ClearAllChildren(self)
	local rec = eu(self, "ClearAllChildren")
	for _, f in table.clone(rec.filhos) do
		if not DADOS[f].protegido then M.Destroy(f) end
	end
end

local function destruir(rec)
	if rec.destruido then return end
	evento(rec, "Destroying")
	for _, f in table.clone(rec.filhos) do destruir(DADOS[f]) end
	if rec.pai then C.reparentar(rec, nil, true) end
	rec.travado = true
	rec.destruido = true
	if rec.classe.aoDestruir then rec.classe.aoDestruir(rec) end
	for _, s in rec.sinais do C.desconectarTodos(s) end
	for _, s in rec.sinaisProp do C.desconectarTodos(s) end
	for _, s in rec.sinaisAtrib do C.desconectarTodos(s) end
end
C.destruir = destruir

function M.Destroy(self)
	local rec = eu(self, "Destroy")
	if rec.protegido then
		erro("The Parent property of " .. rec.nome .. " is locked, current parent: " .. (if rec.pai then DADOS[rec.pai].nome else "NULL") .. ", new parent NULL")
	end
	destruir(rec)
end
M.destroy = M.Destroy
M.Remove = function(self)
	local rec = eu(self, "Remove")
	C.reparentar(rec, nil)
end

local function clonar(rec, mapa)
	if rec.props.Archivable == false then return nil end
	if rec.classe.naoClonavel then return nil end
	local proxy, novo = C.novaInstancia(rec.W, rec.classe.nome, { semIniciar = true })
	mapa[rec.proxy] = proxy
	novo.nome = rec.nome
	for k, v in rec.props do novo.props[k] = v end
	for k, v in rec.atributos do novo.atributos[k] = v end
	for k, v in rec.tags do novo.tags[k] = v end
	if rec.classe.aoClonar then rec.classe.aoClonar(rec, novo) end
	for _, f in rec.filhos do
		local c = clonar(DADOS[f], mapa)
		if c then
			local cr = DADOS[c]
			cr.pai = proxy
			table.insert(novo.filhos, c)
		end
	end
	return proxy
end
function M.Clone(self)
	local rec = eu(self, "Clone")
	local mapa = {}
	local c = clonar(rec, mapa)
	if not c then return nil end
	-- refer\xEAncias dentro da \xE1rvore clonada apontam para os clones (ex.: Model.PrimaryPart)
	for original, copia in mapa do
		local r = DADOS[copia]
		for k, v in r.props do
			if mapa[v] and k ~= "Parent" then r.props[k] = mapa[v] end
		end
		if r.classe.depoisDeClonar then r.classe.depoisDeClonar(DADOS[original], r, mapa) end
	end
	return c
end
M.clone = M.Clone

-- atributos
local TIPOS_ATRIBUTO = {
	["nil"] = true, boolean = true, number = true, string = true, Vector3 = true, Vector2 = true, Color3 = true,
	BrickColor = true, UDim = true, UDim2 = true, CFrame = true, NumberRange = true, EnumItem = true,
	NumberSequence = true, ColorSequence = true,
}
function M.SetAttribute(self, nome, valor)
	local rec = eu(self, "SetAttribute")
	argTexto(nome, 1, "SetAttribute")
	if #nome > 100 then erro("Attribute name too long (max 100 characters)") end
	if not string.match(nome, "^[%w_]+$") then erro("Attribute names can only contain alphanumeric characters and underscores") end
	if string.sub(nome, 1, 3) == "RBX" then erro("Attribute names starting with \\"RBX\\" are reserved") end
	local t = C.typeof(valor)
	if not TIPOS_ATRIBUTO[t] then erro(t .. " is not a supported attribute type") end
	if rec.atributos[nome] == valor then return end
	rec.atributos[nome] = valor
	evento(rec, "AttributeChanged", nome)
	local s = rec.sinaisAtrib[nome]
	if s then C.disparar(s) end
end
function M.GetAttribute(self, nome)
	local rec = eu(self, "GetAttribute")
	argTexto(nome, 1, "GetAttribute")
	return rec.atributos[nome]
end
function M.GetAttributes(self)
	local rec = eu(self, "GetAttributes")
	return table.clone(rec.atributos)
end
function M.GetAttributeChangedSignal(self, nome)
	local rec = eu(self, "GetAttributeChangedSignal")
	argTexto(nome, 1, "GetAttributeChangedSignal")
	local s = rec.sinaisAtrib[nome]
	if not s then
		s = C.novoSinal(rec.W, "AttributeChanged:" .. nome)
		rec.sinaisAtrib[nome] = s
	end
	return s
end
function M.GetPropertyChangedSignal(self, prop)
	local rec = eu(self, "GetPropertyChangedSignal")
	argTexto(prop, 1, "GetPropertyChangedSignal")
	if not rec.classe.props[prop] then erro(prop .. " is not a valid property name.") end
	local s = rec.sinaisProp[prop]
	if not s then
		s = C.novoSinal(rec.W, prop .. "Changed")
		rec.sinaisProp[prop] = s
	end
	return s
end

-- tags (CollectionService)
function M.AddTag(self, tag)
	local rec = eu(self, "AddTag")
	argTexto(tag, 1, "AddTag")
	if rec.tags[tag] then return end
	rec.tags[tag] = true
	if rec.W.aoMudarTag then rec.W.aoMudarTag(rec, tag, true) end
end
function M.RemoveTag(self, tag)
	local rec = eu(self, "RemoveTag")
	if not rec.tags[tag] then return end
	rec.tags[tag] = nil
	if rec.W.aoMudarTag then rec.W.aoMudarTag(rec, tag, false) end
end
function M.HasTag(self, tag)
	return eu(self, "HasTag").tags[tag] == true
end
function M.GetTags(self)
	local rec = eu(self, "GetTags")
	local r = {}
	for t in rec.tags do table.insert(r, t) end
	table.sort(r)
	return r
end
function M.GetActor(self) return nil end
function M.IsPropertyModified(self, prop) return false end
function M.GetDebugId(self) return C.endereco(self) end

-- ============================================================================================
-- Classe base
-- ============================================================================================
C.classe("Instance", nil, {
	props = {
		Name = {
			tipo = "string",
			get = function(rec) return rec.nome end,
			set = function(rec, v)
				if rec.nome == v then return end
				if rec.protegidoNome then erro("Unable to assign property Name. Property is read only") end
				rec.nome = v
				mudou(rec, "Name")
			end,
		},
		Parent = {
			tipo = "Instance",
			get = function(rec) return rec.pai end,
			set = function(rec, v)
				if rec.protegido then
					erro("The Parent property of " .. rec.nome .. " is locked, current parent: " .. (if rec.pai then DADOS[rec.pai].nome else "NULL") .. ", new parent " .. (if v then DADOS[v].nome else "NULL"))
				end
				C.reparentar(rec, v)
			end,
		},
		ClassName = { so = true, get = function(rec) return rec.classe.nome end },
		Archivable = { tipo = "boolean", padrao = true },
	},
	metodos = M,
	eventos = { "Changed", "ChildAdded", "ChildRemoved", "DescendantAdded", "DescendantRemoving", "AncestryChanged", "Destroying", "AttributeChanged" },
})
`;var io=`--!nolint
-- Cobra Code \u2014 ambiente Luau (5/8): as classes do Roblox (Part, Model, valores, Humanoid, eventos remotos, Tool,
-- interface...). N\xE3o h\xE1 f\xEDsica: pe\xE7as n\xE3o caem nem colidem; for\xE7as e velocidades s\xF3 guardam os valores.
local C, host = ...
local DADOS = C.DADOS
local erro = C.erro
local classe = C.classe
local mudou = C.mudou
local evento = C.evento
local eu = C.eu
local rtype = C.real.type
local running = C.real.running
local yield = C.real.yield
local v3 = C.v3
local c3 = C.c3
local cf = C.cf
local Enum = C.Enum
local CF = C.CFrame

local function rgb(r, g, b) return c3(r / 255, g / 255, b / 255) end
C.rgb = rgb

-- roda f numa thread nova daqui a t segundos (tempo virtual)
function C.depois(W, t: number, f, ...)
	local co = coroutine.create(f)
	W.ctx[co] = W.ctxServidor
	C.agendar(W, co, W.quadro + C.quadrosDe(t), false, ...)
	return co
end

-- classe simples: s\xF3 propriedades (e eventos)
local function bolsa(nome: string, base: string, props, extra)
	local def = { criavel = true, props = props or {} }
	if extra then for k, v in extra do def[k] = v end end
	return classe(nome, base, def)
end

-- ============================================================================================
-- PVInstance e BasePart (posi\xE7\xE3o, tamanho, cor, material, Touched) e soldas sem f\xEDsica
-- ============================================================================================
classe("PVInstance", "Instance", {})

local function rotacaoIgual(a, b)
	return a.R00 == b.R00 and a.R01 == b.R01 and a.R02 == b.R02 and a.R10 == b.R10 and a.R11 == b.R11
		and a.R12 == b.R12 and a.R20 == b.R20 and a.R21 == b.R21 and a.R22 == b.R22
end

-- move a pe\xE7a (e o que est\xE1 soldado a ela)
local function moverParte(rec, novo, visitados)
	local antigo = rec.props.CFrame
	if antigo == novo then return end
	rec.props.CFrame = novo
	if not rec.silencioso then
		mudou(rec, "CFrame")
		if antigo.X ~= novo.X or antigo.Y ~= novo.Y or antigo.Z ~= novo.Z then mudou(rec, "Position") end
		if not rotacaoIgual(antigo, novo) then mudou(rec, "Orientation") end
	end
	if rec.soldas and not rec.semSoldas then
		visitados = visitados or { [rec] = true }
		for outro, off in rec.soldas do
			if not visitados[outro] then
				visitados[outro] = true
				moverParte(outro, novo * off, visitados)
			end
		end
	end
end
C.moverParte = moverParte

function C.soldar(a, b)
	local off = a.props.CFrame:Inverse() * b.props.CFrame
	a.soldas = a.soldas or {}
	b.soldas = b.soldas or {}
	a.soldas[b] = off
	b.soldas[a] = off:Inverse()
end
function C.dessoldar(a, b)
	if a.soldas then a.soldas[b] = nil end
	if b.soldas then b.soldas[a] = nil end
end

local function orientacaoDe(c)
	local rx, ry, rz = c:ToOrientation()
	return v3(math.deg(rx), math.deg(ry), math.deg(rz))
end

local CINZA = rgb(163, 162, 165)

classe("BasePart", "PVInstance", {
	props = {
		CFrame = {
			tipo = "CFrame", padrao = CF.identity,
			set = function(rec, v) moverParte(rec, v) end,
		},
		Position = {
			tipo = "Vector3",
			get = function(rec) return rec.props.CFrame.Position end,
			set = function(rec, v)
				local c = rec.props.CFrame
				moverParte(rec, cf(v.x, v.y, v.z, c.R00, c.R01, c.R02, c.R10, c.R11, c.R12, c.R20, c.R21, c.R22))
			end,
		},
		Orientation = {
			tipo = "Vector3",
			get = function(rec) return orientacaoDe(rec.props.CFrame) end,
			set = function(rec, v)
				local p = rec.props.CFrame.Position
				moverParte(rec, CF.new(p) * CF.fromOrientation(math.rad(v.x), math.rad(v.y), math.rad(v.z)))
			end,
		},
		Rotation = {
			tipo = "Vector3",
			get = function(rec)
				local rx, ry, rz = rec.props.CFrame:ToEulerAnglesXYZ()
				return v3(math.deg(rx), math.deg(ry), math.deg(rz))
			end,
			set = function(rec, v)
				local p = rec.props.CFrame.Position
				moverParte(rec, CF.new(p) * CF.Angles(math.rad(v.x), math.rad(v.y), math.rad(v.z)))
			end,
		},
		Size = {
			tipo = "Vector3", padrao = v3(4, 1, 2),
			set = function(rec, v)
				v = v3(math.max(v.x, 0.001), math.max(v.y, 0.001), math.max(v.z, 0.001))
				if rec.props.Size == v then return end
				rec.props.Size = v
				mudou(rec, "Size")
			end,
		},
		Anchored = { tipo = "boolean", padrao = false },
		CanCollide = { tipo = "boolean", padrao = true },
		CanTouch = { tipo = "boolean", padrao = true },
		CanQuery = { tipo = "boolean", padrao = true },
		CastShadow = { tipo = "boolean", padrao = true },
		Locked = { tipo = "boolean", padrao = false },
		Massless = { tipo = "boolean", padrao = false },
		Transparency = { tipo = "number", padrao = 0 },
		Reflectance = { tipo = "number", padrao = 0 },
		Color = { tipo = "Color3", padrao = CINZA },
		BrickColor = {
			tipo = "BrickColor",
			get = function(rec) return C.brickDeCor(rec.props.Color) end,
			set = function(rec, v)
				local antes = C.brickDeCor(rec.props.Color)
				rec.props.Color = v.Color
				mudou(rec, "Color")
				if antes ~= v then mudou(rec, "BrickColor") end
			end,
		},
		Material = { tipo = "EnumItem:Material", padrao = Enum.Material.Plastic },
		AssemblyLinearVelocity = { tipo = "Vector3", padrao = v3(0, 0, 0) },
		AssemblyAngularVelocity = { tipo = "Vector3", padrao = v3(0, 0, 0) },
		Velocity = {
			tipo = "Vector3",
			get = function(rec) return rec.props.AssemblyLinearVelocity end,
			set = function(rec, v) rec.props.AssemblyLinearVelocity = v mudou(rec, "AssemblyLinearVelocity") end,
		},
		CollisionGroup = { tipo = "string", padrao = "Default" },
		TopSurface = { tipo = "EnumItem:SurfaceType", padrao = Enum.SurfaceType.Smooth },
		BottomSurface = { tipo = "EnumItem:SurfaceType", padrao = Enum.SurfaceType.Smooth },
		Mass = {
			so = true,
			get = function(rec) local s = rec.props.Size return s.x * s.y * s.z * 0.7 end,
		},
		AssemblyMass = {
			so = true,
			get = function(rec) local s = rec.props.Size return s.x * s.y * s.z * 0.7 end,
		},
		ExtentsSize = { so = true, get = function(rec) return rec.props.Size end },
	},
	metodos = {
		GetTouchingParts = function(self)
			local rec = eu(self, "GetTouchingParts")
			local r = {}
			for outro in rec.tocando or {} do
				if not outro.destruido then table.insert(r, outro.proxy) end
			end
			return r
		end,
		GetMass = function(self)
			local s = eu(self, "GetMass").props.Size
			return s.x * s.y * s.z * 0.7
		end,
		ApplyImpulse = function(self) eu(self, "ApplyImpulse") end,
		ApplyAngularImpulse = function(self) eu(self, "ApplyAngularImpulse") end,
		SetNetworkOwner = function(self) eu(self, "SetNetworkOwner") end,
		GetNetworkOwner = function(self) eu(self, "GetNetworkOwner") return nil end,
		CanSetNetworkOwnership = function(self) eu(self, "CanSetNetworkOwnership") return true end,
		BreakJoints = function(self)
			local rec = eu(self, "BreakJoints")
			for outro in rec.soldas or {} do C.dessoldar(rec, outro) end
		end,
		GetConnectedParts = function(self)
			local rec = eu(self, "GetConnectedParts")
			local r = {}
			for outro in rec.soldas or {} do table.insert(r, outro.proxy) end
			return r
		end,
		GetPivot = function(self) return eu(self, "GetPivot").props.CFrame end,
		PivotTo = function(self, c)
			local rec = eu(self, "PivotTo")
			if not C.eCF(c) then erro("invalid argument #1 to 'PivotTo' (CFrame expected, got " .. C.typeof(c) .. ")") end
			moverParte(rec, c)
		end,
	},
	eventos = { "Touched", "TouchEnded" },
	iniciar = function(rec)
		rec.props.CFrame = CF.identity
	end,
})
classe("Part", "BasePart", {
	criavel = true,
	props = { Shape = { tipo = "EnumItem:PartType", padrao = Enum.PartType.Block } },
})
classe("SpawnLocation", "Part", {
	criavel = true,
	props = {
		Enabled = { tipo = "boolean", padrao = true },
		Duration = { tipo = "number", padrao = 10 },
		Neutral = { tipo = "boolean", padrao = true },
		TeamColor = { tipo = "BrickColor", padrao = C.BrickColor.new("White") },
		AllowTeamChangeOnTouch = { tipo = "boolean", padrao = false },
	},
	iniciar = function(rec)
		rec.props.Size = v3(12, 1, 12)
	end,
})
classe("Seat", "Part", {
	criavel = true,
	props = { Disabled = { tipo = "boolean", padrao = false }, Occupant = { so = true, get = function(rec) return rec.ocupante end } },
})
bolsa("WedgePart", "BasePart", {})
bolsa("CornerWedgePart", "BasePart", {})
bolsa("TrussPart", "BasePart", {})
bolsa("MeshPart", "BasePart", { MeshId = { tipo = "string", padrao = "" }, TextureID = { tipo = "string", padrao = "" } })
classe("Terrain", "BasePart", {
	props = { WaterColor = { tipo = "Color3", padrao = rgb(12, 84, 92) } },
	metodos = {
		FillBlock = function(self) eu(self, "FillBlock") end,
		FillBall = function(self) eu(self, "FillBall") end,
		Clear = function(self) eu(self, "Clear") end,
	},
})

-- ============================================================================================
-- Model (e o "piv\xF4")
-- ============================================================================================
local function partesDe(rec, lista)
	for _, f in rec.filhos do
		local r = DADOS[f]
		if r.classe.isa.BasePart then table.insert(lista, r) end
		partesDe(r, lista)
	end
	return lista
end
C.partesDe = partesDe

local function caixa(rec)
	local partes = partesDe(rec, {})
	if #partes == 0 then return CF.identity, v3(0, 0, 0) end
	local mn = v3(math.huge, math.huge, math.huge)
	local mx = v3(-math.huge, -math.huge, -math.huge)
	for _, p in partes do
		local pos, s = p.props.CFrame.Position, p.props.Size / 2
		mn = mn:Min(pos - s)
		mx = mx:Max(pos + s)
	end
	return CF.new((mn + mx) / 2), mx - mn
end

local function pivoModelo(rec)
	local pp = rec.props.PrimaryPart
	if pp and not DADOS[pp].destruido then return DADOS[pp].props.CFrame end
	if rec.props.WorldPivot then return rec.props.WorldPivot end
	return (caixa(rec))
end

local function moverModelo(rec, novoPivo)
	local antigo = pivoModelo(rec)
	local delta = novoPivo * antigo:Inverse()
	for _, p in partesDe(rec, {}) do
		p.semSoldas = true
		moverParte(p, delta * p.props.CFrame)
		p.semSoldas = false
	end
	if rec.props.WorldPivot then rec.props.WorldPivot = novoPivo end
end
C.moverModelo = moverModelo

classe("Model", "PVInstance", {
	criavel = true,
	props = {
		PrimaryPart = { tipo = "Instance:BasePart" },
		WorldPivot = {
			tipo = "CFrame",
			get = function(rec) return pivoModelo(rec) end,
			set = function(rec, v) rec.props.WorldPivot = v end,
		},
		LevelOfDetail = { tipo = "any" },
	},
	metodos = {
		GetPivot = function(self) return pivoModelo(eu(self, "GetPivot")) end,
		PivotTo = function(self, c)
			local rec = eu(self, "PivotTo")
			if not C.eCF(c) then erro("invalid argument #1 to 'PivotTo' (CFrame expected, got " .. C.typeof(c) .. ")") end
			moverModelo(rec, c)
		end,
		SetPrimaryPartCFrame = function(self, c)
			local rec = eu(self, "SetPrimaryPartCFrame")
			if not rec.props.PrimaryPart then erro("Model:SetPrimaryPartCFrame() failed because no PrimaryPart has been set, or the PrimaryPart no longer exists. Please set Model.PrimaryPart before using this.") end
			moverModelo(rec, c)
		end,
		GetPrimaryPartCFrame = function(self)
			local rec = eu(self, "GetPrimaryPartCFrame")
			if not rec.props.PrimaryPart then erro("Model:GetPrimaryPartCFrame() failed because no PrimaryPart has been set") end
			return DADOS[rec.props.PrimaryPart].props.CFrame
		end,
		MoveTo = function(self, pos)
			local rec = eu(self, "MoveTo")
			if not C.eV3(pos) then erro("invalid argument #1 to 'MoveTo' (Vector3 expected, got " .. C.typeof(pos) .. ")") end
			local p = pivoModelo(rec)
			moverModelo(rec, CF.new(pos) * p.Rotation)
		end,
		TranslateBy = function(self, d)
			local rec = eu(self, "TranslateBy")
			moverModelo(rec, pivoModelo(rec) + d)
		end,
		GetBoundingBox = function(self) return caixa(eu(self, "GetBoundingBox")) end,
		GetExtentsSize = function(self)
			local _, s = caixa(eu(self, "GetExtentsSize"))
			return s
		end,
		GetScale = function(self) eu(self, "GetScale") return 1 end,
		ScaleTo = function(self) eu(self, "ScaleTo") end,
	},
})

-- ============================================================================================
-- Pastas e valores
-- ============================================================================================
bolsa("Folder", "Instance", {})
bolsa("Configuration", "Instance", {})
classe("ValueBase", "Instance", {})
local function valor(nome: string, tipo: string, padrao)
	classe(nome, "ValueBase", { criavel = true, props = { Value = { tipo = tipo, padrao = padrao } } })
end
valor("IntValue", "int", 0)
valor("NumberValue", "number", 0)
valor("StringValue", "string", "")
valor("BoolValue", "boolean", false)
valor("ObjectValue", "Instance", nil)
valor("Vector3Value", "Vector3", v3(0, 0, 0))
valor("Color3Value", "Color3", c3(0, 0, 0))
valor("CFrameValue", "CFrame", CF.identity)
valor("BrickColorValue", "BrickColor", C.BrickColor.new("Medium stone grey"))
valor("RayValue", "any", nil)

-- ============================================================================================
-- Humanoid, Animator, anima\xE7\xF5es e ferramentas
-- ============================================================================================
local function personagemDe(rec)
	local pai = rec.pai and DADOS[rec.pai]
	if pai and pai.classe.isa.Model then return pai end
	return nil
end
C.personagemDe = personagemDe

local function raizDe(hum)
	local m = personagemDe(hum)
	if not m then return nil end
	local r = C.metodosInstance.FindFirstChild(m.proxy, "HumanoidRootPart")
	return r and DADOS[r]
end
C.raizDe = raizDe

local function mudarEstado(rec, novo)
	local antigo = rec.estado
	if antigo == novo then return end
	rec.estado = novo
	evento(rec, "StateChanged", antigo, novo)
end

local function morrer(rec)
	if rec.morto then return end
	rec.morto = true
	mudarEstado(rec, Enum.HumanoidStateType.Dead)
	evento(rec, "Died")
	local W = rec.W
	if W.aoMorrer then W.aoMorrer(rec) end
end

classe("Humanoid", "Instance", {
	criavel = true,
	props = {
		Health = {
			tipo = "number", padrao = 100,
			set = function(rec, v)
				if rec.morto then v = math.min(v, 0) end
				v = math.clamp(v, 0, rec.props.MaxHealth)
				if rec.props.Health == v then return end
				rec.props.Health = v
				mudou(rec, "Health")
				evento(rec, "HealthChanged", v)
				if v <= 0 then morrer(rec) end
			end,
		},
		MaxHealth = {
			tipo = "number", padrao = 100,
			set = function(rec, v)
				v = math.max(v, 0)
				if rec.props.MaxHealth == v then return end
				rec.props.MaxHealth = v
				mudou(rec, "MaxHealth")
				if rec.props.Health > v then
					rec.props.Health = v
					mudou(rec, "Health")
					evento(rec, "HealthChanged", v)
					if v <= 0 then morrer(rec) end
				end
			end,
		},
		WalkSpeed = { tipo = "number", padrao = 16 },
		JumpPower = { tipo = "number", padrao = 50 },
		JumpHeight = { tipo = "number", padrao = 7.2 },
		UseJumpPower = { tipo = "boolean", padrao = true },
		AutoRotate = { tipo = "boolean", padrao = true },
		AutoJumpEnabled = { tipo = "boolean", padrao = true },
		BreakJointsOnDeath = { tipo = "boolean", padrao = true },
		RequiresNeck = { tipo = "boolean", padrao = true },
		DisplayName = { tipo = "string", padrao = "" },
		DisplayDistanceType = { tipo = "any" },
		HealthDisplayDistance = { tipo = "number", padrao = 100 },
		NameDisplayDistance = { tipo = "number", padrao = 100 },
		HipHeight = { tipo = "number", padrao = 2 },
		Jump = { tipo = "boolean", padrao = false },
		Sit = { tipo = "boolean", padrao = false },
		PlatformStand = { tipo = "boolean", padrao = false },
		WalkToPoint = { tipo = "Vector3", padrao = v3(0, 0, 0) },
		WalkToPart = { tipo = "Instance:BasePart" },
		MoveDirection = { so = true, get = function(rec) return rec.direcao or v3(0, 0, 0) end },
		RigType = { tipo = "EnumItem:HumanoidRigType", padrao = Enum.HumanoidRigType.R15 },
		RootPart = { so = true, get = function(rec) local r = raizDe(rec) return r and r.proxy end },
		FloorMaterial = { so = true, get = function() return Enum.Material.Plastic end },
		SeatPart = { so = true, get = function() return nil end },
	},
	metodos = {
		TakeDamage = function(self, dano)
			local rec = eu(self, "TakeDamage")
			dano = C.argNumero(dano, 1, "TakeDamage")
			local m = personagemDe(rec)
			if m and C.metodosInstance.FindFirstChildOfClass(m.proxy, "ForceField") then return end
			self.Health = rec.props.Health - dano
		end,
		MoveTo = function(self, alvo, parte)
			local rec = eu(self, "MoveTo")
			if not C.eV3(alvo) then erro("invalid argument #1 to 'MoveTo' (Vector3 expected, got " .. C.typeof(alvo) .. ")") end
			if parte then alvo = DADOS[parte].props.CFrame.Position + alvo end
			rec.props.WalkToPoint = alvo
			local raiz = raizDe(rec)
			local W = rec.W
			if rec.movimento then W.animacoes[rec.movimento] = nil end
			if not raiz then return end
			local chave = {}
			rec.movimento = chave
			local inicio = raiz.props.CFrame.Position
			local destino = v3(alvo.x, inicio.y, alvo.z)
			local dist = (destino - inicio).Magnitude
			local vel = rec.props.WalkSpeed
			local q0 = W.quadro
			local total = if vel > 0 then math.max(1, math.ceil(dist / vel * C.QPS)) else math.huge
			local limite = 8 * C.QPS
			if dist > 0 then rec.direcao = (destino - inicio).Unit end
			W.animacoes[chave] = function(q)
				local passou = q - q0
				local frac = if total == math.huge then 0 else math.min(1, passou / total)
				local pos = inicio + (destino - inicio) * frac
				local c = raiz.props.CFrame
				moverParte(raiz, CF.new(pos) * c.Rotation)
				if frac >= 1 or passou >= limite or rec.morto then
					W.animacoes[chave] = nil
					rec.movimento = nil
					rec.direcao = v3(0, 0, 0)
					evento(rec, "MoveToFinished", frac >= 1)
				end
			end
		end,
		Move = function(self, dir) eu(self, "Move").direcao = dir end,
		ChangeState = function(self, estado)
			local rec = eu(self, "ChangeState")
			local e = C.paraEnum("HumanoidStateType", estado)
			if e then
				mudarEstado(rec, e)
				if e == Enum.HumanoidStateType.Dead then self.Health = 0 end
			end
		end,
		GetState = function(self)
			return eu(self, "GetState").estado or Enum.HumanoidStateType.Running
		end,
		SetStateEnabled = function(self) eu(self, "SetStateEnabled") end,
		GetStateEnabled = function(self) eu(self, "GetStateEnabled") return true end,
		EquipTool = function(self, ferramenta)
			local rec = eu(self, "EquipTool")
			local m = personagemDe(rec)
			if not m or not DADOS[ferramenta] then return end
			for _, f in m.filhos do
				if DADOS[f].classe.nome == "Tool" and f ~= ferramenta then
					C.desequipar(DADOS[f], rec)
				end
			end
			ferramenta.Parent = m.proxy
		end,
		UnequipTools = function(self)
			local rec = eu(self, "UnequipTools")
			local m = personagemDe(rec)
			if not m then return end
			for _, f in table.clone(m.filhos) do
				if DADOS[f].classe.nome == "Tool" then C.desequipar(DADOS[f], rec) end
			end
		end,
		LoadAnimation = function(self, anim)
			local rec = eu(self, "LoadAnimation")
			return C.novaFaixa(rec.W, anim)
		end,
		GetPlayingAnimationTracks = function(self)
			local rec = eu(self, "GetPlayingAnimationTracks")
			local r = {}
			for t in rec.W.faixas do
				if DADOS[t].tocando then table.insert(r, t) end
			end
			return r
		end,
		AddAccessory = function(self, acc)
			local rec = eu(self, "AddAccessory")
			local m = personagemDe(rec)
			if m then acc.Parent = m.proxy end
		end,
		GetAppliedDescription = function(self) eu(self, "GetAppliedDescription") return nil end,
	},
	eventos = { "Died", "HealthChanged", "MoveToFinished", "Running", "Jumping", "StateChanged", "Seated", "Touched", "FreeFalling", "Climbing" },
	iniciar = function(rec)
		rec.estado = Enum.HumanoidStateType.Running
	end,
})
classe("HumanoidDescription", "Instance", { criavel = true })

-- Anima\xE7\xF5es: AnimationTrack:Play() "toca" por Length segundos (tempo virtual)
bolsa("Animation", "Instance", { AnimationId = { tipo = "string", padrao = "" } })
classe("Animator", "Instance", {
	criavel = true,
	metodos = {
		LoadAnimation = function(self, anim)
			local rec = eu(self, "LoadAnimation")
			return C.novaFaixa(rec.W, anim)
		end,
		GetPlayingAnimationTracks = function(self)
			local rec = eu(self, "GetPlayingAnimationTracks")
			local r = {}
			for t in rec.W.faixas do
				if DADOS[t].tocando then table.insert(r, t) end
			end
			return r
		end,
	},
})
local function pararFaixa(rec, fim: boolean)
	if not rec.tocando then return end
	rec.tocando = false
	rec.versao += 1
	mudou(rec, "IsPlaying")
	evento(rec, "Stopped")
	if fim then evento(rec, "Ended") end
end
classe("AnimationTrack", "Instance", {
	props = {
		Animation = { so = true, get = function(rec) return rec.animacao end },
		IsPlaying = { so = true, get = function(rec) return rec.tocando == true end },
		Length = { so = true, get = function(rec) return rec.duracao end },
		Looped = { tipo = "boolean", padrao = false },
		Priority = { tipo = "EnumItem:AnimationPriority", padrao = Enum.AnimationPriority.Action },
		Speed = { so = true, get = function(rec) return rec.velocidade end },
		TimePosition = { tipo = "number", padrao = 0 },
		WeightCurrent = { so = true, get = function(rec) return if rec.tocando then 1 else 0 end },
		WeightTarget = { so = true, get = function(rec) return if rec.tocando then 1 else 0 end },
	},
	metodos = {
		Play = function(self, fade, peso, vel)
			local rec = eu(self, "Play")
			if vel then rec.velocidade = vel end
			rec.tocando = true
			rec.versao += 1
			local versao = rec.versao
			mudou(rec, "IsPlaying")
			local W = rec.W
			local dur = rec.duracao / math.max(rec.velocidade, 0.001)
			local function ciclo()
				if rec.versao ~= versao or not rec.tocando then return end
				if rec.props.Looped then
					evento(rec, "DidLoop")
					C.depois(W, dur, ciclo)
				else
					pararFaixa(rec, true)
				end
			end
			C.depois(W, dur, ciclo)
		end,
		Stop = function(self) pararFaixa(eu(self, "Stop"), false) end,
		AdjustSpeed = function(self, v) eu(self, "AdjustSpeed").velocidade = v or 1 end,
		AdjustWeight = function(self) eu(self, "AdjustWeight") end,
		GetMarkerReachedSignal = function(self, nome)
			local rec = eu(self, "GetMarkerReachedSignal")
			rec.marcadores = rec.marcadores or {}
			local s = rec.marcadores[nome]
			if not s then
				s = C.novoSinal(rec.W, "MarkerReached")
				rec.marcadores[nome] = s
			end
			return s
		end,
		GetTimeOfKeyframe = function(self) eu(self, "GetTimeOfKeyframe") return 0 end,
	},
	eventos = { "Stopped", "Ended", "DidLoop", "KeyframeReached" },
})
function C.novaFaixa(W, anim)
	local proxy, rec = C.novaInstancia(W, "AnimationTrack")
	rec.animacao = anim
	rec.velocidade = 1
	rec.versao = 0
	rec.duracao = 1
	if anim and DADOS[anim] then
		rec.nome = DADOS[anim].nome
		local d = DADOS[anim].atributos.Duracao or DADOS[anim].atributos.Length
		if rtype(d) == "number" and d > 0 then rec.duracao = d end
	end
	W.faixas[proxy] = true
	return proxy
end

-- Tool: equipar = colocar a ferramenta dentro do personagem
classe("Tool", "Model", {
	criavel = true,
	props = {
		RequiresHandle = { tipo = "boolean", padrao = true },
		CanBeDropped = { tipo = "boolean", padrao = true },
		Enabled = { tipo = "boolean", padrao = true },
		ManualActivationOnly = { tipo = "boolean", padrao = false },
		ToolTip = { tipo = "string", padrao = "" },
		TextureId = { tipo = "string", padrao = "" },
		Grip = { tipo = "CFrame", padrao = CF.identity },
	},
	metodos = {
		Activate = function(self)
			local rec = eu(self, "Activate")
			if rec.equipada and rec.props.Enabled then evento(rec, "Activated") end
		end,
		Deactivate = function(self)
			local rec = eu(self, "Deactivate")
			if rec.equipada then evento(rec, "Deactivated") end
		end,
	},
	eventos = { "Activated", "Deactivated", "Equipped", "Unequipped" },
})
local function ePersonagem(rec)
	if not rec or not rec.classe.isa.Model then return false end
	return C.metodosInstance.FindFirstChildOfClass(rec.proxy, "Humanoid") ~= nil
end
C.ePersonagem = ePersonagem
C.CLASSES.Tool.aoMudarPai = function(rec, antigo, novo)
	if ePersonagem(novo) and not rec.equipada then
		rec.equipada = true
		local cabo = C.metodosInstance.FindFirstChild(rec.proxy, "Handle")
		local mao = C.metodosInstance.FindFirstChild(novo.proxy, "RightHand") or C.metodosInstance.FindFirstChild(novo.proxy, "HumanoidRootPart")
		if cabo and mao and DADOS[cabo].classe.isa.BasePart then
			local mr, cr = DADOS[mao], DADOS[cabo]
			rec.soldaCabo = { mr, cr }
			moverParte(cr, mr.props.CFrame * CF.new(0, -1, -1.5) * rec.props.Grip:Inverse())
			C.soldar(mr, cr)
		end
		evento(rec, "Equipped", nil)
	elseif ePersonagem(antigo) and not ePersonagem(novo) and rec.equipada then
		rec.equipada = false
		if rec.soldaCabo then
			C.dessoldar(rec.soldaCabo[1], rec.soldaCabo[2])
			rec.soldaCabo = nil
		end
		evento(rec, "Unequipped")
	end
end
function C.desequipar(ferr, hum)
	local W = ferr.W
	local jogador = W.jogadorDoPersonagem and W.jogadorDoPersonagem(personagemDe(hum))
	local mochila = jogador and C.metodosInstance.FindFirstChild(jogador.proxy, "Backpack")
	ferr.proxy.Parent = mochila
end

-- ============================================================================================
-- Detectores de clique e prompts
-- ============================================================================================
classe("ClickDetector", "Instance", {
	criavel = true,
	props = { MaxActivationDistance = { tipo = "number", padrao = 32 }, CursorIcon = { tipo = "string", padrao = "" } },
	eventos = { "MouseClick", "RightMouseClick", "MouseHoverEnter", "MouseHoverLeave" },
})
classe("ProximityPrompt", "Instance", {
	criavel = true,
	props = {
		ActionText = { tipo = "string", padrao = "Interact" },
		ObjectText = { tipo = "string", padrao = "" },
		HoldDuration = { tipo = "number", padrao = 0 },
		KeyboardKeyCode = { tipo = "EnumItem:KeyCode", padrao = Enum.KeyCode.E },
		MaxActivationDistance = { tipo = "number", padrao = 10 },
		Enabled = { tipo = "boolean", padrao = true },
		RequiresLineOfSight = { tipo = "boolean", padrao = true },
		ClickablePrompt = { tipo = "boolean", padrao = true },
		Style = { tipo = "EnumItem:ProximityPromptStyle", padrao = Enum.ProximityPromptStyle.Default },
		UIOffset = { tipo = "Vector2", padrao = C.Vector2.zero },
	},
	eventos = { "Triggered", "TriggerEnded", "PromptButtonHoldBegan", "PromptButtonHoldEnded", "PromptShown", "PromptHidden" },
})

-- ============================================================================================
-- Eventos e fun\xE7\xF5es remotas (cliente e servidor no mesmo processo) e bindables
-- ============================================================================================
-- copia os argumentos como a rede do Roblox faz: tabelas viram c\xF3pias (sem metatabela), fun\xE7\xF5es viram nil
local function copiarRede(v, vistos)
	local t = rtype(v)
	if t == "function" then return nil end
	if t ~= "table" or C.TIPO[v] then return v end
	vistos = vistos or {}
	if vistos[v] then return vistos[v] end
	local r = {}
	vistos[v] = r
	for k, x in C.real.pairs(v) do
		local kk = copiarRede(k, vistos)
		if kk ~= nil then r[kk] = copiarRede(x, vistos) end
	end
	return r
end
local function argsRede(...)
	local n = select("#", ...)
	local r = { ... }
	for i = 1, n do r[i] = copiarRede(r[i]) end
	return r, n
end
C.argsRede = argsRede

local function eJogador(v)
	local r = DADOS[v]
	return r and r.classe.nome == "Player"
end

local function remoteEvent(nome)
	classe(nome, "Instance", {
		criavel = true,
		metodos = {
			FireServer = function(self, ...)
				local rec = eu(self, "FireServer")
				local ctx = C.ctxAtual(rec.W)
				if ctx.lado ~= "cliente" then erro("FireServer can only be called from the client") end
				local args, n = argsRede(...)
				C.disparar(C.sinalDe(rec, "OnServerEvent"), ctx.jogador, table.unpack(args, 1, n))
			end,
			FireClient = function(self, jogador, ...)
				local rec = eu(self, "FireClient")
				local ctx = C.ctxAtual(rec.W)
				if ctx.lado ~= "servidor" then erro("FireClient can only be called from the server") end
				if not eJogador(jogador) then erro("FireClient: player argument must be a Player object") end
				local args, n = argsRede(...)
				C.dispararFiltrado(C.sinalDe(rec, "OnClientEvent"), function(d) return d.ctx.lado == "cliente" and d.ctx.jogador == jogador end, table.unpack(args, 1, n))
			end,
			FireAllClients = function(self, ...)
				local rec = eu(self, "FireAllClients")
				local ctx = C.ctxAtual(rec.W)
				if ctx.lado ~= "servidor" then erro("FireAllClients can only be called from the server") end
				local args, n = argsRede(...)
				C.dispararFiltrado(C.sinalDe(rec, "OnClientEvent"), function(d)
					return d.ctx.lado == "cliente" and d.ctx.jogador ~= nil and DADOS[d.ctx.jogador].pai ~= nil
				end, table.unpack(args, 1, n))
			end,
		},
		eventos = { "OnServerEvent", "OnClientEvent" },
		ladoEventos = { OnServerEvent = "servidor", OnClientEvent = "cliente" },
	})
end
remoteEvent("RemoteEvent")
remoteEvent("UnreliableRemoteEvent")

-- chama f numa thread nova (com o contexto dado) e espera o resultado, mesmo que f espere (task.wait)
function C.chamarEEsperar(W, f, ctx, ...)
	local resultado = nil
	local chamador = running()
	local esperando = false
	local co = coroutine.create(function(...)
		resultado = table.pack(pcall(f, ...))
		if esperando then
			W.espera[chamador] = nil
			C.retomar(W, chamador)
		end
	end)
	W.ctx[co] = ctx
	C.retomar(W, co, ...)
	if not resultado then
		if W.parado then error(C.MARCA_PARAR, 0) end
		esperando = true
		yield()
	end
	if not resultado then error(C.MARCA_PARAR, 0) end
	if not resultado[1] then error(resultado[2], 0) end
	return table.unpack(resultado, 2, resultado.n)
end

local function callback(nome: string, classeNome: string)
	return {
		tipo = "function",
		get = function() erro(nome .. " is a callback member of " .. classeNome .. "; you can only set the callback value, get is not available") end,
		set = function(rec, f)
			rec.callbacks = rec.callbacks or {}
			rec.callbacks[nome] = f
			if f and rec.esperandoCallback and rec.esperandoCallback[nome] then
				local lista = rec.esperandoCallback[nome]
				rec.esperandoCallback[nome] = nil
				for _, co in lista do C.retomar(rec.W, co) end
			end
		end,
	}
end
local function esperarCallback(rec, nome)
	while not (rec.callbacks and rec.callbacks[nome]) do
		rec.esperandoCallback = rec.esperandoCallback or {}
		rec.esperandoCallback[nome] = rec.esperandoCallback[nome] or {}
		table.insert(rec.esperandoCallback[nome], running())
		yield()
	end
	return rec.callbacks[nome]
end
C.esperarCallback = esperarCallback

classe("RemoteFunction", "Instance", {
	criavel = true,
	props = {
		OnServerInvoke = callback("OnServerInvoke", "RemoteFunction"),
		OnClientInvoke = callback("OnClientInvoke", "RemoteFunction"),
	},
	metodos = {
		InvokeServer = function(self, ...)
			local rec = eu(self, "InvokeServer")
			local W = rec.W
			local ctx = C.ctxAtual(W)
			if ctx.lado ~= "cliente" then erro("InvokeServer can only be called from the client") end
			local f = esperarCallback(rec, "OnServerInvoke")
			local args, n = argsRede(...)
			local r = table.pack(C.chamarEEsperar(W, f, W.ctxServidor, ctx.jogador, table.unpack(args, 1, n)))
			for i = 1, r.n do r[i] = copiarRede(r[i]) end
			return table.unpack(r, 1, r.n)
		end,
		InvokeClient = function(self, jogador, ...)
			local rec = eu(self, "InvokeClient")
			local W = rec.W
			local ctx = C.ctxAtual(W)
			if ctx.lado ~= "servidor" then erro("InvokeClient can only be called from the server") end
			if not eJogador(jogador) then erro("InvokeClient: player argument must be a Player object") end
			local f = esperarCallback(rec, "OnClientInvoke")
			local args, n = argsRede(...)
			local r = table.pack(C.chamarEEsperar(W, f, C.ctxCliente(W, jogador), table.unpack(args, 1, n)))
			for i = 1, r.n do r[i] = copiarRede(r[i]) end
			return table.unpack(r, 1, r.n)
		end,
	},
})
classe("BindableEvent", "Instance", {
	criavel = true,
	metodos = {
		Fire = function(self, ...)
			local rec = eu(self, "Fire")
			local args, n = argsRede(...)
			C.disparar(C.sinalDe(rec, "Event"), table.unpack(args, 1, n))
		end,
	},
	eventos = { "Event" },
})
classe("BindableFunction", "Instance", {
	criavel = true,
	props = { OnInvoke = callback("OnInvoke", "BindableFunction") },
	metodos = {
		Invoke = function(self, ...)
			local rec = eu(self, "Invoke")
			local W = rec.W
			local f = esperarCallback(rec, "OnInvoke")
			local args, n = argsRede(...)
			return C.chamarEEsperar(W, f, C.ctxAtual(W), table.unpack(args, 1, n))
		end,
	},
})

-- ============================================================================================
-- Scripts
-- ============================================================================================
classe("LuaSourceContainer", "Instance", {})
classe("BaseScript", "LuaSourceContainer", {
	props = {
		Disabled = {
			tipo = "boolean",
			get = function(rec) return not rec.props.Enabled end,
			set = function(rec, v) rec.props.Enabled = not v mudou(rec, "Enabled") mudou(rec, "Disabled") end,
		},
		Enabled = { tipo = "boolean", padrao = true },
		Source = { tipo = "string", padrao = "" },
		RunContext = { tipo = "any" },
	},
})
classe("Script", "BaseScript", { criavel = true })
classe("LocalScript", "Script", { criavel = true })
classe("ModuleScript", "LuaSourceContainer", { criavel = true, props = { Source = { tipo = "string", padrao = "" } } })

-- ============================================================================================
-- Efeitos, luzes, som, decalques (guardam os valores)
-- ============================================================================================
bolsa("Decal", "Instance", {
	Texture = { tipo = "string", padrao = "" }, Transparency = { tipo = "number", padrao = 0 },
	Color3 = { tipo = "Color3", padrao = c3(1, 1, 1) }, Face = { tipo = "EnumItem:NormalId", padrao = Enum.NormalId.Front },
	ZIndex = { tipo = "int", padrao = 1 },
})
bolsa("Texture", "Decal", { StudsPerTileU = { tipo = "number", padrao = 2 }, StudsPerTileV = { tipo = "number", padrao = 2 } })
local LUZ = {
	Brightness = { tipo = "number", padrao = 1 }, Color = { tipo = "Color3", padrao = c3(1, 1, 1) },
	Enabled = { tipo = "boolean", padrao = true }, Range = { tipo = "number", padrao = 8 }, Shadows = { tipo = "boolean", padrao = false },
}
bolsa("PointLight", "Instance", LUZ)
bolsa("SpotLight", "Instance", LUZ)
bolsa("SurfaceLight", "Instance", LUZ)
classe("ParticleEmitter", "Instance", {
	criavel = true,
	props = {
		Enabled = { tipo = "boolean", padrao = true }, Rate = { tipo = "number", padrao = 20 },
		Lifetime = { tipo = "NumberRange", padrao = C.NumberRange.new(5, 10) }, Speed = { tipo = "NumberRange", padrao = C.NumberRange.new(5) },
		Texture = { tipo = "string", padrao = "rbxasset://textures/particles/sparkles_main.dds" },
		Color = { tipo = "any" }, Size = { tipo = "any" }, Transparency = { tipo = "any" }, LightEmission = { tipo = "number", padrao = 0 },
		SpreadAngle = { tipo = "Vector2", padrao = C.Vector2.zero }, Acceleration = { tipo = "Vector3", padrao = v3(0, 0, 0) },
	},
	metodos = {
		Emit = function(self, n) local rec = eu(self, "Emit") rec.emitidas = (rec.emitidas or 0) + (tonumber(n) or 16) end,
		Clear = function(self) eu(self, "Clear") end,
	},
})
bolsa("Fire", "Instance", { Enabled = { tipo = "boolean", padrao = true }, Color = { tipo = "Color3", padrao = rgb(236, 139, 70) }, SecondaryColor = { tipo = "Color3", padrao = rgb(139, 80, 55) }, Size = { tipo = "number", padrao = 5 }, Heat = { tipo = "number", padrao = 9 } })
bolsa("Smoke", "Instance", { Enabled = { tipo = "boolean", padrao = true }, Color = { tipo = "Color3", padrao = c3(1, 1, 1) }, Size = { tipo = "number", padrao = 1 }, Opacity = { tipo = "number", padrao = 0.5 }, RiseVelocity = { tipo = "number", padrao = 1 } })
bolsa("Sparkles", "Instance", { Enabled = { tipo = "boolean", padrao = true }, SparkleColor = { tipo = "Color3", padrao = rgb(144, 25, 255) } })
bolsa("Highlight", "Instance", {
	Enabled = { tipo = "boolean", padrao = true }, FillColor = { tipo = "Color3", padrao = rgb(255, 0, 0) },
	OutlineColor = { tipo = "Color3", padrao = c3(1, 1, 1) }, FillTransparency = { tipo = "number", padrao = 0.5 },
	OutlineTransparency = { tipo = "number", padrao = 0 }, Adornee = { tipo = "Instance" }, DepthMode = { tipo = "any" },
})
bolsa("ForceField", "Instance", { Visible = { tipo = "boolean", padrao = true } })
bolsa("SelectionBox", "Instance", { Adornee = { tipo = "Instance" }, Color3 = { tipo = "Color3", padrao = rgb(13, 105, 172) }, LineThickness = { tipo = "number", padrao = 0.15 } })

local function tempoDoSom(rec): number
	local t = rec.atributos.Duracao or rec.atributos.Length
	if rtype(t) == "number" and t > 0 then return t end
	return 1
end
local function pararSom(rec, fim: boolean)
	if not rec.props.Playing then return end
	rec.props.Playing = false
	rec.versao = (rec.versao or 0) + 1
	mudou(rec, "Playing")
	if fim then evento(rec, "Ended", rec.props.SoundId) else evento(rec, "Stopped", rec.props.SoundId) end
end
local function tocarSom(rec)
	rec.props.TimePosition = 0
	rec.props.Playing = true
	rec.versao = (rec.versao or 0) + 1
	local versao = rec.versao
	mudou(rec, "Playing")
	evento(rec, "Played", rec.props.SoundId)
	local dur = tempoDoSom(rec) / math.max(rec.props.PlaybackSpeed, 0.001)
	local function fim()
		if rec.versao ~= versao or not rec.props.Playing then return end
		if rec.props.Looped then
			evento(rec, "DidLoop", rec.props.SoundId, 1)
			C.depois(rec.W, dur, fim)
		else
			pararSom(rec, true)
		end
	end
	C.depois(rec.W, dur, fim)
end
classe("Sound", "Instance", {
	criavel = true,
	props = {
		SoundId = { tipo = "string", padrao = "" },
		Volume = { tipo = "number", padrao = 0.5 },
		PlaybackSpeed = { tipo = "number", padrao = 1 },
		Looped = { tipo = "boolean", padrao = false },
		PlayOnRemove = { tipo = "boolean", padrao = false },
		RollOffMaxDistance = { tipo = "number", padrao = 10000 },
		TimePosition = { tipo = "number", padrao = 0 },
		Playing = {
			tipo = "boolean", padrao = false,
			set = function(rec, v) if v then tocarSom(rec) else pararSom(rec, false) end end,
		},
		IsPlaying = { so = true, get = function(rec) return rec.props.Playing end },
		IsLoaded = { so = true, get = function() return true end },
		TimeLength = { so = true, get = function(rec) return tempoDoSom(rec) end },
		SoundGroup = { tipo = "Instance" },
	},
	metodos = {
		Play = function(self) tocarSom(eu(self, "Play")) end,
		Stop = function(self) pararSom(eu(self, "Stop"), false) end,
		Pause = function(self)
			local rec = eu(self, "Pause")
			if rec.props.Playing then
				rec.props.Playing = false
				rec.versao = (rec.versao or 0) + 1
				mudou(rec, "Playing")
				evento(rec, "Paused", rec.props.SoundId)
			end
		end,
		Resume = function(self)
			local rec = eu(self, "Resume")
			if not rec.props.Playing then
				tocarSom(rec)
				evento(rec, "Resumed", rec.props.SoundId)
			end
		end,
	},
	eventos = { "Played", "Ended", "Stopped", "Paused", "Resumed", "Loaded", "DidLoop" },
})
bolsa("SoundGroup", "Instance", { Volume = { tipo = "number", padrao = 0.5 } })

-- Explos\xE3o: ao entrar no Workspace, dispara Hit para as pe\xE7as no raio e zera a vida dos personagens atingidos
classe("Explosion", "Instance", {
	criavel = true,
	props = {
		Position = { tipo = "Vector3", padrao = v3(0, 0, 0) },
		BlastRadius = { tipo = "number", padrao = 4 },
		BlastPressure = { tipo = "number", padrao = 500000 },
		DestroyJointRadiusPercent = { tipo = "number", padrao = 1 },
		ExplosionType = { tipo = "any" },
		Visible = { tipo = "boolean", padrao = true },
	},
	eventos = { "Hit" },
})
C.CLASSES.Explosion.aoMudarPai = function(rec, antigo, novo)
	if rec.explodiu or not novo or not C.noJogo(rec) then return end
	rec.explodiu = true
	local W = rec.W
	local centro = rec.props.Position
	local raio = rec.props.BlastRadius
	local atingidos = {}
	for _, p in C.partesDe(DADOS[W.workspace], {}) do
		local d = (p.props.CFrame.Position - centro).Magnitude
		if d <= raio then
			evento(rec, "Hit", p.proxy, d)
			local m = p.pai and DADOS[p.pai]
			if m and rec.props.DestroyJointRadiusPercent > 0 and d <= raio * rec.props.DestroyJointRadiusPercent then
				local h = C.metodosInstance.FindFirstChildOfClass(m.proxy, "Humanoid")
				if h and not atingidos[h] then
					atingidos[h] = true
					if not C.metodosInstance.FindFirstChildOfClass(m.proxy, "ForceField") then h.Health = 0 end
				end
			end
		end
	end
	C.depois(W, 1, function()
		if not rec.destruido then C.destruir(rec) end
	end)
end

-- ============================================================================================
-- Anexos, soldas e "for\xE7as" (sem f\xEDsica: s\xF3 guardam os valores; WeldConstraint mant\xE9m as pe\xE7as juntas)
-- ============================================================================================
classe("Attachment", "Instance", {
	criavel = true,
	props = {
		CFrame = { tipo = "CFrame", padrao = CF.identity },
		Position = {
			tipo = "Vector3",
			get = function(rec) return rec.props.CFrame.Position end,
			set = function(rec, v) rec.props.CFrame = CF.new(v) * rec.props.CFrame.Rotation mudou(rec, "Position") mudou(rec, "CFrame") end,
		},
		Orientation = { tipo = "Vector3", get = function(rec) return orientacaoDe(rec.props.CFrame) end, set = function(rec, v)
			rec.props.CFrame = CF.new(rec.props.CFrame.Position) * CF.fromOrientation(math.rad(v.x), math.rad(v.y), math.rad(v.z))
		end },
		WorldCFrame = { so = true, get = function(rec)
			local p = rec.pai and DADOS[rec.pai]
			if p and p.classe.isa.BasePart then return p.props.CFrame * rec.props.CFrame end
			return rec.props.CFrame
		end },
		WorldPosition = { so = true, get = function(rec)
			local p = rec.pai and DADOS[rec.pai]
			if p and p.classe.isa.BasePart then return (p.props.CFrame * rec.props.CFrame).Position end
			return rec.props.CFrame.Position
		end },
		Visible = { tipo = "boolean", padrao = false },
	},
})
local function atualizarSolda(rec)
	if rec.soldaAtiva then
		C.dessoldar(rec.soldaAtiva[1], rec.soldaAtiva[2])
		rec.soldaAtiva = nil
	end
	local a, b = rec.props.Part0, rec.props.Part1
	if rec.props.Enabled ~= false and a and b and not rec.destruido then
		local ra, rb = DADOS[a], DADOS[b]
		if rec.props.C0 then
			moverParte(rb, ra.props.CFrame * rec.props.C0 * rec.props.C1:Inverse())
		end
		C.soldar(ra, rb)
		rec.soldaAtiva = { ra, rb }
	end
end
local function solda(nome: string, comC: boolean)
	local props = {
		Part0 = { tipo = "Instance:BasePart", set = function(rec, v) rec.props.Part0 = v mudou(rec, "Part0") atualizarSolda(rec) end },
		Part1 = { tipo = "Instance:BasePart", set = function(rec, v) rec.props.Part1 = v mudou(rec, "Part1") atualizarSolda(rec) end },
		Enabled = { tipo = "boolean", padrao = true, set = function(rec, v) rec.props.Enabled = v mudou(rec, "Enabled") atualizarSolda(rec) end },
		Active = { so = true, get = function(rec) return rec.soldaAtiva ~= nil end },
	}
	if comC then
		props.C0 = { tipo = "CFrame", padrao = CF.identity, set = function(rec, v) rec.props.C0 = v atualizarSolda(rec) end }
		props.C1 = { tipo = "CFrame", padrao = CF.identity, set = function(rec, v) rec.props.C1 = v atualizarSolda(rec) end }
	end
	classe(nome, "Instance", { criavel = true, props = props })
	C.CLASSES[nome].aoDestruir = function(rec)
		if rec.soldaAtiva then C.dessoldar(rec.soldaAtiva[1], rec.soldaAtiva[2]) rec.soldaAtiva = nil end
	end
end
solda("WeldConstraint", false)
solda("Weld", true)
solda("Motor6D", true)
solda("ManualWeld", true)
local FORCA = {
	Enabled = { tipo = "boolean", padrao = true }, Attachment0 = { tipo = "Instance:Attachment" },
	Attachment1 = { tipo = "Instance:Attachment" }, MaxForce = { tipo = "any", padrao = math.huge },
	Velocity = { tipo = "Vector3", padrao = v3(0, 0, 0) }, VectorVelocity = { tipo = "Vector3", padrao = v3(0, 0, 0) },
	Force = { tipo = "Vector3", padrao = v3(0, 0, 0) }, Position = { tipo = "Vector3", padrao = v3(0, 0, 0) },
	P = { tipo = "number", padrao = 1250 }, D = { tipo = "number", padrao = 500 },
	MaxTorque = { tipo = "any", padrao = v3(4000, 4000, 4000) }, CFrame = { tipo = "CFrame", padrao = CF.identity },
	Responsiveness = { tipo = "number", padrao = 10 }, MaxVelocity = { tipo = "number", padrao = math.huge },
	RelativeTo = { tipo = "any" }, VelocityConstraintMode = { tipo = "any" }, AngularVelocity = { tipo = "Vector3", padrao = v3(0, 0, 0) },
	Length = { tipo = "number", padrao = 5 }, Visible = { tipo = "boolean", padrao = false }, ApplyAtCenterOfMass = { tipo = "boolean", padrao = false },
}
for _, nome in { "BodyVelocity", "BodyPosition", "BodyGyro", "BodyForce", "BodyAngularVelocity", "LinearVelocity", "AngularVelocity",
	"VectorForce", "AlignPosition", "AlignOrientation", "RopeConstraint", "SpringConstraint", "HingeConstraint", "RodConstraint", "BallSocketConstraint" } do
	bolsa(nome, "Instance", FORCA)
end

-- ============================================================================================
-- C\xE2mera, times, acess\xF3rios e roupas
-- ============================================================================================
bolsa("Camera", "Instance", {
	CFrame = { tipo = "CFrame", padrao = CF.new(0, 20, 20) }, Focus = { tipo = "CFrame", padrao = CF.identity },
	FieldOfView = { tipo = "number", padrao = 70 }, CameraType = { tipo = "EnumItem:CameraType", padrao = Enum.CameraType.Custom },
	CameraSubject = { tipo = "Instance" }, ViewportSize = { so = true, get = function() return C.Vector2.new(1280, 720) end },
})
classe("Team", "Instance", {
	criavel = true,
	props = { TeamColor = { tipo = "BrickColor", padrao = C.BrickColor.new("White") }, AutoAssignable = { tipo = "boolean", padrao = true } },
	metodos = {
		GetPlayers = function(self)
			local rec = eu(self, "GetPlayers")
			local r = {}
			local jogadores = rec.W.Players and DADOS[rec.W.Players]
			for _, p in (jogadores and jogadores.filhos) or {} do
				if DADOS[p].props.Team == self then table.insert(r, p) end
			end
			return r
		end,
	},
	eventos = { "PlayerAdded", "PlayerRemoved" },
})
bolsa("Accessory", "Instance", { AttachmentPoint = { tipo = "CFrame", padrao = CF.identity } })
bolsa("Hat", "Accessory", {})
bolsa("Shirt", "Instance", { ShirtTemplate = { tipo = "string", padrao = "" } })
bolsa("Pants", "Instance", { PantsTemplate = { tipo = "string", padrao = "" } })
bolsa("BodyColors", "Instance", {})

-- ============================================================================================
-- Interface (GUI): s\xF3 guardam os valores; os bot\xF5es t\xEAm eventos de clique
-- ============================================================================================
classe("GuiBase2d", "Instance", {
	props = {
		AbsoluteSize = { so = true, get = function() return C.Vector2.new(100, 100) end },
		AbsolutePosition = { so = true, get = function() return C.Vector2.zero end },
		AbsoluteRotation = { so = true, get = function() return 0 end },
	},
})
classe("LayerCollector", "GuiBase2d", {
	props = {
		Enabled = { tipo = "boolean", padrao = true },
		ResetOnSpawn = { tipo = "boolean", padrao = true },
		ZIndexBehavior = { tipo = "EnumItem:ZIndexBehavior", padrao = Enum.ZIndexBehavior.Sibling },
	},
})
bolsa("ScreenGui", "LayerCollector", {
	DisplayOrder = { tipo = "int", padrao = 0 }, IgnoreGuiInset = { tipo = "boolean", padrao = false },
})
bolsa("BillboardGui", "LayerCollector", {
	Adornee = { tipo = "Instance" }, Size = { tipo = "UDim2", padrao = C.ud2(0, 0, 0, 0) },
	StudsOffset = { tipo = "Vector3", padrao = v3(0, 0, 0) }, AlwaysOnTop = { tipo = "boolean", padrao = false },
	MaxDistance = { tipo = "number", padrao = math.huge }, LightInfluence = { tipo = "number", padrao = 1 },
})
bolsa("SurfaceGui", "LayerCollector", {
	Adornee = { tipo = "Instance" }, Face = { tipo = "EnumItem:NormalId", padrao = Enum.NormalId.Front },
	PixelsPerStud = { tipo = "number", padrao = 50 }, SizingMode = { tipo = "any" },
})
classe("GuiObject", "GuiBase2d", {
	props = {
		Size = { tipo = "UDim2", padrao = C.ud2(0, 100, 0, 100) },
		Position = { tipo = "UDim2", padrao = C.ud2(0, 0, 0, 0) },
		AnchorPoint = { tipo = "Vector2", padrao = C.Vector2.zero },
		Visible = { tipo = "boolean", padrao = true },
		BackgroundColor3 = { tipo = "Color3", padrao = c3(1, 1, 1) },
		BackgroundTransparency = { tipo = "number", padrao = 0 },
		BorderColor3 = { tipo = "Color3", padrao = rgb(27, 42, 53) },
		BorderSizePixel = { tipo = "int", padrao = 1 },
		ZIndex = { tipo = "int", padrao = 1 },
		LayoutOrder = { tipo = "int", padrao = 0 },
		Rotation = { tipo = "number", padrao = 0 },
		ClipsDescendants = { tipo = "boolean", padrao = false },
		Active = { tipo = "boolean", padrao = false },
		Selectable = { tipo = "boolean", padrao = false },
		Interactable = { tipo = "boolean", padrao = true },
	},
	metodos = {
		TweenPosition = function(self, pos) local rec = eu(self, "TweenPosition") self.Position = pos return true end,
		TweenSize = function(self, s) local rec = eu(self, "TweenSize") self.Size = s return true end,
		TweenSizeAndPosition = function(self, s, pos) eu(self, "TweenSizeAndPosition") self.Size = s self.Position = pos return true end,
	},
	eventos = { "MouseEnter", "MouseLeave", "InputBegan", "InputEnded", "InputChanged" },
})
bolsa("Frame", "GuiObject", { Style = { tipo = "any" } })
bolsa("ScrollingFrame", "GuiObject", {
	CanvasSize = { tipo = "UDim2", padrao = C.ud2(0, 0, 2, 0) }, CanvasPosition = { tipo = "Vector2", padrao = C.Vector2.zero },
	ScrollBarThickness = { tipo = "int", padrao = 12 }, ScrollingEnabled = { tipo = "boolean", padrao = true },
	AutomaticCanvasSize = { tipo = "any" },
})
local TEXTO = {
	Text = { tipo = "string", padrao = "Label" }, TextColor3 = { tipo = "Color3", padrao = rgb(27, 42, 53) },
	TextSize = { tipo = "number", padrao = 14 }, TextScaled = { tipo = "boolean", padrao = false },
	TextWrapped = { tipo = "boolean", padrao = false }, TextTransparency = { tipo = "number", padrao = 0 },
	TextStrokeTransparency = { tipo = "number", padrao = 1 }, TextStrokeColor3 = { tipo = "Color3", padrao = c3(0, 0, 0) },
	Font = { tipo = "EnumItem:Font", padrao = Enum.Font.SourceSans }, RichText = { tipo = "boolean", padrao = false },
	TextXAlignment = { tipo = "EnumItem:TextXAlignment", padrao = Enum.TextXAlignment.Center },
	TextYAlignment = { tipo = "EnumItem:TextYAlignment", padrao = Enum.TextYAlignment.Center },
	MaxVisibleGraphemes = { tipo = "int", padrao = -1 }, LineHeight = { tipo = "number", padrao = 1 },
	ContentText = { so = true, get = function(rec) return rec.props.Text end },
	TextBounds = { so = true, get = function(rec) return C.Vector2.new(#rec.props.Text * rec.props.TextSize * 0.5, rec.props.TextSize) end },
	FontFace = { tipo = "any" },
}
local IMAGEM = {
	Image = { tipo = "string", padrao = "" }, ImageColor3 = { tipo = "Color3", padrao = c3(1, 1, 1) },
	ImageTransparency = { tipo = "number", padrao = 0 }, ScaleType = { tipo = "EnumItem:ScaleType", padrao = Enum.ScaleType.Stretch },
	ImageRectOffset = { tipo = "Vector2", padrao = C.Vector2.zero }, ImageRectSize = { tipo = "Vector2", padrao = C.Vector2.zero },
}
bolsa("TextLabel", "GuiObject", TEXTO)
bolsa("ImageLabel", "GuiObject", IMAGEM)
classe("GuiButton", "GuiObject", {
	props = {
		AutoButtonColor = { tipo = "boolean", padrao = true }, Modal = { tipo = "boolean", padrao = false },
		Selected = { tipo = "boolean", padrao = false },
	},
	eventos = { "MouseButton1Click", "MouseButton1Down", "MouseButton1Up", "MouseButton2Click", "MouseButton2Down", "MouseButton2Up", "Activated" },
})
local textoBotao = table.clone(TEXTO)
textoBotao.Text = { tipo = "string", padrao = "Button" }
bolsa("TextButton", "GuiButton", textoBotao)
bolsa("ImageButton", "GuiButton", IMAGEM)
local textoCaixa = table.clone(TEXTO)
textoCaixa.Text = { tipo = "string", padrao = "" }
textoCaixa.PlaceholderText = { tipo = "string", padrao = "" }
textoCaixa.PlaceholderColor3 = { tipo = "Color3", padrao = rgb(178, 178, 178) }
textoCaixa.ClearTextOnFocus = { tipo = "boolean", padrao = true }
textoCaixa.MultiLine = { tipo = "boolean", padrao = false }
textoCaixa.TextEditable = { tipo = "boolean", padrao = true }
classe("TextBox", "GuiObject", {
	criavel = true,
	props = textoCaixa,
	metodos = {
		CaptureFocus = function(self) local rec = eu(self, "CaptureFocus") rec.foco = true evento(rec, "Focused") end,
		ReleaseFocus = function(self, enter) local rec = eu(self, "ReleaseFocus") rec.foco = false evento(rec, "FocusLost", enter == true) end,
		IsFocused = function(self) return eu(self, "IsFocused").foco == true end,
	},
	eventos = { "FocusLost", "Focused", "ReturnPressedFromOnScreenKeyboard" },
})
classe("UIComponent", "Instance", {})
bolsa("UICorner", "UIComponent", { CornerRadius = { tipo = "UDim", padrao = C.UDim.new(0, 8) } })
bolsa("UIStroke", "UIComponent", { Color = { tipo = "Color3", padrao = c3(0, 0, 0) }, Thickness = { tipo = "number", padrao = 1 }, Transparency = { tipo = "number", padrao = 0 }, Enabled = { tipo = "boolean", padrao = true } })
bolsa("UIPadding", "UIComponent", {
	PaddingTop = { tipo = "UDim", padrao = C.UDim.new(0, 0) }, PaddingBottom = { tipo = "UDim", padrao = C.UDim.new(0, 0) },
	PaddingLeft = { tipo = "UDim", padrao = C.UDim.new(0, 0) }, PaddingRight = { tipo = "UDim", padrao = C.UDim.new(0, 0) },
})
bolsa("UIListLayout", "UIComponent", {
	FillDirection = { tipo = "EnumItem:FillDirection", padrao = Enum.FillDirection.Vertical },
	SortOrder = { tipo = "EnumItem:SortOrder", padrao = Enum.SortOrder.LayoutOrder },
	Padding = { tipo = "UDim", padrao = C.UDim.new(0, 0) },
	HorizontalAlignment = { tipo = "EnumItem:HorizontalAlignment", padrao = Enum.HorizontalAlignment.Left },
	VerticalAlignment = { tipo = "EnumItem:VerticalAlignment", padrao = Enum.VerticalAlignment.Top },
})
bolsa("UIGridLayout", "UIComponent", {
	CellSize = { tipo = "UDim2", padrao = C.ud2(0, 100, 0, 100) }, CellPadding = { tipo = "UDim2", padrao = C.ud2(0, 5, 0, 5) },
	SortOrder = { tipo = "EnumItem:SortOrder", padrao = Enum.SortOrder.LayoutOrder },
	FillDirection = { tipo = "EnumItem:FillDirection", padrao = Enum.FillDirection.Horizontal },
})
bolsa("UIGradient", "UIComponent", { Color = { tipo = "any" }, Transparency = { tipo = "any" }, Rotation = { tipo = "number", padrao = 0 }, Enabled = { tipo = "boolean", padrao = true } })
bolsa("UIAspectRatioConstraint", "UIComponent", { AspectRatio = { tipo = "number", padrao = 1 } })
bolsa("UIScale", "UIComponent", { Scale = { tipo = "number", padrao = 1 } })
bolsa("UISizeConstraint", "UIComponent", { MinSize = { tipo = "Vector2", padrao = C.Vector2.zero }, MaxSize = { tipo = "Vector2", padrao = C.Vector2.new(math.huge, math.huge) } })
bolsa("UITextSizeConstraint", "UIComponent", { MinTextSize = { tipo = "int", padrao = 1 }, MaxTextSize = { tipo = "int", padrao = 100 } })

-- recipientes do jogador
classe("Backpack", "Instance", {})
classe("PlayerGui", "Instance", {})
classe("PlayerScripts", "Instance", {})
classe("StarterGear", "Instance", {})
classe("StarterPlayerScripts", "Instance", {})
classe("StarterCharacterScripts", "Instance", {})
`;var so=`--!nolint
-- Cobra Code \u2014 ambiente Luau (6/8): os servi\xE7os do Roblox \u2014 game (DataModel), Workspace, Players (jogadores e
-- personagens), RunService, TweenService, Debris, DataStoreService, CollectionService, HttpService,
-- UserInputService, ContextActionService, Lighting e outros.
local C, host = ...
local DADOS = C.DADOS
local erro = C.erro
local classe = C.classe
local mudou = C.mudou
local evento = C.evento
local eu = C.eu
local rtype = C.real.type
local v3 = C.v3
local c3 = C.c3
local rgb = C.rgb
local Enum = C.Enum
local CF = C.CFrame
local M = C.metodosInstance

local function servico(nome: string, base: string?, def)
	def = def or {}
	def.servico = true
	return classe(nome, base or "Instance", def)
end

local function argTexto(v, i, metodo)
	if rtype(v) ~= "string" then
		if v == nil then erro("Argument " .. i .. " missing or nil") end
		erro(string.format("invalid argument #%d to '%s' (string expected, got %s)", i, metodo, C.typeof(v)))
	end
	return v
end

local function ctxDe(rec) return C.ctxAtual(rec.W) end

-- ============================================================================================
-- DataModel (game)
-- ============================================================================================
local NOMES_SERVICOS = {
	"Workspace", "Players", "Lighting", "ReplicatedFirst", "ReplicatedStorage", "ServerScriptService", "ServerStorage",
	"StarterGui", "StarterPack", "StarterPlayer", "Teams", "SoundService", "RunService", "TweenService", "Debris",
	"DataStoreService", "CollectionService", "HttpService", "UserInputService", "ContextActionService",
	"MarketplaceService", "BadgeService", "PhysicsService", "PathfindingService", "TextChatService", "Chat",
	"TeleportService", "GuiService", "LocalizationService", "MessagingService", "PolicyService", "GroupService",
	"ProximityPromptService", "VRService", "HapticService", "TextService", "SocialService", "AssetService",
	"ContentProvider", "AvatarEditorService", "MemoryStoreService", "AnalyticsService", "Selection",
}
C.NOMES_SERVICOS = NOMES_SERVICOS
-- os que aparecem no Explorer (os outros existem, mas ficam escondidos, como no Studio)
C.SERVICOS_VISIVEIS = {
	Workspace = true, Players = true, Lighting = true, ReplicatedFirst = true, ReplicatedStorage = true,
	ServerScriptService = true, ServerStorage = true, StarterGui = true, StarterPack = true, StarterPlayer = true,
	Teams = true, SoundService = true,
}

servico("DataModel", nil, {
	props = {
		PlaceId = { so = true, get = function() return 0 end },
		GameId = { so = true, get = function() return 0 end },
		JobId = { so = true, get = function() return "" end },
		CreatorId = { so = true, get = function() return 0 end },
		PlaceVersion = { so = true, get = function() return 0 end },
		PrivateServerId = { so = true, get = function() return "" end },
		PrivateServerOwnerId = { so = true, get = function() return 0 end },
		Workspace = { so = true, get = function(rec) return rec.W.workspace end },
	},
	metodos = {
		GetService = function(self, nome)
			local rec = eu(self, "GetService")
			argTexto(nome, 1, "GetService")
			local s = rec.W.servicos[nome]
			if not s then erro("'" .. nome .. "' is not a valid Service name") end
			return s
		end,
		FindService = function(self, nome)
			local rec = eu(self, "FindService")
			return rec.W.servicos[nome]
		end,
		IsLoaded = function(self) eu(self, "IsLoaded") return true end,
		BindToClose = function(self, f)
			local rec = eu(self, "BindToClose")
			if rtype(f) ~= "function" then erro("invalid argument #1 to 'BindToClose' (function expected, got " .. C.typeof(f) .. ")") end
			table.insert(rec.W.aoFechar, { f = f, ctx = C.ctxAtual(rec.W) })
		end,
		GetJobsInfo = function() return {} end,
		Shutdown = function(self) eu(self, "Shutdown") end,
	},
	eventos = { "Loaded", "Close" },
})

-- ============================================================================================
-- Workspace: consultas espaciais (sem f\xEDsica: caixas orientadas das pe\xE7as)
-- ============================================================================================
local function filtroOk(p, params)
	if not params then return true end
	local lista = params.FilterDescendantsInstances or {}
	local incluir = params.FilterType == Enum.RaycastFilterType.Include
	local dentro = false
	for _, x in lista do
		local xr = DADOS[x]
		if xr and (xr == p or C.eAncestral(xr, p)) then dentro = true break end
	end
	if incluir then return dentro end
	return not dentro
end

local function partesConsultaveis(W, params)
	local r = {}
	for _, p in C.partesDe(DADOS[W.workspace], {}) do
		if p.props.CanQuery ~= false and p.classe.nome ~= "Terrain" and filtroOk(p, params) then table.insert(r, p) end
	end
	return r
end

-- raio x caixa orientada; devolve dist\xE2ncia e normal (ou nil)
local function raioCaixa(origem, direcao, p)
	local inv = p.props.CFrame:Inverse()
	local o = inv * origem
	local d = inv:VectorToWorldSpace(direcao)
	local meia = p.props.Size / 2
	local tmin, tmax = 0, 1
	local eixoNormal, sinal = nil, 0
	for _, eixo in { "x", "y", "z" } do
		local oo, dd, m = o[eixo], d[eixo], meia[eixo]
		if math.abs(dd) < 1e-12 then
			if oo < -m or oo > m then return nil end
		else
			local t1, t2 = (-m - oo) / dd, (m - oo) / dd
			local s = -1
			if t1 > t2 then t1, t2 = t2, t1 s = 1 end
			if t1 > tmin then tmin = t1 eixoNormal = eixo sinal = s end
			if t2 < tmax then tmax = t2 end
			if tmin > tmax then return nil end
		end
	end
	local normalLocal = v3(0, 1, 0)
	if eixoNormal == "x" then normalLocal = v3(sinal, 0, 0)
	elseif eixoNormal == "y" then normalLocal = v3(0, sinal, 0)
	elseif eixoNormal == "z" then normalLocal = v3(0, 0, sinal) end
	return tmin, p.props.CFrame:VectorToWorldSpace(normalLocal)
end

local function caixaMundo(c, tam)
	local meia = tam / 2
	local ex = math.abs(c.R00) * meia.x + math.abs(c.R01) * meia.y + math.abs(c.R02) * meia.z
	local ey = math.abs(c.R10) * meia.x + math.abs(c.R11) * meia.y + math.abs(c.R12) * meia.z
	local ez = math.abs(c.R20) * meia.x + math.abs(c.R21) * meia.y + math.abs(c.R22) * meia.z
	local p = c.Position
	return p - v3(ex, ey, ez), p + v3(ex, ey, ez)
end

servico("Workspace", "Model", {
	props = {
		Gravity = { tipo = "number", padrao = 196.2 },
		CurrentCamera = { tipo = "Instance:Camera" },
		DistributedGameTime = { so = true, get = function(rec) return rec.W.quadro / C.QPS end },
		FallenPartsDestroyHeight = { tipo = "number", padrao = -500 },
		StreamingEnabled = { tipo = "boolean", padrao = false },
		AirDensity = { tipo = "number", padrao = 0.0012 },
		Terrain = { so = true, get = function(rec) return M.FindFirstChildOfClass(rec.proxy, "Terrain") end },
		SignalBehavior = { tipo = "any" },
	},
	metodos = {
		GetServerTimeNow = function(self)
			local rec = eu(self, "GetServerTimeNow")
			return rec.W.epoca + rec.W.quadro / C.QPS
		end,
		GetRealPhysicsFPS = function() return 60 end,
		Raycast = function(self, origem, direcao, params)
			local rec = eu(self, "Raycast")
			if not C.eV3(origem) then erro("invalid argument #1 to 'Raycast' (Vector3 expected, got " .. C.typeof(origem) .. ")") end
			if not C.eV3(direcao) then erro("invalid argument #2 to 'Raycast' (Vector3 expected, got " .. C.typeof(direcao) .. ")") end
			local melhor, melhorT, melhorN = nil, math.huge, nil
			for _, p in partesConsultaveis(rec.W, params) do
				local t, n = raioCaixa(origem, direcao, p)
				if t and t < melhorT then melhor, melhorT, melhorN = p, t, n end
			end
			if not melhor then return nil end
			local pos = origem + direcao * melhorT
			return C.novoRaycastResult({
				Instance = melhor.proxy, Position = pos, Normal = melhorN, Material = melhor.props.Material,
				Distance = (pos - origem).Magnitude,
			})
		end,
		GetPartBoundsInRadius = function(self, centro, raio, params)
			local rec = eu(self, "GetPartBoundsInRadius")
			if not C.eV3(centro) then erro("invalid argument #1 to 'GetPartBoundsInRadius' (Vector3 expected, got " .. C.typeof(centro) .. ")") end
			raio = C.argNumero(raio, 2, "GetPartBoundsInRadius")
			local r = {}
			for _, p in partesConsultaveis(rec.W, params) do
				local l = p.props.CFrame:Inverse() * centro
				local meia = p.props.Size / 2
				local q = v3(math.clamp(l.x, -meia.x, meia.x), math.clamp(l.y, -meia.y, meia.y), math.clamp(l.z, -meia.z, meia.z))
				if (q - l).Magnitude <= raio then table.insert(r, p.proxy) end
				if params and params.MaxParts and params.MaxParts > 0 and #r >= params.MaxParts then break end
			end
			return r
		end,
		GetPartBoundsInBox = function(self, c, tam, params)
			local rec = eu(self, "GetPartBoundsInBox")
			local mn, mx = caixaMundo(c, tam)
			local r = {}
			for _, p in partesConsultaveis(rec.W, params) do
				local a, b = caixaMundo(p.props.CFrame, p.props.Size)
				if a.x <= mx.x and b.x >= mn.x and a.y <= mx.y and b.y >= mn.y and a.z <= mx.z and b.z >= mn.z then
					table.insert(r, p.proxy)
				end
			end
			return r
		end,
		GetPartsInPart = function(self, parte, params)
			local rec = eu(self, "GetPartsInPart")
			local pr = DADOS[parte]
			if not pr then erro("invalid argument #1 to 'GetPartsInPart' (BasePart expected)") end
			local r = {}
			for _, x in self:GetPartBoundsInBox(pr.props.CFrame, pr.props.Size, params) do
				if x ~= parte then table.insert(r, x) end
			end
			return r
		end,
	},
})

-- ============================================================================================
-- Players e Player
-- ============================================================================================
servico("Players", nil, {
	props = {
		LocalPlayer = { so = true, get = function(rec) return ctxDe(rec).jogador end },
		MaxPlayers = { so = true, get = function() return 12 end },
		RespawnTime = { tipo = "number", padrao = 5 },
		CharacterAutoLoads = { tipo = "boolean", padrao = true },
		PreferredPlayers = { so = true, get = function() return 12 end },
	},
	metodos = {
		GetPlayers = function(self)
			local rec = eu(self, "GetPlayers")
			local r = {}
			for _, f in rec.filhos do
				if DADOS[f].classe.nome == "Player" then table.insert(r, f) end
			end
			return r
		end,
		GetPlayerFromCharacter = function(self, modelo)
			local rec = eu(self, "GetPlayerFromCharacter")
			for _, f in rec.filhos do
				local p = DADOS[f]
				if p.classe.nome == "Player" and modelo ~= nil and p.props.Character == modelo then return f end
			end
			return nil
		end,
		GetPlayerByUserId = function(self, id)
			local rec = eu(self, "GetPlayerByUserId")
			for _, f in rec.filhos do
				local p = DADOS[f]
				if p.classe.nome == "Player" and p.userId == id then return f end
			end
			return nil
		end,
		GetUserIdFromNameAsync = function(self, nome)
			local rec = eu(self, "GetUserIdFromNameAsync")
			for _, f in rec.filhos do if DADOS[f].nome == nome then return DADOS[f].userId end end
			erro("Players:GetUserIdFromNameAsync() failed: Unknown user")
		end,
		GetNameFromUserIdAsync = function(self, id)
			local rec = eu(self, "GetNameFromUserIdAsync")
			for _, f in rec.filhos do if DADOS[f].userId == id then return DADOS[f].nome end end
			erro("Players:GetNameFromUserIdAsync() failed: Unknown user")
		end,
		GetFriendsAsync = function() return { GetCurrentPage = function() return {} end, IsFinished = true } end,
		CreateHumanoidModelFromUserId = function(self) return nil end,
	},
	eventos = { "PlayerAdded", "PlayerRemoving", "PlayerMembershipChanged" },
})

classe("Player", "Instance", {
	props = {
		DisplayName = { tipo = "string", padrao = "" },
		UserId = { so = true, get = function(rec) return rec.userId end },
		userId = { so = true, get = function(rec) return rec.userId end },
		Character = { tipo = "Instance:Model" },
		Team = {
			tipo = "Instance:Team",
			set = function(rec, v)
				local antigo = rec.props.Team
				if antigo == v then return end
				rec.props.Team = v
				mudou(rec, "Team")
				if v then
					rec.props.TeamColor = DADOS[v].props.TeamColor
					rec.props.Neutral = false
					mudou(rec, "TeamColor")
					evento(DADOS[v], "PlayerAdded", rec.proxy)
				end
				if antigo then evento(DADOS[antigo], "PlayerRemoved", rec.proxy) end
			end,
		},
		TeamColor = { tipo = "BrickColor", padrao = C.BrickColor.new("White") },
		Neutral = { tipo = "boolean", padrao = true },
		AccountAge = { so = true, get = function() return 365 end },
		MembershipType = { so = true, get = function() return Enum.MembershipType.None end },
		RespawnLocation = { tipo = "Instance:SpawnLocation" },
		CanLoadCharacterAppearance = { tipo = "boolean", padrao = true },
		CameraMaxZoomDistance = { tipo = "number", padrao = 128 },
		CameraMinZoomDistance = { tipo = "number", padrao = 0.5 },
		HealthDisplayDistance = { tipo = "number", padrao = 100 },
		NameDisplayDistance = { tipo = "number", padrao = 100 },
		FollowUserId = { so = true, get = function() return 0 end },
		LocaleId = { so = true, get = function() return "pt-br" end },
	},
	metodos = {
		Kick = function(self, motivo)
			local rec = eu(self, "Kick")
			rec.motivoExpulsao = if motivo ~= nil then C.tostring(motivo) else ""
			C.removerJogador(rec.W, rec)
		end,
		LoadCharacter = function(self)
			local rec = eu(self, "LoadCharacter")
			C.carregarPersonagem(rec.W, rec)
		end,
		GetMouse = function(self)
			local rec = eu(self, "GetMouse")
			if not rec.mouse then rec.mouse = C.novoMouse(rec) end
			return rec.mouse
		end,
		IsInGroup = function() return false end,
		GetRankInGroup = function() return 0 end,
		GetRoleInGroup = function() return "Guest" end,
		HasAppearanceLoaded = function() return true end,
		IsFriendsWith = function() return false end,
		GetNetworkPing = function() return 0 end,
		DistanceFromCharacter = function(self, pos)
			local rec = eu(self, "DistanceFromCharacter")
			local m = rec.props.Character
			local raiz = m and M.FindFirstChild(m, "HumanoidRootPart")
			if not raiz then return 0 end
			return (DADOS[raiz].props.CFrame.Position - pos).Magnitude
		end,
		GetFriendsOnline = function() return {} end,
		SetAttribute = M.SetAttribute,
	},
	eventos = { "CharacterAdded", "CharacterRemoving", "CharacterAppearanceLoaded", "Chatted", "Idled" },
})
C.CLASSES.Player.naoClonavel = true

-- Mouse do jogador (cliente): s\xF3 o b\xE1sico
classe("Mouse", "Instance", {
	props = {
		Hit = { so = true, get = function(rec) return rec.hit or CF.identity end },
		Target = { so = true, get = function(rec) return rec.alvo end },
		Origin = { so = true, get = function() return CF.new(0, 20, 20) end },
		UnitRay = { so = true, get = function() return nil end },
		X = { so = true, get = function() return 0 end },
		Y = { so = true, get = function() return 0 end },
		Icon = { tipo = "string", padrao = "" },
		TargetFilter = { tipo = "Instance" },
		ViewSizeX = { so = true, get = function() return 1280 end },
		ViewSizeY = { so = true, get = function() return 720 end },
	},
	eventos = { "Button1Down", "Button1Up", "Button2Down", "Button2Up", "Move", "WheelForward", "WheelBackward", "Idle" },
})
function C.novoMouse(jogadorRec)
	local proxy, rec = C.novaInstancia(jogadorRec.W, "Mouse")
	rec.jogador = jogadorRec
	return proxy
end

-- ============================================================================================
-- Personagens
-- ============================================================================================
local PELE = rgb(234, 184, 146)
local CAMISA = rgb(13, 105, 172)
local CALCA = rgb(39, 70, 45)

local function posicaoDeSpawn(W, prec)
	local ws = DADOS[W.workspace]
	local escolhido = prec and prec.props.RespawnLocation and DADOS[prec.props.RespawnLocation]
	if not escolhido then
		for _, d in C.descendentes(ws, {}) do
			local r = DADOS[d]
			if r.classe.nome == "SpawnLocation" and r.props.Enabled then escolhido = r break end
		end
	end
	if escolhido then
		local c = escolhido.props.CFrame
		return c.Position + v3(0, escolhido.props.Size.y / 2 + 3, 0)
	end
	return v3(0, 3, 0)
end

-- cria o modelo do personagem (R15 simplificado): HumanoidRootPart, cabe\xE7a, tronco, m\xE3os e p\xE9s, Humanoid
function C.criarPersonagem(W, nome: string, pos)
	local modelo, mrec = C.novaInstancia(W, "Model")
	mrec.nome = nome
	local raizCF = CF.new(pos)
	local pecas = {
		{ "HumanoidRootPart", v3(2, 2, 1), v3(0, 0, 0), PELE, 1 },
		{ "Head", v3(1.2, 1.2, 1.2), v3(0, 1.75, 0), PELE, 0 },
		{ "UpperTorso", v3(2, 1.6, 1), v3(0, 0.4, 0), CAMISA, 0 },
		{ "LowerTorso", v3(2, 0.6, 1), v3(0, -0.7, 0), CAMISA, 0 },
		{ "LeftHand", v3(0.6, 0.6, 0.6), v3(-1.4, -0.8, 0), PELE, 0 },
		{ "RightHand", v3(0.6, 0.6, 0.6), v3(1.4, -0.8, 0), PELE, 0 },
		{ "LeftFoot", v3(0.9, 0.4, 1), v3(-0.5, -2.8, 0), CALCA, 0 },
		{ "RightFoot", v3(0.9, 0.4, 1), v3(0.5, -2.8, 0), CALCA, 0 },
	}
	local raiz
	for _, def in pecas do
		local p, prec = C.novaInstancia(W, "Part")
		prec.nome = def[1]
		prec.props.Size = def[2]
		prec.props.CFrame = raizCF * CF.new(def[3])
		prec.props.Color = def[4]
		prec.props.Transparency = def[5]
		prec.props.CanCollide = def[1] ~= "HumanoidRootPart"
		C.reparentar(prec, modelo)
		if def[1] == "HumanoidRootPart" then raiz = prec else C.soldar(raiz, prec) end
	end
	local face = C.novaInstancia(W, "Decal")
	DADOS[face].nome = "face"
	DADOS[face].props.Texture = "rbxasset://textures/face.png"
	C.reparentar(DADOS[face], M.FindFirstChild(modelo, "Head"))
	local hum, hrec = C.novaInstancia(W, "Humanoid")
	hrec.props.DisplayName = nome
	local sp = W.servicos.StarterPlayer and DADOS[W.servicos.StarterPlayer]
	if sp then
		hrec.props.WalkSpeed = sp.props.CharacterWalkSpeed
		hrec.props.JumpPower = sp.props.CharacterJumpPower
	end
	C.reparentar(hrec, modelo)
	local anim = C.novaInstancia(W, "Animator")
	C.reparentar(DADOS[anim], hum)
	mrec.props.PrimaryPart = raiz.proxy
	return modelo, mrec
end

function C.jogadorDoPersonagem(W, mrec)
	if not mrec then return nil end
	local jogadores = DADOS[W.servicos.Players]
	for _, f in jogadores.filhos do
		local p = DADOS[f]
		if p.classe.nome == "Player" and p.props.Character == mrec.proxy then return p end
	end
	return nil
end

function C.carregarPersonagem(W, prec)
	local antigo = prec.props.Character
	if antigo and DADOS[antigo] then
		evento(prec, "CharacterRemoving", antigo)
		C.destruir(DADOS[antigo])
	end
	-- mochila e interface recome\xE7am (StarterPack e StarterGui s\xE3o copiados)
	local mochila = M.FindFirstChild(prec.proxy, "Backpack")
	if mochila then
		for _, f in table.clone(DADOS[mochila].filhos) do C.destruir(DADOS[f]) end
		local sp = W.servicos.StarterPack
		for _, f in DADOS[sp].filhos do
			local c = M.Clone(f)
			if c then C.reparentar(DADOS[c], mochila) end
		end
	end
	local pg = M.FindFirstChild(prec.proxy, "PlayerGui")
	if pg then
		for _, f in table.clone(DADOS[pg].filhos) do
			local r = DADOS[f]
			if r.props.ResetOnSpawn ~= false then C.destruir(r) end
		end
		local sg = W.servicos.StarterGui
		for _, f in DADOS[sg].filhos do
			local r = DADOS[f]
			local jaTem = false
			if r.props.ResetOnSpawn == false then
				for _, g in DADOS[pg].filhos do if DADOS[g].nome == r.nome then jaTem = true end end
			end
			if not jaTem then
				local c = M.Clone(f)
				if c then C.reparentar(DADOS[c], pg) end
			end
		end
	end
	local modelo, mrec = C.criarPersonagem(W, prec.nome, posicaoDeSpawn(W, prec))
	prec.props.Character = modelo
	C.reparentar(mrec, W.workspace)
	mudou(prec, "Character")
	evento(prec, "CharacterAdded", modelo)
	evento(prec, "CharacterAppearanceLoaded", modelo)
	return modelo
end

function C.adicionarJogador(W, nome: string, opcoes)
	opcoes = opcoes or {}
	local p, prec = C.novaInstancia(W, "Player")
	prec.nome = nome
	prec.props.DisplayName = opcoes.DisplayName or nome
	W.proximoUserId += 1
	prec.userId = opcoes.UserId or W.proximoUserId
	for _, nomeFilho in { "Backpack", "PlayerGui", "PlayerScripts", "StarterGear" } do
		local f, fr = C.novaInstancia(W, nomeFilho)
		fr.nome = nomeFilho
		C.reparentar(fr, p)
	end
	if opcoes.Team then prec.props.Team = opcoes.Team prec.props.Neutral = false end
	local jogadores = DADOS[W.servicos.Players]
	C.reparentar(prec, W.servicos.Players)
	evento(jogadores, "PlayerAdded", p)
	C.processar(W)
	if not W.parado and jogadores.props.CharacterAutoLoads and opcoes.semPersonagem ~= true then
		C.carregarPersonagem(W, prec)
		C.processar(W)
	end
	return p, prec
end

function C.removerJogador(W, prec)
	if prec.saiu then return end
	prec.saiu = true
	local jogadores = DADOS[W.servicos.Players]
	evento(jogadores, "PlayerRemoving", prec.proxy)
	local m = prec.props.Character
	if m and DADOS[m] then
		evento(prec, "CharacterRemoving", m)
		C.destruir(DADOS[m])
	end
	C.reparentar(prec, nil, true)
	C.processar(W)
end

-- quando um Humanoid morre: o personagem do jogador renasce depois de Players.RespawnTime
function C.aoMorrer(W, hrec)
	local m = C.personagemDe(hrec)
	local prec = C.jogadorDoPersonagem(W, m)
	if not prec then return end
	local jogadores = DADOS[W.servicos.Players]
	if not jogadores.props.CharacterAutoLoads then return end
	local personagem = m.proxy
	C.depois(W, jogadores.props.RespawnTime, function()
		if prec.pai and prec.props.Character == personagem then C.carregarPersonagem(W, prec) end
	end)
end

-- ============================================================================================
-- RunService
-- ============================================================================================
servico("RunService", nil, {
	metodos = {
		IsServer = function(self) return ctxDe(eu(self, "IsServer")).lado == "servidor" end,
		IsClient = function(self) return ctxDe(eu(self, "IsClient")).lado == "cliente" end,
		IsStudio = function() return true end,
		IsRunning = function() return true end,
		IsRunMode = function() return true end,
		IsEdit = function() return false end,
		BindToRenderStep = function(self, nome, prioridade, f)
			local rec = eu(self, "BindToRenderStep")
			argTexto(nome, 1, "BindToRenderStep")
			rec.passos = rec.passos or {}
			if rec.passos[nome] then rec.passos[nome]:Disconnect() end
			rec.passos[nome] = C.sinalDe(rec, "RenderStepped"):Connect(f)
		end,
		UnbindFromRenderStep = function(self, nome)
			local rec = eu(self, "UnbindFromRenderStep")
			if rec.passos and rec.passos[nome] then
				rec.passos[nome]:Disconnect()
				rec.passos[nome] = nil
			end
		end,
		Set3dRenderingEnabled = function() end,
	},
	eventos = { "Heartbeat", "Stepped", "RenderStepped", "PreSimulation", "PostSimulation", "PreRender", "PreAnimation" },
})

-- ============================================================================================
-- TweenService e Tween
-- ============================================================================================
local function estadoTween(rec, estado)
	rec.estado = estado
	mudou(rec, "PlaybackState")
end

local function pararTween(rec)
	if rec.chave then rec.W.animacoes[rec.chave] = nil rec.chave = nil end
end

local function iniciarTween(rec)
	local W = rec.W
	local info = rec.info
	local alvo = DADOS[rec.instancia]
	local chave = {}
	rec.chave = chave
	local inicio = W.quadro - (rec.decorrido or 0)
	local atraso = info.DelayTime
	local duracao = info.Time
	local repeticoes = info.RepeatCount
	local reverte = info.Reverses
	local valoresIniciais = rec.iniciais
	if not valoresIniciais then
		valoresIniciais = {}
		for prop in rec.objetivos do valoresIniciais[prop] = alvo.proxy[prop] end
	end
	rec.iniciais = valoresIniciais
	estadoTween(rec, if atraso > 0 and not rec.decorrido then Enum.PlaybackState.Delayed else Enum.PlaybackState.Playing)
	local estilo, direcao = info.EasingStyle.Name, info.EasingDirection.Name
	W.animacoes[chave] = function(q)
		if alvo.destruido then
			pararTween(rec)
			return
		end
		local t = (q - inicio) / C.QPS
		rec.decorrido = q - inicio
		if t < atraso then return end
		if rec.estado ~= Enum.PlaybackState.Playing then estadoTween(rec, Enum.PlaybackState.Playing) end
		t -= atraso
		local ciclo = if reverte then duracao * 2 else duracao
		local total = if repeticoes < 0 then math.huge else ciclo * (repeticoes + 1)
		local acabou = t >= total
		local dentro
		if duracao <= 0 then
			dentro = 1
		elseif acabou then
			dentro = if reverte then 0 else 1
		else
			local u = t % ciclo
			if reverte and u > duracao then dentro = (ciclo - u) / duracao else dentro = math.min(u / duracao, 1) end
		end
		local alfa = C.suavizar(estilo, direcao, dentro)
		for prop, final in rec.objetivos do
			local v = C.interpolar(valoresIniciais[prop], final, alfa)
			local ok, e = pcall(function() alvo.proxy[prop] = v end)
		end
		if acabou then
			pararTween(rec)
			rec.decorrido = nil
			rec.iniciais = nil
			estadoTween(rec, Enum.PlaybackState.Completed)
			evento(rec, "Completed", Enum.PlaybackState.Completed)
		end
	end
end

classe("TweenBase", "Instance", {
	props = {
		PlaybackState = { so = true, get = function(rec) return rec.estado end },
	},
	metodos = {
		Play = function(self)
			local rec = eu(self, "Play")
			if rec.chave then return end
			if rec.estado == Enum.PlaybackState.Completed or rec.estado == Enum.PlaybackState.Cancelled then
				rec.decorrido = nil
				rec.iniciais = nil
			end
			iniciarTween(rec)
		end,
		Pause = function(self)
			local rec = eu(self, "Pause")
			if not rec.chave then return end
			pararTween(rec)
			estadoTween(rec, Enum.PlaybackState.Paused)
		end,
		Cancel = function(self)
			local rec = eu(self, "Cancel")
			pararTween(rec)
			rec.decorrido = nil
			rec.iniciais = nil
			estadoTween(rec, Enum.PlaybackState.Cancelled)
			evento(rec, "Completed", Enum.PlaybackState.Cancelled)
		end,
	},
	eventos = { "Completed" },
})
classe("Tween", "TweenBase", {
	props = {
		TweenInfo = { so = true, get = function(rec) return rec.info end },
		Instance = { so = true, get = function(rec) return rec.instancia end },
	},
})

servico("TweenService", nil, {
	metodos = {
		Create = function(self, inst, info, objetivos)
			local rec = eu(self, "Create")
			local alvo = DADOS[inst]
			if not alvo then erro("invalid argument #1 to 'Create' (Instance expected, got " .. C.typeof(inst) .. ")") end
			if C.typeof(info) ~= "TweenInfo" then erro("invalid argument #2 to 'Create' (TweenInfo expected, got " .. C.typeof(info) .. ")") end
			if rtype(objetivos) ~= "table" then erro("invalid argument #3 to 'Create' (table expected, got " .. C.typeof(objetivos) .. ")") end
			local copia = {}
			for prop, v in objetivos do
				local p = alvo.classe.props[prop]
				if not p then erro(string.format("TweenService:Create no property named '%s' for object '%s'", C.real.tostring(prop), alvo.nome)) end
				local atual = inst[prop]
				local ta, tv = C.typeof(atual), C.typeof(v)
				if ta ~= tv and not (ta == "number" and tv == "number") then
					erro(string.format("TweenService:Create property named '%s' cannot be tweened due to type mismatch (property is a '%s', but given type is '%s')", prop, ta, tv))
				end
				copia[prop] = v
			end
			local proxy, trec = C.novaInstancia(rec.W, "Tween")
			trec.instancia = inst
			trec.info = info
			trec.objetivos = copia
			trec.estado = Enum.PlaybackState.Begin
			return proxy
		end,
		GetValue = function(self, alfa, estilo, direcao)
			eu(self, "GetValue")
			return C.suavizar((C.paraEnum("EasingStyle", estilo) or Enum.EasingStyle.Linear).Name,
				(C.paraEnum("EasingDirection", direcao) or Enum.EasingDirection.Out).Name, alfa)
		end,
	},
})

-- ============================================================================================
-- Debris
-- ============================================================================================
servico("Debris", nil, {
	props = { MaxItems = { tipo = "int", padrao = 1000 } },
	metodos = {
		AddItem = function(self, inst, tempo)
			local rec = eu(self, "AddItem")
			local alvo = DADOS[inst]
			if not alvo then erro("invalid argument #1 to 'AddItem' (Instance expected, got " .. C.typeof(inst) .. ")") end
			C.depois(rec.W, math.max(tonumber(tempo) or 10, 0), function()
				if not alvo.destruido then C.destruir(alvo) end
			end)
		end,
		addItem = function(self, inst, tempo) return self:AddItem(inst, tempo) end,
	},
})

-- ============================================================================================
-- DataStoreService (simulado: guarda numa tabela que dura o teste inteiro; pode falhar de prop\xF3sito)
-- ============================================================================================
local TIPOS_SALVAVEIS = { ["nil"] = true, boolean = true, number = true, string = true, table = true }
local function conferirSalvavel(v, caminho)
	local t = C.typeof(v)
	if not TIPOS_SALVAVEIS[t] then
		erro(string.format("104: Cannot store %s in data store. Data stores can only accept valid UTF-8 characters.", t))
	end
	if t == "table" then
		for k, x in C.real.pairs(v) do
			local tk = C.typeof(k)
			if tk ~= "string" and tk ~= "number" then erro("104: Cannot store table with " .. tk .. " keys in data store.") end
			conferirSalvavel(x)
		end
	end
end
local function falhaSimulada(W)
	local f = W.dados.falhas
	if f and f > 0 then
		W.dados.falhas = f - 1
		erro("502: API Services rejected request with error. HTTP 500 (Internal Server Error)")
	end
end
local function chaveDS(k, metodo)
	if rtype(k) == "number" then return C.numeroTexto(k) end
	if rtype(k) ~= "string" then
		if k == nil then erro("Argument 1 missing or nil") end
		erro(string.format("invalid argument #1 to '%s' (string expected, got %s)", metodo, C.typeof(k)))
	end
	if #k == 0 then erro("102: Key name can't be empty.") end
	if #k > 50 then erro("103: Key name exceeds the 50 character limit.") end
	return k
end
local function soServidor(rec)
	if ctxDe(rec).lado ~= "servidor" then erro("DataStoreService: DataStores can only be accessed from the server.") end
end
local function tabelaDS(rec)
	local W = rec.W
	local t = W.dados.lojas[rec.chaveLoja]
	if not t then
		t = {}
		W.dados.lojas[rec.chaveLoja] = t
	end
	return t
end
local function registrarUso(rec, metodo, chave)
	table.insert(rec.W.dados.registro, { loja = rec.nome, metodo = metodo, chave = chave, t = rec.W.quadro / C.QPS })
end

local MDS = {}
function MDS.GetAsync(self, chave)
	local rec = eu(self, "GetAsync")
	soServidor(rec)
	chave = chaveDS(chave, "GetAsync")
	falhaSimulada(rec.W)
	registrarUso(rec, "GetAsync", chave)
	return C.copiaProfunda(tabelaDS(rec)[chave]), nil
end
function MDS.SetAsync(self, chave, valor)
	local rec = eu(self, "SetAsync")
	soServidor(rec)
	chave = chaveDS(chave, "SetAsync")
	conferirSalvavel(valor)
	falhaSimulada(rec.W)
	registrarUso(rec, "SetAsync", chave)
	tabelaDS(rec)[chave] = C.copiaProfunda(valor)
	return "v1"
end
function MDS.UpdateAsync(self, chave, f)
	local rec = eu(self, "UpdateAsync")
	soServidor(rec)
	chave = chaveDS(chave, "UpdateAsync")
	if rtype(f) ~= "function" then erro("invalid argument #2 to 'UpdateAsync' (function expected, got " .. C.typeof(f) .. ")") end
	falhaSimulada(rec.W)
	registrarUso(rec, "UpdateAsync", chave)
	local t = tabelaDS(rec)
	local novo = f(C.copiaProfunda(t[chave]), nil)
	if novo == nil then return nil end
	conferirSalvavel(novo)
	t[chave] = C.copiaProfunda(novo)
	return C.copiaProfunda(novo)
end
function MDS.RemoveAsync(self, chave)
	local rec = eu(self, "RemoveAsync")
	soServidor(rec)
	chave = chaveDS(chave, "RemoveAsync")
	falhaSimulada(rec.W)
	registrarUso(rec, "RemoveAsync", chave)
	local t = tabelaDS(rec)
	local antigo = t[chave]
	t[chave] = nil
	return antigo
end
function MDS.IncrementAsync(self, chave, delta)
	local rec = eu(self, "IncrementAsync")
	soServidor(rec)
	chave = chaveDS(chave, "IncrementAsync")
	falhaSimulada(rec.W)
	registrarUso(rec, "IncrementAsync", chave)
	local t = tabelaDS(rec)
	local atual = t[chave] or 0
	if rtype(atual) ~= "number" then erro("IncrementAsync: the value stored is not a number") end
	t[chave] = math.floor(atual + (tonumber(delta) or 1))
	return t[chave]
end
function MDS.GetSortedAsync(self, crescente, tamanho, minimo, maximo)
	local rec = eu(self, "GetSortedAsync")
	soServidor(rec)
	falhaSimulada(rec.W)
	local itens = {}
	for k, v in tabelaDS(rec) do
		if rtype(v) == "number" and (minimo == nil or v >= minimo) and (maximo == nil or v <= maximo) then
			table.insert(itens, { key = k, value = v })
		end
	end
	table.sort(itens, function(a, b)
		if a.value == b.value then return a.key < b.key end
		if crescente then return a.value < b.value end
		return a.value > b.value
	end)
	tamanho = math.max(1, math.floor(tonumber(tamanho) or 50))
	local proxy, prec = C.novaInstancia(rec.W, "DataStorePages")
	prec.itens = itens
	prec.tamanho = tamanho
	prec.pagina = 1
	return proxy
end
classe("GlobalDataStore", "Instance", { metodos = MDS })
classe("DataStore", "GlobalDataStore", {})
classe("OrderedDataStore", "GlobalDataStore", {})
classe("DataStorePages", "Instance", {
	props = {
		IsFinished = { so = true, get = function(rec) return rec.pagina * rec.tamanho >= #rec.itens end },
	},
	metodos = {
		GetCurrentPage = function(self)
			local rec = eu(self, "GetCurrentPage")
			local r = {}
			for i = (rec.pagina - 1) * rec.tamanho + 1, math.min(#rec.itens, rec.pagina * rec.tamanho) do
				table.insert(r, table.clone(rec.itens[i]))
			end
			return r
		end,
		AdvanceToNextPageAsync = function(self)
			local rec = eu(self, "AdvanceToNextPageAsync")
			rec.pagina += 1
		end,
	},
})

local function loja(rec, nome, escopo, classeNome)
	soServidor(rec)
	argTexto(nome, 1, "GetDataStore")
	escopo = escopo or "global"
	local chave = classeNome .. "|" .. nome .. "|" .. C.real.tostring(escopo)
	rec.lojas = rec.lojas or {}
	if rec.lojas[chave] then return rec.lojas[chave] end
	local proxy, lrec = C.novaInstancia(rec.W, classeNome)
	lrec.nome = nome
	lrec.chaveLoja = (if classeNome == "OrderedDataStore" then "ordenado:" else "") .. nome .. (if escopo ~= "global" then "/" .. escopo else "")
	lrec.protegidoNome = true
	rec.lojas[chave] = proxy
	return proxy
end
servico("DataStoreService", nil, {
	metodos = {
		GetDataStore = function(self, nome, escopo) return loja(eu(self, "GetDataStore"), nome, escopo, "DataStore") end,
		GetOrderedDataStore = function(self, nome, escopo) return loja(eu(self, "GetOrderedDataStore"), nome, escopo, "OrderedDataStore") end,
		GetGlobalDataStore = function(self) return loja(eu(self, "GetGlobalDataStore"), "global", nil, "DataStore") end,
		GetRequestBudgetForRequestType = function() return 60 end,
	},
})

-- ============================================================================================
-- CollectionService (tags)
-- ============================================================================================
servico("CollectionService", nil, {
	metodos = {
		GetTagged = function(self, tag)
			local rec = eu(self, "GetTagged")
			argTexto(tag, 1, "GetTagged")
			local r = {}
			for i, inst in rec.W.tags[tag] or {} do
				local ir = DADOS[inst]
				if ir and ir.tags[tag] and C.noJogo(ir) then table.insert(r, inst) end
			end
			return r
		end,
		AddTag = function(self, inst, tag) eu(self, "AddTag") M.AddTag(inst, tag) end,
		RemoveTag = function(self, inst, tag) eu(self, "RemoveTag") M.RemoveTag(inst, tag) end,
		HasTag = function(self, inst, tag) eu(self, "HasTag") return M.HasTag(inst, tag) end,
		GetTags = function(self, inst) eu(self, "GetTags") return M.GetTags(inst) end,
		GetAllTags = function(self)
			local rec = eu(self, "GetAllTags")
			local r = {}
			for t in rec.W.tags do table.insert(r, t) end
			table.sort(r)
			return r
		end,
		GetInstanceAddedSignal = function(self, tag)
			local rec = eu(self, "GetInstanceAddedSignal")
			return C.sinalDeTag(rec.W, tag, true)
		end,
		GetInstanceRemovedSignal = function(self, tag)
			local rec = eu(self, "GetInstanceRemovedSignal")
			return C.sinalDeTag(rec.W, tag, false)
		end,
	},
	eventos = { "TagAdded", "TagRemoved" },
})
function C.sinalDeTag(W, tag, adicionado)
	local mapa = if adicionado then W.sinaisTagAdd else W.sinaisTagRem
	local s = mapa[tag]
	if not s then
		s = C.novoSinal(W, if adicionado then "InstanceAdded" else "InstanceRemoved")
		mapa[tag] = s
	end
	return s
end

-- ============================================================================================
-- HttpService
-- ============================================================================================
servico("HttpService", nil, {
	props = { HttpEnabled = { tipo = "boolean", padrao = false } },
	metodos = {
		JSONEncode = function(self, v)
			eu(self, "JSONEncode")
			return C.json.encode(v)
		end,
		JSONDecode = function(self, s)
			eu(self, "JSONDecode")
			return C.json.decode(s)
		end,
		GenerateGUID = function(self, chaves)
			local rec = eu(self, "GenerateGUID")
			local r = rec.W.rng
			local function hex(n)
				local t = {}
				for i = 1, n do t[i] = string.format("%X", r:NextInteger(0, 15)) end
				return table.concat(t)
			end
			local g = hex(8) .. "-" .. hex(4) .. "-4" .. hex(3) .. "-" .. hex(4) .. "-" .. hex(12)
			if chaves == false then return g end
			return "{" .. g .. "}"
		end,
		UrlEncode = function(self, s)
			eu(self, "UrlEncode")
			return (string.gsub(C.real.tostring(s), "[^%w%-_%.~]", function(ch) return string.format("%%%02X", string.byte(ch)) end))
		end,
		GetAsync = function() erro("Http requests are not enabled. Enable via game settings") end,
		PostAsync = function() erro("Http requests are not enabled. Enable via game settings") end,
		RequestAsync = function() erro("Http requests are not enabled. Enable via game settings") end,
	},
})

-- ============================================================================================
-- Entrada do jogador (cliente): UserInputService e ContextActionService
-- ============================================================================================
classe("InputObject", "Instance", {
	props = {
		KeyCode = { tipo = "EnumItem:KeyCode", padrao = Enum.KeyCode.Unknown },
		UserInputType = { tipo = "EnumItem:UserInputType", padrao = Enum.UserInputType.None },
		UserInputState = { tipo = "EnumItem:UserInputState", padrao = Enum.UserInputState.None },
		Position = { tipo = "Vector3", padrao = v3(0, 0, 0) },
		Delta = { tipo = "Vector3", padrao = v3(0, 0, 0) },
	},
	metodos = {
		IsModifierKeyDown = function() return false end,
	},
})
servico("UserInputService", nil, {
	props = {
		KeyboardEnabled = { so = true, get = function() return true end },
		MouseEnabled = { so = true, get = function() return true end },
		TouchEnabled = { so = true, get = function() return false end },
		GamepadEnabled = { so = true, get = function() return false end },
		VREnabled = { so = true, get = function() return false end },
		MouseBehavior = { tipo = "any" },
		MouseIconEnabled = { tipo = "boolean", padrao = true },
		MouseDeltaSensitivity = { tipo = "number", padrao = 1 },
	},
	metodos = {
		IsKeyDown = function(self, tecla)
			local rec = eu(self, "IsKeyDown")
			local ctx = ctxDe(rec)
			local apertadas = ctx.jogador and rec.W.teclas[ctx.jogador]
			return apertadas ~= nil and apertadas[tecla] == true
		end,
		GetKeysPressed = function(self)
			local rec = eu(self, "GetKeysPressed")
			local ctx = ctxDe(rec)
			local r = {}
			for tecla in (ctx.jogador and rec.W.teclas[ctx.jogador]) or {} do
				local inp = C.novaInstancia(rec.W, "InputObject")
				DADOS[inp].props.KeyCode = tecla
				table.insert(r, inp)
			end
			return r
		end,
		IsMouseButtonPressed = function() return false end,
		GetMouseLocation = function() return C.Vector2.new(640, 360) end,
		GetMouseDelta = function() return C.Vector2.zero end,
		GetFocusedTextBox = function() return nil end,
		GetLastInputType = function() return Enum.UserInputType.Keyboard end,
		GetStringForKeyCode = function(self, k) return k and k.Name or "" end,
	},
	eventos = { "InputBegan", "InputEnded", "InputChanged", "JumpRequest", "TouchTap", "TouchStarted", "TouchEnded", "WindowFocused", "WindowFocusReleased", "LastInputTypeChanged" },
})
servico("ContextActionService", nil, {
	metodos = {
		BindAction = function(self, nome, f, botao, ...)
			local rec = eu(self, "BindAction")
			argTexto(nome, 1, "BindAction")
			local ctx = ctxDe(rec)
			local acoes = rec.W.acoes
			table.insert(acoes, { nome = nome, f = f, entradas = { ... }, ctx = ctx })
		end,
		BindActionAtPriority = function(self, nome, f, botao, prioridade, ...)
			return self:BindAction(nome, f, botao, ...)
		end,
		UnbindAction = function(self, nome)
			local rec = eu(self, "UnbindAction")
			local ctx = ctxDe(rec)
			for i = #rec.W.acoes, 1, -1 do
				local a = rec.W.acoes[i]
				if a.nome == nome and a.ctx.jogador == ctx.jogador then table.remove(rec.W.acoes, i) end
			end
		end,
		UnbindAllActions = function(self)
			local rec = eu(self, "UnbindAllActions")
			table.clear(rec.W.acoes)
		end,
		GetAllBoundActionInfo = function(self)
			local rec = eu(self, "GetAllBoundActionInfo")
			local r = {}
			for _, a in rec.W.acoes do r[a.nome] = { inputTypes = a.entradas } end
			return r
		end,
		GetButton = function() return nil end,
		SetTitle = function() end,
		SetImage = function() end,
		SetPosition = function() end,
		SetDescription = function() end,
	},
})

-- ============================================================================================
-- Outros servi\xE7os
-- ============================================================================================
local function horaTexto(h: number): string
	h = h % 24
	local hh = math.floor(h)
	local mm = math.floor((h - hh) * 60)
	local ss = math.floor(((h - hh) * 60 - mm) * 60 + 0.5)
	if ss >= 60 then ss = 59 end
	return string.format("%02d:%02d:%02d", hh, mm, ss)
end
servico("Lighting", nil, {
	props = {
		ClockTime = {
			tipo = "number", padrao = 14,
			set = function(rec, v) rec.props.ClockTime = v % 24 mudou(rec, "ClockTime") mudou(rec, "TimeOfDay") end,
		},
		TimeOfDay = {
			tipo = "string",
			get = function(rec) return horaTexto(rec.props.ClockTime) end,
			set = function(rec, v)
				local h, m, s = string.match(v, "^(%d+):(%d+):?(%d*)$")
				if not h then return end
				rec.props.ClockTime = (tonumber(h) + tonumber(m) / 60 + (tonumber(s) or 0) / 3600) % 24
				mudou(rec, "ClockTime")
				mudou(rec, "TimeOfDay")
			end,
		},
		Brightness = { tipo = "number", padrao = 2 },
		Ambient = { tipo = "Color3", padrao = rgb(70, 70, 70) },
		OutdoorAmbient = { tipo = "Color3", padrao = rgb(128, 128, 128) },
		FogEnd = { tipo = "number", padrao = 100000 },
		FogStart = { tipo = "number", padrao = 0 },
		FogColor = { tipo = "Color3", padrao = rgb(192, 192, 192) },
		GlobalShadows = { tipo = "boolean", padrao = true },
		ExposureCompensation = { tipo = "number", padrao = 0 },
		GeographicLatitude = { tipo = "number", padrao = 0 },
		EnvironmentDiffuseScale = { tipo = "number", padrao = 1 },
		EnvironmentSpecularScale = { tipo = "number", padrao = 1 },
		ColorShift_Top = { tipo = "Color3", padrao = c3(0, 0, 0) },
		ColorShift_Bottom = { tipo = "Color3", padrao = c3(0, 0, 0) },
	},
	metodos = {
		GetMinutesAfterMidnight = function(self) return eu(self, "GetMinutesAfterMidnight").props.ClockTime * 60 end,
		SetMinutesAfterMidnight = function(self, m) self.ClockTime = (tonumber(m) or 0) / 60 end,
		GetSunDirection = function() return v3(0, 1, 0) end,
		GetMoonDirection = function() return v3(0, -1, 0) end,
	},
	eventos = { "LightingChanged" },
})
servico("StarterGui", nil, {
	props = { ShowDevelopmentGui = { tipo = "boolean", padrao = true }, ResetPlayerGuiOnSpawn = { tipo = "boolean", padrao = true } },
	metodos = {
		SetCore = function() end,
		GetCore = function() return nil end,
		SetCoreGuiEnabled = function() end,
		GetCoreGuiEnabled = function() return true end,
	},
})
servico("StarterPack")
servico("StarterPlayer", nil, {
	props = {
		CharacterWalkSpeed = { tipo = "number", padrao = 16 },
		CharacterJumpPower = { tipo = "number", padrao = 50 },
		CharacterJumpHeight = { tipo = "number", padrao = 7.2 },
		CharacterUseJumpPower = { tipo = "boolean", padrao = true },
		CharacterMaxSlopeAngle = { tipo = "number", padrao = 89 },
		CameraMaxZoomDistance = { tipo = "number", padrao = 128 },
		CameraMinZoomDistance = { tipo = "number", padrao = 0.5 },
		AutoJumpEnabled = { tipo = "boolean", padrao = true },
		LoadCharacterAppearance = { tipo = "boolean", padrao = true },
		HealthDisplayDistance = { tipo = "number", padrao = 100 },
		NameDisplayDistance = { tipo = "number", padrao = 100 },
	},
})
for _, nome in { "ReplicatedStorage", "ReplicatedFirst", "ServerStorage", "ServerScriptService", "SoundService",
	"TextChatService", "Chat", "GuiService", "LocalizationService", "PolicyService", "GroupService", "ProximityPromptService",
	"VRService", "HapticService", "TextService", "SocialService", "AssetService", "ContentProvider", "AvatarEditorService",
	"MemoryStoreService", "AnalyticsService", "Selection", "MessagingService" } do
	servico(nome)
end
servico("Teams", nil, {
	metodos = {
		GetTeams = function(self)
			local rec = eu(self, "GetTeams")
			local r = {}
			for _, f in rec.filhos do if DADOS[f].classe.nome == "Team" then table.insert(r, f) end end
			return r
		end,
	},
})
servico("TeleportService", nil, {
	metodos = {
		Teleport = function() erro("Teleport is not supported here (o curso simula um servidor s\xF3).") end,
		TeleportAsync = function() erro("Teleport is not supported here (o curso simula um servidor s\xF3).") end,
	},
})
servico("MarketplaceService", nil, {
	props = { ProcessReceipt = { tipo = "function", get = function() erro("ProcessReceipt is a callback member of MarketplaceService; you can only set the callback value, get is not available") end, set = function(rec, f) rec.recibo = f end } },
	metodos = {
		PromptProductPurchase = function() end,
		PromptGamePassPurchase = function() end,
		PromptPurchase = function() end,
		UserOwnsGamePassAsync = function(self, userId, passe)
			local rec = eu(self, "UserOwnsGamePassAsync")
			return rec.W.passes[C.real.tostring(userId) .. ":" .. C.real.tostring(passe)] == true
		end,
		PlayerOwnsAsset = function() return false end,
		GetProductInfo = function(self, id)
			return { Name = "Produto " .. C.real.tostring(id), Description = "", PriceInRobux = 0, IsForSale = true, ProductId = id }
		end,
	},
	eventos = { "PromptProductPurchaseFinished", "PromptGamePassPurchaseFinished", "PromptPurchaseFinished" },
})
servico("BadgeService", nil, {
	metodos = {
		AwardBadge = function(self, userId, badge)
			local rec = eu(self, "AwardBadge")
			rec.W.medalhas[C.real.tostring(userId) .. ":" .. C.real.tostring(badge)] = true
			return true
		end,
		UserHasBadgeAsync = function(self, userId, badge)
			local rec = eu(self, "UserHasBadgeAsync")
			return rec.W.medalhas[C.real.tostring(userId) .. ":" .. C.real.tostring(badge)] == true
		end,
		GetBadgeInfoAsync = function(self, badge)
			return { Name = "Medalha " .. C.real.tostring(badge), Description = "", IsEnabled = true, IconImageId = 0 }
		end,
	},
	eventos = { "BadgeAwarded" },
})
servico("PhysicsService", nil, {
	metodos = {
		RegisterCollisionGroup = function() end,
		UnregisterCollisionGroup = function() end,
		CollisionGroupSetCollidable = function() end,
		CollisionGroupsAreCollidable = function() return true end,
		IsCollisionGroupRegistered = function() return true end,
		GetRegisteredCollisionGroups = function() return {} end,
		CreateCollisionGroup = function() return 0 end,
		SetPartCollisionGroup = function(self, p, g) p.CollisionGroup = g end,
	},
})

-- PathfindingService: caminho em linha reta (sem obst\xE1culos), em pontos a cada 4 studs
local PATH_STATUS = { Success = 0, ClosestNoPath = 1, ClosestOutOfRange = 2, FailStartNotEmpty = 3, FailFinishNotEmpty = 4, NoPath = 5 }
classe("Path", "Instance", {
	props = { Status = { so = true, get = function(rec) return rec.status or "NoPath" end } },
	metodos = {
		ComputeAsync = function(self, inicio, fim)
			local rec = eu(self, "ComputeAsync")
			if not C.eV3(inicio) or not C.eV3(fim) then erro("ComputeAsync: Vector3 expected") end
			rec.pontos = {}
			local dist = (fim - inicio).Magnitude
			local n = math.max(1, math.ceil(dist / 4))
			for i = 0, n do
				table.insert(rec.pontos, { Position = inicio + (fim - inicio) * (i / n), Action = "Walk", Label = "" })
			end
			rec.status = "Success"
		end,
		GetWaypoints = function(self)
			local rec = eu(self, "GetWaypoints")
			local r = {}
			for _, p in rec.pontos or {} do table.insert(r, table.clone(p)) end
			return r
		end,
		CheckOcclusionAsync = function() return -1 end,
	},
	eventos = { "Blocked", "Unblocked" },
})
servico("PathfindingService", nil, {
	metodos = {
		CreatePath = function(self)
			local rec = eu(self, "CreatePath")
			return (C.novaInstancia(rec.W, "Path"))
		end,
		FindPathAsync = function(self, a, b)
			local rec = eu(self, "FindPathAsync")
			local p = C.novaInstancia(rec.W, "Path")
			p:ComputeAsync(a, b)
			return p
		end,
	},
})
C.PATH_STATUS = PATH_STATUS
`;var co=`--!nolint
-- Cobra Code \u2014 ambiente Luau (7/8): o mundo (game e servi\xE7os), o ambiente de cada script (print, warn, task,
-- game, workspace, script...), a sa\xEDda, o retrato da cena para a interface, as a\xE7\xF5es simuladas (um jogador entra,
-- toca numa pe\xE7a, clica...) e o comando "Executar".
local C, host = ...
local DADOS = C.DADOS
local erro = C.erro
local rtype = C.real.type
local v3 = C.v3
local rgb = C.rgb
local Enum = C.Enum
local CF = C.CFrame
local M = C.metodosInstance
local QPS = C.QPS

local LIMITE_CARACTERES = 60000
local LIMITE_LINHAS = 3000
C.EPOCA = 1741618800 -- 10/03/2025 12:00 (hor\xE1rio de Bras\xEDlia), o "agora" dos testes

-- ============================================================================================
-- Globais comuns a todos os scripts (congeladas)
-- ============================================================================================
local function pairsRoblox(t)
	if rtype(t) ~= "table" or C.TIPO[t] then
		erro("invalid argument #1 to 'pairs' (table expected, got " .. C.typeof(t) .. ")")
	end
	return next, t, nil
end
local function ipairsRoblox(t)
	if rtype(t) ~= "table" or C.TIPO[t] then
		erro("invalid argument #1 to 'ipairs' (table expected, got " .. C.typeof(t) .. ")")
	end
	return C.real.ipairs(t)
end

local stringR = table.clone(string)
local tableR = table.clone(table)
local debugR = {
	traceback = debug.traceback,
	info = debug.info,
	profilebegin = function() end,
	profileend = function() end,
	setmemorycategory = function() end,
	resetmemorycategory = function() end,
	dumpcodesize = function() end,
}
local utf8R = table.clone(utf8)
local bit32R = table.clone(bit32)
local bufferR = buffer and table.clone(buffer) or nil
local vectorR = vector and table.clone(vector) or nil

local BASE = {
	assert = assert, error = error, pcall = pcall, xpcall = xpcall, select = select, next = next,
	rawequal = rawequal, rawget = rawget, rawset = rawset, rawlen = rawlen, setmetatable = setmetatable,
	getmetatable = getmetatable, tonumber = tonumber, unpack = table.unpack, newproxy = newproxy, gcinfo = gcinfo,
	tostring = C.tostring, typeof = C.typeof, type = C.type, pairs = pairsRoblox, ipairs = ipairsRoblox,
	string = table.freeze(stringR), table = table.freeze(tableR), debug = table.freeze(debugR),
	utf8 = table.freeze(utf8R), bit32 = table.freeze(bit32R), buffer = bufferR and table.freeze(bufferR),
	vector = vectorR and table.freeze(vectorR),
	collectgarbage = function(opcao)
		if opcao == "count" then return gcinfo() end
		erro("collectgarbage must be called with 'count'; use gcinfo() instead")
	end,
	Vector3 = C.Vector3, Vector2 = C.Vector2, Color3 = C.Color3, BrickColor = C.BrickColor, CFrame = C.CFrame,
	UDim = C.UDim, UDim2 = C.UDim2, NumberRange = C.NumberRange, NumberSequence = C.NumberSequence,
	ColorSequence = C.ColorSequence, TweenInfo = C.TweenInfo, Enum = C.Enum, RaycastParams = C.RaycastParams,
	OverlapParams = C.OverlapParams,
	settings = function() return { Physics = {}, Rendering = {} } end,
	UserSettings = function() return { GetService = function() return {} end } end,
	version = function() return "0.739.0.0" end,
	ElapsedTime = nil,
}
-- NumberSequenceKeypoint e ColorSequenceKeypoint (s\xF3 guardam os valores)
BASE.NumberSequenceKeypoint = table.freeze({ new = function(t, v, e) return { Time = t, Value = v, Envelope = e or 0 } end })
BASE.ColorSequenceKeypoint = table.freeze({ new = function(t, v) return { Time = t, Value = v } end })
C.BASE = table.freeze(BASE)

-- ============================================================================================
-- Sa\xEDda (print e warn) por mundo
-- ============================================================================================
local function novoCanal()
	return { partes = {}, n = 0, chars = 0 }
end
C.novoCanal = novoCanal

function C.textoCanal(canal): string
	if canal.n == 0 then return "" end
	return table.concat(canal.partes, "\\n", 1, canal.n) .. "\\n"
end

function C.escrever(W, texto: string, tipo: string)
	local canal = W.canal
	local linha = if tipo == "warn" then "[aviso] " .. texto else texto
	canal.n += 1
	canal.partes[canal.n] = linha
	canal.chars += #linha + 1
	if canal == W.saida then
		table.insert(W.log, { tipo = tipo, texto = texto, t = W.quadro / QPS })
	end
	if canal.chars > LIMITE_CARACTERES or canal.n > LIMITE_LINHAS then
		W.parado = true
		W.motivo = W.motivo or "limite"
		error(C.MARCA_LIMITE, 0)
	end
end

local function juntar(...)
	local n = select("#", ...)
	if n == 0 then return "" end
	local t = { ... }
	for i = 1, n do t[i] = C.textoPrint(t[i]) end
	return table.concat(t, " ", 1, n)
end
C.juntarPrint = juntar

-- ============================================================================================
-- O mundo
-- ============================================================================================
local function fracaK() return setmetatable({}, { __mode = "k" }) end

-- opcoes: {modo = "executar"|"teste", semente, dados (DataStore compartilhado), vazio, aleatorios (lista)}
function C.criarMundo(opcoes)
	opcoes = opcoes or {}
	local W = {
		quadro = 0, fila = {}, seq = 0, ctx = fracaK(), espera = fracaK(), cancelados = fracaK(), ctxClientes = fracaK(),
		ctxServidor = { lado = "servidor" }, atual = nil, parado = false, motivo = nil, erro = nil,
		animacoes = {}, sinaisQuadro = {}, faixas = setmetatable({}, { __mode = "k" }), nInstancias = 0,
		log = {}, modo = opcoes.modo or "executar", servicos = {}, proximoUserId = 0, aoFechar = {},
		tags = {}, sinaisTagAdd = {}, sinaisTagRem = {}, teclas = {}, acoes = {}, passes = {}, medalhas = {},
		modulos = {}, epoca = opcoes.epoca or C.EPOCA, dados = opcoes.dados or { lojas = {}, registro = {}, falhas = 0 },
	}
	W.saida = novoCanal()
	W.canal = W.saida
	local semente = tonumber(opcoes.semente) or 1
	W.semente = semente
	W.rng = C.novoRandom(semente * 7919 + 13)
	W.aleatorios = opcoes.aleatorios and table.clone(opcoes.aleatorios) or {}
	C.real.randomseed(math.floor(semente))

	-- game e servi\xE7os
	local game, grec = C.novaInstancia(W, "DataModel")
	grec.nome = "Game"
	grec.protegido = true
	W.game = game
	for _, nome in C.NOMES_SERVICOS do
		local s, srec = C.novaInstancia(W, nome)
		srec.nome = nome
		srec.protegido = true
		srec.servico = true
		C.reparentar(srec, game, true)
		W.servicos[nome] = s
	end
	W.workspace = W.servicos.Workspace
	DADOS[W.workspace].protegidoNome = true
	local rs = DADOS[W.servicos.RunService]
	for _, nome in { "Heartbeat", "Stepped", "RenderStepped", "PreSimulation", "PostSimulation" } do
		W.sinaisQuadro[nome] = C.sinalDe(rs, nome)
	end
	-- dentro do Workspace: c\xE2mera, terreno e (como no modelo "Baseplate" do Studio) o ch\xE3o e o ponto de nascimento
	local ws = DADOS[W.workspace]
	local cam, crec = C.novaInstancia(W, "Camera")
	crec.nome = "Camera"
	C.reparentar(crec, W.workspace, true)
	ws.props.CurrentCamera = cam
	local ter, trec = C.novaInstancia(W, "Terrain")
	trec.nome = "Terrain"
	trec.protegido = true
	trec.props.Anchored = true
	trec.props.Size = v3(2044, 252, 2044)
	trec.props.Transparency = 1
	C.reparentar(trec, W.workspace, true)
	if not opcoes.vazio then
		local base, brec = C.novaInstancia(W, "Part")
		brec.nome = "Baseplate"
		brec.props.Size = v3(2048, 16, 2048)
		brec.props.CFrame = CF.new(0, -8, 0)
		brec.props.Anchored = true
		brec.props.Locked = true
		brec.props.Color = rgb(91, 93, 105)
		C.reparentar(brec, W.workspace, true)
		local sp, sprec = C.novaInstancia(W, "SpawnLocation")
		sprec.nome = "SpawnLocation"
		sprec.props.CFrame = CF.new(0, 0.5, 0)
		sprec.props.Anchored = true
		C.reparentar(sprec, W.workspace, true)
	end
	local splayer = W.servicos.StarterPlayer
	for _, nome in { "StarterPlayerScripts", "StarterCharacterScripts" } do
		local f, frec = C.novaInstancia(W, nome)
		frec.nome = nome
		C.reparentar(frec, splayer, true)
	end

	-- ganchos usados pelas classes
	W.aoMorrer = function(hrec) C.aoMorrer(W, hrec) end
	W.jogadorDoPersonagem = function(m) return C.jogadorDoPersonagem(W, m) end
	W.aoMudarTag = function(rec, tag, adicionado)
		local lista = W.tags[tag]
		if not lista then
			lista = {}
			W.tags[tag] = lista
		end
		if adicionado then
			table.insert(lista, rec.proxy)
		else
			local i = table.find(lista, rec.proxy)
			if i then table.remove(lista, i) end
		end
		if C.noJogo(rec) then
			local s = (if adicionado then W.sinaisTagAdd else W.sinaisTagRem)[tag]
			if s then C.disparar(s, rec.proxy) end
		end
	end
	W.aoMudarJogo = function(subarvore, entrou)
		for _, inst in subarvore do
			local r = DADOS[inst]
			for tag in r.tags do
				local s = (if entrou then W.sinaisTagAdd else W.sinaisTagRem)[tag]
				if s then C.disparar(s, inst) end
			end
		end
	end

	-- fun\xE7\xF5es do ambiente que dependem do mundo
	W.chk = function(linha)
		if W.parado then error(C.MARCA_PARAR, 0) end
		if C.real.clock() > C.prazo then
			W.parado = true
			W.motivo = W.motivo or "tempo"
			W.linhaTempo = linha
			error(C.MARCA_TEMPO, 0)
		end
		return 4000
	end
	W.print = function(...) C.escrever(W, juntar(...), "print") end
	W.warn = function(...) C.escrever(W, juntar(...), "warn") end
	W.task, W.antigas = C.criarTask(W)
	W.coroutine = C.criarCoroutine(W)

	-- Instance.new
	W.Instance = table.freeze({
		new = function(nomeClasse, pai)
			if rtype(nomeClasse) ~= "string" then
				erro("invalid argument #1 to 'new' (string expected, got " .. C.typeof(nomeClasse) .. ")")
			end
			local cls = C.CLASSES[nomeClasse]
			if not cls or not cls.criavel then erro('Unable to create an Instance of type "' .. nomeClasse .. '"') end
			local proxy, rec = C.novaInstancia(W, nomeClasse)
			if pai ~= nil then proxy.Parent = pai end
			return proxy
		end,
		fromExisting = function(inst) return M.Clone(inst) end,
	})

	-- math com aleat\xF3rio de semente (e valores for\xE7ados nos testes)
	local mathR = table.clone(math)
	mathR.random = function(a, b)
		local u
		if #W.aleatorios > 0 then
			u = table.remove(W.aleatorios, 1)
		end
		if u == nil then
			if a == nil then return C.real.random() end
			if b == nil then return C.real.random(a) end
			return C.real.random(a, b)
		end
		if a == nil then return u end
		if b == nil then a, b = 1, a end
		a, b = math.floor(a), math.floor(b)
		if a > b then erro("invalid argument #2 to 'random' (interval is empty)") end
		return a + math.min(math.floor(u * (b - a + 1)), b - a)
	end
	mathR.randomseed = function(s) C.real.randomseed(math.floor(tonumber(s) or 0)) end
	W.math = table.freeze(mathR)

	-- tempo virtual: os.time, os.clock, tick, time
	local osR = {}
	osR.time = function(t)
		if rtype(t) == "table" then
			return os.time(t)
		end
		return math.floor(W.epoca + W.quadro / QPS)
	end
	osR.clock = function() return W.quadro / QPS end
	osR.difftime = function(a, b) return (a or 0) - (b or 0) end
	osR.date = function(formato, t)
		t = t or (W.epoca + W.quadro / QPS)
		formato = formato or "%c"
		local utc = string.sub(formato, 1, 1) == "!"
		if utc then formato = string.sub(formato, 2) else t -= 3 * 3600 end
		return os.date("!" .. formato, math.floor(t))
	end
	W.os = table.freeze(osR)
	W.tick = function() return W.epoca + W.quadro / QPS end
	W.time = function() return W.quadro / QPS end
	W.Random = table.freeze({
		new = function(semente)
			if semente == nil then return C.novoRandom(W.rng:NextInteger(1, 2 ^ 31)) end
			return C.novoRandom(C.argNumero(semente, 1, "new"))
		end,
	})
	W.DateTime = table.freeze({
		now = function() return C.novoDateTime(W.epoca + W.quadro / QPS) end,
		fromUnixTimestamp = function(t) return C.novoDateTime(t) end,
		fromUnixTimestampMillis = function(t) return C.novoDateTime(t / 1000) end,
	})
	W._G = {}
	W.shared = {}
	W.require = function(alvo) return C.requerer(W, alvo) end
	return W
end

-- DateTime (b\xE1sico)
local DTMT = {
	__index = function(self, k)
		local t = rawget(self, "__t")
		if k == "UnixTimestamp" then return math.floor(t) end
		if k == "UnixTimestampMillis" then return math.floor(t * 1000) end
		if k == "ToIsoDate" then return function() return os.date("!%Y-%m-%dT%H:%M:%SZ", math.floor(t)) end end
		if k == "ToUniversalTime" or k == "ToLocalTime" then
			return function()
				local d = os.date(if k == "ToLocalTime" then "!*t" else "!*t", math.floor(t - (if k == "ToLocalTime" then 3 * 3600 else 0)))
				return { Year = d.year, Month = d.month, Day = d.day, Hour = d.hour, Minute = d.min, Second = d.sec, Millisecond = 0 }
			end
		end
		if k == "FormatUniversalTime" or k == "FormatLocalTime" then
			return function() return os.date("!%d/%m/%Y %H:%M:%S", math.floor(t - (if k == "FormatLocalTime" then 3 * 3600 else 0))) end
		end
		erro(C.real.tostring(k) .. " is not a valid member of DateTime")
	end,
	__newindex = function(_, k) erro(C.real.tostring(k) .. " cannot be assigned to") end,
	__tostring = function(self) return os.date("!%Y-%m-%dT%H:%M:%SZ", math.floor(rawget(self, "__t"))) end,
	__metatable = "The metatable is locked",
}
function C.novoDateTime(t)
	local d = setmetatable({ __t = t }, DTMT)
	C.TIPO[d] = "DateTime"
	return d
end

-- ============================================================================================
-- Ambiente de um script: as globais que o c\xF3digo do aluno v\xEA
-- ============================================================================================
local CHAVES_MUNDO = {
	"game", "Game", "workspace", "Workspace", "script", "print", "warn", "task", "wait", "spawn", "delay", "tick", "time",
	"elapsedTime", "os", "math", "Random", "Instance", "require", "shared", "_G", "coroutine", "DateTime", "__cobra_chk",
	"__cobra_exp", "Wait", "Spawn", "Delay",
}
C.CHAVES_MUNDO = CHAVES_MUNDO

function C.ambienteScript(W, scriptProxy)
	local env = table.clone(C.BASE)
	local exportados = {}
	env.game = W.game
	env.Game = W.game
	env.workspace = W.workspace
	env.Workspace = W.workspace
	env.script = scriptProxy
	env.print = W.print
	env.warn = W.warn
	env.task = W.task
	env.wait = W.antigas.wait
	env.Wait = W.antigas.wait
	env.spawn = W.antigas.spawn
	env.Spawn = W.antigas.spawn
	env.delay = W.antigas.delay
	env.Delay = W.antigas.delay
	env.tick = W.tick
	env.time = W.time
	env.elapsedTime = W.time
	env.os = W.os
	env.math = W.math
	env.Random = W.Random
	env.Instance = W.Instance
	env.require = W.require
	env.shared = W.shared
	env._G = W._G
	env.coroutine = W.coroutine
	env.DateTime = W.DateTime
	env.__cobra_chk = W.chk
	env.__cobra_exp = function(nome, get, set)
		exportados[nome] = { get = get, set = set }
	end
	return env, exportados
end

-- nomes do topo do script (locais exportados + globais criadas) como uma tabela "viva" (l\xEA o valor atual)
local NAO_DO_ALUNO = {}
for k in C.BASE do NAO_DO_ALUNO[k] = true end
for _, k in CHAVES_MUNDO do NAO_DO_ALUNO[k] = true end
function C.nomesDoAluno(env, exportados)
	local g = {}
	return setmetatable(g, {
		__index = function(_, k)
			local e = exportados[k]
			if e then return e.get() end
			if NAO_DO_ALUNO[k] then return nil end
			return rawget(env, k)
		end,
		__newindex = function(_, k, v)
			local e = exportados[k]
			if e then e.set(v) else rawset(env, k, v) end
		end,
		__iter = function()
			local lista = {}
			for k, e in exportados do lista[k] = e.get() end
			for k, v in env do if not NAO_DO_ALUNO[k] then lista[k] = v end end
			return next, lista
		end,
	})
end
function C.temNome(env, exportados, k): boolean
	if exportados[k] then return true end
	if NAO_DO_ALUNO[k] then return false end
	return rawget(env, k) ~= nil
end

-- ============================================================================================
-- C\xF3digo de autor (mundo da aula, cen\xE1rio, ModuleScripts): carregado pelo JavaScript (sem loadstring)
-- ============================================================================================
function C.carregarTrecho(W, codigo: string, nome: string, env)
	local fn, msg = host.carregar(codigo, nome, env)
	if not fn then return nil, msg end
	return fn
end

function C.requerer(W, alvo)
	if rtype(alvo) == "number" then
		erro("require(" .. C.numeroTexto(alvo) .. "): aqui n\xE3o h\xE1 internet nem pacotes por n\xFAmero \u2014 use um ModuleScript do jogo")
	end
	local rec = DADOS[alvo]
	if not rec or rec.classe.nome ~= "ModuleScript" then
		erro("Attempted to call require with invalid argument(s).")
	end
	local cache = W.modulos[rec]
	if cache then
		if cache.carregando then erro("Requested module was required recursively") end
		return cache.valor
	end
	local entrada = { carregando = true }
	W.modulos[rec] = entrada
	local env = C.ambienteScript(W, alvo)
	local fn, msg = C.carregarTrecho(W, rec.props.Source or "", C.nomeCompleto(rec), env)
	if not fn then
		W.modulos[rec] = nil
		erro(msg)
	end
	local r = table.pack(pcall(fn))
	if not r[1] then
		W.modulos[rec] = nil
		error(r[2], 0)
	end
	if r.n ~= 2 then
		W.modulos[rec] = nil
		erro("Module code did not return exactly one value")
	end
	entrada.carregando = false
	entrada.valor = r[2]
	return r[2]
end

-- roda o c\xF3digo do mundo da aula (antes do script do aluno)
function C.rodarMundoDaAula(W, codigo: string, scriptProxy)
	local env = C.ambienteScript(W, scriptProxy)
	env.narrar = function() end
	local fn, msg = C.carregarTrecho(W, codigo, "mundo.lua", env)
	if not fn then return false, msg end
	local co = coroutine.create(fn)
	W.ctx[co] = W.ctxServidor
	W.origemAtual = "mundo"
	C.retomar(W, co)
	C.processar(W)
	W.origemAtual = nil
	if W.erro then
		local e = W.erro
		W.erro = nil
		W.parado = false
		return false, C.real.tostring(e.valor)
	end
	return true
end

-- o objeto Script (ou LocalScript) do aluno
function C.criarScript(W, cliente)
	if cliente then
		local s, rec = C.novaInstancia(W, "LocalScript")
		rec.nome = "LocalScript"
		local ps = M.FindFirstChild(cliente.proxy, "PlayerScripts")
		C.reparentar(rec, ps or W.servicos.StarterPlayer, true)
		return s
	end
	local s, rec = C.novaInstancia(W, "Script")
	rec.nome = "Script"
	C.reparentar(rec, W.servicos.ServerScriptService, true)
	return s
end

-- ============================================================================================
-- Retrato da cena para a interface (Explorer e vista 3D)
-- ============================================================================================
local function corBytes(c) return { C.byteCor(c.R), C.byteCor(c.G), C.byteCor(c.B) } end
local function vetor(v) return { v.x, v.y, v.z } end
local function arred(x)
	if x == math.floor(x) then return x end
	return math.floor(x * 1000 + 0.5) / 1000
end
local function vetorArred(v) return { arred(v.x), arred(v.y), arred(v.z) } end

local function propsCena(rec)
	local cls = rec.classe
	local p = {}
	local tem = false
	if cls.isa.BasePart then
		local c = rec.props.CFrame
		p.Position = vetorArred(c.Position)
		p.Size = vetorArred(rec.props.Size)
		p.Color = corBytes(rec.props.Color)
		p.Transparency = arred(rec.props.Transparency)
		p.Anchored = rec.props.Anchored
		p.CanCollide = rec.props.CanCollide
		p.Material = rec.props.Material.Name
		if rec.props.Shape then p.Shape = rec.props.Shape.Name end
		local o = C.metodosInstance and nil
		local rx, ry, rz = c:ToOrientation()
		if math.abs(rx) + math.abs(ry) + math.abs(rz) > 1e-6 then
			p.Orientation = { arred(math.deg(rx)), arred(math.deg(ry)), arred(math.deg(rz)) }
		end
		tem = true
	elseif cls.isa.ValueBase then
		local v = rec.props.Value
		if rtype(v) == "string" then p.Value = v
		elseif rtype(v) == "number" or rtype(v) == "boolean" then p.Value = v
		elseif v ~= nil then p.Value = C.textoPrint(v) end
		tem = true
	elseif cls.nome == "Humanoid" then
		p.Health = arred(rec.props.Health)
		p.MaxHealth = arred(rec.props.MaxHealth)
		p.WalkSpeed = arred(rec.props.WalkSpeed)
		tem = true
	elseif cls.isa.Light then
		tem = false
	end
	if cls.props.Text and rtype(rec.props.Text) == "string" then p.Text = rec.props.Text tem = true end
	if next(rec.atributos) then
		local a = {}
		for k, v in rec.atributos do
			a[k] = if rtype(v) == "number" or rtype(v) == "boolean" or rtype(v) == "string" then v else C.textoPrint(v)
		end
		p.Attributes = a
		tem = true
	end
	return tem and p or nil
end

local LIMITE_CENA = 300
function C.cena(W)
	local contador = 0
	local function no(rec, prof)
		contador += 1
		local item = { classe = rec.classe.nome, nome = rec.nome }
		local p = propsCena(rec)
		if p then item.props = p end
		if #rec.filhos > 0 then
			local filhos = {}
			for i, f in rec.filhos do
				if contador >= LIMITE_CENA or prof > 12 then
					item.mais = #rec.filhos - i + 1
					break
				end
				table.insert(filhos, no(DADOS[f], prof + 1))
			end
			item.filhos = filhos
		end
		return item
	end
	local raiz = {}
	for _, nome in { "Workspace", "Players", "ReplicatedStorage", "ServerStorage", "ServerScriptService", "StarterGui", "Lighting" } do
		local s = W.servicos[nome]
		if s then table.insert(raiz, no(DADOS[s], 1)) end
	end
	return raiz
end

-- ============================================================================================
-- A\xE7\xF5es simuladas (usadas pelos testes e pelo "cen\xE1rio" do Executar)
-- ============================================================================================
local sim = {}
C.sim = sim

local function jogadorDe(W, x)
	if rtype(x) == "string" then
		local p = M.FindFirstChild(W.servicos.Players, x)
		if p and DADOS[p].classe.nome == "Player" then return DADOS[p] end
		return nil
	end
	local r = DADOS[x]
	if r and r.classe.nome == "Player" then return r end
	return nil
end
sim.jogadorDe = jogadorDe

-- a pe\xE7a que "toca": uma BasePart, ou a HumanoidRootPart do personagem de um jogador/modelo
local function parteQueToca(W, x, preferida)
	if rtype(x) == "string" or (DADOS[x] and DADOS[x].classe.nome == "Player") then
		local p = jogadorDe(W, x)
		if not p then return nil, "n\xE3o achei o jogador " .. C.real.tostring(x) end
		local m = p.props.Character
		if not m then return nil, "o jogador " .. p.nome .. " n\xE3o tem personagem agora" end
		local parte = M.FindFirstChild(m, preferida or "HumanoidRootPart") or M.FindFirstChild(m, "HumanoidRootPart")
		if not parte then return nil, "o personagem de " .. p.nome .. " n\xE3o tem " .. (preferida or "HumanoidRootPart") end
		return DADOS[parte], nil
	end
	local r = DADOS[x]
	if not r then return nil, "esperava uma pe\xE7a (BasePart), um jogador ou o nome de um jogador, mas veio " .. C.typeof(x) end
	if r.classe.isa.BasePart then return r, nil end
	if r.classe.isa.Model then
		local pp = r.props.PrimaryPart and DADOS[r.props.PrimaryPart]
		if pp then return pp, nil end
		local h = M.FindFirstChild(x, preferida or "HumanoidRootPart")
		if h then return DADOS[h], nil end
		for _, p in C.partesDe(r, {}) do return p, nil end
	end
	return nil, r.nome .. " (" .. r.classe.nome .. ") n\xE3o \xE9 uma pe\xE7a que possa tocar em algo"
end
sim.parteQueToca = parteQueToca

local function descricao(rec)
	if not rec then return "?" end
	local m = rec.pai and DADOS[rec.pai]
	local p = m and C.jogadorDoPersonagem(rec.W, m)
	if p then return p.nome end
	return rec.nome
end

function sim.adicionarJogador(W, nome, opcoes)
	if rtype(nome) ~= "string" then erro("adicionarJogador: passe o nome do jogador (texto), por exemplo adicionarJogador(\\"Ana\\")") end
	if M.FindFirstChild(W.servicos.Players, nome) then erro("adicionarJogador: j\xE1 existe um jogador chamado " .. nome) end
	W.acao = "quando " .. nome .. " entrou no jogo"
	local p = C.adicionarJogador(W, nome, opcoes)
	W.acao = nil
	return p
end

function sim.removerJogador(W, x)
	local p = jogadorDe(W, x)
	if not p then erro("removerJogador: n\xE3o achei o jogador " .. C.real.tostring(x)) end
	W.acao = "quando " .. p.nome .. " saiu do jogo"
	C.removerJogador(W, p)
	W.acao = nil
end

function sim.tocar(W, a, b, opcoes)
	local pa, ea = parteQueToca(W, a, opcoes and opcoes.com)
	if not pa then erro("tocar: " .. ea) end
	local pb, eb = parteQueToca(W, b, opcoes and opcoes.com)
	if not pb then erro("tocar: " .. eb) end
	if pa.props.CanTouch == false or pb.props.CanTouch == false then return false end
	W.acao = "quando " .. descricao(pb) .. " tocou em " .. pa.nome
	pa.tocando = pa.tocando or {}
	pb.tocando = pb.tocando or {}
	pa.tocando[pb] = true
	pb.tocando[pa] = true
	C.evento(pa, "Touched", pb.proxy)
	C.evento(pb, "Touched", pa.proxy)
	local m = pb.pai and DADOS[pb.pai]
	local h = m and M.FindFirstChildOfClass(m.proxy, "Humanoid")
	if h then C.evento(DADOS[h], "Touched", pb.proxy, pa.proxy) end
	C.processar(W)
	W.acao = nil
	return true
end

function sim.pararDeTocar(W, a, b, opcoes)
	local pa, ea = parteQueToca(W, a, opcoes and opcoes.com)
	if not pa then erro("pararDeTocar: " .. ea) end
	local pb, eb = parteQueToca(W, b, opcoes and opcoes.com)
	if not pb then erro("pararDeTocar: " .. eb) end
	W.acao = "quando " .. descricao(pb) .. " parou de tocar em " .. pa.nome
	if pa.tocando then pa.tocando[pb] = nil end
	if pb.tocando then pb.tocando[pa] = nil end
	C.evento(pa, "TouchEnded", pb.proxy)
	C.evento(pb, "TouchEnded", pa.proxy)
	C.processar(W)
	W.acao = nil
end

-- clicar num ClickDetector (MouseClick), ProximityPrompt (Triggered), bot\xE3o de interface (Activated) ou Tool (Activated)
function sim.clicar(W, obj, x)
	local r = DADOS[obj]
	if not r then erro("clicar: esperava um ClickDetector, ProximityPrompt, bot\xE3o ou Tool, mas veio " .. C.typeof(obj)) end
	local p = x ~= nil and jogadorDe(W, x) or nil
	if x ~= nil and not p then erro("clicar: n\xE3o achei o jogador " .. C.real.tostring(x)) end
	local quem = p and p.nome or "algu\xE9m"
	local nomeAlvo = r.pai and DADOS[r.pai] and DADOS[r.pai].nome or r.nome
	local cls = r.classe
	if cls.nome == "ClickDetector" then
		if not p then erro("clicar: diga qual jogador clicou, por exemplo clicar(detector, \\"Ana\\")") end
		W.acao = "quando " .. quem .. " clicou em " .. nomeAlvo
		C.evento(r, "MouseClick", p.proxy)
	elseif cls.nome == "ProximityPrompt" then
		if not p then erro("clicar: diga qual jogador ativou o prompt, por exemplo clicar(prompt, \\"Ana\\")") end
		if not r.props.Enabled then return false end
		W.acao = "quando " .. quem .. " ativou o prompt de " .. nomeAlvo
		C.evento(r, "PromptButtonHoldBegan", p.proxy)
		C.evento(r, "Triggered", p.proxy)
		C.evento(r, "TriggerEnded", p.proxy)
		C.evento(r, "PromptButtonHoldEnded", p.proxy)
	elseif cls.isa.GuiButton then
		W.acao = "quando " .. quem .. " clicou no bot\xE3o " .. r.nome
		C.evento(r, "MouseButton1Down")
		C.evento(r, "MouseButton1Up")
		C.evento(r, "MouseButton1Click")
		C.evento(r, "Activated")
	elseif cls.nome == "Tool" then
		if not r.equipada then erro("clicar: a ferramenta " .. r.nome .. " n\xE3o est\xE1 equipada (ela precisa estar dentro do personagem)") end
		W.acao = "quando " .. quem .. " usou a ferramenta " .. r.nome
		if r.props.Enabled then C.evento(r, "Activated") end
		C.evento(r, "Deactivated")
	else
		erro("clicar: " .. r.nome .. " (" .. cls.nome .. ") n\xE3o \xE9 clic\xE1vel")
	end
	C.processar(W)
	W.acao = nil
	return true
end

-- teclado do jogador (cliente): InputBegan/InputEnded e ContextActionService
local function tecla(v)
	if C.TIPO[v] == "EnumItem" then return v end
	local t = C.paraEnum("KeyCode", v)
	if t then return t end
	if rtype(v) == "string" then
		t = C.paraEnum("KeyCode", string.upper(v))
		if t then return t end
	end
	erro("tecla desconhecida: " .. C.real.tostring(v) .. " (use Enum.KeyCode.E ou \\"E\\")")
	return nil
end
local function entrada(W, p, k, estado)
	local inp, ir = C.novaInstancia(W, "InputObject")
	ir.props.KeyCode = k
	ir.props.UserInputType = Enum.UserInputType.Keyboard
	ir.props.UserInputState = estado
	return inp
end
function sim.apertarTecla(W, x, v)
	local p = jogadorDe(W, x)
	if not p then erro("apertarTecla: n\xE3o achei o jogador " .. C.real.tostring(x)) end
	local k = tecla(v)
	W.teclas[p.proxy] = W.teclas[p.proxy] or {}
	W.teclas[p.proxy][k] = true
	W.acao = "quando " .. p.nome .. " apertou a tecla " .. k.Name
	local inp = entrada(W, p, k, Enum.UserInputState.Begin)
	local uis = DADOS[W.servicos.UserInputService]
	C.dispararFiltrado(C.sinalDe(uis, "InputBegan"), function(d) return d.ctx.jogador == p.proxy end, inp, false)
	for _, a in table.clone(W.acoes) do
		if a.ctx.jogador == p.proxy and table.find(a.entradas, k) then
			C.iniciarThread(W, a.f, a.ctx, a.nome, Enum.UserInputState.Begin, inp)
		end
	end
	C.processar(W)
	W.acao = nil
end
function sim.soltarTecla(W, x, v)
	local p = jogadorDe(W, x)
	if not p then erro("soltarTecla: n\xE3o achei o jogador " .. C.real.tostring(x)) end
	local k = tecla(v)
	if W.teclas[p.proxy] then W.teclas[p.proxy][k] = nil end
	W.acao = "quando " .. p.nome .. " soltou a tecla " .. k.Name
	local inp = entrada(W, p, k, Enum.UserInputState.End)
	local uis = DADOS[W.servicos.UserInputService]
	C.dispararFiltrado(C.sinalDe(uis, "InputEnded"), function(d) return d.ctx.jogador == p.proxy end, inp, false)
	for _, a in table.clone(W.acoes) do
		if a.ctx.jogador == p.proxy and table.find(a.entradas, k) then
			C.iniciarThread(W, a.f, a.ctx, a.nome, Enum.UserInputState.End, inp)
		end
	end
	C.processar(W)
	W.acao = nil
end

-- roda f como o cliente (LocalScript) do jogador
function sim.comoCliente(W, x, f, ...)
	local p = jogadorDe(W, x)
	if not p then erro("comoCliente: n\xE3o achei o jogador " .. C.real.tostring(x)) end
	if rtype(f) ~= "function" then erro("comoCliente: passe uma fun\xE7\xE3o, por exemplo comoCliente(\\"Ana\\", function() ... end)") end
	W.acao = "no cliente de " .. p.nome
	local r = table.pack(C.chamarEEsperar(W, f, C.ctxCliente(W, p.proxy), ...))
	C.processar(W)
	W.acao = nil
	return table.unpack(r, 1, r.n)
end

function sim.dispararServidor(W, remote, x, ...)
	local r = DADOS[remote]
	if not r or not r.classe.isa.RemoteEvent and r.classe.nome ~= "UnreliableRemoteEvent" then
		erro("dispararServidor: esperava um RemoteEvent, mas veio " .. (r and r.classe.nome or C.typeof(remote)))
	end
	local p = jogadorDe(W, x)
	if not p then erro("dispararServidor: n\xE3o achei o jogador " .. C.real.tostring(x)) end
	local args = table.pack(...)
	W.acao = "quando o cliente de " .. p.nome .. " disparou " .. r.nome
	C.chamarEEsperar(W, function() remote:FireServer(table.unpack(args, 1, args.n)) end, C.ctxCliente(W, p.proxy))
	C.processar(W)
	W.acao = nil
end

function sim.invocarServidor(W, remote, x, ...)
	local r = DADOS[remote]
	if not r or r.classe.nome ~= "RemoteFunction" then
		erro("invocarServidor: esperava uma RemoteFunction, mas veio " .. (r and r.classe.nome or C.typeof(remote)))
	end
	local p = jogadorDe(W, x)
	if not p then erro("invocarServidor: n\xE3o achei o jogador " .. C.real.tostring(x)) end
	if not (r.callbacks and r.callbacks.OnServerInvoke) then
		erro("invocarServidor: o servidor n\xE3o definiu " .. r.nome .. ".OnServerInvoke (crie com " .. r.nome .. ".OnServerInvoke = function(jogador, ...) ... end)")
	end
	local args = table.pack(...)
	W.acao = "quando o cliente de " .. p.nome .. " invocou " .. r.nome
	local res = table.pack(C.chamarEEsperar(W, function() return remote:InvokeServer(table.unpack(args, 1, args.n)) end, C.ctxCliente(W, p.proxy)))
	C.processar(W)
	W.acao = nil
	return table.unpack(res, 1, res.n)
end

function sim.avancarTempo(W, segundos)
	segundos = tonumber(segundos)
	if not segundos or segundos < 0 then erro("avancarTempo: passe quantos segundos avan\xE7ar (um n\xFAmero de 0 para cima)") end
	C.avancarAte(W, W.quadro + math.floor(segundos * QPS + 0.5))
end

function sim.fecharJogo(W)
	W.acao = "quando o jogo fechou"
	local jogadores = DADOS[W.servicos.Players]
	for _, f in table.clone(jogadores.filhos) do
		local p = DADOS[f]
		if p.classe.nome == "Player" then C.removerJogador(W, p) end
	end
	for _, b in W.aoFechar do
		C.iniciarThread(W, b.f, b.ctx)
	end
	C.evento(DADOS[W.game], "Close")
	C.rodarAte(W, W.quadro + 30 * QPS)
	W.acao = nil
end

-- acha uma inst\xE2ncia por caminho: "Workspace.Escada.Degrau1" (tamb\xE9m "game.Workspace...", "workspace...")
function sim.procurarInstancia(W, caminho: string)
	if rtype(caminho) ~= "string" then return nil, "o caminho precisa ser um texto, como \\"Workspace.Porta\\"" end
	local partes = string.split(caminho, ".")
	local atual = W.game
	local i = 1
	if partes[1] == "game" or partes[1] == "Game" then i = 2 end
	if partes[i] == "workspace" then partes[i] = "Workspace" end
	local percorrido = {}
	while i <= #partes do
		local nome = partes[i]
		local prox = M.FindFirstChild(atual, nome)
		if not prox and atual == W.game and W.servicos[nome] then prox = W.servicos[nome] end
		if not prox then
			local rec = DADOS[atual]
			local nomes = {}
			for _, f in rec.filhos do
				if #nomes < 12 then table.insert(nomes, DADOS[f].nome) end
			end
			local onde = if #percorrido > 0 then table.concat(percorrido, ".") else "game"
			local msg = string.format("n\xE3o achei %s dentro de %s", nome, onde)
			if #nomes > 0 and atual ~= W.game then
				msg ..= " (dentro dele h\xE1: " .. table.concat(nomes, ", ") .. (if #rec.filhos > 12 then ", ..." else "") .. ")"
			elseif atual ~= W.game then
				msg ..= " (" .. onde .. " est\xE1 vazio)"
			end
			return nil, msg
		end
		table.insert(percorrido, nome)
		atual = prox
		i += 1
	end
	return atual
end

-- ============================================================================================
-- Executar (comando "run" do worker)
-- ============================================================================================
C.controle = {}

local function infoErro(W)
	local e = W.erro
	if not e then return nil end
	local valor = e.valor
	local texto
	if rtype(valor) == "string" then texto = valor
	elseif C.TIPO[valor] == nil and rtype(valor) == "table" and getmetatable(valor) == nil then texto = C.mostrar(valor)
	else texto = C.tostring(valor) end
	return {
		mensagem = texto, pilha = e.pilha or "", acao = e.acao, origem = e.origem,
		t = e.t, naoTexto = rtype(valor) ~= "string",
	}
end
C.infoErro = infoErro

-- ambiente do cen\xE1rio (Executar) e dos testes: as a\xE7\xF5es simuladas ligadas a um mundo
function C.acoesDoMundo(alvo, obterMundo)
	local function W() return obterMundo() end
	alvo.adicionarJogador = function(nome, opcoes) return (sim.adicionarJogador(W(), nome, opcoes)) end
	alvo.removerJogador = function(x) sim.removerJogador(W(), x) end
	alvo.tocar = function(a, b, o) return sim.tocar(W(), a, b, o) end
	alvo.pararDeTocar = function(a, b, o) sim.pararDeTocar(W(), a, b, o) end
	alvo.clicar = function(obj, x) return sim.clicar(W(), obj, x) end
	alvo.apertarTecla = function(x, k) sim.apertarTecla(W(), x, k) end
	alvo.soltarTecla = function(x, k) sim.soltarTecla(W(), x, k) end
	alvo.comoCliente = function(x, f, ...) return sim.comoCliente(W(), x, f, ...) end
	alvo.dispararServidor = function(remote, x, ...) sim.dispararServidor(W(), remote, x, ...) end
	alvo.invocarServidor = function(remote, x, ...) return sim.invocarServidor(W(), remote, x, ...) end
	alvo.fecharJogo = function() sim.fecharJogo(W()) end
	alvo.jogador = function(nome) local p = jogadorDe(W(), nome) return p and p.proxy end
	alvo.personagem = function(x)
		local p = jogadorDe(W(), x)
		return p and p.props.Character
	end
	alvo.tempoAtual = function() return W().quadro / QPS end
	return alvo
end

function C.controle.executar(opcoesJSON: string): string
	local o = C.json.decode(opcoesJSON)
	C.prazo = C.real.clock() + (tonumber(o.tempo) or 5)
	local W = C.criarMundo({ modo = "executar", semente = o.semente, vazio = o.mundoVazio == true })
	local scriptProxy = C.criarScript(W, nil)
	local resultado = { fim = "ok" }
	if rtype(o.mundo) == "string" and o.mundo ~= "" then
		local ok, msg = C.rodarMundoDaAula(W, o.mundo, scriptProxy)
		if not ok then
			resultado.erroMundo = msg
		end
	end
	if not resultado.erroMundo then
		local env, exportados = C.ambienteScript(W, scriptProxy)
		local fn, msg = host.carregarAluno(env)
		if not fn then
			resultado.erroCarregar = msg
		else
			local co = coroutine.create(fn)
			W.ctx[co] = W.ctxServidor
			W.origemAtual = "script"
			C.retomar(W, co)
			W.origemAtual = nil
			if rtype(o.cenario) == "string" and o.cenario ~= "" and not W.parado then
				local envC = C.ambienteScript(W, scriptProxy)
				C.acoesDoMundo(envC, function() return W end)
				envC.narrar = function(...) C.escrever(W, "-- " .. juntar(...), "narrar") end
				envC.avancarTempo = function(s) W.task.wait(s) end
				local fnC, msgC = C.carregarTrecho(W, o.cenario, "cenario.lua", envC)
				if fnC then
					local coC = coroutine.create(fnC)
					W.ctx[coC] = W.ctxServidor
					W.origemAtual = "cenario"
					C.retomar(W, coC)
					W.origemAtual = nil
				else
					resultado.erroMundo = msgC
				end
			end
			if not W.parado then
				resultado.cortado = C.rodarAte(W, W.quadro + math.floor((tonumber(o.tempoVirtual) or 60) * QPS))
			end
		end
	end
	if W.motivo == "tempo" then
		resultado.fim = "tempo"
		resultado.linha = W.linhaTempo
	elseif W.motivo == "limite" then
		resultado.fim = "limite"
	elseif W.erro then
		resultado.fim = "erro"
		resultado.erro = infoErro(W)
	elseif resultado.erroCarregar or resultado.erroMundo then
		resultado.fim = "erro"
	end
	resultado.saida = C.textoCanal(W.saida)
	resultado.tempoVirtual = W.quadro / QPS
	local okCena, cena = pcall(C.cena, W)
	if okCena then resultado.cena = cena end
	return C.json.encode(resultado)
end
`;var lo=`--!nolint
-- Cobra Code \u2014 ambiente Luau (8/8): os ajudantes dos testes das aulas (rodar, saidaIgual, pegarVar, chamar, igual,
-- usa, usaChamada, acharInstancia, tocar, avancarTempo...) e o comando "test". A documenta\xE7\xE3o para quem escreve
-- aulas est\xE1 em docs/guia-lua.md.
local C, host = ...
local DADOS = C.DADOS
local rtype = C.real.type
local resume = C.real.resume
local status = C.real.status
local QPS = C.QPS
local sim = C.sim

-- estado do teste atual
local T = {
	leniente = nil, dicas = {}, estrutura = {}, execucoes = 0, atividade = nil, W = nil, mundoAula = nil,
	dados = nil, nomes = setmetatable({}, { __mode = "k" }),
}
local RES = setmetatable({}, { __mode = "k" }) -- resultado de rodar() \u2192 {env, exportados, W}

-- ============================================================================================
-- Falhas
-- ============================================================================================
local FALHA_MT = { __tostring = function(f) return f.msg end }
local function maiuscula(msg: string): string
	local primeira = string.match(msg, "^[%a_][%w_]*")
	if not primeira then return msg end
	local seguinte = string.sub(msg, #primeira + 1, #primeira + 1)
	if string.find(primeira, "_", 1, true) or (seguinte ~= "" and string.find("(.[_:", seguinte, 1, true)) then return msg end
	local c = string.sub(msg, 1, 1)
	if c ~= string.lower(c) then return msg end
	return string.upper(c) .. string.sub(msg, 2)
end
local function novaFalha(msg, esperado, recebido)
	return setmetatable({ msg = maiuscula(C.real.tostring(msg)), esperado = esperado, recebido = recebido }, FALHA_MT)
end
local function eFalha(v) return rtype(v) == "table" and getmetatable(v) == FALHA_MT end
local function falhar(msg, esperado, recebido)
	error(novaFalha(msg, if esperado ~= nil then C.real.tostring(esperado) else nil, if recebido ~= nil then C.real.tostring(recebido) else nil), 0)
end
local function verificar(cond, msg)
	if not cond then falhar(msg or "A verifica\xE7\xE3o falhou.") end
end
local function prefixo(ctx) return if ctx and ctx ~= "" then ctx .. ": " else "" end

-- o "jeito de resolver" (usa, usaChamada...): na corre\xE7\xE3o tranquila vira sugest\xE3o em vez de reprovar
local function falhaEstrutura(msg)
	if T.leniente then
		table.insert(T.estrutura, msg)
		return
	end
	falhar(msg)
end

-- ============================================================================================
-- Erros do c\xF3digo do aluno \u2192 mensagens com a dica em portugu\xEAs (formatadas pelo motor, em JavaScript)
-- ============================================================================================
local function infoErro(W)
	local e = C.infoErro(W)
	if not e then return nil end
	local j = host.formatarErro(C.json.encode(e))
	return C.json.decode(j), e
end

local function textoAcao(acao)
	if not acao or acao == "" then return "" end
	return acao
end

local function falhaDeErroDoMundo(W, ctx)
	local info, bruto = infoErro(W)
	local acao = bruto and bruto.acao
	local inicio
	if acao and acao ~= "" then
		inicio = prefixo(ctx) .. textoAcao(acao) .. ", seu c\xF3digo deu erro"
	else
		inicio = prefixo(ctx) .. "seu c\xF3digo deu erro"
	end
	if bruto and bruto.t and bruto.t > 0 and not acao then
		inicio ..= string.format(" (aos %s s de jogo)", C.numeroTexto(math.floor(bruto.t * 100 + 0.5) / 100))
	end
	falhar(inicio .. ":\\n" .. info.texto .. "\\n\u2192 " .. info.dica)
end

local function mensagemTempo(W)
	local linha = W and W.linhaTempo
	local onde = if linha then " na linha " .. linha else ""
	local at = T.atividade
	if at and at.tipo == "chamar" then
		return maiuscula("Ao chamar " .. at.desc .. ", a fun\xE7\xE3o demorou demais e foi interrompida" .. onde .. ". Parece um loop infinito (ou uma solu\xE7\xE3o lenta demais).")
	end
	return maiuscula(prefixo(at and at.contexto) .. "seu c\xF3digo demorou demais e foi interrompido" .. onde .. ". Parece um loop infinito: a condi\xE7\xE3o do la\xE7o muda em algum momento?")
end

-- depois de cada a\xE7\xE3o simulada: erro, la\xE7o infinito ou texto demais viram falha do teste
local function conferirMundo(W, ctx)
	if W.motivo == "tempo" then falhar(mensagemTempo(W)) end
	if W.motivo == "limite" then falhar(prefixo(ctx) .. "seu programa mostrou texto demais \u2014 parece um loop infinito.") end
	if W.erro then falhaDeErroDoMundo(W, ctx) end
end

-- ============================================================================================
-- Rodar o programa do aluno (sempre do zero, num mundo novo)
-- ============================================================================================
local function linhas(texto)
	local ls = {}
	texto = string.gsub(C.real.tostring(texto), "\\r\\n", "\\n")
	for l in string.gmatch(texto .. "\\n", "(.-)\\n") do
		table.insert(ls, (string.gsub(l, "%s+$", "")))
	end
	while #ls > 0 and ls[#ls] == "" do table.remove(ls) end
	return ls
end

local function mundoAtual()
	if not T.W then
		-- nenhum rodar() ainda: um mundo vazio para as a\xE7\xF5es e chamadas
		T.W = C.criarMundo({ modo = "teste", semente = 1, dados = T.dados })
	end
	return T.W
end

local function rodar(opcoes)
	if opcoes ~= nil and rtype(opcoes) ~= "table" then
		falhar("rodar() recebe uma tabela de op\xE7\xF5es, por exemplo rodar({tempo = 5}), ou nada: rodar()")
	end
	opcoes = opcoes or {}
	T.execucoes += 1
	local W = C.criarMundo({
		modo = "teste", semente = opcoes.semente or 1, dados = T.dados, vazio = opcoes.mundoVazio == true,
		aleatorios = opcoes.aleatorios,
	})
	T.W = W
	if opcoes.falharDataStore then
		T.dados.falhas = if opcoes.falharDataStore == true then math.huge else tonumber(opcoes.falharDataStore) or 0
	end
	local ctx = opcoes.contexto or ""
	local clienteRec = nil
	if opcoes.cliente then
		local p = C.adicionarJogador(W, opcoes.cliente)
		clienteRec = DADOS[p]
	end
	local scriptProxy = C.criarScript(W, clienteRec)
	local codigoMundo = opcoes.mundo or T.mundoAula
	if rtype(codigoMundo) == "string" and codigoMundo ~= "" then
		local ok, msg = C.rodarMundoDaAula(W, codigoMundo, scriptProxy)
		if not ok then falhar("O mundo da aula deu erro (avise quem escreveu a aula): " .. C.real.tostring(msg)) end
	end
	local env, exportados = C.ambienteScript(W, scriptProxy)
	local fn, msg = host.carregarAluno(env)
	if not fn then falhar("N\xE3o consegui carregar o seu c\xF3digo: " .. C.real.tostring(msg)) end
	W.retornos = nil
	local co = coroutine.create(function()
		W.retornos = table.pack(fn())
	end)
	W.ctx[co] = if clienteRec then C.ctxCliente(W, clienteRec.proxy) else W.ctxServidor
	W.origemAtual = "script"
	local antes = T.atividade
	T.atividade = { tipo = "rodar", contexto = ctx }
	C.retomar(W, co)
	W.origemAtual = nil
	for _, nome in opcoes.jogadores or {} do
		if not W.parado then C.adicionarJogador(W, nome) end
	end
	local tempo = opcoes.tempo
	if tempo == nil then tempo = 60 end
	if not W.parado then C.rodarAte(W, W.quadro + math.floor(tempo * QPS + 0.5)) end
	T.atividade = antes

	-- r.saida, r.linhas, r.avisos e r.tempo s\xE3o "vivos": depois de tocar(...), clicar(...) ou avancarTempo(...), eles
	-- j\xE1 trazem o que os eventos mostraram
	local r = setmetatable({
		g = C.nomesDoAluno(env, exportados),
		retorno = W.retornos and W.retornos[1], retornos = W.retornos, game = W.game, workspace = W.workspace,
		log = W.log, contexto = ctx, fim = "ok", script = scriptProxy, terminou = W.retornos ~= nil,
	}, {
		__index = function(_, k)
			if k == "saida" then return C.textoCanal(W.saida) end
			if k == "linhas" then return linhas(C.textoCanal(W.saida)) end
			if k == "tempo" then return W.quadro / QPS end
			if k == "avisos" then
				local avisos = {}
				for _, l in W.log do if l.tipo == "warn" then table.insert(avisos, l.texto) end end
				return avisos
			end
			return nil
		end,
	})
	RES[r] = { env = env, exportados = exportados, W = W, lidas = W.saida.n }
	if W.motivo == "tempo" then
		r.fim = "tempo"
		falhar(mensagemTempo(W))
	end
	if W.motivo == "limite" then
		r.fim = "limite"
		falhar(prefixo(ctx) .. "seu programa mostrou texto demais \u2014 parece um loop infinito.")
	end
	if W.erro then
		r.fim = "erro"
		local info, bruto = infoErro(W)
		r.erro = info
		r.erroBruto = bruto and bruto.mensagem
		if not opcoes.permitirErro then falhaDeErroDoMundo(W, ctx) end
	end
	return r
end

-- ============================================================================================
-- Sa\xEDda
-- ============================================================================================
local function textoDe(r)
	if rtype(r) == "table" and RES[r] then return r.saida end
	if rtype(r) == "table" and r.saida then return r.saida end
	return C.real.tostring(r)
end
local function contextoDe(r)
	if rtype(r) == "table" and RES[r] then return r.contexto end
	return ""
end

local function saidaIgual(r, esperado, contexto)
	local ctx = if contexto ~= nil then contexto else contextoDe(r)
	local esp = esperado
	if rtype(esperado) == "table" then
		local t = {}
		for i, l in esperado do t[i] = C.real.tostring(l) end
		esp = t
	end
	local res = host.compararSaida(textoDe(r), C.json.encode(esp), ctx or "", C.json.encode(T.leniente or false))
	if res == nil or res == "" then return end
	local f = C.json.decode(res)
	if f.quase then
		table.insert(T.dicas, f.msg)
		return
	end
	error(novaFalha(f.msg, f.esperado, f.recebido), 0)
end

local function saidaContem(r, trecho, msg)
	local rec = table.concat(linhas(textoDe(r)), "\\n")
	trecho = C.real.tostring(trecho)
	if string.find(rec, trecho, 1, true) then return end
	if T.leniente and host.contemParecido(rec, trecho, C.json.encode(T.leniente)) then
		table.insert(T.dicas, "Passou! S\xF3 um detalhe: o esperado era ver exatamente " .. C.aspas(trecho) .. " na sa\xEDda.")
		return
	end
	falhar(msg or (prefixo(contextoDe(r)) .. "esperava ver " .. C.aspas(trecho) .. " na sa\xEDda, mas n\xE3o apareceu."), trecho, rec)
end

local function saidaNaoContem(r, trecho, msg)
	local rec = table.concat(linhas(textoDe(r)), "\\n")
	trecho = C.real.tostring(trecho)
	if string.find(rec, trecho, 1, true) then
		falhar(msg or (prefixo(contextoDe(r)) .. "a sa\xEDda n\xE3o deveria mostrar " .. C.aspas(trecho) .. "."))
	end
end

-- o que o script mostrou desde a \xFAltima chamada de saidaNova(r) (ou desde o fim do rodar)
local function saidaNova(r)
	local i = rtype(r) == "table" and RES[r]
	if not i then falhar("Passe o resultado de rodar() para saidaNova: local r = rodar() ... saidaNova(r)") end
	local canal = i.W.saida
	local partes = {}
	for k = i.lidas + 1, canal.n do table.insert(partes, canal.partes[k]) end
	i.lidas = canal.n
	if #partes == 0 then return "" end
	return table.concat(partes, "\\n") .. "\\n"
end

local function ultimaLinha(r)
	local ls = linhas(textoDe(r))
	if #ls == 0 then falhar(prefixo(contextoDe(r)) .. "seu programa n\xE3o mostrou nada. Faltou um print()?") end
	return ls[#ls]
end

-- ============================================================================================
-- Tipos e compara\xE7\xE3o
-- ============================================================================================
local NOMES_TIPO = {
	number = "number (n\xFAmero)", integer = "um n\xFAmero inteiro", inteiro = "um n\xFAmero inteiro", string = "string (texto)",
	boolean = "boolean (true/false)", table = "table (tabela)", ["function"] = "function (fun\xE7\xE3o)", ["nil"] = "nil",
}
local function tipoDe(v)
	local t = C.typeof(v)
	if t == "Instance" then return "Instance (" .. DADOS[v].classe.nome .. ")" end
	return t
end
local function eTipo(v, tipo)
	if rtype(tipo) == "table" then
		for _, t in tipo do if eTipo(v, t) then return true end end
		return false
	end
	if tipo == "integer" or tipo == "inteiro" then return rtype(v) == "number" and v == math.floor(v) end
	if tipo == "number" then return rtype(v) == "number" end
	if C.CLASSES[tipo] and DADOS[v] then return DADOS[v].classe.isa[tipo] == true end
	return C.typeof(v) == tipo
end
local function nomeTipo(tipo)
	if rtype(tipo) == "table" then
		local p = {}
		for _, t in tipo do table.insert(p, nomeTipo(t)) end
		return table.concat(p, " ou ")
	end
	return NOMES_TIPO[tipo] or tipo
end

local function mostrar(v) return C.mostrar(v) end
local function curto(v) return C.mostrar(v, 60) end

local function quase(a: number, b: number, tol: number)
	return math.abs(a - b) <= tol
end

local iguais
iguais = function(a, b, vistos)
	local ta, tb = C.typeof(a), C.typeof(b)
	if ta == "number" and tb == "number" then
		if a ~= a or b ~= b then return a ~= a and b ~= b end
		if a == b then return true end
		if a == math.huge or a == -math.huge or b == math.huge or b == -math.huge then return false end
		return math.abs(a - b) <= math.max(1e-9 * math.max(math.abs(a), math.abs(b)), 1e-9)
	end
	if ta ~= tb then return false end
	if rawequal(a, b) then return true end
	if ta == "Vector3" then return quase(a.x, b.x, 1e-4) and quase(a.y, b.y, 1e-4) and quase(a.z, b.z, 1e-4) end
	if ta == "Vector2" then return quase(a.X, b.X, 1e-4) and quase(a.Y, b.Y, 1e-4) end
	if ta == "Color3" then return quase(a.R, b.R, 1e-4) and quase(a.G, b.G, 1e-4) and quase(a.B, b.B, 1e-4) end
	if ta == "CFrame" then return a:FuzzyEq(b, 1e-4) end
	if ta ~= "table" then return a == b end
	vistos = vistos or {}
	if vistos[a] == b then return true end
	vistos[a] = b
	for k, v in C.real.pairs(b) do
		if not iguais(rawget(a, k), v, vistos) then return false end
	end
	for k in C.real.pairs(a) do
		if rawget(b, k) == nil then return false end
	end
	return true
end

local function ondeDifere(obtido, esperado)
	if rtype(obtido) ~= "table" or rtype(esperado) ~= "table" or C.TIPO[obtido] or C.TIPO[esperado] then return "" end
	local ne, no = #esperado, #obtido
	local soLista = true
	for k in C.real.pairs(esperado) do
		if not (rtype(k) == "number" and k >= 1 and k <= ne and k == math.floor(k)) then soLista = false break end
	end
	if soLista and ne > 0 then
		if no ~= ne then return string.format("\\nTamanho esperado: %d itens; veio com %d.", ne, no) end
		for i = 1, ne do
			if not iguais(obtido[i], esperado[i]) then
				return string.format("\\nPrimeira diferen\xE7a na posi\xE7\xE3o [%d]: esperado %s, veio %s.", i, curto(esperado[i]), curto(obtido[i]))
			end
		end
	end
	local faltam, sobram = {}, {}
	for k in C.real.pairs(esperado) do if rawget(obtido, k) == nil then table.insert(faltam, k) end end
	for k in C.real.pairs(obtido) do if rawget(esperado, k) == nil then table.insert(sobram, k) end end
	if #faltam > 0 then
		table.sort(faltam, function(x, y) return C.real.tostring(x) < C.real.tostring(y) end)
		return "\\nFaltou a chave " .. curto(faltam[1]) .. (if #faltam > 1 then " (e mais " .. (#faltam - 1) .. ")" else "") .. "."
	end
	if #sobram > 0 then
		table.sort(sobram, function(x, y) return C.real.tostring(x) < C.real.tostring(y) end)
		return "\\nSobrou a chave " .. curto(sobram[1]) .. (if #sobram > 1 then " (e mais " .. (#sobram - 1) .. ")" else "") .. "."
	end
	for k, v in C.real.pairs(esperado) do
		if not iguais(rawget(obtido, k), v) then
			return "\\nNa chave " .. curto(k) .. ": esperado " .. curto(v) .. ", veio " .. curto(rawget(obtido, k)) .. "."
		end
	end
	return ""
end

-- "vidaMaxima" ou "vidaMaxima (100 + 7 * 10)" \u2192 "\`vidaMaxima\` (100 + 7 * 10)": nome de vari\xE1vel n\xE3o vira mai\xFAscula
local function descricao(desc)
	desc = C.real.tostring(desc)
	local nome, resto = string.match(desc, "^([%a_][%w_]*)(.*)$")
	if nome and (resto == "" or string.sub(resto, 1, 2) == " (") and not string.find(nome, "^[A-Z][a-z]") then
		return "\`" .. nome .. "\`" .. resto
	end
	if nome and (resto == "" or string.sub(resto, 1, 2) == " (") and string.find(nome, "%u", 2) then
		return "\`" .. nome .. "\`" .. resto
	end
	return desc
end

local function igual(obtido, esperado, desc)
	desc = if desc then descricao(desc) else "O resultado"
	if iguais(obtido, esperado) then return end
	local dica
	local to, te = C.typeof(obtido), C.typeof(esperado)
	if obtido == nil and esperado ~= nil then
		dica = "\\nVeio nil: faltou o return? (print s\xF3 mostra na tela; return devolve o valor.)"
	elseif te == "number" and to == "string" then
		dica = "\\nVeio um texto (string), mas era para ser um n\xFAmero. (Faltou tonumber(...)?)"
	elseif te == "string" and to == "number" then
		dica = "\\nVeio um n\xFAmero, mas era para ser um texto (string). (Faltou tostring(...)?)"
	elseif to ~= te then
		dica = "\\nO tipo esperado era " .. tipoDe(esperado) .. ", mas veio " .. tipoDe(obtido) .. "."
	else
		dica = ondeDifere(obtido, esperado)
	end
	error(novaFalha(desc .. " deveria ser " .. mostrar(esperado) .. ", mas foi " .. mostrar(obtido) .. "." .. dica,
		C.mostrar(esperado, 400), C.mostrar(obtido, 400)), 0)
end

local function perto(obtido, esperado, tolerancia, desc)
	tolerancia = tolerancia or 1e-6
	desc = if desc then descricao(desc) else "O resultado"
	if rtype(obtido) ~= "number" or math.abs(obtido - esperado) > tolerancia then
		falhar(string.format("%s deveria ser %s (com toler\xE2ncia de %s), mas foi %s.", desc, mostrar(esperado), C.numeroTexto(tolerancia), mostrar(obtido)),
			mostrar(esperado), mostrar(obtido))
	end
end

-- ============================================================================================
-- Nomes do aluno: vari\xE1veis e fun\xE7\xF5es do n\xEDvel principal
-- ============================================================================================
local function infoRes(r, ajudante)
	local i = rtype(r) == "table" and RES[r]
	if not i then falhar("Passe o resultado de rodar() para " .. ajudante .. ": local r = rodar() ... " .. ajudante .. "(r, \\"nome\\")") end
	return i
end

local function pegarVar(r, nome, tipo)
	local i = infoRes(r, "pegarVar")
	if not C.temNome(i.env, i.exportados, nome) then
		falhar("N\xE3o encontrei a vari\xE1vel \`" .. nome .. "\`. Crie com local " .. nome .. " = ... no n\xEDvel principal do c\xF3digo "
			.. "(fora de fun\xE7\xF5es e blocos), com esse nome exato \u2014 mai\xFAsculas e min\xFAsculas contam.")
	end
	local v = r.g[nome]
	if tipo ~= nil and not eTipo(v, tipo) then
		falhar("A vari\xE1vel \`" .. nome .. "\` deveria ser " .. nomeTipo(tipo) .. ", mas \xE9 " .. tipoDe(v) .. " (valor: " .. curto(v) .. ").")
	end
	if rtype(v) == "function" then T.nomes[v] = nome end
	return v
end

local function pegarFuncao(r, nome)
	local i = infoRes(r, "pegarFuncao")
	if not C.temNome(i.env, i.exportados, nome) then
		falhar("N\xE3o encontrei a fun\xE7\xE3o \`" .. nome .. "\`. Crie com local function " .. nome .. "(...) ... end \u2014 com esse nome exato, "
			.. "no n\xEDvel principal do c\xF3digo (fora de outras fun\xE7\xF5es).")
	end
	local f = r.g[nome]
	if rtype(f) ~= "function" then
		falhar("\`" .. nome .. "\` existe, mas n\xE3o \xE9 uma fun\xE7\xE3o (\xE9 " .. tipoDe(f) .. ", valor: " .. curto(f) .. ").")
	end
	T.nomes[f] = nome
	return f
end

local function pegarTabela(r, nome)
	return pegarVar(r, nome, "table")
end

-- ============================================================================================
-- Chamar fun\xE7\xF5es do aluno (sa\xEDda capturada, erros viram falhas amig\xE1veis, recurs\xE3o e la\xE7o infinito detectados)
-- ============================================================================================
local function nomeDe(f)
	if T.nomes[f] then return T.nomes[f] end
	local ok, n = pcall(debug.info, f, "n")
	if ok and n and n ~= "" then return n end
	return "fun\xE7\xE3o"
end

local function descArgs(args)
	local p = {}
	for i = 1, args.n do p[i] = curto(args[i]) end
	return table.concat(p, ", ")
end

local function chamarInterno(f, desc, ...)
	T.execucoes += 1
	if rtype(f) ~= "function" then falhar("N\xE3o consegui chamar " .. desc .. ": isso n\xE3o \xE9 uma fun\xE7\xE3o (\xE9 " .. tipoDe(f) .. ").") end
	local W = mundoAtual()
	local canalAnt = W.canal
	local meu = C.novoCanal()
	W.canal = meu
	local antes = T.atividade
	T.atividade = { tipo = "chamar", desc = desc }
	local resultado = nil
	local co = coroutine.create(function(...)
		resultado = table.pack(f(...))
	end)
	W.ctx[co] = W.ctxServidor
	local erroAntes = W.erro
	local ok, err = resume(co, ...)
	if ok and status(co) == "suspended" and not W.parado then
		-- a fun\xE7\xE3o esperou (task.wait, :Wait()): o tempo virtual anda at\xE9 ela terminar (no m\xE1ximo 60 s)
		local limite = W.quadro + 60 * QPS
		while status(co) == "suspended" and not W.parado and W.quadro < limite and C.temPendencias(W) do
			C.rodarAte(W, math.min(limite, W.quadro + QPS))
		end
	end
	W.canal = canalAnt
	T.atividade = antes
	if not ok then
		if eFalha(err) then error(err, 0) end
		if err == C.MARCA_TEMPO or W.motivo == "tempo" then
			T.atividade = { tipo = "chamar", desc = desc }
			falhar(mensagemTempo(W))
		end
		if err == C.MARCA_LIMITE or W.motivo == "limite" then falhar("Ao chamar " .. desc .. ", a fun\xE7\xE3o mostrou texto demais \u2014 loop infinito?") end
		local msg = if rtype(err) == "string" then err else C.mostrar(err)
		if string.find(msg, "stack overflow", 1, true) then
			falhar("Ao chamar " .. desc .. ": a fun\xE7\xE3o chamou a si mesma sem parar (recurs\xE3o infinita). Falta um caso base?")
		end
		local tb = C.real.traceback(co)
		local info = C.json.decode(host.formatarErro(C.json.encode({ mensagem = msg, pilha = tb, naoTexto = rtype(err) ~= "string" })))
		falhar("Ao chamar " .. desc .. " aconteceu um erro:\\n" .. info.texto .. "\\n\u2192 " .. info.dica)
	end
	if W.erro and W.erro ~= erroAntes then
		falhaDeErroDoMundo(W, "Ao chamar " .. desc)
	end
	if W.motivo == "tempo" then falhar(mensagemTempo(W)) end
	if status(co) ~= "dead" then
		falhar("Ao chamar " .. desc .. ", a fun\xE7\xE3o ficou esperando (task.wait ou :Wait()) e n\xE3o terminou.")
	end
	return resultado, C.textoCanal(meu)
end

local function chamar(f, ...)
	local args = table.pack(...)
	local r = chamarInterno(f, nomeDe(f) .. "(" .. descArgs(args) .. ")", ...)
	return table.unpack(r, 1, r.n)
end

local function chamarComSaida(f, ...)
	local args = table.pack(...)
	local r, saida = chamarInterno(f, nomeDe(f) .. "(" .. descArgs(args) .. ")", ...)
	return saida, table.unpack(r, 1, r.n)
end

local function metodoDe(obj, nome, desc)
	if rtype(obj) ~= "table" then falhar("N\xE3o consegui chamar " .. desc .. ": o objeto \xE9 " .. tipoDe(obj) .. " (valor: " .. curto(obj) .. ").") end
	local ok, f = pcall(function() return obj[nome] end)
	if not ok or rtype(f) ~= "function" then
		falhar("O objeto n\xE3o tem o m\xE9todo \`" .. nome .. "\` (veio " .. (if ok then tipoDe(f) else "erro") .. "). "
			.. "Confira o nome e se ele foi criado com function Classe:" .. nome .. "(...) ... end.")
	end
	return f
end

local function chamarMetodo(obj, nome, ...)
	local args = table.pack(...)
	local desc = "objeto:" .. nome .. "(" .. descArgs(args) .. ")"
	local f = metodoDe(obj, nome, desc)
	local r = chamarInterno(f, desc, obj, ...)
	return table.unpack(r, 1, r.n)
end

local function chamarMetodoComSaida(obj, nome, ...)
	local args = table.pack(...)
	local desc = "objeto:" .. nome .. "(" .. descArgs(args) .. ")"
	local f = metodoDe(obj, nome, desc)
	local r, saida = chamarInterno(f, desc, obj, ...)
	return saida, table.unpack(r, 1, r.n)
end

-- ============================================================================================
-- Estrutura do c\xF3digo (no c\xF3digo sem coment\xE1rios e sem textos; o motor em JavaScript conta)
-- ============================================================================================
local DESCRICOES = {
	["for"] = "um la\xE7o for", ["while"] = "um la\xE7o while", ["repeat"] = "um la\xE7o repeat ... until", ["if"] = "um if",
	["elseif"] = "elseif", ["else"] = "else", ["function"] = "uma fun\xE7\xE3o (function)", ["local function"] = "uma fun\xE7\xE3o local (local function)",
	["local"] = "local", ["return"] = "return", ["break"] = "break", ["continue"] = "continue",
	["for numerico"] = "um for num\xE9rico (for i = 1, 10 do)", ["for in"] = "um for ... in (com ipairs ou pairs)",
	["if expressao"] = "um if como express\xE3o (local x = if ... then ... else ...)",
	["function anonima"] = "uma fun\xE7\xE3o an\xF4nima (function(...) ... end)", ["not"] = "not", ["and"] = "and", ["or"] = "or",
}
local function lista(x)
	if rtype(x) == "table" then return x end
	return { x }
end
local function descricaoDe(x)
	local l = lista(x)
	local p = {}
	for _, i in l do table.insert(p, DESCRICOES[i] or i) end
	return table.concat(p, " ou ")
end
local function contarEstrutura(tipo, x)
	local n = 0
	for _, i in lista(x) do n += tonumber(host.estrutura(tipo, C.real.tostring(i))) or 0 end
	return n
end

local function conta(x) return contarEstrutura("palavra", x) end
local function usa(x, msg)
	if conta(x) == 0 then falhaEstrutura(msg or ("Este exerc\xEDcio pede que voc\xEA use " .. descricaoDe(x) .. ".")) end
end
local function naoUsa(x, msg)
	if conta(x) > 0 then falhaEstrutura(msg or ("Neste exerc\xEDcio, n\xE3o use " .. descricaoDe(x) .. ".")) end
end
local function contaChamadas(nome) return contarEstrutura("chamada", nome) end
local function usaChamada(nome, msg)
	if contaChamadas(nome) == 0 then
		local l = lista(nome)
		local p = {}
		for _, n in l do table.insert(p, n .. "(...)") end
		falhaEstrutura(msg or ("Este exerc\xEDcio pede que voc\xEA use " .. table.concat(p, " ou ") .. "."))
	end
end
local function naoUsaChamada(nome, msg)
	if contaChamadas(nome) > 0 then falhaEstrutura(msg or ("Neste exerc\xEDcio, resolva sem usar " .. C.real.tostring(lista(nome)[1]) .. "(...).")) end
end
local function contaOperador(op) return contarEstrutura("operador", op) end
local function usaOperador(op, msg)
	if contaOperador(op) == 0 then
		falhaEstrutura(msg or ("Este exerc\xEDcio pede que voc\xEA use o operador " .. table.concat(lista(op), " ou ") .. "."))
	end
end
local function naoUsaOperador(op, msg)
	if contaOperador(op) > 0 then falhaEstrutura(msg or ("Neste exerc\xEDcio, n\xE3o use o operador " .. C.real.tostring(lista(op)[1]) .. ".")) end
end
local function usaInterpolacao(msg)
	if contarEstrutura("interpolacao", "") == 0 then
		falhaEstrutura(msg or "Este exerc\xEDcio pede um texto com interpola\xE7\xE3o, entre crases e com chaves: \`Vida: {vida}\`")
	end
end
local function globais()
	return C.json.decode(host.consulta("globais"))
end
local function semGlobais(msg)
	local g = globais()
	if #g > 0 then
		local nomes = {}
		for i, n in g do if i <= 3 then table.insert(nomes, "\`" .. n .. "\`") end end
		falhaEstrutura(msg or ("Crie as vari\xE1veis e fun\xE7\xF5es com local: " .. table.concat(nomes, ", ")
			.. (if #g > 3 then " e mais " .. (#g - 3) else "") .. (if #g == 1 then " foi criada" else " foram criadas")
			.. " sem local. No Roblox, use sempre local (local vida = 100, local function atacar() ... end)."))
	end
end
local function usaLocal(nome, msg)
	local g = globais()
	if table.find(g, nome) then
		falhaEstrutura(msg or ("Crie \`" .. nome .. "\` com local: local " .. nome .. " = ... (ou local function " .. nome .. "(...))."))
	end
end
local function funcaoDefinida(nome)
	return tonumber(host.estrutura("funcao", nome)) ~= 0
end
local function eRecursiva(nome, msg)
	local n = tonumber(host.estrutura("recursiva", nome))
	if n == -1 then falhar("N\xE3o encontrei a fun\xE7\xE3o \`" .. nome .. "\` no seu c\xF3digo.") end
	if n == 0 then falhaEstrutura(msg or ("A fun\xE7\xE3o \`" .. nome .. "\` precisa ser recursiva: ela deve chamar " .. nome .. "(...) dentro dela mesma.")) end
end
local function textoDoCodigo(opcoes)
	if rtype(opcoes) == "table" and (opcoes.limpo or opcoes.semComentarios) then return host.consulta("limpo") end
	return host.consulta("codigo")
end
local function comentarios()
	return C.json.decode(host.consulta("comentarios"))
end
local function nomesDoTopo()
	return C.json.decode(host.consulta("nomesTopo"))
end

-- ============================================================================================
-- Roblox: inst\xE2ncias por caminho, a\xE7\xF5es simuladas e tempo
-- ============================================================================================
local function acharInstancia(caminho, msg)
	local W = mundoAtual()
	local inst, erroMsg = sim.procurarInstancia(W, caminho)
	if not inst then falhar(msg or ("N\xE3o encontrei " .. C.real.tostring(caminho) .. ": " .. erroMsg .. ".")) end
	return inst
end
local function procurarInstancia(caminho)
	local inst = sim.procurarInstancia(mundoAtual(), caminho)
	return inst
end

-- a\xE7\xE3o simulada: roda e confere se o c\xF3digo do aluno deu erro durante ela
local function acao(f)
	return function(...)
		local W = mundoAtual()
		local r = table.pack(pcall(f, W, ...))
		if not r[1] then
			if eFalha(r[2]) then error(r[2], 0) end
			if W.erro or W.motivo then conferirMundo(W, "") end
			local e = r[2]
			if rtype(e) == "string" and not string.find(e, "^[%w_]+: ") then
				local info = C.json.decode(host.formatarErro(C.json.encode({ mensagem = e, pilha = "", naoTexto = false })))
				falhar(info.texto .. "\\n\u2192 " .. info.dica)
			end
			falhar(C.real.tostring(e))
		end
		conferirMundo(W, "")
		return table.unpack(r, 2, r.n)
	end
end

local function esperarAte(cond, segundos)
	local W = mundoAtual()
	local limite = W.quadro + math.floor((tonumber(segundos) or 10) * QPS + 0.5)
	while W.quadro < limite do
		local ok, v = pcall(cond)
		if ok and v then return true end
		C.avancarAte(W, W.quadro + 1)
		conferirMundo(W, "")
	end
	local ok, v = pcall(cond)
	return ok and v == true
end

-- ============================================================================================
-- Ambiente dos testes
-- ============================================================================================
local A = {
	rodar = rodar, saidaIgual = saidaIgual, saidaContem = saidaContem, saidaNaoContem = saidaNaoContem,
	ultimaLinha = ultimaLinha, linhas = linhas, saidaNova = saidaNova, pegarVar = pegarVar, pegarFuncao = pegarFuncao, pegarTabela = pegarTabela,
	chamar = chamar, chamarComSaida = chamarComSaida, chamarMetodo = chamarMetodo, chamarMetodoComSaida = chamarMetodoComSaida,
	igual = igual, perto = perto, verificar = verificar, falhar = falhar, mostrar = mostrar, tipoDe = tipoDe,
	usa = usa, naoUsa = naoUsa, conta = conta, usaChamada = usaChamada, naoUsaChamada = naoUsaChamada,
	contaChamadas = contaChamadas, usaOperador = usaOperador, naoUsaOperador = naoUsaOperador, contaOperador = contaOperador,
	usaInterpolacao = usaInterpolacao, semGlobais = semGlobais, usaLocal = usaLocal, funcaoDefinida = funcaoDefinida,
	eRecursiva = eRecursiva, textoDoCodigo = textoDoCodigo, comentarios = comentarios, nomesDoTopo = nomesDoTopo,
	acharInstancia = acharInstancia, procurarInstancia = procurarInstancia, esperarAte = esperarAte,
	adicionarJogador = acao(function(W, nome, o) return (sim.adicionarJogador(W, nome, o)) end),
	removerJogador = acao(sim.removerJogador),
	tocar = acao(sim.tocar),
	pararDeTocar = acao(sim.pararDeTocar),
	clicar = acao(sim.clicar),
	apertarTecla = acao(sim.apertarTecla),
	soltarTecla = acao(sim.soltarTecla),
	comoCliente = acao(sim.comoCliente),
	dispararServidor = acao(sim.dispararServidor),
	invocarServidor = acao(sim.invocarServidor),
	avancarTempo = acao(sim.avancarTempo),
	fecharJogo = acao(sim.fecharJogo),
	jogador = function(nome)
		local p = sim.jogadorDe(mundoAtual(), nome)
		return p and p.proxy
	end,
	personagem = function(x)
		local p = sim.jogadorDe(mundoAtual(), x)
		return p and p.props.Character
	end,
	tempoAtual = function() return mundoAtual().quadro / QPS end,
	dadosSalvos = function(loja, chave)
		local t = T.dados.lojas[loja]
		return t and C.copiaProfunda(t[C.real.tostring(chave)])
	end,
	definirDados = function(loja, chave, valor)
		T.dados.lojas[loja] = T.dados.lojas[loja] or {}
		T.dados.lojas[loja][C.real.tostring(chave)] = C.copiaProfunda(valor)
	end,
	falharDataStore = function(n)
		T.dados.falhas = if n == nil or n == true then math.huge elseif n == false then 0 else tonumber(n) or 0
	end,
	acessosDataStore = function() return C.copiaProfunda(T.dados.registro) end,
	FalhaTeste = novaFalha,
}
C.ajudantes = A

-- globais do teste: as comuns + os ajudantes + as do mundo atual (game, workspace, Instance... do \xFAltimo rodar)
local TESTE_BASE = table.clone(C.BASE)
for k, v in A do TESTE_BASE[k] = v end
TESTE_BASE.print = function(...) end
local DO_MUNDO = {
	game = "game", Game = "game", workspace = "workspace", Workspace = "workspace", Instance = "Instance",
	task = "task", math = "math", os = "os", Random = "Random", tick = "tick", time = "time",
}
function C.ambienteTeste()
	return setmetatable({}, {
		__index = function(_, k)
			local m = DO_MUNDO[k]
			if m then return mundoAtual()[m] end
			return TESTE_BASE[k]
		end,
	})
end

-- ============================================================================================
-- Comando "test": roda UM teste (o motor cria um estado Luau novo para cada teste)
-- ============================================================================================
function C.controle.testar(fnTeste, configJSON: string): string
	local cfg = C.json.decode(configJSON)
	C.prazo = C.real.clock() + (tonumber(cfg.tempo) or 8)
	T.leniente = if rtype(cfg.leniente) == "table" then cfg.leniente else nil
	T.dicas = {}
	T.estrutura = {}
	T.execucoes = 0
	T.atividade = nil
	T.W = nil
	T.mundoAula = if rtype(cfg.mundo) == "string" and cfg.mundo ~= "" then cfg.mundo else nil
	T.dados = { lojas = {}, registro = {}, falhas = 0 }
	local co = coroutine.create(fnTeste)
	local ok, err = resume(co)
	while ok and status(co) == "suspended" do
		local W = T.W
		if not W or W.parado or not C.temPendencias(W) then break end
		C.rodarAte(W, W.quadro + QPS)
	end
	local r = { execucoes = T.execucoes }
	if ok and status(co) == "dead" then
		r.ok = true
		if #T.dicas > 0 then r.dicas = T.dicas end
		if #T.estrutura > 0 then r.estrutura = T.estrutura end
	elseif ok then
		r.ok = false
		r.msg = "O teste ficou esperando algo que nunca aconteceu (o c\xF3digo esperou com task.wait ou :Wait() e n\xE3o continuou)."
	else
		r.ok = false
		if eFalha(err) then
			r.msg = err.msg
			r.esperado = err.esperado
			r.recebido = err.recebido
		elseif err == C.MARCA_TEMPO or (T.W and T.W.motivo == "tempo") then
			r.msg = mensagemTempo(T.W)
			r.tempo = true
		elseif err == C.MARCA_LIMITE then
			r.msg = "Seu c\xF3digo mostrou texto demais \u2014 parece um loop infinito."
		else
			local msg = if rtype(err) == "string" then err else C.mostrar(err)
			local info = C.json.decode(host.formatarErro(C.json.encode({ mensagem = msg, pilha = C.real.traceback(co), naoTexto = rtype(err) ~= "string", doTeste = true })))
			r.msg = "O teste n\xE3o conseguiu conferir seu c\xF3digo:\\n" .. info.texto .. "\\n\u2192 " .. info.dica
			r.erroDoTeste = true
		end
	end
	return C.json.encode(r)
end
`;var uo={base:oo,tipos:no,agenda:ro,instancias:ao,classes:io,servicos:so,mundo:co,ajudantes:lo};var fo=new URL("lua/luau.wasm",self.location.href).href;async function js(){if(globalThis.__cobraLuauWasm)return;let t=await fetch(fo);if(!t.ok)throw new Error(`n\xE3o consegui baixar o motor Luau (${t.status} ${fo})`);globalThis.__cobraLuauWasm=await WebAssembly.compile(await t.arrayBuffer())}var pe=new Me({fontes:uo}),mo=js().then(()=>pe.iniciar()).then(()=>postMessage({type:"ready",info:pe.info()}),t=>{throw postMessage({type:"fatal",error:String(t&&(t.stack||t.message)||t)}),t});mo.catch(()=>{});self.onmessage=async t=>{let{id:e,cmd:o,payload:n}=t.data||{};try{await mo;let a;if(o==="run")a=await pe.executar(n||{});else if(o==="test")a=await pe.testar(n||{});else if(o==="info")a=pe.info();else throw new Error("comando desconhecido: "+o);postMessage({id:e,ok:!0,result:a})}catch(a){postMessage({id:e,ok:!1,error:String(a&&a.message||a)})}};})();
