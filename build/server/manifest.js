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
		client: {start:"_app/immutable/entry/start.DSklyYuN.js",app:"_app/immutable/entry/app.Dc3Qwe36.js",imports:["_app/immutable/entry/start.DSklyYuN.js","_app/immutable/chunks/6CztJwP1.js","_app/immutable/chunks/g3Tmz0S3.js","_app/immutable/chunks/BWobMu05.js","_app/immutable/entry/app.Dc3Qwe36.js","_app/immutable/chunks/g3Tmz0S3.js","_app/immutable/chunks/Qs_-gKkR.js","_app/immutable/chunks/CKB5XqNR.js","_app/immutable/chunks/DroBwdLr.js","_app/immutable/chunks/0GM-F11P.js","_app/immutable/chunks/ACi1ui8k.js","_app/immutable/chunks/BWobMu05.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./chunks/0-DiR3nTYa.js')),
			__memo(() => import('./chunks/1-u3C4KICa.js')),
			__memo(() => import('./chunks/2-CP5lLFqw.js')),
			__memo(() => import('./chunks/3-INY2nG09.js')),
			__memo(() => import('./chunks/4-Dp0mSmEj.js')),
			__memo(() => import('./chunks/5-BQ4KVz0v.js'))
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
