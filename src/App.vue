<template>
  <div>
         <div class="block">
           <navbar class="relative" />
         </div>
    <RouterView />
  </div>
</template>

<script>
import { createClient, provideClient } from '@urql/vue';
import navbar from '@/views/Navbar.vue'
export default {
  components: {
    navbar
  },
  setup() {
    const client = createClient({
      url: 'http://38.242.229.113:8055/graphql',
    });
    provideClient(client)
  }
}
</script>

<style>
</style>