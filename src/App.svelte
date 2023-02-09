<script>
  import Layout from "./routes/Layout.svelte";

  import Navbar from "./routes/Navbar.svelte";
  import Page from "./routes/+page.svelte";
  import Project from "./routes/Project.svelte";
  import About from "./routes/About.svelte";

  import Router from 'svelte-spa-router';
  import routes from "./routes";
  import ProjectDetails from "./routes/ProjectDetails.svelte";
  import Contact from "./routes/Contact.svelte";
</script>
<Navbar />
<main>
  <!-- <Navbar /> -->

  <!-- <Router {routes}> -->
    <Page />
    <About />
    <Project/>
    <Contact />
    <!-- <ProjectDetails /> -->
    <!-- </Router> -->
</main>

<style lang="postcss">
  
</style>
