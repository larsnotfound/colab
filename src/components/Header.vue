<template>
  <nav class="shadow-sm pt-5 pb-5 relative flex flex-wrap items-center justify-between px-2 py-3">
    <div class="container px-4 mx-auto flex flex-wrap items-baseline justify-between">
      <div class="w-full relative flex justify-between lg:w-auto  px-4 lg:static lg:block lg:justify-start">
        
        <a href="/">
        <svg class="h-8 mr-10 transition duration-500 ease-in-out transform hover:-translate-1 hover:scale-110 dark:fill-grayscale-white" id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 280.2 161.7"><path class="cls-1" d="M258.1,27.8A80.85,80.85,0,0,0,116.5,81.1a80.06,80.06,0,0,0,5.9,30.2,53,53,0,1,1-11.9-72.6L127,16.3A79.83,79.83,0,0,0,78.7.3,81,81,0,0,0-2.1,81.1c0,44.5,36.3,80.9,80.8,80.9A80.62,80.62,0,0,0,138,136.1,80.87,80.87,0,0,0,258.1,27.8Zm-16.4,82.4a52.71,52.71,0,1,1,8.7-28.9A52.41,52.41,0,0,1,241.7,110.2Z" transform="translate(2.1 -0.3)"/></svg>
        </a>
        
        <button class="text-white cursor-pointer text-xl leading-none px-3 py-1  border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none" type="button" v-on:click="toggleNavbar()">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 stroke-grayscale-darkestgray dark:stroke-grayscale-white" fill="none" viewBox="0 0 24 24" stroke="Currentcolor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" /></svg>
        </button>

      </div>
      <div v-bind:class="{'hidden': !showMenu, 'flex': showMenu}" class="lg:flex lg:flex-grow items-center ease-in-out">
        <ul class="flex flex-col lg:flex-row list-none ml-auto transition-all">
          <li class="nav-item relative">
                <router-link to="/about" class="block md:inline-block px-5 py-3 mt-10 no-underline font-medium text-grey-darkest dark:text-white hover:text-blue-200 dark:text-grayscale-white">About</router-link>
                <router-link to="/spaces" class="block md:inline-block px-5 py-3 no-underline font-medium text-grey-darkest dark:text-white hover:text-blue-200 dark:text-grayscale-white">Spaces</router-link>
                <router-link to="/events" class="block md:inline-block px-5 py-3 no-underline font-medium text-grey-darkest dark:text-white hover:text-blue-200 dark:text-grayscale-white">Events</router-link>
                <router-link to="/focusarea" class="block md:inline-block px-5 py-3 no-underline font-medium text-grey-darkest dark:text-white hover:text-blue-200 dark:text-grayscale-white">Focus areas</router-link>
                <router-link to="/contact" class="block md:inline-block px-5 py-3 no-underline font-medium text-grey-darkest dark:text-white hover:text-blue-200 dark:text-grayscale-white">Contact</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style>
.router-link-active {
  border-bottom: 2px solid #8B1AF9;
    }

</style>

<script>
export default {
  name: "pink-navbar",
  data() {
    return {
      showMenu: false
    }
  },
  methods: {
    toggleNavbar: function(){
      this.showMenu = !this.showMenu;
    },
    
    
  }
}
</script>