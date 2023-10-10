<script>
    import { Alert } from 'flowbite-svelte';
    import { Toast } from 'flowbite-svelte';
    import { FireOutline } from 'flowbite-svelte-icons';
</script>

  
  <div>
    <div>
        <Alert>
          <span class="font-medium">Info alert!</span>
          <h1 class="text-xl">Welcome to SvelteKit Successfully run the app!</h1>
        </Alert>   
      </div>
      <div class="flex justify-center mt-2">
        <Toast>
            <FireOutline slot="icon" class="w-5 h-5 text-primary-500 bg-primary-100 dark:bg-primary-800 dark:text-primary-200" />
            <p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
        </Toast>
    </div>
  </div>
 