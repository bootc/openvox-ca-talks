<script setup lang="ts">
import mark from '../assets/openvox-mark-white.svg?url'
</script>

<!-- Title slide: ink background, content on the left, OpenVox mark on the right. -->
<template>
  <div class="slidev-layout cover ov-dark h-full grid grid-cols-[1fr_auto] items-center gap-8">
    <div class="ov-cover-content">
      <slot />
    </div>
    <img :src="mark" alt="OpenVox logo" class="h-64 w-auto">
  </div>
</template>

<style scoped>
.ov-cover-content :deep(h1) {
  @apply text-7xl;
}

.ov-cover-content :deep(h1)::after {
  @apply hidden;
}

.ov-cover-content :deep(h2) {
  @apply text-3xl font-400 mt-2 opacity-85;
}

/* The orange rule goes under the subtitle rather than the title. */
.ov-cover-content :deep(h2)::after {
  content: '';
  @apply block w-24 h-1.5 mt-6 rounded-full;
  background: var(--ov-orange);
}
</style>
