<script lang="ts">
  import { siteConfig } from '$lib/config/site';
  import { absoluteUrl } from '$lib/utils/seo';

  interface SeoProps {
    title: string;
    description: string;
    path?: string;
    type?: 'website' | 'article';
    image?: string;
    keywords?: string[];
    publishedTime?: string;
    modifiedTime?: string;
    schema?: Array<Record<string, unknown>>;
    noIndex?: boolean;
  }

  let {
    title,
    description,
    path = '/',
    type = 'website',
    image,
    keywords = [],
    publishedTime,
    modifiedTime,
    schema = [],
    noIndex = false
  }: SeoProps = $props();

  const absUrl = $derived(absoluteUrl(path));
  const fullTitle = $derived(`${title} | ${siteConfig.name}`);
  const imageUrl = $derived(image ? absoluteUrl(image) : `${siteConfig.url}/profile.png`);
  const robots = $derived(noIndex ? 'noindex, nofollow' : 'index, follow');
  const keywordsContent = $derived(keywords.join(', '));
</script>

<svelte:head>
  <title>{fullTitle}</title>
  <meta name="description" content={description} />
  {#if keywords.length}
    <meta name="keywords" content={keywordsContent} />
  {/if}
  <meta name="robots" content={robots} />
  <link rel="canonical" href={absUrl} />

  <!-- Open Graph -->
  <meta property="og:type" content={type} />
  <meta property="og:url" content={absUrl} />
  <meta property="og:title" content={fullTitle} />
  <meta property="og:description" content={description} />
  <meta property="og:image" content={imageUrl} />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  <meta property="og:image:alt" content={description} />
  <meta property="og:site_name" content={siteConfig.name} />
  <meta property="og:locale" content="en_MW" />

  {#if type === 'article'}
    <meta property="article:published_time" content={publishedTime} />
    <meta property="article:modified_time" content={modifiedTime || publishedTime || undefined} />
    <meta property="article:author" content={siteConfig.name} />
  {/if}

  {#each schema as item}
    <script type="application/ld+json">{JSON.stringify(item)}</script>
  {/each}
</svelte:head>