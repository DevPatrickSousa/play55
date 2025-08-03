<script setup lang="ts">
const showContactModal = ref(false)
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <header>
      <AppHeader @show-contact-modal="showContactModal = true" />
    </header>
    
    <main class="flex-1">
      <slot />
    </main>
    
    <footer>
      <AppFooter />
    </footer>
    
    <ProductsModalsContactModal
      :is-open="showContactModal"
      @close="showContactModal = false"
    />
  </div>
</template>

 