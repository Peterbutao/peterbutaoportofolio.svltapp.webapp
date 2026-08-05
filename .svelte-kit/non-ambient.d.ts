
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
		RouteId(): "/" | "/UI" | "/UI/UX-designs" | "/UI/UX-designs/[slug]" | "/about" | "/contact" | "/projects" | "/projects/[slug]" | "/services" | "/sitemap.xml";
		RouteParams(): {
			"/UI/UX-designs/[slug]": { slug: string };
			"/projects/[slug]": { slug: string }
		};
		LayoutParams(): {
			"/": { slug?: string | undefined };
			"/UI": { slug?: string | undefined };
			"/UI/UX-designs": { slug?: string | undefined };
			"/UI/UX-designs/[slug]": { slug: string };
			"/about": Record<string, never>;
			"/contact": Record<string, never>;
			"/projects": { slug?: string | undefined };
			"/projects/[slug]": { slug: string };
			"/services": Record<string, never>;
			"/sitemap.xml": Record<string, never>
		};
		Pathname(): "/" | "/UI/UX-designs" | `/UI/UX-designs/${string}` & {} | "/about" | "/contact" | "/projects" | `/projects/${string}` & {} | "/services" | "/sitemap.xml";
		ResolvedPathname(): `${"" | `/${string}`}${ReturnType<AppTypes['Pathname']>}`;
		Asset(): "/community/community.webp" | "/documents/CV - PETER BUTAO.docx" | "/favicon.png" | "/logo (1).webp" | "/logo (10).png" | "/logo (11).webp" | "/logo (12).webp" | "/logo (2).webp" | "/logo (3).webp" | "/logo (4).webp" | "/logo (5).png" | "/logo (6).webp" | "/logo (7).webp" | "/logo (8).webp" | "/logo (9).webp" | "/logo.png" | "/profile.png" | "/profile.webp" | "/Projects/pro.webp" | "/Projects/pro1.webp" | "/Projects/pro2.webp" | "/Projects/pro3.webp" | "/Projects/pro4.webp" | "/Projects/pro5.webp" | "/Projects/pro6.webp" | "/Projects/pro7.webp" | "/Projects/pro8.webp" | "/Projects/pro9.webp" | "/qr.png" | "/robots.txt" | "/sitemap.xml" | "/UI-designs/ANNUAL-REPORT.pdf" | "/UI-designs/uipng-1.webp" | "/UI-designs/uipng-2.webp" | "/UI-designs/uipng-3.webp" | "/UI-designs/uipng-4.webp" | "/UI-designs/uipng-5.webp" | "/UI-designs/uipng-6.webp" | "/work/work1.webp" | "/work/work2.webp" | string & {};
	}
}