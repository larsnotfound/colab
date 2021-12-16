<template>
  
  <!-- Body -->
  
  <div class="w-full bg-grayscale-lightgray z-0">
  <div class="max-w-7xl mx-auto z-1">

<!-- Hero section -->

<main class="h-full flex items-center md:p-20">
  <section class="p-10 mb-20">
    <div class="flex order-2">
      <div class="">
        <h3 class="text-6xl md:text-7xl font-bold text-left text-grayscale-darkestgray pt-20">Houdt <span class="font-extrabold text-brandprimary-purple">IT-talent</span> in de regio voor ontwikkeling van Drenthe.</h3>
        <p class="mt-7 mb-7 text-left text-grayscale-darkgray font-regular md:text-xl">
          Tijdens de digitale transitie ondersteunen we onderwijs en bedrijf met de uitdagingen die daarbij komen kijken en zoeken we naar nieuwe technologieën         </p>
        <div class="lg:flex lg:gap-2"></div>
      </div>
    </div>
   <router-link to="/aboutus" class="py-3 px-10 mt-10 rounded-lg hover:bg-grayscale-lightgray hover:text-brandprimary-purple font-bold border hover:border-brandprimary-purple  bg-brandprimary-purple text-grayscale-white border-transparent transition ease-in duration-200 transform hover:-translate-y-1 active:translate-y-0">Lees meer</router-link>
  </section>
</main>
</div>
</div>

<!-- About -->

 <div class="max-w-6xl mx-auto">

<div class="mt-40 mb-40 grid md:grid-cols-2 gap-20 p-10">
    <div class="self-center">
      <div class="text-4xl font-black dark:text-grayscale-white">Werkruimtes, speciaal voor jou.</div>
        <div class="text-lg mt-4 text-grayscale-darkgray dark:text-grayscale-white">Bekijk een volledig overzicht van beschikbare ruimtes die passen bij jouw type activiteit.</div>
    <button class="mt-6 py-3 px-10 rounded-lg hover:bg-grayscale-white hover:text-brandprimary-purple font-bold border hover:border-brandprimary-purple  bg-brandprimary-purple text-grayscale-white border-transparent transition ease-in duration-200 transform hover:-translate-y-1 active:translate-y-0">Lees meer</button>
</div>

<div class="inline-block">
      <img class="bg-cover bg-center rounded-md" src="../assets/aboutimg.png" alt="colab">
    </div>
</div>

<!-- Tegels -->

<h3 class="text-4xl font-black text-left pl-10 text-grayscale-darkestgray">Community</h3>

 <!--          
<div class="grid md:grid-cols-2 gap-6 mb-40 mt-0 sm:grid-cols-1 p-10">

  <router-link to="/aboutus" class="link">
        <div class="relative rounded-lg bg-gradient-to-t from-grayscale-darkestgray">    
          <div>
            <span class="z-10 absolute bottom-20 pl-10 text-4xl font-bold text-grayscale-white">Students</span>
          </div>
            <div>
              <img class="bg-gradient-to-b from-grayscale-darkestgray to-grayscale-white object-cover mix-blend-multiply bg-cover bg-center rounded-md" src="../assets/tegelimg.png" alt="colab">  
            </div>
              <button class="bg-brandprimary-purple hover:bg-brandprimary-lightpurple transition duration-300 ease-out hover:ease-in w-full p-3 rounded-b-lg text-grayscale-white text-right pr-10">Meer info</button>
          </div>
  </router-link>

  
  <router-link to="/aboutus" class="link">
      <div class="relative rounded-lg bg-gradient-to-t from-grayscale-darkestgray"><div>
        
            <span class="z-10 absolute bottom-20 pl-10 text-4xl font-bold text-grayscale-white">Partners</span>
          </div>
            <div>
              <img class="bg-gradient-to-b from-grayscale-darkestgray to-grayscale-white object-cover mix-blend-multiply bg-cover bg-center rounded-md" src="../assets/partners.png" alt="colab">  
            </div>
              <button class="bg-brandprimary-purple hover:bg-brandprimary-lightpurple transition duration-300 ease-out hover:ease-in w-full p-3 rounded-b-lg text-grayscale-white text-right pr-10">Meer info</button>
          </div>
  </router-link>

</div>
-->

<!-- Structured -->

