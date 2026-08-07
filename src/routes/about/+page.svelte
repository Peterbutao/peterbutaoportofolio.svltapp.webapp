<script lang="ts">
  import Seo from '$lib/components/Seo.svelte';
  import About from '$lib/components/About.svelte';
  import { generatePersonSchema, generateBreadcrumbSchema } from '$lib/utils/seo';
  import { siteConfig } from '$lib/config/site';
</script>

<Seo
  path="/about"
  title="About Peter Rodrigues Butao — M&E, Project Development & Web Development"
  description="Learn about Peter Rodrigues Butao: a communications and stakeholder engagement professional with a monitoring & evaluation background, based in Lilongwe, Malawi, with 5+ years supporting education, agriculture and community development programmes."
  keywords={[
    'Peter Rodrigues Butao profile',
    'M&E Consultant biography',
    'Project Development Specialist Lilongwe',
    'Monitoring and Evaluation Malawi'
  ]}
  schema={[
    generatePersonSchema(),
    generateBreadcrumbSchema([
      { name: 'Home', url: `${siteConfig.url}/` },
      { name: 'About', url: `${siteConfig.url}/about` }
    ])
  ]}
/>

<About />