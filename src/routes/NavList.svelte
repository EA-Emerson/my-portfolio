<script>
    export let showModal = false;
    export let isPromo = false;
</script>
{#if showModal}
<div  class:promo={isPromo}>

    <slot>
        
    </slot>
</div>
{/if}
<main>

</main>
<style>

</style>