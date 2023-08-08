const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".DS_Store","apple-touch-icon.png","docs/Advance_Request_Form.pdf","docs/Budget_Request_form.pdf","docs/Reimbursement_Form.pdf","docs/SA_Tech_03_ASSET_TRANSFER_FORM.pdf","docs/SA_Tech_Advance_Settlement_Form.pdf","docs/SA_Tech_Non_Consumable_Indent.pdf","docs/SA_Tech_Temporary_Advance_Form.pdf","favicon-16x16.png","favicon-32x32.png","poster.webp","robots.txt"]),
	mimeTypes: {".png":"image/png",".pdf":"application/pdf",".webp":"image/webp",".txt":"text/plain"},
	_: {
		client: {"start":"_app/immutable/entry/start.05e5aa9d.js","app":"_app/immutable/entry/app.2ecea9ac.js","imports":["_app/immutable/entry/start.05e5aa9d.js","_app/immutable/chunks/scheduler.af88fea6.js","_app/immutable/chunks/singletons.c7f82657.js","_app/immutable/entry/app.2ecea9ac.js","_app/immutable/chunks/scheduler.af88fea6.js","_app/immutable/chunks/index.3c1d0bd2.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./chunks/0-2507c252.js')),
			__memo(() => import('./chunks/1-61be7ac5.js')),
			__memo(() => import('./chunks/2-c11a153a.js')),
			__memo(() => import('./chunks/3-f7a6f788.js')),
			__memo(() => import('./chunks/4-1ccddc1c.js')),
			__memo(() => import('./chunks/5-bf5f63ef.js')),
			__memo(() => import('./chunks/6-cc994b15.js'))
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
				id: "/events",
				pattern: /^\/events\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/forms",
				pattern: /^\/forms\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/gallery",
				pattern: /^\/gallery\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/people",
				pattern: /^\/people\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();

const prerendered = new Set([]);

export { manifest, prerendered };
//# sourceMappingURL=manifest.js.map
