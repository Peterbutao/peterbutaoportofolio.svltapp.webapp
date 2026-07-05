<script>
  import Landingpage from '$lib/components/Landingpage.svelte';
  import Organisations from '$lib/components/Organisations.svelte';
  import Projects from '$lib/components/Projects.svelte';
  import Experience from '$lib/components/Experience.svelte';
  import Community from '$lib/components/Community.svelte';
  import Consultant from '$lib/components/Consultant.svelte';
  import Services from '$lib/components/Services.svelte';
  import Contacts from '$lib/components/Contacts.svelte';
</script>

<div class="page-wrapper">
  <section id="hero">
    <Landingpage />
  </section>
  
  <section id="organisations" class="page-section">
    <Organisations />
  </section>
  
  <section id="projects" class="page-section">
    <Projects />
  </section>

  <section id="community" class="page-section">
    <Community />
  </section>

  <section id="experience" class="page-section">
    <Experience />
  </section>
  <section id="consultant" class="page-section">
    <Consultant />
  </section>
  <section id="services" class="page-section">
    <Services />
  </section>
  <section id="contact" class="page-section">
    <Contacts />
  </section> 




</div>

<style>
  .page-wrapper {
    background: var(--wt);
    background-image:
      radial-gradient(ellipse 60% 50% at 90% 10%, rgba(255,204,0,0.08) 0%, transparent 60%),
      radial-gradient(ellipse 40% 30% at 10% 80%, rgba(255,204,0,0.05) 0%, transparent 50%);
  }
</style>
