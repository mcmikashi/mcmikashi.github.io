<script lang="ts">
  import { page } from '$app/stores';
</script>

<div class="mx-auto max-w-page">
  <h1 class="text-4xl font-bold mt-8">Oups !</h1>
  <p class="py-4 text-xl">
    {#if $page.status === 404}
      Nous avons cherché partout, mais la page que vous demandez est introuvable. Désolé !
    {:else}
      Une erreur inattendue s'est produite.
    {/if}
  </p>
</div>