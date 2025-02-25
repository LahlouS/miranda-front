const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","swag-fire.gif"]),
	mimeTypes: {".png":"image/png",".gif":"image/gif"},
	_: {
		client: {start:"_app/immutable/entry/start.CnxmbcbQ.js",app:"_app/immutable/entry/app.DEhfkWbs.js",imports:["_app/immutable/entry/start.CnxmbcbQ.js","_app/immutable/chunks/c86IGuWO.js","_app/immutable/chunks/DsZSh94P.js","_app/immutable/chunks/CXYAfE7x.js","_app/immutable/entry/app.DEhfkWbs.js","_app/immutable/chunks/DsZSh94P.js","_app/immutable/chunks/DkCP2Fnt.js","_app/immutable/chunks/COIN8evz.js","_app/immutable/chunks/DgMzrqux.js","_app/immutable/chunks/BFO-mupc.js","_app/immutable/chunks/Dg7HLL5Q.js","_app/immutable/chunks/CXYAfE7x.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./chunks/0-Iip8OGxx.js')),
			__memo(() => import('./chunks/1-BqvVAF4V.js')),
			__memo(() => import('./chunks/2-BE66l4fv.js')),
			__memo(() => import('./chunks/3-CP2XPrhx.js')),
			__memo(() => import('./chunks/4-BpyREDWB.js')),
			__memo(() => import('./chunks/5-D9Qf1T_9.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/product",
				pattern: /^\/product\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/product/explore/[pid]",
				pattern: /^\/product\/explore\/([^/]+?)\/?$/,
				params: [{"name":"pid","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/product/explore/[pid]/engine",
				pattern: /^\/product\/explore\/([^/]+?)\/engine\/?$/,
				params: [{"name":"pid","optional":false,"rest":false,"chained":false}],
				page: null,
				endpoint: __memo(() => import('./chunks/_server.ts-Cu-JA6Uz.js'))
			},
			{
				id: "/product/explore/[pid]/users",
				pattern: /^\/product\/explore\/([^/]+?)\/users\/?$/,
				params: [{"name":"pid","optional":false,"rest":false,"chained":false}],
				page: null,
				endpoint: __memo(() => import('./chunks/_server.ts-BFAVF7nz.js'))
			},
			{
				id: "/product/new-product",
				pattern: /^\/product\/new-product\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();

const prerendered = new Set([]);

const base = "";

export { base, manifest, prerendered };
//# sourceMappingURL=manifest.js.map
