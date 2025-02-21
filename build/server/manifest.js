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
		client: {start:"_app/immutable/entry/start.DF7RzVVf.js",app:"_app/immutable/entry/app.DBCG3q7l.js",imports:["_app/immutable/entry/start.DF7RzVVf.js","_app/immutable/chunks/CHaFX-VK.js","_app/immutable/chunks/_SuVmlR5.js","_app/immutable/chunks/DC98kA9C.js","_app/immutable/entry/app.DBCG3q7l.js","_app/immutable/chunks/_SuVmlR5.js","_app/immutable/chunks/BwteBFUm.js","_app/immutable/chunks/D97quzuU.js","_app/immutable/chunks/CsBDFye-.js","_app/immutable/chunks/CZwtKhBr.js","_app/immutable/chunks/CSlmfg9l.js","_app/immutable/chunks/DC98kA9C.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./chunks/0-C343pGLs.js')),
			__memo(() => import('./chunks/1-CYm3qNP7.js')),
			__memo(() => import('./chunks/2--UPQCH1A.js')),
			__memo(() => import('./chunks/3-D9w8XEqn.js')),
			__memo(() => import('./chunks/4-D0ZWlYPP.js')),
			__memo(() => import('./chunks/5-Dvb1rdvs.js'))
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
				endpoint: __memo(() => import('./chunks/_server.ts-CPA9admG.js'))
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
