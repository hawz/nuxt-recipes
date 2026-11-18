<script setup lang="ts"></script>

<template>
  <header class="py-4 border-b">
    <nav class="flex container items-center">
      <nuxt-link to="/" class="flex gap-1 items-center">
        <NuxtImg src="/icon-green.png" alt="" width="56" height="56" format="webp" />
        <span class="text-3xl font-bold">Nuxtcipes</span>
      </nuxt-link>
      <ul class="flex gap-6 ml-auto text-xl font-bold capitalize">
        <li>
          <!-- <a href="/">Home</a> -->
          <nuxt-link to="/">Home</nuxt-link>
        </li>
        <li>
          <!-- <a href="about">About</a> -->
          <nuxt-link to="/about">About</nuxt-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style scoped></style>
