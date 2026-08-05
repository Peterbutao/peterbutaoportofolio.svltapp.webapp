import adapter from '@sveltejs/adapter-cloudflare';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter(),
    prerender: {
      handleMissingId: 'warn',
      handleHttpError: ({ path, referrer, message }) => {
        if (path.startsWith('/UI-designs/') || /\.(pdf|webp|png|jpe?g|gif|svg)$/i.test(path)) {
          console.warn(`Skipping missing asset: ${path} (linked from ${referrer})`);
          return;
        }
        throw new Error(message);
      }
    },
  },
};

export default config;
