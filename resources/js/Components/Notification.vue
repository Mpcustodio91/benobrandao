<template>
  <div class="toasts-top-right fixed" v-if="toast && showNotification">
    <div
      class="toast bg-success fade show"
      role="alert"
      aria-live="assertive"
      aria-atomic="true"
    >
      <div class="toast-header">
        <strong class="mr-auto">Sucesso</strong>
        <small></small>
        <button type="button" class="ml-2 mb-1 close"><span>×</span></button>
      </div>
      <div class="toast-body">
        {{ toast.message }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, ref, onMounted } from "vue";

const props = defineProps({
  toast: Object,
});

const showNotification = ref(false);

onMounted(() => {
  showNotification.value = true;
  setTimeout(() => (showNotification.value = false), 2000);
});
</script>

<style>
</style>