<script setup lang="ts">
import mark from '../assets/openvox-mark-black.svg?url'
</script>

<!-- Content slide: plain background with a small OpenVox mark in the corner. -->
<template>
  <div class="slidev-layout default">
    <slot />
    <img :src="mark" alt="" aria-hidden="true" class="absolute right-8 bottom-6 h-8 w-auto opacity-80">
  </div>
</template>
