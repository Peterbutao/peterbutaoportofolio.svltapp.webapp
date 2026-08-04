
import root from '../root.js';
import { set_building, set_prerendering } from '__sveltekit/environment';
import { set_assets } from '$app/paths/internal/server';
import { set_manifest, set_read_implementation } from '__sveltekit/server';
import { set_private_env, set_public_env } from '../../../node_modules/@sveltejs/kit/src/runtime/shared-server.js';

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
		app: ({ head, body, assets, nonce, env }) => "<!doctype html>\n<html lang=\"en\">\n  <head>\n    <meta charset=\"utf-8\" />\n    <link rel=\"icon\" href=\"" + assets + "/favicon.png\" />\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\" />\n    <title>Peter Butao Portfolio</title>\n    <meta name=\"description\" content=\"Peter Butao's professional portfolio showcasing projects, experience, and services.\" />\n    <meta name=\"keywords\" content=\"Peter Butao, portfolio, web development, Svelte, AI, SEO\" />\n    <meta name=\"author\" content=\"Peter Butao\" />\n    <!-- Open Graph -->\n    <meta property=\"og:title\" content=\"Peter Butao Portfolio\" />\n    <meta property=\"og:description\" content=\"Explore Peter Butao's projects and services.\" />\n    <meta property=\"og:type\" content=\"website\" />\n    <meta property=\"og:url\" content=\"https://peterbutao.pages.dev\" />\n    <meta property=\"og:image\" content=\"https://peterbutao.pages.dev/static/profile.png\" />\n    <!-- Twitter Card -->\n    <meta name=\"twitter:card\" content=\"summary_large_image\" />\n    <meta name=\"twitter:title\" content=\"Peter Butao Portfolio\" />\n    <meta name=\"twitter:description\" content=\"Explore Peter Butao's projects and services.\" />\n    <meta name=\"twitter:image\" content=\"https://peterbutao.pages.dev/static/profile.png\" />\n    <!-- JSON-LD Structured Data -->\n    <script type=\"application/ld+json\">\n    {\n      \"@context\": \"https://schema.org\",\n      \"@type\": \"Person\",\n      \"name\": \"Peter Butao\",\n      \"url\": \"https://peterbutao.pages.dev\",\n      \"sameAs\": [\n        \"https://github.com/PeterButao\",\n        \"https://www.linkedin.com/in/peterbutao\"\n      ],\n      \"jobTitle\": \"Software Engineer\",\n      \"worksFor\": {\n        \"@type\": \"Organization\",\n        \"name\": \"Self-Employed\"\n      }\n    }\n    </script>\n    <link rel=\"preconnect\" href=\"https://fonts.googleapis.com\">\n    <link rel=\"preconnect\" href=\"https://fonts.gstatic.com\" crossorigin>\n    <link href=\"https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;600;700&family=Inter:wght@400;500;600;700&display=swap\" rel=\"stylesheet\">\n    " + head + "\n  </head>\n  <body data-sveltekit-preload-data=\"hover\">\n    <div style=\"display: contents\">" + body + "</div>\n  </body>\n</html>\n",
		error: ({ status, message }) => "<!doctype html>\n<html lang=\"en\">\n  <head>\n    <meta charset=\"utf-8\" />\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\" />\n    <title>" + status + " — Something went wrong</title>\n    <link rel=\"preconnect\" href=\"https://fonts.googleapis.com\">\n    <link rel=\"preconnect\" href=\"https://fonts.gstatic.com\" crossorigin>\n    <link href=\"https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;700&family=Inter:wght@400;600&display=swap\" rel=\"stylesheet\">\n    <style>\n      * { margin: 0; padding: 0; box-sizing: border-box; }\n      html, body { height: 100%; }\n      body {\n        font-family: 'Inter', sans-serif;\n        background:\n          radial-gradient(120% 90% at 12% 0%, #fff8d6 0%, transparent 55%),\n          radial-gradient(120% 90% at 90% 100%, #fff1bd 0%, transparent 50%),\n          #FAFAF8;\n        color: #0D0D0D;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        overflow: hidden;\n        position: relative;\n      }\n\n      .blobs { position: fixed; inset: 0; overflow: hidden; pointer-events: none; }\n      .blob {\n        position: absolute;\n        border-radius: 50%;\n        filter: blur(60px);\n        animation: drift 18s ease-in-out infinite alternate;\n      }\n      .b1 { top: -10%; left: -8%; width: 300px; height: 300px; background: #ffcc00; opacity: 0.55; }\n      .b2 { top: 10%; right: -10%; width: 340px; height: 340px; background: #ffd43b; opacity: 0.45; animation-delay: -8s; animation-duration: 24s; }\n      .b3 { bottom: -12%; left: 24%; width: 360px; height: 360px; background: #ffe066; opacity: 0.4; animation-delay: -4s; animation-duration: 14s; }\n\n      @keyframes drift {\n        0%   { transform: translate3d(0, 0, 0) scale(1); }\n        50%  { transform: translate3d(24px, -30px, 0) scale(1.12); }\n        100% { transform: translate3d(-18px, 22px, 0) scale(0.95); }\n      }\n\n      .card {\n        position: relative;\n        z-index: 1;\n        background: rgba(250, 250, 248, 0.6);\n        backdrop-filter: blur(18px) saturate(150%);\n        -webkit-backdrop-filter: blur(18px) saturate(150%);\n        border: 1px solid rgba(255, 204, 0, 0.35);\n        border-radius: 18px;\n        box-shadow: inset 0 0 120px rgba(255, 204, 0, 0.08), 0 24px 60px rgba(0, 0, 0, 0.10);\n        max-width: 520px;\n        width: calc(100% - 48px);\n        padding: 52px 36px;\n        text-align: center;\n        transform-style: preserve-3d;\n        will-change: transform;\n      }\n\n      .eyebrow {\n        font-size: 0.65rem;\n        font-weight: 600;\n        letter-spacing: 0.24em;\n        text-transform: uppercase;\n        color: #6B7280;\n      }\n\n      .code-wrap { margin: 16px 0 8px; }\n      .code {\n        font-family: 'Space Grotesk', sans-serif;\n        font-size: clamp(6rem, 24vw, 12rem);\n        font-weight: 700;\n        line-height: 1;\n        letter-spacing: 0.02em;\n        color: transparent;\n        -webkit-text-stroke: 3px #0D0D0D;\n        text-shadow: 10px 12px 0 #FFCC00;\n      }\n\n      h1 {\n        font-family: 'Space Grotesk', sans-serif;\n        font-size: clamp(1.3rem, 4.5vw, 1.9rem);\n        letter-spacing: 0.1em;\n        margin-bottom: 10px;\n      }\n\n      p {\n        color: #6B7280;\n        font-size: 0.9rem;\n        line-height: 1.7;\n      }\n\n      a {\n        display: inline-block;\n        margin-top: 26px;\n        background: #0D0D0D;\n        color: #FAFAF8;\n        text-decoration: none;\n        font-weight: 700;\n        font-size: 0.85rem;\n        letter-spacing: 0.14em;\n        border: 1.5px solid #0D0D0D;\n        border-radius: 7px;\n        padding: 14px 40px;\n        transition: background 0.2s, color 0.2s;\n      }\n\n      a:hover {\n        background: #FFCC00;\n        color: #0D0D0D;\n        border-color: #FFCC00;\n      }\n\n      .foot {\n        position: fixed;\n        bottom: 18px;\n        width: 100%;\n        text-align: center;\n        font-size: 0.6rem;\n        letter-spacing: 0.2em;\n        text-transform: uppercase;\n        color: #9aa0a6;\n        z-index: 2;\n      }\n\n      @media (prefers-reduced-motion: reduce) {\n        .blob { animation: none; }\n      }\n    </style>\n  </head>\n  <body>\n    <div class=\"blobs\" aria-hidden=\"true\">\n      <div class=\"blob b1\"></div>\n      <div class=\"blob b2\"></div>\n      <div class=\"blob b3\"></div>\n    </div>\n\n    <div class=\"card\" id=\"card\">\n      <p class=\"eyebrow\">SYSTEM STATUS</p>\n      <div class=\"code-wrap\"><div class=\"code\">" + status + "</div></div>\n      <h1>Something went wrong</h1>\n      <p>" + message + "</p>\n      <a href=\"/\">BACK TO HOME</a>\n    </div>\n\n    <p class=\"foot\">PETER RODRIGUES BUTAO &nbsp;·&nbsp; &copy; <span id=\"year\"></span></p>\n\n    <script>\n      (function () {\n        document.getElementById('year').textContent = new Date().getFullYear();\n\n        var card = document.getElementById('card');\n        if (!card) return;\n\n        card.addEventListener('mousemove', function (e) {\n          var r = card.getBoundingClientRect();\n          var rx = ((e.clientY - r.top - r.height / 2) / r.height) * 8;\n          var ry = ((e.clientX - r.left - r.width / 2) / r.width) * -8;\n          card.style.transform =\n            'perspective(900px) rotateX(' + rx + 'deg) rotateY(' + ry + 'deg)';\n        });\n\n        card.addEventListener('mouseleave', function () {\n          card.style.transform = 'perspective(900px) rotateX(0deg) rotateY(0deg)';\n        });\n      })();\n    </script>\n  </body>\n</html>\n"
	},
	version_hash: "160wjkq"
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
