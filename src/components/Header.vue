<template>
    <div class="flex items-center flex-wrap order-2 align-right p-10 bg-grayscale-white dark:bg-grayscale-darkblue justify-between shadow">
        <router-link to="/">
            <svg class="h-8 mr-10 transition duration-500 ease-in-out transform hover:-translate-1 hover:scale-110 dark:fill-grayscale-white" id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 280.2 161.7"><path class="cls-1" d="M258.1,27.8A80.85,80.85,0,0,0,116.5,81.1a80.06,80.06,0,0,0,5.9,30.2,53,53,0,1,1-11.9-72.6L127,16.3A79.83,79.83,0,0,0,78.7.3,81,81,0,0,0-2.1,81.1c0,44.5,36.3,80.9,80.8,80.9A80.62,80.62,0,0,0,138,136.1,80.87,80.87,0,0,0,258.1,27.8Zm-16.4,82.4a52.71,52.71,0,1,1,8.7-28.9A52.41,52.41,0,0,1,241.7,110.2Z" transform="translate(2.1 -0.3)"/></svg>
        </router-link>

        <nav class="align-right">
            <ul>
                <router-link to="/aboutus" class="block md:inline-block px-5 py-3 no-underline text-grey-darkest dark:text-white hover:text-blue-200 dark:text-grayscale-white">About us</router-link>
                <router-link to="/cases" class="block md:inline-block px-5 py-3 no-underline text-grey-darkest dark:text-white hover:text-blue-200 dark:text-grayscale-white">Cases</router-link>
                <router-link to="/location" class="block md:inline-block px-5 py-3 no-underline text-grey-darkest dark:text-white hover:text-blue-200 dark:text-grayscale-white">Location</router-link>
                <router-link to="/contact" class="block md:inline-block px-5 py-3 no-underline text-grey-darkest dark:text-white hover:text-blue-200 dark:text-grayscale-white">Contact</router-link>
            </ul>
        </nav>
    </div>
</template>