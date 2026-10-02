<script setup lang="ts">
import mark from '../assets/openvox-mark-black.svg?url'
</script>

<!-- Section divider: solid orange with a large, faint OpenVox mark. -->
<template>
  <div class="slidev-layout section h-full grid items-center relative overflow-hidden">
    <img :src="mark" alt="" aria-hidden="true" class="absolute -right-12 -bottom-12 h-[120%] w-auto opacity-10 pointer-events-none">
    <div class="relative">
      <slot />
    </div>
  </div>
</template>