<div class="grid md:grid-cols-2 gap-6 mb-40 sm:grid-cols-1 p-10">

  <router-link to="/aboutus" class="link">
    <div class="flex flex-col rounded-lg min-h-max overflow-hidden bg-grayscale-darkestgray">
      <img class="bg-cover z-0" src="../assets/partners.png">
      <div class="overflow-hidden rounded-lg group aspect-w-2 aspect-h-1 sm:aspect-h-1 sm:aspect-w-1 sm:row-span-2">
        <div
        aria-hidden="true"
        class="opacity-50 z-20 bg-gradient-to-b from-transparent to-grayscale-darkestgray"
        ></div>
        <div class="items-end p-6 flex">
          <div>
            <h3 class="font-semibold text-grayscale-white text-4xl">Studenten</h3>
            </div>
      </div>
         <button class="bg-brandprimary-purple hover:bg-brandprimary-lightpurple transition duration-300 ease-out hover:ease-in w-full p-3 rounded-b-lg text-grayscale-white text-right pr-10">Meer info</button>
      </div>
    </div>
  </router-link>

</div>

<!-- Evenementen-->

<h3 class="text-4xl font-black text-left pl-10 text-grayscale-darkestgray">Evenementen</h3>

<div class="grid md:grid-cols-3 gap-6 mb-20 sm:grid-cols-1 pb-20 p-10">

  <router-link to="/aboutus" class="link">
        <div class="relative rounded-lg bg-gradient-to-t from-grayscale-darkestgray">    
          <div>
            <span class="z-10 absolute bottom-28 pl-10 text-4xl font-bold text-grayscale-white">Blockchain</span>
            <span class="z-10 absolute bottom-14 pl-10 text-xl text-grayscale-white">28 december 2021<br>Colab block 2</span>
          </div>
            <div>
              <img class="bg-gradient-to-b from-grayscale-darkestgray to-grayscale-white object-cover mix-blend-multiply bg-cover bg-center rounded-md" src="../assets/tegelimg.png" alt="colab">  
            </div>
              <button class="bg-brandprimary-purple hover:bg-brandprimary-lightpurple transition duration-300 ease-out hover:ease-in w-full p-3 rounded-b-lg text-grayscale-white text-right pr-10">Meer info</button>
          </div>
  </router-link>

    <router-link to="/aboutus" class="link">
        <div class="relative rounded-lg bg-gradient-to-t from-grayscale-darkestgray">    
          <div>
            <span class="z-10 absolute bottom-28 pl-10 text-4xl font-bold text-grayscale-white">Blockchain</span>
            <span class="z-10 absolute bottom-14 pl-10 text-xl text-grayscale-white">28 december 2021<br>Colab block 2</span>
          </div>
            <div>
              <img class="bg-gradient-to-b from-grayscale-darkestgray to-grayscale-white object-cover mix-blend-multiply bg-cover bg-center rounded-md" src="../assets/tegelimg.png" alt="colab">  
            </div>
              <button class="bg-brandprimary-purple hover:bg-brandprimary-lightpurple transition duration-300 ease-out hover:ease-in w-full p-3 rounded-b-lg text-grayscale-white text-right pr-10">Meer info</button>
          </div>
  </router-link>
  
</div>


<!-- Subtitle-->

<section class="container mx-auto px-10 sm:px-24 lg:px-52 bg-white">

    <div class="pb-20 flex justify-center">

      <div class="">
        <h3 class="text-6xl md:text-6xl leading-snug font-bold text-left text-grayscale-darkestgray">Wij <span class="font-extrabold text-brandprimary-purple">colabben</span> met:</h3>
        <div class="items-center justify-center mt-4 lg:flex lg:gap-2"></div>
      </div>
    </div>
  </section>


<!-- Logo grid -->

   <div class="flex items-center justify-center">
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 m-auto pb-20 filter grayscale hover:grayscale-0">
    
    <div class="">  
      <img class="h-44 p-4 bg-grayscale-lightgray rounded" src="../assets/NHL.png" alt="logo">  
    </div>

    <div class="">  
      <img class="h-44 p-4 bg-grayscale-lightgray rounded" src="../assets/Rovecom.png" alt="logo-tvm">  
    </div>

    <div class="">  
      <img class="h-44 p-4 bg-grayscale-lightgray rounded" src="../assets/Unigarant.png" alt="logo-tvm">  
    </div>

    <div class="">  
      <img class="h-44 p-4 bg-grayscale-lightgray rounded" src="../assets/UWV.png" alt="logo-tvm">  
    </div>

        <div class="">  
      <img class="h-44 p-4 bg-grayscale-lightgray rounded" src="../assets/TVM.png" alt="logo-tvm">  
    </div>

   </div>  
</div>

</div>
</template>  