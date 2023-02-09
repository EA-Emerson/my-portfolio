<script>
    export let project;
    export let showProject = false;
    export let isPromo = false;
</script>

{#if showProject}
<div  class:promo={isPromo} class="">

    <slot>
        
    </slot>
</div>
{/if}
<main>
    
</main>