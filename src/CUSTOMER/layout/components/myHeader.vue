<template>
  <header
    class="sticky top-0 z-20 border-b border-zinc-300 bg-zinc-100 py-2 shadow-sm dark:border-zinc-600 dark:bg-zinc-800"
  >
    <div class="mx-auto flex px-3">
      <a href="/" class="mr-auto block">
        <strong class="flex items-center gap-2">
          <img :src="logo" alt="LOGO" height="36" class="block h-9" />
          <span class="text-lg">{{ BRAND }}</span>
        </strong>
      </a>

      <div class="fixed right-0 top-0 z-50 md:hidden mt-2">
        <button @click="isOpen = !isOpen" class="relative h-8 w-8 focus:outline-none">
          <span class="sr-only">isOpen main menu</span>
          <div
            class="absolute left-1/2 top-1/2 block w-5 -translate-x-1/2 -translate-y-1/2 transform"
          >
            <span
              aria-hidden="true"
              class="absolute block h-0.5 w-5 transform bg-current transition duration-500 ease-in-out"
              :class="{ 'rotate-45': isOpen, ' -translate-y-1.5': !isOpen }"
            ></span>
            <span
              aria-hidden="true"
              class="absolute block h-0.5 w-5 transform bg-current transition duration-500 ease-in-out"
              :class="{ 'opacity-0': isOpen }"
            ></span>
            <span
              aria-hidden="true"
              class="absolute block h-0.5 w-5 transform bg-current transition duration-500 ease-in-out"
              :class="{ '-rotate-45': isOpen, ' translate-y-1.5': !isOpen }"
            ></span>
          </div>
        </button>
      </div>

      <nav
        :class="isOpen ? 'translate-x-0' : 'translate-x-full'"
        class="fixed bottom-0 right-0 top-0 z-10 flex w-full max-w-[150px] flex-col content-center gap-3 bg-zinc-200/95 pt-10 transition-all dark:bg-zinc-900/95 md:static md:w-auto md:max-w-full md:translate-x-0 md:flex-row md:bg-transparent md:pt-0 dark:md:bg-transparent"
      >
        <router-link @click="isOpen = false" class="home-nav-link md:hidden" to="/">
          Home
        </router-link>
        <router-link @click="isOpen = false" class="home-nav-link" to="/TEST"> TEST </router-link>

        <div class="home-nav-link">
          <lang></lang>
        </div>
        <div class="home-nav-link">
          <SwitchDarkMode></SwitchDarkMode>
        </div>
      </nav>
      <Transition>
        <div
          @click="isOpen = false"
          v-if="isOpen"
          class="fixed inset-0 bg-zinc-900/50 backdrop-blur-sm"
        />
      </Transition>
    </div>
  </header>
</template>

<script lang="ts" setup>
import SwitchDarkMode from './switchDarkMode/index.vue'
import lang from './switchLang/index.vue'
import { ref } from 'vue'
import logo from '../../assets/logo.svg'
const BRAND = ref('BASE_CMS')

const isOpen = ref(false)
</script>

<style lang="postcss" scoped>
.brand {
  @apply tracking-wide first-letter:text-xl first-letter:font-bold first-letter:text-primary-400;
}

.home-nav-link {
  @apply transition-colors md:mx-1 md:p-1 px-3;

  &:after {
    @apply mt-2 block border-b border-primary-100 opacity-50 content-[''] dark:border-zinc-500 md:content-none;
  }

  &:hover {
    @apply text-primary-500 dark:text-white;
  }
  &.router-link-exact-active {
    @apply text-primary-200;
  }
}
</style>

<style lang="scss" scoped>
/* we will explain what these classes do next! */
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
