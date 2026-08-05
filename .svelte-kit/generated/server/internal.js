
import root from '../root.js';
import { set_building, set_prerendering } from '$app/env/internal';
import { set_assets } from '$app/paths/internal/server';
import { set_manifest, set_read_implementation } from '__sveltekit/server';
import { set_private_env, set_public_env } from '../../../node_modules/@sveltejs/kit/src/runtime/shared-server.js';
import error from '../shared/error-template.js';

export const options = {
	app_template_contains_nonce: false,
	async: false,
	csp: {"mode":"auto","directives":{"upgrade-insecure-requests":false,"block-all-mixed-content":false},"reportOnly":{"upgrade-insecure-requests":false,"block-all-mixed-content":false}},
	csrf_check_origin: true,
	csrf_trusted_origins: [],
	embedded: false,
	env_public_prefix: 'PUBLIC_',
	env_private_prefix: '',
	hash_routing: false,
	hooks: null, // added lazily, via `get_hooks`
	preload_strategy: "modulepreload",
	root,
	service_worker: false,
	service_worker_options: undefined,
	server_error_boundaries: false,
	templates: {
		app: ({ head, body, assets, nonce, env }) => "<!doctype html>\n<html lang=\"en\">\n  <head>\n    <meta charset=\"utf-8\" />\n    <link rel=\"icon\" href=\"" + assets + "/favicon.png\" />\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\" />\n    <title>Peter Butao Portfolio</title>\n    <meta name=\"description\" content=\"Peter Butao's professional portfolio showcasing projects, experience, and services.\" />\n    <meta name=\"keywords\" content=\"Peter Butao, portfolio, web development, Svelte, AI, SEO\" />\n    <meta name=\"author\" content=\"Peter Butao\" />\n    <!-- Open Graph -->\n    <meta property=\"og:title\" content=\"Peter Butao Portfolio\" />\n    <meta property=\"og:description\" content=\"Explore Peter Butao's projects and services.\" />\n    <meta property=\"og:type\" content=\"website\" />\n    <meta property=\"og:url\" content=\"https://peterbutao.pages.dev\" />\n    <meta property=\"og:image\" content=\"https://peterbutao.pages.dev/profile.png\" />\n    <!-- Twitter Card -->\n    <meta name=\"twitter:card\" content=\"summary_large_image\" />\n    <meta name=\"twitter:title\" content=\"Peter Butao Portfolio\" />\n    <meta name=\"twitter:description\" content=\"Explore Peter Butao's projects and services.\" />\n    <meta name=\"twitter:image\" content=\"https://peterbutao.pages.dev/profile.png\" />\n    <!-- JSON-LD Structured Data -->\n    <script type=\"application/ld+json\">\n    {\n      \"@context\": \"https://schema.org\",\n      \"@type\": \"Person\",\n      \"name\": \"Peter Rodrigues Butao\",\n      \"url\": \"https://peterbutao.pages.dev\",\n      \"sameAs\": [\n        \"https://github.com/PeterButao\",\n        \"https://www.linkedin.com/in/peterethanbutao\"\n      ],\n      \"jobTitle\": \"Project Development Specialist, M&E Consultant & Software Developer\",\n      \"worksFor\": {\n        \"@type\": \"Organization\",\n        \"name\": \"Self-Employed\"\n      }\n    }\n    </script>\n    <link rel=\"preconnect\" href=\"https://fonts.googleapis.com\">\n    <link rel=\"preconnect\" href=\"https://fonts.gstatic.com\" crossorigin>\n    <link href=\"https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;600;700&family=Inter:wght@400;500;600;700&display=swap\" rel=\"stylesheet\" media=\"print\" onload=\"this.media='all'\">\n    <noscript><link rel=\"stylesheet\" href=\"https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;600;700&family=Inter:wght@400;500;600;700&display=swap\"></noscript>\n    <link rel=\"preload\" as=\"image\" href=\"" + assets + "/profile.webp\" fetchpriority=\"high\">\n    " + head + "\n  </head>\n  <body data-sveltekit-preload-data=\"hover\">\n    <div style=\"display: contents\">" + body + "</div>\n  </body>\n</html>\n",
		error
	},
	version_hash: "yz8iny"
};

export async function get_hooks() {
	let handle;
	let handleFetch;
	let handleError;
	let handleValidationError;
	let init;
	

	let reroute;
	let transport;
	

	return {
		handle,
		handleFetch,
		handleError,
		handleValidationError,
		init,
		reroute,
		transport
	};
}

export { set_assets, set_building, set_manifest, set_prerendering, set_private_env, set_public_env, set_read_implementation };
