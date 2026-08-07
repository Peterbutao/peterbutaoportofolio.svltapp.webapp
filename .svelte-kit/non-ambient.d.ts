
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
		Asset(): "/community/community.webp" | "/documents/CV - PETER BUTAO.docx" | "/favicon.png" | "/llms.txt" | "/logo (1).webp" | "/logo (10).png" | "/logo (11).webp" | "/logo (12).webp" | "/logo (2).webp" | "/logo (3).webp" | "/logo (4).webp" | "/logo (5).png" | "/logo (6).webp" | "/logo (7).webp" | "/logo (8).webp" | "/logo (9).webp" | "/logo.png" | "/profile.png" | "/profile.webp" | "/Projects/pro.webp" | "/Projects/pro1.webp" | "/Projects/pro2.webp" | "/Projects/pro3.webp" | "/Projects/pro4.webp" | "/Projects/pro5.webp" | "/Projects/pro6.webp" | "/Projects/pro7.webp" | "/Projects/pro8.webp" | "/Projects/pro9.webp" | "/qr.png" | "/robots.txt" | "/UI-designs/ui1-annualreport/ANNUAL-REPORT-images-0.jpg" | "/UI-designs/ui1-annualreport/ANNUAL-REPORT-images-1.jpg" | "/UI-designs/ui1-annualreport/ANNUAL-REPORT-images-10.jpg" | "/UI-designs/ui1-annualreport/ANNUAL-REPORT-images-11.jpg" | "/UI-designs/ui1-annualreport/ANNUAL-REPORT-images-12.jpg" | "/UI-designs/ui1-annualreport/ANNUAL-REPORT-images-13.jpg" | "/UI-designs/ui1-annualreport/ANNUAL-REPORT-images-14.jpg" | "/UI-designs/ui1-annualreport/ANNUAL-REPORT-images-15.jpg" | "/UI-designs/ui1-annualreport/ANNUAL-REPORT-images-16.jpg" | "/UI-designs/ui1-annualreport/ANNUAL-REPORT-images-17.jpg" | "/UI-designs/ui1-annualreport/ANNUAL-REPORT-images-18.jpg" | "/UI-designs/ui1-annualreport/ANNUAL-REPORT-images-19.jpg" | "/UI-designs/ui1-annualreport/ANNUAL-REPORT-images-2.jpg" | "/UI-designs/ui1-annualreport/ANNUAL-REPORT-images-20.jpg" | "/UI-designs/ui1-annualreport/ANNUAL-REPORT-images-21.jpg" | "/UI-designs/ui1-annualreport/ANNUAL-REPORT-images-22.jpg" | "/UI-designs/ui1-annualreport/ANNUAL-REPORT-images-23.jpg" | "/UI-designs/ui1-annualreport/ANNUAL-REPORT-images-24.jpg" | "/UI-designs/ui1-annualreport/ANNUAL-REPORT-images-3.jpg" | "/UI-designs/ui1-annualreport/ANNUAL-REPORT-images-4.jpg" | "/UI-designs/ui1-annualreport/ANNUAL-REPORT-images-5.jpg" | "/UI-designs/ui1-annualreport/ANNUAL-REPORT-images-6.jpg" | "/UI-designs/ui1-annualreport/ANNUAL-REPORT-images-7.jpg" | "/UI-designs/ui1-annualreport/ANNUAL-REPORT-images-8.jpg" | "/UI-designs/ui1-annualreport/ANNUAL-REPORT-images-9.jpg" | "/UI-designs/uipng-1.png" | "/UI-designs/uipng-1.webp" | "/UI-designs/uipng-2.webp" | "/UI-designs/uipng-3.webp" | "/UI-designs/uipng-4.webp" | "/UI-designs/uipng-5.webp" | "/UI-designs/uipng-6.webp" | "/work/work1.webp" | "/work/work2.webp" | string & {};
	}
}