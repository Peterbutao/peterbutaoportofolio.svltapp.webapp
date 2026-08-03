
// this file is generated — do not edit it


declare module "svelte/elements" {
	export interface HTMLAttributes<T> {
		'data-sveltekit-keepfocus'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-noscroll'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-preload-code'?:
			| true
			| ''
			| 'eager'
			| 'viewport'
			| 'hover'
			| 'tap'
			| 'off'
			| undefined
			| null;
		'data-sveltekit-preload-data'?: true | '' | 'hover' | 'tap' | 'off' | undefined | null;
		'data-sveltekit-reload'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-replacestate'?: true | '' | 'off' | undefined | null;
	}
}

export {};


declare module "$app/types" {
	type MatcherParam<M> = M extends (param : string) => param is (infer U extends string) ? U : string;

	export interface AppTypes {
		RouteId(): "/" | "/UI-ux-designs" | "/UI-ux-designs/[slug]" | "/UI" | "/UI/UX-designs" | "/UI/UX-designs/[slug]" | "/projects" | "/projects/[slug]";
		RouteParams(): {
			"/UI-ux-designs/[slug]": { slug: string };
			"/UI/UX-designs/[slug]": { slug: string };
			"/projects/[slug]": { slug: string }
		};
		LayoutParams(): {
			"/": { slug?: string };
			"/UI-ux-designs": { slug?: string };
			"/UI-ux-designs/[slug]": { slug: string };
			"/UI": { slug?: string };
			"/UI/UX-designs": { slug?: string };
			"/UI/UX-designs/[slug]": { slug: string };
			"/projects": { slug?: string };
			"/projects/[slug]": { slug: string }
		};
		Pathname(): "/" | "/UI-ux-designs" | `/UI-ux-designs/${string}` & {} | "/UI/UX-designs" | `/UI/UX-designs/${string}` & {} | "/projects" | `/projects/${string}` & {};
		ResolvedPathname(): `${"" | `/${string}`}${ReturnType<AppTypes['Pathname']>}`;
		Asset(): "/community/community.jpg" | "/dev.svg" | "/favicon.png" | "/Frame 13.png" | "/global.scss" | "/logo (1).png" | "/logo (10).png" | "/logo (11).png" | "/logo (12).jpg" | "/logo (12).png" | "/logo (2).png" | "/logo (3).png" | "/logo (4).png" | "/logo (5).png" | "/logo (6).png" | "/logo (7).png" | "/logo (8).jpg" | "/logo (8).png" | "/logo (9).png" | "/logo.png" | "/profile.png" | "/Projects/pro.png" | "/Projects/pro1.png" | "/Projects/pro2.png" | "/Projects/pro3.png" | "/Projects/pro4.png" | "/Projects/pro5.png" | "/Projects/pro6.png" | "/Projects/pro7.png" | "/Projects/pro8.png" | "/Projects/pro9.png" | "/robots.txt" | "/sitemap.xml" | "/UI-designs/ANNUAL-REPORT.pdf" | "/UI-designs/uidesign-4.pdf" | "/UI-designs/uidesigns-1.pdf" | "/UI-designs/uidesigns-2.pdf" | "/UI-designs/uidesigns-3.pdf" | "/UI-designs/uipng-1.png" | "/UI-designs/uipng-2.png" | "/UI-designs/uipng-3.png" | "/UI-designs/uipng-4.png" | "/UI-designs/uipng-5.png" | "/UI-designs/uipng-6.png" | "/work/work1.jpg" | string & {};
	}
}