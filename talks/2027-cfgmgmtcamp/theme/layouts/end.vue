<script setup lang="ts">
import logo from '../assets/openvox-logo-horizontal-white.svg?url'
</script>

<!--
  Closing slide: OpenVox logo, the slide's own content, then the logo
  attribution that CC BY-SA 4.0 requires wherever the logos are used.
-->
<template>
  <div class="slidev-layout end ov-dark h-full flex flex-col items-center text-center">
    <img :src="logo" alt="OpenVox" class="h-16 w-auto mt-4">
    <div class="ov-end-content my-auto">
      <slot />
    </div>
    <p class="text-xs opacity-60 !m-0">
      OpenVox logos © 2025 Romain Tartière (concept) and André Ringel (final touches),
      licensed <a href="https://creativecommons.org/licenses/by-sa/4.0/">CC BY-SA 4.0</a>
    </p>
  </div>
</template>

<style scoped>
.ov-end-content :deep(h1)::after {
  @apply mx-auto;
}
</style>
